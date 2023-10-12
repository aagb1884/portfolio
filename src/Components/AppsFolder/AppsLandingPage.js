import { NavLink } from "react-router-dom";
import './appPages.css'
import Footer from "./Footer";

const AppsLandingPage = () => {
    return ( 
        <div className="app-landing-page">
            <h1>DAFT WEE APPS</h1>

            <section className="app-buttons-component">

            <div className="eurovision-bingo">   
            <NavLink to="/apps/eurovision-bingo">
            
                <img    src="/images/eurovision_bingo_button.gif" 
                        alt="eurovision-bingo-button" 
                        border="0"
                        className="button-image"/>
                <div className="button-text">Eurovision Bingo</div>
            </NavLink>
            </div>

            <div className="wesley-snopes">   
            <NavLink to="/apps/wesley-snopes">
            
                <img    src="/images/wesleySnopes/button_wesley.png" 
                        alt="wesley-snopes-button" 
                        border="0"
                        className="button-image"/>
                <div className="button-text">Wesley Snopes</div>
            </NavLink>
            </div>

            <div className="big-finish-generator">   
            <NavLink to="/apps/big-finish-generator">
            
                <img    src="/images/bigFinish/untempered_schism.gif" 
                        alt="big-finish-generator-button" 
                        border="0"
                        className="button-image"/>
                <div className="button-text">Big Finish Generator</div>
            </NavLink>
            </div>

            </section>
        <Footer />    
        </div>
     );
}
 
export default AppsLandingPage;