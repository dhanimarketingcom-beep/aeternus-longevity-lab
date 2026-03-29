# 🚀 Manual Netlify Deployment Guide

## Upload Folder to Netlify (No GitHub Required)

This guide will help you deploy your Aeternus Longevity Lab website directly to Netlify by uploading the folder.

---

## ⚠️ Important: Build Configuration for Manual Upload

For manual upload to Netlify, we need to use **static export** instead of server-side rendering.

### Step 1: Update next.config.mjs

Open `next.config.mjs` and replace the entire content with:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for manual deployment
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Ignore TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Trailing slash
  trailingSlash: true,
};

export default nextConfig;
```

---

## 📦 Step 2: Build the Project

### Open Terminal/Command Prompt

Navigate to your project folder:

```bash
cd C:\Users\markm\Downloads\aeternus-longevity-lab-website
```

### Install Dependencies (if not already done)

```bash
npm install
```

### Build for Production

```bash
npm run build
```

This will create an `out` folder with your static website.

**Expected Output:**
```
Route (app)
○ / 
○ /_not-found
○ /about
○ /contact
○ /events
○ /programs
○ /trainers

○  (Static)  prerendered as static content
Export successful. Files written to \out
```

---

## 🌐 Step 3: Deploy to Netlify

### Option A: Netlify Drop (Drag & Drop)

1. **Go to Netlify Drop**
   - Visit: https://app.netlify.com/drop
   - Or login to Netlify and click "Add new site" → "Deploy manually"

2. **Upload the `out` folder**
   - Locate the `out` folder in your project: `C:\Users\markm\Downloads\aeternus-longevity-lab-website\out`
   - **Drag and drop the ENTIRE `out` folder** onto the Netlify Drop page
   - Wait for upload to complete (usually 30-60 seconds)

3. **Your site is live!**
   - Netlify will give you a URL like: `https://random-name-123456.netlify.app`
   - You can change this later

### Option B: Netlify Dashboard

1. **Login to Netlify**
   - Go to https://app.netlify.com
   - Login or create account (free)

2. **Add New Site**
   - Click "Add new site" button
   - Select "Deploy manually"

3. **Upload Folder**
   - Drag the `out` folder to the upload area
   - Click "Deploy site"

4. **Wait for Deployment**
   - Usually takes 30-60 seconds
   - You'll see "Site is live" when ready

---

## ⚙️ Step 4: Configure Your Site

### Change Site Name (Optional)

1. Go to **Site settings** → **Site details**
2. Click "Change site name"
3. Enter your desired name (e.g., `aeternus-longevity-lab`)
4. Your URL becomes: `https://aeternus-longevity-lab.netlify.app`

### Add Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click "Add custom domain"
3. Enter your domain name (e.g., `aeternuslongevitylab.com`)
4. Follow DNS configuration instructions
5. Netlify will automatically provision SSL certificate

---

## 🔄 Updating Your Site

When you make changes to your website:

### 1. Make Your Changes
Edit any files in your project

### 2. Rebuild
```bash
npm run build
```

### 3. Re-upload
- Go to your Netlify site dashboard
- Click "Deploys" tab
- Drag and drop the NEW `out` folder
- Old deployment will be replaced

---

## ✅ Post-Deployment Checklist

After deploying, verify:

- [ ] Site loads correctly at your Netlify URL
- [ ] All pages are accessible (home, about, programs, etc.)
- [ ] Images are loading
- [ ] Navigation works
- [ ] Mobile responsive (test on phone)
- [ ] Contact information is correct
- [ ] No broken links

---

## 🐛 Troubleshooting

### Build Fails

**Error: Module not found**
```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Error: Out of memory**
```bash
# Solution: Increase Node memory
$env:NODE_OPTIONS="--max-old-space-size=4096"  # Windows PowerShell
npm run build
```

### Images Not Loading

**Problem:** Images show as broken

**Solution:** 
1. Check that images are in `/public` folder
2. Verify image paths start with `/` (e.g., `/image.jpg` not `./image.jpg`)
3. Rebuild the project

### 404 Errors on Routes

**Problem:** Direct URLs to pages show 404

**Solution:** Add `_redirects` file in `out` folder:
1. Create file: `out/_redirects`
2. Add this line: `/* /index.html 200`
3. Re-upload to Netlify

### Site Shows Old Content

**Problem:** Changes don't appear

**Solution:** Clear Netlify cache
1. Go to Netlify dashboard
2. "Deploys" → "Trigger deploy" → "Clear cache and deploy site"
3. Re-upload your `out` folder

---

## 📊 Site Performance

After deployment, test your site:

1. **Google PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Enter your Netlify URL
   - Aim for 90+ score

2. **Mobile-Friendly Test**
   - https://search.google.com/test/mobile-friendly
   - Verify mobile responsiveness

3. **SSL Certificate**
   - Netlify automatically provisions HTTPS
   - Look for the 🔒 in browser address bar

---

## 💡 Tips

### Faster Uploads
- Compress your `out` folder to a ZIP file
- Upload the ZIP file to Netlify
- Netlify will automatically extract it

### Version Control
- Keep backups of your `out` folder
- Name them by date: `out_2025-01-04.zip`

### Domain Setup
- DNS changes can take 24-48 hours to propagate
- Use Netlify's DNS servers for faster propagation
- Enable "Force HTTPS" after domain is active

---

## 📞 Need Help?

If you encounter issues:

1. **Check Build Logs**
   - Look at terminal output during `npm run build`
   - Note any warnings or errors

2. **Netlify Support**
   - Community forum: https://answers.netlify.com/
   - Documentation: https://docs.netlify.com/

3. **Re-read This Guide**
   - Make sure you followed all steps
   - Verify `next.config.mjs` is correct

---

## 🎉 Success!

Your site should now be live at your Netlify URL!

**Share your site:**
- Your team: Send them the Netlify URL
- Social media: Share your new website
- Google Search: Submit sitemap to Google Search Console

**Next Steps:**
1. Set up custom domain (if you have one)
2. Configure analytics (Google Analytics, etc.)
3. Monitor site performance
4. Collect user feedback

---

**Deployment Date:** 2025  
**Built with:** Next.js 16 + React 19 + Tailwind CSS  
**Hosting:** Netlify  

🚀 **Happy deploying!**