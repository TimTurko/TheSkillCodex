---
title: Multitasking with FreeRTOS on the ESP32
lang: en
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - esp32
prerequis:
  - esp32-en
  - esp32-prise-en-main-en
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
source_fr: embarque/mcu/esp32/esp32-freertos.md
source_sha256: ee3576c05eac0463e1764587e62c34e9cab507bcdcbb442590e9bff99c9beb01
---

**FreeRTOS** is the real-time system at the heart of the ESP32: it lets several **tasks** run "in parallel", each written as a small independent loop, which the scheduler interleaves on one or both processors. This is the speciality of the family. The ESP32 has two cores and a native RTOS. The `loop()` of an Arduino sketch is itself a FreeRTOS task. This page shows how to **create and coordinate your own tasks**. The *why* of an RTOS, and its place on the scale of architectures, are covered in [[firmware-en|firmware]].

![Preemptive scheduling: two FreeRTOS tasks share the processor, the scheduler handing control to the highest-priority ready task and interrupting the running one when it has to|640](/ressources/img/esp32-freertos/ordonnancement.svg)

## What is it for?

Multitasking answers a recurring need: doing **several things at different rates** without tangling them by hand.

- **Separating activities.** Reading a sensor at 10 Hz, refreshing a display at 2 Hz, handling Wi-Fi in the background: each activity becomes a task of its own, instead of a single `loop()` juggling counters.
- **Using both cores.** A heavy computation task can run on one core while the other handles communication, without either getting in the way.
- **Meeting deadlines.** A high-priority task (control loop, safety) goes ahead of the others as soon as it is ready, and preemptive scheduling guarantees its responsiveness.

It is the structured alternative to the cooperative non-blocking loop once the number of activities or the timing constraints grow (see the scale in [[firmware-en|firmware]]).

## The concepts

- **Task** — a function that never ends (`for (;;) { ... }`), run as an independent activity.
- **Preemptive scheduler.** It gives the processor to the **highest-priority ready task**. If a higher-priority task becomes ready, it **interrupts** (preempts) the running one.
- **Priority** — an integer: the higher it is, the further ahead the task goes.
- **`vTaskDelay()`** — the FreeRTOS equivalent of `delay()`, but one that **explicitly hands back control**: during the wait, the other tasks run. That is what makes coexistence possible.
- **Two cores.** On the original ESP32 you can **pin** a task to a core (`xTaskCreatePinnedToCore`) or leave it free.

## Creating a task

A task is a `void f(void *param)` function containing an infinite loop. You launch it with `xTaskCreatePinnedToCore`:

```cpp
void blinkTask(void *param) {
  pinMode(LED_BUILTIN, OUTPUT);
  for (;;) {                                  // infinite loop: never returns
    digitalWrite(LED_BUILTIN, !digitalRead(LED_BUILTIN));
    vTaskDelay(pdMS_TO_TICKS(500));           // yields the CPU for 500 ms
  }
}

void setup() {
  xTaskCreatePinnedToCore(
    blinkTask,       // task function
    "Blink",         // name (debug)
    2048,            // stack size in bytes (ESP-IDF)
    NULL,            // parameter passed to the task
    1,               // priority
    NULL,            // handle (NULL if you do not need one)
    1                // core (0 or 1)
  );
}

void loop() {}       // loop() is itself a task, unused here
```

> [!tip]
> **`vTaskDelay`, not a busy-wait loop.** A task that waits with `while (millis() - t < d) {}` monopolises the CPU and blocks the others. `vTaskDelay(pdMS_TO_TICKS(d))` puts the task to sleep and **frees the processor**: that is the key to coexistence.

## Example — Two independent tasks

Two activities at different rates, genuinely separate: one task blinks a LED every 200 ms, the other reads a sensor and prints it every second. No shared counter, no manual interleaving.

*Wiring: LED on `GPIO16` and sensor on `GPIO34` (see the circuits in [[esp32-gpio-en|configuring the GPIO]]).*

