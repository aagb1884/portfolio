import React, { useState, useRef } from 'react';

const MainCharacter = ({mainCharacter, setMainCharacter}) => {

    const mainCharacters = [
        'The Tenth Doctor',
        "The Tenth Doctor but it's Jackie Tyler in disguise",
        'River Song',
        'Dalek Caan',
        'The Morbius Doctors',
        'Captain Archibald Hamish Lethbridge-Stewart',
        'an unassuming writer/director/producer (plus actor) in his sixties',
        'Pigbin Josh',
        "The Companions' Rebound Support Group", 
        'Young Soldeed',
        "the painting of the Third Doctor from 'Timelash'",  
        'Elton Pope',
        'Lucy Saxon',
        'the Kerblam HR team',
        "Someone Jacob Dudman can't quite do the voice for",
        "Arabella Weir Doctor",
        'Nardole',
        'Morton Dill',
        'Tallulah and Laszlo',
        'Doctor Pastry',
        'Bessie',
        'The Shadow Proclamation'
    ];

  
    const [showGif, setShowGif] = useState(false);
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

        setTimeout(() => {
            get_random_main_character();
            audio.pause();
            setShowGif(false);
            audio.currentTime = 0;
        }, 3000); 
    }

    return ( 
        <div>
            <button type="bfbutton" data-testid="main-character-button" className="bfbutton" onClick={handleButtonClick}>Get Main Character</button>
            {showGif && <img className="main-char-gif" src="/images/bigFinish/untempered_schism.gif" alt="GIF" />} 
        </div>
    );
}

export default MainCharacter;
