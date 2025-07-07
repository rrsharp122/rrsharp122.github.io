# Rachel Sharp - Portfolio Website

A professional portfolio website for Rachel Sharp, showcasing neuroscience research and science communication work.

## 🌐 Live Site

Visit the live website at: [https://rrsharp122.github.io/](https://rrsharp122.github.io/)

## 🚀 Technology Stack

- **Static Site Generator**: [Hugo](https://gohugo.io/) (Extended v0.146.0)
- **Theme**: [PaperMod](https://github.com/adityatelange/hugo-PaperMod) (customized)
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions
- **Styling**: Custom CSS with responsive design
- **Contact Form**: Formspree

## 📁 Project Structure

```
my-website/
├── assets/           # CSS and JavaScript files
│   ├── css/         # Custom stylesheets
│   └── js/          # JavaScript files
├── content/         # Markdown content files
├── data/            # Data files for portfolio items
├── layouts/         # Custom Hugo templates
├── static/          # Static assets (images, PDFs)
├── themes/          # Hugo themes (PaperMod)
└── config.yaml      # Hugo configuration
```

## 🛠️ Development

### Prerequisites

- Hugo Extended (v0.146.0 or later)
- Git
- Node.js (optional, for additional tooling)

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/rrsharp122/rrsharp122.github.io.git
   cd rrsharp122.github.io
   ```

2. Start the Hugo development server:
   ```bash
   hugo server -D
   ```

3. View the site at `http://localhost:1313`

### Building for Production

```bash
hugo --minify
```

The built site will be in the `public/` directory.

## 📝 Content Management

### Adding New Portfolio Items

Portfolio items are managed through the `data/portfolio.yaml` file. Each item should include:
- Title
- Description
- Category (articles/journalism)
- Publication details
- Date
- Link

### Updating Content Pages

Main content pages are in the `content/` directory:
- `about-me.md` - About section
- `research-background.md` - Research information
- `science-communication.md` - Writing portfolio
- `contact.md` - Contact information

## 🎨 Customization

### Styling

Custom styles are organized in multiple CSS files:
- `assets/css/custom.css` - Main customization file (2700+ lines)
- `assets/css/hero.css` - Hero section specific styles
- `assets/css/portfolio.css` - Portfolio grid and filtering

Key features:
- WCAG AA compliant color scheme (contrast ratios ≥4.5:1)
- Bootstrap 5 responsive navbar with hamburger menu
- Mobile-optimized sticky navigation
- Responsive breakpoints at 600px and 992px
- Enhanced image styling with shadows and borders
- Accessibility-focused design with skip links and ARIA labels

### Configuration

Site configuration is in `config.yaml`, including:
- Site metadata
- Menu structure
- Social links
- SEO settings

## 🚀 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch. The deployment workflow is defined in `.github/workflows/hugo.yml`.

## 📧 Contact Form

The contact form uses Formspree. To update the form endpoint, modify the action URL in `layouts/index.html` and `layouts/_default/contact.html`.

## 🔍 SEO & Accessibility

The site includes:
- Comprehensive meta tags
- Open Graph tags for social sharing
- Structured data (JSON-LD)
- Robots.txt with sitemap
- AI/LLM accessibility features
- Semantic HTML structure

### Recent Accessibility Improvements (January 2025)
- Bootstrap 5 navbar with proper ARIA labels
- Skip-to-main-content link for keyboard navigation
- Enhanced form labels with ARIA descriptions
- WCAG AA compliant color contrast (≥4.5:1)
- Proper heading hierarchy (h1 → h2 → h3)
- Mobile-friendly sticky navigation
- Keyboard-accessible collapsible sections

## 📄 License

This project is private. All rights reserved.

## 🤝 Contributing

This is a personal portfolio website. Pull requests are not accepted, but feel free to fork for your own use (with appropriate attribution).

## 📞 Contact

- Email: rrsharp122@gmail.com
- LinkedIn: [Rachel Sharp](https://www.linkedin.com/in/rachel-sharp-a07b69272)
- Google Scholar: [Rachel R Sharp](https://scholar.google.com/citations?user=ppl5OrIAAAAJ&hl=en&oi=sra)