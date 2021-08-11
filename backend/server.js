const express = require('express');
const app = express();
const products = require('./products');
const port = 5000;

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

app.listen(port, () => {
	console.log(`server running on ${port}`);
});
