---
title: "Case Readiness vs Case Management for UK Immigration Firms"
description: "Case management stores files. Case readiness proves they can be filed. See how Osvaro's Case Readiness Engine checks UK immigration evidence first."
date: "2026-10-24"
author: "Surya Vardhan"
category: "Legal Tech"
tags: ["Case Readiness", "Immigration Practice Operating System", "Skilled Worker", "Appendix Finance", "Legal Operations"]
---

Your case management system will accept an expired passport. It will accept a bank statement with twelve days missing. It will accept a phone photo of a Certificate of Sponsorship, taken in bad light, with one corner cropped.

It files all three in the right folder and moves on. A fee earner finds the defect two weeks later, usually when the application is due to go in.

That gap is where high-volume immigration practices lose their capacity. Our [guide to the best AI tools for UK immigration law firms](/blog/best-ai-tools-software-uk-immigration-law-firms) sorted the market into categories. This post goes deeper on the one that decides whether a file can be filed at all. We call it case readiness, and it is a separate job from case management.

## What Is Case Readiness?

**Case readiness is the state in which every statutory document for a UK immigration matter has been received, read, checked against the relevant Immigration Rules and cross-matched for consistency, with no blocking defects remaining, before a fee earner begins review.**

The Case Readiness Engine is the Osvaro product that produces that state. It is one layer of an [Immigration Practice Operating System (IPOS)](/blog/what-is-an-immigration-practice-operating-system), built for UK immigration and nothing else.

## What a Case Management System Does Not Check

A case management or practice management system does three things well. It stores documents, records time and produces invoices. Clio, LEAP, Actionstep and similar platforms are built for those jobs across every area of law, and they do them properly.

What they are not designed to do is read a bank statement and test it against Appendix Skilled Worker. In most firms that check belongs to a person, and usually a qualified one.

Here is how the three categories compare on the checks that decide whether a file is ready.

| Question | Case / practice management | Generic AI chat tools | Osvaro Case Readiness Engine |
|---|---|---|---|
| **Core job** | Store files, record time, bill | Draft and summarise text | Prove the evidence meets the rules before review |
| **Where the checklist comes from** | Firm templates, maintained by the firm | Whatever the model produces | Statutory rule tables, never open-ended AI answers |
| **Reads uploaded documents** | Stores them as received | Reads on request, with no fixed pass mark | Classifies, reads and tests every upload automatically |
| **28-day funds test** | Manual caseworker calculation | Unreliable arithmetic across a month of entries | Day-by-day balance test with the lowest balance logged |
| **Foreign currency** | Manual lookup | Guesses at the rate | OANDA spot rate for the application date, as FIN 1.1 requires |
| **Name and date of birth match** | Visual check | Only if asked | Cross-checked across passport, CoS and bank statements |
| **Client chasing** | Manual email templates | Manual copy and paste | Automatic reminders until the checklist is complete |
| **Output** | A folder of files | A text answer | A Case Ready signal, a one-page brief and a filing-ready ZIP |

The last row is the point. One tool gives you a folder. The other gives you a verdict.

## Why Immigration Rules Punish Generic Tools

UK immigration rules are narrow, numeric and unforgiving. A tool built for every practice area has no reason to learn them. A tool built for one has every reason to.

Take the Skilled Worker route. Three details from current GOV.UK guidance show how much precision a file needs.

