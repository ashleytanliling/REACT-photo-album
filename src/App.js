import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import './App.css';
import { photosData } from './assets/photosData';
import Photos from './Components/Photos';
import Map from './Components/Map';
import Details from './Components/Details';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
          <div className="mainNav">
            <h1 className="logo"><i class="fas fa-paw"></i> Ash</h1>
            <div className="nav">
              <Link to="/"><i class="fas fa-globe-asia"></i> Home</Link>
              <Link to="/photos"><i class="far fa-images"></i> Photos</Link>
              <Link to="/details">Details</Link>
            </div>
          </div>
            <Switch>
              <Route exact path="/" component={Map} />
              <Route exact path="/photos" component={() => <Photos photosArray={photosData} />} />
              <Route exact path="/details" component={() => <Details/>} />
              <Redirect to="/"/>
            </Switch>
          </Router>
      </header>
    </div>  
      
    
  );
}

export default App;
