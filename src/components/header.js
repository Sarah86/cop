import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Button from "react-bootstrap/Button"
import Hamburger from "./hamburger"
import "./theme.css"
import "./theme"


const Header = ({ siteTitle }) => (
  <header>
    <Navbar bg="verdecop" variant="dark" expand="lg" fixed="bottom">
    <Navbar.Collapse id="basic-navbar-nav" style={{ height: "calc(100vh - 90px)"}}>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand href="#home">C</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-auto" style={{ border:"none" }}>
        <Hamburger style={{ border: "none" }}/>
        </Navbar.Toggle>
      <Button>C</Button>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
