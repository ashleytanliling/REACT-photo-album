import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./App.css";
import { photosData } from "./assets/photosData";
import Photos from "./Components/Photos";
import Map from "./Components/Map";
import Details from "./Components/Details";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Map} />
        <Route
          exact
          path="/photos"
          render={props => <Photos photosArray={photosData} {...props} />}
        />
        {/* <Route exact path="/details" component={Details} /> */}
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
