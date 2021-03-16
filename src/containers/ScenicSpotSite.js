import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../css/ScenicSpotSite.css';
import Navbar from '../components/Navbar';
import AllSpot from '../components/AllSpot';
import CitySpot from '../components/CitySpot';
import TopButton from '../components/TopButton';

function ScenicSpotSite() {
    return (
        <React.Fragment>
            <Navbar />

            <div className="container">
                {/* set routing */}
                <Switch>
                    <Route exact path="/scenicSpot" component={AllSpot} />
                    <Route path="/scenicSpot/:city?" component={CitySpot} />
                    <Redirect from="/" to="/scenicSpot" />
                </Switch>

                {/* scroll to top button */}
                <TopButton />
            </div>
        </React.Fragment>
    )
}

export default ScenicSpotSite;