import './App.css';
import AppsLandingPage from './Components/AppsFolder/AppsLandingPage';
import BigFinish from './Components/AppsFolder/BigFinishGenerator/BigFinish';
import Bingo from './Components/AppsFolder/EurovisionBingo/Bingo';
import WesleyApp from './Components/AppsFolder/WesleySnopes/WesleyApp';
import Blog from './Components/Blog/blog';
import BlogPost from './Components/Blog/blogPosts';
import Tabs from './Components/TabComponent/Tabs';
import { useNavigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useRef } from "react";
import Credits from './Components/Credits/credits';

function App() {
return (
  <Router>
    <AppWithRouter />
  </Router>
);
}

const AppWithRouter = () => {
const [activeTab, setActiveTab] = useState("tab1");
const [showForm, setShowForm] = useState(false);
const navigate = useNavigate();  

// useRefs
const contact = useRef(null);
const tabs = useRef(null);

const executeScroll = (ref) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
};

const goToContactForm = (ref) => {
  navigate('/');
  executeScroll(ref);
  setShowForm(true);
};

const goToTab = (ref, tab) => {
  navigate('/');
  setActiveTab(tab);
  executeScroll(ref);
};

return (
  <div className="App">
    <Routes>
      <Route path="/" element={
        <Tabs 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          showForm={showForm}
          setShowForm={setShowForm}
          goToContactForm={goToContactForm}
          goToTab={goToTab}  
          contact={contact}
          tabs={tabs}
        />
      } />
      <Route path="/apps" element={<AppsLandingPage />} />
      <Route path="/apps/eurovision-bingo" element={<Bingo />} />
      <Route path="/apps/wesley-snopes" element={<WesleyApp />} />
      <Route path="/apps/big-finish-generator" element={<BigFinish />} />
      <Route path="/blog" element={<Blog 
       goToContactForm={goToContactForm}
       goToTab={goToTab}  
       contact={contact}
       tabs={tabs}
       />} />
      <Route path="/blog/:slug" element={<BlogPost 
      goToContactForm={goToContactForm}
      goToTab={goToTab}  
      contact={contact}
      tabs={tabs}/>} />
      <Route path="/credits" element={<Credits 
      goToContactForm={goToContactForm}
      goToTab={goToTab}  
      contact={contact}
      tabs={tabs}
      />} />
    </Routes>
    <span id="siteseal">
      <script async type="text/javascript" src="https://seal.starfieldtech.com/getSeal?sealID=tjEsqeCJhruFdb5Tyg5vpMIaCouvvHYgimpECZiwbC2ADmEzTRQbCpe09IXd"></script>
    </span>
  </div>
);
}

export default App;