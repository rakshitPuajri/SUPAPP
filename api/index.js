import { app } from '../src/app.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({
    path: './.env'
});

// Export the Express app as a Vercel serverless function
export default app;
