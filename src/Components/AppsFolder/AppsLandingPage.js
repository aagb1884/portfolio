import { NavLink } from "react-router-dom";
import './appPages.css'
import Footer from "./Footer";

const AppsLandingPage = () => {
    return ( 
        <div className="app-landing-page">
            <div class="bouncing-text">
                <div class="d">D</div>
                <div class="a">A</div>
                <div class="f">F</div>
                <div class="t">T</div>
                <div class="space"></div>
                <div class="w">W</div>
                <div class="e">E</div>
                <div class="e">E</div>
                <div class="space"></div>
                <div class="a2">A</div>
                <div class="p">P</div>
                <div class="p">P</div>
                <div class="s">S</div>
                <div class="shadow"></div>
                <div class="shadow-two"></div>
            </div>

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

            <aside className="design-credit">Bouncing Text animation by <a href="https://lenadesign.org/2021/05/18/css-bouncing-text-animation/">Lena Design</a></aside>
            <p>Three React apps; some requiring esoteric knowledge of <i>Doctor Who</i>, others less so.</p>
            <p>You can find more information on each on my <a href="https://github.com/aagb1884">GitHub page</a> (there are individual repos for each project, and a repo for this website which includes updated version).</p>
            <br />
            <aside>NB.Wesley Snopes is probably not suitable for work.</aside>
        <Footer />    
        </div>
     );
}
 
export default AppsLandingPage;