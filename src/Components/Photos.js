import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import "./button.css";

const Photos = (props) => {
    return (
        props.photosArray.map(item => (
            <Photo key={item.id} photo={item} />
        ))
    )
}

class Photo extends React.Component {

    render () {
        return (
            <div>
                
                <h1>{this.props.photo.id}</h1>
                <h2>{this.props.photo.location}</h2>
                <img alt={this.props.photo.name} src={require(`../assets/${this.props.photo.name}.png`)}></img>
                <h2>{this.props.photo.name}</h2>
                
                <Link className="button" to="/details">more info</Link>

                
            </div>
        )
    }
}

export default Photos;