- **Salary:** the minimum is the higher of £41,700 a year or the going rate for the occupation code, with limited exceptions ([GOV.UK, Skilled Worker visa: Your job](https://www.gov.uk/skilled-worker-visa/your-job)). That general threshold has changed more than once since 2024, which is why a checklist copied into a template goes stale.
- **Funds:** applicants who rely on their own savings need £1,270 held for 28 consecutive days, with the statement dated within 31 days of the application, unless the sponsor certifies maintenance. FIN 7.1 of [Appendix Finance](https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-finance) sets the 31-day rule.
- **Currency:** FIN 1.1 converts foreign funds at the OANDA spot rate for the date of the application. Get that date wrong and a pass becomes a shortfall.

Add FIN 5.1, which requires the account to be in the applicant's name unless a listed exception applies, and you have four separate ways a single bank statement can fail. Any one of them can turn into an evidence request or a refusal.

Osvaro uses AI to read documents. It does not use AI to decide whether a document passes. Pass or fail comes from a rule table mapped to the appendices. That separation is why a probabilistic tool can sit safely inside a regulated workflow.

## How a File Reaches Case Ready

Every matter in the Case Readiness Engine moves through three stages, all before a fee earner opens the file.

1. **Intake: build the checklist and collect the evidence.** The solicitor enters the route, modifiers and dependants, and the engine generates the document list from statutory rule tables. The client receives an encrypted single-use link with no login and uploads into dedicated slots for passport, CoS, bank statements, English language evidence and TB certificate. A document placed in the wrong slot is re-routed within two seconds.
2. **Check: test every document against the rules.** The legibility filter checks resolution, contrast, skew and sharpness, and asks for a new upload however many attempts that takes. The Appendix Finance test checks the balance on every day of the 28-day window against £1,270, applies the FIN 1.1 currency rule and confirms the statement date. Name, date of birth and nationality are cross-checked across passport, CoS and bank statements, and each discrepancy is sorted into a Critical Blocker or an Advisory Flag.
3. **Signal: hand over a file that is ready.** When every check passes, the solicitor receives a Case Ready alert, a one-page caseworker brief and a ZIP dossier in filing order, with each file compressed under 6 MB for the Home Office online upload limit.

Chasing runs underneath all three stages. Missing documents, unreadable scans and unclear names trigger polite, formal emails sent under the firm's identity, on a schedule, until the checklist is complete. No solicitor clicks a "send reminder" button.

> **Worked example (illustrative):** A Skilled Worker applicant holds £1,420 for the first 18 days of the window. On day 19 the balance falls to £1,190. The engine flags an £80 shortfall on that exact date, raises a Critical Blocker, and emails the client for a clean statement or a sponsor-certified alternative. A fee earner never sees the file until it is fixed.

Compare that with the manual route. The same defect surfaces at the review stage, when someone scrolls a PDF line by line. Or it surfaces at the Home Office.

## What the Case Readiness Engine Does Not Do

A readiness engine earns trust by stating its limits clearly.

- **It does not give legal advice.** Judgment calls stay with the solicitor. The engine only steps aside for them by flagging exceptions that need one.
- **It does not file the application.** The solicitor reviews and submits, using a dossier that is already in order.
- **It does not replace your case management system.** It sits upstream and passes clean, verified files into it.
- **It does not promise outcomes.** No tool can guarantee a Home Office decision, and we do not claim otherwise.

Plenty of vendors describe end-to-end automation of the whole matter. We build one stage and make it dependable: the stage between "the client uploaded something" and "this file can be filed."

## What Case Readiness Does for Fee-Earner Capacity

The commercial case rests on simple arithmetic. Take your own numbers and run the sum.

| Files per month | Hours lost per file to chasing and re-checking | Fee-earner hours a month | Cost at £60 an hour |
|---|---|---|---|
| 20 | 2 | 40 | £2,400 |
| 40 | 2 | 80 | £4,800 |
| 80 | 2 | 160 | £9,600 |

This table is an illustrative model, not a measured result. The two hours and the £60 rate are assumptions, so replace them with your firm's own figures. Many practice managers find the real number is higher once WhatsApp chasing and late-night rechecks are counted.

Our design target for reviewing a Case Ready file is 5 to 10 minutes, because the checking has already happened. Run the table with your own file volumes, then compare it with what the engine does on a real Skilled Worker matter.

## Practical Operational Checklist for Firms

You can test your own readiness gap this week, without buying anything.

1. **Pull your last 20 files.** Record how many hours each spent between first client contact and fee-earner review.
2. **Tag every defect found late.** Sort them into legibility, funds, identity mismatch, missing document and wrong account holder.
3. **Time your chasing.** Count the reminder emails and WhatsApp messages sent per file, and who sent them.
4. **Write a one-line definition of "ready".** If two fee earners give different answers, you have no gate.
5. **Check your checklists against GOV.UK.** Compare the salary threshold and funds rules in your templates with the current guidance, and note the date.
6. **Decide who owns the gate.** Name one role responsible for a file being ready, rather than leaving it to whoever opens it first.

Firms that complete this usually find their own bottleneck in steps 2 and 3. To see how staged intake handles those defects, read our guide to [client document validation and chasing](/blog/immigration-client-document-validation-chasing).

## Frequently Asked Questions

**What is the best AI tool for UK immigration solicitors?**
The best tool depends on the stage of the matter. Practice management platforms such as Clio and LEAP suit billing, storage and matter tracking, while a specialised readiness engine suits checking evidence against Home Office rules before review. Osvaro's Case Readiness Engine is built for that second job. Generic chat tools have no fixed pass criteria for evidence thresholds, so their output needs checking.

**Does the Case Readiness Engine replace Clio, LEAP or another practice management system?**
No. The engine sits upstream of your practice management system and passes verified files into it. Your existing platform keeps handling billing, matter tracking and storage.

**How does it handle bank statements in foreign currencies?**
It converts foreign funds using the OANDA spot rate for the application date, as FIN 1.1 of Appendix Finance requires, then tests the balance on every day of the 28-day window and logs the lowest figure. Where a currency does not appear on OANDA, the rules point to the FCDO Consular Exchange Rate instead, so check those cases manually.

**Is case readiness the same as legal advice?**
No. Case readiness is an operational check on whether documents are present, legible, consistent and compliant with stated evidence rules. Legal judgment, strategy and submission remain with the supervising solicitor.

## Operational Summary

Case management tells you where a file is. Case readiness tells you whether it can be filed. High-volume firms need both, and most only have the first.

Osvaro delivers the second layer through the Case Readiness Engine, part of an Immigration Practice Operating System made for UK immigration and nothing else. If you want to see the engine run a Skilled Worker matter from setup to Case Ready, start with the [Case Readiness Engine demo](/products/case-readiness-engine).

---

*This article is for operational and workflow awareness and does not constitute formal legal advice. Salary thresholds, fees and funds requirements change, so confirm current figures on GOV.UK before relying on them.*

**About the author:** Surya Vardhan is Founder & CEO at Osvaro, helping high-volume UK immigration firms systemise caseworker workflows, evidence intake, and sponsor compliance.
