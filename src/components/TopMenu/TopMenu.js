import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import Cart from "../Cart";

import "./TopMenu.scss";

export default function TopMenu(props) {
  const { productsCart, getProductsCart, products } = props;
  return (
    <Navbar bg="dark" variant="dark" className="top-menu">
      <Container>
        <BrandNav />
        <MenuNav />
        <Cart
          productsCart={productsCart}
          getProductsCart={getProductsCart}
          products={products}
        />
      </Container>
    </Navbar>
  );
}

function BrandNav() {
  return (
    <Navbar.Brand>
      <Logo />
      Bugdani
    </Navbar.Brand>
  );
}

function MenuNav() {
  return (
    <Nav className="mr-auto">
      <Nav.Link>Helados</Nav.Link>
      <Nav.Link>Frapuchinos</Nav.Link>
      <Nav.Link>Meteretes</Nav.Link>
      <Nav.Link>Mamma mia</Nav.Link>
    </Nav>
  );
}
