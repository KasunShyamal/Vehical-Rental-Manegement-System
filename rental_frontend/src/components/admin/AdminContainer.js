import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import CategoriesContainer from '../categories/CategoriesContainer';
import UpdateCategory from '../categories/UpdateCategory';
import AdminVehicleManager from '../vehicles/AdminVehicleManager';
import AdminNavbar from '../shared/navigators/AdminNavbar';
import Header from '../shared/header/Header';
const AdminContainer = () => {
    return (<React.Fragment>
      <AdminNavbar />
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
                </Switch>
            </Router>
        </div>
    </React.Fragment>);
}

export default AdminContainer;