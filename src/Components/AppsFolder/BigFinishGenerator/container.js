import MainCharacter from "./components/lists/MainCharacter";
import SupportingCharacter from "./components/lists/SupportingCharacter";
import Villain from "./components/lists/Villain";
import EventLocation from "./components/lists/Location";
import Header from "./components/Header";
import BFFooter from "./components/BFFooter";
import ClearAll from "./components/ClearAll";
import React, { useState } from 'react';
import SocialMediaShare from "./components/SocialMediaShare";
import ShareButton from "./components/ShareButton";


const Container = () => {

    const [mainCharacter, setMainCharacter] = useState("");
    const [supportingCharacter, setSupportingCharacter] = useState("");
    const [villain, setVillain] = useState("");
    const [location, setLocation] = useState("");
    const [showGif, setShowGif] = useState(false);
    const [gif, setGif] = useState("");
    const [showModal, setShowModal] = useState(false);

    function clearAll() {
        setMainCharacter("");
        setSupportingCharacter("");
        setVillain("");
        setLocation("");
        setShowModal(false);
    }

    const pitch = `At last, ${mainCharacter} and ${supportingCharacter} meet ${villain} in ${location}!`

     return (
    
        <div className="container">
        
        <Header />
            <section className="randomiser" data-testid="randomiser">
                <div className="randomiser-buttons">
                    <div className="gif-window"> 
                    {showGif && <img className="gif-image" src={gif} alt="GIF" />} 
                    </div>
                    <div className="first-row">
                    <div><MainCharacter 
                    setMainCharacter={setMainCharacter}
                    setShowGif={setShowGif}
                    setGif={setGif} /></div>
                    
                    <div><SupportingCharacter 
                    setSupportingCharacter={setSupportingCharacter}
                    setShowGif={setShowGif}
                    setGif={setGif}  /></div>
                    </div>

                    <div className="second-row">
                    <div><Villain 
                    setVillain={setVillain}
                    setShowGif={setShowGif}
                    setGif={setGif}  /></div>
                    
                    <div><EventLocation 
                    setLocation={setLocation} 
                    setShowGif={setShowGif}
                    setGif={setGif} /></div>
                    </div>

                    
                </div>
                <div className="generated-story">
                {!mainCharacter && !supportingCharacter && !villain && !location && (
                 <p>Press all four buttons to get your next pitch.</p>
                )}
                {mainCharacter && <p className='main-character'>At last, {mainCharacter}</p>}
                {supportingCharacter && <p className='supporting-character'>and {supportingCharacter}</p>}
                {villain && <p className='villain'>will meet {villain}</p>}
                {location && <p className='location'>in {location}</p>}
                </div>
                
                <div className="clear-and-share">
                    
                {(mainCharacter || supportingCharacter || villain || location) && (
                <div className="additional-button">
               
                    <ClearAll clearAll={clearAll} />
                    </div>
                 )} 

                {mainCharacter && supportingCharacter && villain && location && (
                 <div className="additional-button">
                    <ShareButton 
                    showModal={showModal}
                    setShowModal={setShowModal}/>
               </div>
                 )} 
                </div>
                {showModal && (
                        <div className="bf-share-modal">
                        <SocialMediaShare 
                        pitch={pitch}
                        setShowModal={setShowModal}/>
                        </div>
                    )}
            </section>
            
        <BFFooter />
        </div>
        
     );
}
 
export default Container;