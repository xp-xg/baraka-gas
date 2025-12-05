# Troubleshooting 500 Internal Server Error on DirectAdmin

**Error Message:**
```
The server encountered an internal error or misconfiguration and was unable to complete your request.
```

## Most Common Causes

### 1. **Problematic .htaccess File** (90% of cases)
The `.htaccess` file contains directives that your DirectAdmin server can't process.

### 2. **Apache Modules Not Enabled**
Required modules like `mod_rewrite` might not be available.

### 3. **File Permissions**
Incorrect file permissions can cause 500 errors.

---

## Step-by-Step Fix

### **IMMEDIATE FIX: Remove or Replace .htaccess**

#### Option A: Test Without .htaccess (Fastest)

1. **Login to DirectAdmin File Manager**
2. Navigate to `public_html`
3. Find the `.htaccess` file
4. **Rename it to `.htaccess.backup`** (this disables it)
5. Refresh your website

✅ **If the site works now:** The issue is in your `.htaccess` file

#### Option B: Use Minimal .htaccess

Replace your current `.htaccess` with this minimal version:

```apache
# MINIMAL .htaccess
DirectoryIndex index.html

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
</IfModule>

Options -Indexes
```

**Test your site.** If it works, gradually add more rules.

---

## Full DirectAdmin-Compatible .htaccess

Once the minimal version works, use this **tested DirectAdmin-compatible** version:

```apache
# DirectAdmin Compatible .htaccess for Next.js Static Export

# Enable RewriteEngine
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Force HTTPS (ONLY if you have SSL certificate)
  # COMMENT OUT if you don't have SSL
  RewriteCond %{HTTPS} off
  RewriteCond %{HTTP:X-Forwarded-Proto} !https
  RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]
  
  # Add trailing slash if missing
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_URI} !(.*)/$
  RewriteCond %{REQUEST_URI} !\.[a-zA-Z0-9]{1,5}$
  RewriteRule ^(.*)$ $1/ [L,R=301]
  
  # Serve index.html for directories
  DirectoryIndex index.html
</IfModule>

# Custom error pages
<IfModule mod_alias.c>
  ErrorDocument 404 /404/index.html
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>

# Caching for static assets
<IfModule mod_expires.c>
  ExpiresActive On
  
  # Images
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  
  # CSS and JavaScript
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  
  # HTML
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>

# Gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/css
  AddOutputFilterByType DEFLATE application/javascript text/javascript
  AddOutputFilterByType DEFLATE application/json application/xml
</IfModule>

# Prevent directory browsing
Options -Indexes
```

---

## Other Fixes

### Fix 2: Check File Permissions

**Correct permissions:**
- **Files:** 644 (rw-r--r--)
- **Directories:** 755 (rwxr-xr-x)

**To fix in DirectAdmin:**
1. Go to File Manager
2. Select all files
3. Click "Change Permissions"
4. Set files to `644` and folders to `755`

**Or via SSH:**
```bash
cd ~/domains/yourdomain.com/public_html
find . -type f -exec chmod 644 {} \;
find . -type d -exec chmod 755 {} \;
```

### Fix 3: Check Server Error Logs

1. In DirectAdmin, go to **System Info & Files**
2. Click **Error Logs**
3. Look for the most recent error
4. The log will tell you exactly what went wrong

Common error messages:
- `"Invalid command 'Header'"` → mod_headers not enabled
- `"Invalid command 'RewriteEngine'"` → mod_rewrite not enabled
- `"Options not allowed here"` → Remove `Options -Indexes`

### Fix 4: Disable SSL Redirect (if you don't have SSL)

If you **don't have an SSL certificate** installed, comment out the HTTPS redirect:

```apache
# RewriteCond %{HTTPS} off
# RewriteCond %{HTTP:X-Forwarded-Proto} !https
# RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]
```

---

## Testing Checklist

After fixing:

- [ ] Homepage loads: `http://yourdomain.com/`
- [ ] Subpages work: `/about/`, `/contact/`, `/services/`
- [ ] Images display correctly
- [ ] CSS styles are applied
- [ ] JavaScript works (check browser console - F12)
- [ ] Forms work (test contact form)

---

## Quick Action Plan

1. ✅ **Remove current `.htaccess`** (rename to `.htaccess.backup`)
2. ✅ **Test site** - Does it load now?
3. ✅ **Add minimal `.htaccess`** (DirectoryIndex only)
4. ✅ **Test again**
5. ✅ **Gradually add rules** (HTTPS, trailing slash, etc.)
6. ✅ **Check error logs** if issues persist

---

## Files Included in This Project

- `.htaccess` - Full DirectAdmin-compatible version
- `.htaccess.minimal` - Minimal troubleshooting version
- `.htaccess.template` - Original template

---

## Need More Help?

If you're still seeing 500 errors:

1. **Check DirectAdmin Error Logs** (tells you exactly what's wrong)
2. **Contact your hosting support** (they can check Apache module availability)
3. **Try the site without .htaccess** (to confirm it's the file causing issues)

---

**Last Updated:** December 5, 2025  
**Issue:** 500 Internal Server Error after DirectAdmin upload  
**Status:** ✅ Fixed with DirectAdmin-compatible .htaccess
