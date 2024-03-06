import { Link } from "react-router-dom";
import './appPages.css'
import Footer from "./Footer";

const AppsLandingPage = () => {
    return ( 
        <div className="app-landing-page">
            <div className="page-content">
                <div className="bouncing-text">
                    <div className="d">D</div>
                    <div className="a">A</div>
                    <div className="f">F</div>
                    <div className="t">T</div>
                    <div className="space"></div>
                    <div className="wee-apps">WEE APPS</div>
                </div>

                <section className="app-buttons-component">

                <div className="eurovision-bingo">   
                <Link to="/apps/eurovision-bingo">
                
                    <img    src="/images/eurovision_bingo_button.gif" 
                            alt="eurovision-bingo-button" 
                            border="0"
                            className="button-image"/>
                    <div className="button-text">Eurovision Bingo</div>
                </Link>
                </div>

                <div className="wesley-snopes">   
                <Link to="/apps/wesley-snopes">
                
                    <img    src="/images/wesleySnopes/button_wesley.png" 
                            alt="wesley-snopes-button" 
                            border="0"
                            className="button-image"/>
                    <div className="button-text">Wesley Snopes</div>
                </Link>
                </div>

                <div className="big-finish-generator">   
                <Link to="/apps/big-finish-generator">
                
                    <img    src="/images/bigFinish/untempered_schism.gif" 
                            alt="big-finish-generator-button" 
                            border="0"
                            className="button-image"/>
                    <div className="button-text">Big Finish Generator</div>
                </Link>

                
                </div>
                </section>
                <section className="apps-landing-copy">
                <aside className="design-credit">Bouncing Text animation by <a href="https://lenadesign.org/2021/05/18/css-bouncing-text-animation/">Lena Design</a></aside>
                <p>Three React apps; some requiring esoteric knowledge of <i>Doctor Who</i>, others less so.</p>
                <p>You can find more information on each on my <a href="https://github.com/aagb1884">GitHub page</a> (there are individual repos for each project, and a repo for this website which includes modified versions).</p>
                <br />
                <aside>NB. Wesley Snopes is probably not suitable for work.</aside>
                </section>
            </div>
            <div className="landing-footer">
            <Footer />  
            </div>  
        </div>
     );
}
 
export default AppsLandingPage;