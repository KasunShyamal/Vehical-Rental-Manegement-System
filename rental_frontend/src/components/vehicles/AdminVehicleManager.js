import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import CreateVehicle from "./create_vehicle/CreateVehicle";
import UpdateVehicle from "./update_vehicle/UpdateVehicle"
import AllVehiclesContainer from './vehicle_views/admin/AllVehiclesContainer';

const AdminVehicleManager = () => {
    return (<React.Fragment>
        <Router>
            <Switch>
                <Route
                    path="/admin/vehicles/UpdateVehicle/:id"
                    component={(props) => (
                        <UpdateVehicle {...props} key={window.location.pathname} />
                    )}
                />
                <Route path="/admin/vehicles/CreateVehicle">
                    <CreateVehicle />
                </Route>
                <Route path="/">
                    <AllVehiclesContainer />
                </Route>
            </Switch>
        </Router>
    </React.Fragment>);
}

export default AdminVehicleManager;