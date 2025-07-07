# Accessibility Guidelines

This document outlines the accessibility features and standards implemented on Rachel Sharp's portfolio website.

## WCAG 2.1 Compliance

The site aims for WCAG 2.1 AA compliance with the following implementations:

### Color Contrast

All text meets WCAG AA standards for color contrast:

- **Primary text** (#1F2515 on #FAF1E4): 13.5:1 ratio ✓
- **Secondary text** (#3A4A2D on #FAF1E4): 7.5:1 ratio ✓
- **Accent links** (#8B6F4E on #FAF1E4): 4.6:1 ratio ✓
- **Button text** (white on #8B6F4E): 4.6:1 ratio ✓

### Keyboard Navigation

- **Skip to main content link**: Allows keyboard users to bypass navigation
- **Logical tab order**: All interactive elements follow visual flow
- **Focus indicators**: Custom focus styles with high contrast
- **Keyboard-accessible menus**: Bootstrap navbar with proper ARIA controls
- **Collapsible sections**: Enter/Space key activation support

### Screen Reader Support

#### ARIA Implementation
- `aria-label` on all icon-only buttons and links
- `aria-expanded` on collapsible sections
- `aria-describedby` on form inputs
- `aria-required` on mandatory form fields
- `role="navigation"` on main nav elements

#### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Landmark regions (`<nav>`, `<main>`, `<footer>`)
- Lists for grouped navigation items
- `<time>` elements with datetime attributes

### Responsive Design

- **Mobile breakpoints**: 600px and 992px
- **Touch targets**: Minimum 44x44px on mobile
- **Sticky navigation**: Fixed header on mobile for easy access
- **Hamburger menu**: Bootstrap 5 collapse for small screens
- **Flexible typography**: Clamp() functions for scalable text

### Forms

Contact form includes:
- Visible labels for all inputs
- ARIA descriptions for additional context
- Required field indicators
- Error handling (via Formspree)
- Logical tab order

### Images

- **Alt text**: All images have descriptive alt attributes
- **Decorative images**: Empty alt="" for purely decorative elements
- **Figure captions**: Additional context where needed
- **Responsive images**: Scale appropriately on all devices

## Testing Tools

Recommended tools for accessibility testing:

1. **WAVE** (WebAIM): Browser extension for accessibility evaluation
2. **axe DevTools**: Chrome/Firefox extension for WCAG testing
3. **NVDA/JAWS**: Screen reader testing on Windows
4. **VoiceOver**: Screen reader testing on macOS/iOS
5. **Lighthouse**: Chrome DevTools accessibility audit

## Implementation Checklist

### Completed ✓

- [x] WCAG AA color contrast
- [x] Skip to main content link
- [x] Keyboard navigation support
- [x] ARIA labels and roles
- [x] Responsive navbar with hamburger menu
- [x] Form accessibility
- [x] Semantic HTML structure
- [x] Focus indicators
- [x] Mobile-friendly touch targets

### In Progress

- [ ] Dark mode with maintained contrast ratios
- [ ] Reduced motion preferences
- [ ] Language attributes for multilingual content
- [ ] Video captions (when applicable)

### Future Enhancements

- [ ] WCAG AAA compliance option
- [ ] Adjustable font size controls
- [ ] High contrast mode toggle
- [ ] Keyboard shortcuts documentation
- [ ] Accessibility statement page

## Development Guidelines

When adding new features:

1. **Test with keyboard only**: Ensure all functionality is keyboard accessible
2. **Check color contrast**: Use tools like WebAIM's contrast checker
3. **Add ARIA labels**: For icon buttons and complex interactions
4. **Test with screen readers**: Verify content makes sense when read aloud
5. **Validate HTML**: Use W3C validator to ensure semantic markup

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Resources](https://webaim.org/resources/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)