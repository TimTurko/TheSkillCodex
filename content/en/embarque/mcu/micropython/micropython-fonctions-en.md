---
title: Functions
lang: en
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-langage-en
aa: []
draft: false
source_fr: embarque/mcu/micropython/micropython-fonctions.md
source_sha256: 9f38a995ca9c4223a715b3446acf172ff0df6b5047f3aee7a08ae06806190c6a
---

A **function** groups a reusable block of instructions under a name. Rather than copying the same blink sequence ten times over, you write it once inside a function and **call** it. It is the basic tool for **factoring out** (not repeating yourself) and for **naming** (making the code readable). In MicroPython a function is declared with `def`, without stating the type of its arguments. See also the general notion of a [[fonction-informatique-en|function]].

## Declaring and calling

```python
def saluer():
    print("Hello from the Pico")

saluer()        # call -> displays the message
```

`def` opens the definition. The body is **indented**, and the call is made with `nom()`. The definition has to be **executed before** the call, so it is written higher up in the file.

## Arguments and default values

A function takes **arguments** in brackets. You can give a **default value**, used when the argument is left out:

```python
from time import sleep

def clignote(led, n=3, duree=0.2):
    for i in range(n):
        led.on()
        sleep(duree)
        led.off()
        sleep(duree)

clignote(led)            # 3 blinks of 0.2 s (default values)
clignote(led, 5)         # 5 blinks
clignote(led, 10, 0.05)  # 10 fast blinks
```

## Returning a result

`return` hands a value back to the caller. With no `return`, the function returns `None`.

```python
def lire_tension(adc):
    brut = adc.read_u16()        # 0..65535
    return brut * 3.3 / 65535    # conversion into volts

v = lire_tension(capteur)
print("Voltage:", v, "V")
```

A function can even return **several values** at once (as a tuple): `return mini, maxi`, picked up with `a, b = ...`.

## Pitfalls

**Forgetting `return`.** A function that is meant to supply a value but has no `return` returns `None`, so `v = lire_tension(capteur)` would give `None` and the next calculation would fail. Check that you really are returning the result.

**Calling before defining.** The `def` line has to have been executed before the call. Define the functions **at the top** of the file, and call them afterwards.

**Internal variables are invisible outside.** A variable created inside a function is **local**, so it does not exist outside it. To share a value, **return** it rather than relying on a global variable (the notion of scope, see [[cpp-portee-en|local and global scope]]).

## Exercises

> [!question] Exercise 1 — A blink function you can tune
> Write a function `clignote(led, n)` that blinks a LED `n` times (0.2 s on / 0.2 s off), then call it for 4 blinks.

> [!success]- Solution
> ```python
> from time import sleep
>
> def clignote(led, n):
>     for i in range(n):
>         led.on()
>         sleep(0.2)
>         led.off()
>         sleep(0.2)
>
> clignote(led, 4)
> ```
> The function wraps the loop up. You then reuse it with any number you like. Adding `duree=0.2` as a default argument would make it more flexible still.

> [!question] Exercise 2 — Convert an ADC reading
> Write a function `en_volts(brut)` that converts a raw reading (0–65535) into a voltage (3.3 V reference) and **returns** the result. Test it with `brut = 32768`.

> [!success]- Solution
> ```python
> def en_volts(brut):
>     return brut * 3.3 / 65535
>
> print(en_volts(32768))    # ~1.65 V (half of full scale)
> ```
> `return` makes the result usable by the caller, whether for display, for a comparison, or for anything else. Half of full scale (32768) does give ~1.65 V, half of 3.3 V: a good consistency check.

## See also

- [[micropython-langage-en|The MicroPython language]] — hub of the language path
- [[fonction-informatique-en|Function]] — the general notion (cross-cutting)
- [[micropython-modules-en|Modules and import]] — grouping functions into a reusable file
- [[cpp-portee-en|Local and global scope]] — what survives outside a function (worth comparing)
