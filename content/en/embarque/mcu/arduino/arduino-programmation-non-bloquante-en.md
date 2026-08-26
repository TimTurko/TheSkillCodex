---
title: Non-blocking programming
type: tuto
phases:
  - preuve-de-concept
  - integration-et-tests
tags:
  - eee
  - tuto
prerequis:
  - arduino-prise-en-main-en
  - arduino-temporisation-en
  - machine-a-etats-en
  - arduino-machine-a-etats-en
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
source_fr: embarque/mcu/arduino/arduino-programmation-non-bloquante.md
source_sha256: 11e7949aae5e523804d2cea16ff1a10f14f5940ecf35c17980d78aa79108ff8b
---

**Non-blocking programming** is a **way of structuring** an embedded program so that the main loop **never** stops. Instead of waiting with `delay()`, each task moves forward a little on every pass through `loop()` and then hands control back: the system can therefore carry out **several activities at once** and stay responsive. It is not a function to call but an **architectural discipline**, built on [[arduino-temporisation-en|timing with `millis()`]] and on [[machine-a-etats-en|state machines]].

![Two main loops compared. On the left, the blocking approach: the loop alternates a short action and a long delay() during which the whole program is frozen, and a button pressed during the delay() is only seen at the end. On the right, the non-blocking approach: the loop runs continuously and hands the work out to small tasks, each run in turn, and a button pressed is seen on the very next pass.|680](/ressources/img/arduino-programmation-non-bloquante/bloquant-vs-non-bloquant.svg)

## What is it for?

`delay()` freezes **the whole** program, not just the task that is waiting: during a `delay(500)` the board stops reading its button and misses its readings. As long as a sketch does one thing, nobody notices. The moment it does two, you hit the wall.

The design rule that follows fits in one sentence: *no function may block, and `loop()` must always be able to come round again*. Why that discipline holds for every embedded program, what it buys you and where it stops, are covered by the cross-cutting concept page [[programmation-non-bloquante-en|non-blocking programming]]. Here it is put to work in C++ — from the [[preuve-de-concept-en|proof of concept]] onwards, at the first setup that combines several functions.

## Step by step

Four steps: state the rule, make each task self-contained, assemble them in `loop()`, then learn to refactor blocking code.

### 1. Ban `delay()`, think in tasks

The mental switch: what the system "does" is cut into **tasks**, and each task becomes a **function called on every pass** through `loop()`, which acts if the moment has come and **hands control straight back**. No function waits any more. `loop()` is no longer a sequence of actions but a list of tasks you run through very quickly.

### 2. Give each task its own time and its own state

A self-contained task carries what it needs:

- **time** — if it has to fire periodically, it keeps its own `unsigned long` variable and uses the `millis() - dernier >= intervalle` pattern (see [[arduino-temporisation-en|`millis()`]]);
- **a state** — if it has modes (waiting, running, done), it is a small [[machine-a-etats-en|state machine]] with its own state variable.

Each task is thus a small independent automaton that knows where it stands without blocking anyone.

### 3. Assemble the tasks in `loop()`

`loop()` does nothing but **call each task on every pass**. They coexist without getting in each other's way, because none of them lingers: this is the *cooperative loop* (or *super-loop*).

```cpp
void loop() {
  tacheLED();        // each acts if its moment has come,
  tacheCapteur();    // then hands control straight back
  tacheBouton();
}
```

The order of the calls barely matters as long as each task stays brief: the loop runs tens of thousands of times per second, so all of them are served almost simultaneously.

### 4. Refactor blocking code

To turn a `delay()`-based sketch into a non-blocking one, you deal with each pause in turn. The blocking blinker:

```cpp
void loop() {
  digitalWrite(LED, HIGH);
  delay(500);                 // <- pause: everything is frozen
  digitalWrite(LED, LOW);
  delay(500);
}
```

becomes a task that **remembers the time** instead of waiting:

```cpp
void tacheLED() {
  if (millis() - tLED >= 500) {     // have we waited long enough?
    tLED = millis();
    etatLED = !etatLED;
    digitalWrite(LED, etatLED);
  }
}
```

The refactoring rule: *every `delay()` hides an "wait until such a time has elapsed". You rewrite it as a test on `millis()`, and every "wait until an event arrives" becomes a test on a condition, checked on every pass.*

## Example — a station doing three things at once

A small measurement station has to, all at the same time: blink a status LED (1 Hz), read a sensor at a steady rate (10 Hz) and react to a button with no delay. Three cooperative tasks, none of them blocking.

```cpp
const int LED = 13;
const int CAPTEUR = A0;
const int BOUTON = 2;

unsigned long tLED = 0;
const unsigned long INT_LED = 500;        // blink: 500 ms
bool etatLED = false;

unsigned long tCapteur = 0;
const unsigned long INT_CAPTEUR = 100;    // reading: every 100 ms

bool dernierBouton = HIGH;

void tacheLED() {                          // task 1: blink
  if (millis() - tLED >= INT_LED) {
    tLED = millis();
    etatLED = !etatLED;
    digitalWrite(LED, etatLED);
  }
}

void tacheCapteur() {                      // task 2: read at a steady rate
  if (millis() - tCapteur >= INT_CAPTEUR) {
    tCapteur = millis();
    Serial.println(analogRead(CAPTEUR));
  }
}

void tacheBouton() {                       // task 3: react to a press
  // debouncing left out here for clarity — in production, wrap the read as in arduino-entree-tor
  bool lecture = digitalRead(BOUTON);
  if (dernierBouton == HIGH && lecture == LOW) {   // falling edge
    Serial.println("press!");
  }
  dernierBouton = lecture;
}

void setup() {
  pinMode(LED, OUTPUT);
  pinMode(BOUTON, INPUT_PULLUP);
  Serial.begin(115200);
}

void loop() {
  tacheLED();
  tacheCapteur();
  tacheBouton();
}
```

