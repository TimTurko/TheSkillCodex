---
title: EasyEDA
lang: en
type: tuto
tags:
  - eee
  - tuto
prerequis:
  - pcb-en
aa: []
phases:
  - preuve-de-concept
  - dossier-technique
draft: false
source_fr: embarque/pcb/easyeda.md
source_sha256: cbdbe60874247720bcb004cdc1deef98685274bc9d082960113e31a0a71ed840
---

**EasyEDA** is a printed circuit board design tool. You draw the schematic of a circuit, then you turn that schematic into a real copper board, ready to be manufactured. Everything happens in the same window, from the first stroke to the file you hand over to the workshop.

This is the tool we use at school, and this page goes all the way. It takes you to the board milled on the lab machine, the one you will take away to solder. The constraints described here are therefore its constraints, not those of an outside manufacturer. The [[pcb-en|printed circuit board]] hub carries the general flow and the vocabulary. Here you learn the **gestures**, in the order you perform them. Keep the software open beside you.

> [!note]
> **The interface speaks two languages.** The main menus are in French, such as *Fichiers*, *Placer* or *Réglages*, that is File, Place and Settings. But many entries have stayed in English, sometimes inside the same drop-down, such as *Design*, *Check DRC*, *Copper Area* or *Run Mode Setting*. Do not look for a logic, there is none. The paths are written here exactly as they appear on screen, mixture included.

## What is it for?

A board is not drawn in one go. You proceed in stages, and EasyEDA holds them all.

- **Draw the schematic**, and make it readable. You name the connections instead of dragging wires from one end of the sheet to the other.
- **Give each component a footprint**, that is the space it will really occupy on the copper. When it does not exist, you draw it yourself.
- **Place and route**, under the rules of the machine that will mill the board.
- **Have the routing checked** by the software, before any copper is cut.
- **Export the file** the workshop will consume.

What makes it special fits in one sentence. **The component you place arrives with its footprint.** On [[kicad-en|KiCad]], you first pick a symbol, then you go and fetch a footprint for it in another library. If you get it wrong, you find out once the board is milled, when the part does not fit its holes. Here the symbol and the footprint travel together, and a whole family of mistakes disappears at once.

Do not take that for a gift. You become dependent on what the catalogues contain. The day your component is not in them, you will have more work than elsewhere. We will see how to get out of it.

A word about what this page will not do. EasyEDA ships with a simulator, and we will not touch it. To try a circuit out before routing it, [[falstad-en|Falstad]] and [[ltspice-en|LTspice]] do that far better, and the [[simulation-electronique-en|circuit simulation]] hub takes you there.

## Installing, and switching to offline mode

Go to the EasyEDA website and click **`Download Desktop`**. You land on a two-column table, one per edition, with the download links for each system. **Take the right-hand column, `EasyEDA Std Edition`**, and the link that matches your machine.

![Home page of the easyeda.com website in a browser. At the top, a blue banner announces EasyEDA PCB Design Software with two buttons, Design online and Download Desktop. The latter is outlined in red and a large red arrow points down at it. Below, a Desktop Client table with two columns. On the left EasyEDA Pro Edition, topped with a Recommended label. On the right EasyEDA Std Edition, outlined in red. The Windows, Linux and Mac rows give the files to download for each edition.|640](/ressources/img/easyeda/download-website.jpg)

> [!warning]
> **The site pushes you towards the wrong edition.** The left-hand column, *Pro Edition*, carries a `Recommended` label. That is the site's recommendation, not ours. The two editions share neither the same interface nor the same menus, and **their files are not interchangeable**. This whole tutorial is written for the *Std Edition*, the one in the column outlined in red on the picture. If you install the Pro, nothing that follows will look like your screen.

On first launch, a `Run Mode Setting` window asks which mode you want to work in. **Choose `Project Offline Mode`, then `Apply`.** The software then asks for a restart. Accept.

![EasyEDA Run Mode Setting window offering three modes. Team Work Mode, projects stored on the server. Project Offline Mode, projects stored on your computer. This one is ticked, outlined in red and pointed at by a large red arrow. Full Offline Mode, projects and components stored on your computer, greyed out and unavailable. At the bottom, a note says a restart is required after changing mode, and the Apply and Cancel buttons.|560](/ressources/img/easyeda/select-offline-mode.png)

That is all there is to do here, and it is the one thing not to miss. Once the choice is made, the words `Projects Offline mode` appear at the top left, next to the name of the software. If they are there, you are ready.

![Top of the EasyEDA window. In the title bar, the words Projects Offline mode are outlined in red and pointed at by a large red arrow. Below, the Réglages menu is open and the Desktop Edition Setting entry is selected, opening a submenu where Run Mode Setting also appears highlighted.|640](/ressources/img/easyeda/verifier-changer-mode-offline.jpg)

If they are not, the same window reopens through *Réglages → Desktop Edition Setting… → Run Mode Setting…*, that is Settings → Desktop Edition Setting, as above.

## Building the board

You are going to make a complete PCB, from the blank sheet in the software to the finished board you will solder yourself. Today the tutorial shows you how, using a circuit called an **NE555 astable**. It is a circuit that makes an LED blink, with six components, all through-hole. It was chosen because it routes without difficulty, and because at the end, board in hand and iron beside you, you will see the LED blink for real. Understanding the theory of the astable is not needed to follow along. Here the subject is the board.

### 1. The project, the sheet and the title block

*Fichiers → Nouveau → Projet…*, that is File → New → Project. Take a look at that same submenu on the way. It also offers *Schéma*, *Circuit* and *Empreinte*, that is Schematic, Board and Footprint. Remember where they are, we will come back for the last one.

Give your project a title and **leave the folder on `Projet Hors Ligne`**, that is the offline project folder.

![EasyEDA Fichiers menu open on Nouveau, whose submenu offers Projet, Schéma, Circuit, Symbole, Empreinte, Modèle 3D, Symbole Spice, Module Schématique and Module PCB. At the bottom, the Créer un nouveau projet window with a Dossier field filled in with Projet Hors Ligne, a Titre field filled in with My_First_PCB, and the Enregistrer and Annuler buttons.|640](/ressources/img/easyeda/fichier-nouveau-projet.png)

Your project contains one sheet, `Sheet_1`. That is where the schematic is drawn, and it looks a lot like what you saw in your electronics classes. A **red frame** marks out the working area, bordered with reference marks. Numbers along the top and bottom, letters down the sides. They are there so you can point at a place in the schematic out loud, something like "look at B3". In the **bottom right** corner sits the **title block**.

