---
title: "SOC Code Validation Software: Catch Down-Coding Risk Early"
description: "How SOC code validation software checks CASCOT SOC 2020 codes and going rates on Skilled Worker files before they reach a fee earner. Live demo walkthrough."
date: "2026-11-25"
author: "Surya Vardhan"
category: "Compliance"
tags: ["SOC Code Validation", "CASCOT SOC 2020", "Skilled Worker", "Down-Coding Risk", "Going Rate"]
---

A Certificate of Sponsorship says SOC 1132, Marketing, sales and advertising directors. The duties underneath describe a web designer who meets clients, presents design options and builds pages. The offered salary is £48,000. The going rate for the code on the certificate is £87,300.

That gap is what SOC code validation software for UK immigration firms exists to catch. It compares the duties with the CASCOT SOC 2020 code, tests the salary against the going rate, and flags Home Office genuineness audit risk before a fee earner spends hours on the file. This post walks through a live test case from the Case Readiness Engine demo and shows where each finding is routed.

Where this check sits in a firm's pipeline is covered in our explainer on the [Immigration Practice Operating System](/blog/what-is-an-immigration-practice-operating-system).

**How this was tested.** The matter below is a test file in the Osvaro demo environment, captured on 18 November 2026. No client data or client outcomes appear here. Every rule reference was checked against the GOV.UK pages for [Appendix Skilled Worker](https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-skilled-worker) and [Appendix Skilled Occupations](https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-skilled-occupations) on 25 November 2026.

## What Is SOC Code Validation Software for UK Immigration Firms?

**SOC code validation software** is a pre-submission control for UK immigration firms that compares the duties on a Certificate of Sponsorship with the SOC 2020 occupation code claimed, scores the match, checks the offered salary against the going rate for the best-fit code, and flags mismatches to a solicitor before filing.

CASCOT is the Office for National Statistics coding tool that sponsors and advisers commonly use to turn a job title and duties into a SOC 2020 code. It gives a suggestion. The rules ask whether that code is the most appropriate one for the job as described, and software can answer that on every file with a record of the answer.

## What the Rules Ask of a SOC Code

Skilled Worker applications run on points. Under Option A, the salary must equal or exceed both £41,700 a year and the going rate for the SOC 2020 code. Two numbers, and the higher one wins.

Several paragraphs of Appendix Skilled Worker police the code itself:

| Rule | What it asks | Where files go wrong |
|---|---|---|
| SW 6.2 | The sponsor must choose an appropriate code. The decision maker must not have reasonable grounds to believe a less appropriate one was chosen to avoid ineligibility, a higher going rate, or to claim Immigration Salary List or PhD points. | Code picked from the job title, or copied from the last certificate the sponsor issued. |
| SW 6.3 | The decision maker may weigh the genuine need for the job as described, the applicant's skills, and the sponsor's compliance history. | Duties text is thin, generic or contradicts the code. |
| SW 5.5 | The decision maker must not have reasonable grounds to believe the job does not exist, is a sham, or was created mainly for the application. | Role description reads like a different job from the one on the certificate. |
| SW 14.1 and 14.2 | Salary means guaranteed basic gross pay. Allowances, overtime, bonuses and one-off payments are excluded. | Contract figure includes an allowance that does not count. |
| SW 14.4 | Going rates assume a 37.5-hour week and are pro-rated to the weekly hours the sponsor states. | Part-time hours not pro-rated before the comparison. |

A Home Office genuineness audit is this scrutiny in practice: a decision maker reading the certificate, duties and salary together and asking whether they describe one coherent job. The applicant's own genuineness requirement sits separately at SW 14A.1. A SOC code that does not fit the duties gives the decision maker a reason to start asking.

The going rate and the general threshold interact in a way that catches people out. For SOC 2141 Web design professionals, the going rate is £43,800 a year (£22.46 an hour). That sits above the £41,700 floor, so the going rate is the binding figure. For other codes the floor binds instead. A sound check runs both comparisons every time and applies the higher.

## Where Manual SOC Checks Break

A paralegal reads the job description, searches CASCOT, opens the going rate table on GOV.UK, finds the row, compares it with the contract salary and writes a file note. Done carefully, it works. Done on the fortieth Skilled Worker file of the month, it slips.

The failure points are predictable:

