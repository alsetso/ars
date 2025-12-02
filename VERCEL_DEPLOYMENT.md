# Vercel Deployment Guide

## ✅ What Vercel Needs to Deploy Your Project

### 1. Required Files (All Present ✅)

- ✅ `package.json` - Defines dependencies and scripts
- ✅ `next.config.js` - Next.js configuration
- ✅ `app/layout.tsx` - Root layout (required for App Router)
- ✅ `app/page.tsx` - Homepage
- ✅ `tsconfig.json` - TypeScript configuration
- ✅ `tailwind.config.ts` - Tailwind CSS configuration
- ✅ `postcss.config.js` - PostCSS configuration

### 2. Package.json Scripts (All Present ✅)

Your `package.json` has all required scripts:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",      // ✅ Required for Vercel
    "start": "next start",       // ✅ Required for Vercel
    "lint": "next lint"
  }
}
```

### 3. Vercel Configuration

**Option A: Auto-Detection (Recommended)**
Vercel automatically detects Next.js projects. No `vercel.json` needed!

**Option B: Explicit Configuration**
If you want explicit control, create `vercel.json`:
```json
{
  "framework": "nextjs"
}
```

### 4. Domain Configuration in Vercel

After deployment succeeds, you need to:

1. **Go to Vercel Dashboard**
   - Navigate to your project
   - Click "Settings" → "Domains"

2. **Add Your Domain**
   - Click "Add Domain"
   - Enter: `advancedroofingmn.com` (or your domain)
   - Follow DNS configuration instructions

3. **DNS Configuration**
   - Add the CNAME or A record provided by Vercel
   - Wait for DNS propagation (can take up to 48 hours)

### 5. Environment Variables

**Required for Email Functionality:**
```
RESEND_API_KEY=your-resend-api-key
```

**To Set:**
1. Vercel Dashboard → Project → Settings → Environment Variables
2. Add `RESEND_API_KEY`
3. Select environment (Production, Preview, Development)
4. Redeploy

### 6. Build Settings (Auto-Detected by Vercel)

Vercel automatically detects:
- ✅ Framework: Next.js
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `.next` (auto-detected)
- ✅ Install Command: `npm install`
- ✅ Node.js Version: Auto-selected

### 7. Common Issues & Solutions

#### Issue: 404 on Domain After Successful Build

**Possible Causes:**

1. **Domain Not Connected**
   - ✅ Solution: Add domain in Vercel Dashboard → Settings → Domains
   - ✅ Verify DNS records are correct

2. **DNS Not Propagated**
   - ✅ Solution: Wait 24-48 hours for DNS propagation
   - ✅ Check DNS with: `nslookup advancedroofingmn.com`

3. **Wrong Domain Configuration**
   - ✅ Solution: Ensure domain points to Vercel's servers
   - ✅ Check CNAME/A record matches Vercel's instructions

4. **Build Output Issue**
   - ✅ Solution: Check build logs for errors
   - ✅ Verify `app/layout.tsx` exists and exports default

5. **Framework Detection Issue**
   - ✅ Solution: Ensure `package.json` has Next.js as dependency
   - ✅ Verify `next.config.js` exists

### 8. Verification Checklist

Before deployment:
- [x] `package.json` has `build` and `start` scripts
- [x] `app/layout.tsx` exists with default export
- [x] `app/page.tsx` exists with default export
- [x] `next.config.js` exists
- [x] All dependencies in `package.json`
- [x] TypeScript compiles (`npm run type-check`)
- [x] Build succeeds locally (`npm run build`)

After deployment:
- [ ] Build succeeds in Vercel
- [ ] Domain added in Vercel Dashboard
- [ ] DNS records configured correctly
- [ ] Environment variables set
- [ ] Test homepage loads
- [ ] Test other routes work

### 9. Quick Deployment Steps

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to vercel.com
   - Import your GitHub repository
   - Vercel auto-detects Next.js

3. **Configure Domain**
   - Settings → Domains → Add Domain
   - Follow DNS setup instructions

4. **Set Environment Variables**
   - Settings → Environment Variables
   - Add `RESEND_API_KEY`

5. **Deploy**
   - Vercel auto-deploys on push
   - Or manually trigger deployment

### 10. Troubleshooting 404 After Successful Build

If build succeeds but domain shows 404:

**Step 1: Check Vercel Deployment**
- Go to Vercel Dashboard → Deployments
- Click on latest deployment
- Check "Visit" button - does it work?
- If yes → Domain issue
- If no → Build issue

**Step 2: Check Domain Configuration**
- Settings → Domains
- Verify domain is listed
- Check DNS configuration status
- Ensure DNS records are correct

**Step 3: Check DNS Propagation**
```bash
# Check if DNS is pointing to Vercel
nslookup advancedroofingmn.com
dig advancedroofingmn.com
```

**Step 4: Verify Build Output**
- Check deployment logs
- Verify no runtime errors
- Check that all pages generated

**Step 5: Check Browser Cache**
- Clear browser cache
- Try incognito/private mode
- Try different browser

### 11. Expected Vercel Build Output

When deployment succeeds, you should see:
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (73/73)
✓ Finalizing page optimization
```

### 12. Domain Status in Vercel

After adding domain, check status:
- ✅ **Valid Configuration** - Domain is properly configured
- ⚠️ **Pending** - DNS propagation in progress
- ❌ **Invalid Configuration** - DNS records incorrect

---

## 🚀 Quick Fix for 404 Issue

If your build succeeds but domain shows 404:

1. **Verify Domain is Added**
   - Vercel Dashboard → Settings → Domains
   - Domain should be listed

2. **Check DNS Records**
   - Use Vercel's DNS checker
   - Ensure records match exactly

3. **Wait for Propagation**
   - DNS changes can take 24-48 hours
   - Use `dig` or `nslookup` to verify

4. **Test Vercel URL**
   - Use the `.vercel.app` URL first
   - If that works, issue is domain-specific

5. **Redeploy**
   - Sometimes a redeploy fixes routing issues
   - Trigger new deployment in Vercel

---

**Your project is correctly configured for Vercel!** The 404 is likely a domain/DNS configuration issue, not a code issue.

