# Website enquiries and conversion measurement

POST /api/enquiries validates an allowlisted enquiry type/product, name/email/brief, fixed first-party Origin and empty honeypot. Body limited to 16KB. Fixed destination info@bizgenix.ai prevents using the endpoint as a relay. A browser-generated UUID identifies each submission. Identical repeated saves do not create another record; conflicting reuse is rejected. Rate limits cap submissions per email and globally; direct email/phone remain fallback routes. Production is one Next process with filesystem-backed state.

The API saves a private queue record before returning 202 with a reference. That is receipt by the website, not a promise of inbox delivery. The systemd worker attempts SES delivery each minute with backoff. Successful SES acceptance stores its MessageId; inbox receipt must be checked separately. Persistent failures remain queued and appear in the report. In an ambiguous SES timeout/crash a retry can produce a duplicate email with the same reference; this is an at-least-once notification system, not an exactly-once email guarantee.

Files: /var/lib/bizgenix-website/enquiries (PII, mode 700 directory/600 records), metrics.jsonl (no form identity/brief fields), limits (expiring slots). Data is outside release directories and survives deployments/rollback. Do not publish the data folder or mail env file to GitHub. Lead records are retained for sales follow-up and handled under the site's retention/deletion policy. Queue existence does not replace disk/server backups.

Credentials are server-only in /etc/bizgenix-website-mail.env, root-owned 600, read by systemd. Only the mail worker receives the existing AWS SES identity. The public Next application has no copied email credentials. The fixed verified-domain sender is info@bizgenix.ai. Do not alter GI apps or broaden AWS permissions for this workflow.

Install service/timer from ops; systemctl enable --now bizgenix-enquiries.timer. Verify timer enabled/active and inspect failed service runs. Run `node scripts/enquiry-report.mjs` over SSH for sanitized counts. Private queue files provide lead-level follow-up; no public inbox endpoint exists.

Events: contact_view, form_start, enquiry_received, enquiry_email_accepted, enquiry_error, email_click, whatsapp_click, phone_click. Last two mail events are server-written. Campaign attribution persists only in sessionStorage to survive internal navigation. No GA4 property was created; these are first-party measured events. Clicks are not leads. Accepted enquiries require human qualification; they are not automatically qualified leads or sales.

Test email: info@bizgenix.ai with brief prefix [DELIVERY TEST]; campaign delivery-test. Test lead records and metrics excluded from genuine counts. Verify final receipt in the business inbox and record the message ID in the sanitized release report, never raw credentials. Tests must not email prospects.

Known project limitations: pre-existing GI demo TypeScript errors remain under the existing build configuration; development-only dependency audit warnings must not be represented as a fully clean audit. Production dependency results are reported per release.
