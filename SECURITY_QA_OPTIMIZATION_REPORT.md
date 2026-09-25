# Security, QA, and Optimization Report

Date: 25 September 2026  
Application: Bizgenix AI website  
Release scope: complete repository production-readiness review, preserving the existing brand, content, layout, and active animations.

## 1. Executive Summary

The application passes lint, TypeScript checking, the Vinext production build, the Vercel-compatible production build, route and asset checks, and both full and production-only dependency audits. One clearly labelled Formspree QA enquiry was accepted successfully by the configured endpoint. No known dependency vulnerability or exposed tracked secret was found.

The release removes 38 verified generated, unreachable, or unreferenced files, 3 unused direct dependencies, and 30,695,328 bytes of unused public assets. The built client output decreased from 80,390,758 bytes to 49,686,023 bytes (30,704,735 bytes / 38.20%). No active animation implementation was removed or retimed.

Browser-driven visual testing could not be executed because no in-app browser runtime was available. Consequently, browser console, history navigation, interactive animation comparison, and the twelve requested viewport screenshots are explicitly **Not Tested** rather than reported as passing.

## 2. Architecture Reviewed

- Framework: Next.js-compatible App Router implemented with Vinext/Vite and React.
- Rendering: route-level server components with focused client components for navigation, animations, product interactions, catalog filtering, and the contact form.
- Routes: 11 static pages, 2 dynamic content route families, `robots.txt`, `sitemap.xml`, and framework 404 handling.
- Data: local typed content modules; no database.
- Backend/API: no first-party API routes or server actions.
- External services: Formspree enquiry submission, Google Maps embed, and outbound WhatsApp/contact links.
- Authentication/authorization/session/cookies: none implemented or required by this public marketing site.
- Deployment: Vinext build, Vercel output build, and OpenAI Sites configuration.

Dependency flow reviewed: `Page -> presentational/client component -> local content/helper -> Formspree only for contact submission`. There is no application API or database layer.

## 3. Pages / Routes Tested

All of the following returned HTTP 200 by direct production-server access and emitted a canonical URL:

- `/`, `/about`, `/blog`, `/case-studies`, `/contact`, `/courses`, `/custom-solutions`
- `/data-deletion`, `/privacy-policy`, `/products`, `/terms`
- `/case-studies/una-homes`, `/case-studies/waffle-castle`, `/case-studies/bhaskar-silk-mills`
- `/case-studies/mahavir-traders`, `/case-studies/spectrum-dyes`, `/case-studies/sanjay-jain-scaleos`

`/does-not-exist`, `/blog/does-not-exist`, and `/case-studies/does-not-exist` correctly returned HTTP 404. Seventy-five directly referenced build/static assets returned HTTP 200. The parameterized `/_next/image` optimization endpoint was excluded from the static-asset assertion because it is invalid without its required query parameters.

## 4. Functional Testing

| Feature | Test | Result | Issue | Fix |
|---|---|---|---|---|
| Routing | Direct access to 17 rendered routes | Pass | None after cleanup | N/A |
| Invalid routes | Static and dynamic missing slugs | Pass | None | N/A |
| Assets | HEAD request for 75 referenced assets | Pass | 26 large files were unreferenced | Removed verified unused files |
| Contact fields | Inspected rendered/source contract | Pass | Prior form was over-structured | One Name field; retained Email, Company, Query, Message |
| Query choices | Checked option source | Pass | Obsolete Software Services option | Removed it and added Custom Solution |
| Contact submission | POST to supplied Formspree ID | Pass (HTTP 200, `ok: true`) | Deployment form ID was not configured | Added public runtime configuration |
| Contact delivery | Confirm notification arrived in mailbox | Not Tested | Inbox/account access unavailable | Verify Formspree recipient email and notification rules in dashboard |
| Form validation | Native required/email/max-length constraints inspected | Pass (static) | None | N/A |
| Navigation/buttons/history | Browser interaction | Not Tested | No browser runtime available | Manual release smoke test required |
| Error handling | Invalid route and missing dynamic slug | Pass | None | N/A |

## 5. Responsive Testing

The source contains explicit responsive layouts covering the requested mobile/tablet/laptop ranges, and production rendering completed for all routes. Visual/interactive viewport testing was not possible without the required in-app browser runtime.

