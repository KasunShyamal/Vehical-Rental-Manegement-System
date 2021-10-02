import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AdminContainer from './components/admin/AdminContainer';
import UserContainer from './components/users/UserContainer';
import Footer from './components/shared/footer/Footer';
import AllVehiclesForUser from './components/vehicles/vehicle_views/user/AllVehiclesForUser';
import ViewMoreVehicle from './components/vehicles/vehicle_views/ViewMoreVehicle';
import AdminHome from './components/Adminhome/AdminHomepage';
import Header from './components/shared/header/Header';
import AdminNavbar from './components/shared/navigators/AdminNavbar';
function App() {

  return (
    <React.Fragment>
      <Router>
      <Header/>
      <AdminNavbar />
        <Switch>
          <Route path="/admin">
            <AdminContainer />
          </Route>
          <Route path="/users">
            <UserContainer/>
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
          <Route exact path="/">
            <AllVehiclesForUser />
          </Route>
       
        </Switch>
        <Footer/>
      </Router>

    </React.Fragment>
    
  );
}

export default App;