**Fill it in straight away.** It is one minute of work and it will follow you through the whole project. The project name, your group number, the date, your name.

![Title block of an EasyEDA schematic sheet, at the bottom right of the frame. The TITLE field reads RENSEIGNEZ ICI LE NOM DU PROJET, the Company field reads NUMERO DU GROUPE, the Date field reads JJ slash MM slash AAAA, the Drawn By field reads VOTRE NOM. To the right, the REV field is 1.0 and the Sheet field is 1 of 1.|640](/ressources/img/easyeda/cartouche-projet.png)

There is nothing administrative about it. In a design office, the title block is what makes a document **traceable**. Without it, nobody knows, three weeks later, which version of the schematic they are looking at or who to ask about it. The **revision index** (*REV*) is there for that. You will move it to 1.1, then to 1.2, as the schematic evolves. It is the same requirement as on any item filed in a [[dossier-technique-en|technical design file]].

> [!tip]
> **Keep the placement conventions from your electronics classes.** Inputs on the left of the sheet, outputs on the right, positive supplies at the top, grounds at the bottom, and the useful components in the middle. This is not a question of looks. A schematic that respects these conventions reads effortlessly to somebody who did not draw it. Your project partner, your supervisor, or yourself after the holidays. See [[analyse-de-schema-electronique-en|Reading a schematic]].

### 2. Searching for a component, and reading what you find

*Placer → Symbole*, that is Place → Symbol, or faster still `Shift+F`, opens the search window. Type the name of the component. It takes **at least three characters** for the search to start.

![EasyEDA Librairie window on the term NE555, annotated with three red arrows labelled Search, Symbol and Footprint. A Types row offers Symbole, Empreinte, Symbole Spice, SCH Module, Module PCB and Modèle 3D. Below, the Classes row shows LCSC forty-nine, Assemblé par JLCPCB forty-five, Système seven, and Contributions des utilisateurs nine hundred and ninety-nine or more. The central list gives the part numbers with their associated footprint, DIP-8 and SOIC-8. The right-hand panel shows a preview of the symbol at the top, with its eight named pins, and of the footprint below, with its eight pads.|640](/ressources/img/easyeda/search-ne555.png)

The *Types* row decides **what you are looking for**, a *Symbole*, an *Empreinte* or a 3D model, that is a symbol, a footprint or a 3D model. Stay on *Symbole*. That is the one that goes onto the schematic, and the footprint comes with it.

Just below, the results are sorted into **classes**, each with its number of hits. They are not equal:

- *LCSC* and *Assemblé par JLCPCB* are maintained by professionals. What you find there is reliable and complete;
- *Système* holds the generic components shipped with the software;
- *Contributions des utilisateurs*, the user contributions, is filled by other users. It is by far the largest. On `NE555` it shows **999+** where the other three together give **one hundred and one**. It is also an attic. There is very good work in there, and sloppy work, and complete parts, and unfinished ones, all mixed together.

You will often end up searching in it anyway, for lack of finding anything elsewhere. Hence the reflex, to pick up right now and to keep: **look at the right-hand panel and check that the part really has a symbol *and* a footprint**. The symbol shows at the top, the footprint below.

> [!warning]
> **A component without a footprint does not show up on the schematic.** It places normally, it wires normally, everything looks fine. The fault only appears when you move to the board, when one footprint is missing where all the others have one. The glance at the right-hand panel costs you two seconds. Finding out later will cost you a full rework.

> [!tip]
> **For passive components, use the tree on the left.** It sorts resistors, capacitors, connectors and the rest by family and by technology. It is quicker than guessing a part number, and it shows you along the way everything that exists under a single word.

### 3. The footprint, and why the part number matters less than it does

This is where the success of your board is decided, and it rests on a distinction that many people grasp too late.

**The symbol** is what you place on the schematic: a rectangle, a triangle, a zigzag, with named pins. It says **what the component does**. **The footprint** is what will appear on the copper: pads, at such and such a distance from one another, drilled or not. It says **how much room the component takes and how it is soldered**.

All three sit well side by side on the NE555:

![Three representations of the same NE555, lined up. On the left, the symbol: a rectangle notched at the top, with its eight pins numbered and named GND, TRIG, OUT and RESET on the left, VCC, DISCH, THRES and CONT on the right. In the middle, a photograph of the real component, a black package marked NE555N whose eight metal legs come down in two rows. On the right, the footprint: on a black background, eight drilled pads laid out in two rows of four, with the NE555 marking in the centre.|640](/ressources/img/easyeda/NE555-schema-footprint.png)

The symbol tells you what each pin is for. The photograph shows the object you will hold. The footprint knows nothing but holes and distances. It has no idea that this is an NE555.

![One symbol, two footprints. At the top, a single resistor symbol, the same whatever the technology. Below, two paths. On the left, through-hole: seen from the side, the body sits above the board and its leads pass through it, the solder joint being made underneath; seen from above, two widely spaced drilled pads. On the right, surface mount: the body rests on the copper and is soldered on the same side; seen from above, two solid pads with no hole, close together.|640](/ressources/img/easyeda/traversant-cms.svg)

The consequence is surprising at first. **The exact part number matters far less than the footprint.** You will not find your 10 µF capacitor in the catalogue with the right dielectric, the right voltage and the right brand. That does not matter. What you need is a footprint that matches the component you have in your hand. Two holes at the right spacing, and you will solder the real capacitor into them. The value written on the schematic drives nothing on the copper.

> [!tip]
> **Push the reasoning to the end. A footprint belongs to nobody.** A through-hole resistor and a through-hole capacitor are both "two holes". If you cannot find a satisfactory footprint for one, take the other one's. All that matters is that the spacing matches what you are going to solder. The copper does not know what will come and sit on it, and it does not care.
>
> One precaution only, and it comes at the soldering iron. The silkscreen on the board will read `R4` at the place where you must solder a capacitor. Write it down somewhere, or you will fool yourself three weeks later.

> [!warning]
> **A wrong footprint cannot be recovered.** A wrong value, you fix at the iron by changing the component. A wrong pad spacing gives you a board where the part **does not fit**, and there is nothing to be done. It is the only mistake on this page that costs a copper blank. Check against the dimensions in the [[lire-une-datasheet-en|datasheet]], or failing that with a caliper on the sample you have to hand.

