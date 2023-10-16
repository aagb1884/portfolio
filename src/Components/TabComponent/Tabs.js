import React, { useState } from "react";
import TabNavItem from "../V2/TabNavItem";
import TabContent from "../V2/TabContent";
import FirstTab from "../AllTabs/FirstTab";
import SecondTab from "../AllTabs/SecondTab";
import ThirdTab from "../AllTabs/ThirdTab";
import Links from "../HeaderSection";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  

  return (
<div className="Tabs">
        <div className="tab-content-heading">
        <Links />
        <ul className="nav">
          <TabNavItem title="Software Development" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="Freelance Writing" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="Poetry/Spoken Word" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
        </ul>
        </div>
        <div className="tab-content-wrapper">
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
    </div>
  );
};
 
export default Tabs;