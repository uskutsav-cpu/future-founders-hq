# Future Founders — legal readiness register

Prepared September 6, 2026 · Version 2026-09-06-draft-1

**Owner working document. Not a legal opinion, compliance certification, adopted policy, or executed agreement.** The website now contains draft notices and usable review templates. Adding pages alone does not complete the organization's legal obligations. Keep the current private preview until the responsible operator has resolved the items below with qualified counsel where necessary. This file is not in the static public directory.

## Decisions and facts still required

- Actual legal operator name, legal form, organizational mailing address, authorized adult signatory, and jurisdiction(s). Do not imply incorporation, school agency, nonprofit status, or tax exemption without records.
- Monitored privacy, legal, safeguarding, and accessibility contacts; named responsible adults and backups; private reporting and escalation process. Social links are inquiry routing, not a confidential reporting system.
- Confirm online age eligibility. The checklist proposes 13+, but the owner has not confirmed that policy. Separately assess child-directed content, actual knowledge, COPPA applicability, and international child-consent rules. Do not collect children's information until applicable arrangements are in place.
- Confirm what the Google Form actually asks, who controls it, who accesses responses, linked Sheets/exports, required fields, collection purposes, notices, retention and deletion. The form was linked, not modified or audited.
- Review name and trademark clearance. An existing youth entrepreneurship organization uses **Future Founders** at https://www.futurefounders.com/. This is a material naming-review issue, not a conclusion about ownership, registration, infringement, or whether the name can lawfully be used. Do not add ® or claim registration without verification.
- Verify permissions for the supplied logo, all photos, school names/recognition, chapter claims and later testimonials. Existing images are owner-supplied; release records were not supplied or validated. The 10-chapter headline comes from the owner's instruction; the directory contains six supplied records, not ten invented schools.

Enter confirmed identity/contact information in `data/legal-config.ts`. Review **all document copy**, including explicit unresolved-detail statements in `data/legal-documents.ts`, before adopting anything. Updating a boolean alone does not make drafts accurate. Set a real effective date/version only after approval; archive prior versions and acceptance records. Conditional templates need their own activity-specific completion and approval even if website notices are adopted. The global draft flag should remain false until every exposed document's status is correctly represented; split document statuses before adopting only a subset.

## Coverage of the supplied 25-point checklist

| # | Item | Implemented location | Remaining owner work |
|---|---|---|---|
| 1 | Privacy policy | `/privacy` | Operator, exact collection/provider inventory, legal bases, rights workflow, retention, transfers, effective date |
| 2 | Children/minors | Privacy and Terms age sections; `/legal/participant-consent` | Confirm age rules; assess child privacy and obtain applicable verifiable/guardian permissions |
| 3 | Terms / acceptance | `/terms`; `/apply` review step | Adopt reviewed terms; record actual affirmative acceptance in Google Forms or enrollment system |
| 4 | Cookies | `/cookies` | Inventory deployed host cookies; no optional application trackers currently installed |
| 5 | Privacy choices | `/privacy-choices` | Browser draft deletion works; supply monitored inbox and implement requests |
| 6 | Accessibility | `/accessibility` | Assign contact, audit assistive technology, remediate issues and provide alternatives |
| 7 | Conduct / safeguarding | `/code-of-conduct` | Adult lead, training, private reports, escalation and appeals |
| 8 | Chapter affiliation | `/legal/chapter-agreement` | Complete school/operator facts, approvals, governance, money rules and signatures |
| 9 | Participation / parent consent | `/legal/participant-consent` | Activity-specific supervision, guardian permissions, travel and medical protocols; counsel-reviewed releases |
| 10 | Media release | `/legal/media-release` | Obtain granular permissions; maintain a permission register and withdrawal process |
| 11 | Competition rules | `/legal/competition-rules` | Complete and publish rules before any organization-run competition; none announced now |
| 12 | Refund/cancellation | `/legal/refunds` | No checkout now; publish specific terms before collecting fees |
| 13 | Donations | `/legal/donations` | No donation checkout now; legal recipient, tax status, solicitation rules and disclosures |
| 14 | Email marketing | `/legal/communications` | No signup now; review applicability, postal details, unsubscribe and suppression before launch |
| 15 | SMS | `/legal/communications` | No signup now; separate permission, sender identification, opt-out and records before launch |
| 16 | Claims/testimonials | `/legal/brand-copyright` | Maintain substantiation and permissions; no invented partners, outcomes or endorsements |
| 17 | Copyright | `/legal/brand-copyright` | Rights/permission inventory; narrow resource licensing |
| 18 | Trademark | `/legal/brand-copyright` | Name clearance and ownership/licensing review before public launch |
| 19 | DMCA if uploads | `/legal/brand-copyright` | No uploads now; assess Section 512, real agent, notices/counter-notices and repeat-infringer process if introduced |
| 20 | Legal entity | Policy contact blocks; central config | Supply actual entity/operator facts; pages do not create an entity |
| 21 | Contacts | Footer, `/contact`, policy blocks | Supply real monitored inboxes and organizational address; placeholders are not mailto links |
| 22 | Vendors | Register below | Verify legal providers, contracts, access, subprocessors, transfer/deletion terms |
| 23 | Retention/deletion | Schedule below; Privacy Choices | Approve durations/triggers, configure systems, assign owners and document deletion |
| 24 | Incident response | Procedure below; conduct reporting | Assign trained adults, private channels, escalation contacts and legally reviewed response plan |
| 25 | International | Privacy international section; assessment below | Assess jurisdictions actually served, controller roles, local children rules and transfers |