For every component, one single question to ask yourself: *what I am going to solder, does it fit in there?*

And that question is less obvious than it sounds, because the same word covers very different objects. "A capacitor", for instance:

![Photographic plate of a dozen through-hole capacitors, all of different shapes: a black cylindrical electrolytic with axial leads, flat blue packages, a small blue ceramic with two leads, a large white industrial capacitor with lugs, three red ceramic discs of decreasing size, a green tantalum shaped like a teardrop, a large black electrolytic, and several small grey cylinders. Sizes range from a few millimetres to several centimetres.|560](/ressources/img/easyeda/differents-types-condensateurs.png)

Electrolytic, ceramic, film, tantalum. What size, what lead spacing, what voltage? At this stage you probably have no idea, and that is fine. Take the one you have in your hand, measure the spacing of its leads, and look for a footprint that matches it.

What that changes shows up at the soldering iron:

![Four captioned photographs. Top left, perfect solder joint and footprint in the horizontal version: a row of resistors labelled R15 to R22, flat against the green board, leads straight in their holes. Top right, the vertical version: two resistors standing up on a blue board, one lead neatly folded back into a hairpin. Bottom left, wrong footprint in the horizontal version: a large two-watt resistor whose leads are splayed out in an arc to reach holes that are too far apart. Bottom right, wrong footprint in the vertical version: a dense row of transistors and resistors with leads bent and folded in every direction.|640](/ressources/img/easyeda/impact-footprint-sur-soudure.jpg)

A correct footprint gives a component that sits down and solders effortlessly. A wrong footprint gives twisted leads, forced apart, sometimes broken. And a board you would rather not show anybody.

### 4. Through-hole, and nothing else

Here is the most important rule on this page, and the one that does the most damage when it is forgotten.

**Your components must be through-hole.** Not surface mount, not SMT, not SMD. This is not a matter of style. **We do not have the equipment to solder SMD at school.** An SMD component picked by mistake gives you a board you will not be able to assemble, and you will only find out once the copper is milled, the board in your hand and the iron switched on.

![Two photographs side by side. On the left, ticked with a green mark, a blue through-hole resistor with colour bands and two long leads, lying on a grid background graduated in centimetres. On the right, crossed out in red, an SMD resistor: a small black rectangle marked 10R0, with no leads at all, barely bigger than a grain of rice.|640](/ressources/img/easyeda/resistance-traversante-ok-cms-pas-ok.png)

![Three thumbnails. On the left, ticked with a green mark, a green through-hole capacitor with two long leads. In the middle and on the right, each crossed out in red, two SMD capacitors shown with their footprint above them. In both cases the footprint is made of two solid pads without the slightest hole, and the component is a small block with no leads.|640](/ressources/img/easyeda/condensateur-traversant-ok-cms-pas-ok.jpg)

Three ways to check, from the most reliable to the quickest:

1. **Look at the footprint preview**, in the right-hand panel. **Drilled** pads mean through-hole. **Solid** pads, with no hole, mean SMD. It is the most reliable criterion, because it shows you the thing itself.
2. **Read the name of the footprint**, in the middle column. `RES-TH_`, `CAP-TH_`, `DIP-8`, `PDIP-8`. The `TH` stands for *through hole*, and a `DIP` package is through-hole by construction. Conversely `SOIC-8`, `SOP-8`, `MSOP-8`, `DFN-8`, or a four-digit code such as `0603`, `0805`, `1206`, mean SMD.
3. **Use the tree on the left**, which already sorts the families by technology.

> [!warning]
> **Do not trust the `SMT` tag in the list.** It also appears on perfectly through-hole parts. It refers to an assembly service, not to the technology of the component. The hole in the pad, on the other hand, does not lie.

For every part you select, the reflex is therefore double, and it takes two seconds: **is there a footprint? does it have holes?**

### 5. Wiring the schematic

Place your components on the sheet: the two resistors, the two capacitors, the NE555. Do not look for the perfect layout yet, you will move them around.

You also need the **supplies**. They are not drawn like components. The **`Outils de Cablâge`** toolbar, that is the wiring tools, at the top right of the sheet, offers dedicated symbols to be placed like the rest: `VCC`, `+5V`, ground.

![Floating toolbar titled Outils de Cablâge, on two rows of icons. The first row offers the wire, the junction, the line, the net label marked with a boxed N, the ground, and two forms of port. The second row offers a VCC symbol, a plus five volts symbol, a no-connect flag shaped like a cross, a voltage probe, a pin and a block.|400](/ressources/img/easyeda/outils-de-cablage.png)

![EasyEDA schematic sheet with the components placed but no wire drawn. Top left, two capacitors C1 and C2 of 10 nanofarads. Below them, two resistors R1 and R2 carrying the part number MFR100FTE52-2K. In the centre, the integrated circuit U1, an NE555, with its pins GND, TRIG, OUT and RESET numbered 1 to 4 on its left flank, and VCC, DISCH, THRES and CONT numbered 8 to 5 on its right flank. On the right, on their own, the two supply symbols VCC and GND.|640](/ressources/img/easyeda/placement-des-composants-sur-sch.png)

> [!warning]
> **These supply symbols are not decoration.** They are how the software understands that a wire is a ground or a supply. If you simply drag wires between pins without ever placing a `VCC` or a `GND`, everything will look right on screen. It will jam further on, when you move to the board, and you will have to redo the wiring from the start.

That leaves connecting it all up. The **`Wire`** tool draws the wires from one pin to another. Where two wires genuinely meet, a **red dot** appears. It is the only mark that tells a crossing from a connection, so look at it.

![The same schematic, this time fully wired in green wires. The junction points are marked with small red squares. The routing runs between the components and under the NE555, and several wires cross, which makes it hard to read.|640](/ressources/img/easyeda/cabler-composant-sur-sch-avec-erreur.png)

It is correct, and it is unreadable. Now imagine the same job with a forty-pin microcontroller. The schematic turns into a plate of spaghetti where nobody can find anything.

> [!question]- A mistake has crept into this wiring. Can you find it?
> Look at the wire carrying `TRIG` and `THRES`, pins 2 and 6, down to capacitor **C2**. There is a **red dot** where they cross, so a connection. And that connection takes `TRIG` and `THRES` onto pin 5, `CONT`.
>
> That link does not exist in the reference circuit. The two wires **must cross without touching**. One red dot too many, and the circuit no longer does what it is asked to do.
>
> That is the whole problem with wiring by hand. The junction point is tiny, it appears with a single misplaced click, and nothing flags it. The software takes your word for it.

