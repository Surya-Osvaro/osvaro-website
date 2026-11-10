---
title: "Your Fixed-Fee Visa Margin Is Gone Before the File Is Opened"
description: "Unrecorded chasing and resorting can eat 12% of a fixed-fee visa before legal work starts. See the margin math and the pre-submission fix for UK firms."
date: "2026-11-10"
author: "Surya Vardhan"
category: "Operations"
tags: ["Case Readiness Engine", "Fixed-Fee Margin", "Pre-Submission Workflow", "UK Immigration Operations"]
---

On a fixed-fee visa matter, the margin is decided before the legal work starts.

Take an illustrative £1,800 fee. Add 6.5 hours of chasing, checking and resorting that nobody records as billable. At a blended £35 an hour, that is £227.50 gone before a solicitor opens the file. That is 12.6% of the fee.

Now open 40 of these a month. The leak is £9,100 a month. Over 12 months, it is £109,200 of margin that never appears on a report, because nobody logs the time.

Your timesheets show a busy team. Your accounts show a thin margin. The 6.5 hours sit in the gap between the two, and they repeat on every file. The figures here are an illustrative model, not a measured client result. The checklist further down lets you replace them with your own.

## What Is Case Readiness?

**Case readiness is the state of an immigration file once every required document is present, legible and checked against the Home Office rules for its route, so a solicitor can begin the legal review without chasing the client. A case readiness engine produces that state before a fee earner opens the matter.**

Osvaro's [Case Readiness Engine](/products/case-readiness-engine) does this for UK immigration matters. It sits upstream of your case management system, which keeps handling billing, deadlines and file status as it does today. The engine checks the evidence. The solicitor then reviews the prepared matter and signs it off.

## The Math: Where a Fixed Fee Goes Before Legal Work Starts

Under hourly billing, wasted time at least reaches an invoice somewhere. Under a fixed fee, every unrecorded hour comes straight out of margin. Nobody logs it, so nobody manages it.

Here is the same model at different volumes, using 6.5 unrecorded hours per file at £35 an hour (£227.50 per file).

| Files opened per month | Leak per month | Leak per year |
|---|---|---|
| 10 | £2,275 | £27,300 |
| 20 | £4,550 | £54,600 |
| 40 | £9,100 | £109,200 |
| 60 | £13,650 | £163,800 |

A higher fee dilutes the percentage. On a £3,000 fee, £227.50 is 7.6%. The cash lost per file stays the same, and so does the annual total.

The 6.5 hours is made of small tasks that feel too minor to log:

- Messaging a client three times for page 2 of a bank statement.
- Opening an attachment, squinting at it, and asking for a retake.
- Renaming and resorting files into the order the application needs.
- Converting a foreign bank balance into pounds for each day of the funds window.
- Finding a name mismatch between a passport and a Certificate of Sponsorship at 9 PM the night before submission.

None of this needs legal judgment. All of it lands on people you pay to exercise legal judgment. For a deeper look at the intake side of this problem, read our guide to [staged document validation and chasing](/blog/immigration-client-document-validation-chasing).

## What a Readiness Gate Does Before the File Reaches a Fee Earner

A readiness gate is a set of checks that every document must pass before it counts toward a complete file. Here is the sequence the Case Readiness Engine runs.

1. **Statutory checklist on matter creation.** The solicitor opens the matter and selects the route and its modifiers, such as in-country or entry clearance, dependants, and whether the sponsor certifies maintenance. The engine builds the document checklist from fixed rule tables, not from a chatbot. The client receives a single-use secure link. No account, no password.
2. **Dedicated upload slots.** Passport, Certificate of Sponsorship, bank statements, English language evidence and, where relevant, a TB certificate each have their own slot. If a client drops a passport into the bank statement slot, the engine recognises it within seconds and moves it to the right place.
3. **Legibility check.** Blurry, dark, cropped or skewed scans are rejected at upload, with plain-English instructions for retaking the photo. The solicitor never opens an unreadable attachment.
4. **28-day funds check.** The engine reads the bank statement, builds the daily balance and confirms the balance never dips below the required amount on any day of the 28-day window. If the statement is in Indian rupees, each day's balance is converted to pounds using OANDA exchange rates. The engine logs the rate used and the lowest balance reached, and names the exact date of any shortfall.
5. **Salary and cross-document checks.** The salary on the Certificate of Sponsorship is compared against the applicable salary requirement for its SOC code. Names, dates of birth and nationality are cross-checked across the passport, the CoS and the bank statements. A different person is a Critical Blocker. `P. Sharma` against `Priya Sharma` is an Advisory Flag.
6. **Chasing on a schedule.** Reminders for missing or rejected documents go out in the firm's name until the checklist is complete. Nobody on your team sends them or tracks them in a diary.
7. **Case Ready signal.** When every check passes and no Critical Blocker remains, the responsible solicitor is notified. They receive a one-page brief and one combined ZIP containing all the matter's documents, indexed in filing order.