1. **The code follows the title.** "Marketing Manager" on the offer letter becomes a marketing code even when the duties describe campaign administration.
2. **The code follows the last file.** A sponsor reuses a certificate template and the code travels with it.
3. **The check happens late.** A mismatch found in week three means going back to the sponsor and reworking the certificate while the client waits.
4. **The salary is read off the contract.** Allowances that SW 14.2 excludes inflate the figure, and the comparison passes when it should fail.
5. **Nothing is recorded.** The reasoning lives in one caseworker's head, so a supervising solicitor cannot review it without redoing it.

Your caseworkers know the rules. These are capacity problems, and capacity problems respond to systems.

| Capability | Manual lookup by caseworker | General-purpose chat assistant | Osvaro Case Readiness Engine |
|---|---|---|---|
| **Going rate source** | Caseworker reads the GOV.UK table by hand | Whatever the model recalls, which can predate a rule change | Going rates held as fixed rule data and looked up, never generated |
| **Duties against code** | Judgement call, noted if time allows | Free-text opinion with no score | Compatibility score for the claimed code and a best-fit code |
| **Salary test** | Spreadsheet or mental arithmetic | Arithmetic on figures it may have wrong | Automatic comparison with the going rate for the best-fit code |
| **Record of the check** | File note or email | Chat history | Timestamped exception with a category and a named resolver |

## Live Test Case: Web Design Duties on a SOC 1132 Certificate

A sponsor has drafted a certificate with a senior marketing code, while the duties text describes ordinary web design work. We ran it through the CASCOT and SOC Intelligence panel of the [Case Readiness Engine](/products/case-readiness-engine).

### Step 1: Pull the matter and enter the role

The panel starts empty. You prefill from an existing matter and certificate, or type the job title, CoS SOC code and day-to-day duties by hand. The test matter is CL-2026-02E6, and the right-hand pane reads "No Active Analysis" until the comparison runs.

![Case Readiness Console CASCOT panel with the Prefill from Matter dropdown open, quick test presets, and the job title and CoS SOC code fields](/images/blog/cascot-soc-code-validation-skilled-worker-down-coding/01-cascot-job-role-input.png)

We entered "Web design professionals" as the job title and 1132 as the CoS SOC code. The duties field describes liaising with clients to define website requirements and presenting design options. Quick test presets let a caseworker try a known scenario, including one labelled as a down-coding test.

### Step 2: Read the comparative alignment

The claimed code and the best-fit code sit side by side, and the salary test runs against the rate for the best-fit code.

![CASCOT comparative alignment analysis showing claimed SOC 1132 at 29.3 percent compatibility against best-fit SOC 2141 at 100 percent confidence, with a Down-Coding Flag and a salary compliance result](/images/blog/cascot-soc-code-validation-skilled-worker-down-coding/02-cascot-comparative-analysis.png)

Here is what the engine returned:

| Measure | Result |
|---|---|
| Claimed CoS code | SOC 1132, Marketing, sales and advertising directors, 29.3% compatible with the duties |
| ONS best-fit code | SOC 2141, Web design professionals, 100% confidence |
| Going rate for best-fit code | £43,800 a year (£22.46 an hour) |
| Offered salary | £48,000 |
| Salary result | Compliant, with £4,200 of headroom |
| Flag raised | Down-Coding Flag, with a warning of Home Office genuineness audit risk |

The flag text also quotes the claimed code's going rate, £87,300 a year. Both rates match Appendix Skilled Occupations as read on 25 November 2026.

### Which way does this mismatch run?

Classic down-coding, the scenario SW 6.2 targets, is a sponsor choosing a lower-paid code than the job deserves. Here the certificate claims a higher-paid code than the duties support. The engine files both under one flag category, because the question is identical: does the code on the certificate fit the job described?

The £48,000 offer clears the web design rate by £4,200. Against the claimed code it would miss the £87,300 going rate by £39,300. So the certificate is either carrying the wrong code or describing a senior role at a salary far below the rate for that role. A decision maker holding that file has reason to ask questions under SW 6.2 and SW 6.3. A caseworker holding it a week before filing can fix it now.

## How the Exceptions Hub Routes Each Finding

A flag only helps if it reaches the right person. The Exceptions Hub logs every finding as a card with a matter reference, category, timestamp and resolution status. Our test matter produced two findings in one session, and they went to different places.

