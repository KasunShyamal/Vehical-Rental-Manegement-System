import {Button} from 'react-bootstrap'
import React from 'react'

import './MainScreen.css';
class AdminHomepage extends React.Component {
    state = { companyName: 'Microsoft' };
      render() {
        return (
            <div>
         <div id="container">
    <div id="button1">
         Your button HTML here
    </div>

    <div id="button2">
         Your button HTML here
    </div>
</div>
          </div>
          
      );
    }
  }
  export default AdminHomepage;