The three tasks reuse the same `millis()` pattern as in step 4. The `loop()` runs continuously and reviews its three tasks on every pass. The LED blinks, the sensor is read ten times a second, and the button is seen **the instant it is pressed**, because nothing ever stops the loop. Adding a fourth activity (driving a display, listening on the serial port) comes down to writing a fourth task and calling it from `loop()`: the structure absorbs it without a rewrite. The same thing written with `delay()` calls would be unworkable.

![Timeline of the station's three tasks: the LED toggles every 500 ms, the sensor is read every 100 ms, the button is read on every pass through the loop; a press is seen on the next pass. One loop, three rhythms, no waiting.|680](/ressources/img/arduino-programmation-non-bloquante/frise-3-taches.svg)

## Special case — a cooperative scheduler

When the periodic tasks multiply, you factor the `millis()` pattern into a **task table** rather than repeating the test everywhere: each entry ties together a function, its interval and the date of its last call, and `loop()` walks the table.

```cpp
struct Tache { void (*fonction)(); unsigned long intervalle; unsigned long dernier; };

Tache taches[] = {
  { tacheLED,     500, 0 },
  { tacheCapteur, 100, 0 },
};

void loop() {
  unsigned long maintenant = millis();
  for (Tache &t : taches) {
    if (maintenant - t.dernier >= t.intervalle) {
      t.dernier = maintenant;
      t.fonction();
    }
  }
}
```

> [!info] How to read this code
> The `struct Tache` groups three pieces of information per task: **which** function to call, **at what interval**, and **when** it last ran. The `void (*fonction)()` field is a *function pointer*, a slot holding not a number but the address of a function to call (an advanced C++ concept). The `taches[]` array lists every task. The `for (Tache &t : taches)` loop walks them one by one and, for each, notes the date and calls its function if the interval has elapsed. Adding a task then comes down to adding a line to the array: no more tests to copy out.
>
> These three mechanisms — the `struct`, the function pointer and the range-based `for` — are not specific to embedded work: they turn up in any C++ program, and are picked up as reading cues in [[cpp-lire-un-programme-en|reading a program you did not write]].

Worth it beyond a handful of tasks. Below that, the direct calls of step 3 stay easier to read.

## Special case — the limit: towards an RTOS

The cooperative loop rests on the **good behaviour** of every task: it guarantees no **hard deadline**. When a project demands one, you change tools and move to a **real-time operating system** (RTOS): what it buys you and what it costs are covered by the cross-cutting concept page [[programmation-non-bloquante-en|non-blocking programming]].

## Pitfalls

**A `delay()` hiding inside a task.** A single forgotten `delay()` in one function is enough to freeze the whole program. The rule holds for **every** function called from `loop()`, without exception.

**A task that runs too long.** Even without a `delay()`, a task that computes for a long time or waits actively (reading a slow sensor in a loop) blocks the others. In a cooperative design, every task must be **brief** and, if need be, broken into states (see [[machine-a-etats-en|state machine]]).

**Believing this is real parallelism.** It is not: one task runs at a time, very quickly, in sequence. Only [[interruption-en|interrupts]] genuinely run "on top of" the loop.

**Badly typed time variables.** A date from `millis()` stored in an `int` overflows within a few tens of seconds: always `unsigned long` (see the pitfalls in [[arduino-temporisation-en|timing]]).

**Waiting for a reply by blocking.** Watching for a frame or the end of a movement by busy-waiting freezes the loop. You turn the wait into a **test on every pass**: "has the reply arrived? if not, I will come back later".

**Sharing variables between tasks carelessly.** If one task modifies a variable another reads, think about the order of the calls. And if an [[interruption-en|interrupt]] is in the loop, the shared variable has to be `volatile`.

## Where it fits in the project

- **Step 3 of the [[preuve-de-concept-en|proof-of-concept phase]]** — as soon as the setup does more than one thing (measure *and* control *and* signal), structure the code into non-blocking tasks, rather than discovering the blockage at integration.
- **[[integration-et-tests-en|Integration and testing phase]]** — the firmware of the complete system is a set of cooperative tasks (or an RTOS): every function validated on its own becomes a task in the overall program.

Adopting the non-blocking discipline at the first multi-function setup saves you the full rewrite that awaits any sketch built on `delay()` calls, a rewrite that *always* arrives once the project asks for two things at once.

## See also

- [[arduino-temporisation-en|delay() vs millis()]] — the basic tool: non-blocking timing, the building block of every task
- [[machine-a-etats-en|State machine]] — every task with modes is a small state machine (the generic concept)
- [[arduino-machine-a-etats-en|Programming a state machine on Arduino]] — the same concept implemented along the Arduino path
- [[arduino-en|Arduino]] — hub for the Arduino tutorials
- [[arduino-interruptions-en|Interrupts]] — for events the loop cannot catch fast enough
- [[arduino-timers-en|Hardware timers]] — to impose a precise rate on a critical task
- [[programmation-non-bloquante-en|Non-blocking programming]] — the cross-cutting concept: the timing pattern, its twins from one family to the next, and the RTOS boundary
- [[cpp-lire-un-programme-en|Reading a program you did not write]] — the C++ mechanisms of the scheduler above, seen from the reading angle
- [[firmware-en|Firmware]] — the architecture of embedded code and the RTOS horizon (cross-cutting)
