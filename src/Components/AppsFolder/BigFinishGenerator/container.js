import MainCharacter from "./components/lists/MainCharacter";
import SupportingCharacter from "./components/lists/SupportingCharacter";
import Villain from "./components/lists/Villain";
import EventLocation from "./components/lists/Location";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClearAll from "./components/ClearAll";
import React, { useState } from 'react';
import SocialMediaShare from "./components/SocialMediaShare";

const Container = () => {

    const [mainCharacter, setMainCharacter] = useState("");
    const [supportingCharacter, setSupportingCharacter] = useState("");
    const [villain, setVillain] = useState("");
    const [location, setLocation] = useState("");

    function clearAll() {
        setMainCharacter("");
        setSupportingCharacter("");
        setVillain("");
        setLocation("");
    }

    const pitch = `At last, ${mainCharacter} and ${supportingCharacter} meet ${villain} in ${location}!`

     return (
        <div className="container">
        <Header />
            <section className="randomiser" data-testid="randomiser">
                <div className="randomiser-buttons">
                    <div><MainCharacter mainCharacter={mainCharacter} setMainCharacter={setMainCharacter} /></div>
                    
                    <div><SupportingCharacter supportingCharacter={supportingCharacter} setSupportingCharacter={setSupportingCharacter} /></div>
                    
                    <div><Villain villain={villain} setVillain={setVillain} /></div>
                    
                    <div><EventLocation location={location} setLocation={setLocation} /></div>
                </div>
                <div className="generated-story">
                {mainCharacter && <p className='main-character'>At last, {mainCharacter}</p>}
                {supportingCharacter && <p className='supporting-character'>and {supportingCharacter}</p>}
                {villain && <p className='villain'>will meet {villain}</p>}
                {location && <p className='location'>in {location}</p>}
                </div>

                <div className="additional-button">
                    
                    <ClearAll clearAll={clearAll} />
                    
                    <SocialMediaShare pitch={pitch} />

                </div>
            </section>
        <Footer />
        </div>
     );
}
 
export default Container;