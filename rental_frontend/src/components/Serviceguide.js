import React from 'react';
import { useHistory } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';


function Serviceguide(){
  return(
    //import DropDown

//inside of return
<div className="dropdown">
        <Dropdown>
        <Dropdown.Toggle 
        variant="secondary btn-sm" 
        id="dropdown-basic">
            Make
        </Dropdown.Toggle>

        <Dropdown.Menu style={{backgroundColor:'#73a47'}}>
            <Dropdown.Item href="#" >Toyota</Dropdown.Item>
            <Dropdown.Item href="#">NIssan</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        <div className="dropdown">
        <Dropdown>
        <Dropdown.Toggle 
        variant="secondary btn-sm" 
        id="dropdown-basic">
            Make
        </Dropdown.Toggle>

        <Dropdown.Menu style={{backgroundColor:'#73a47'}}>
            <Dropdown.Item href="#" >Toyota</Dropdown.Item>
            <Dropdown.Item href="#">NIssan</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
</div>
</div>
    

  )
}
export default Serviceguide;