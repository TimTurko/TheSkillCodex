---
title: Reading a program you did not write
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - cpp-logs-en
aa: []
draft: false
source_fr: embarque/mcu/cpp/cpp-lire-un-programme.md
source_sha256: 948a144122ed95c8aecb3d1ef30dc9dcb04ba0351d432f8ba6b01bda956fbd73
---

Copying an example out asks nothing of you. **Understanding it** is what lets you go on to modify it, correct it and reuse it. And a program is not read like a piece of prose, from the first line to the last: you get into it through landmarks, in an order that is not the one it was written in. This page gives a **way in** to an unfamiliar C++ program, the **language mechanisms** that come back from one example to the next, and a **commented reading** of a program from this wiki, taken as it stands. It closes the [[cpp-en|C++]] path: the syntax is assumed known, and what you learn here is how to use it to read.

## What is it for?

On a project, most of the code you handle was not written by you: a library example, a teammate's sketch, last year's project picked up again. Three situations come up constantly, and all three call for reading before writing:

- "This example almost does what I want — what do I change?";
- "My partner wrote that part, I have to plug mine into it";
- "This code worked last week, someone has modified it."

Reading is not debugging. Here, **we assume nothing is broken**: the program is taken to work, and the aim is to find out *what it does*. When a behaviour is wrong and you are looking for why, that is the other job — see [[arduino-debug-en|debugging an Arduino program]]. The two follow on from each other: you cannot usefully debug code you have not read.

## How to get into an unfamiliar program

Four stages, in this order. The first reflex to unlearn is starting at the top and working down.

### 1. Find the boundaries

In Arduino C++, every program has the same frame: `setup()` runs **once** at start-up, `loop()` **in a loop** after that, indefinitely. Look for those two functions first, before reading a single line: they cut the file into three zones, the header (before `setup()`), the initialisation, and the repeated body.

That split already answers a question of substance: **what is in `setup()` is a setting, what is in `loop()` is a behaviour**. If you are looking for "why the LED blinks like that", it is in `loop()`. If you are looking for "how fast the serial port is opened", it is in `setup()`.

### 2. Read the header: wired, set, remembered

The header usually runs to twenty lines and says three distinct things. Learning to tell them apart at a glance saves most of the reading time.

- The `#include` lines — **what the program depends on**. An included library announces a capability (a display, a servo, an SD card) before any other clue;
- the `const` and `#define` lines, generally **in capitals** — the **settings**. These are the values you can change without touching the logic: pin numbers, durations, thresholds. This is where you act first to adapt an example;
- the global variables in lower case, often initialised to `0` or `false` — **what the program remembers** from one turn of `loop()` to the next. There are few of them, and they are the ones that carry the whole behaviour (see [[cpp-portee-en|local and global variables]]).

The typographic convention is not enforced by the language, but it is followed throughout the Arduino world and throughout this wiki: **capitals = never changes, lower case = changes**. A name in capitals that you see assigned inside `loop()` is a signal that something is off in the code you are reading.

### 3. Take stock of the states

Take the two or three lower-case global variables spotted at the previous stage and, for each of them, look for **every place where it is assigned**. Your editor's search function is enough. A typical embedded program has only three to five state variables, and knowing where each one changes is having understood the logic: the rest of the code is just wiring around it.

### 4. Play one turn, once

Finally, walk through **one** complete turn of `loop()` telling yourself a concrete scenario: "the button is not pressed, 3 seconds have gone by since start-up. What is each variable worth, which branch is taken?". A single turn, played seriously, teaches more than three skimmed readings.

> [!tip] Tip
> **The single-sentence test.** You have read a program when you can answer two questions without reopening the file: *what does this program do, in one sentence?* and *what changes between two turns of the loop?* As long as one of the two resists, the reading is not finished. Conversely, understanding every line is **not** the goal: you can perfectly well read a program without knowing what one particular library call does.

## The C++ mechanisms you find everywhere

The points below are not syntax to be learnt (that is already on the path) but **reading clues**: what the presence of a keyword or of a form of writing tells you about the program, before you even understand the detail.

### Braces delimit, indentation does not count

In C++, a block is what sits between `{` and `}`. Indenting to the left is only a presentation convention: **the compiler ignores it**. An `if` with no braces governs only the line immediately following it, even if several lines look lined up underneath.

```cpp
if (mesure > SEUIL)
  digitalWrite(LED, HIGH);   // inside the if
  compteur++;                // NOT inside the if - always runs
```

Reading reflex: as soon as an `if`, a `for` or a `while` does not open a brace, treat only the following line as belonging to it, whatever the layout says. This is exactly the opposite of [[micropython-lire-un-programme-en|MicroPython]], where the indentation *is* the structure.

