---
title: CE marking
lang: en
type: notion
tags:
  - ese
  - notion
prerequis: []
aa: []
draft: false
source_fr: conduite/ese/marquage-ce.md
source_sha256: 8e6f4cd6293556511151904a800047df9527734908eeea077f8e77f881f3b49d
---

**CE marking** is the affixing by the manufacturer of a mark attesting that a product complies with the **European directives** applicable to it (safety, health, environment) before it is placed on the market. It is not a quality label but a regulatory **declaration of conformity**, under the manufacturer's own responsibility.

## In the project

A teaching prototype **does not aim** for real CE marking, since it is never placed on the market. What matters on the project side is being able to **identify** that a given sub-system would fall under a given directive ([[basse-tension-en|low voltage]], [[emc-en|electromagnetic compatibility]], machinery via [[iso-12100-en|ISO 12100]]…) and to **record** it as a constraint in the [[cahier-des-charges-fonctionnel-en|cahier des charges fonctionnel]], the French functional requirements specification, without building a regulatory case in-house.

*Regulatory expertise (applicable directives, conformity assessment procedures, the CE technical file) belongs to the **standards course** and to the [[securite-et-qualite-en|safety and quality]] and ESE disciplines. This wiki limits itself to flagging when a directive comes into play.*

## See also

- [[basse-tension-en|Low Voltage Directive]], [[emc-en|EMC]], [[iso-12100-en|ISO 12100]] — the directives most often concerned
- [[securite-et-qualite-en|Safety and quality]] — where conformity is recorded
- [[caracteriser-une-exigence-en|Characterising a requirement]] — a regulatory constraint is written as a requirement (binary target, often F0)
- **Standards course** (colleagues) — directives and conformity procedures
