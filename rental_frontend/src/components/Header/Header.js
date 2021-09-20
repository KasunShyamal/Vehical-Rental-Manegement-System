
import React, { useEffect } from 'react'
import{ Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/userActions'

const Header = ( ) => {
  const history = useHistory();

   const dispatch = useDispatch();

   const userLogin = useSelector(state => state.userLogin);

   const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout())
    history.push('/')
  }

useEffect(() => {}, [userInfo])

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
        {userInfo ? (<> 
          <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/">Link</Nav.Link>
        <NavDropdown title= {userInfo?.data.Name} id="basic-nav-dropdown">
          <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item 
            onClick={ logoutHandler }
          >Log Out</NavDropdown.Item>
          
        </NavDropdown>
        </> ): null }
        
      </Nav>
   
    </Navbar.Collapse>
  </Container>
</Navbar>
        
    )
}

export default Header
