import express from 'express';
import cors from 'cors';

// create express app 
const app = express();
app.use(cors());
app.use(express.json());

// import matrial 
import materialRouter from './routes/material.routes.js';
app.use("/api/v1/materials", materialRouter);



export {app};