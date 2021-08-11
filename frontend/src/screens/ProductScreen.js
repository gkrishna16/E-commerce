import React, { useState, useEffect } from 'react';
// import products from '../products';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Col, Image, ListGroup, Row, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';

const ProductScreen = ({ match }) => {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get(`/api/products/${match.params.id}`);

			setProduct(data);
		};
		fetchProducts();
	}, [match]);

	return (
		<div>
			<Link className="btn btn-dark my-3" to="/">
				Go Back
			</Link>
			<Row>
				<Col md={6}>
					<Image src={product.image} alt={product.name} fluid />
				</Col>
				<Col md={3}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h3>{product.name}</h3>
						</ListGroup.Item>
						<ListGroup.Item>
							<Rating
								value={product.rating}
								text={`${product.numReviews} reviews`}
							/>{' '}
						</ListGroup.Item>
						<ListGroup.Item>price : {product.price}</ListGroup.Item>
						<ListGroup.Item>description: {product.description}</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={3}>
					<Card>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<Row>
									<Col>Price : </Col>
									<Col> {product.price}</Col>
								</Row>
								<Row>
									<Col>Status : </Col>
									<Col>
										{product.countInStock > 0 ? 'In stock' : 'Out of stock'}
									</Col>
								</Row>

								<Row>
									<Button
										className="btn-block mt-3"
										type="button"
										disabled={product.countInStock === 0}
									>
										Add to Cart
									</Button>
								</Row>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default ProductScreen;
