# AmberKnightor — Tekla Structures developer portfolio

Static landing page (GitHub Pages) presenting Tekla Open API tools, plugins and macros:
Report checker, Convertstp, Drawer and the Tekla deployment macros.

- `index.html` — the page, `assets/css/style.css`, `assets/js/main.js`
- `assets/img/` — screenshots (the real programs with their UI switched to English) and macro icons

## Adding a video

Each tool has a placeholder:

```html
<div class="video-slot" data-youtube="" data-title="Report checker walkthrough">
```

Put the YouTube video id into `data-youtube` (for `https://youtu.be/AbC123xyz` it is `AbC123xyz`)
and the player replaces the placeholder.

## Local preview

```
py -m http.server 8765
```

then open http://localhost:8765.
