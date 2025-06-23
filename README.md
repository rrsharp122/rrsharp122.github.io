# Rachel Sharp's Personal Academic Website

This repository contains the source code for Rachel Sharp's personal academic website, built with Hugo and the PaperMod theme. The site showcases research work, science communication pieces, and professional background.

🌐 **Live Site**: [https://rrsharp122.github.io/](https://rrsharp122.github.io/)

## About This Site

This website serves as a platform to share research in neuroscience, science communication work, and professional background. It features a clean, academic design optimized for readability and professional presentation.

## Technologies Used

- **[Hugo](https://gohugo.io/)**: Fast static site generator (v0.146.0+)
- **[PaperMod Theme](https://github.com/adityatelange/hugo-PaperMod)**: Clean, responsive Hugo theme
- **GitHub Pages**: Hosting platform with automatic deployment
- **GitHub Actions**: CI/CD pipeline for building and deploying

## Repository Structure

```
├── content/                    # Site content (Markdown files)
│   ├── About Me.md            # About page
│   ├── Research Background.md  # Research portfolio
│   ├── Science Communication.md# Writing and outreach
│   ├── Contact.md             # Contact information
│   └── CV.md                  # Curriculum Vitae
├── layouts/                   # Custom HTML templates
│   ├── _default/              # Page templates
│   └── partials/              # Reusable template components
├── assets/css/                # Custom styling
├── static/                    # Static assets
│   ├── images/                # Images and graphics
│   └── pdfs/                  # Downloadable documents
├── themes/PaperMod/           # Hugo theme (git submodule)
└── config.yaml               # Site configuration

```

## Local Development

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) (version 0.146.0 or later)
- Git

### Running the Site Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/rrsharp122/rrsharp122.github.io.git
   cd rrsharp122.github.io
   ```

2. Start the Hugo development server:
   ```bash
   hugo server -D
   ```

3. View the site at http://localhost:1313/

### Making Changes

#### Content Updates

All content is written in Markdown and located in the `content/` directory:

- **About page**: `content/About Me.md`
- **Research page**: `content/Research Background.md`
- **Science Communication page**: `content/Science Communication.md`
- **Contact page**: `content/Contact.md`
- **CV page**: `content/CV.md`

#### Adding New Content

To add new pages or posts:

1. Create a new markdown file in the `content/` directory
2. Add appropriate front matter (title, date, etc.)
3. Write your content in Markdown format

#### Adding Assets

- **Images**: Place in `static/images/` directory and reference as `/images/filename.jpg`
- **PDFs**: Place in `static/pdfs/` directory and reference as `/pdfs/filename.pdf`
- **Thumbnails**: Use descriptive names for paper thumbnails and writing previews

#### Styling Changes

Custom CSS is located in `assets/css/custom.css`

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the main branch. The deployment workflow:

1. **Build**: Uses Hugo v0.146.0 to build the static site
2. **Deploy**: Automatically publishes to GitHub Pages
3. **Live**: Site is available at https://rrsharp122.github.io/

### Manual Deployment

For local testing or alternative hosting:

```bash
# Build the site
hugo --minify --baseURL "https://rrsharp122.github.io/"

# Output will be in the public/ directory
```

## Site Features

- **Responsive Design**: Mobile-friendly layout
- **Academic Focus**: Optimized for research and academic content
- **Fast Loading**: Static site generation for optimal performance
- **SEO Optimized**: Proper meta tags and structured data
- **Custom Styling**: Academic-themed color scheme and typography

## Development Notes

- Uses Hugo Extended for SCSS processing
- PaperMod theme integrated as git submodule
- Custom partials override theme defaults
- GitHub Actions workflow handles deployment automatically
- All content written in Markdown for easy editing

## Contact

For questions about this website or its content, please visit the [Contact page](https://rrsharp122.github.io/contact/) or reach out through the links provided there.