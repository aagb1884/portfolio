import { Link } from "react-router-dom";
import './appPages.css'
import Footer from "./Footer";
import EuroBingoAppLinks from "./eBingoAppLinks";

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

                <div className="derek-adams">   
                <Link to="https://derek-adams-simulator.vercel.app/">
                
                    <img    src="/images/deekPrime.jpg" 
                            alt="derek-adams-simulator-button" 
                            border="0"
                            className="button-image"/>
                    <div className="button-text">Derek Adams Management Simulator</div>
                </Link>
                </div>
                </section>
                <section className="apps-landing-copy">
                <aside className="design-credit">Bouncing Text animation by <a href="https://lenadesign.org/2021/05/18/css-bouncing-text-animation/">Lena Design</a></aside>
                <p>Four React apps; some requiring esoteric knowledge of <i>Doctor Who</i>, others less so.</p>
                <p>You can find more information on each on my <a href="https://github.com/aagb1884">GitHub page</a>.</p>
                <br />
                <aside>NB. <i>Wesley Snopes</i> and <i>Derek Adams Management Simulator</i> are probably not suitable for work.</aside>
                <aside><i>Derek Adams Management Simulator</i> links to an external site.</aside>
               <EuroBingoAppLinks />
               
                </section>
            </div>
            <div className="home-link">
            <Link to="/">Home</Link>
            </div>
            <div className="ko-fi">
                
                 <a href='https://ko-fi.com/W7W1URM7B' target='_blank' rel="noopener noreferrer"><img height='36' src='https://storage.ko-fi.com/cdn/kofi4.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
            </div>
            <div className="landing-footer">
             
            </div>  
        </div>
     );
}
 
export default AppsLandingPage;