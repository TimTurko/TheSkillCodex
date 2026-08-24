---
title: Reading and understanding errors
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - cpp-execution-en
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
source_fr: embarque/mcu/cpp/cpp-logs.md
source_sha256: 2626b3fea4fd24fe2e7e3226f0a26a8dc0a818200f047514b956d43180eadbf2
---

When a program refuses to compile or to upload, the IDE shows an **error message**. At first glance it looks cryptic, but it follows a logic: it gives the **file**, the **line**, and the **nature** of the problem. Learning to read it means gaining your **independence** — sorting yourself out rather than staying stuck, or copying the error into a search engine without understanding it. The vast majority of a beginner's errors come down to four or five recurring kinds.

> [!note]
> **Which board?** The messages quoted here are those of the **Arduino AVR** build chain (Uno, Mega, Nano) as shown by IDE 2.x. On an ESP32 or a Teensy, the language error messages are **very close** (the same compiler from the GCC family), but the ones tied to uploading differ. The reading reflex itself is the same everywhere.

## What is it for?

Getting stuck on an error wastes a huge amount of time when you cannot read it, and getting unstuck is almost always the same handful of causes. Knowing **where** to look (the line number), **what** to start with (the first error, not the last) and **what** the common messages mean turns a wall into a simple checklist.

## Compiling or uploading: two families

We saw it in [[cpp-execution-en|how a program runs]]: compiling and uploading are two separate steps, so **two families of errors**.

- **Compilation error**: turning the code into binary fails. It is a **code** problem (syntax, name, type). The message comes from the *compiler*.
- **Upload error**: the code compiled, but sending it to the board fails. It is a **link** problem (port, cable, board). The message comes from the sending tool (*avrdude* on AVR).

Knowing which family you are dealing with already points the way: reread the code, or check the connection.

## Anatomy of a compilation message

A compilation error message has a regular shape:

```
sketch.ino: In function 'void loop()':
sketch.ino:7:16: error: 'led' was not declared in this scope
    7 |   digitalWrite(led, HIGH);
      |                ^~~
```

You read there, in order: the **file** and the **function** concerned (`loop()`), then `file:line:column` (here **line 7, column 16**), the word **`error:`**, the **description**, and the offending line of code copied out with its number in a gutter. The `^` points at the exact word causing the problem, here `led` and not the function call. Two reflexes:

- **start with the FIRST error.** One mistake often drags others along in a cascade. Fix the first one, recompile, and the following ones often disappear;
- **go and look at the line given** — bearing in mind that some errors (a missing `;`, for one) are reported on the **next** line.

> [!tip]
> **Do not copy the message out by hand.** When compilation fails, IDE 2.x shows a notification at the bottom right with a **COPY ERROR MESSAGES** button: one click puts the whole message on the clipboard, ready to paste into a search engine or into a question to a classmate.
>
> Notice in passing that the same message appears **three times** — spelled out in the *Output* panel, summarised on its last line, and repeated in the notification. That is **one single** error, not three.

![Output panel of the Arduino IDE 2.x at the bottom of the window, showing a compilation error in red spelled out over several lines, and at the bottom right a notification carrying a COPY ERROR MESSAGES button.|640](/ressources/img/cpp-logs/panneau-erreur.png)

## The most common compilation errors

**`expected ';' before ...`**. A semicolon is missing, almost always on the line **before** the one given.

**`'xxx' was not declared in this scope`**. A name (variable, function) is used without having been declared: a typo, a forgotten `#include`, a variable declared further down, or a local variable used outside its scope (see [[cpp-portee-en|local and global variables]]).

**`fatal error: xxx.h: No such file or directory`**. A header file cannot be found: a library that is not installed, a misspelled name, or a **missing dependency** of a library that is installed (see [[arduino-bibliotheques-en|using a library]]). The word `fatal` means compilation **stops straight away**: unlike the others, this error never comes in a cascade. It is on its own, and it is the only one to deal with.