```cpp
const int LED = 16;
const int SENSOR = 34;           // ADC1

void ledTask(void *param) {
  pinMode(LED, OUTPUT);
  for (;;) {
    digitalWrite(LED, !digitalRead(LED));
    vTaskDelay(pdMS_TO_TICKS(200));    // 200 ms
  }
}

void sensorTask(void *param) {
  for (;;) {
    int v = analogRead(SENSOR);
    Serial.print("Sensor: ");
    Serial.println(v);
    vTaskDelay(pdMS_TO_TICKS(1000));   // 1 s
  }
}

void setup() {
  Serial.begin(115200);

  xTaskCreatePinnedToCore(ledTask,    "LED",    2048, NULL, 1, NULL, 1);
  xTaskCreatePinnedToCore(sensorTask, "Sensor", 2048, NULL, 1, NULL, 1);
}

void loop() {}
```

The LED blinks at its own rate, the readings scroll at theirs, without either disturbing the other. Each task is a simple loop, readable on its own. That is the structuring value of the RTOS against a single `loop()` that would have to juggle two timers.

One line per second on the monitor, while the LED beats five times faster:

```
Sensor: 1874
Sensor: 1902
Sensor: 1866
Sensor: 1889
```

The two rates are **independent**: slowing `sensorTask` down to 5 seconds would change nothing about the blinking, and the other way round. That decoupling is what a single `loop()` forces you to build by hand.

## Communicating between tasks

Two tasks must not share a variable without precautions (concurrent access means corrupted data). FreeRTOS provides two tools:

- **Queue.** A *producer* task drops values into it, a *consumer* task takes them out, in order. This is the recommended channel for passing data.
- **Mutex (semaphore)** — a "token" a task takes before touching a shared resource and gives back afterwards, guaranteeing that only one touches it at a time.

```cpp
QueueHandle_t queue;

void producer(void *param) {
  for (;;) {
    int reading = analogRead(34);
    xQueueSend(queue, &reading, portMAX_DELAY);   // put into the queue
    vTaskDelay(pdMS_TO_TICKS(500));
  }
}

void consumer(void *param) {
  int received;
  for (;;) {
    if (xQueueReceive(queue, &received, portMAX_DELAY)) {  // wait for a value
      Serial.print("Received: ");
      Serial.println(received);
    }
  }
}

void setup() {
  Serial.begin(115200);
  queue = xQueueCreate(10, sizeof(int));   // 10 integers
  xTaskCreatePinnedToCore(producer, "Prod",  2048, NULL, 1, NULL, 1);
  xTaskCreatePinnedToCore(consumer, "Consu", 2048, NULL, 1, NULL, 1);
}

void loop() {}
```

## Pitfalls

**A task that never hands back control.** A task loop with no `vTaskDelay` (and no blocking FreeRTOS wait) starves the other tasks and triggers the *task watchdog*. Every task must yield the CPU regularly.

**An unprotected shared variable.** Two tasks writing the same variable without a mutex produce inconsistent values (a race condition). Go through a queue, or protect the access with a mutex.

**A stack that is too small.** A task overflowing its stack crashes (`stack canary` or a reboot). Increase the size (the 3rd argument, in bytes) if the task uses buffers or recursion.

**Returning from the task function.** A task function must **never** return: with no infinite loop, the task ends and can bring the system down. Always `for (;;)`.

**Confusing priority with frequency.** A high priority does not make a task run "more often": it makes it go **ahead** when it is ready. The rate is set by `vTaskDelay`.

**`delay()` versus `vTaskDelay()`.** On the ESP32 Arduino core, `delay()` also yields the CPU (it calls `vTaskDelay`), so it remains acceptable inside a task. But using `vTaskDelay(pdMS_TO_TICKS(...))` makes the intent explicit in a multitasking context.

**`volatile` is not a protection.** The keyword stops the compiler optimising away reads of a variable. It guarantees **neither** atomicity **nor** mutual exclusion. Between two tasks, only a queue or a mutex really protects. `volatile` has its place elsewhere: for a variable shared with an **interrupt** (see [[arduino-interruptions-en|interrupts]]), where it is necessary, and still not sufficient if the access is not atomic.

## Exercises

> [!question] Exercise 1 — One task per core
> Launch two tasks that each print the number of the core they run on, one pinned to core 0, the other to core 1. Check on the [[esp32-serie-en|serial monitor]].
>
> *On a **single-core** variant (C3, C6, H2), pinning to core 1 fails: pass `tskNO_AFFINITY` instead of the core number.*

