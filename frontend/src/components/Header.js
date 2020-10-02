import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {
  FaNetworkWired,
  FaShoppingCart,
  FaArrowAltCircleRight,
} from "react-icons/fa";


const Header = () => {
  return (
    <header>
      <Navbar
        className="navbar navbar-dark bg-primary"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href="/">
            <FaNetworkWired className="fa-icon-title" />
            <span class="title">Network Store</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/cart"><FaShoppingCart className="fa-icon" />Cart</Nav.Link>
              <Nav.Link href="/login"><FaArrowAltCircleRight className="fa-icon" />Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header
