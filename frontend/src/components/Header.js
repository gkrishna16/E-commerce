import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
	return (
		<div>
			<Navbar className="" bg="dark" expand="lg">
				<Container>
					<Navbar.Brand className="text-light" href="/">
						ProShop
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Link className="text-light" to="/">
								Home
							</Link>
							<Link className="text-light ml-4" to="/">
								Link
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
