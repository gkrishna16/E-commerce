const express = require('express');
const dotenv = require('dotenv');
const app = express();
const products = require('./products');

dotenv.config();

app.get('/', (req, res) => {
	res.send('Homepage.....');
});

app.get('/api/products', (req, res) => {
	res.json(products);
});

app.get('/api/products/:id', (req, res) => {
	const product = products.find((p) => p._id === req.params.id);
	res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`server running on ${PORT}`);
});