Footer includes Privacy Policy, Terms of Use, Cookie Policy, Accessibility, Code of Conduct, Privacy Choices, Legal & Policies, and Contact.

## Google Forms acceptance setup — not yet implemented in the form

The `/apply` checkbox only acknowledges review of drafts in the current browser session. It is not stored, submitted, a signature, parental consent, or enforceable evidence of final-term acceptance. All site application CTAs now route through this page. Anyone possessing the external form link can still open the form directly; client-side gating cannot enforce eligibility or legal acceptance.

Once policies are finalized, the actual Google Form owner should:

1. Put the true operator, privacy contact, purpose, required/optional field explanation, data retention and adopted notice links before collecting responses. Remove fields not needed for deciding an application.
2. Add appropriate eligibility screening and a no-collection path for ineligible ages. Avoid collecting a full birth date unless necessary. Obtain any legally required verifiable parental permission through a suitable process, not a child-ticked box.
3. Add a required, initially unchecked acknowledgment of the Privacy Notice and separate affirmative agreement to the adopted Terms and Code of Conduct, with visible titles, links, version and effective date. Do not treat acknowledgment of a privacy notice as blanket consent to all processing.
4. Capture the accepted versions/text, actual answer, respondent association, and submission time in an access-controlled record. Preserve evidence of precisely what was shown. Do not collect extra device/IP data merely to imitate a signature service without a justified need.
5. Keep media permission, marketing email/SMS consent, guardian participation approval and the eventual chapter affiliation agreement separate, specific and optional where appropriate. An application is not chapter approval.
6. Test direct entry via the Google Form URL, eligible/ineligible paths, mobile and keyboard use, edit-response behavior and exports. Confirm the privacy request/deletion process covers Forms, linked Sheets, downloaded files and backups.
7. Only after verification update `formAcceptanceRecordingConfigured`, revise the website review copy to accurately describe the final recorded process, and document who checked it. Do not claim this setting alone implements collection.

## Vendor and information-flow register

This is a preliminary inventory based on visible application code. It is not an audit of the operator's accounts, contracts or every hosting request.

| Service / current use | Potential information | Facts to record before adoption |
|---|---|---|
| Sites hosting / delivery and private-preview access | Requests, IP/browser/log data, private access information | Actual contracting provider, account owner, cookie inventory/lifetimes, logs/access/retention, region, terms/DPA and incident contact |
| Google Forms / chapter applications | Fields and form responses, Google account data depending on settings | Owner, full field list, required/optional, linked Sheets, collaborators, purpose/legal basis, retention, export controls, deletion, DPA and international processing |
| Instagram / outbound social link and inquiries | Platform interactions or direct messages | Account admins, inquiry handling, exports, platform privacy terms, retention, safeguards for minors |
| TikTok / outbound social link and inquiries | Platform interactions or messages where available | Same platform/account/access review; no embedded feed is installed |
| Earlier browser localStorage / removed application draft | Prior draft under `ff-application-v1` if present | Current pages do not read/transmit it; user can clear this one key per origin/device; no original expiry was configured |
| User-supplied photos, logo and chapter data / static site | Images and school/location details | Rights holder, person/guardian permissions where applicable, allowed channels, expiration, withdrawal and deployment archive handling |

No member database, payment processor, CRM, analytics integration, marketing signup, SMS platform or public-upload tool is installed in the current app. Verify the rest of the organization separately. For each actual vendor retain purpose, data categories, controller/processor role, contract, minimum access, region/transfers, deletion obligations, subprocessors and termination/export procedure.

## Retention and deletion schedule — approval required

No duration below is represented as an adopted practice. The operator and reviewer must choose justified periods, record start/end triggers and legal hold exceptions, and implement them. Avoid indefinite retention by default.

