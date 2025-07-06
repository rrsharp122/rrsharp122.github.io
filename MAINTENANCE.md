# Website Maintenance Guide

## Common Tasks

### Adding New Science Communication Articles

1. Edit `data/portfolio.yaml`
2. Add a new entry with the following structure:
```yaml
- title: "Article Title"
  description: "Brief description (1-2 sentences)"
  category: "articles" # or "journalism"
  publication: "Publication Name"
  date: "2025-01-15" # YYYY-MM-DD format
  link: "https://example.com/article"
  image: "/images/article-image.jpg" # Optional
```

### Updating Profile Information

- **Profile Picture**: Replace `/static/images/profilePic.jpeg`
- **Resume/CV**: Replace files in `/static/pdfs/`
- **Bio**: Edit `/content/about-me.md`
- **Research**: Edit `/content/research-background.md`

### Modifying Colors/Themes

Edit `/assets/css/custom.css`:
- Primary colors: Lines 4-21 (Light mode)
- Dark mode colors: Lines 24-41
- Accent color (gold): `--accent-color: #BFA181`

### Updating Contact Form

The contact form uses Formspree (ID: mvgrndyl). To change:
1. Edit form action in `/layouts/index.html` (line ~688)
2. Edit form action in `/layouts/_default/contact.html` (line ~233)

### Mobile Optimization

Key mobile breakpoints:
- 768px: Mobile layout
- 900px: Hero section stacks
- 1200px: Medium screens

## Troubleshooting

### Build Errors

```bash
# Clean build cache
rm -rf public/ resources/

# Rebuild site
hugo --minify
```

### Local Development Issues

```bash
# Kill existing Hugo server
pkill -f "hugo server"

# Start fresh
hugo server -D
```

### GitHub Pages Deployment

Check workflow status:
```bash
gh run list --limit 5
```

## Performance Tips

1. **Images**: Keep under 500KB, use WebP format when possible
2. **CSS**: Minified automatically by Hugo
3. **JavaScript**: Minimal JS for better performance
4. **Fonts**: Only load necessary font weights

## Security

- Never commit sensitive information
- Form submissions handled by Formspree (external service)
- All external links use `rel="noopener noreferrer"`
- Content Security Policy headers via GitHub Pages

## Backup

Important files to backup regularly:
- `/data/portfolio.yaml` - Portfolio content
- `/content/` - All markdown files
- `/static/pdfs/` - CV and resume
- `/config.yaml` - Site configuration