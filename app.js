// app.js
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import ticketRoutes from './routes/ticketRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/tickets', ticketRoutes);
app.use('/admin', adminRoutes);

app.use(errorHandler);

export default app;
