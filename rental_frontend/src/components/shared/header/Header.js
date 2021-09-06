import React  from 'react';
import styled, { withTheme } from 'styled-components';
import logo from './logo.jpg';
const Header = ()=>{
    return(
    
      
        <MainContainer>
          <img src={logo} alt="My logo"  style={{ height: 90, width: 90, borderColor: 'gray', borderWidth: 8,  marginBottom: 20 } }/>
         <h2>  ROUTE MASTER VEHICLE RENTAL ...</h2>
        </MainContainer>
    )
    
}
export default Header;
//main container
    
const MainContainer = styled.header`
  
background-image: linear-gradient(to right top, #066666, #0b545b, #13424c, #17313b, #162128, #162128, #162128, #162128, #17313b, #13424c, #0b545b, #066666);
  
  height: 6rem;
  h2{
    transform:translate(-50%,-40%);
    color:white;
    text-shadow: 0 0 3px black, 0 0 5px black;
    font-weigth:9;
    position:absolute;
    top:4%;
    font: 2rem 'AmstelvarAlpha', sans-serif;
  font-style: oblique 23deg;
    left:50%;
  }
`;
