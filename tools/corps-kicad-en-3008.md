**KiCad** is the most widely used **free and open-source** printed circuit board design suite (EDA): schematic editor, board editor, component and footprint libraries, export of the manufacturing files. Cross-platform, with no size limit, **hosted by the Linux Foundation** since 2019 and developed with the long-standing support of **CERN**, it is the reference tool for taking a project **from schematic to a manufacturable board**. This page is a tool tutorial from the [[pcb-en|printed circuit board]] hub.

Take a screenshot of *the KiCad start window and its two main editors side by side: the schematic editor (Eeschema) on the left, the board editor (Pcbnew) on the right*.

## What is it for?

KiCad covers the whole [[pcb-en|board design flow]] in a single tool:

- **capture a schematic** that is clean and checked (Eeschema);
- **assign a footprint** to each component (the matching physical object);
- **route** the board — place the components and draw the copper tracks (Pcbnew);
- **check** the schematic (ERC) and the routing (DRC) automatically;
- **export** the Gerber and drill files for manufacturing. KiCad can also produce the **IPC-2581** format, which gathers the whole manufacturing package into a single file, still rarely asked for by fabricators.

It is a **locally installed** program (Windows, macOS, Linux), free and unrestricted. It is the open-source standard for anyone who wants to design boards without depending on an online service.

## Getting started

1. **Create a KiCad project** — it groups the schematic, the board and the associated files under one name.
2. **Capture the schematic in Eeschema** — place components from the libraries, connect them with wires, **annotate** (number the components), then run the **ERC** (*Electrical Rules Check*), which spots unconnected pins and inconsistencies.
3. **Assign the footprints** — for each component on the schematic, attach the physical **footprint** matching its real package (checked against the [[lire-une-datasheet-en|datasheet]]).
4. **Switch to Pcbnew** — import the *netlist* from the schematic, **place** the components on the board, define the outline, then **route** the tracks (by hand or with help from the router).
5. **Check (DRC)** — the *Design Rules Check* verifies track widths, clearances and short circuits before any manufacturing.
6. **Export the Gerbers** and the drill file — the deliverable handed to the fabricator or to the lab.

Take a screenshot of *Pcbnew showing a 2-layer board being routed: components placed, tracks drawn in red (top) and green (bottom), board outline visible*.

> [!note]
> **ERC and DRC: two safety nets to run systematically.** The **ERC** checks the *schematic* (forgotten pins, conflicts), the **DRC** checks the *routing* (tracks too thin, insufficient clearance, short circuits). Running them before ordering catches most of the expensive mistakes. A wrong board ordered is a whole batch lost.

## Example — A small sensor board

We design a simple standalone board: a microcontroller, a temperature sensor on [[bus-de-communication-en|I²C]], a 3.3 V regulator and a connector.

Take a screenshot of the *KiCad schematic of the board: the microcontroller in the centre, the sensor connected over I²C (two SDA/SCL lines), the power regulator, and the connector, with the values annotated*.

1. **Schematic** — place the microcontroller, the sensor, the regulator and the connector; wire up the power, the ground and the two bus lines; annotate and run the ERC.
2. **Footprints** — give each part its real package (the right pitch for the connector, the right size for the regulator).
3. **2-layer routing** — place the components, add a **ground plane** on the bottom layer, route the signal tracks above it, widen the power tracks.
4. **DRC**, then **Gerber export** — read the result back in the viewer before handing it over.

On a deliberately minimal board, the whole flow has been covered: schematic checked, footprints correct, routing clean, manufacturing files ready.

## Pitfalls

**Routing before the ERC.** Drawing tracks on an unchecked schematic means routing mistakes. Run the ERC and freeze the schematic *before* Pcbnew.

**Wrong footprint.** The most expensive mistake: a footprint with the wrong pitch or the wrong package gives a board where the component will not solder. Check every footprint against the [[lire-une-datasheet-en|datasheet]].

**Missing footprint library.** An unusual component may have no ready-made footprint. You then have to create or import one, otherwise routing is blocked. Before drawing it yourself, look at the open libraries: **CERN** published its own in May 2026 — more than 17,000 components, symbols and footprints, under the CERN-OHL-P licence.

**Forgetting the ground plane.** Routing every ground as a thin track instead of a dedicated plane degrades the signals. Add a copper ground zone.

**Not reviewing the Gerbers.** Exporting and ordering without opening a Gerber viewer lets through faults that are invisible in the editor. A last look at the real output is a must.

## See also

- [[pcb-en|Printed circuit board]] — the hub: design flow, layers, the manufacturing boundary
- [[analyse-de-schema-electronique-en|Reading a schematic]] — being able to read the schematic you capture
- [[simulation-electronique-en|Circuit simulation]] — validating the build before routing it
- [[lire-une-datasheet-en|Reading a datasheet]] — footprints, pinouts and component constraints
- [[dossier-technique-en|Technical design file]] — where the designed board is documented
