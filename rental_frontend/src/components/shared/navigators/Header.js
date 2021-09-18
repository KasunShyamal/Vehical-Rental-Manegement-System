import React from 'react'

import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,

} from './NavbarElements';
 
const Header = () => {
    return (
     <div>
   
      <Nav>
      <div className="active-pink-3 active-pink-4 mb-4">
        <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
      </div>
        <NavMenu>
     
          <NavLink to='/about' activeStyle>
            home
          </NavLink>
          <NavLink to='/events' activeStyle>
            link
          </NavLink>
          <NavLink to='/blogs' activeStyle>
 
            user
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavLink to='/signin'>Sign In</NavLink>
        </NavBtn>
      </Nav>
  
      </div>
      
   /* <div>    
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
</div>*/
        
    )
}

export default Header;