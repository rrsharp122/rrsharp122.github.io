# Style Guide

This document defines the visual design system and coding standards for Rachel Sharp's portfolio website.

## Color Palette

### Primary Colors (Light Mode)

```css
--primary-color: #3A4A2D;      /* Darker olive green - primary accent */
--secondary-color: #7A9263;    /* Darker sage green - secondary actions */
--accent-color: #8B6F4E;       /* Darker gold - links and buttons */
```

### Text Colors (Light Mode)

```css
--text-color: #1F2515;         /* Very dark green - primary text */
--text-light: #3A4A2D;         /* Dark olive - secondary text */
--text-muted: #4A5A3A;         /* Darker muted green - tertiary text */
```

### Background Colors (Light Mode)

```css
--background-color: #FAF1E4;   /* Warm off-white background */
--light-background: #CEDEBD;   /* Light sage - section backgrounds */
--card-background: #FFFFFF;    /* Pure white - cards and forms */
```

### Utility Colors

```css
--border: #CEDEBD;             /* Light sage border */
--border-light: #E4DDD4;       /* Very light warm border */
--shadow-subtle: rgba(67, 83, 52, 0.05);
--shadow-medium: rgba(67, 83, 52, 0.1);
--shadow-strong: rgba(67, 83, 52, 0.15);
```

## Typography

### Font Families

```css
--font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
--heading-font: 'Lora', Georgia, serif;
```

### Font Sizes

- **Hero Title**: `clamp(2.5rem, 5vw, 3.5rem)`
- **Page Title**: `3rem` (mobile: `2rem`)
- **Section Title**: `2rem`
- **Subsection**: `1.5rem`
- **Body Text**: `1rem` (wide screens: `1.1rem`)
- **Small Text**: `0.9rem`

### Line Heights

- **Headings**: `1.1` to `1.4`
- **Body Text**: `1.8` (wide screens: `1.9`)
- **Compact Text**: `1.6`

## Spacing System

### Base Unit
- `--gap: 24px`
- `--content-gap: 20px`

### Common Spacing

```css
/* Margins */
margin-bottom: 1.5rem;  /* Paragraphs */
margin-bottom: 1.8rem;  /* Lists */
margin-top: 3rem;       /* H2 headers */
margin-top: 2.5rem;     /* H3 headers */

/* Padding */
padding: 2rem;          /* Section content */
padding: 80px 1rem;     /* Hero section (wide) */
padding: 3rem 1rem;     /* Hero section (default) */
```

## Layout

### Container Widths

```css
--nav-width: 1024px;
--main-width: 720px;    /* Theme constraint */
max-width: 1400px;      /* Hero container */
max-width: 900px;       /* Research page */
```

### Breakpoints

- **Mobile**: `< 600px`
- **Tablet**: `600px - 992px`
- **Desktop**: `> 992px`
- **Hero**: `841px` (specific media query)

## Components

### Buttons

```css
.button {
  background-color: var(--accent-color);
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 600;
  letter-spacing: 1px;
  transition: all 0.25s ease;
}

.button:hover {
  background-color: var(--primary-color);
  transform: translateY(-1px);
}
```

### Cards

```css
.card {
  background: var(--card-background);
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--shadow-subtle);
  padding: 1.5rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px var(--shadow-medium);
}
```

### Images

```css
.content-image {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 3px 10px var(--shadow-medium);
  border: 1px solid var(--border-light);
}

/* Floated images */
.float-right {
  float: right;
  margin: 0 0 2rem 2.5rem;
  max-width: 200px;
}
```

### Forms

```css
.form-input {
  padding: 10px 16px;
  border: 1px solid var(--border);
  border-radius: 4px;
  background-color: var(--card-background);
  color: var(--text-color);
  transition: border-color 0.25s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-color);
}
```

## Animations

### Fade In Up

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Standard Transitions

```css
transition: all 0.3s ease;      /* General */
transition: all 0.25s ease;     /* Quick interactions */
transition: all 0.2s ease;      /* Hover states */
```

## CSS Architecture

### File Organization

1. **custom.css**: Main customization file
   - CSS variables and theme
   - Global styles
   - Component styles
   - Responsive overrides

2. **hero.css**: Hero section specific
   - Grid layout
   - Media queries
   - Hero animations

3. **portfolio.css**: Portfolio grid
   - Filter functionality
   - Grid animations
   - Loading states

### Naming Conventions

- **BEM-inspired**: `.component-name__element--modifier`
- **Sections**: `.section-name` (e.g., `.hero-section`)
- **Containers**: `.name-container` (e.g., `.hero-container`)
- **Content**: `.name-content` (e.g., `.hero-content`)

### Specificity Guidelines

1. Avoid excessive nesting (max 3 levels)
2. Use classes over IDs for styling
3. Use `!important` sparingly (only for overrides)
4. Prefer custom properties for theming

## Accessibility Standards

### Focus States

```css
:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

:focus:not(:focus-visible) {
  outline: none;
}
```

### Skip Links

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--primary-color);
  color: white;
  padding: 8px;
  text-decoration: none;
  border-radius: 0 0 4px 0;
}

.skip-link:focus {
  top: 0;
}
```

## Best Practices

1. **Mobile First**: Write base styles for mobile, enhance for larger screens
2. **Performance**: Use `transform` and `opacity` for animations
3. **Maintainability**: Use CSS custom properties for repeated values
4. **Accessibility**: Ensure 4.5:1 contrast ratios minimum
5. **Progressive Enhancement**: Layer complexity for capable browsers

## Code Examples

### Section with Background

```html
<section class="about-section section-collapsible collapsed">
  <div class="section-container">
    <button class="section-header-collapsible" aria-expanded="false">
      <h2 class="section-title">About Me</h2>
      <span class="collapse-icon" aria-hidden="true">▲</span>
    </button>
    <div class="section-content-collapsible">
      <!-- Content -->
    </div>
  </div>
</section>
```

### Responsive Image

```html
<figure class="float-right">
  <img src="/images/photo.jpg" 
       alt="Descriptive alt text" 
       loading="lazy">
  <figcaption>Optional caption</figcaption>
</figure>
```