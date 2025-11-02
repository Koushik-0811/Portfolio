# Vercel Deployment Guide for Portfolio

## Prerequisites
- ✅ Git repository initialized
- ✅ Build working (`npm run build` should work)
- ✅ GitHub account
- ✅ Vercel account (free tier is fine)

## Step-by-Step Deployment Instructions

### Step 1: Commit Your Changes to Git

```bash
# Add all changes
git add .

# Commit with a message
git commit -m "Update portfolio with Sai Koushik Puppala's information"

# Push to GitHub (if you have a remote)
git push origin master
```

### Step 2: Push to GitHub (if not already done)

If your repository isn't on GitHub yet:
1. Create a new repository on GitHub
2. Connect your local repository:
```bash
git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git
git branch -M main  # or master
git push -u origin main
```

### Step 3: Deploy to Vercel

#### Option A: Via Vercel Dashboard (Recommended for First Time)

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click **"Add New Project"**
3. Import your GitHub repository:
   - Select your `Portfolio` repository
   - Click **"Import"**
4. Configure the project:
   - **Framework Preset**: Create React App (should auto-detect)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `build` (default for CRA)
   - **Install Command**: `npm install` (default)
5. Click **"Deploy"**
6. Wait for deployment to complete (~2-3 minutes)
7. Your site will be live at `https://your-project-name.vercel.app`

#### Option B: Via Vercel CLI (Faster for Updates)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
# Login to Vercel
vercel login

# Deploy (follow prompts)
vercel

# For production deployment
vercel --prod
```

### Step 4: Configure Custom Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Click **Settings** → **Domains**
3. Add your custom domain (e.g., `puppala-koushik.com`)
4. Follow DNS configuration instructions

### Step 5: Environment Variables (if needed)

If you have any environment variables:
1. Go to **Settings** → **Environment Variables**
2. Add your variables
3. Redeploy

## Important Notes

- ✅ Vercel automatically detects Create React App and configures it correctly
- ✅ No `vercel.json` file needed for basic deployments
- ✅ Automatic deployments on every push to GitHub (after first deployment)
- ✅ Free tier includes:
  - Unlimited deployments
  - Custom domains
  - SSL certificates
  - Global CDN

## Troubleshooting

If deployment fails:
1. Check build logs in Vercel Dashboard
2. Ensure `npm run build` works locally
3. Check for any missing dependencies
4. Verify all files are committed and pushed

## Quick Commands Reference

```bash
# Build locally to test
npm run build

# Check build output
ls -la build/

# Deploy via CLI
vercel --prod
```

