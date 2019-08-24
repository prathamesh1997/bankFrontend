import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './components/navbar.component'
import BankBot from './components/sbi.component'
import Hdfc from './components/hdfc-component'

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Route path="/" exact component={BankBot}/>     
        <Route path="/payersBank" component={Hdfc}/>
      </div>
   </Router>
  );
}

export default App;
