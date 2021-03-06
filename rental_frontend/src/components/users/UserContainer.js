import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import AllVehiclesContainer from '../vehicles/vehicle_views/user/AllVehiclesForUser';
//import Header from '../shared/navigators/Header'
import AdminNavbar from '../shared/navigators/AdminNavbar';
const  UserContainer= () => {
  
    return (<React.Fragment>
     
            <Switch>
                <Route path="/">
                    <AllVehiclesContainer />
                </Route>    
            </Switch>
    </React.Fragment>);
}

export default UserContainer;