| Device / Resolution | Result | Issues |
|---|---|---|
| Desktop 1920x1080 | Not Tested | Browser runtime unavailable |
| Desktop 1440x900 | Not Tested | Browser runtime unavailable |
| Desktop 1366x768 | Not Tested | Browser runtime unavailable |
| Laptop 1280x800 | Not Tested | Browser runtime unavailable |
| Laptop 1024x768 | Not Tested | Browser runtime unavailable |
| Tablet 768x1024 | Not Tested | Browser runtime unavailable |
| Tablet 820x1180 | Not Tested | Browser runtime unavailable |
| Mobile 430x932 | Not Tested | Browser runtime unavailable |
| Mobile 414x896 | Not Tested | Browser runtime unavailable |
| Mobile 390x844 | Not Tested | Browser runtime unavailable |
| Mobile 375x812 | Not Tested | Browser runtime unavailable |
| Mobile 360x800 | Not Tested | Browser runtime unavailable |

## 6. Security Findings

| ID | Severity | Category | Location | Finding | Risk | Fix | Verification |
|---|---|---|---|---|---|---|---|
| SEC-01 | Medium | Security headers | `next.config.ts` | Responses lacked baseline hardening headers | Weaker clickjacking, MIME-sniffing, opener, referrer, and feature controls | Added five defensive headers and disabled the framework signature | All five headers present on production response |
| SEC-02 | Low | Content Security Policy | Global response policy | No CSP is currently enforced | Reduced defence in depth if an injection flaw is introduced later | Not applied because third-party form/map and existing inline/runtime behaviour require a tested policy | Unresolved; introduce Report-Only CSP first |

OWASP surface review: there is no first-party database, authentication, authorization, session, file upload, redirect, command execution, or API endpoint surface. SQL/NoSQL injection, IDOR/BOLA, insecure cookies, and server-side authorization checks are therefore not applicable to the current repository. Formspree owns server-side abuse controls and delivery.

Secret checks found no tracked `.env`, private-key, credential, or secret file and no secret-like value in application source/public assets. The only client-exposed configuration is the intentionally public Formspree form ID.

## 7. Code Cleanup

- Removed 11 unreachable source/style files after checking imports, dynamic references, route usage, and configuration.
- Removed 26 public assets with no source/configuration reference (30,695,328 bytes).
- Removed tracked generated `tsconfig.tsbuildinfo` and ignored future TypeScript build-info files.
- Removed unused Three.js dependencies: `@react-three/fiber`, `three`, and `@types/three`.
- Removed the unreachable ScaleOS mock dashboard implementation and its unused CSS while retaining the active screenshot-based dashboard and animations.
- Removed unused imports/variables and corrected lint coverage to exclude generated deployment output.
- No production debug logs, `debugger`, completed TODO/FIXME markers, empty links, missing image alt attributes, or unsafe `_blank` links were found.

## 8. Performance Optimization

| Metric | Before | After | Change |
|---|---:|---:|---:|
| Repository-visible files (`rg --files`) | 332 | 297 | -35 net |
| Direct dependencies | 25 | 22 | -3 |
| Public asset bytes | 79,209,294 | 48,513,966 | -30,695,328 (38.75%) |
| Built client bytes | 80,390,758 | 49,686,023 | -30,704,735 (38.20%) |
| Built client files | 265 | 254 | -11 |
| Built server bytes | 1,620,767 | 1,664,336 | +43,569 (metadata/routes added) |

Additional changes: converted three suitable raw images to the framework image component, removed an unnecessary root client boundary, and added responsive image sizing. The existing 8,185,113-byte Smart City video remains the largest active asset; it was retained because it is intentional visible content.

## 9. Animation Verification

All active animation components remain referenced and compile in both production builds. Animation timing, easing, visual style, hover behaviour, scroll behaviour, video behaviour, and intended 3D presentation were not changed. Deleted animation-named files were proven unreachable orphan implementations, not active animations.

Interactive before/after visual comparison is **Not Tested** because the browser runtime was unavailable. A final manual animation smoke test is required before broad public release.

## 10. Accessibility

- All inspected images have alt text; form controls have associated labels.
- The About page now has a semantic `h1` while preserving the same styling.
- No empty `href`, unsafe blank-target link, or click-only noninteractive wrapper pattern was found by static checks.
- Native `required`, `type=email`, autocomplete, and length constraints are present on the enquiry form.
- Keyboard focus order, visible focus, menu operation, and colour contrast remain browser-based **Not Tested** items.

## 11. SEO

