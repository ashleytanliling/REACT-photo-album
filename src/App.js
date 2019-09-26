import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
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
                <h1 className="logo"><i className="fas fa-paw"></i> Ash</h1>
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