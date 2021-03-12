import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../css/ScenicSpotSite.css';
import Navbar from '../components/Navbar';
import AllSpot from '../components/AllSpot';
import CitySpot from '../components/CitySpot';

class ScenicSpotSite extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />

                <div className="container">
                    <Switch>
                        <Route exact path="/scenicSpot" component={AllSpot} />
                        <Route path="/scenicSpot/:city?" component={CitySpot} />
                        <Redirect from="/" to="/scenicSpot" />
                    </Switch>
                </div>
            </React.Fragment>
        )
    }
}

export default ScenicSpotSite;