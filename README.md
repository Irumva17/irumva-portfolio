# Professional Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This portfolio serves as an interactive CV showcasing your academic background, professional experience, skills, and projects.

## Features

- **Fully Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Interactive Navigation**: Smooth scrolling with active link highlighting
- **Mobile Menu**: Hamburger menu for mobile devices
- **Animated Timeline**: Visual representation of academic journey
- **Skill Progress Bars**: Animated skill level indicators
- **Project Showcase**: Grid layout for displaying projects with technology tags
- **Contact Section**: Easy-to-find contact information and social links
- **Scroll Animations**: Elements fade in as you scroll
- **Scroll-to-Top Button**: Quick navigation back to the top

## File Structure

```
portfolio/
│
├── index.html          # Main HTML file with all content
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript for interactivity and animations
└── README.md           # This file
```

## Customization Guide

### 1. Personal Information

Open `index.html` and update the following sections:

#### Header/Hero Section
```html
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Your Name</span>
</h1>
```

#### About Section
- Replace the placeholder SVG with your actual photo
- Update the about text with your personal story

#### Contact Section
Replace these placeholders with your actual information:
```html
<a href="mailto:your.email@example.com">
<a href="https://linkedin.com/in/yourprofile">
<a href="https://github.com/yourusername">
```

### 2. Education Timeline

Add or modify timeline items in the Education section:
```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <div class="timeline-date">Year Range</div>
        <h3>Degree Title</h3>
        <p class="timeline-location">Institution Name</p>
        <p>Description...</p>
    </div>
</div>
```

### 3. Experience & Certifications

Update the experience cards with your actual experience:
```html
<div class="experience-card">
    <div class="experience-icon">💼</div>
    <h3>Job Title</h3>
    <p class="experience-company">Company Name</p>
    <p class="experience-period">Time Period</p>
    <p>Description...</p>
</div>
```

### 4. Skills

Modify skill levels in the Skills section. Change the `data-progress` value (0-100):
```html
<div class="skill-item">
    <div class="skill-info">
        <span>Skill Name</span>
        <span>85%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-progress="85"></div>
    </div>
</div>
```

### 5. Projects

Add your actual projects:
```html
<div class="project-card">
    <div class="project-header">
        <h3>Project Name</h3>
        <div class="project-links">
            <a href="https://github.com/yourrepo" class="project-link">
                <!-- GitHub icon -->
            </a>
        </div>
    </div>
    <p class="project-description">
        Project description...
    </p>
    <div class="project-tags">
        <span class="tag">Tech1</span>
        <span class="tag">Tech2</span>
    </div>
</div>
```

### 6. Color Scheme

To change the color scheme, modify CSS variables in `styles.css`:
```css
:root {
    --primary-color: #06b6d4;      /* Main brand color */
    --primary-dark: #0891b2;        /* Darker variant */
    --secondary-color: #0e7490;     /* Secondary accent */
    --text-dark: #1e293b;           /* Main text color */
    --text-light: #64748b;          /* Secondary text */
    --bg-light: #f8fafc;            /* Light background */
}
```

### 7. Adding Your Photo

Replace the SVG placeholder in the About section with an image:
```html
<div class="about-image">
    <img src="path/to/your/photo.jpg" alt="Your Name" style="width: 250px; height: 250px; border-radius: 50%; object-fit: cover; box-shadow: var(--shadow-xl);">
</div>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Option 1: GitHub Pages
1. Create a GitHub repository
2. Push your files to the repository
3. Go to Settings > Pages
4. Select your main branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify
1. Create a Netlify account
2. Drag and drop your portfolio folder
3. Your site will be live instantly with a custom URL

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to your portfolio folder
3. Run: `vercel`
4. Follow the prompts

## Tips for Best Results

1. **Use High-Quality Images**: Ensure your profile photo is clear and professional
2. **Keep Content Updated**: Regularly update your projects and skills
3. **Test on Multiple Devices**: Check responsiveness on various screen sizes
4. **Optimize Performance**: Compress images before uploading
5. **Add Real Links**: Replace all placeholder links with actual URLs
6. **Proofread**: Check for typos and grammar errors
7. **SEO**: Update the `<title>` and add meta descriptions for better search visibility

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- Reduced motion support for users with motion sensitivity
- High contrast ratios for text readability
- Alt text for images (remember to add this!)

## Performance Optimization

- Minimal external dependencies (only Google Fonts)
- CSS animations using transforms for better performance
- Lazy loading for images (implement if you add many images)
- Intersection Observer API for efficient scroll animations

## Future Enhancements (Optional)

- Add a blog section
- Integrate a contact form with backend
- Add dark mode toggle
- Include testimonials section
- Add language switcher (English/French)
- Integrate Google Analytics
- Add a downloadable PDF CV option (if desired later)

## Troubleshooting

### Mobile menu not working?
- Check that `script.js` is properly linked
- Verify JavaScript console for errors

### Animations not showing?
- Ensure you're viewing the site through a web server (not just opening the HTML file)
- Check browser console for errors

### Skills bars not filling?
- Make sure the `data-progress` attribute is set
- Scroll to the skills section slowly to trigger the observer

## License

This portfolio template is free to use for personal and commercial projects.

## Credits

Created by Irumva - Software Engineer

---

**Need Help?** Feel free to reach out if you have questions about customizing your portfolio!
