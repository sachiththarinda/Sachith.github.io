import React from 'react'
import './Home.css'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';

export default function Navbr() {
  return (
    <>
    <Navbar bg="light" expand="lg" className='Navbar-section'>
  <Container>
    <Navbar.Brand href="#home" className='name'>Sachith Tharinda</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="nav-option">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About Me</Nav.Link>
        <Nav.Link href="#skills">Skills</Nav.Link>
        <Nav.Link href="#works">Works</Nav.Link>
        <Nav.Link href="#contact">Contact Me</Nav.Link>       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}