**`expected '}' at end of input`**. An opening brace was never closed. Check that the `{ }` balance out (the IDE's auto-indent, *Ctrl+T*, helps to spot them).

**`redefinition of 'xxx'`**. The same variable is declared twice in the same scope.

**`invalid conversion from ... to ...`**. An incompatible type is passed where another is expected (see [[cpp-types-en|typing variables]]).

> [!tip]
> **Warning ≠ error.** The compiler tells **warnings** (`warning:`) apart from **errors** (`error:`). A *warning* flags something suspicious but does **not stop** you compiling and uploading (a variable declared but never used, for instance). An *error* blocks. Do not mix the two up: you can ignore a warning while you get on with things, never an error.

## Common upload errors

**`avrdude: stk500_recv(): programmer is not responding`**. The board did not answer: the wrong **port** selected, a *charge only* **cable**, or a board that is not recognised. See the troubleshooting in [[arduino-prise-en-main-en|getting started]].

**Port busy or locked**. Another application (a serial monitor left open elsewhere, PlatformIO) is holding the port: close the other window and try again.

## Messages to decode

Rather than a sketch to read, here are three **real errors** to diagnose — the code, the message as the IDE shows it, the reading.

**Case 1 — the forgotten semicolon.** The code:

```cpp
void setup() {
  pinMode(2, OUTPUT);
}

void loop() {
  digitalWrite(2, HIGH)
  delay(1000);
  digitalWrite(2, LOW);
  delay(1000);
}
```

The message:

```
Blink.ino: In function 'void loop()':
Blink.ino:6:24: error: expected ';' before 'delay'
    6 |   digitalWrite(2, HIGH)
      |                        ^
      |                        ;
    7 |   delay(1000);
      |   ~~~~~
exit status 1

Compilation error: expected ';' before 'delay'
```

The reading: the error is reported on **line 6, column 24**, and column 24 is the character that comes immediately after the closing bracket. The compiler is pointing at **the emptiness**, where it expected something. It even goes as far as drawing the missing `;` on the line below. The `~~~~~` under `delay` marks the word that tripped it up: it read `digitalWrite(2, HIGH)` then `delay`, with no separator between the two. This is the classic semicolon trap: **the mistake is at the end of the previous line**, even when the message points at the next one.

**Case 2 — the variable out of scope.** The code:

```cpp
void setup() {
int my_age = 18;
Serial.begin(115200);

}
void loop() {
Serial.print(my_age);
}
```

The message:

```
Blink.ino: In function 'void loop()':
Blink.ino:7:14: error: 'my_age' was not declared in this scope
    7 | Serial.print(my_age);
      |              ^~~~~~
exit status 1

Compilation error: 'my_age' was not declared in this scope
```

The reading: `my_age` **does exist**, it is declared on line 2, and yet the compiler says it does not. That is the trap: it is declared **inside `setup()`**, so it is born and dies with it. By the time we are in `loop()`, the compiler no longer knows it. The message is not lying: *in this scope*, the name is not declared. The fix: move `int my_age = 18;` out of the braces, above `setup()`, to make it a **global** variable (see [[cpp-portee-en|local and global variables]]).

This is the most misleading error of the lot to read, because the variable is right in front of you in the file. The reflex: do not look for *whether* the name exists, but **in which block** it was written.

**Case 3 — the error that is not in your file.** The code:

```cpp
#include <Adafruit_BMP280.h>
void setup() {}
void loop() {}
```

The message:

```
In file included from Blink.ino:1:
...\libraries\Adafruit_BMP280_Library/Adafruit_BMP280.h:26:10: fatal error: Adafruit_Sensor.h: No such file or directory
   26 | #include <Adafruit_Sensor.h>
      |          ^~~~~~~~~~~~~~~~~~~
compilation terminated.
```

The reading: three lines of code, and the message points at a **line 26** that does not exist on your machine. The `In file included from` is the key. It unrolls the chain: your sketch includes `Adafruit_BMP280.h`, which on its line 26 includes `Adafruit_Sensor.h`, which cannot be found. The library was indeed installed, but **not its dependency** (see [[arduino-bibliotheques-en|using a library]]). Nothing to fix in the sketch: the library has to be reinstalled, accepting *Install all*.

The lesson goes beyond this case: **the file named by an error is not necessarily yours.** Before hunting for a mistake in your code, read the path.

## Pitfalls

**Jumping on the last error.** When the list is long, it is the **first** one to read: the others often follow from it and evaporate once the first is fixed.

**Fixing at random.** Changing things without having read the message or the line piles new mistakes on top. Read first, understand, then fix.

**Ignoring the line number.** The message says *where*: `file:line`. It is the most useful piece of information, as long as you remember that a missing `;` points at the line after.

**Mixing up warning and error.** See the box: a *warning* does not stop you uploading, an *error* does.

## Exercises

> [!question] Exercise 1 — Where is the mistake?
> The compiler shows `sketch.ino:3:3: error: expected ';' before 'delay'`. Here is the code. Which line do you fix, and how?
> ```cpp
> void loop() {
>   int etat = digitalRead(2)
>   delay(10);
>   digitalWrite(13, etat);
> }
> ```

> [!success]- Answer to exercise 1
> The message points at line 3 (`delay`), but the mistake is on **line 2**: the `;` after `digitalRead(2)` is missing. The compiler only notices when it reaches the next token, hence the report one line further down. The fix: `int etat = digitalRead(2);`.

> [!question] Exercise 2 — The unknown name
> Message: `error: 'tempo' was not declared in this scope`. Give **three** possible causes and the fix for each.

> [!success]- Answer to exercise 2
> 1. **Variable never declared** → add it, for instance `int tempo = 500;` among the global declarations or in the function.
> 2. **Typo** → `tempo` was declared but `Tempo` was written (or the other way round). C++ tells upper case from lower case. Line the spelling up.
> 3. **Variable out of scope** → `tempo` is a **local** variable of another function, used here where it does not exist (see [[cpp-portee-en|scope]]). Declare it at the right level (global if it has to be shared).

## Where it fits in the project

- **Step 4 of the [[preuve-de-concept-en|proof of concept phase]]** — on the first sketch of any length, compilation errors are unavoidable. Knowing how to read them is what makes the difference between getting on alone and staying stuck.
- **[[integration-et-tests-en|Integration and testing phase]]** — when the subsystems come together, errors multiply. A methodical reading of the messages saves a considerable amount of time.

## See also

- [[cpp-en|C++]] — the learning hub for the language
- [[cpp-execution-en|How a program runs]] — compiling and uploading, the two families of errors
- [[arduino-prise-en-main-en|Getting started with Arduino]] — troubleshooting the upload (board not recognised)
- [[arduino-debug-en|Debugging a program]] — beyond compilation errors, tracking down run-time bugs
- [[cpp-portee-en|Local and global variables]] — scope, a frequent source of "not declared in this scope"
