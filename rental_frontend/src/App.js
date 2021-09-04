import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AdminContainer from './components/admin/AdminContainer';
import Footer from './components/shared/footer/Footer';
//import AllPackagesForUser from './components/packages/all_packages/package_views/user/AllPackagesForUser';
import AllVehiclesForUser from './components/vehicles/vehicle_views/user/AllVehiclesForUser';
//import ViewMorePackage from './components/packages/all_packages/ViewMorePackage';
import ViewMoreVehicle from './components/vehicles/vehicle_views/ViewMoreVehicle';
import AdminNavbar from './components/shared/navigators/AdminNavbar';

function App() {

  return (
    <React.Fragment>
      <Router>
        <AdminNavbar />
        <Switch>
          <Route path="/admin">
            <AdminContainer />
          </Route>
       
          <Route
            path="/vehicles/:id"
            component={(props) => (
              <ViewMoreVehicle {...props} key={window.location.pathname} />
            )}
          />
          <Route exact path="/">
            <AllVehiclesForUser />
          </Route>
        </Switch>
      </Router>

      <Footer />

    </React.Fragment>
  );
}

export default App;
