import React from 'react';
import './App.css';
import Header from './components/Header';
import HeaderNav from './components/HeaderNav';
//import Footer from './components/Footer';
import AddStaff from './pages/AddStaff';
import AllStaff from './pages/AllStaff';
import UpdateStaff from './pages/UpdateStaff';
import Post from './Report/POST';
import Example from './Salary/Print';
import SalaryCal from './Salary/SalaryCal';
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <Router>
  
    <div>
      <Header/>
      <HeaderNav/>
      
      <Route path = "/print" exact component={Example} />
      <Route path = "/SalCal" exact component={SalaryCal} />
      <Route path = "/post" exact component={Post} />
      <Route path = "/add" exact component={AddStaff} />
      <Route path = "/update/:id" exact component={UpdateStaff} />
      <Route path = "/" exact component={AllStaff} />
      
    </div>
    </Router>
  );
}

export default App;
