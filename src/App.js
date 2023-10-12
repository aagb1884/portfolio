import './App.css';
import AppsLandingPage from './Components/AppsFolder/AppsLandingPage';
import BigFinish from './Components/AppsFolder/BigFinishGenerator/BigFinish';
import Bingo from './Components/AppsFolder/EurovisionBingo/Bingo';
import Snopes from './Components/AppsFolder/WesleySnopes/Snopes';
import Tabs from './Components/TabComponent/Tabs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Tabs /> } />
          <Route path="/apps" element={< AppsLandingPage />} />
          <Route path="/apps/eurovision-bingo" element={< Bingo />} />
          <Route path="/apps/wesley-snopes" element={< Snopes />} />
          <Route path="/apps/big-finish-generator" element={< BigFinish />} />
        </Routes>
      </Router>  
      <span id="siteseal"><script async type="text/javascript" src="https://seal.starfieldtech.com/getSeal?sealID=tjEsqeCJhruFdb5Tyg5vpMIaCouvvHYgimpECZiwbC2ADmEzTRQbCpe09IXd"></script></span>
    </div>
  );
}

export default App;
