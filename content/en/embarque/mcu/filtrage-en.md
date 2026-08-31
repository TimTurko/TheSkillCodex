---
title: Filtering measurements
lang: en
type: notion
tags:
  - eee
  - notion
prerequis:
  - adc-en
aa: []
phases:
  - preuve-de-concept
  - integration-et-tests
draft: false
source_fr: embarque/mcu/filtrage.md
source_sha256: 11408fad1f70c4c61bb9ae015d850fd76bbcc1b10278b6fb8ee1b23c83cad2ab
---

**Filtering** a measurement means damping its spurious variations to keep only the useful information. A sensor reading is never perfectly stable: the converter ([[adc-en|ADC]]) rounds, the electronics adds noise, the cable picks up interference, the sensor is sometimes wrong. Filtering is the processing — in software or in hardware — that makes such a reading usable. It is never free: **every filter trades stability against responsiveness**.

![Two curves of a quantity that jumps sharply from a low level to a high level: the raw reading in grey swings a lot, the reading filtered by a moving average in amber swings little but reaches mid-height five samples later.|640](/ressources/img/filtrage/bruit-et-retard.svg)

## What is it for?

A raw reading looks very good on the serial monitor and behaves very badly inside a program. Three symptoms come back on every project:

- **a threshold that chatters.** The reading swings around the trigger value, and the output toggles ten times a second.
- **an unreadable display.** The last digit dances all the time, even though it sits below what the sensor can guarantee.
- **an actuator that shakes.** A control loop that copies the noise of its sensor passes it on to the motor.

In all three cases, the program reacts to something that does not exist. Filtering means deciding **what you accept never to see again**.

## Three noises, three remedies

The beginner's mistake is to look for "the right filter". There is none: a remedy is chosen **according to the shape of the defect**, which can be read by eye by plotting a few seconds of raw measurement.

![Three traces of a quantity that should be constant: on the left a permanent, disorderly scatter, in the middle a clean reading interrupted by two isolated and very distant values, on the right a regular, periodic ripple.|640](/ressources/img/filtrage/trois-bruits.svg)

- **Permanent scatter** — electronic noise, ADC quantisation, imperfect contacts. Typically ±1 to ±3 conversion steps. Remedy: **averaging**.
- **Isolated absurd values** — a reading that fails now and then, against a background of correct ones: an ultrasonic echo that goes astray, a badly read frame. Remedy: **the median**.
- **Regular ripple** — a clear periodicity, often the 50 Hz mains picked up by a long cable, or a supply polluted by a motor. Remedy: **the cause first** — redo the ground, shorten or shield the cable, [[decouplage-en|decouple]] the supply. A filter that hides a wiring defect leaves it in place for the rest of the project.

## How does it work?

Three software treatments cover most of the needs of a project, plus one hardware treatment that acts where software can do nothing more.

**The moving average.** The last `N` readings are kept and their mean returned. On random noise, the scatter is divided by **√N**: averaging 10 readings therefore does not divide the noise by 10, but by a little over 3, and it takes 100 of them to divide it by 10. The cost is twofold: `N` values to keep in memory, and a delay of about **N/2 samples** (exactly `(N−1)/2`).

**The exponential filter.** One line, one variable kept: `y ← y + α × (x − y)`, where `x` is the new reading and `α` a coefficient between 0 and 1. The output moves each time by a fraction `α` of the gap that separates it from the reading. Close to 1, the filter is responsive and smooths little. Close to 0, it is very smooth and very slow. It is the most used filter in embedded work because it costs **no memory of readings**. As an order of magnitude, `α ≈ 0.2` smooths about as much as an average over ten readings (the usual equivalence is `α = 2/(N+1)`).

**The median filter.** `N` readings are kept (3 or 5 are enough, in an odd number) and **the middle value** is returned once they are sorted. An outlier, however extravagant, ends up at one end of the sort and disappears without influencing the result. That is exactly what an average cannot do: a single absurd reading drags the mean along with it. In exchange, the median barely smooths ordinary noise. The two combine very well: the median first to remove the outliers, then the average to smooth the rest.

