import React, { useEffect } from 'react';
import '../css/ScenicSpotSite.css';


function TopButton() {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button className="top-button" onClick={scrollTop}>Top</button>
    );
}

export default TopButton;