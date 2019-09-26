import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Map from "./Map";


class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }

  render() {
    return (
      <div>
        <div className="mainNav">
          <div className="nav">
            <Link to="/">
              <i className="fas fa-globe-asia"></i> Home
            </Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={Map} />
        </Switch>

        <h1>hello</h1>

        <p></p>
      </div>
    );
  }
}

export default Details;
