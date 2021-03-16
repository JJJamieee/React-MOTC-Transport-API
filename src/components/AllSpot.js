import React from 'react';
import SpotList from './SpotList';

function AllSpot() {
    return (
        <React.Fragment>
            <h1>全部景點</h1>
            <SpotList spotType="All" />
        </React.Fragment>
    )
}

export default AllSpot;