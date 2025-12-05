# DirectAdmin Deployment Guide for Baraka Gas Ltd

This guide will help you deploy your Next.js static site to DirectAdmin hosting and replace the old site.

## Prerequisites

- Access to DirectAdmin control panel
- FTP client (FileZilla, WinSCP, etc.) or SSH access
- Node.js and npm installed locally (for building)

## Step 1: Build Your Static Site

Run the following command in your project directory to build the production-ready static site:

```bash
npm run build
```

This will:
- Create an optimized production build
- Generate static HTML/CSS/JS files in the `out/` directory
- Optimize all images and assets

The build output will be in the `/out` folder.

## Step 2: Prepare for Upload

After building, your `out/` directory contains:
- `index.html` - Homepage
- All page routes as folders with `index.html` files
- `_next/` - Optimized JavaScript, CSS, and assets
- All static files from the `public/` folder

## Step 3: Backup and Remove Old Site

### Option A: Using File Manager (DirectAdmin)

1. **Login to DirectAdmin** at your hosting URL
2. Navigate to **File Manager** (under "System Info & Files")
3. Go to the `public_html` directory (or your domain's root directory)
4. **Backup the old site:**
   - Select all files/folders
   - Click "Compress" and create a backup (e.g., `old-site-backup-2025-12-05.zip`)
   - Download this backup to your local machine for safety
5. **Delete old site files:**
   - Select all files and folders in `public_html`
   - Click "Delete" to remove them
   - ⚠️ **Important:** Make sure `.htaccess` is backed up if you have custom rules

### Option B: Using FTP Client

1. **Connect via FTP:**
   - Use your DirectAdmin FTP credentials
   - Connect to your server
   - Navigate to `public_html` or your domain directory

2. **Download backup:**
   - Download all current files to a backup folder on your computer
   - Name it clearly (e.g., `baraka-old-site-backup-2025-12-05`)

3. **Delete old files:**
   - Select all files and folders in `public_html`
   - Delete them (keep `.htaccess` if you need custom redirects)

## Step 4: Upload New Site

### Option A: Using File Manager (DirectAdmin)

1. In DirectAdmin File Manager, navigate to `public_html`
2. Click **Upload** button
3. **Create a ZIP of the `out/` folder contents:**
   - On your local machine, go to the `out/` directory
   - Select ALL files and folders inside `out/`
   - Create a ZIP archive (e.g., `baraka-gas-site.zip`)
4. Upload the ZIP file to `public_html`
5. Once uploaded, select the ZIP file
6. Click **Extract** to extract all files
7. Delete the ZIP file after extraction

### Option B: Using FTP Client (Recommended for Large Sites)

1. **Connect to your server via FTP**
2. Navigate to `public_html` directory
3. **Upload the contents of `out/` folder:**
   - ⚠️ **Important:** Upload the CONTENTS of `out/`, not the `out/` folder itself
   - Select all files and folders INSIDE the `out/` directory
   - Drag and drop to `public_html`
   - Wait for upload to complete (may take several minutes)

### Option C: Using SSH/SCP (Advanced)

If you have SSH access:

```bash
# From your project directory
scp -r out/* username@yourserver.com:~/domains/yourdomain.com/public_html/
```

## Step 5: Configure .htaccess

Create or update `.htaccess` in `public_html` with the following rules:

```apache
# Enable HTTPS redirect (if you have SSL)
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle Next.js trailing slashes
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_URI} !/$
RewriteRule ^(.*)$ /$1/ [L,R=301]

# Custom error pages (optional)
ErrorDocument 404 /404/index.html
ErrorDocument 500 /500/index.html

# Caching for static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/x-javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
</IfModule>

# Gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/x-javascript
</IfModule>
```

## Step 6: Verify Deployment

1. **Clear your browser cache** (Ctrl+Shift+Delete or Cmd+Shift+Delete)
2. Visit your website: `https://yourdomain.com`
3. **Test key pages:**
   - Homepage: `/`
   - Products: `/products/`
   - Services: `/services/`
   - Contact: `/contact/`
   - About: `/about/`
4. **Test forms:**
   - Contact form (should send via EmailJS)
   - Quote form
   - Newsletter subscription
5. **Check mobile responsiveness**
6. **Verify dark mode toggle works**

## Step 7: Post-Deployment Checks

- [ ] All images loading correctly
- [ ] Navigation links working
- [ ] Forms submitting successfully
- [ ] EmailJS integration functioning
- [ ] Contact information correct
- [ ] Social media links working
- [ ] SEO metadata present (check page source)
- [ ] Favicon displaying
- [ ] SSL certificate active (HTTPS)

## Quick Deployment Script

For future updates, you can use this npm script:

```bash
npm run deploy:directadmin
```

This will build and prepare your site for upload. You'll still need to manually upload via FTP or File Manager.

## Troubleshooting

### Issue: Pages show 404 errors

**Solution:** 
- Ensure trailing slashes in URLs (e.g., `/about/` not `/about`)
- Check `.htaccess` rewrite rules
- Verify folder structure in `public_html`

### Issue: Images not loading

**Solution:**
- Check that `_next/` folder was uploaded completely
- Verify images are in correct paths
- Check browser console for 404 errors

### Issue: Forms not working

**Solution:**
- Verify EmailJS credentials in `.env.local` are correct
- Check browser console for API errors
- Ensure EmailJS templates are set up correctly

### Issue: Styles not applied

**Solution:**
- Clear browser cache
- Check that CSS files in `_next/static/css/` were uploaded
- Verify `.htaccess` allows access to `_next/` directory

## Need Help?

If you encounter issues:
1. Check DirectAdmin error logs (in "System Info & Files" > "Error Logs")
2. Check browser console for JavaScript errors (F12)
3. Verify file permissions (should be 644 for files, 755 for directories)

## Rollback Instructions

If something goes wrong:

1. Go to DirectAdmin File Manager
2. Navigate to `public_html`
3. Delete new site files
4. Upload and extract your backup ZIP file
5. Your old site will be restored

---

**Last Updated:** December 5, 2025
**Site Version:** Baraka Gas Ltd v0.1.0
