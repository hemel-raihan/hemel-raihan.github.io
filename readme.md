# Professional Portfolio Website - Setup Guide

## 🎨 Modern Features Included

✅ **Smooth Animations** - Floating shapes, fade-in effects, and scroll animations
✅ **Responsive Navigation** - Fixed navbar with mobile hamburger menu
✅ **Profile Photo Section** - Animated profile image with glowing ring effect
✅ **Project Showcase** - Cards with hover effects and project images
✅ **Skills Grid** - Organized skill categories with icons
✅ **Modern Design** - Gradient backgrounds, glass morphism effects
✅ **Fully Responsive** - Works perfectly on mobile, tablet, and desktop

## 📁 Files Included

- `index.html` - Main HTML structure
- `style.css` - All styling and animations
- `script.js` - Interactive functionality

## 🚀 Quick Setup

1. **Add Your Profile Photo**
   - Replace this placeholder in `index.html` (line ~39):
   ```html
   <img src="https://via.placeholder.com/200x200/38bdf8/ffffff?text=HR" alt="Hemel Raihan" class="profile-image" />
   ```
   - With:
   ```html
   <img src="your-photo.jpg" alt="Hemel Raihan" class="profile-image" />
   ```

2. **Add Real Project Images**
   - Replace placeholder images (search for `via.placeholder.com` in index.html)
   - Add your own project screenshots in the `project-image` sections
   - Recommended size: 600x400px

3. **Update Contact Links**
   - Update LinkedIn URL (line ~336)
   - Update Email address (line ~340)
   - Your GitHub link is already correct!

4. **Customize Colors** (Optional)
   - Open `style.css`
   - Change the CSS variables at the top:
   ```css
   :root {
     --primary-color: #38bdf8;  /* Your brand color */
     --secondary-color: #0ea5e9;
     --accent-color: #06b6d4;
   }
   ```

## 📸 Image Recommendations

### Profile Photo
- **Size:** 400x400px minimum (square)
- **Format:** JPG or PNG
- **Style:** Professional headshot with good lighting

### Project Images
- **Size:** 1200x800px (3:2 ratio)
- **Ideas for project images:**
  - Screenshots of your application UI
  - Dashboard views
  - System architecture diagrams
  - Before/after comparisons
  - Mobile app mockups

### Where to Get Images
- Take screenshots of your actual projects
- Use design tools like Figma to create mockups
- Use stock photos from Unsplash.com (free)
- Create simple graphics with Canva.com (free)

## 🎯 Hosting on GitHub Pages

1. Create a repository named: `your-username.github.io`
2. Upload these three files to the repository
3. Add your images to the repository
4. Go to Settings > Pages
5. Select "main" branch as source
6. Your site will be live at: `https://your-username.github.io`

## ✨ Customization Tips

### Adding More Projects
Copy this block in the Projects section:

```html
<div class="project-card">
  <div class="project-image">
    <img src="project-image.jpg" alt="Project Name" />
    <div class="project-overlay">
      <span class="project-icon">🚀</span>
    </div>
  </div>
  <div class="project-content">
    <h4 class="project-title">Your Project Name</h4>
    <p class="project-description">Description here</p>
    <div class="project-meta">
      <span class="meta-item"><i class="fas fa-users"></i> 1000+ users</span>
    </div>
    <div class="project-tech">
      <span class="tech-tag">Laravel</span>
      <span class="tech-tag">Vue.js</span>
    </div>
  </div>
</div>
```

### Adding More Skills
Add to the Skills section:

```html
<div class="skill-category">
  <div class="skill-icon"><i class="fas fa-cloud"></i></div>
  <h4>Cloud Services</h4>
  <div class="skill-tags">
    <span>AWS</span>
    <span>Azure</span>
  </div>
</div>
```

### Changing Font
Add to the `<head>` in index.html:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
```

Then update in style.css:
```css
body {
  font-family: 'Poppins', sans-serif;
}
```

## 🎨 Color Schemes

Try these pre-made color combinations in your CSS variables:

**Blue Ocean (Current)**
```css
--primary-color: #38bdf8;
--secondary-color: #0ea5e9;
--accent-color: #06b6d4;
```

**Purple Dream**
```css
--primary-color: #a855f7;
--secondary-color: #9333ea;
--accent-color: #7c3aed;
```

**Green Tech**
```css
--primary-color: #10b981;
--secondary-color: #059669;
--accent-color: #34d399;
```

**Orange Energy**
```css
--primary-color: #f97316;
--secondary-color: #ea580c;
--accent-color: #fb923c;
```

## 📱 Testing

Test your portfolio on:
- Desktop browsers (Chrome, Firefox, Safari)
- Mobile devices (or use browser dev tools)
- Different screen sizes

## 🐛 Troubleshooting

**Images not showing?**
- Check file paths are correct
- Make sure images are in the same folder
- Use relative paths: `./images/photo.jpg`

**Animations not working?**
- Clear browser cache (Ctrl+Shift+R)
- Check that script.js is loaded
- Open browser console for errors (F12)

**Layout broken on mobile?**
- The design is responsive by default
- Test with browser dev tools mobile view
- Check that viewport meta tag is present

## 💡 Pro Tips

1. **Optimize Images** - Use tools like TinyPNG to compress images
2. **Add Analytics** - Insert Google Analytics to track visitors
3. **SEO Optimization** - Add meta descriptions and keywords
4. **Add Blog** - Consider adding a blog section for articles
5. **Performance** - Use lazy loading for images below the fold

## 📧 Support

If you need help:
- Check browser console for errors (F12)
- Validate HTML at validator.w3.org
- Search for CSS issues on Stack Overflow

---

**Built with ❤️ by Claude**
*Modern, Professional, Responsive*