### 6. Naming connections instead of dragging wires

The remedy is called the **net label**, the `Net` tool. The principle is simple and it changes everything. **Two wires carrying the same name are connected**, even if they do not touch on screen.

![The same circuit, redrawn with net labels. On the left, a column on its own: VCC, R1, a point named Disch, R2, a point named Trig slash Tresh, C1, then GND. On the right, the NE555 separated from the rest, each of its pins carrying a label instead of a wire: GND on pin 1, Trig slash Tresh on pin 2, VCC on pin 4, VCC on pin 8, Disch on pin 7, Trig slash Tresh on pin 6. Pin 5 is connected to capacitor C2, itself connected to GND. Not a single wire crosses the sheet any more.|640](/ressources/img/easyeda/utiliser-netlabel-sur-sch.png)

Compare the two pictures. It is the same circuit. The second one reads at a glance, because it is cut into pieces you can understand separately. The R1, R2, C1 chain on one side, the component on the other.

![Close-up of the same schematic, annotated to show how the labels work. On the left, the junction between R2 and C1 carries a Trig slash Tresh label, circled in blue. On the right, pin 2 TRIG of the NE555 carries an identical Trig slash Tresh label, also circled in blue. A dashed blue line joins the two circles to picture the connection, although no wire joins them on the sheet.|640](/ressources/img/easyeda/explication-fonctionnement-netlabel.png)

And the name you choose does half the work. Look at `Disch` or `Trig/Tresh`. Each label says **what the wire is for**, not where it goes. A reader who sees `Trig/Tresh` on pin 6 knows immediately that it joins the midpoint of the RC network, without having to follow anything with a finger.

> [!tip]
> **A named connection is added without redrawing anything.** Need to hook something else onto the supply? Place a `VCC` label on it, and it is connected. That is what makes a schematic modifiable, and you will modify it, several times.

### 7. An output you can see

As things stand, the `OUT` pin of the NE555 goes nowhere. The circuit oscillates, and nothing shows it. So let us add **an LED**, which will make the blinking visible. It comes with its **series protection resistor**, without which it would not survive long.

![Complete schematic of the circuit, in three separate groups. On the left, the chain VCC, R1, the Disch point, R2, the Trig slash Tresh point, C1 and GND. In the centre, the NE555 with each pin carrying its label, with C2 on the CONT pin. On the right, a third group on its own: an OUT label feeds resistor R3, which drives diode D1 marked LED-10, itself connected to GND. No wire joins the three groups together.|640](/ressources/img/easyeda/sch-complet-sans-connecteurs.png)

Look at how the output got connected: **an `OUT` label on pin 3, an `OUT` label in front of R3, and it is done.** No wire crossed the sheet, and the new block reads on its own.

> [!note]
> **Changing a value on the schematic changes nothing on the copper.** You can write whatever you like on R1 or C1, the milled board will be the same. Only the footprints count. The real circuit will depend only on the components you **solder** onto it. So you will be able to adjust the blink rate at the iron, without touching the board.

### 8. Getting the current in

There is one question that is easy to forget: **where does the current come from?** The `VCC` and `GND` symbols tell the software what a supply is, but they do not make electricity. You need a physical place where the cable arrives.

Look for a **two-pin connector**. A screw terminal does the job perfectly for prototyping.

![Component search window on the words two pins connector. The list returns about fifteen results with wildly uneven names, ranging from SimpleConnector2Pins to CONNECTOR CIRCULAR 8 POSITIONS, by way of connectors with five, six, eight or twenty-four pins that have nothing to do with the request. The selected row carries the name 2 pins connector and the footprint 2 PINS CONNECTOR. The right-hand panel shows the symbol, two pins numbered 1 and 2, and the footprint below: two drilled pads.|640](/ressources/img/easyeda/recherche-connecteurs.png)

Take the opportunity to observe the quality of the results. The search returns connectors with five, six, eight and twenty-four pins for a two-pin request. That is the attic we were talking about. **Sorting is up to you**, and the footprint preview is your best tool for it.

![Complete schematic of the circuit. Top left, outlined in red, the two-pin terminal U1: pin 1 joins a VCC symbol, pin 2 a GND symbol. Below, the chain R1 of 1 kilohm, R2 of 100 kilohms and C1 of 10 microfarads. In the centre, the NE555 marked U2 with its labels. On the right, resistor R3 of 520 ohms and LED D1.|640](/ressources/img/easyeda/sch-complet-avec-connecteur.png)

And there is the whole point of labels: **adding the terminal required no change anywhere else on the schematic.** Two supply symbols on its pins, and it is connected to everything carrying `VCC` or `GND`.

That terminal is only an entry point. What you plug into it stays open.

![Four captioned photographs showing ways of bringing current onto a board. Top left, red and black cables soldered straight onto the pads of a green circuit board. Top right, an assortment of white latching connectors, of the kind found inside computers. Bottom left, a fan of cables ending in model-making connectors labelled Bare leads, JST, Futaba, XT60, T Plug, Tamiya, Mini tamiya and EC3. Bottom right, a board of green and blue screw terminals, in two-pin and three-pin versions.|640](/ressources/img/easyeda/differents-types-connecteurs.jpg)

> [!tip]
> **The screw terminal is the right choice for prototyping.** It holds mechanically, and above all it **comes apart again**. Changing a cable needs neither a soldering iron nor desoldering braid. Soldering the wires straight onto the board works too and needs no extra part, but what you have soldered, you will have to desolder.

### 9. Moving from schematic to board

The schematic is finished. *Design → Convertir le Schéma en PCB*, that is Design → Convert Schematic to PCB.

![EasyEDA Design menu open, containing four entries. The first, Convertir le Schéma en PCB, shortcut Alt plus P, is highlighted. The second, just below it, is Mettre à jour le PCB, shortcut Alt plus U. Then come Update Components from Library and Reset Component Unique ID.|640](/ressources/img/easyeda/convertir-sch-en-pcb.png)

> [!danger]
> **Never take `Mettre à jour le PCB`**, that is Update PCB. It is the line just below, it describes better than the other one what you will want to do, and it is a trap. In offline mode, the update does not exist. The software runs a check, then asks you to **log in and go back online**. If you accept, you lose access to the community libraries. And you will not connect that click with the consequence until much later.
>
> To carry a schematic change over to the board there is only one path: **run `Convertir le Schéma en PCB` again**, which starts from a blank page.

