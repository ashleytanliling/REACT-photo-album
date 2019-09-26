import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Map from "./Map";
import Details from "./Details";
import "./button.css";
import "./photos.css"

class Photos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      place: "",
      places: [
        { location: "hokkaido", checked: true },
        { location: "kyoto", checked: true },
        { location: "osaka", checked: true },
        { location: "tokyo", checked: true }
      ],
      details: "hello"
    };
  }

  locationSelectionHandler = event => {
    // console.log(event.target.value);
    // console.log(event.target.checked);

    const places = this.state.places.map(x => {
      if (x.location === event.target.value) {
        x.checked = event.target.checked;
      }
      return x;
    });

    this.setState({ places });
  };

  // haha() {
  //   console.log("haha");
  // }

  selectedPlaces() {
    // this.haha();
    return this.state.places.filter(p => p.checked).map(p => p.location);
  }

  displayDetails = () => {
    this.setState({ details: this.state.details });
  };

  renderLocationMenu = () => {
    return this.state.places.map(place => {
      return (
        <React.Fragment key={place.location}>
          <input
            className="checkbox"
            id={place.location}
            type="checkbox"
            value={place.location}
            defaultChecked={place.checked}
            onChange={this.locationSelectionHandler}
          />
          <label htmlFor={place.location}>{place.location}</label>
        </React.Fragment>
      );
    });
  };

  renderSelectedPhotos() {
    return this.props.photosArray
      .filter(photo => this.selectedPlaces().indexOf(photo.location) !== -1)
      .map(photo => (
        <div key={photo.id} className="onePhotoChunk">
          <img
            className="image"
            alt={photo.name}
            src={require(`../assets/${photo.name}.png`)}
          ></img>
          <h2>{photo.name}</h2>

          <button className="button" onClick={this.displayDetails}>More Info</button>
          <span>{photo.details}</span>
        </div>
      ));
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

        <form>{this.renderLocationMenu()}</form>

        <h1 className="selectedLocations">
          {this.selectedPlaces().map(item => {
            return <p key={item}>{item}</p>;
          })}
        </h1>

        {this.renderSelectedPhotos()}
      </div>
    );
  }
}

export default Photos;

{
  /* <Link className="button" to="/details" onClick={this.displayDetails}>
            more info
          </Link>
          <Switch>
            <Route exact path="/details" component={() => <Details />} />
          </Switch> */
}
