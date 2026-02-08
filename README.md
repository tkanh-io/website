# Tkanh Consultancy Website

A professional, bilingual (Arabic/English) single-page website for Tkanh Infrastructure and DevOps consultancy company.

## Features

- **Bilingual Support**: Seamlessly switch between Arabic and English
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations**: Eye-catching scroll animations and transitions
- **Professional Design**: Clean, modern interface that conveys trust and confidence
- **Easy Hosting**: Static website, ready to deploy anywhere

## Setup Instructions

### 1. Add Your Logo

Save your logo image as `logo.png` in the project root directory:
```
/Users/mashail/Projects/tkanh/logo.png
```

The logo should be in PNG format with a transparent background for best results.

### 2. Test Locally

Simply open `index.html` in your web browser to preview the website.

## Deployment Options

### Option 1: GitHub Pages (Recommended)

1. Create a new GitHub repository
2. Push all files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Tkanh website"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Select "main" branch as source
5. Your site will be live at: `https://yourusername.github.io/repository-name`

### Option 2: Netlify

1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your project folder to Netlify
3. Your site will be live instantly with a custom URL
4. Optional: Add your own custom domain

### Option 3: Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Run `vercel` in your project directory
4. Follow the prompts to deploy

### Option 4: Traditional Web Hosting

Upload all files via FTP to your web hosting provider:
- index.html
- style.css
- script.js
- logo.png

## Website Structure

### Sections

1. **Hero/Intro**: Compelling slogan with call-to-action
2. **Services**: Four key service areas with cloud provider badges
3. **Testimonials**: Three client testimonials showcasing trust
4. **Contact**: Email and LinkedIn contact information

### Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- IBM Plex Sans Arabic font (Google Fonts)

### Color Scheme

- Dark Color: #355357
- Light Color: #d1d8dd
- Professional and trustworthy palette

## Customization

### Updating Content

All content is in `index.html`. Each section has bilingual text:
- `<span class="lang-ar">Arabic text</span>`
- `<span class="lang-en">English text</span>`

### Modifying Colors

Colors are defined in `style.css` using CSS variables:
```css
:root {
    --dark-color: #355357;
    --light-color: #d1d8dd;
}
```

### Adding More Testimonials

Add new testimonial cards in the testimonials section following the existing structure.

## Contact

For questions or support, contact: mohammad@tkanh.io

## License

© 2024 Tkanh. All rights reserved.
