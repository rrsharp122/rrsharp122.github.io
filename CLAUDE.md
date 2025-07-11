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

### CSS Architecture

The site uses a layered CSS approach:
1. **Base Theme CSS**: PaperMod theme styles (constraints: `--main-width: 720px`)
2. **hero.css**: Hero section specific styles with media queries
3. **custom.css**: Main customization file (2700+ lines) with:
   - WCAG AA compliant color scheme
   - Bootstrap 5 navbar integration
   - Responsive breakpoints at 600px, 992px
   - Accessibility enhancements (skip links, ARIA labels)
   - Enhanced image styling with shadows and borders
   - Improved typography and spacing

### Recent Improvements (January 2025)

#### Accessibility Enhancements
- Implemented Bootstrap 5 responsive navbar with hamburger menu
- Added skip-to-main-content link for keyboard navigation
- Enhanced form labels with ARIA descriptions
- Improved color contrast ratios (all text ≥4.5:1 for WCAG AA)
- Made navbar sticky on mobile devices
- Added proper heading hierarchy

#### Visual Improvements
- Hero section padding increased to 80px at 841px+ breakpoint
- Added subtle backgrounds to About Me and Research sections
- Enhanced image borders and shadows
- Added visual separators to h2 headers
- Styled h3 headers with primary color accent
- Improved text-image alignment with better float rules
- Added text justification for better readability

#### CSS Fixes Applied
- Global `h2#my-research` margin with `!important` flag
- Fixed hero.css media query conflicts
- Improved specificity for reliable style application
- Added responsive rules for mobile layouts

## Planned Features (Implementation in Progress)

### Interactive Portfolio Section
Inspired by BMSchilder's website design, implementing:
- Filterable research portfolio with panel-like display
- Data structure: `data/portfolio.yaml` with publications, articles, presentations
- Categories: publications, articles, preprints, presentations
- Implementation via Hugo shortcode `{{< portfolio >}}`
- Files to create:
  - `data/portfolio.yaml` - Portfolio data
  - `layouts/shortcodes/portfolio.html` - Portfolio grid template
  - `assets/css/portfolio.css` - Portfolio styling
  - `assets/js/portfolio.js` - Filtering JavaScript

### Interactive Timeline
Professional timeline for career milestones:
- Data structure: `data/timeline.yaml` with career events
- Custom Hugo timeline with CSS animations
- Implementation via Hugo shortcode `{{< timeline >}}`
- Files to create:
  - `data/timeline.yaml` - Timeline data
  - `layouts/shortcodes/timeline.html` - Timeline template
  - `assets/css/timeline.css` - Timeline styling
  - `assets/js/timeline.js` - Interactive features

### Example Website Analysis
Reference site analyzed: `_private/BMSchilder-master/`
- Framework: Pure HTML/CSS/JS with Bootstrap 4
- Key features: particle.js background, D3.js portfolio, embedded visualizations
- Adaptation strategy: Hugo-native approach with shortcodes for better content management