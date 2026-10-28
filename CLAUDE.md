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
