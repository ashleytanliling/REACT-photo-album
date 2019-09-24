import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import './Map.css';

export class MapContainer extends React.Component {
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    };

    //  to show InfoWindow (a component in google-maps-react library)
    //  gives the ability for a pop-up window showing details of clicked place/marker
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
    });

    //  for closing InfoWindow once user clicks the close button on the infoWindow
    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (            
            <div>
            
            <Map
                google={this.props.google}
                zoom={6}
                className="mapStyles"
                initialCenter={{ lat: 37.9161, lng: 139.0364 }}
            >
                <Marker
                position={{lat: 43.0618, lng: 141.3545}}
                label={"2"}
                onClick={this.onMarkerClick}
                name={'Hokkaido 北海道'}
                />
                <Marker
                position={{lat: 35.0116, lng: 135.7681}}
                label={"5"}
                onClick={this.onMarkerClick}
                name={'Kyoto 京都'}
                />
                <Marker
                position={{lat: 34.6937, lng: 135.5023}}
                label={"3"}
                onClick={this.onMarkerClick}
                name={'Osaka 大阪市'}
                />
                <Marker
                position={{lat: 35.6762, lng: 139.6503}}
                label={"4"}
                onClick={this.onMarkerClick}
                name={'Tokyo 東京'}
                />
                
                <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
                >
                <div>
                    <h4>{this.state.selectedPlace.name}</h4>
                </div>
                </InfoWindow>
            </Map>
            </div>
        );
    }
}
  
export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_APIKEY
})(MapContainer);