Hence a consequence to be taken seriously. **Your schematic must be right before you convert.** Everything you do on the board afterwards will be lost if you have to convert again, whether it is the placement, the routing or the ground plane. Read it through one last time now.

A window asks you for the characteristics of the board. **You have nothing to change in it.**

![Nouveau PCB window. The Unités field is millimetres, the Copper Layer field is two, the Board Outline field is Rectangulaire. Below, Start X is 7 millimetres and Start Y is 97 millimetres, Largeur is 39 millimetres and Hauteur is 26 millimetres. At the bottom, the Appliquer and Annuler buttons.|560](/ressources/img/easyeda/parametres-nouveau-pcb.png)

### 10. The ratsnest, and the placement

A new file opens, and it looks like nothing you know. A **purple frame** marks out the surface of your future board. Below it, the **footprints** of your components, in a heap. And between them, a web of thin lines going in every direction.

![EasyEDA PCB view on a black background. At the top, an empty purple rectangle marks out the board outline. Below, outside the frame, the component footprints are dropped in a heap: the NE555 package marked U2 with its eight drilled pads, diode D1, resistors R1, R2 and R3 drawn as yellow rectangles with their two pads, capacitors C1 and C2, and terminal U1. Dozens of thin blue lines join the pads to one another, crossing in every direction.|640](/ressources/img/easyeda/chevelu.png)

Those lines are called the **ratsnest**. They are not tracks. They are the connections your schematic declared, and that **you will have to draw in copper**. The ratsnest is your shopping list. Every blue line you make disappear is one connection done.

Start by bringing the components inside the purple frame. Nothing forces you to place them cleverly yet. The only constraint for now is that **they must not overlap**.

Place terminal `U1` first. It brings the current in, so give it an edge of the board. The cable has to arrive from outside.

![Top left corner of the purple board outline. Terminal U1 sits there on its own, against the left edge, with its two drilled pads circled in yellow. A single blue ratsnest line leaves it downwards and exits the frame.|470](/ressources/img/easyeda/placement-premier-composant-bornier-a-droite.png)

Then bring in the rest.

![The purple board outline, this time fully occupied. The NE555 marked U2 stands at the top centre, terminal U1 against the left edge, LED D1 against the right edge, capacitor C2 at the top right and C1 at the bottom left. The three resistors R1, R2 and R3 are stacked in the centre, their yellow rectangles overlapping one another. The blue ratsnest lines cross heavily.|640](/ressources/img/easyeda/premiere-tentative-de-placement.png)

> [!tip]
> **Keep the same logic as on the schematic: what comes in on one side, what goes out on the other.** The supply terminal against one edge, the LED against the opposite edge. A board whose direction you can guess just by looking at it is a board you wire without making mistakes.

### 11. The rules of the machine

Before drawing a single track, you have to tell the software **what the milling machine can do**. *Design → règle de dessin*, that is Design → design rule.

![EasyEDA Design menu open, with the règle de dessin entry highlighted, below Importer les changements and Check DRC. Below, the rules table: the Default row gives a minimum track width of 1 millimetre, a minimum clearance of 0.5 millimetre, a minimum via diameter of 1.2 millimetre and a minimum via drill diameter of 1 millimetre. The maximum track length column is empty.|640](/ressources/img/easyeda/reglage-regles-de-dessin.png)

These numbers are not preferences. Each one describes a physical limit of the tool that will mill your board:

| Rule | Value | What it means |
|---|---|---|
| `Track Width (min)` | 1 mm | The thinnest track the cutter can draw |
| `Clearance (min)` | 0.5 mm | The minimum gap between two coppers that must not touch |
| `Via Diameter (min)` | 1.2 mm | The minimum diameter of a through-hole pad |
| `Via Drill Diameter (min)` | 1 mm | The diameter of the drill bit fitted to the machine |

> [!note]
> **These values are far wider than in industry.** A professional manufacturer goes ten times lower. That is not a handicap, it is a design constraint like any other. Designing under a known constraint is better than designing under no constraint at all. You will find that at 1 mm of track, room runs out quickly, and that is where placement becomes interesting.

### 12. Pads you can actually solder

One last preparation before routing, and it comes from experience at the soldering iron: **the larger the copper area, the easier the solder joint**. The default pads are small and round.

![Heavily zoomed PCB view on terminal U1. Its two pads, marked VCC and GND, are large white squares pierced with a grey central hole. The right-hand panel shows the component properties: prefix U1, name Bornier, footprint 2 PINS CONNECTOR, position and rotation.|640](/ressources/img/easyeda/pad-composants-taille-de-base.png)

Click on a pad, and its properties panel opens on the right. **Set it to a 3 mm by 1.5 mm rectangle**, and **set its drill to 1 mm**. The rectangle is a setting proven by previous cohorts: wide enough for a soldering iron to heat the pad without trouble, narrow enough not to eat the room needed by neighbouring tracks. The millimetre, for its part, is the diameter of the drill bit fitted to the machine.

![The same pad after the change. The right-hand panel shows the pad properties: layer Multi-Layer, shape Rectangle, connection GND, and the Largeur field at 3 millimetres and the Hauteur field at 1.5 millimetre, outlined in red and pointed at by a large red arrow. The Perçage field is 1 millimetre. On the canvas, the two pads have become elongated rectangles clearly wider than the hole.|640](/ressources/img/easyeda/pad-composants-avec-taille-recommandee.png)

To be done on **every** pad on the board. Your board then looks like this. Same components, same provisional placement, but pads a soldering iron can get a grip on.

![PCB view of the board, all components inside the purple outline. The pads have become elongated grey rectangles, clearly larger than the round pads at the start. Terminal U1 is on the left, the integrated circuit U3 at the top centre, capacitor C2 and LED D1 on the right, C1 at the bottom left, and resistors R1, R2 and R3 stacked in the centre. The blue ratsnest lines still cross heavily.|640](/ressources/img/easyeda/seconde-tentative-de-placement-avec-les-bonnes-tailles-de-pads.png)

