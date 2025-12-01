# Firebase Deployment Guide for Baraka Gas Ltd

This guide will help you deploy your Baraka Gas website to Firebase Hosting.

## Prerequisites

- A Google account
- Firebase CLI installed (see below)
- A Firebase project (we'll create one if you don't have it)

## Step-by-Step Deployment Instructions

### 1. Install Firebase CLI (One-time setup)

The Firebase CLI has been installed globally. Verify with:
```bash
firebase --version
```

### 2. Login to Firebase

```bash
firebase login
```

This will open your browser to authenticate with your Google account.

### 3. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name (e.g., "baraka-gas-ltd")
4. Follow the setup wizard
5. Copy your project ID

### 4. Update Firebase Configuration

Edit `.firebaserc` and replace `your-firebase-project-id` with your actual Firebase project ID:

```json
{
  "projects": {
    "default": "baraka-gas-ltd"
  }
}
```

### 5. Build and Deploy

Run the deployment script:

```bash
npm run deploy
```

This will:
- Build your Next.js app (`npm run build`)
- Deploy to Firebase Hosting (`firebase deploy`)

### 6. Access Your Live Site

After deployment, Firebase will provide you with:
- **Hosting URL**: `https://your-project-id.web.app`
- **Custom Domain**: You can add your own domain in Firebase Console

## Quick Commands

| Command | Description |
|---------|-------------|
| `npm run deploy` | Build and deploy to Firebase |
| `npm run build` | Build the static site only |
| `firebase deploy --only hosting` | Deploy without rebuilding |
| `firebase hosting:channel:deploy preview` | Deploy to preview channel |

## Custom Domain Setup

1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Enter your domain (e.g., `barakagas.com`)
4. Follow DNS configuration instructions
5. Wait for SSL certificate provisioning (can take up to 24 hours)

## Troubleshooting

### Build Errors
If you get build errors, run:
```bash
npm run build
```
Fix any errors before deploying.

### Authentication Issues
If `firebase login` fails:
```bash
firebase logout
firebase login --reauth
```

### Deployment Fails
Check that:
- You're logged in: `firebase login:list`
- Project ID is correct in `.firebaserc`
- You have permissions on the Firebase project

## Environment Variables

If you need environment variables:
1. Create `.env.local` file (already gitignored)
2. Add your variables with `NEXT_PUBLIC_` prefix
3. Rebuild before deploying

## Cost Estimate

Firebase Hosting **Free Tier** includes:
- 10 GB storage
- 360 MB/day bandwidth
- Free SSL certificate
- Global CDN

Your static site should easily fit within the free tier.

## Support

For issues:
- [Firebase Documentation](https://firebase.google.com/docs/hosting)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
