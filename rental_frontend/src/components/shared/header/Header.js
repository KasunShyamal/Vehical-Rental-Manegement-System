import React  from 'react';
import styled, { withTheme } from 'styled-components';
import logo from './logo2.png';
const Header = ()=>{
    return(
    
      
        <MainContainer>
          <img src={logo} alt="My logo"  style={{ height: 100, width: 100, borderColor: 'gray', borderWidth: 8,  marginBottom: 20 } }/>
         <h3>  ROUTE MASTER VEHICLE RENTAL ...</h3>
        </MainContainer>
    )
    
}
export default Header;
//main container
    
const MainContainer = styled.header`
  
background-color:black;
  width:100%;
  height: 6rem;
  h3{
    transform:translate(-90%,-50%);
    color:#E9D4D4;
    text-shadow: 0 0 3px black, 0 0 5px black;
    font-weigth:9;
    position:absolute;
    top:6%;
    font: 2rem 'AmstelvarAlpha', sans-serif;
    left:50%;
  }
`;