> [!success]- Answer to exercise 1
> The last argument of `xTaskCreatePinnedToCore` sets the core, and `xPortGetCoreID()` reads it from inside the task.
> ```cpp
> void task(void *param) {
>   for (;;) {
>     Serial.print("Task on core ");
>     Serial.println(xPortGetCoreID());
>     vTaskDelay(pdMS_TO_TICKS(1000));
>   }
> }
>
> void setup() {
>   Serial.begin(115200);
>   xTaskCreatePinnedToCore(task, "T0", 2048, NULL, 1, NULL, 0);  // core 0
>   xTaskCreatePinnedToCore(task, "T1", 2048, NULL, 1, NULL, 1);  // core 1
> }
>
> void loop() {}
> ```
> The two tasks share the same code but print different core numbers, which proves the work really is spread across both cores.

> [!question] Exercise 2 — Protecting a shared counter
> Two tasks increment the same global counter, each at its own rate. Protect the access with a mutex to avoid inconsistencies.

> [!success]- Answer to exercise 2
> You create a mutex, and each task takes it before touching the counter and gives it back afterwards.
> ```cpp
> SemaphoreHandle_t lock;
> volatile int counter = 0;
>
> void increment(void *param) {
>   for (;;) {
>     xSemaphoreTake(lock, portMAX_DELAY);     // exclusive access
>     counter++;
>     int copy = counter;
>     xSemaphoreGive(lock);                     // release
>     Serial.println(copy);
>     vTaskDelay(pdMS_TO_TICKS(300));
>   }
> }
>
> void setup() {
>   Serial.begin(115200);
>   lock = xSemaphoreCreateMutex();
>   xTaskCreatePinnedToCore(increment, "A", 2048, NULL, 1, NULL, 1);
>   xTaskCreatePinnedToCore(increment, "B", 2048, NULL, 1, NULL, 1);
> }
>
> void loop() {}
> ```
> The mutex guarantees that only one task modifies `counter` at a time: the sequence you read is consistent, with no skipped or overwritten values. (A queue would also do, to pass the values without a shared variable.)

## Special case — `loop()` is already a task

On the ESP32 Arduino core you are never "outside the RTOS": the core creates a `loopTask` task that runs `setup()` then `loop()`. Creating your own tasks only **adds** activities alongside that one. So you can adopt multitasking **gradually**: keep `loop()` for the main job, and move out into tasks the activities that deserve their own rate or their own core. This is the direct application of the last rung on the scale in [[firmware-en|firmware]].

## Where it fits in the project

- **Step 4 of the [[preuve-de-concept-en|proof-of-concept phase]].** As soon as the prototype has to run several activities at different rates (acquisition, communication, HMI), structuring it into tasks removes the tangle of an overloaded `loop()` and clarifies the behaviour.
- **Control loops and deadlines.** A high-priority control task, paced by `vTaskDelay`, guarantees a regular control period, isolated from the other processing.

Choosing between a non-blocking loop and an RTOS at the right moment (see [[firmware-en|firmware]]) avoids two traps: an unmanageable `loop()` full of counters, or an RTOS brought in prematurely where a simple cooperative loop would have been enough.

## Going further

- [[firmware-en|Firmware]] — the scale of architectures, from the super-loop to the RTOS: *when* to take the step (cross-cutting).
- [[esp32-arduino-core-en|Programming with the Arduino core]] — why `loop()` is already a task.
- [[esp32-idf-en|Discovering ESP-IDF]] — on the native side, multitasking is explicit from `app_main()` onwards.
- [Espressif FreeRTOS documentation](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/system/freertos.html) — tasks, queues, semaphores, software timers.

## See also

- [[esp32-en|ESP32]] — hub for the ESP32 tutorials
- [[esp32-arduino-core-en|Programming with the Arduino core]] — the layer on top of FreeRTOS
- [[esp32-idf-en|Discovering ESP-IDF]] — the native environment, FreeRTOS end to end
- [[firmware-en|Firmware]] — structuring embedded code, from the super-loop to the RTOS (cross-cutting)
- [[esp32-deep-sleep-en|Deep sleep]] — the other lever on time and energy
