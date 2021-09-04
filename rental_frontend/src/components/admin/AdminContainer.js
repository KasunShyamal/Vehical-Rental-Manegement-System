import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import CategoriesContainer from '../categories/CategoriesContainer';

import AdminVehicleManager from '../vehicles/AdminVehicleManager';

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
                    <Route exact path="/">

                    </Route>
                </Switch>
            </Router>
        </div>
    </React.Fragment>);
}

export default AdminContainer;