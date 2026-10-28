# ayazaayardimet.github.io

Static site: `index.html` + `style.css` + `script.js`, no build step. Assets are
cache-busted with query strings (`style.css?v=22`, `script.js?v=13`) — bump them
when those files change. UI text lives in the `translations` object in
`script.js` (az / tr / ru / en) and is applied via `data-i18n` attributes.

## Paid period

`PAID_UNTIL` sits in the inline gate script at the top of `<head>` in
`index.html` (~line 14). Past that date (end of day, Asia/Baku) the page shows
only the "site unavailable" message in all four languages and loads nothing
else. To extend: change the date, commit, push — or run `/expiry-lock <new date>`.

The gate also sets `window.PAID_UNTIL`, which `renderDaysLeft()` in `script.js`
uses for the `.hero-days` counter in the hero's top-right corner. It shows the
number alone, in a deliberately neutral chip — no ring, no progress cue, so a
visitor cannot read it as a donation deadline. The full wording (`daysLeft` /
`daysLeftOne` translation keys) goes to its `aria-label` and `title`, so screen
readers still get it in all four languages.

## Payment reminder

`.github/workflows/payment-reminder.yml` runs daily at 10:00 Baku time and
calls `.github/scripts/payment-reminder.mjs`, which reads the same PAID_UNTIL
and sends the client a WhatsApp message when 1 day is left (`REMIND_DAYS` in
the script; `[3, 1]` to nag earlier).

It is dormant until two repo secrets exist — until then the workflow just logs
the days left:

1. The client adds CallMeBot's number **+34 644 51 95 23** on WhatsApp and
   sends `I allow callmebot to send me messages`.
2. CallMeBot replies with an API key.
3. Repo → Settings → Secrets → Actions: `CALLMEBOT_PHONE` (`+994771090347`)
   and `CALLMEBOT_APIKEY`.

Test without waiting: Actions → Payment reminder → Run workflow (the `force`
input sends immediately). Locally, `DRY_RUN=true FORCE=true node
.github/scripts/payment-reminder.mjs` prints the message without sending.
Note GitHub disables scheduled workflows after 60 days with no commits.
