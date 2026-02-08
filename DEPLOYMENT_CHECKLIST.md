# 🚀 Vercel Deployment Setup Complete!

## What's Been Configured

Your SUPAPP backend is now ready for deployment to Vercel. Here's what has been set up:

### ✅ Files Created/Updated

| File | Purpose |
|------|---------|
| `api/index.js` | Vercel serverless function entry point |
| `vercel.json` | Vercel deployment configuration |
| `.vercelignore` | Files to exclude from Vercel deployment |
| `.env.example` | Template for environment variables |
| `DEPLOYMENT_GUIDE.md` | Comprehensive deployment documentation |
| `deploy.sh` | Quick deployment helper script |
| `package.json` | Updated with proper dev/start scripts |
| `src/db/supabase.js` | Fixed environment variable names |
| `.gitignore` | Enhanced with Vercel and Node patterns |

### 🔧 Code Updates

- **Express app** (`src/app.js`) - Already has CORS enabled ✓
- **Routes** (`src/routes/`) - Properly configured ✓
- **Controllers** (`src/controllers/`) - Ready for production ✓
- **Supabase client** (`src/db/supabase.js`) - Fixed variable names ✓

## 📝 Deployment Checklist

### Step 1: Prepare Your Repository
- [ ] Commit all changes to Git
- [ ] Push to GitHub, GitLab, or Bitbucket
- [ ] Ensure `.env` file is in `.gitignore` (already done ✓)

### Step 2: Install & Login to Vercel CLI
```bash
npm install -g vercel
vercel login
```

### Step 3: Deploy to Vercel
```bash
vercel
```

Follow the interactive prompts:
- Select your project directory
- Link to GitHub repo or create new Vercel project
- Choose framework preset: **Other**
- Confirm settings and deploy

### Step 4: Set Environment Variables
In the Vercel Dashboard for your project:

1. Go to **Settings** → **Environment Variables**
2. Add the following variables:
   ```
   SUPABASE_URL: https://your-project.supabase.co
   SUPABASE_KEY: your-supabase-anon-key
   NODE_ENV: production
   ```
3. Redeploy after adding variables (this triggers automatically or click Redeploy)

### Step 5: Verify Deployment
Test your API endpoints:

```bash
# Test the API
curl https://your-project.vercel.app/api/v1/materials

# For existing endpoints
curl https://your-project.vercel.app/api/v1/materials/getMaterials
curl -X POST https://your-project.vercel.app/api/v1/materials/createMaterial \
  -H "Content-Type: application/json" \
  -d '{"material_number": "MAT001", "material_name": "Test", "base_uom": "EA"}'
```

## 🎯 Integration with UI5 SPA

### Configure CORS (if needed)
If your UI5 app is on a different domain, update `src/app.js`:

```javascript
app.use(cors({
  origin: ['https://your-ui5-domain.com'],
  credentials: true
}));
```

### API Endpoint in UI5
Use in your UI5 manifest.json:
```json
{
  "dataSources": {
    "materials": {
      "uri": "https://your-project.vercel.app/api/v1/"
    }
  }
}
```

## 📱 Testing the API

### Using curl
```bash
# Get all materials
curl https://your-project.vercel.app/api/v1/materials/getMaterials

# Create material
curl -X POST https://your-project.vercel.app/api/v1/materials/createMaterial \
  -H "Content-Type: application/json" \
  -d '{
    "material_number": "MAT-2024-001",
    "material_name": "Steel Pipe",
    "base_uom": "EA",
    "material_type": "Product",
    "is_active": true
  }'
```

### Using Postman/Thunder Client
1. **GET** `https://your-project.vercel.app/api/v1/materials/getMaterials`
2. **POST** `https://your-project.vercel.app/api/v1/materials/createMaterial`
   - Headers: `Content-Type: application/json`
   - Body: JSON with material properties

### Using JavaScript/UI5
```javascript
// In UI5 Controller
$.ajax({
  url: "https://your-project.vercel.app/api/v1/materials/getMaterials",
  type: "GET",
  success: function(response) {
    var materials = response.materials;
    console.log("Materials loaded:", materials);
  }
});
```

## 🔍 Troubleshooting

### Issue: "Cannot find module" errors
- **Solution**: Run `npm install` before deploying
- Verify all imports have `.js` extensions (ES modules)

### Issue: Supabase connection fails
- **Solution**: Double-check `SUPABASE_URL` and `SUPABASE_KEY` in Vercel dashboard
- Ensure the keys are valid in your Supabase project settings

### Issue: CORS errors from UI5
- **Solution**: Add your UI5 domain to the CORS configuration
- Update `src/app.js` and redeploy

### Issue: Environment variables not loading
- **Solution**: Environment variables must be set in Vercel dashboard, not in `.env` files
- Redeploy after adding variables: `vercel --prod`

### View deployment logs
```bash
vercel logs https://your-project.vercel.app
```

## 📚 Additional Resources

- [Vercel Node.js Runtime Documentation](https://vercel.com/docs/functions/runtimes/node-js)
- [vercel.json Configuration Reference](https://vercel.com/docs/projects/project-configuration)
- [Express.js Guide](https://expressjs.com/)
- [Supabase JavaScript SDK](https://supabase.com/docs/reference/javascript/introduction)
- [UI5 Connectivity Guide](https://sapui5.hana.ondemand.com/sdk/#/topic/e5310932a71f42daa41f3a6143efb715)

## 🎉 You're All Set!

Your backend API is now configured and ready for deployment to Vercel. Follow the checklist above to get your API live in minutes.

For detailed information, refer to [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md).

---

**Questions?** Check the Vercel dashboard logs or run:
```bash
vercel logs --tail
```
