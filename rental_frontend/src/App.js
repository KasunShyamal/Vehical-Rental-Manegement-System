import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Landingpage from './Screens/LandingPage/Landingpage';
import { BrowserRouter, Route } from "react-router-dom"
import Registerpage from './Screens/Registerpage/Registerpage';
import Loginpage from './Screens/LoginPage/Loginpage';




const App = () =>(
  document.title = "Route Master",
  <BrowserRouter>
      <Header />
      <main>
        <Route path='/' component ={Landingpage} exact/>
        <Route path='/login' component ={Loginpage} exact/>
        <Route path='/register' component ={Registerpage} exact/>
      </main>
      <Footer />

  </BrowserRouter>
)
  


export default App;
