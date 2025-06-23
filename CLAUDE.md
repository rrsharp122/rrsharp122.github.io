# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Local Development
```bash
# Start the Hugo development server with draft posts visible
hugo server -D

# Start server without drafts
hugo server
```

### Build Commands
```bash
# Build the site for production
hugo --minify

# Build with specific base URL (used in GitHub Actions)
hugo --minify --baseURL "https://rrsharp122.github.io/"
```

## Repository Structure

This is a Hugo-based static website using the PaperMod theme. Key directories:

- `content/`: All site content in Markdown format
  - Main pages: `About Me.md`, `Research Background.md`, `Science Communication.md`, `Contact.md`
  - Posts go in `content/posts/` (create subdirectories for categories)
- `layouts/`: Custom HTML templates overriding theme defaults
  - `layouts/partials/`: Partial templates for header, footer, etc.
  - `layouts/_default/`: Page templates
- `assets/css/`: Custom CSS files (main customization in `custom.css`)
- `static/`: Static assets served as-is
  - `static/images/`: All images referenced in content
  - `static/pdfs/`: PDF documents
- `themes/PaperMod/`: Git submodule containing the theme

## Key Configuration

- **config.yaml**: Main Hugo configuration
  - Base URL: `https://rrsharp122.github.io/`
  - Theme: PaperMod
  - Menu structure defined here
  - Social links and SEO metadata

## Deployment

The site automatically deploys to GitHub Pages via GitHub Actions when changes are pushed to the main branch. The workflow is defined in `.github/workflows/hugo.yml` and uses Hugo Extended version 0.121.0.

## Content Guidelines

- All content pages use standard Hugo front matter
- Images should be placed in `static/images/` and referenced as `/images/filename.jpg`
- Custom styling goes in `assets/css/custom.css`
- The site uses a light theme only (theme toggle is disabled)

## Theme Customizations

The site extends the PaperMod theme with custom layouts and styles:
- Custom header and footer in `layouts/partials/`
- Extended CSS in `assets/css/custom.css` and `assets/css/extended/custom.css`
- Custom contact page template at `layouts/_default/contact.html`