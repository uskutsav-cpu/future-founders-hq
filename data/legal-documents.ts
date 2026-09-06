export type LegalSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};
export type LegalDocument = {
  slug: string;
  title: string;
  description: string;
  category: "Website" | "Chapters & participation" | "Conditional policies";
  review: string[];
  sections: LegalSection[];
};
export const legalDocuments: LegalDocument[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    category: "Website",
    description:
      "Information practices for this website, chapter applications, and linked services.",
    review: [
      "Confirm legal operator, privacy contact, mailing address and effective date.",
      "Audit the Google Form, response owners, recipients, retention and international processing before adopting this notice.",
    ],
    sections: [
      {
        title: "Who operates this website",
        paragraphs: [
          "Future Founders is the brand displayed on this website. The legal name and organizational mailing address of its operator have not yet been supplied. No corporate, nonprofit, tax-exempt, or charitable status is asserted by this draft.",
        ],
      },
      {
        title: "Information and purposes",
        items: [
          "Website requests: the hosting service may receive IP addresses, device/browser details, requested pages and technical logs to deliver and protect the site. The exact host retention and access settings need confirmation.",
          "Applications: the website sends applicants to a Google Form. That form may request identity/contact details, school or graduation information, leadership experience and application answers. Its exact fields, required/optional settings and account owner must be verified; this page does not claim an exhaustive form inventory.",
          "Communications: information voluntarily shared through Instagram or TikTok is processed by those services. Organization personnel receiving messages may use them to respond or route an inquiry. Access and retention arrangements need confirmation.",
          "Photographs and chapter profiles: supplied photographs, school/location details, and any later approved names or biographies are published to describe chapter activities. Publication requires the relevant permissions.",
          "Earlier drafts: a previous website version could store an application draft in this browser under ff-application-v1. Current pages do not read or transmit it. It remains until cleared by the user or browser.",
        ],
      },
      {
        title: "Collection on this website",
        paragraphs: [
          "The current website has no application-response database, member accounts, payment checkout, donation form, newsletter signup, or marketing-text signup. Search and filters run in the browser. Application answers are entered on Google Forms, not in this website’s code. This does not mean the organization or Google never receives personal information.",
        ],
      },
      {
        title: "Recipients and service providers",
        paragraphs: [
          "Website hosting is provided through the current Sites hosting service. Google Forms receives form entries, and the form owner and people granted access may receive responses. Instagram and TikTok process information on their platforms. The operator must document the actual legal service providers, account owners, access permissions, contracts and any additional processors before this policy is adopted.",
          "No advertising pixel, embedded social feed, or analytics integration is installed in the current application code. The code has no personal-data sale, targeted-advertising, or profiling functionality. Organization-wide practices outside this code have not been verified.",
        ],
      },
      {
        title: "Cookies and local storage",
        paragraphs: [
          "See the Cookie Policy for current application-code practices, possible hosting/security cookies, external services and earlier local drafts. External sites may use their own cookies after you navigate to them. Their notices and settings apply there.",
        ],
      },
      {
        title: "Retention and deletion",
        paragraphs: [
          "Retention periods for form responses, messages, photos and provider logs are not yet approved. The proposed schedule in the legal operations materials must be completed and implemented, including deleted items, exports and backups. This draft does not promise that a deletion process or deadline is already operating.",
          "Requests should be sent to the monitored privacy contact once configured. The organization should verify identity proportionately, check any lawful retention need, route provider copies for deletion and explain the outcome. Do not send identity documents, medical details or passwords through a public social comment.",
        ],
      },
      {
        title: "Privacy rights and requests",
        paragraphs: [
          "Depending on applicable law and the organization’s status, individuals may have rights to access, correct, delete, obtain a copy of information, withdraw consent, object to or restrict processing, opt out of certain uses, or appeal a decision. These rights are not identical everywhere. Use Privacy Choices for available routing and browser-data controls. A functioning privacy email and request-handling process remain required before this draft is adopted.",
        ],
      },
      {
        title: "Children and minors",
        paragraphs: [
          "The proposed online application policy is age 13 and older; the organization has not yet confirmed its age policy. Users under 13 should not submit personal information through the application while the required child-privacy arrangements remain unconfirmed. A checkbox or a parent’s ordinary approval is not verifiable parental consent under COPPA.",
          "If the service becomes directed to children under 13 or the operator knowingly collects their information, applicability and appropriate notices, parental consent, access/deletion procedures, minimization and written retention/security practices must be addressed before collection. A 13+ label alone does not determine whether COPPA applies. Minor participation, travel and promotional media permissions require separate review.",
        ],
      },
      {
        title: "International users",
        paragraphs: [
          "The chapter list includes locations outside the United States. Applicable privacy law, the responsible controller, legal bases, cross-border destinations and transfer safeguards must be assessed for the locations actually served. This draft does not assert that using the site gives blanket consent to international transfers. Where consent-based online services are offered to children, local parental-consent ages may differ.",
        ],
      },
      {
        title: "Security, updates and contact",
        paragraphs: [
          "The operator should limit access, protect accounts, review vendors and maintain incident procedures. No system can be guaranteed completely secure. Operational safeguards and breach-response contacts are listed for implementation in the owner materials, not represented as already verified.",
          "Material policy changes should be dated and communicated appropriately, with new consent where required. This is a prepared draft; an effective date will be added only after adoption. Legal identity, mailing address and monitored privacy contact are still awaiting confirmation.",
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Use",
    category: "Website",
    description:
      "Proposed rules for using the website, resources and application pathways.",
    review: [
      "Operator, age policy, governing law, dispute process, legal contact and adoption date must be confirmed.",
      "Have qualified counsel review enforceability, especially for minors. These draft terms are not an executed agreement.",
    ],
    sections: [
      {
        title: "Status and agreement",
        paragraphs: [
          "These are proposed website terms for the Future Founders brand. They are not yet adopted. The legal operator must be identified before the terms become effective. Once adopted, significant enrollment actions should use clear affirmative acceptance of the applicable version, with a retained record; a footer link by itself is not the intended acceptance process.",
        ],
      },
      {
        title: "Age and eligibility",
        paragraphs: [
          "The proposed online application threshold is 13+. It is awaiting organization confirmation. Minors should involve a parent or guardian and comply with school requirements. A chapter application is a request for consideration, not membership, chapter approval or authorization to use the brand. Program eligibility and required guardian permissions must be stated for each activity.",
        ],
      },
      {
        title: "Applications and accounts",
        paragraphs: [
          "Give accurate information and avoid sending someone else’s private information without permission. The current website has no member accounts. If accounts are introduced, account security, credentials, authorized access, age controls and closure procedures must be defined before launch. Do not impersonate another applicant, chapter, school or staff member.",
        ],
      },
      {
        title: "Acceptable use",
        items: [
          "Use the website and resources lawfully and follow the Code of Conduct.",
          "Do not harass, discriminate, threaten, exploit minors, retaliate, or publish private information without authorization.",
          "Do not introduce malware, bypass access controls, misuse credentials, interfere with services, or scrape private information.",
          "Do not misrepresent affiliations, permissions, achievements, funding, sponsorships or chapter authority.",
          "Respect authorship, competition integrity and the rules for permitted assistance, including AI where relevant.",
        ],
      },
      {
        title: "Content, intellectual property and brand",
        paragraphs: [
          "Rights in website content and supplied materials remain with their respective rights holders. The legal ownership and licensing chain for the organization’s logo, curriculum, photographs and copy must be confirmed; this draft does not claim ownership of third-party material. Resources may be used only under their stated permission and applicable law.",
          "Chapter brand use requires an approved affiliation agreement and brand guidelines. No license for unauthorized commercial use or unconfirmed school endorsements is granted. No federal trademark registration is asserted.",
        ],
      },
      {
        title: "Submissions and permissions",
        paragraphs: [
          "The website has no public upload or self-publishing feature. Submitting an application is not permission for public promotional use of its contents. Any later content submission process should state a narrow license for the specific purpose, duration, channels and necessary editing; a separate media release is required for the proposed promotional use of a person’s image or voice. Creators should retain ownership unless a separately reviewed agreement says otherwise.",
        ],
      },
      {
        title: "Third-party services",
        paragraphs: [
          "Applications are hosted on Google Forms. Instagram, TikTok and future external opportunity links are separate services with their own terms and privacy practices. A link does not make its provider a partner or mean that the organization controls its content.",
        ],
      },
      {
        title: "Availability and accuracy",
        paragraphs: [
          "Website information may change, and resources provide general starting points rather than individual professional advice. Confirm school rules and event details directly. Any adopted disclaimer must preserve non-waivable consumer rights and must not excuse unlawful conduct or override a specific commitment required by law.",
        ],
      },
      {
        title: "Moderation and participation decisions",
        paragraphs: [
          "Under the proposed conduct process, authorized leaders may restrict access or participation for safety, serious misuse or rule violations, using proportionate measures and a fair review where appropriate. Serious safeguarding concerns should be handled by responsible adults and appropriate authorities, not investigated privately by student leaders. The responsible decision-maker and appeal channel must be designated.",
        ],
      },
      {
        title: "Liability, indemnity and disputes",
        paragraphs: [
          "No blanket waiver, mandatory arbitration clause, class-action waiver or minor indemnity is created by this draft. Any limitation of liability, release, indemnification, governing law, forum and dispute procedure requires jurisdiction-specific legal review and must preserve rights that cannot lawfully be waived. Texas governing law must not be assumed solely from a chapter location.",
        ],
      },
      {
        title: "Changes and legal contact",
        paragraphs: [
          "Publish the adopted version, effective date, legal operator and monitored contact. Give appropriate notice of changes and obtain fresh acceptance where required. The organization’s legal contact and mailing address are not yet supplied.",
        ],
      },
    ],
  },
  {
    slug: "cookies",
    title: "Cookie Policy",
    category: "Website",
    description: "Storage and tracking practices for the current website.",
    review: [
      "Audit deployed hosting cookies, their providers, names and lifetimes before adopting the final inventory.",
    ],
    sections: [
      {
        title: "Current application code",
        paragraphs: [
          "No analytics, advertising pixels, embedded videos, social widgets or nonessential cookie integrations are installed. There are no optional tracking categories to enable, so no decorative accept/reject banner is shown. This statement concerns the application code, not an audit of every hosting or external-service cookie.",
        ],
      },
      {
        title: "Inventory and duration",
        items: [
          "Current application cookies: none intentionally set by the application code.",
          "Earlier local draft: ff-application-v1 in localStorage, from a removed draft form. It may persist until manually cleared; no fixed expiry was built into that earlier version. The current site does not read it.",
          "Hosting/sign-in/security cookies: the private hosting service may use them. Exact names, purposes, provider and session or fixed lifetimes require a deployment-level inventory; they are not asserted as known here.",
          "Google Forms, Instagram and TikTok: opened as external links, not embedded trackers. Their cookies and retention settings belong to those services and must be reviewed on their sites.",
        ],
      },
      {
        title: "Your controls",
        paragraphs: [
          "Use Privacy Choices to remove an earlier Future Founders draft or consult your browser’s site-data settings. Clearing hosting authentication cookies may sign you out of the private preview. Browser controls do not delete information already submitted to a form or social platform.",
        ],
      },
      {
        title: "Before introducing optional technology",
        paragraphs: [
          "Inventory every optional purpose and provider first. Where prior consent is required, block optional scripts, iframes and requests until the relevant permission is given; offer equally usable accept and reject controls, granular choices and withdrawal. Rejecting or withdrawing must actually prevent future optional loading. Consent does not authorize unrelated purposes. A manager is not installed now because there are no optional application integrations to control.",
        ],
      },
    ],
  },
  {
    slug: "accessibility",
    title: "Accessibility Statement",
    category: "Website",
    description: "Our approach to making this website usable by more people.",
    review: [
      "Assign a monitored accessibility contact and a remediation owner. Do not claim certification or full conformance without an audit.",
    ],
    sections: [
      {
        title: "Our aim",
        paragraphs: [
          "The website is designed toward WCAG 2.2 Level AA, with semantic structure, keyboard navigation, visible focus, labeled controls, responsive layouts, descriptive image text and reduced-motion support. This is a design target, not a certification or guarantee of full conformance.",
        ],
      },
      {
        title: "Known limits",
        paragraphs: [
          "A comprehensive assistive-technology and WCAG 2.2 conformance audit has not been completed. The Google Form and linked social platforms are third-party services. Their accessibility may differ, and linking to them does not remove the need to provide an appropriate alternative when needed.",
        ],
      },
      {
        title: "Report a barrier",
        paragraphs: [
          "Use the Contact page to ask for an accessibility contact or an alternative way to obtain information. If a monitored accessibility email is configured, it will appear here. Describe the page, task, barrier and any accommodation that would help; device or assistive-technology details are optional. Avoid posting personal or medical information publicly. The organization should acknowledge requests and arrange an appropriate alternative without making unverified response-time promises.",
        ],
      },
      {
        title: "Ongoing review",
        paragraphs: [
          "Review keyboard access, contrast, zoom/reflow, focus order, errors, touch controls and screen-reader output when content or features change. Maintain an issue log and prioritize barriers that prevent access to core tasks.",
        ],
      },
    ],
  },
  {
    slug: "code-of-conduct",
    title: "Code of Conduct",
    category: "Website",
    description: "Proposed standards for a respectful, safe student community.",
    review: [
      "Designate an adult safeguarding lead, monitored safety channel, escalation process and appeal contact before program adoption.",
    ],
    sections: [
      {
        title: "Scope",
        paragraphs: [
          "These proposed standards cover chapters, meetings, events, travel, mentorship, competitions, social channels and online spaces associated with the organization. School policies and applicable law continue to apply.",
        ],
      },
      {
        title: "Respect and inclusion",
        items: [
          "No harassment, discrimination, bullying, humiliation, slurs, threats, stalking, doxxing or retaliation.",
          "Respect personal boundaries and requests to stop contact. Do not pressure anyone to share private information, money, images, credentials or romantic/sexual attention.",
          "No sexual misconduct, grooming, exploitative behavior or inappropriate communications involving minors. Adults should use organization-approved channels and supervision arrangements rather than secret or disappearing conversations.",
          "Keep activities appropriate for the age group and follow venue, travel and event rules. Do not endanger others or interfere with safety procedures.",
        ],
      },
      {
        title: "Integrity and ownership",
        paragraphs: [
          "Credit other people’s work, follow academic and competition rules, disclose assistance where required, and do not falsify results, chapter records, fundraising statements or affiliations. Use organizational money, accounts and access only for authorized purposes.",
        ],
      },
      {
        title: "Reporting and immediate safety",
        paragraphs: [
          "For immediate danger, contact local emergency services. A minor can also seek help from a trusted parent, guardian, teacher or school safeguarding official. A safety email and responsible adult lead have not yet been provided; the Contact page offers routing only and is not an emergency or confidential abuse-reporting system.",
          "Do not confront a suspected abuser or conduct an investigation yourself. Preserve relevant messages or evidence without circulating sensitive material. Reporting to the organization never replaces a legal duty to report to authorities, and no internal permission is required to seek outside help.",
        ],
      },
      {
        title: "Confidentiality and review",
        paragraphs: [
          "Do not promise absolute confidentiality. Information may need to be shared with responsible safeguarding personnel, schools, guardians or authorities to protect people or meet legal obligations. Share only what is necessary with authorized recipients. Review concerns promptly and impartially, avoid conflicts of interest, document decisions and protect people from retaliation.",
        ],
      },
      {
        title: "Consequences and appeals",
        paragraphs: [
          "Depending on severity, proposed measures include education, restrictions, removal from an activity, suspension, termination of membership or chapter affiliation, and referral to appropriate authorities. Interim safety measures may be needed before a review is complete. The organization must establish an accountable adult decision-maker, a fair appeal route and appropriate record retention before adopting this process.",
        ],
      },
    ],
  },
  {
    slug: "chapter-agreement",
    title: "Chapter Affiliation Agreement",
    category: "Chapters & participation",
    description: "A chapter charter template for review and signed onboarding.",
    review: [
      "Template only—not executed. Complete parties, school approvals, advisor requirements, activity standards, finances, renewal dates and authorized signatures.",
    ],
    sections: [
      {
        title: "Parties and term",
        paragraphs: [
          "Parties: [legal operator], [chapter name], [school and location], and [authorized representative]. School recognition: [approval and restrictions]. Term: [start/end dates]. Renewal: [annual review date and objective requirements]. Nothing is approved until the designated parties sign the final agreement.",
        ],
      },
      {
        title: "Brand permission",
        paragraphs: [
          "Subject to approval and continued compliance, the operator would grant a limited, nonexclusive, revocable permission to use the verified organization name and approved marks for authorized chapter activities during the term. No ownership transfer, sublicensing or unrelated commercial use is intended. Name/mark ownership and clearance must first be established. Follow the published brand guidelines and approved chapter naming convention.",
        ],
      },
      {
        title: "Leadership, eligibility and activity",
        paragraphs: [
          "List eligible participants, founding officers, succession responsibilities, required adult/faculty advisor, school supervision requirements, meeting/activity minimums, reporting schedule, training and annual renewal criteria. These values are intentionally unset and must not be presented as existing policy. Keep chapter leadership records current and appoint successors before graduation.",
        ],
      },
      {
        title: "Money and sponsorship",
        paragraphs: [
          "Identify approved bank/payment arrangements, accountable adult signatories where required, spending approvals, reimbursement documentation, bookkeeping, review and prohibited uses. Do not use personal payment accounts by default. Require written approval for sponsorships, fundraising, tax claims and contracts. No chapter may commit another chapter or the national operator to a financial obligation without express authority.",
        ],
      },
      {
        title: "Independence and representations",
        paragraphs: [
          "Specify the actual legal relationship among the operator, chapter and school. Proposed limits: no authority to act as an agent, promise funding, create a partnership, bind the operator or imply school endorsement beyond authorized recognition. A disclaimer alone does not determine the legal relationship; counsel must review actual operations.",
        ],
      },
      {
        title: "People, information and conduct",
        paragraphs: [
          "Follow the adopted Code of Conduct, safeguarding rules, privacy notices and event permissions. Collect only necessary participant information through approved systems, limit access, retain permission records and promptly route safety/privacy incidents. Do not publish students’ identities or media without the required authorization. Do not transfer a student contact list to sponsors without appropriate authority and notice.",
        ],
      },
      {
        title: "Accounts, changes and closure",
        paragraphs: [
          "Record ownership and administrators of chapter email, social accounts, files, domains and payment systems. Require secure organizational access and a succession/closure transfer plan. On suspension, expiry or termination, stop brand use, settle documented funds and obligations, transfer or archive authorized assets, revoke access and return/delete personal information under the approved schedule. Do not destroy records subject to a lawful hold.",
        ],
      },
      {
        title: "Acceptance record",
        items: [
          "Operator authorized signatory: [name, capacity, signature, date].",
          "Chapter authorized signatory: [name, capacity, signature, date].",
          "School/advisor approval when required: [name, authority, signature, date].",
          "Guardian approval where legally needed: [separate authorization].",
          "Retain the agreed version, all attachments, dates and signatures in an access-controlled system; a website checkbox alone is not this agreement.",
        ],
      },
    ],
  },
  {
    slug: "participant-consent",
    title: "Parent & Participant Consent",
    category: "Chapters & participation",
    description:
      "An event-specific permission template, not a blanket liability waiver.",
    review: [
      "Complete activity, organizers, locations, supervision, transportation and emergency procedures. Obtain jurisdiction-specific advice and actual guardian/participant signatures.",
    ],
    sections: [
      {
        title: "Identify the activity",
        items: [
          "Participant and age: [fields]. Parent/legal guardian where required: [name and relationship].",
          "Operator, school/chapter and responsible adult: [names and secure contacts].",
          "Activity, dates/times/time zone, venues, travel, overnight arrangements and costs: [details].",
          "Supervision ratios, conduct rules, accessibility arrangements and safeguarding contacts: [details].",
        ],
      },
      {
        title: "Participation authorization",
        paragraphs: [
          "Proposed wording for review: I have received the description of the named activity and its specific risks and arrangements. I authorize the identified participant to take part only in that activity, subject to its rules and the permissions selected below. This authorization does not cover unspecified future programs.",
        ],
      },
      {
        title: "Separate choices and emergency arrangements",
        items: [
          "Transportation: [approved modes, drivers/operators, pickup/drop-off rules and a separate yes/no authorization].",
          "Emergency contact: [private contact, availability and alternate contact]. Collect and store through a secure authorized process, not this public template.",
          "Health/accommodation information: ask only what is necessary for this activity, explain who can access it and when it will be deleted. Do not request detailed medical histories by default.",
          "Emergency treatment authorization: [jurisdiction-reviewed wording, limitations and responsible contact]. Ordinary website acceptance does not grant this permission.",
          "Media permission: separate and optional through the Media Release; do not bundle promotional rights with participation.",
        ],
      },
      {
        title: "Risk, release and signatures",
        paragraphs: [
          "Describe actual foreseeable activity risks and mitigation. Assumption-of-risk and any liability-release language must be drafted for the relevant jurisdiction and activity; no blanket release is supplied here, especially on behalf of minors. Preserve rights that cannot be waived. Include the participant’s acknowledgment, required guardian signature and date, activity/version identifier and a copy for the family.",
        ],
      },
    ],
  },
  {
    slug: "media-release",
    title: "Photo, Video & Media Release",
    category: "Chapters & participation",
    description:
      "An optional, purpose-specific authorization template for student media.",
    review: [
      "No permission is granted by viewing this template. Record real choices and guardian authorization where required before publishing identifiable media.",
    ],
    sections: [
      {
        title: "Identify the permission",
        paragraphs: [
          "Participant: [name]. Activity/date: [details]. Authorized publisher/legal entity: [name]. Parent/legal guardian where required: [name and relationship]. Media captured: [photography, video, audio, interview, testimonial or recording—select separately as appropriate].",
        ],
      },
      {
        title: "Optional scope",
        items: [
          "Use on the organization’s website: [yes/no].",
          "Use on specified organization social accounts: [yes/no; list channels].",
          "Use in printed recruitment/event materials: [yes/no].",
          "Name attribution: [no name / first name / approved full name]; avoid identifying school, location or contact details unnecessarily.",
          "Promotional use and any paid advertising: [separate yes/no choices and exact purpose]. No synthetic likeness, AI training or unrelated reuse is authorized by default.",
          "Permission period: [start/end date]. Geographic reach: [including internet availability where selected]. Compensation, if any: [state clearly].",
        ],
      },
      {
        title: "Editing and participation choice",
        paragraphs: [
          "Proposed permission would cover only the selected purposes and reasonable editing that does not distort meaning or misrepresent the person. Declining promotional media permission should not prevent ordinary participation; explain any unavoidable incidental capture and provide an alternative arrangement where possible. Do not treat silence, attendance or a prechecked box as consent.",
        ],
      },
      {
        title: "Withdrawal and records",
        paragraphs: [
          "Provide a monitored withdrawal contact and a clear procedure before collecting permission. Explain what future uses can stop, how controllable online copies are removed, and any limits for already distributed print materials or independent third-party copies. Do not promise universal erasure. Retain the exact selected scope, version, dates, participant/guardian signatures and the assets covered for the approved period.",
        ],
      },
    ],
  },
  {
    slug: "competition-rules",
    title: "Competition Rules Framework",
    category: "Conditional policies",
    description:
      "A complete outline to finalize separately for each announced competition.",
    review: [
      "No organization-run competition is currently announced. This is not a live contest or official rules for an external competition.",
    ],
    sections: [
      {
        title: "Organizer and eligibility",
        paragraphs: [
          "Identify legal sponsor/organizer and contact; competition name; eligible ages, school types and jurisdictions; team sizes; exclusions and conflicts. Identify any guardian permissions. State whether participation is free and review prize/sweepstakes laws before introducing chance, consideration or prizes.",
        ],
      },
      {
        title: "Entry process and schedule",
        paragraphs: [
          "Set opening and closing dates with exact times and time zone, registration steps, deliverables, file limits, judging period, final event and notification dates. Specify permitted assistance, collaboration, AI use and required disclosures. Publish accessible alternative submission arrangements where needed.",
        ],
      },
      {
        title: "Judging and integrity",
        paragraphs: [
          "Publish criteria and weights, judge selection/conflict rules, scoring process, tie breakers, verification, plagiarism rules, prohibited conduct, disqualification grounds and a fair question/appeal channel. Do not invent judges or imply organizer independence that is not true.",
        ],
      },
      {
        title: "Prizes and results",
        paragraphs: [
          "If applicable, list each verified prize, approximate value, conditions, taxes, restrictions, claim deadlines, winner notification and alternate-winner process. Confirm committed funding and any registration/bonding requirements before announcing a prize. Do not require a purchase in a purported sweepstakes without specific legal review.",
        ],
      },
      {
        title: "Rights, publicity and administration",
        paragraphs: [
          "Clarify entrant IP ownership and a narrowly necessary evaluation license; separate optional promotional media/name permission. State privacy/retention practices, cancellation/modification conditions, extraordinary disruption procedures, legal contact and reviewed dispute terms. Publish the final dated rules before entries open and retain accepted versions. External competitions are governed by their own organizers’ rules.",
        ],
      },
    ],
  },
  {
    slug: "refunds",
    title: "Refund & Cancellation Policy",
    category: "Conditional policies",
    description:
      "Current payment status and a policy framework for any future paid offering.",
    review: [
      "The website currently has no checkout, subscriptions or paid registrations. Finalize terms before accepting a payment.",
    ],
    sections: [
      {
        title: "Current status",
        paragraphs: [
          "No payments are accepted through this website. This notice creates no purchase, fee, refund entitlement or subscription arrangement. No future pricing is announced here.",
        ],
      },
      {
        title: "Before selling an offering",
        items: [
          "Name the seller, offering, total price, currency, taxes and fees before payment.",
          "Define cancellation deadlines, eligible reasons, transfer rules, refunds for organizer cancellation/postponement, no-show treatment and any lawful nonrefundable portion.",
          "State refund method, processing window, payment-provider timing and a monitored support channel. Do not claim chargeback or statutory rights are waived.",
          "For goods, disclose delivery, shipping, returns, condition requirements and damaged/lost order handling.",
          "For recurring charges, show cadence, renewal price and cancellation method prominently; obtain separate informed consent and provide an easy cancellation process. Do not enable auto-renewal before review.",
        ],
      },
    ],
  },
  {
    slug: "donations",
    title: "Donation & Fundraising Disclosures",
    category: "Conditional policies",
    description:
      "No tax-status or donation claims are made without verified authority.",
    review: [
      "No donation mechanism is installed. Confirm entity, tax status, fundraising permissions and jurisdictional registrations before solicitation.",
    ],
    sections: [
      {
        title: "Current status",
        paragraphs: [
          "This website does not accept donations and does not represent that the organization is a nonprofit corporation, federally tax-exempt organization or eligible recipient of tax-deductible contributions. A brand name or state incorporation by itself does not establish federal tax treatment.",
        ],
      },
      {
        title: "Before fundraising",
        paragraphs: [
          "Identify the legal recipient, intended use, restricted-gift treatment, processing fees, receipts, contact, refund/error process and any required registration disclosures. Verify tax-deductibility with appropriate records before saying a gift is deductible. Review solicitation rules in the jurisdictions actually targeted, including online campaigns and chapter fundraising. Chapters must not issue tax receipts or make tax promises without written authority.",
        ],
      },
    ],
  },
  {
    slug: "communications",
    title: "Email & SMS Preferences",
    category: "Conditional policies",
    description: "Separate choices for updates and promotional communications.",
    review: [
      "No newsletter or SMS signup is installed. Set up actual consent and opt-out systems before collecting subscriptions.",
    ],
    sections: [
      {
        title: "Current channels",
        paragraphs: [
          "Updates are available through the linked Instagram and TikTok accounts. Following a social profile or submitting a chapter application is not automatic permission for promotional email or text messages.",
        ],
      },
      {
        title: "Email setup",
        paragraphs: [
          "A future signup should describe the sender and content, use an unambiguous choice and retain subscription evidence. Applicable marketing messages must use accurate sender information and subjects, include a valid organizational postal address and a working unsubscribe option. Opt-outs must be honored within applicable deadlines; for CAN-SPAM-covered messages, generally no later than 10 business days. Maintain a minimal suppression record to prevent re-enrollment rather than treating an opt-out as permission to contact again.",
        ],
      },
      {
        title: "SMS setup",
        paragraphs: [
          "Do not bundle promotional-text permission into general website terms or participation consent. Review applicable telephone/text laws, technology and jurisdictions; state the sender, purpose, expected frequency, potential rates and withdrawal method, and retain required affirmative consent. Separate transactional activity notices from marketing. Do not promise a STOP keyword works until it has been implemented and tested.",
        ],
      },
    ],
  },
  {
    slug: "brand-copyright",
    title: "Brand & Copyright Policy",
    category: "Conditional policies",
    description:
      "Permission, attribution and responsible use of organization materials.",
    review: [
      "Confirm the legal rights holder and complete name/trademark clearance. No registered status or DMCA safe harbor is claimed.",
    ],
    sections: [
      {
        title: "Brand use",
        paragraphs: [
          "Use the supplied name and logo only with authorization under a chapter agreement and the brand guidelines. Preserve proportions, approved colors and readable clear space; do not imply an unapproved partnership, school endorsement or commercial license. The website uses no registered-trademark symbol and does not assert a federal registration.",
        ],
      },
      {
        title: "Copyright and supplied content",
        paragraphs: [
          "Copyright and other rights remain with their respective rights holders. Confirm licenses for copy, curriculum, photographs, student work and third-party resources before publication. Obtain separate identifiable-media permission where required. A footer copyright notice is not proof that all rights have been cleared.",
        ],
      },
      {
        title: "Accuracy and endorsements",
        paragraphs: [
          "Publish only supported chapter counts, membership statistics, awards, outcomes, testimonials and partner claims. Keep the source, date, permission and qualification with each claim. Disclose relevant material relationships behind endorsements. The current total of 10 active chapters came from the organization’s brief; six chapter listings have been supplied. The organization should document the total before public claims are finalized.",
        ],
      },
      {
        title: "Copyright concerns and DMCA",
        paragraphs: [
          "The current site has no public uploads or chapter self-publishing interface. A registered DMCA agent has not been supplied, and this page is not a designation or safe-harbor claim. For a copyright concern, request the appropriate legal contact through Contact; provide the relevant URL and nature of the issue through a suitable private channel.",
          "Before permitting public uploads, determine the applicable Section 512 conditions with counsel, register and publish the required agent details where relevant, adopt a notice/counter-notice process and repeat-infringer policy, and implement timely handling. Do not publish a fabricated agent or registration number.",
        ],
      },
    ],
  },
];
export const documentHref = (slug: string) =>
  ["privacy", "terms", "cookies", "accessibility", "code-of-conduct"].includes(
    slug,
  )
    ? `/${slug}`
    : `/legal/${slug}`;
