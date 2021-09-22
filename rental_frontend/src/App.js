import React from 'react';
import './App.css';
import Header from './components/Header';
import AddStaff from './pages/AddStaff';
import {BrowserRouter , Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    
      <Header/>
      <main>
      <Route path = "/add" exact component={AddStaff} />
      
    </main>
    </BrowserRouter>
  );
}

export default App;