| Record category | Trigger and proposed approach to review | Required implementation |
|---|---|---|
| Unsuccessful/withdrawn applications | Decision/withdrawal plus a limited, approved review/appeal period; duration TBD | Forms, Sheets and exports included; owner and deletion job/checklist |
| Approved applications / member or leader records | Relationship ends plus justified administrative/legal period; duration TBD | Remove unnecessary original answers; review active access at leadership turnover |
| Routine inquiries | Resolved inquiry plus short approved follow-up window; duration TBD | Inbox/social copies and exports; identity verification proportional to request |
| Chapter agreements / consent records | Agreement/activity ends plus counsel-approved evidence period; duration TBD | Version, signatory authority, dates, access restrictions and secure archive |
| Media and permissions | Review at permission expiry, withdrawal or end of purpose; duration TBD | Match each asset to permitted use; remove controlled copies when required; assess lawful retained evidence |
| Event medical/emergency information | Activity ends and any justified incident/claim need; duration TBD | Separate restricted store; avoid student access to unnecessary sensitive data |
| Safeguarding / incident reports | Case-specific statutory, protection and claim needs; period set with counsel | Trained adult custodian; restricted access and documented holds; no routine student deletion |
| Hosting/security logs | Provider capabilities and minimum operational/security need; duration TBD | Confirm vendor settings and backups; avoid publishing unverified guarantees |
| Rights requests / suppression records | Enough to demonstrate response and honor opt-out; duration TBD | Keep minimal record; suppression data only for preventing unwanted contact |
| Earlier local draft | Until user/browser clears it (actual legacy behavior) | Working single-key clear control; remove remaining copies separately on other origins/devices |

Deletion procedure: receive privately → verify proportionately → locate systems and vendors → evaluate applicable exceptions and holds → approve action → remove/anonymize appropriate copies → handle exports/backups under documented schedule → confirm outcome or reasoned limits → keep minimal audit record. Never promise immediate erasure from every backup or third-party repost. Document response deadlines after assessing the applicable law, including extension and appeal rules.

## Incident and safeguarding procedure — assign owners before use

1. **Immediate safety:** contact local emergency services where needed. Minors may contact a trusted adult or school safeguarding official. No internal authorization is needed to report to authorities.
2. **Route privately:** designate a trained adult incident lead, backup and legal/privacy advisor with verified monitored contacts. Do not gather medical, abuse or identity documents in public comments or the ordinary chapter application.
3. **Triage:** record time discovered, affected activity/system, known facts and immediate protective measures. Separate suspicion from confirmed facts. Protect from retaliation and restrict access.
4. **Contain:** secure compromised accounts, revoke inappropriate access, pause affected collection or activity where needed, contact vendor security channels and preserve relevant evidence. Do not circulate harmful or sensitive material. Student leaders must not investigate suspected abuse themselves.
5. **Assess:** responsible adults and qualified advisors determine affected people/data/locations, risk, school/guardian responsibilities, applicable reporting duties and notification deadlines. Preserve evidence and legal holds; do not automatically notify a suspected abuser.
6. **Respond:** notify appropriate authorities, schools, guardians, individuals and regulators when required through safe, reviewed communications. Maintain a decision log including reasons and timing. Do not invent a universal 72-hour promise or guarantee confidentiality.
7. **Recover and review:** verify access and safety before resuming, document remediation, support affected people, review vendors/training and update procedures. Define conflict-free review and appeals for conduct decisions.

Run a tabletop exercise, maintain an offline contact list, and review procedures when leaders, systems or chapter jurisdictions change.

## International assessment

The supplied chapter locations include the US, UAE, Nepal and Azerbaijan. Counsel should assess applicability using actual operator establishment, activities, audience, data subjects, controller relationships, data flows and local law. Do not automatically assert that every global privacy statute applies or that a US chapter location chooses governing law for everyone. Record lawful purposes/bases, notices/languages, children's rules, sensitive information restrictions, international destinations and appropriate transfer measures. Complete local school/activity/travel and fundraising review before operating those programs.

## Source checks (reviewed September 6, 2026)

- FTC COPPA guidance: https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions
- FTC CAN-SPAM guidance: https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business
- DOJ accessibility guidance: https://www.ada.gov/resources/web-guidance/
- ICO cookies guidance: https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/
- Texas AG privacy law applicability/exemptions: https://www.texasattorneygeneral.gov/consumer-protection/file-consumer-complaint/consumer-privacy-rights/texas-data-privacy-and-security-act
- IRS charitable contributions: https://www.irs.gov/charities-non-profits/exempt-organizations-general-issues-charitable-contributions
- US Copyright Office Section 512: https://www.copyright.gov/512/
- Existing same-name organization, for clearance review only: https://www.futurefounders.com/

These references support review, not a conclusion that the organization is compliant. Recheck requirements when activities or laws change.
