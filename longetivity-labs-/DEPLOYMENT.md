# 🚀 Quick Deployment Guide for Netlify

## Prerequisites

- GitHub account
- Netlify account (free at [netlify.com](https://netlify.com))
- Node.js 18+ installed locally

## Step 1: Prepare Your Repository

```bash
# Navigate to project folder
cd aeternus-longevity-lab-website

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Aeternus Longevity Lab Website"

# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Netlify

### Option A: Via Netlify Dashboard (Recommended)

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"Deploy with GitHub"**
4. Select your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
6. Click **"Deploy site"**

### Option B: Via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and link to site
netlify init

# Deploy to production
netlify deploy --prod
```

## Step 3: Configure Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain name
4. Update DNS records at your registrar:
   - Add a CNAME record pointing to your Netlify URL
   - Or use Netlify DNS for automatic configuration

## Environment Variables (Optional)

If you need environment variables:

1. Go to **Site settings** → **Environment variables**
2. Add variables from `.env.example`:
   - `SITE_URL` - Your production URL
   - `NEXT_PUBLIC_SITE_URL` - Public site URL

## Build Settings Reference

These are already configured in `netlify.toml`:

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Publish directory | `.next` |
| Node version | 18 |
| Plugin | @netlify/plugin-nextjs |

## Troubleshooting

### Build Fails
```bash
# Test locally first
npm install
npm run build
```

### 404 Errors on Routes
- Check `netlify.toml` has correct redirects
- Ensure Next.js plugin is installed

### Images Not Loading
- Verify images are in `/public` folder
- Check paths start with `/` not `./`

### Slow Build Times
- Clear cache in Netlify dashboard
- **Deploys** → **Trigger deploy** → **Clear cache and deploy site**

## Useful Commands

```bash
# Local development
npm run dev

# Build for production
npm run build

# Test production build locally
npm run preview

# Check for errors
npm run lint
```

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Images loading
- [ ] Mobile responsive
- [ ] Contact form working
- [ ] SSL certificate active (automatic)
- [ ] Custom domain configured (if applicable)

## Support

- [Netlify Documentation](https://docs.netlify.com/)
- [Next.js on Netlify](https://docs.netlify.com/integrations/frameworks/next-js/)
- [Netlify Community Forum](https://answers.netlify.com/)

---

**Your site will be live at:** `https://YOUR-SITE-NAME.netlify.app`

🎉 Happy deploying!