The table below shows what changes on the file itself.

| Task | Without a readiness gate | With a readiness gate |
|---|---|---|
| Building the checklist | Paralegal assembles it from memory or a template | Generated from rule tables when the matter opens |
| Collecting evidence | Email and WhatsApp threads | Dedicated slots behind one secure link |
| Unreadable scans | Discovered when a fee earner opens the file | Rejected at upload with retake guidance |
| 28-day funds and currency | Manual statement scrolling and manual conversion | Daily balance and conversion computed and logged |
| Chasing | Diary reminders for fee earners and paralegals | Scheduled reminders sent in the firm's name |
| What reaches the solicitor | A pile of attachments | A case-ready file with a brief and one ZIP |

## Where the Human Review Stays

The engine does not file anything with the Home Office. It does not give legal advice, assess the merits of a case, or make discretionary judgments. Every application is reviewed by a solicitor, who signs it off and submits it.

AI reads the documents. Fixed Home Office rule tables make every pass or fail decision. That split matters in UK immigration work, because a plausible guess about a bank balance or a salary threshold can end in a refusal. If you want the longer argument, see our explanation of the [Immigration Practice Operating System](/blog/what-is-an-immigration-practice-operating-system) and why rule checking has to come before generative AI.

What changes is the state of the file on day one. The solicitor starts with a clear, checked matter and a record of what was verified. The legal review begins at the legal question, with no client chasing before it. The engine is built so that this review becomes a check of a prepared file, with a target measured in minutes instead of hours.

## Practical Operational Checklist for Firms

You can measure your own leak this week, with or without Osvaro.

1. **Pick 10 recently closed fixed-fee matters** on the same route, so the comparison is fair.
2. **Reconstruct the pre-review time on each.** Count every minute spent chasing, resorting, rechecking scans, converting currency and fixing name mismatches before the solicitor's legal review began.
3. **Include everyone who touched the file.** Paralegals, caseworkers and fee earners all count.
4. **Apply your blended hourly cost.** Use your real cost figure, not the fee rate you charge on hourly work.
5. **Average the result to get your leak per file.** Hours multiplied by blended rate.
6. **Scale it.** Multiply by monthly file volume, then by 12.
7. **Compare it with the fixed fee.** Leak per file divided by the fee gives the percentage of margin gone before legal work starts.
8. **Rank the causes.** Fix the top two first. If they are chasing and unreadable scans, a readiness gate addresses both directly.

For firm-wide visibility of this kind of loss across all live matters, the [Immigration Operations Control Tower](/products/operations-control-tower) tracks capacity and fixed-fee margin as files move through the pipeline.

## Frequently Asked Questions

**Does the Case Readiness Engine replace solicitors or caseworkers?**
No. Every matter is reviewed and signed off by a solicitor before anything goes to the Home Office. The engine replaces the chasing, resorting and manual checking that happen before that review.

**How is it different from a case management system?**
A case management system stores the file, tracks deadlines and records time. The Case Readiness Engine checks whether the evidence inside the file is complete, legible and consistent before the matter reaches a fee earner. The two work side by side.

**Does it handle bank statements in foreign currencies?**
Yes. The engine converts each day's balance into pounds using OANDA exchange rates, checks the full 28-day window, and logs the rate used and the lowest balance. A statement in rupees, naira or dirhams goes through the same check as one in sterling.

**What happens when a document fails a check?**
The client is told exactly what is wrong and how to fix it, and the issue appears on the firm's exceptions panel as a Critical Blocker or an Advisory Flag. The engine keeps chasing until the item is resolved, and the solicitor steps in only where an exception needs legal judgment.

## Operational Summary

A fixed fee prices the legal work. It does not price the hours spent getting the file ready for it. Those hours come out of margin, they repeat on every matter, and they stay invisible until someone measures them.

If you fix one thing in your pre-submission workflow this quarter, start where the unrecorded hours are. A readiness gate gives your solicitors a checked file on day one and gives your firm its margin back. To see what that looks like on your own files, ask about a 15-Minute Casework Bottleneck Audit, or explore the [Case Readiness Engine](/products/case-readiness-engine).

---

*This article is for operational and workflow awareness and does not constitute formal legal advice.*

**About the author:** Surya Vardhan is Founder & CEO at Osvaro, helping high-volume UK immigration firms systemise caseworker workflows, evidence intake, and sponsor compliance.
