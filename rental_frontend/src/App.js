import React from 'react';
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
      </main>
      <Footer />

  </BrowserRouter>
)
  


export default App;
