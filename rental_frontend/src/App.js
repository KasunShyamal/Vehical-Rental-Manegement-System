

import React, { Component } from 'react';


import Header from './components/header';
import Navigation from './components/navigation';
import Servicehomepage from './components/home/Servicehomepage';
import {BrowserRouter, Route} from "react-router-dom"
import Adddetails from './components/Viewdetails/Adddetails';
import servicepage from './components/servicepage';
import Serviceguide from './components/Serviceguide';
import Uiservice from './components/Uiservice';
import editDetails from './components/editDetails';
import Breakdown from './components/Breakdown';


 

export default class App extends Component{
  render(){
  
  return (
    <BrowserRouter>

    
    <div>
      <Header/>
      
      <Navigation/>
      <Route path="/add" exact component={Servicehomepage}/>
      <Route path="/nav" exact component={Adddetails}/>
      <Route path="/na" exact component={servicepage}/>
      <Route path="/drop" exact component={Serviceguide}/>
      <Route path="/sh" exact component={Uiservice}/>
      <Route path="/br" exact component={Breakdown}/>
      
      <Route path="/edit/:id" exact component={editDetails}/>
 
  
  

  
  </div>
 
</BrowserRouter>
    );
  }
}


