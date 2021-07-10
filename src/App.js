import './App.css'; 
import logins from './login/LoginSeller';
import loginv from './login/LoginSupplier';
import Nav from './Nav';
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import registers from './register/RegisterSeller';
import registerv from './register/RegisterSupplier';


function App() {
  return (
    <Router>
    <div className= "App">
    <Nav/>
      <Switch>
      <Route path="/loginshopowner" component={logins}/>
      <Route path="/loginsupplier" component={loginv}/>
      <Route path="/registershopowner" component={registers}/>
      <Route path="/registersupplier" component={registerv}/>
      </Switch>
    </div>
    </Router>

  );
}

export default App;
