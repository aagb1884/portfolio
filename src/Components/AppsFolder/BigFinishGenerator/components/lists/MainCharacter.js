import React, { useState, useRef } from 'react';

const MainCharacter = ({setMainCharacter, setShowGif, setGif}) => {

    const mainCharacters = [
        'the Tenth Doctor',
        'the Tenth Doctor but its the Fourteenth Doctor pretending to be the Tenth Doctor',
        "the Tenth Doctor but it's Jackie Tyler pretending to be the Tenth Doctor",
        'River Song',
        'Dalek Caan',
        'The Morbius Doctors',
        'Captain Archibald Hamish Lethbridge-Stewart',
        'an unassuming writer/director/producer (plus actor) in his sixties',
        'Pigbin Josh',
        "the Companions' Rebound Support Group", 
        'Young Soldeed',
        "the painting of the Third Doctor from 'Timelash'",  
        'Elton Pope',
        'Lucy Saxon',
        'the Kerblam HR team',
        "someone Jacob Dudman can't quite do the voice for",
        "the Arabella Weir Doctor",
        'Nardole',
        'Morton Dill',
        'Tallulah and Laszlo',
        "an Unbound Doctor where he's played as Mr Pastry",
        'Bessie',
        'the Shadow Proclamation',
        'Doom',
        "that big Irish cat from 'Gridlock'",
        'Tecteun',
        'a sentient caravan that turns out to be Dodo',
        'K9 trapped in the body of a small girl',
        'Alpha Centauri',
        'the Solitract',
        'Jackson Lake'
    ];

    const previousCharacter = useRef(null);

    function get_random_main_character() {
        let randomIndex;
        
        do {
            randomIndex = Math.floor(Math.random() * mainCharacters.length);
        } while (randomIndex === previousCharacter.current)

        previousCharacter.current = randomIndex;
        const selectedCharacter = mainCharacters[randomIndex];
        setMainCharacter(selectedCharacter);
    }

    const audio = new Audio('/audio/BigFinish/thalia_1.mp3');

    function handleButtonClick() {
        setShowGif(true);
        audio.play()
        setGif("/images/bigFinish/untempered_schism.gif")
        setTimeout(() => {
            get_random_main_character();
            audio.pause();
            setShowGif(false);
            audio.currentTime = 0;
        }, 3000); 
    }

    return ( 
        <div className='bfbutton-container'>
            <button type="bfbutton" data-testid="main-character-button" className="bfbutton" onClick={handleButtonClick}>Get Main Character</button>
        </div>
    );
}

export default MainCharacter;
