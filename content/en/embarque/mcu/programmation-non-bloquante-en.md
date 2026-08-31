---
title: Non-blocking programming
lang: en
type: notion
tags:
  - eee
  - notion
prerequis:
  - microcontroleur-en
aa: []
phases:
  - preuve-de-concept
  - integration-et-tests
draft: false
source_fr: embarque/mcu/programmation-non-bloquante.md
source_sha256: 96bbb3cc6f4596193a8b9230e6020a839a14b6554f8f4497ffce19664b879e0e
---

**Non-blocking programming** is the discipline of writing no waiting at all into an embedded program: rather than stopping until a delay elapses or an event arrives, every task looks at whether its moment has come, acts or not, and hands control straight back. The main loop is therefore never interrupted, which lets a [[microcontroleur-en|microcontroller]], which still does **only one thing at a time**, carry several activities at once. It is a way of organising code, not a function to call: it depends neither on the board nor on the language.

![Two timelines stacked over the same duration. At the top, a blocking loop alternates short tasks and long waits; an event that occurs during a wait is only taken into account at the end of it, hence a marked delay. At the bottom, a cooperative loop cuts the same duration into brief slices that follow one another without interruption; the same event is seen from the next slice onwards.|640](/ressources/img/programmation-non-bloquante/bloquant-vs-cooperatif.svg)

## What is it for?

As long as a build does **only one thing**, waiting costs nothing: while an LED stays lit for half a second, there is nothing else to do. The problem appears with the second activity, and it appears all at once. A system that must simultaneously signal its state, measure at a regular rate and react to a command can no longer afford the slightest pause: during a wait, **everything** is frozen, not just the task that is waiting.

The consequences can be read on the timeline above. An event that occurs during the wait is seen **late**, when it is not missed altogether because it stopped in the meantime. A measurement due every 100 ms misses appointments. And the program becomes impossible to evolve: adding an activity forces every other wait to be recomputed.

The trap is that a wait does not always look like one. A pause function is visible, but "wait for a frame to arrive", "wait for a sensor to finish its conversion", "wait for the motor to reach its position" are waits too, and a library function can hide one without saying so. **Any sentence that starts with "wait until" is a blocking wait**, however it is written.

## The two ways of letting time pass

The contrast fits in one sentence: both approaches read **the same counter**, and only the structure of the code differs.

**Blocking waiting** consists in reading that counter in a loop until the wanted duration has elapsed. It is no magic of the language: the pause function of a library is literally written that way. Throughout that time, the processor runs at full speed **to do nothing**, and nothing else can run.

**Cooperation** reverses the test: instead of waiting for the duration to elapse, the program asks on every pass whether it *has* elapsed, and hands control back in every case. Hence the name *cooperative loop*: no task is interrupted by force, each one **hands control back on its own**. Everything rests on that goodwill: it is the strength of the approach (there is nothing to install) and its limit (see below).

## How does it work?

Three building blocks are enough.

**1. A time counter that runs on its own.** Every family provides one: a counter of milliseconds since start-up, incremented in the background by a [[timer-en|timer]] [[interruption-en|interrupt]], without the program having to deal with it.

| Family | The counter | What it returns |
|---|---|---|
| Arduino, C++ | `millis()` | milliseconds since start-up, on 32 unsigned bits |
| MicroPython | `ticks_ms()` | an **opaque** counter, to be compared only with `ticks_diff()` |
| STM32, HAL library | `HAL_GetTick()` | milliseconds, incremented by the SysTick interrupt |

**2. The timing pattern.** A periodic task keeps its **own** date of last pass and tests, on every loop, whether the gap exceeds its interval. Two tasks at two different rates keep two different dates: they have nothing to say to each other.

**3. One state per task.** A task that goes through modes — idle, running, done — remembers where it stands in its own state variable. That is a [[machine-a-etats-en|state machine]], and it is what replaces the linear sequence that used to be written with waits: instead of "do this, wait, do that", the task answers on every pass the question "where am I, and is it time to move on?".

### Overflow, and why the idiom is not written the same everywhere

That counter is not infinite: it eventually wraps back to zero. In C and C++, on 32 unsigned bits, this happens after about **49 days**, and the gap computed by subtraction stays **correct despite the wrap**, because unsigned arithmetic wraps exactly as the counter does. That is why the idiom is written by subtracting two dates, and why the variable that stores the date must be of the **same unsigned type**: a smaller type, or a signed one, breaks that property and makes the computation lie.

In MicroPython, the same trick does not work. Integers have no fixed size, and the wrap period of the counter is **neither the same from one board to another nor exposed** by the language. The documentation therefore asks that the value be treated as opaque and that a dedicated function be used, which does the computation in modular arithmetic. **The same pattern, two writings, and the difference is not cosmetic.**