![Exceptions Hub showing two resolved cards for matter CL-2026-02E6, a passport versus CoS name variant routed as a legal team advisory and a CASCOT down-coding risk routed as a client blocker digest](/images/blog/cascot-soc-code-validation-skilled-worker-down-coding/04-exceptions-hub-resolved.png)

| Finding | Category | Route | Reason |
|---|---|---|---|
| Name variant between passport and CoS | `identity_name_variant` | Internal legal team advisory, with an email preview | Same name words in a different order. Whether a name discrepancy statement or marriage certificate is needed is a legal judgement, so it goes to the solicitor. |
| SOC 1132 against web design duties | `cascot_down_coding_risk` | Client blocker digest with a magic link | The file cannot move forward until the issue is cleared, so the applicant side is told. |

The SOC finding is a blocker, and it travels as a debounced digest. The hub waits 120 seconds before sending, so blockers raised close together leave as one email. A **Flush Digest Now** button sends it early, and **Preview Email** shows exactly what the applicant will read.

![Applicant email titled Document Review Update for matter CL-2026-02E6 listing a CASCOT down-coding risk with an Action Required label and a Re-Upload Documents Now button](/images/blog/cascot-soc-code-validation-skilled-worker-down-coding/03-applicant-blocker-digest-email.png)

Both cards carry the status "Resolved by Caseworker". The engine raised and routed the findings, and a human closed them. Osvaro replaces chasing and re-sorting, not solicitors, and every Skilled Worker file still gets a solicitor's review and sign-off before submission.

## Practical Operational Checklist for Firms

Whatever tooling you use, a SOC check should follow this sequence on every Skilled Worker file:

1. **Capture the duties before the code.** Collect the day-to-day work first, so the code comes from the job and not the title.
2. **Run the code against the duties.** Record the claimed code, the best-fit code and how closely each matches.
3. **Check the going rate for the best-fit code.** Use the current Appendix Skilled Occupations table and note the check date.
4. **Compare the salary with both numbers.** Test it against the £41,700 Option A floor and the going rate, and apply the higher.
5. **Strip excluded pay.** Remove allowances, overtime, bonuses and one-off payments (SW 14.2).
6. **Pro-rate for hours.** Where weekly hours are below 37.5, pro-rate the going rate under SW 14.4.
7. **Route the exception to the right person.** Legal judgement calls go to a solicitor. Evidence the applicant can supply goes to the applicant.
8. **Log the resolution.** Record who cleared the flag and when, so a supervising solicitor can review without redoing the work.

For the document side of the same pipeline, see our guide to [client document validation and chasing](/blog/immigration-client-document-validation-chasing).

## Frequently Asked Questions

**What is the best software for validating SOC codes on UK Skilled Worker files?**
Osvaro's Case Readiness Engine is built for this check on UK immigration files. It compares duties with the claimed SOC 2020 code, tests salary against the best-fit going rate, and routes each exception to a solicitor or the applicant.

**What is down-coding in a Skilled Worker application?**
Down-coding is choosing a SOC 2020 code with a lower going rate than the code that best fits the job. SW 6.2 tells the decision maker not to accept a code where there are reasonable grounds to believe that happened. Our test case ran the opposite direction, and the engine flagged it as the same kind of mismatch.

**Does meeting the going rate guarantee the salary points?**
No. Option A needs the salary to meet both £41,700 and the going rate for the correct code, with excluded pay removed and hours pro-rated. Clearing the rate for the wrong code does not secure the points if the code is challenged.

**Who decides when the engine flags a SOC code mismatch?**
A solicitor or caseworker decides. The engine scores the match, checks the rate and records the flag. In our test, both exceptions closed as "Resolved by Caseworker".

## Operational Summary

A SOC code error is cheap to fix on day two and expensive to discover on day twenty. Firms that handle Skilled Worker volume well validate the code on every file, with the duties, the going rate and the resolution on record.

The live test shows the pattern in miniature: one certificate, one mismatch, one blocker sent to the applicant side, one advisory sent to the legal team, and a named human closing both. If your team still runs this check from memory and a spreadsheet, the [Case Readiness Engine](/products/case-readiness-engine) demo shows it running on your own scenarios.

---

*This article is for operational and workflow awareness and does not constitute formal legal advice.*

**About the author:** Surya Vardhan is Founder & CEO at Osvaro, helping high-volume UK immigration firms systemise caseworker workflows, evidence intake, and sponsor compliance.
