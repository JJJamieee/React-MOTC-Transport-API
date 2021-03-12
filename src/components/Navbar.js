import { NavLink } from 'react-router-dom';
import '../css/ScenicSpotSite.css';

function Navbar() {
    const city_array = [["臺北市", "Taipei"], ["新北市", "NewTaipei"], ["桃園市", "Taoyuan"], ["臺中市", "Taichung"],
    ["臺南市", "Tainan"], ["高雄市", "Kaohsiung"], ["基隆市", "Keelung"], ["新竹市", "Hsinchu"],
    ["新竹縣", "HsinchuCounty"], ["苗栗縣", "MiaoliCounty"], ["彰化縣", "ChanghuaCounty"], ["南投縣", "NantouCounty"],
    ["雲林縣", "YunlinCounty"], ["嘉義縣", "ChiayiCounty"], ["嘉義市", "Chiayi"], ["屏東縣", "PingtungCounty"],
    ["宜蘭縣", "YilanCounty"], ["花蓮縣", "HualienCounty"], ["臺東縣", "TaitungCounty"], ["金門縣", "KinmenCounty"],
    ["澎湖縣", "PenghuCounty"], ["連江縣", "LienchiangCounty"]];

    return (
        <nav className="navbar">
            <button className="nav-item"><NavLink to="/scenicSpot">全部景點</NavLink></button>
            <div className="dropdown">
                <button className="dropbtn">縣市景點</button>
                <div className="dropdown-content">
                    {city_array.map((city, index, arr) => {
                        if (index % 2 !== 1) {
                            return (
                                <p key={index}>
                                    <NavLink className="dropdown-link-right" to={"/scenicSpot/" + city[1]}>{city[0]}</NavLink>
                                    <NavLink to={"/scenicSpot/" + arr[index + 1][1]}>{arr[index + 1][0]}</NavLink>
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