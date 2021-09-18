import React from 'react'
import{ Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Header = () => {
    return (
        
    <Navbar bg="primary" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand href="/">Route Master</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto">
      <Form inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2" 
      />
    
    </Form>
    </Nav>
      <Nav className="m-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/">Link</Nav.Link>
        <NavDropdown title="User" id="basic-nav-dropdown">
          <NavDropdown.Item href="/">My Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/">Log Out</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/">Vehicle</Nav.Link>
      </Nav>
   
    </Navbar.Collapse>
  </Container>
</Navbar>
        
    )
}

export default Header