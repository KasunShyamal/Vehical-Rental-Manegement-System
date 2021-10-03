import React from 'react';
<<<<<<< HEAD

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
=======
import Footer from './components/Footer/Footer';
import Header1 from './components/Header/Header1';
import Header from './components/Header/Navbar';
import Landingpage from './Screens/LandingPage/Landingpage';
import { BrowserRouter, Route } from "react-router-dom"
import Registerpage from './Screens/Registerpage/Registerpage';
import Loginpage from './Screens/LoginPage/Loginpage';
import abc from './Screens/abc/abc';
import PartnerRegister from './Screens/PartnerRegister/PartnerRegister';
import AdminHome from './Screens/AdminHome/AdminHome';
import PartnerHome from './Screens/PartnerHome/PartnerHome';
import View_de from './Screens/View_de/View_de';
import ProfileScreen from './Screens/ProfileScreen/ProfileScreen';
import CreateAdd from './Screens/CreateAdd/CreateAdd';
import UpdateAdd from './Screens/UpdateAdd/UpdateAdd';




const App = () =>(
  document.title = "Route Master",
  <BrowserRouter>
      <Header1 />
      <Header />
      <main>
        <Route path='/' component ={Landingpage} exact/>
        <Route path='/login' component ={Loginpage} exact/>
        <Route path='/register' component ={Registerpage} exact/>
        <Route path='/partnerreg' component={PartnerRegister} exact/>
        <Route path='/abc' component={abc} exact />
        <Route path='/AdminHome' component={AdminHome} exact />
        <Route path='/PartnerHome' component={PartnerHome} exact />
        <Route path='/View_de' component={View_de} exact/>
        <Route path='/profile' component={ProfileScreen} />
        <Route path='/createAdd' component={CreateAdd} exact />
        <Route path='/add/:id' component={UpdateAdd} exact />
      </main>
      <Footer />

  </BrowserRouter>
)
  

>>>>>>> 6a3ae1c6f0c8f6eb57332fc5333bedacffbe0b54

export default App;
