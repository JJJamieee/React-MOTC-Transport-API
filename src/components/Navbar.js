import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/ScenicSpotSite.css';

function Navbar() {
    var city_array = []
    //load the json file with city name
    var city_json = require('../city_name.json');

    //parse json into array
    for (var city in city_json)
        city_array.push([city, city_json[city]]);

    return (
        <nav className="navbar">
            <button className="nav-item"><NavLink to="/scenicSpot">全部景點</NavLink></button>
            <div className="dropdown">
                <button className="dropbtn">縣市景點</button>
                <div className="dropdown-content">
                    {/* use array to generate dropdown list item */}
                    {city_array.map((city, index, arr) => {
                        if (index % 2 !== 1) {
                            return (
                                <p key={index}>
                                    <NavLink className="dropdown-link-right" to={"/scenicSpot/" + city[1]}>{city[0]}</NavLink>
                                    {index + 1 !== city_array.length ?
                                        <NavLink to={"/scenicSpot/" + arr[index + 1][1]}>{arr[index + 1][0]}</NavLink> :
                                        <React.Fragment></React.Fragment>
                                    }
                                </p>
                            )
                        }
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;