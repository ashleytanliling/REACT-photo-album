import React from "react";
import "./button.css";
import "./photos.css";
import Banner from "./Banner";

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
      ]
    };
  }

  locationSelectionHandler = event => {
    const places = this.state.places.map(x => {
      if (x.location === event.target.value) {
        x.checked = event.target.checked;
      }
      return x;
    });

    this.setState({ places });
  };

  selectedPlaces() {
    return this.state.places.filter(p => p.checked).map(p => p.location);
  }

  renderLocationMenu = () => {
    return this.state.places.map(place => {
      return (
        <React.Fragment key={place.location}>
          <input
            className="checkbox"
            aria-label="checkbox"
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

          {/* <button className="button" onClick={this.displayDetails}>
            More Info
          </button> */}
          <span>{photo.details}</span>
        </div>
      ));
  }

  render() {
    return (
      <div>
        <Banner {...this.props} />

        <form data-testid="form-element">{this.renderLocationMenu()}</form>

        <div className="selectedLocations">
          {this.selectedPlaces().map(item => {
            return <p key={item}>{item}</p>;
          })}
        </div>

        {this.renderSelectedPhotos()}
      </div>
    );
  }
}

export default Photos;
