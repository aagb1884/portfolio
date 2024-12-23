import TabNavItem from "../V2/TabNavItem";
import TabContent from "../V2/TabContent";
import FirstTab from "../AllTabs/FirstTab";
import SecondTab from "../AllTabs/SecondTab";
import ThirdTab from "../AllTabs/ThirdTab";
import Links from "../HeaderSection";
import ContactForm from "../ContactForm";
import HomeFooter from "../HomeFooter";

const Tabs = ({activeTab, setActiveTab, showForm, setShowForm,
            goToContactForm, goToTab, contact, tabs}) => {


  return (
<div className="Tabs">
        <div className="tab-content-heading">
        <Links 
        showForm={showForm}
        setShowForm={setShowForm} />
        <div className="form" ref={contact}>
            {showForm && <ContactForm setShowForm={setShowForm} />}
          </div>
        <ul className="nav" ref={tabs}>
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
      <HomeFooter
      goToContactForm={goToContactForm}
      goToTab={goToTab}
      contact={contact}
      tabs={tabs}
      />
    </div>
  );
};
 
export default Tabs;