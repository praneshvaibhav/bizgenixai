# Security, QA, Optimization, and Cleanup Report

Date: 29 September 2026

Application: Bizgenix AI website

Scope: full repository review, dependency remediation, static security analysis, production builds, worker-level route/asset validation, code cleanup, and deployment readiness. Existing design, copy, layout, and active animation behaviour were preserved.

## Executive Summary

The website is production-ready within the limits stated below. ESLint and TypeScript pass, both Sites/Cloudflare and Vercel-compatible builds complete, all 29 sitemap routes return HTTP 200, invalid static and dynamic routes return 404, 68 referenced static assets resolve, and both full and production-only dependency audits report zero known vulnerabilities.

The audit initially found critical/high advisories in Next.js and React Server Components. The framework/runtime and build stack were upgraded to compatible current releases. Two code-quality regressions were corrected, and the contact form was hardened against rapid duplicate submissions and now resets after a successful submission.

Automated browser-driven visual testing was not possible because the required in-app browser runtime reported that no browser was available. Browser console, live navigation, keyboard operation, animations, and the requested responsive screenshots are therefore explicitly **Not Tested**, not presented as passing.

## Technology Stack

- Next.js-compatible App Router through Vinext 1.0.0 and Vite 8.3.1
- React and React DOM 19.2.8
- TypeScript 5.9.3 and ESLint 9.39.4
- Cloudflare Workers/OpenAI Sites build via Wrangler 4.143.0
- Vercel-compatible Nitro build
- Local typed content modules; no database, authentication, session, or first-party API routes
- Formspree for contact submissions and Google Maps for the location embed

Application flow: `route -> server/presentational component -> focused client component -> local content`, with Formspree as the only form submission service.

## Issues Found

| ID | Severity | Finding | Resolution | Status |
|---|---|---|---|---|
| DEP-01 | Critical | Next.js 16.2.6 was affected by critical/high security advisories | Upgraded Next.js to 16.3.6 | Fixed |
| DEP-02 | High | React Server Components packages were affected by a high-severity advisory | Upgraded React, React DOM, and `react-server-dom-webpack` to 19.2.8 | Fixed |
| DEP-03 | High | Outdated Vinext/Vite/Cloudflare development stack exposed transitive advisories | Upgraded Vinext, Vite, RSC plugin, Cloudflare plugin/types, Wrangler, and ESLint config | Fixed |
| QA-01 | Medium | Updated lint rules rejected synchronous state change in the splash layout effect | Deferred the already-seen splash dismissal to `requestAnimationFrame` and retained cleanup | Fixed |
| QA-02 | Low | Unused home-page `Arrow` component | Removed the dead declaration | Fixed |
| FORM-01 | Medium | Rapid repeat submission was not explicitly guarded inside the submit handler | Added a submitting-state guard; the button remains disabled while pending | Fixed |
| FORM-02 | Low | Successful form submission left previous values in the controls | Added success-driven form reset | Fixed |
| BUILD-01 | Low | Deprecated JSON import syntax emitted a configuration warning | Changed the hosting JSON import to use an import attribute | Fixed |
| BUILD-02 | Low | Stable Vinext documents `vite build` as the build entry | Updated the production build script | Fixed |
| SEC-01 | Low | No Content Security Policy is enforced | Left unresolved to avoid breaking Formspree, Maps, media, and runtime scripts without browser validation; introduce Report-Only first | Remaining |

## Security Findings

### Dependency and supply-chain review

- Initial audit: critical/high advisories were present in the framework/runtime chain.
- Final `npm audit --json`: 0 critical, 0 high, 0 moderate, 0 low.
- Final `npm audit --omit=dev --json`: 0 vulnerabilities.
- Production dependencies: 49 resolved entries; total dependency graph: 669 entries.
- No forced downgrade, incompatible override, or ignored vulnerability was used.

### Application security review

- No first-party database, API, authentication, authorization, session, cookie, file upload, command execution, or redirect surface exists. SQL/NoSQL injection, IDOR/BOLA, insecure session cookies, and server-side privilege escalation are therefore not applicable to this repository.
- No `dangerouslySetInnerHTML`, `eval`, unsafe blank-target link, empty link, or exposed first-party secret was found.
- Only `.env.example` is tracked. The configured Formspree identifier is intentionally public client configuration; its value is not included in this report.
- No private key or credential file was found in tracked application files.
- Native form constraints cover required fields, email syntax, and maximum lengths. Formspree owns server-side abuse protection and delivery.
- Defensive response headers verified: `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Cross-Origin-Opener-Policy: same-origin`, and a restrictive `Permissions-Policy`.
- CSP remains the only security hardening recommendation. It should first be deployed as Report-Only and validated in real browsers before enforcement.

## Performance Improvements

- Upgraded the build pipeline to stable Vinext and Vite releases.
- Preserved route-level server rendering and focused client boundaries.
- Retained the previous verified cleanup that removed 26 unreferenced public assets (30,695,328 bytes), 11 unreachable source/style files, and 3 unused Three.js dependencies.
- Retained framework-managed responsive images and existing lazy-loading behaviour.
- No animation was removed or retimed, and no visual redesign was introduced.
- The largest active media file, the Smart City hero video, remains intentionally because it is visible content.

## Code Cleanup

Current changes:

