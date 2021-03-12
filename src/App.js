import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ScenicSpotSite from './containers/ScenicSpotSite';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScenicSpotSite />
      </div>
    </BrowserRouter>
  );
}

export default App;
