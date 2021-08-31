import express, { Route } from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();

import Product from '../models/productModel.js';

router.get(
	'/',
	asyncHandler(async (req, res) => {
		const products = await Product.find({});
		res.json(products);
	}),
);

router.get('/:id', async (req, res) => {
	const { id: _id } = req.params;
	const product = await Product.findById(_id);

	if (product) {
		res.json(product);
	} else {
		res.status(404);
		throw new Error(`Product not found.`);
	}
});

export default router;
