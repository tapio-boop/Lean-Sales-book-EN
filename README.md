# Lean Sales Website

A professional, modern website for the book "Lean Sales - More Sales with Less Selling"

## Overview

This website promotes the Lean Sales book, which applies Lean thinking principles to B2B sales processes. The site showcases the book's content, key principles, and available services (keynote presentations and leadership workshops).

## Features

### Book Information
- 20 real-world B2B case studies
- 5 interviews with senior commercial leaders
- Complete end-to-end management system for sales flow efficiency

### Services Offered
- **Keynote Presentations** (€3,500): 60-90 minute presentations for sales conferences and leadership meetings
- **Leadership Workshops** (€8,500): Full-day intensive workshops for B2B commercial leadership teams

### Core Principles
1. **Customer Value** - Focus on what creates value for customers
2. **Flow Efficiency** - Optimize the flow of opportunities through the sales process
3. **Systems Thinking** - See the sales process as an interconnected system
4. **Team Collaboration** - Build collaborative sales organizations

## Technical Details

### Technologies Used
- HTML5
- CSS3 (with CSS Variables for theming)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter typeface)

### Features
- **Responsive Design**: Mobile-first approach, fully responsive across all devices
- **Smooth Scrolling**: Enhanced navigation with smooth scroll behavior
- **Interactive Elements**: Animated counters, scroll-triggered animations
- **Modern UI/UX**: Clean, professional design with gradient backgrounds
- **Form Handling**: Contact form with validation and success feedback
- **Mobile Menu**: Collapsible navigation for mobile devices
- **Performance Optimized**: Lightweight, fast-loading, no external dependencies

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## File Structure

```
Lean-Sales-book-EN/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## Sections

1. **Hero Section**: Eye-catching introduction with key statistics
2. **About**: Overview of the Lean Sales approach
3. **What's Inside**: Details about case studies, interviews, and management system
4. **Principles**: Core Lean Sales principles explained
5. **Services**: Keynote and workshop offerings with pricing
6. **Book CTA**: Call-to-action for Amazon purchase
7. **Contact**: Contact form and information
8. **Footer**: Site navigation and links

## Customization

### Colors
The site uses CSS variables for easy color customization. Edit the `:root` section in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #0f172a;
    --accent-color: #06b6d4;
    /* ... other variables */
}
```

### Content
All content can be edited directly in `index.html`. The structure is semantic and well-commented.

### Amazon Link
The book is available at: https://www.amazon.com/Lean-Sales-Tapio-Nissil%C3%A4-ebook/dp/B00COVGXDQ/

### Contact Email
For inquiries: tapio@leansalesmethod.com

## Deployment

### Static Hosting
This is a static website and can be hosted on:
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any static hosting service

### GitHub Pages Deployment
1. Push the code to a GitHub repository
2. Go to Settings > Pages
3. Select the branch to deploy (e.g., `main`)
4. Select `/root` as the folder
5. Save and wait for deployment

### Custom Domain
Add a `CNAME` file to the root directory with your domain name.

## Form Integration

The contact form currently displays a success message but doesn't send emails. To enable form submissions:

1. **Use a form service** like Formspree, Netlify Forms, or FormSubmit
2. **Add backend API** to handle form submissions
3. **Use serverless function** (AWS Lambda, Netlify Functions, etc.)

Example with Formspree:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## Analytics Integration

To track website performance, add analytics code before the closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## Performance Optimization

- Images are minimal (uses CSS-based book mockup)
- Only one external resource (Google Fonts)
- CSS and JS are not minified (can be minified for production)
- No heavy frameworks or libraries

## Future Enhancements

Potential improvements:
- Add blog section for Lean Sales articles
- Client testimonials section
- Video introduction or demo
- Sample chapter download
- Newsletter signup
- Social media integration
- Multi-language support

## License

Copyright © 2026 Lean Sales. All rights reserved.

## Support

For questions or support, contact: tapio@leansalesmethod.com

---

Built with care for the Lean Sales community
