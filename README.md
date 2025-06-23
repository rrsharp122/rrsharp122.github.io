# Rachel Sharp's Personal Academic Website

This repository contains the source code for my personal academic website, built with Hugo and the PaperMod theme.

```bash
cd /home/bgural/my-website

hugo server -D
```

## About This Site

This website serves as a platform to share my research, science communication work, and professional background. It's designed to be clean, visually appealing, and easy to update.

## Technologies Used

- **[Hugo](https://gohugo.io/)**: A fast and modern static site generator written in Go
- **[PaperMod Theme](https://github.com/adityatelange/hugo-PaperMod)**: A clean, responsive Hugo theme
- **GitHub Pages**: Hosting platform for the website
- **GitHub Actions**: Automation for building and deploying the site

## Local Development

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) (version 0.121.0 or later)
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

- **About page**: `content/about.md`
- **Research page**: `content/research.md`
- **Science Communication page**: `content/writing.md`
- **Contact page**: `content/contact.md`

#### Adding Blog Posts

To add a new blog post:

1. Create a new markdown file in the `content/posts/` directory:
   ```bash
   hugo new posts/my-new-post.md
   ```

2. Edit the front matter and content of the file

#### Adding Images

Place images in the `static/images/` directory and reference them in your content with:
```markdown
![Alt text](/images/your-image.jpg)
```

#### Styling Changes

Custom CSS is located in `assets/css/custom.css`

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment

If needed, you can manually deploy the site:

1. Build the site:
   ```bash
   hugo --minify
   ```

2. The built site will be in the `public/` directory, which can be deployed to any static hosting service.

## R Code Examples

When adding R code examples to your content, use the following markdown format:

```markdown
```r
# Your R code here
library(tidyverse)
ggplot(data, aes(x, y)) + 
  geom_point()
```
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

If you have any questions about this website, please contact me at rsharp@unc.edu.