- Removed one unused declaration.
- Corrected the splash effect lifecycle to satisfy current React lint rules without changing its user-facing timing.
- Added explicit contact-form repeat-submission protection and successful-reset handling.
- Updated JSON import syntax and the build command.
- Refreshed lockfile dependencies to compatible patched versions.

Repository hygiene checks found no production `console.log`/`debugger`, unresolved TODO/FIXME markers, missing image `alt` attributes in rendered pages, empty links, or unsafe `_blank` links. Previously removed files remain recoverable from Git history.

## Functional and Route Testing

| Test | Result | Evidence |
|---|---|---|
| Sitemap routes | Pass | 29/29 returned HTTP 200 from the built Worker |
| Invalid routes | Pass | `/does-not-exist`, `/blog/does-not-exist`, and `/case-studies/does-not-exist` returned HTTP 404 |
| Referenced assets | Pass | 68/68 unique image/font/media assets returned HTTP 200 |
| Internal page links | Pass | 26 unique page targets returned successful responses; the parameterized `/_next/image` endpoint was correctly excluded |
| Metadata | Pass | All 29 routes contain a title, description, canonical link, and exactly one `h1` |
| Image alternatives | Pass | No rendered `<img>` lacked an `alt` attribute |
| Metadata endpoints | Pass | `robots.txt` and `sitemap.xml` returned HTTP 200; robots references the sitemap |
| Contact validation | Pass (static) | Required/email/max-length constraints and labelled controls verified |
| Contact success reset | Pass (source/build) | Reset occurs only when Formspree reports success |
| Duplicate submission | Pass (source/build) | Handler guard plus disabled submit button |
| Live Formspree delivery | Not Tested | No external message was sent during this audit; mailbox access is unavailable |

Tested routes comprise 11 top-level pages and 18 case-study detail pages listed in the sitemap.

## Responsive Testing

Responsive CSS and source breakpoints were inspected and all pages rendered through the production Worker. Visual viewport testing could not be performed without an available browser runtime.

| Resolution | Result |
|---|---|
| 1920x1080, 1440x900, 1366x768 | Not Tested - browser unavailable |
| 1280x800, 1024x768 | Not Tested - browser unavailable |
| 820x1180, 768x1024 | Not Tested - browser unavailable |
| 430x932, 414x896, 390x844, 375x812, 360x800 | Not Tested - browser unavailable |

Before broad public release, manually verify navigation/menu fit, horizontal overflow, heading wrapping, tap targets, form controls, images, and animation behaviour at these sizes.

## Browser Testing

The approved in-app browser controller was initialized, but its browser inventory was empty and it returned `No browser is available`. In accordance with the test tooling rules, no substitute standalone Playwright session was used.

The following remain **Not Tested**:

- Chromium/Firefox/WebKit visual parity
- browser console, hydration, and runtime errors
- live network failures and retry behaviour
- keyboard focus order and visible focus
- mobile menu and back/forward history interaction
- hover, scroll, splash, counter, timeline, and product animations
- Google Maps rendering and live Formspree submission/delivery

## Build Status

| Gate | Result |
|---|---|
| `npm run lint` | Pass, zero warnings/errors |
| `npx tsc --noEmit --pretty false` | Pass |
| `npm audit --omit=dev --json` | Pass, zero vulnerabilities |
| `npm audit --json` | Pass, zero vulnerabilities |
| `npm run build` | Pass; Sites/Cloudflare Worker output generated |
| `npm run build:vercel` | Pass; Vercel/Nitro output generated |
| Production Worker smoke test | Pass |
| Git whitespace check | Pass |

The build emits non-blocking upstream Vinext notices about route classification/ineffective dynamic imports. The Vercel trace also reports absent optional integrations that this project does not use. Neither warning prevents build completion or affects the deployed application.

## Remaining Issues

- **Low:** Content Security Policy is not enforced. Deploy a Report-Only policy, exercise all routes and integrations in real browsers, then tighten and enforce it.
- **Not Tested:** complete browser interaction, console/network observation, responsive screenshots, keyboard accessibility, colour contrast, and animation visual regression because no browser runtime was available.
- **Not Tested:** Formspree mailbox delivery and Google Maps live rendering require external service/browser access.
- **Informational:** `vinext start` is not the correct preview path for the stable Cloudflare Worker artifact on Node; Worker validation used Wrangler with `dist/server/wrangler.json`.

## Final Recommendation

Approve the code for deployment. No critical, high, or medium unresolved issue remains, dependency audits are clean, both production targets build, and the built Worker passes route, 404, asset, link, metadata, accessibility-source, and security-header checks.

Complete one real-browser release smoke test before a high-traffic launch, with particular attention to the twelve viewports, navigation, animations, Maps, and a labelled test enquiry. Introduce CSP separately in Report-Only mode so it can be validated without risking current integrations.

## Commands Executed

```powershell
npm prune
npm run lint
npx tsc --noEmit --pretty false
npm audit --omit=dev --json
npm audit --json
npm run build
npm run build:vercel
npx wrangler dev --config dist/server/wrangler.json --port 3001 --local
```

PowerShell `Invoke-WebRequest` assertions and repository-wide `rg` searches were used for route crawling, expected 404s, asset/link checks, canonical/SEO tags, heading and image-alt checks, response headers, metadata endpoints, source hygiene, and secret-pattern inspection.
