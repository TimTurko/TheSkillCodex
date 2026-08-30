
The **BOM** (*bill of materials*, *nomenclature* in French) is the exhaustive, costed list of every component, material and service needed to build a system: for each line, a description, a supplier part number, a quantity and a cost. Produced at step 3 of the [[dossier-technique-en|technical design file]], it consolidates the parts lists of the three disciplines into a single document that **commits the budget** of the project and **triggers the orders**.

## What is it for?

The BOM is the moment when the project **tips from paper to hardware**. As long as it is not settled, the drawings of the three disciplines remain intentions. Once costed and approved, it authorises the spending and the purchasing. It is the pivot between design and build.

It fills three inseparable roles:

- **Costing the real price of the project.** The total excluding tax, to the cent, is set against the budget envelope. That figure is what says whether the project is fundable as it stands, or whether an architecture decision taken in [[concept-en|concept]] has to be revisited.
- **Serving as the basis for purchasing.** Each line of the BOM becomes a purchase order line. A clean BOM makes issuing the orders almost mechanical. A vague BOM turns it into a source of errors (wrong part number, wrong quantity, forgotten line).
- **Feeding the downstream deliverables.** The [[acv-simplifiee-en|simplified LCA]] is computed on the real BOM (environmental footprint per item), and the supply [[retroplanning-en|backward planning]] is set on the delivery times (*lead times*) announced line by line.

> [!warning] Watch out
> **BOM ≠ [[etat-de-l-art-technique-en|technical state of the art]].** Both are costed tables, but they look in opposite directions. The state of the art compares **existing external solutions**, upstream (in the [[specification-technique-en|technical specification]] phase), in order to *calibrate* the levels of the [[cahier-des-charges-fonctionnel-en|CdCF]]. The BOM lists the components **internal to the project**, downstream (technical design file), in order to *commit* the budget and buy. The one bridge between them: the "openness / BOM available" criterion of the state of the art sometimes points to a reusable building block, which will later turn up in the project's BOM.

## Step by step

Building a BOM takes four stages: list the components, source them from the supplier catalogue, cost and structure the table, then check it and keep it up to date. The order matters. You do not cost before sourcing, and you do not check before costing.

### 1. List and group the components

Aggregate the parts lists of the three disciplines into a single list. Mechanics brings the parts, materials and fasteners. Electronics brings active and passive components, connectors and the board. Software generally consumes **no hardware of its own** beyond the development PC. Grouping the lines by item type (electronics / mechanics / consumables) makes the table readable and prepares the split by supplier of the next stage.

The recurring trap at this stage is the silent omission: it is not the big components that get forgotten, but the fasteners, the consumables (filament, solder, sleeving) and the **subcontracting** ([[usinage-en|machining]], outsourced 3D printing). A line forgotten here is a missing order that will block integration.

> [!tip] Tip
> **Start with the confirmed components.** The choices that came out of the concept decision matrices without reservation are quick to cost and stabilise the bulk of the BOM. Keep the components rejected at the end of the [[preuve-de-concept-en|proof of concept]] for last: they may call for a round trip with the supplier, or for subcontracting to be costed separately.

### 2. Source from the supplier catalogue

On a school project, the BOM is built on the **partner supplier catalogue** negotiated by the institution: an electronics partner for components, a materials partner for metals and plastics, a fablab partner for machining or printing subcontracting. This constraint is structuring. It limits which part numbers are reachable, but fixes pricing terms and lead times known in advance.

For each line, fill in the catalogue part number, the unit price excluding tax and the announced lead time. If a selected component has no equivalent in the catalogue, there are two ways out: a simple substitution decided internally, or escalation to the project supervisor for an off-catalogue purchase (a heavier process). In every case, mark the off-catalogue line with an explicit flag and its estimated extra cost.

### 3. Cost and structure the table

Cross the listed lines into a table with normalised columns: *supplier / description / part number / quantity / unit price excl. tax / line total excl. tax / lead time*. The line total is computed (quantity × unit price), the grand total is added up **to the cent**. That level of precision is what makes the total enforceable against the budget envelope at stage 4.

Two writing disciplines inherited from the state of the art: no empty cell (a missing value is written `n/a` or `?`, never left blank), and every value derived by estimation is marked as such (`~95 € (fablab quote)`). A total that "comes out round" is almost always an approximate total. Beware.

### 4. Check the BOM and keep it alive

Three checks before freezing:

- **Budget consistency** — compare the total excluding tax with the initial envelope. Three outcomes: within the envelope (you carry on), marginal overrun (internal trade-off or a justified top-up), structural overrun (feedback towards the [[concept-en|concept]]: a [[matrice-de-decision-en|decision matrix]] retained a solution above the target budget).
- **Critical lead time** — spot the part that takes longest to arrive. That one fixes the deadline for issuing the order and feeds the supply [[retroplanning-en|backward planning]].
- **Versioning.** A BOM is alive. A component rejected during [[integration-et-tests-en|integration]] modifies it. Every version must be dated so that the team buys from the right one.

## Example — 3-axis teaching arm

Take the running example, a 3-axis teaching robotic arm. The final BOM, consolidated from the school's partner supplier catalogue after the structuring upstream change *3D-printed PLA → machined aluminium* decided in the proof of concept:

