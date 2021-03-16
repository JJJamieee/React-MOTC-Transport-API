# React.js with MOTC Transport API v2

## 專案描述
使用 React.js 串接交通部觀光景點 API ( MOTC Transport API V2 )，實作一個瀏覽景點的網站。包含全部景點頁面及各縣市景點頁面(透過NavBar切換)，每個頁面一開始只會載入30個景點，等使用者每次滾動頁面到底部時才會再載入額外30個景點。

## 如何啟動
將專案下載後，terminal檔案路徑cd至專案資料夾，執行`yarn`，再執行`yarn start`，在瀏覽器中輸入 http://localhost:3000 即可瀏覽網頁。(請確保主機已有安裝**yarn**)

## 使用工具
- 使用**React.js**作為前端框架
- 使用**react-router-dom**處理routing
- 使用**axios**串接API
- 使用外部API：交通部觀光景點 API ( MOTC Transport API V2 )

## 程式架構
### Code Tree(under src/)：
- index.js  (Mount "root" DOM node)
- App.js    (Define Routing root "/")
- api.js    (Contain api)
- containers/
  - ScenicSpotSite.js  (Main page structure and define routing rules)
- components/
  - AllSpot.js   (Display scenic spots of all cities)
  - CitySpot.js  (Displat scenic spots of one of the cities)
  - Navbar.js    (Generate NavBar)
  - TopButton.js (Generate scroll-to-top button)
  - SpotList.js  (Get spots' information from API and display in table)

### 說明
1. **ScenicSpotSite.js**裡定義的routing rules:
  ```
  <Switch>
     <Route exact path="/scenicSpot" component={AllSpot} />
     <Route path="/scenicSpot/:city?" component={CitySpot} />
     <Redirect from="/" to="/scenicSpot" />
  </Switch>
  ```
  - 路徑`/scenicSpot`會導向顯示所有景點的頁面(component: **AllSpot**)
  - 路徑`/scenicSpot/{City}`會導向顯示該縣市景點的頁面(component: **CitySpot**)
  - 用顯示全部景點的頁面作為首頁，所以將跟路徑`/`導向`/scenicSpot`

2. **AllSpot.js**和**CitySpot.js**會顯示一個簡單的標題，並呼叫component: **SpotList**，**AllSpot**在呼叫時會傳入property: `spotType="All"`，**CitySpot**在呼叫時會傳入property: `spotType="City"`和`cityName={props.match.params.city}`，其中`props.match.params.city`為routing時傳入**CitySpot**的property。

3. **SpotList.js**會根據`props.spotType`是All還是City決定要呼叫哪個API，並將API回傳的結果存進state: `spot_list`，再將`spot_list`中的內容用表格顯示。

4. **api.js**中建立了一個axios instance，並包含兩個function: `getAllSpot(request_data)`和`getCitySpot(request_data)`，透過axios instance對**MOTC Transport API V2**發送請求。

## Demo
- 全部景點
![image](https://github.com/JJJamieee/React-MOTC-Transport-API/blob/main/demo1.gif)

- 縣市景點
![image](https://github.com/JJJamieee/React-MOTC-Transport-API/blob/main/demo2.gif)

## 使用及參考資源：
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- React-router-dom: https://reactrouter.com/web/guides/quick-start
- axois: https://github.com/axios/axios
- MOTC Transport API V2: https://ptx.transportdata.tw/MOTC?t=Tourism&v=2
- Dropdown Navbar: https://www.w3schools.com/howto/howto_css_dropdown_navbar.asp
