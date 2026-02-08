import { app } from './app.js';
import dotenv from 'dotenv';

try {
    dotenv.config({
        path: './.env'
    });
} catch (err) {
    console.log('No .env file found, using environment variables');
}

const PORT = process.env.PORT || 3001;
try {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
} catch (err) {
  console.log("App failed to start");
}