> [!warning]
> **Draw the holes at the size they will really be.** The workshop machining routine imposes its own diameters, whatever your file contains. That will be 1 mm for the pads and 3 mm for the mounting holes. So what you type does not drive the machine.
>
> But it does drive **what the software shows you and what it checks**. A hole drawn smaller than it will be drilled hides a very real collision from you. On screen the track passes beside it, and on the board the drill cuts it. You will only find out once the copper has been cut.
>
> Simple rule: **the drawing must tell the truth about the geometry**, even when somebody else is holding the cutter.

> [!tip]
> **The rectangle has a direction.** Depending on how the component is oriented, you may have to swap width and height. Count 3 mm in the direction the track arrives from, 1.5 mm in the other. A pad stretched at right angles to its track is of no use.

### 13. Routing the first track

Here we are. The **`Wire`** tool, shortcut `W`, draws the copper from one pad to another. One single thing to check before you start: that you are indeed drawing on the **`Côté Cuivre`** layer, that is the copper side, the one that will be milled.

![Two panels side by side. On the left, the Outils de Circuits toolbar, whose first icon, the wire, is outlined in red. On the right, the Layers and Objects panel listing the layers Côté Composants in red, Côté Cuivre in blue and Sérigraphie côté Composants in yellow. The Côté Cuivre row is outlined in red and carries the pencil icon showing the active layer.|560](/ressources/img/easyeda/tracer-fils-cote-cuivre.png)

Before you launch in, a reflex that will save you hours. **Move the components so that the ratsnest line is straight.** Two pads to be joined that are not aligned will force you into detours. Aligned, the track draws in one stroke.

![Zoomed PCB view. Terminal U1, on the left, has its two pads offset downwards from the pads of the component on the right. The blue ratsnest lines joining them run at an angle.|420](/ressources/img/easyeda/deux-pads-non-alignes.png)

![The same area after moving terminal U1 upwards. Its upper pad is now at the same height as that of the component on the right, and the blue line joining them is perfectly horizontal.|420](/ressources/img/easyeda/correction-alignement-pads.png)

Now draw the connection. The blue ratsnest line **disappears** and a copper track appears in its place.

![Zoomed PCB view of a freshly drawn track. A thick blue band joins a pad of terminal U1 horizontally to a pad of the neighbouring component. Around it, the other ratsnest lines, thin and angled, are still there.|420](/ressources/img/easyeda/premier-cable.png)

Check its **width**: click on the track, and read the right-hand panel. It must be **1 mm**, the minimum value the cutter can draw.

![PCB view with a track selected, pointed at by a large red arrow coming from a Click cable caption. The track properties panel, on the right, shows the layer Côté Cuivre and the Largeur field at 1 millimetre, outlined in red. Below it are the connection VCC, the start and end coordinates, and a length of 14.351 millimetres.|640](/ressources/img/easyeda/changer-taille-premier-cable.png)

Then start again, ratsnest line after ratsnest line. The `R` key rotates a component, and the ratsnest reorganises itself as you move the parts around. It is often better to move a component than to go around an obstacle.

> [!tip]
> **Leave `GND` for the end.** It is the net that touches almost every component, and therefore the one that will get in the way most if you route it too early. We will deal with it differently, right at the end.

### 14. Two 45° turns are better than one right angle

Sooner or later, a track will have to turn. When that happens, turn it in two steps of 45° rather than one of 90°.

![Two PCB views side by side. On the left, crossed out in red, a blue track leaves a pad marked OUT, runs horizontally then goes up in a single right angle. On the right, ticked with a green mark, the same connection is drawn with two forty-five degree breaks instead of the right angle.|640](/ressources/img/easyeda/piste-45-deg-ok-pas-ok.png)

Let us be honest straight away. On your board, the right angle will cause no problem at all. An LED blinks far too slowly for the shape of the corners to have the slightest effect. So why ask you for 45° anyway? There are two reasons.

The first one is historical. Boards used to be etched in acid. A little product stayed trapped in the inner corners and went on eating away the copper after the bath. It was called an acid trap. Your board is milled and not etched, so that problem does not concern you.

The second reason is the good one. It is a professional reflex, and a reflex is acquired where it costs nothing. One day you will route a board that communicates, over Wi-Fi, over radio or with a fast bus. That day, the shape of your tracks will stop being a cosmetic detail. You will be glad to have the gesture already in your fingers.

> [!note]
> **A track becomes an antenna through its length, not through its bends.** Look at the Wi-Fi antenna of an ESP module. It is a copper track folded like an accordion. The folds only serve to fit a length tuned to the transmitted frequency into a small space. What radiates is that length. A short, angular track does not radiate. A long, perfectly straight one does.

### 15. Getting through where there is no room

Your board has **only one copper face**. Two tracks therefore cannot cross, they would touch. Routing quickly becomes a puzzle, and two tricks unlock it.

The first one: **pass underneath a component**. A board is a three-dimensional assembly. Between the legs of a package there is empty space, and a track can go through it without touching anything.

![Zoomed PCB view. A blue track runs horizontally through the space between the two rows of pads of a component, without touching any of them. Other tracks go around the area.|560](/ressources/img/easyeda/astuce-passer-sous-un-autre-composant.png)

The second one: **add an intermediate pad** when several tracks have to meet. Rather than piling up bends around a meeting point, you place a pad and everything converges on it cleanly.

![Zoomed PCB view. Three blue tracks converge on a round grey pad placed midway along the route, which acts as a junction point. Resistor R2 is visible on the right, and the purple edge of the board runs along the side.|560](/ressources/img/easyeda/pad-pour-croisement.png)

### 16. The jumper wire, when you really have to go over the top

When no detour works, there is still the **jumper wire**: a wire that you will solder **over** the board, between two pads, to get across an existing track. The connection no longer goes through the copper, it goes through the air.

In the software, you draw it by cheating. You draw that piece of the connection on the **component side**, where there is no copper, and two pads act as anchors at each end. On screen, that segment appears in another colour.

![Zoomed PCB view. A blue track arrives from the left onto a round pad, then a red segment continues it horizontally to a second round pad, from which the track leaves again in blue towards the right. Another blue track, vertical, crosses the area between the two pads without touching the red segment.|560](/ressources/img/easyeda/astuce-strap.png)

That red will not exist on the milled board. It is **up to you to solder a piece of wire** between the two pads, once the board is in your hands. Nothing tricky about it, and the technique is as old as consumer electronics.

