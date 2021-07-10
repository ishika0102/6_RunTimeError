import './App.css';
import About from './About';
import Shop from './Shop';
import Nav from './Nav';
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className= "App">
    <Nav/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/shop" component={Shop}/>
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
