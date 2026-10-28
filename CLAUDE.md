# ayazaayardimet.github.io

Static site: `index.html` + `style.css` + `script.js`, no build step. Assets are
cache-busted with query strings (`style.css?v=25`, `script.js?v=16`) — bump them
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
