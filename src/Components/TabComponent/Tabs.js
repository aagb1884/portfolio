import React, { useState } from "react";
import TabNavItem from "../V2/TabNavItem";
import TabContent from "../V2/TabContent";
import FirstTab from "../AllTabs/FirstTab";
import SecondTab from "../AllTabs/SecondTab";
import ThirdTab from "../AllTabs/ThirdTab";
import Footer from "../HeaderSection";

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
      <Footer />
      <ul className="nav">
        <TabNavItem title="Software Development" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Freelance Writing" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Poetry/Spoken Word" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
 
      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
        <FirstTab />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
        <SecondTab />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
       <ThirdTab />
        </TabContent>
      </div>
    </div>
  );
};
 
export default Tabs;