import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import products from './data/products.js';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

const app = express();
// const products = require('./products');

dotenv.config();
connectDB();

app.get('/', (req, res) => {
	res.send('Homepage.....');
});

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`server running on ${PORT}`.yellow.underline.bold);
});
