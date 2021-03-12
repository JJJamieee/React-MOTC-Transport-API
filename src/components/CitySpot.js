import React, { Component } from 'react';

class CitySpot extends Component {
    render() {
        return (
            <h1>{this.props.match.params.city}景點</h1>
        )
    }
}

export default CitySpot;