import './App.css'; 
import logins from './login/LoginSeller';
import loginv from './login/LoginSuplier';
import Nav from './Nav';
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import registers from './register/RegisterSeller';
import registerv from './register/RegisterSuplier';
import Home from './Home';


function App() {
  return (
    <Router>
    <div className= "App">
    <Nav/>
      <Switch>
        <Route path="/" exact component={Home}/>
      <Route path="/sellerlogin" component={logins}/>
      <Route path="/suplierlogin" component={loginv}/>
      <Route path="/sellerregister" component={registers}/>
      <Route path="/suplierregister" component={registerv}/>
      </Switch>
    </div>
    </Router>

  );
}

export default App;
