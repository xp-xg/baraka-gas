#!/bin/bash

# DirectAdmin Deployment Preparation Script
# Baraka Gas Ltd
# This script prepares your Next.js site for DirectAdmin upload

echo "🚀 Preparing Baraka Gas site for DirectAdmin deployment..."
echo ""

# Step 1: Clean previous build
echo "📦 Cleaning previous build..."
rm -rf out/
rm -rf .next/

# Step 2: Build the static site
echo "🔨 Building production site..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix errors and try again."
    exit 1
fi

echo "✅ Build completed successfully!"
echo ""

# Step 3: Copy .htaccess to out directory
echo "📄 Copying .htaccess to build output..."
cp .htaccess out/.htaccess 2>/dev/null || echo "⚠️  No .htaccess file found in root. You'll need to create one manually."

# Step 4: Copy minimal .htaccess as backup
echo "📄 Copying minimal .htaccess as backup..."
cp .htaccess.minimal out/.htaccess.minimal 2>/dev/null || echo "⚠️  No .htaccess.minimal file found."

# Step 5: Show summary
echo ""
echo "✅ DEPLOYMENT READY!"
echo ""
echo "📁 Files to upload are in: ./out/"
echo ""
echo "📋 NEXT STEPS:"
echo "1. Login to DirectAdmin File Manager"
echo "2. Navigate to public_html directory"
echo "3. Backup and delete old files"
echo "4. Upload ALL files from the 'out/' folder"
echo "5. If you get 500 errors, try .htaccess.minimal instead"
echo ""
echo "📖 See DIRECTADMIN_DEPLOYMENT.md for detailed instructions"
echo "🔧 See TROUBLESHOOTING_500_ERROR.md if you encounter errors"
echo ""
echo "🎉 Good luck with your deployment!"