**The RC low-pass filter.** A series resistor and a capacitor to ground, **before** the ADC input. It attenuates everything that varies faster than its cut-off frequency `fc = 1/(2πRC)`: for instance 1 kΩ and 1 µF give ≈ 160 Hz. One constraint to respect: the ADC of a microcontroller wants to see a **low-impedance** source (under 10 kΩ on AVR), so a small resistor and a large capacitor are preferred over the opposite.

## The price of filtering

The opening figure says the essential: the filtered curve is cleaner, and it arrives **later**. The real edge is spread into a ramp. The information "this has just changed" is delayed by as much.

That stays harmless for a display or a measurement log. It has two consequences, however, as soon as the reading drives something. A **threshold** is crossed later than in reality: for an obstacle detector, the delay converts into centimetres. And inside a [[asservissement-en|closed-loop control]] loop, the filter adds a phase shift that can **destabilise the regulation**: the controller acts on an image of the past, corrects too late, overshoots, and the system starts to oscillate. Hence the rule: **filter as little as possible**, and check the behaviour after filtering rather than picking `N` at random.

## Pitfalls

**Averaging readings that are not independent.** Reading the ADC ten times in a row within one millisecond does not divide the noise by √10: if the disturbance is slower than the burst, the ten values carry **the same** error, and so does their mean. The √N gain assumes spaced readings, hence a regular sampling rate, which a [[timer-en|timer]] guarantees.

**Filtering a logic signal.** A bouncing button cannot be averaged: it is a debouncing problem, handled otherwise (see [[arduino-entree-tor-en|reading a digital input]]). Filtering applies to a continuous quantity, not to a binary state.

**Confusing smoothing and correcting.** A filter removes **scatter**. It corrects no **bias**. A reading that is 2 °C off stays 2 °C off after filtering, and the filter even makes it more convincing, since it no longer moves. The distinction is the one between [[precision-de-mesure-en|precision and trueness]]: filtering improves the first and does not touch the second.

**Believing you gain bits.** Averaging can bring out decimals below the ADC step, but only **if noise was already present** to make the conversion swing from one level to the next. On a perfectly stable reading, averaging the same level a thousand times gives that level back, and the displayed resolution becomes a lie.

**Filtering too much.** A generous `N` gives a magnificent curve and a system that no longer reacts. The reflex is to start small (`N = 4`, or `α = 0.3`), watch, and increase only if the symptom persists.

## Special case — what software can no longer fix

A software filter works on what the ADC has already converted. But a disturbance that varies **faster than the sampling rate** does not show up as a fast disturbance: it folds back into the useful band and takes on the look of a slow ripple, indistinguishable from the real reading. No average will remove it, because by that stage it looks like the signal.

That is the one reason the **hardware RC low-pass** is irreplaceable: placed before the ADC, it removes those fast variations **before** they are converted. A signal picked up by a long cable, or taken near a motor, deserves that capacitor far more than a sophisticated software filter.

## See also

- [[adc-en|ADC]] — the conversion upstream, and the quantisation step that bounds the reading
- [[precision-de-mesure-en|Accuracy, trueness, precision]] — what filtering improves, and what it does not correct
- [[arduino-capteur-analogique-en|Reading an analog sensor (Arduino)]] — ADC noise in practice
- [[arduino-capteur-numerique-en|Reading a digital sensor (Arduino)]] — the outliers of the ultrasonic sensor
- [[micropython-capteur-analogique-en|Reading an analog sensor (MicroPython)]] — the same mechanics on the MicroPython side
- [[micropython-capteur-numerique-en|Reading a digital sensor (MicroPython)]] — the same outliers, on the MicroPython side
- [[asservissement-en|Closed-loop control]] — why a heavy filter destabilises a regulation
- [[timer-en|Timer]] — the regular rate that any serious filtering assumes
- [[decouplage-en|Decoupling]] — treating supply noise at the source
- [[arduino-entree-tor-en|Reading a digital input (Arduino)]] — debouncing, which is not filtering
- [[micropython-entree-tor-en|Reading a digital input (MicroPython)]] — the same debouncing, on the MicroPython side
