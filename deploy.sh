#!/bin/bash

# SUPAPP Backend - Quick Vercel Deployment Script
# This script sets up and deploys your backend to Vercel

echo "🚀 SUPAPP Backend - Vercel Deployment"
echo "======================================"

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing globally..."
    npm install -g vercel
fi

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

echo ""
echo "✅ Prerequisites ready!"
echo ""
echo "📋 Next Steps:"
echo "============"
echo ""
echo "1. Ensure your code is pushed to GitHub/GitLab/Bitbucket"
echo ""
echo "2. Login to Vercel:"
echo "   vercel login"
echo ""
echo "3. Deploy the project:"
echo "   vercel"
echo ""
echo "4. Set Environment Variables on Vercel Dashboard:"
echo "   - SUPABASE_URL: Your Supabase project URL"
echo "   - SUPABASE_KEY: Your Supabase anon key"
echo "   - NODE_ENV: production"
echo ""
echo "5. Verify the deployment at:"
echo "   https://<your-project>.vercel.app/api/v1/materials"
echo ""
echo "📚 For detailed instructions, see DEPLOYMENT_GUIDE.md"
