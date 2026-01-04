# Rachel Sharp - Portfolio Website

A portfolio website for Rachel Sharp, showcasing neuroscience research and science communication.

**Live site:** https://rrsharp122.github.io/

## Tech Stack

- Hugo (Extended v0.146.0) with PaperMod theme
- GitHub Pages + GitHub Actions
- Custom CSS with CSS variables for theming
- Formspree for contact form

## Development

```bash
# Start dev server (with drafts)
hugo server -D

# Build for production
hugo --minify
```

## Project Structure

```
├── assets/css/      # Custom stylesheets (custom.css, hero.css, portfolio.css)
├── content/         # Markdown content pages
├── data/            # Data files (portfolio.yaml for articles/publications)
├── layouts/         # Custom Hugo templates
├── static/          # Static assets (images, PDFs)
└── config.yaml      # Hugo configuration
```

## Adding Content

**Portfolio items:** Edit `data/portfolio.yaml`. Each item needs title, description, category (articles/journalism), publication, date, link, and image path.

**Pages:** Edit markdown files in `content/`.

**Images:** Add to `static/images/`, reference as `/images/filename.jpg`.

## Deployment

Pushes to `main` trigger automatic deployment via `.github/workflows/hugo.yml`.

## Contact

- Email: rrsharp122@gmail.com
- [LinkedIn](https://www.linkedin.com/in/rachel-sharp-a07b69272)
- [Google Scholar](https://scholar.google.com/citations?user=ppl5OrIAAAAJ&hl=en&oi=sra)
