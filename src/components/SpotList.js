import React, { useState, useEffect } from 'react'
import { getAllSpot, getCitySpot } from '../api';

function SpotList(props) {
    const [spot_list, setSpotList] = useState([]);
    const [loadingCnt, setLoadingCnt] = useState(0);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [loadAll, setLoadAll] = useState(false);

    const getSpotList = async () => {
        //if already load all of the spots, don't send the request
        if (loadAll) { return }

        setIsLoading(true);
        const request_data = {
            top: 30,
            skip: loadingCnt
        }

        try {
            var spot_info = {};
            if (props.spotType === "All") {
                //request for all spot
                spot_info = await getAllSpot(request_data);
            } else {
                //request for city spot
                request_data.city = props.cityName;
                spot_info = await getCitySpot(request_data);
            }

            if (spot_info.data.length !== 0) {
                //if there is return data, append it to spot_list
                setSpotList(() => [...spot_list, ...spot_info.data]);
                setIsLoading(false);
            } else {
                //if there ism't return data, means there is no more spot
                setMessage("已顯示所有景點");
                setIsLoading(false);
                setLoadAll(true);
            }

            setLoadingCnt(() => loadingCnt + 1);
        } catch (err) {
            console.log(err);
            setMessage("載入失敗:( 請重整頁面再試一次");
        }
    }

    const handleScroll = () => {
        //Detect whether User Scrolls To Bottom of Page
        var clientHeight = document.documentElement.clientHeight; //可視區域高度
        var scrollTop = document.documentElement.scrollTop;  //滾動條滾動高度
        var scrollHeight = document.documentElement.scrollHeight; //滾動內容高度

        if ((clientHeight + scrollTop >= scrollHeight - 5) & !isLoading) {
            getSpotList();
        }
    }

    useEffect(() => {
        //when the first time get into the page
        if (!spot_list.length)
            getSpotList();
    });

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return function cleanup() {
            window.removeEventListener('scroll', handleScroll);
        };
    })

    useEffect(() => {
        //when the page change from one city to another city
        setLoadingCnt(0);
        setLoadAll(false);
        setSpotList([]);
        setMessage("");
    },
        [props.cityName],
    );

    return (
        <React.Fragment>
            <table border="1" className="spotList">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className="longThTd">Description</th>
                        <th className="longThTd">Address</th>
                        <th>Open Time</th>
                    </tr>
                </thead>
                <tbody>
                    {spot_list.map((spot, index) => {
                        return (
                            <tr key={index}>
                                <td>{spot.Name}</td>
                                <td className="longThTd">{spot.Description}</td>
                                <td className="longThTd">{spot.Address}</td>
                                <td>{spot.OpenTime}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div>{isLoading ? "載入更多景點中..." : ""}</div>
            <div>{message}</div>
        </React.Fragment>
    );
}

export default SpotList;