Added a canonical URL to every rendered page family, `metadataBase`, structured site title/description, favicon metadata, Open Graph/Twitter metadata, a branded preview image, `robots.txt`, and a 29-URL sitemap. Blog preview detail pages remain `noindex` intentionally. The About heading hierarchy was corrected without changing its appearance.

## 12. Dependency Audit

- `npm audit --json`: 0 critical, 0 high, 0 moderate, 0 low, 0 total vulnerabilities across 655 resolved dependency entries.
- `npm audit --omit=dev --json`: 0 vulnerabilities.
- Direct dependencies: 5 production + 17 development = 22.
- Removed: `@react-three/fiber`, `three`, `@types/three` after source/reference verification.
- No major-version upgrades were performed.

## 13. Files Modified

Release diff: **64 modified or added files**, including this report. Every non-deleted path is listed below.

- Configuration/reporting: `.gitignore`, `.env.example`, `eslint.config.mjs`, `next.config.ts`, `package.json`, `package-lock.json`, `vite.vercel.config.ts`, `SECURITY_QA_OPTIMIZATION_REPORT.md` — environment documentation, generated-file exclusions, security headers, dependency cleanup, deployment/build support, and audit evidence.
- Shared/home: `app/ContactSection.tsx`, `app/CountUp.tsx`, `app/FounderSection.tsx`, `app/HeroIntro.tsx`, `app/ScaleWithAI.module.css`, `app/ScaleWithAI.tsx`, `app/ServicesSection.tsx`, `app/SolutionsSection.module.css`, `app/SolutionsSection.tsx`, `app/SplashIntro.tsx`, `app/globals.css`, `app/layout.tsx`, `app/page.tsx` — preserve existing presentation while improving image delivery, component boundaries, active animation lifecycle/support, metadata, and responsive behaviour.
- About: `app/about/JourneyTimeline.tsx`, `app/about/ScrollReveal.tsx`, `app/about/page.module.css`, `app/about/page.tsx` — active section/scroll behaviour, semantic heading, canonical metadata, and matching responsive styles.
- Blog: `app/blog/page.tsx`, `app/blog/[slug]/page.tsx` — canonical/indexing metadata.
- Case studies: `app/case-studies/CaseStudyCatalog.tsx`, `app/case-studies/page.tsx`, `app/case-studies/[slug]/page.tsx` — catalog behaviour and canonical metadata.
- Contact: `app/contact/ContactExperience.tsx`, `app/contact/content.ts`, `app/contact/page.module.css`, `app/contact/page.tsx` — single-name form structure, corrected query options, validation/status handling, Formspree integration, responsive styles, and canonical metadata.
- Courses: `app/courses/CourseProgramSection.module.css`, `app/courses/CourseProgramSection.tsx`, `app/courses/LearningPageAnimator.tsx`, `app/courses/PriceCountdown.tsx`, `app/courses/page.module.css`, `app/courses/page.tsx` — current course presentation, interaction/animation support, responsive styling, and metadata.
- Custom solutions: `app/custom-solutions/Hero.module.css`, `app/custom-solutions/Hero.tsx`, `app/custom-solutions/WhyCustomSolutions.module.css`, `app/custom-solutions/WhyCustomSolutions.tsx`, `app/custom-solutions/page.module.css`, `app/custom-solutions/page.tsx` — current responsive hero/section implementation and metadata.
- Legal: `app/data-deletion/page.tsx`, `app/privacy-policy/page.tsx`, `app/terms/page.tsx` — canonical metadata.
- Products: `app/products/BizChatDetails.tsx`, `app/products/CRMDetails.tsx`, `app/products/GrowthIntelligenceDetails.tsx`, `app/products/ProductDetails.module.css`, `app/products/ProductDifference.tsx`, `app/products/ProductFAQ.tsx`, `app/products/ProductHero.module.css`, `app/products/ProductHero.tsx`, `app/products/ProductShowcase.tsx`, `app/products/ScaleOSDetails.module.css`, `app/products/ScaleOSDetails.tsx`, `app/products/VoiceAIDetails.tsx`, `app/products/content.ts`, `app/products/page.tsx` — retain the current product experience while removing dead implementation, resolving lint issues, and preserving responsive/animated behaviour.

## 14. Files Deleted

All 38 files are recoverable from Git.

Unreachable source/style files verified through repository-wide reference searches:

