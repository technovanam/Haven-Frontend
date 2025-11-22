# 🚀 Deployment Guide - Haven Tutors Frontend

This guide explains how to fix the **404 error on page refresh** issue and deploy your React SPA correctly.

## 🔍 The Problem

When you refresh a page on a route like `/about` or `/services`, you get a **404 error**. This happens because:

1. The browser requests `/about` from the server
2. The server looks for a file called `about.html` (which doesn't exist)
3. The server returns a 404 error

**Solution:** Configure the server to always serve `index.html` for all routes, then React Router handles the routing on the client side.

---

## ✅ Solutions Implemented

We've added configuration files for multiple hosting platforms:

### 📁 Files Created

| File | Platform | Purpose |
|------|----------|---------|
| `vercel.json` | Vercel | Rewrites all routes to index.html |
| `netlify.toml` | Netlify | Redirects configuration |
| `public/_redirects` | Netlify | Alternative redirect method |
| `vite.config.js` | Development | Local dev server configuration |

---

## 🌐 Platform-Specific Deployment

### ▲ Vercel (Recommended)

**File:** `vercel.json`

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Deploy:**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

✅ **The `vercel.json` file is already in your project!**

---

### 🌊 Netlify

**Option 1: Using `netlify.toml`**

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Option 2: Using `public/_redirects`**

```
/*    /index.html   200
```

**Deploy:**

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

✅ **Both files are already in your project!**

---

### 🔧 Apache Server

Create a `.htaccess` file in your `dist` folder after building:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

### 🌐 Nginx Server

Add this to your Nginx configuration:

```nginx
server {
  listen 80;
  server_name yourdomain.com;
  root /path/to/your/dist;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

---

### ☁️ AWS S3 + CloudFront

1. **S3 Bucket Settings:**
   - Enable static website hosting
   - Set index document: `index.html`
   - Set error document: `index.html`

2. **CloudFront Settings:**
   - Create a custom error response
   - HTTP Error Code: 404
   - Response Page Path: `/index.html`
   - HTTP Response Code: 200

---

### 🔵 Azure Static Web Apps

Create `staticwebapp.config.json`:

```json
{
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/images/*.{png,jpg,gif}", "/css/*"]
  }
}
```

---

## 💻 Local Development

The `vite.config.js` has been updated to handle routing in development:

```javascript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  server: {
    historyApiFallback: true,
  },
  
  preview: {
    historyApiFallback: true,
  },
})
```

**Test it:**

```bash
# Development server
npm run dev

# Build and preview
npm run build
npm run preview
```

---

## 🧪 Testing the Fix

### Before Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Preview locally:**
   ```bash
   npm run preview
   ```

3. **Test navigation:**
   - Visit `http://localhost:4173`
   - Navigate to `/about`
   - Refresh the page
   - ✅ Should work without 404!

### After Deployment

1. Visit your deployed site
2. Navigate to any page (e.g., `/services`)
3. Refresh the page (F5)
4. ✅ Should load correctly without 404!

---

## 🔍 Troubleshooting

### Still Getting 404?

**Check these:**

1. ✅ Configuration file is in the correct location
2. ✅ File is properly formatted (JSON/TOML syntax)
3. ✅ Rebuild and redeploy after adding config files
4. ✅ Clear browser cache and CDN cache

### Vercel Issues

```bash
# Remove and redeploy
vercel --force
```

### Netlify Issues

1. Go to Site Settings → Build & Deploy
2. Clear cache and deploy
3. Check deploy logs for errors

---

## 📚 Additional Resources

- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router Documentation](https://reactrouter.com/en/main/start/tutorial)
- [Vercel SPA Configuration](https://vercel.com/docs/concepts/projects/project-configuration#rewrites)
- [Netlify Redirects](https://docs.netlify.com/routing/redirects/)

---

## ✅ Quick Checklist

- [x] `vercel.json` created
- [x] `netlify.toml` created
- [x] `public/_redirects` created
- [x] `vite.config.js` updated
- [ ] Rebuild project: `npm run build`
- [ ] Test locally: `npm run preview`
- [ ] Deploy to hosting platform
- [ ] Test all routes on production

---

<div align="center">

**🎉 Your SPA routing is now configured correctly!**

If you still encounter issues, check the platform-specific documentation or open an issue.

</div>
