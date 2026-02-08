# SUPAPP Backend API

A Node.js/Express backend API integrated with Supabase, deployed on Vercel for use with UI5 SPA applications.

## Features

- Express.js REST API
- Supabase database integration
- CORS enabled for SPA applications
- Material management endpoints
- File upload support via Multer
- Serverless deployment on Vercel

## Development

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Vercel CLI (for local testing and deployment)
- Supabase account with project

### Setup

1. Clone the repository:
```bash
git clone <your-repo-url>
cd SUPAPP
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your Supabase credentials:
```
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key
PORT=3001
NODE_ENV=development
```

4. Run the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3001`

### API Endpoints

- **GET** `/api/v1/materials` - Get all materials
- **POST** `/api/v1/materials` - Create a new material
- **GET** `/api/v1/materials/:id` - Get a specific material
- **PUT** `/api/v1/materials/:id` - Update a material
- **DELETE** `/api/v1/materials/:id` - Delete a material

## Vercel Deployment

### Prerequisites

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Ensure you have a GitHub, GitLab, or Bitbucket account with your code pushed to a repository.

### Deployment Steps

#### Option 1: Using Vercel CLI (Recommended)

1. Run the Vercel deploy command:
```bash
vercel
```

2. Follow the prompts:
   - Select your project directory
   - Link to your existing project or create a new one
   - Confirm project settings

3. Set environment variables:
```bash
vercel env add SUPABASE_URL
vercel env add SUPABASE_KEY
vercel env add NODE_ENV production
```

4. Deploy:
```bash
vercel
```

#### Option 2: Using Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your GitHub/GitLab/Bitbucket repository
4. Vercel will auto-detect the configuration from `vercel.json`
5. Add environment variables in Project Settings → Environment Variables
6. Click "Deploy"

### Environment Variables

Set the following environment variables in your Vercel project:

| Variable | Description |
|----------|-------------|
| `SUPABASE_URL` | Your Supabase project URL |
| `SUPABASE_KEY` | Your Supabase anon key |
| `NODE_ENV` | Set to `production` |

### Vercel Project Configuration

The `vercel.json` file defines:
- Builds: Specifies the Node.js runtime
- Routes: Maps all requests to the Express app
- Environment variables: Production environment setup

### Accessing Your API

After deployment, your API will be available at:
```
https://<your-project-name>.vercel.app/api/v1/materials
```

Example API calls:

```bash
# Get all materials
curl https://<your-project-name>.vercel.app/api/v1/materials

# Create a material
curl -X POST https://<your-project-name>.vercel.app/api/v1/materials \
  -H "Content-Type: application/json" \
  -d '{"name": "Material Name", "description": "Description"}'
```

## UI5 Integration

To use this API in your UI5 SPA application:

### Configure CORS

The API has CORS enabled. Ensure your UI5 application's origin is allowed. Update the CORS configuration in `src/app.js` if needed:

```javascript
app.use(cors({
  origin: ['https://your-ui5-app-domain.com'],
  credentials: true
}));
```

### Example UI5 OData Model Configuration

```javascript
var oModel = new sap.ui.model.odata.v4.ODataModel({
  serviceUrl: "https://<your-project-name>.vercel.app/api/v1/",
  synchronizationMode: "None"
});
this.getView().setModel(oModel);
```

### Example UI5 REST Call

```javascript
var oController = this;
$.ajax({
  url: "https://<your-project-name>.vercel.app/api/v1/materials",
  type: "GET",
  dataType: "json",
  success: function(data) {
    console.log("Materials:", data);
  },
  error: function(error) {
    console.error("Error fetching materials:", error);
  }
});
```

## Project Structure

```
SUPAPP/
├── api/
│   └── index.js                 # Vercel serverless function entry point
├── src/
│   ├── app.js                   # Express app setup
│   ├── index.js                 # Local development entry point
│   ├── controllers/
│   │   └── material.controller.js
│   ├── routes/
│   │   └── material.routes.js
│   ├── middleware/
│   │   └── auth.middleware.js
│   ├── db/
│   │   └── supabase.js
│   └── uploads/
├── .env                         # Environment variables (not in git)
├── .env.example                 # Example environment variables
├── .vercelignore                # Vercel ignore rules
├── vercel.json                  # Vercel configuration
├── package.json
└── README.md
```

## Troubleshooting

### Common Issues

1. **"Cannot find module" errors**
   - Ensure all dependencies are installed: `npm install`
   - Check that imports use the correct file extensions for ES modules

2. **Environment variables not loading**
   - Verify environment variables are set in Vercel dashboard
   - Check that variable names match exactly in your code
   - Redeploy after adding new environment variables

3. **CORS errors from UI5 application**
   - Ensure the UI5 app domain is added to the CORS configuration
   - Check that requests include proper headers

4. **Supabase connection issues**
   - Verify `SUPABASE_URL` and `SUPABASE_KEY` are correct
   - Check that the key has appropriate permissions
   - Ensure network access is allowed from Vercel

### Debugging

Enable verbose logging during deployment:
```bash
vercel --debug
```

View deployment logs:
```bash
vercel logs <deployment-url>
```

## Additional Resources

- [Vercel Node.js Runtime](https://vercel.com/docs/functions/runtimes/node-js)
- [Express.js Documentation](https://expressjs.com/)
- [Supabase JavaScript SDK](https://supabase.com/docs/reference/javascript)
- [UI5 Development Guide](https://sapui5.hana.ondemand.com/)

## License

ISC

## Support

For issues or questions, please create an issue in the repository.
