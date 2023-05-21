import React, { useState } from "react";
import TabNavItem from "../V2/TabNavItem";
import TabContent from "../V2/TabContent";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  return (
<div className="Tabs">
      <ul className="nav">
        <TabNavItem title="Software Development" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Freelance Writing" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Poetry/Spoken Word" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
 
      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
      <h2>About Me</h2>
      <h2>Projects</h2>
      <ul>
        <li>Barry Chips' Barry Chips</li>
        <li>ExoWeather</li>
        <li>Eurovision Bingo</li>
      </ul>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
        <h2>About Me</h2>
      <h2>Published Works</h2>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
        <h2>About Me</h2>
      <h2>Podcasting</h2>
      <h2>Published Works</h2>
        </TabContent>
      </div>
    </div>
  );
};
 
export default Tabs;