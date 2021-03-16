import React from 'react';
import SpotList from './SpotList';

function CitySpot(props) {
    var city_json = require('../city_name.json');
    var new_city_json = {};

    //swap the key and value of city name
    for (var city in city_json)
        new_city_json[city_json[city]] = city

    return (
        <React.Fragment>
            <h1>{new_city_json[props.match.params.city]}景點</h1>
            <SpotList spotType="City" cityName={props.match.params.city} />
        </React.Fragment>
    )
}

export default CitySpot;