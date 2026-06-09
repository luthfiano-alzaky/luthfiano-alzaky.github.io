# Luthfiano Alzaky — Portfolio

A clean, bilingual (English / Bahasa Indonesia) personal portfolio website for
**Luthfiano Alzaky**, Statistics & Data Science student at IPB University.

Built as a dependency-free static site — just HTML, CSS, and vanilla JavaScript.

## Structure

```
portfolio/
├── index.html      # All page content (bilingual via EN/ID text spans)
├── style.css       # Clean light/minimal theme, fully responsive
├── script.js       # Language toggle, mobile nav, scroll reveal, scrollspy
├── README.md
└── assets/
    ├── profile.jpg              # Headshot (web-optimized)
    ├── favicon.svg
    └── Luthfiano_Alzaky_CV.pdf  # Downloadable CV
```

## Run locally

Just open `index.html` in a browser. Or serve it:

```bash
# Python
python -m http.server 8000
# then visit http://localhost:8000
```

## Editing content

- **Text** lives directly in `index.html`. Each translatable string has two spans:
  `<span class="en-text">English</span><span class="id-text">Indonesia</span>`.
  Edit both to keep the two languages in sync.
- **Colors / spacing** are CSS variables at the top of `style.css` (`:root`).
- **Replace the photo** by swapping `assets/profile.jpg`.
- **Update the CV** by replacing `assets/Luthfiano_Alzaky_CV.pdf`.

## Deploy (GitHub Pages)

This repo is set up to publish from the root of the `main` branch. After pushing,
enable **Settings → Pages → Branch: main / root**. The live site appears at
`https://luthfiano-alzaky.github.io`.
