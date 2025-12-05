# Quick Deployment Reference

## DirectAdmin Deployment

### Quick Steps
1. **Build**: `npm run deploy:directadmin`
2. **Backup**: Download old site from DirectAdmin File Manager
3. **Clean**: Delete files from `public_html`
4. **Upload**: Upload `out/` folder contents to `public_html`
5. **Configure**: Copy `.htaccess.template` as `.htaccess`
6. **Verify**: Test site at your domain

### Files to Upload
- All contents of `out/` folder (11MB)
- `.htaccess.template` → rename to `.htaccess`

### Common Issues
- **404 errors**: Add trailing slashes to URLs (`/about/`)
- **Images missing**: Verify `_next/` folder uploaded completely
- **Forms not working**: Check EmailJS credentials in `.env.local`

See [DIRECTADMIN_DEPLOYMENT.md](DIRECTADMIN_DEPLOYMENT.md) for complete guide.

---

## Firebase Deployment

### Quick Steps
1. **One-time setup**: `firebase login`
2. **Deploy**: `npm run deploy`
3. **Done**: Site live at `https://baraka-gas.web.app`

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete guide.

---

## Development

```bash
# Start dev server
npm run dev

# Build static site
npm run build

# Check build output
ls -lh out/
```

---

**Pro Tip:** Test locally before deploying. Run `npm run dev` and verify all pages work correctly.
