import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import CategoriesContainer from '../categories/CategoriesContainer';
import UpdateCategory from '../categories/UpdateCategory';
import AdminVehicleManager from '../vehicles/AdminVehicleManager';
//import AdminNavbar from '../shared/navigators/AdminNavbar';
import AdminHomepage from '../Adminhome/AdminHomepage';
const AdminContainer = () => {
    return (<React.Fragment>
      
        <div className="container">
            <Router>     
                <Switch>
                    <Route path="/admin/vehicles">
                        <AdminVehicleManager />
                    </Route>
                    <Route path="/admin/categories">
                        <CategoriesContainer />
                    </Route>
                    <Route
                    path="/UpdateCategory/:id"
                    component={(props) => (
                        <UpdateCategory {...props} key={window.location.pathname} />
                    )}
                />
                    <Route exact path="/">

                    </Route>
                    <Route exact path="/admin">
                    <AdminHomepage />
                    </Route>
                </Switch>
            </Router>
        </div>
    </React.Fragment>);
}

export default AdminContainer;