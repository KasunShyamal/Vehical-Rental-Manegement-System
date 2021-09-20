import React from 'react';
import './App.css';
import Header from './components/Header';
import AddStaff from './pages/AddStaff';
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Route path = "/add" exact component={AddStaff} />
      
    </div>
    </Router>
  );
}

export default App;