![Three photographs of old electronic boards. On the left, a beige board studded with dozens of bare wire jumpers forming a dense network above the circuit. In the middle, a board populated with resistors and large electrolytic capacitors, with short jumpers between some components. On the right, a green board carrying the reference 5764-12206-00, on which a long insulated red wire joins two distant points by passing over the tracks.|640](/ressources/img/easyeda/astuce-strap-visualisation-realisation-pcb.png)

> [!tip]
> **Aim for fewer than ten jumper wires.** This is not a physical threshold, it is a placement quality target. Every jumper is a wire soldered by hand, so extra assembly time and one more point of mechanical fragility. Beyond about ten, it is a sign that your components are badly laid out. It is often quicker to move two of them than to solder eight wires.

### 17. The mounting holes and the machine origin

Two finishing details, both of them essential.

First, **the mounting holes**: the ones that will take the screws holding the board in an enclosure or on a mechanical assembly. Put one in each corner, and **set their drill to 3 mm**, the diameter the machine will give them.

![Full PCB view, board fully routed. A large red arrow starts from the hole tool in the Outils de Circuits toolbar, outlined in red, and points to a hole placed in the top right corner of the board, drawn as a large circle with a cross through it. On the right, the Hole Properties panel shows a Perçage field at 3 millimetres, pointed at by a second red arrow.|640](/ressources/img/easyeda/reglage-taille-trous-de-percage.png)

This is where the warning in section 12 takes on its full meaning: a hole drawn smaller than it will be drilled would suggest the neighbouring track gets through, when in fact the drill would cut it.

Next, **the origin of the working area**. The milling machine needs a reference point to know where to start. Put it at the **bottom left** of the board.

![Full PCB view. A large red arrow starts from a tool outlined in red in the Outils de Circuits toolbar and goes down to the bottom left corner of the purple board outline, where the origin must be placed. The board is fully routed, with its four mounting holes in the corners.|560](/ressources/img/easyeda/reglage-origine-machine-outil.png)

### 18. The ground plane

You have been leaving `GND` aside from the start. Here it is. Looking at the board, some ratsnest lines are still undrawn. Those are the ones.

![PCB view of the routed board. Every connection is drawn as a thick blue track, except a few thin white lines that remain between terminal U1, capacitor C1, the integrated circuit and LED D1, the ground connections still to be made. The four mounting holes are in place in the corners.|640](/ressources/img/easyeda/masse-pas-connectee-preparation-plan-de-masse.png)

We are not going to route them one by one. Instead, we fill **all the remaining copper** with ground: that is the **ground plane**. The `Copper Area` tool, shortcut `E`, asks you to click the four corners of the board, then `Échap` to close, that is Escape. A box then asks which net to attach the area to: **`GND`**.

![Propriétés dialogue box containing a single field, Connexion, set to GND and selected in blue, with the OK and Annuler buttons. Behind it, the Outils de Circuits toolbar and the layers panel: Côté Composants, Côté Cuivre, Sérigraphie côté Composants.|540](/ressources/img/easyeda/creer-plan-de-masse.png)

All the free space becomes copper connected to ground, and the `GND` connections make themselves.

> [!warning]
> **Check that only one is left.** Depending on your placement and the clearance set in the design rules, the fill can end up **cut into several islands** that nothing connects. Each one is a separate ground plane, and the connections between them are not made. The ratsnest stays visible, that is the sign.

![Two views of the same board, ground plane filled in blue. At the top, crossed out in red: the fill is divided into two areas numbered 1 and 2, area 2 being trapped along the left edge by the tracks that ring it, never touching area 1. Thin ratsnest lines remain in the centre. At the bottom, ticked with a green mark: the same fill forms a single continuous area across the whole board, and no ratsnest is visible any more.|560](/ressources/img/easyeda/plan-de-masse-ok-pas-ok.png)

In the example at the top, area **2** is trapped along the left edge by the tracks that ring it. It never reaches area **1**. Three ways out, in this order of preference: **move a component** to open a passage, **redraw a track** differently, or as a last resort **reduce the clearance** in the design rules. Never go below 0.5 mm, which is the limit of the cutter.

> [!tip]
> **The ground plane is redone at every change.** As soon as you move a component or a track, delete it and create it again. It is instantaneous, and a ground plane computed on the old routing no longer means anything.

### 19. Having the board checked by the software

*Design → Check DRC*. The **DRC**, for *Design Rule Check*, reads your board again and confronts it with the design rules set in section 11.

![EasyEDA Design menu open, Check DRC entry highlighted. On the left, the project panel shows three rows: Composants zero of zero, Nets zero of zero, and DRC Errors zero, the last one selected.|640](/ressources/img/easyeda/check-drc.png)

If it finds anything, the list appears on the left and **each error is marked with a cross on the board**. Click a row to be taken to the offending place.

![On the left, the DRC Errors panel showing four errors: three espacement entre pastille et piste rows, the first of which is outlined in red, and one Exists incomplete connection row. A large red arrow links that first row to the board view on the right, where a yellow cross marks the place where a track runs too close to a pad of capacitor C1.|640](/ressources/img/easyeda/exemple-erreur-drc.png)

Two families come up all the time:

- **`espacement (Pastille - Piste)`**, that is pad to track clearance, means two coppers are too close to each other. Fix it by moving the track away, not by loosening the rule;
- **`Exists incomplete connection`** means there is a ratsnest connection left that you have not drawn. It is often an isolated ground island, so read the previous section again.

> [!warning]
> **The DRC only checks the drawing.** It verifies distances and missing connections, nothing else. It will **never** tell you that your circuit is wrong, that you have swapped two pins or picked an absurd resistor. A DRC with zero errors means "this board can be manufactured", never "this circuit works".

Fix, **redo the ground plane**, run the DRC again. Repeat until zero.

### 20. The paper print, the last net before the copper

Before you start milling, there is one check left that costs no more than a sheet of paper: **print the board at 1:1 scale and lay the real components on it**. Better to lose an A4 sheet than a copper blank.

*Fichiers → Exporter → PDF*, that is File → Export → PDF.

![EasyEDA Fichiers menu open, Exporter entry selected, opening a submenu offering PDF, PNG and SVG. The PDF entry is highlighted. Below the menu are Exporter la nomenclature and Generate PCB Fabrication File en Gerber.|560](/ressources/img/easyeda/export-pdf-menu.png)

