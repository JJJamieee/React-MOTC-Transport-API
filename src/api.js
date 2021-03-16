import axios from 'axios';

//create axios instance, set config
const instance = axios.create({
    baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism',
    timeout: 5000
});

//request for all spot
export function getAllSpot(request_data) {
    var skip = request_data.skip * 30;
    //set the parameters
    var url = '/ScenicSpot?$select=Name%2CDescription%2CAddress%2COpenTime&$top=' + request_data.top + '&$skip=' + skip + '&$format=JSON';
    const res = instance.get(url);

    return res;
}

//request for city spot
export function getCitySpot(request_data) {
    var skip = request_data.skip * 30;
    //set the parameters
    var url = '/ScenicSpot/' + request_data.city + '?$select=Name%2CDescription%2CAddress%2COpenTime&$top=' + request_data.top + '&$skip=' + skip + '&$format=JSON';
    const res = instance.get(url);

    return res;
}