### The type tells the size, and warns of overflow

The type of a variable is not decoration: it fixes the range of values it can take. Only one reading rule really pays off in embedded work: **every date coming from `millis()` is stored in an `unsigned long`**. Seeing `unsigned long tDebut` is normal. Seeing `int tDebut` on a time variable is an anomaly worth flagging, because an `int` on a Uno overflows after 32 seconds.

### A compound condition reads "or else ... and that"

When a test mixes `&&` and `||`, reading it out loud lifts the ambiguity. The point to know: **`&&` binds tighter than `||`**, so `A || B && C` reads "A, **or else** B and that C" — and not "A or B, and that C".

```cpp
if (millis() - tDebut >= DUREE_VERT ||
    (demandePieton && millis() - tDebut >= DUREE_VERT_MIN)) {
```

That test reads: "we leave if the full time has elapsed, **or else** if a pedestrian has asked **and that** the minimum is reached". A `||` at the top level always opens **two ways out**. Spotting them is understanding the logic of the branch.

### `volatile`: the variable is modified elsewhere

The `volatile` keyword in front of a global variable is a signpost: **this variable is written outside the normal flow of the program**, almost always by an interrupt routine. Its presence tells you to look for the [[interruption-en|ISR]] that modifies it before trying to understand the `loop()`. Careful not to over-read it: `volatile` only stops the compiler optimising reads away, it does **not** protect concurrent access (see [[arduino-interruptions-en|interrupts on Arduino]]).

### What you open, you close

In C++, releasing a resource is **the programmer's job**. A file opened with `SD.open()` has to be closed again with `close()`. A transmission opened with `beginTransmission()` has to be concluded with `endTransmission()`. Reading reflex: **for every opening you spot, look for the matching close**. Its absence is not a matter of style. Without `close()`, a file can stay empty on the card.

This is the point where the wiki's two languages diverge most sharply: on the [[micropython-lire-un-programme-en|MicroPython]] side, the `with` block closes on its own, so a missing `close()` is not an oversight there.

### A table of tasks: `struct` and function pointer

Some programs replace a stack of repeated tests with an **array they walk through**. The form comes up often enough to be worth recognising:

```cpp
struct Tache {
  void (*fonction)();          // the address of a function to call
  unsigned long intervalle;
  unsigned long dernier;
};
```

Three things can be read there. A `struct` **groups** several pieces of information under a single name, here everything that describes a task. The `void (*fonction)()` field is a **function pointer**: a slot that holds not a number but the address of a function, which makes it possible to call it later without knowing which one. And the loop that follows, `for (Tache &t : taches)`, is a **range-based `for`**: it walks the elements of the array one by one, with no index to manage. The general sense reads without any grasp of pointers: *the program keeps a list of things to do and works through it*. The detail is developed in [[arduino-programmation-non-bloquante-en|non-blocking programming on Arduino]].

## Commented reading: the traffic light

Here is the method applied from end to end to the program from [[arduino-machine-a-etats-en|programming a state machine]], taken as it stands. Follow the four stages without looking at the wiki's own commentary.

**The boundaries.** `setup()` configures six pins and dates the start. `loop()` contains an `if` then a `switch` with three branches. All the behaviour is therefore in the `switch`.

**The header.** No `#include`: the program uses nothing but the Arduino core. The capitals give the settings — six pin numbers, four durations in milliseconds. Three lower-case names give the memory: `etat`, `tDebut`, `demandePieton`. We already know that the program remembers **where it is up to**, **since when**, and **whether someone has pressed**.

**Taking stock of the states.** `etat` is assigned in the three branches of the `switch`, nowhere else. That is the green → amber → red → green cycle. `tDebut` is reassigned to `millis()` at exactly the same places, so at every change of state: it **re-dates the entry** into the branch, which makes the duration comparisons start again from zero. `demandePieton` goes to `true` at the top of `loop()`, outside the `switch` (so the press is listened for **at all times**, whatever the state) and returns to `false` on entering `ROUGE`, once the request has been met.

**One turn.** Scenario: three seconds after start-up, nobody has pressed. `digitalRead(BOUTON)` is `HIGH` (the pin is in `INPUT_PULLUP`, so at rest it sits at `HIGH`), the first `if` is false. The `switch` enters `case VERT`, sets the five outputs back to the right configuration, then tests the compound condition: `millis() - tDebut` is 3000, which is below `DUREE_VERT` (6000) — false. `demandePieton` is false, so the second branch is false too. Nothing changes, the turn ends, and the next one starts again identically.