- `app/CredibilityObject.tsx`, `app/CredibilityStats.tsx`, `app/DeferredScene.tsx`, `app/ParticleMorph.tsx`
- `app/about/AboutExplorers.tsx`, `app/courses/CourseCatalog.tsx`
- `app/custom-solutions/WindLeaves.tsx`, `app/custom-solutions/WindLeaves.module.css`
- `app/products/VoiceConversation.tsx`, `app/products/animateSuiteCards.ts`, `app/useAnimationViewport.ts`

Unreferenced public assets verified against source and configuration:

- `public/bizgenix-intelligence-core.png`, `public/business-problems-reference.png`, `public/contact-reference.png`, `public/credibility-icon-sprite.png`
- `public/custom-solutions-hero.png`, `public/custom-solutions-leafy-reference.png`, `public/custom-solutions-reference.png`, `public/founder-umang-ratani.png`
- `public/industries/textile.jpg`, `public/solutions-business-overview.png`, `public/why-bizgenix-reference.png`, `public/why-custom-solutions-illustrations.png`
- `public/products/bizchat.png`, `public/products/growth-intelligence.png`, `public/products/growth-interface-reference.png`, `public/products/scaleos.png`, `public/products/voice-ai.png`
- `public/products/hero-bizchat.png`, `public/products/hero-crm.png`, `public/products/hero-growth-intelligence.png`, `public/products/hero-scaleos.png`, `public/products/hero-voice-ai.png`
- `public/scale-with-ai/ahmedabad.jpg`, `public/scale-with-ai/mumbai.jpg`, `public/scale-with-ai/surat.jpg`, `public/scale-with-ai/vadodra.jpg`

Generated artifact removed from source control: `tsconfig.tsbuildinfo`.

## 15. Remaining Issues

- Critical: none.
- High: none.
- Medium: none unresolved.
- Low: CSP remains a defence-in-depth improvement; deploy it in Report-Only mode and validate Formspree, Maps, image, font, video, and Vinext runtime sources before enforcement.
- Informational: Formspree accepted the QA request, but mailbox delivery cannot be verified without inbox/Formspree dashboard access. Confirm the recipient address is verified and notifications are enabled; also check Spam/Promotions.
- Not Tested: the 12 required responsive viewport checks, browser console/network/hydration observation, keyboard navigation, back/forward interaction, and visual animation comparison because no browser runtime was available.

## 16. Production Deployment Checklist

- [x] Project-wide ESLint passes with zero warnings/errors.
- [x] TypeScript passes.
- [x] Vinext production build passes.
- [x] Vercel-compatible production output build passes.
- [x] Full and production dependency audits show zero known vulnerabilities.
- [x] Routes, 404s, canonical metadata, assets, sitemap, robots, and security headers checked.
- [x] Formspree ID configured for the deployment and endpoint acceptance verified.
- [x] No tracked secrets or secret-like source patterns found.
- [x] Existing active animation source preserved.
- [ ] Manually verify mailbox receipt and Formspree notification/recipient settings.
- [ ] Run the 12-resolution visual regression and interactive browser smoke test.
- [ ] Validate a Report-Only CSP before enforcing it.

## Exact Results and Commands

Automated QA assertions: **132 total, 132 passed, 0 failed**. Breakdown: 17 route status + 3 expected 404 + 75 referenced assets + 17 canonical tags + 5 security headers + 2 metadata endpoints + 4 static accessibility/source checks + 4 lint/type/build gates + 2 dependency audits + 2 secret checks + 1 Formspree acceptance test.

- Security findings: **2** (Critical 0, High 0, Medium 1 fixed, Low 1 unresolved).
- Issues fixed: **8 grouped production-readiness issues**.
- Issues unresolved: **1 Low** plus explicitly listed Not Tested coverage.
- Files removed: **38**.
- Files modified/added: **64**.
- Direct dependencies removed: **3**.
- Development run: **Pass** (local server served routes; a second dev launch correctly detected the existing process).
- Build result: **Pass**.
- Production/Vercel build result: **Pass**.
- Responsive test result: **Not Tested (12/12 requested viewports)**.

Commands used:

```powershell
npm run dev
npm run lint
npx tsc --noEmit --pretty false
npm run build
npm run build:vercel
npm run start -- --port 3001
npm audit --json
npm audit --omit=dev --json
```

Repository searches and PowerShell `Invoke-WebRequest` assertions were additionally used for route crawling, 404 checks, asset checks, canonical tags, response headers, `robots.txt`, `sitemap.xml`, source hygiene, secret paths/patterns, and the safe Formspree QA request.
