import './App.css'; 
import Login from './Login';
import Nav from './Nav';
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Signup from './Signup';


function App() {
  return (
    <Router>
    <div className= "App">
    <Nav/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      </Switch>
    </div>
    </Router>

  );
}

const Home = () =>(
  <div>
    <h1>
      HOME Page
    </h1>
  </div>
);

export default App;
