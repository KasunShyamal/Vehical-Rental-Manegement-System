import React, { useEffect } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { logout } from '../../actions/userActions'
const AdminNavbar = () => {
    const history = useHistory();
    const handleClick = (path) => {
        history.push(path);
    }
 

   const dispatch = useDispatch();

   const userLogin = useSelector(state => state.userLogin);

   const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout())
    history.push('/')
  }

useEffect(() => {}, [userInfo])



    return (
        <NavbarContainer>
        <nav className="navbar navbar-expand-lg navbar-light ">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
                <ul className="navbar-nav mr-auto">
                    <li onClick={() => handleClick("/users")} className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    
                    <li onClick={() => handleClick("/admin/vehicles/")} className="nav-item active">
                        <a className="nav-link" href="#">Vehicles</a>
                    </li>
                    <li onClick={() => handleClick("/admin/vehicles/CreateVehicle")} className="nav-item active">
                        <a className="nav-link" href="#">Create Vehicle</a>
                    </li>
                    <li onClick={() => handleClick("/admin/categories/")} className="nav-item active">
                        <a className="nav-link" >Categories</a>
                    </li>

                </ul>
        {userInfo ? (<>
          <NavDropdown className ="m-auto"  title= {userInfo?.data.Name} id="basic-nav-dropdown">
          <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item 
            onClick={ logoutHandler }
          >Log Out</NavDropdown.Item>
          </NavDropdown>
        </>):null}
            </div>
        </nav >
        </NavbarContainer>
    );
}

export default AdminNavbar;
//main navbar container
const NavbarContainer = styled.div` 
background: black;
.nav-link{
color:white !important;
&:hover{
    background-image: linear-gradient(to right top, black, black);
    height: 30px;  /* this doesn't work */
   
}
 ul{
     margin-left="67%"
 }
`;