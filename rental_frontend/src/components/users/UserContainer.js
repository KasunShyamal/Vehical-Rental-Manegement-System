import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import AllVehiclesContainer from './vehicle_views/admin/AllVehiclesContainer';
import Header from '../shared/navigators/Header';
const  UserContainer= () => {
    <Header/>
    return (<React.Fragment>
        <Router>
            <Switch>
            
                <Route path="/">
                    <AllVehiclesContainer />
                </Route>
            </Switch>
        </Router>
    </React.Fragment>);
}

export default UserContainer;