The program then boils down to one sentence: *a light that runs on fixed durations, and that cuts its green short if a pedestrian has pressed, without ever dropping below a minimum green*. What the turn showed is **the role of the capitals in the test**. It is enough to change `DUREE_VERT` to retime the whole light, without touching a single line of logic.

## Getting help without being replaced

Having a program explained by a conversational assistant is a legitimate use, **on one condition**: that whatever it states is **checkable on screen**. The criterion is the same one as for [[simulation-electronique-en|simulation]], and it does not depend on which way the tool is used.

"The `demandePieton` variable is modified in the first `if` of `loop()`" is a checkable statement: a search in the file confirms or denies it in three seconds. "This test overflows after 32 seconds if the variable is an `int`" is checked by looking at the declaration. Statements like those save time without taking anything away from the work: they are **hypotheses**, and validating them stays your job.

"This code is correct" is not of that kind. That is **the conclusion**: the only deliverable of the reading, and the only one that cannot be delegated. An assistant can show you where to look. Deciding that you have understood remains your part.

## Common pitfalls

**Reading from top to bottom.** A program is not a text: start with `setup()` and `loop()`, then go back up to the header to shed light on what you saw there.

**Trying to understand everything.** An obscure library call does not stop you reading the program. Note it, carry on, come back to it if the question comes up again.

**Trusting the indentation.** It is decorative in C++. Only the braces count, and an `if` with no braces is the classic trap.

**Confusing a setting with a state.** A value in capitals never changes while the program runs. Mistaking it for a state variable sends you looking for logic where there is only a parameter.

**Skipping the stock-take of global variables.** It is the most profitable of the four stages, and the one you are most tempted to cut short.

## Exercises

> [!question] Exercise 1 — Two ways out
> In the traffic light program above, the `case VERT` branch can end in two ways. Describe each one in a sentence, then say what happens if a pedestrian presses **one second** after the light turns green.

> [!success]- Answer to exercise 1
> The two ways out are the two members of the `||`:
> - **the green has lasted its full time** — `millis() - tDebut >= DUREE_VERT`, that is 6 seconds;
> - **a pedestrian has called and the minimum has elapsed** — `demandePieton` is true **and** `millis() - tDebut >= DUREE_VERT_MIN`, that is 2 seconds.
>
> If the press happens in the first second, `demandePieton` goes to `true` immediately, but the second condition is still false (1000 < 2000). The light **stays green** until the second second, then switches to amber without waiting for the six seconds. That is precisely the role of `DUREE_VERT_MIN`: stopping a press from cutting a green that has only just started.

> [!question] Exercise 2 — Three clues, three conclusions
> Without looking for the complete program, say what each of these three lines tells you, on its own, about the code it was taken from.
> ```cpp
> volatile unsigned long impulsions = 0;
> File f = SD.open("mesures.csv", FILE_WRITE);
> const unsigned long PERIODE = 250;
> ```

> [!success]- Answer to exercise 2
> - **`volatile unsigned long impulsions`** — the `volatile` announces a variable written by an **interrupt**: there is therefore an ISR elsewhere in the file, and that is where to start. The `unsigned long` points to a counter meant to climb high, or to a date.
> - **`File f = SD.open(...)`** — a resource is **opened**: there has to be an `f.close()` further down, and its absence would be a defect. Incidentally, the line announces that an SD library is included at the top and that the program logs measurements.
> - **`const unsigned long PERIODE = 250`** — capitals and `const`: this is a **setting**, not a state. It will never change while the program runs, and it is a good candidate for adapting the program to another use.

## Where it fits in the project

- **Step 4 of the [[preuve-de-concept-en|proof of concept phase]]** — most of the software building blocks of a PoC start from an existing example that gets adapted. The quality of the initial reading decides how much time is lost afterwards.
- **[[revue-de-code-en|Code review]]** — reviewing a teammate's code first calls for being able to read it. It is the direct prerequisite of the collective routine.

## See also

- [[cpp-en|C++]] — the learning hub for the language
- [[cpp-logs-en|Reading and understanding errors]] — the step before: decoding the compiler's messages
- [[cpp-portee-en|Local and global variables]] — what survives from one turn of the loop to the next, the key to the stock-take of states
- [[micropython-lire-un-programme-en|Reading a MicroPython program]] — the twin page on the MicroPython side
- [[arduino-debug-en|Debugging an Arduino program]] — the step after: a behaviour is wrong, find out why
- [[revue-de-code-en|Code review]] — the collective routine that builds on this reading
- [[arduino-machine-a-etats-en|Programming a state machine on Arduino]] — the program read as an example above