That function adds a condition that holds as a general lesson: the result is only reliable if the two compared dates are **close**, less than half a period apart. In other words, looking at the clock regularly is part of the contract. The overflow constraint and the cooperative discipline therefore say the same thing: **never let a task linger.**

## Example — Three activities, one loop

A small station must blink a status LED once a second, read a sensor ten times a second, and react without delay to a button press.

**With waits**, it is unfeasible, and the failure is immediate rather than subtle. A half-second pause for the blinking mechanically rules out the ten readings a second, and the button stays invisible half of the time. No tuning makes up for that: the three rates are incompatible with one another as soon as a single one of them freezes the program.

**In cooperative form**, the three activities become three tasks. The first keeps its date and toggles the LED every 500 ms. The second keeps its own and measures every 100 ms. The third simply reads the input on every pass and detects the change. The loop calls them one after the other, indefinitely. Since none of them lingers, a full pass lasts a fraction of a millisecond: both rates are met and the press is seen almost instantly.

The decisive benefit shows when a fourth activity is added — driving a display, listening to a serial link. It is enough to write a fourth task and to call it in the loop: **nothing that already existed has to be touched.** That is what makes this organisation the default architecture of almost every real embedded program, and not an optimisation reserved for hard cases.

## Pitfalls

**One single wait is enough to freeze everything.** The rule holds for **every** function called from the loop, including those nobody wrote themselves. A pause forgotten deep inside a utility function cancels the discipline of the whole program.

**A long task blocks as much as a wait.** With no pause at all, a task that computes for tens of milliseconds, or polls a slow sensor until it answers, delays every other one. What counts is not the absence of a pause, it is the **brevity** of each pass, even if the task has to be cut into successive steps.

**Confusing cooperation and parallelism.** Nothing really runs at the same time: a single task runs at a time, very fast, in sequence. The illusion of simultaneity comes from the speed of the loop. Only [[interruption-en|interrupts]] really run on top of the loop.

**Storing a date in too small a type.** A counter date stored in an integer of insufficient size overflows within tens of seconds, and the task starts firing at random. The type of the variable must match the one the counter returns.

**Believing that cooperation guarantees a rate.** It guarantees that a task will not be forgotten, not that it will run at the exact instant. The duration of a loop pass varies with what the other tasks do, so that a requested interval of 10 ms is in fact "10 ms or a little more". For a rigorously constant step — sampling, [[asservissement-en|closed-loop control]] —, a hardware [[timer-en|timer]] is what is needed.

**Waiting for an answer rather than watching for it.** Watching for a frame to arrive or a movement to end through a waiting loop freezes everything. The transformation to make is always the same: instead of waiting for the answer to arrive, ask on every pass **whether it has arrived**, and come back later if not.

## Special case — Where cooperation stops

The whole mechanism rests on the **goodwill** of each task: nothing in the system forces a task to hand control back. As long as they are brief, that holds effortlessly. But as soon as a task has to meet a **strict deadline whatever happens** (a motor command that tolerates no delay, an acquisition that cannot miss a step), goodwill is no longer enough: it would take the ability to *take* control away from a task that lingers.

That is what a **real-time operating system** (RTOS) does: it **preempts**, interrupting a task to run a higher-priority one, and so guarantees deadlines. The price is real: more memory, a scheduler to configure, and a new family of bugs (concurrent access to shared resources) that did not exist in cooperative form, since tasks never interrupted one another.

Between the two lie two lighter levers, to be tried first. An [[interruption-en|interrupt]] handles a rare and urgent event without changing anything in the loop. A hardware [[timer-en|timer]] imposes an exact rate on a critical task, whatever the load. The order to remember: **the cooperative loop by default, the interrupt or the timer on the hard points, the RTOS only when deadlines require it**: that is the staircase of architectures described by the [[firmware-en|firmware]] page, and it is climbed one step at a time.

## See also

- [[firmware-en|Firmware]] — the staircase of architectures, of which the cooperative loop is the second step
- [[arduino-programmation-non-bloquante-en|Non-blocking programming on Arduino]] — the implementation in C++ and its timing pattern
- [[micropython-programmation-non-bloquante-en|Non-blocking programming in MicroPython]] — the same discipline, plus the scheduler built into the language
- [[machine-a-etats-en|State machine]] — the shape a task with modes takes
- [[interruption-en|Interrupt]] — what really runs on top of the loop
- [[timer-en|Timer]] — the rate guaranteed in hardware, when cooperation is not enough
- [[microcontroleur-en|Microcontroller]] — one core, one thing at a time
- [[programmer-l-embarque-en|Programming]] — the step of the journey where the discipline arises
- [[preuve-de-concept-en|Proof of concept]] — from the first build that does more than one thing