The export window asks which layers to output. What matters: **`Taille 1:1`**, the type **`Couche fusionnée`**, the colour **`Noir sur blanc`**, and the layers **`Côté Cuivre`**, **`BoardOutLine`** and **`Trous`** ticked. That is 1:1 size, merged layer, black on white, copper side, board outline and holes.

![Exporter document window. The output format is PDF, the size is 1:1. The engine is Local, the graphics are Full Graphics, the type is Couche fusionnée, the colour is Noir sur blanc. The layers table shows Côté Cuivre, Sérigraphie côté Cuivre, the mask layers, BoardOutLine, Multi-couches and Trous ticked for export, while Côté Composants, Sérigraphie côté Composants and Document are not. The Mirroir box is ticked at the top of its column. At the bottom, a note in red gives a zoom of 100 per cent and the option of printing to make your own artwork.|600](/ressources/img/easyeda/export-pdf-reglages.png)

At the printing stage, one setting alone matters, and it is the one everybody gets wrong: **tick `Actual size`**, never `Fit`. A board printed "to fit" on the page proves absolutely nothing.

![Windows print dialogue. In the Page Sizing and Handling section, the Actual size option is selected and outlined in red, above the Fit and Custom Scale options. The preview on the right shows the board, very small, centred on an A4 page, and reports a document of 50.4 by 36 millimetres.|640](/ressources/img/easyeda/parametres-imprimante-pour-test-impression.png)

Then lay your components on the sheet, by transparency against a window or a lamp, and check that **the leads fall into the holes**. This is the footprint check of section 3, for real, and it is the last moment when a mistake is still free.

![A hand holds an eight-pin black package resting on a printed sheet of paper, lit from behind. The circuit shows through by transparency: the tracks in white, the pads and their holes lined up. The legs of the component fall exactly opposite the row of pads intended for it.|560](/ressources/img/easyeda/verification-footprint-sur-impression.jpg)

The component is at its real size, and so is the print. If the leads fall opposite, they will fall opposite on the copper. If they do not, you have just saved a blank.

### 21. Why you have been working mirrored from the start

One point that throws people, and that is better understood before soldering.

The copper is **underneath** the board, and the components sit **on top**. What you have been looking at on screen since the beginning of the session is therefore the copper face seen **through** the board, that is to say mirrored relative to the face where you will put the parts.

That is why the workshop flips the drawing before milling. Once the board comes out of the machine, it is the right way round for soldering. You have nothing to do about it, you just need to know, so as not to be surprised when your board looks "backwards".

![Two photographs. On the left, a bare copper board seen from below during soldering: the tip of an iron heats a pad while solder wire arrives on it, in the middle of a network of copper tracks and lined-up holes. On the right, a finished board seen from above: on the component side, no track is visible, only a large forty-pin integrated circuit, resistors, capacitors, red LEDs and a crystal sitting on the bare face of the blank.|640](/ressources/img/easyeda/soudure-cote-cuivre-et-exemple-pcb-termine.jpg)

Soldering is therefore done **on the copper side**. And once the board is turned over, no track is visible any more. They are all underneath.

## Sharing a project

Your board is finished. All that is left is to get it out of the software.

In offline mode, **everything lives in a folder on your machine**. Nothing is saved anywhere else, nothing is shared on its own. So the same gesture serves three purposes: **handing in** your work, **passing it** to a project partner, and **backing it up** before doing something silly.

*Fichiers → Exporter → EasyEDA*, which produces a `.json` file.

![EasyEDA Fichiers menu open, Exporter entry selected, opening a submenu offering PDF, PNG, SVG, DXF, Modèle 3D, Altium Designer, EasyEDA, Routage automatique du fichier and Source SVG. The EasyEDA entry is highlighted.|560](/ressources/img/easyeda/derniere-etape-export-json.png)

That `.json` is self-contained: it carries **the symbols and the footprints** of your components, including those that came from *Contributions des utilisateurs*. Whoever opens it therefore has nothing to download, even if they have never seen those parts.

> [!note]
> **This is not a Gerber.** The industry standard exchange format is the Gerber, and you will indeed find it in the same menu. But the school workshop works from the EasyEDA `.json`, so that is the one we hand over. See [[pcb-en|the printed circuit board hub]] for the general vocabulary of manufacturing.

Attach **your schematic** to it, without which nobody can read back what the board is supposed to do.

> [!tip]
> **Export before every big change.** Offline mode has no history. If you break your board while trying to improve it, there is no button to go back once the software has been closed. A dated `.json` in a corner of your disk is the only backup you have.

## What comes next

You have taken a board from the first stroke of the schematic to the manufacturing file. What is left to do no longer happens in front of a screen. The blank comes out of the milling machine, you solder your components, you plug in the terminal. And the LED blinks, or it does not.

If it does not blink, the fault is almost never in the board. It is in a cold solder joint, an LED fitted the wrong way round, or a resistor value that was not the one you thought. The board itself has already been checked three times, at the DRC, at the paper print, and by the workshop.

## See also

- [[pcb-en|Printed circuit board]] — the hub: vocabulary, general flow, and choosing a design tool
- [[kicad-en|KiCad]] — the other tool on the course, aimed at external manufacturing
- [[lire-une-datasheet-en|Reading a datasheet]] — to check the dimensions of a footprint
- [[analyse-de-schema-electronique-en|Reading a schematic]] — reading and placement conventions
- [[simulation-electronique-en|Circuit simulation]] — trying a circuit out before routing it
- [[soudure-en|Soldering]] — what comes next, once the board is milled

## Pitfalls

> [!failure]- My board is milled, but I cannot solder one of the components
> Check its footprint. It probably has **no holes**. You picked a surface mount part, and the workshop has no way of soldering it.
>
> There is no clean recovery at this stage. Go back to the schematic, replace the part with a through-hole equivalent, with a `TH` or `DIP` footprint and drilled pads in the preview. Then remake the board.
>
> It is the second most frequent source of error on this exercise, just after online mode. It takes two seconds to prevent when choosing the component, and costs a copper blank when forgotten.

> [!failure]- A whole class is missing from the component search
> You have gone back to connected mode without noticing. The software gives no warning. It lets you work, and the gap only shows up later, when you go looking for a component. The *Contributions des utilisateurs* class has vanished from the classes row.
>
> **Look at the title bar**, at the top left. The words `Projects Offline mode` must be there. If they are not, go back through *Réglages → Desktop Edition Setting… → Run Mode Setting…*, choose `Project Offline Mode`, `Apply`, and restart the software.
