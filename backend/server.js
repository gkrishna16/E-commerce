import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import products from './data/products.js';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// const products = require('./products');

dotenv.config();
connectDB();
const app = express();

// app.use(notFound);
// app.use(errorHandler);

app.get('/', (req, res) => {
	res.send('API is running.');
});

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`server running on ${PORT}`.yellow.underline.bold);
});
