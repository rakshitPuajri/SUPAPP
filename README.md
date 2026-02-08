# SUPAPP Backend API

A production-ready Node.js/Express backend API for UI5 SPA applications, integrated with Supabase and deployed on Vercel.

## 🚀 Quick Start

### Local Development
```bash
npm install
npm run dev
```

The API will run on `http://localhost:3001`

### Deploy to Vercel
```bash
vercel
```

See [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) for step-by-step instructions.

## 📁 Project Structure

```
src/
├── app.js              # Express application setup
├── index.js            # Local development entry point
├── controllers/        # Request handlers
├── routes/             # API route definitions
├── middleware/         # Express middleware
└── db/                 # Database configuration (Supabase)

api/
└── index.js            # Vercel serverless function
```

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/materials/getMaterials` | Get all materials |
| POST | `/api/v1/materials/createMaterial` | Create a new material |

## 🛠 Dependencies

- **Express** - Web framework
- **Supabase** - Database and backend services
- **CORS** - Cross-origin resource sharing
- **Multer** - File upload handling
- **dotenv** - Environment variable management

## 📚 Documentation

- [Deployment Guide](./DEPLOYMENT_GUIDE.md) - Comprehensive deployment instructions
- [Deployment Checklist](./DEPLOYMENT_CHECKLIST.md) - Quick reference checklist
- [API Documentation](./DEPLOYMENT_GUIDE.md#api-endpoints) - Endpoint details

## 🔐 Environment Variables

Required environment variables (set in `.env` for local development, in Vercel dashboard for production):

```
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
NODE_ENV=development
PORT=3001
```

See `.env.example` for the template.

## 📦 Available Scripts

```bash
npm run dev        # Start development server with nodemon
npm start          # Start production server
npm test           # Run tests
```

## 🌐 Deployment Status

- **Development**: Local environment
- **Production**: Ready for Vercel deployment
- **Live API**: https://your-project.vercel.app/api/v1/materials (after deployment)

## 🔗 Integration with UI5

This API is designed to work seamlessly with UI5 SPA applications. See [DEPLOYMENT_GUIDE.md#ui5-integration](./DEPLOYMENT_GUIDE.md#ui5-integration) for integration examples.

## 📞 Support

For issues or questions:
1. Check [DEPLOYMENT_GUIDE.md#troubleshooting](./DEPLOYMENT_GUIDE.md#troubleshooting)
2. Review Vercel logs: `vercel logs --tail`
3. Verify Supabase credentials in the Vercel dashboard

## 📄 License

ISC

---

**Ready to deploy?** Start with [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)