| Supplier | Description | Part number | Qty | Unit price excl. tax | Line total excl. tax | Lead time |
| --- | --- | --- | --- | --- | --- | --- |
| Electronics | NEMA 17 stepper, 1.8°/step | ELEC-MOT-N17 | 3 | 14.80 € | 44.40 € | 5 d |
| Electronics | A4988 driver | ELEC-DRV-A49 | 3 | 4.20 € | 12.60 € | 5 d |
| Electronics | Arduino-compatible [[microcontroleur-en\|MCU]] | ELEC-MCU-ARD | 1 | 22.00 € | 22.00 € | 5 d |
| Electronics | Regulated 24 V / 3 A power supply | ELEC-ALI-243 | 1 | 18.50 € | 18.50 € | 5 d |
| Material | 6061 aluminium bar Ø20 mm × 1 m | MAT-ALU-6061-20 | 1 | 12.30 € | 12.30 € | 7 d |
| Material | M3 + M5 fasteners (kit) | MAT-VIS-LOT | 1 | 8.40 € | 8.40 € | 5 d |
| Fablab | Machining of 3 joints (subcontracted) | SST-USI-3PCS | 1 | 95.00 € | 95.00 € | 15 d |
| **Total excl. tax** | | | | | **213.20 €** | **15 d (max)** |

**What the BOM decides.** Total **213.20 € excl. tax**, under the initial envelope of 300 € → it goes to approval with no budget alert. The **critical lead time** is the subcontracted machining (15 days): it sets the order deadline at three weeks before the start of [[integration-et-tests-en|integration and testing]]. Grouping by supplier (3 electronics lines, 2 material, 1 fablab) directly foreshadows the **three purchase orders** that will be issued at stage 5, one per partner.

The BOM also feeds the [[acv-simplifiee-en|simplified LCA]]: the *aluminium bar + machining* line alone accounts for nearly 28% of the footprint, against 3% for the former PLA line, the real environmental cost of the upstream change, to be reported in the [[ecoconception-en|eco-design]] conclusion.

## Pitfalls

**An empty cell or an approximate total.** A missing value left blank gets confused with a zero and falsifies the total. A total not costed to the cent is not enforceable against the envelope. The `n/a` discipline and exact addition are what turn a list into a budget deliverable.

**Sourcing outside the partner catalogue.** Choosing the perfect part number from a general distributor is useless if it is not in the catalogue negotiated by the school. Sourcing is done on the closed catalogue. Off-catalogue is the flagged exception, not the rule.

**Forgetting the fasteners, the consumables or the subcontracting.** It is the small lines that get forgotten, and a joint left unordered for machining blocks integration just as much as a missing motor. The listing must sweep beyond the visible components.

**Discovering an overrun when the order is issued.** By the time you order, it is too late to feed back cleanly to the concept. The running total is checked at every line added, not once the table is finished.

**Trimming the BOM to fit the envelope.** Cutting quantities or removing safety margins to stay under budget opens the door to a failed integration or to a [[securite-et-qualite-en|safety and quality]] non-conformity. If the overrun is structural, it is the concept you revisit, not the BOM you truncate.

**Confusing the BOM with a supplier quotation.** The BOM is the document **of the project** (all disciplines, all sources), not the invoice of a single partner. A quotation feeds the BOM. It does not replace it.

## Special case — a project with no imposed supplier catalogue

Not every project has a negotiated partner catalogue: a personal project, a hackathon, a self-funded student club. Sourcing is then done on open distributors (Mouser, RS, Digi-Key, local suppliers), and two extra columns become indispensable: the **distributor** chosen for each line and the **shipping costs** (often significant on a small basket, sometimes higher than the component itself). Lead times also vary far more from one distributor to another.

The method does not change — list, source, cost, check — but the BOM gains from grouping lines by distributor, in order to pool shipping costs and limit the number of orders. The discipline of a total excluding tax to the cent and of the critical lead time stays strictly the same.

## Where it fits in the project

- **Step 3 of the [[dossier-technique-en|technical design file phase]]** — the main phase, where the BOM is consolidated, costed and set against the budget envelope.
- **Step 5 of the technical design file.** Each line becomes a purchase order line, grouped by partner supplier. The BOM is the single source of the orders issued.
- **Step 2 of the [[specification-technique-en|technical specification]].** The BOM appears upstream as an *openness criterion* in the [[etat-de-l-art-technique-en|state of the art]] (is a competing solution's parts list published?), not yet as a deliverable.
- **[[integration-et-tests-en|Integration and testing]].** The BOM serves as a receiving checklist: part number received = part number ordered, quantity received = quantity ordered.

A BOM built cleanly upstream makes issuing the orders mechanical and receiving verifiable. Botched, it is paid for dearly downstream — reordering, paying a second time, losing weeks at the worst moment of the project.

## See also

- [[dossier-technique-en|Technical design file]] — the phase where the BOM is produced (step 3) then ordered (step 5)
- [[etat-de-l-art-technique-en|Technical state of the art]] — upstream tool, not to be confused with the BOM
- [[acv-simplifiee-en|Simplified LCA]] — downstream deliverable computed on the real BOM
- [[retroplanning-en|Backward planning]] — supply is set on the lead times of the BOM
- [[matrice-de-decision-en|Decision matrix]] — upstream tool (concept) that freezes the component choices entering the BOM
