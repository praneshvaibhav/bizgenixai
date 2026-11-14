# SEO change log — bizgenix.ai

Every SEO / AI-search change to this site, newest first. Add an entry whenever you change titles, redirects, structured data, the sitemap, `llms.txt`, or add a page.

Rules that apply to every entry:

- Say only what the team's own copy (`app/products/content.ts`), the published case studies (`app/case-studies/content.ts`) or Umang has confirmed. No invented numbers, clients or claims.
- New landing pages use the shared `app/services/ServicePage.tsx` component; metadata goes through `pageMeta()` in `app/seo.ts`.
- Deploy by staging a copy of the live folder, building there, testing on a spare port, then swapping folders. Keep the previous folder for rollback. Do not touch the Growth Intelligence apps on the same server.

---

## 3 — 14 Nov 2026 — Product, industry and local pages (after the Gemini review)

Source: two Gemini research documents reviewed against the live site. Adopted points only; the full adopted / rejected list is in `seo-audit-nov-2026/GEMINI-REVIEW.md`.

New pages

| URL | Target searches (India, monthly) | Content source |
|---|---|---|
| `/products/voice-ai` | voice bot 480; "voice ai" 33,100 is too broad to win yet | `app/products/content.ts` |
| `/products/bizchat` | whatsapp automation 3,600; whatsapp chatbot 4,400; whatsapp marketing software 1,900 | `app/products/content.ts` |
| `/products/scaleos` | task management software 1,300; workflow management software 1,000 | `app/products/content.ts` + ScaleOS case study |
| `/ai-consultant-ahmedabad` | software company in ahmedabad 2,900; local "AI consultant" searches have no recorded volume but drive the map result | existing consulting copy + office address |
| `/industries/textile` | erp for textile industry 170; textile erp software 140 | five published textile case studies |
| `/industries/real-estate-construction` | construction management software 1,900 | five published real-estate case studies |

Other changes

- Redirects: `/learning`, `/learning/*`, `/corporate-ai-training` → `/courses`; `/products/crm` → `/products/ai-crm`; `/products/whatsapp-automation` → `/products/bizchat`; `/ai-consulting-ahmedabad` → `/ai-consultant-ahmedabad`; `/industries` → `/#industries` (temporary).
- Organization JSON-LD (`app/seo.ts`): added `legalName`, `taxID` (GSTIN), `geo`, `hasMap`, second `alternateName`.
- `ServicePage`: optional `parent` (three-level breadcrumb) and `areaServedCity`.
- `/products`: "Full details" links from Voice AI, BizChat and ScaleOS sections. Home page: Textile and Real Estate industry cards link to the new industry pages.
- Footer, sitemap (49 URLs) and `public/llms.txt` updated.

Deliberately not done (see the review for reasons): `Disallow: /_next/` in robots; external subdomains and invented slugs in the sitemap; `sameAs` links to company-registry sites; a second phone number; CIN and founding date in schema (not yet confirmed); home-page FAQ schema without a visible FAQ.

## 2 — 14 Nov 2026 — commit `a1e5fb6` — Product pages

- New page `/products/ai-crm` (SoftwareApplication + FAQPage JSON-LD). Features from the CRM landing copy and demo narration; AI calling and WhatsApp stated as "where enabled".
- Growth Intelligence: title "Growth Intelligence | Business Analytics Software for Tally" and SoftwareApplication JSON-LD in its route layout.
- `/products`: text links from the CRM and GI sections to their full pages. Footer, sitemap (43 URLs), `llms.txt`.
- `ServicePage`: optional proof list, second card grid, secondary CTA, schema type.

## 1 — 14 Nov 2026 — commit `a397e14` — SEO foundation

- Redirects: `www` → apex; `/solutions`, `/services` → `/custom-solutions`; `/careers` → `/about`; `/ai-course-india`, `/ai-training`, `/corporate-training` → `/courses`.
- `app/seo.ts`: `pageMeta()` gives every page a canonical URL, `og:url`, `og:image` and Twitter card; Organization / ProfessionalService / Person / WebSite JSON-LD in the root layout. Default title and `lang="en-IN"`.
- `robots.ts` and `sitemap.ts` on the apex domain (42 URLs).
- Blog: 10 full articles at `/blog/[slug]` with Article JSON-LD; unknown slugs return 404.
- New pages `/ai-automation` and `/ai-consulting`.
- `info@bizgenix.com` → `info@bizgenix.ai` on contact and legal pages.
- `public/llms.txt`.

## Open items

- These commits are on the server but not yet in `praneshvaibhav/bizgenixai` (`origin/main` is `ddaa319`). Push from the server or apply the patch file in `seo-audit-nov-2026/bizgenix-ai-pack/` before the next deploy, or a `git reset --hard origin/main` will remove this work.
- No GA4 tag on bizgenix.ai yet.
- Growth Intelligence page: the "Rajesh Shah, Vardhman Tex-Fab" quote and the security claims need Umang's confirmation.
- `typescript.ignoreBuildErrors` is still on because of existing type errors in the Growth Intelligence page files.


## 14 November 2026 — enquiry conversion repair (Codex)
- Existing deployed build lacked NEXT_PUBLIC_FORMSPREE_FORM_ID. Added explicit email-draft fallback, preserving the existing configured Formspree path. No false sent confirmation.
- Separate custom, product demo, corporate training and individual learning categories; allowlisted URL intent/product preselection, contextual brief and product selector.
- Updated home, product, service and training CTAs to carry intent.
- Direct business WhatsApp/call alternatives; next steps no longer promise development before scope and commercials are agreed.
- Does not install analytics or claim enquiry delivery; mail drafts require the visitor to send them.

## 14 November 2026 — automatic enquiries, measurement and claim corrections
- Replaced mailto-only fallback with durable private enquiry queue, server validation, idempotent record creation and fixed-recipient SES delivery worker with retry/backoff.
- Added first-party conversion events and session campaign attribution; excludes labelled delivery tests from genuine leads.
- Rewrote two unsupported-result articles and synchronized newsletter metadata/covers; removed unsubstantiated product metrics/testimonials/guarantees and labelled calculator assumptions.
- Updated factual privacy wording for enquiry storage/email and first-party measurement.
- Added operations runbook, worker systemd units and queue tests. Upgraded Next.js to address the production dependency audit finding.
- Found and removed the GI demo form's simulated success flow (a timeout, with no delivery). Replaced it with the real GI enquiry route and wired previously undefined demo/CRM handlers. Sample-data preview is explicitly labelled.
