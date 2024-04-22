import { useState, useRef } from 'react';

const SupportingCharacter = ({supportingCharacter, setSupportingCharacter}) => {

    const supportingCharacters = [
        'Pigbin Josh',
        "Choking on an Olive woman from 'The Lazarus Experiment'",
        "that pirate who disappears for ages",
        'Angie and Artie Maitland',
        "Richard Nixon",
        "'Eat My Salad' guy",
        "Commander Maxil's hat",
        "Baby Sergeant Benton",
        'Pete the Morgue Attendant',
        "Daniel Barton's mum",
        "Noor Inayat Khan",
        'any of the Class cast who are available',
        'Gilbert M',
        'Courtney Pine',
        'the Ogron-Eater',
        "commodore 'tonker' travers",
        'CyberBrig',
        'the Afghan kid Danny Pink killed',
        'the cow the Doctor asked about time scanners',
        "Maria's Dad",
        "Nerys"
    ];

    
    const [showGif, setShowGif] = useState(false);
    const previousCharacter = useRef(null);

    function get_random_supporting_character() {
        let randomIndex;
        
        do {
            randomIndex = Math.floor(Math.random() * supportingCharacters.length)
        } while (randomIndex === previousCharacter.current)

        previousCharacter.current = randomIndex;
        const selectedCharacter = supportingCharacters[randomIndex];
        setSupportingCharacter(selectedCharacter);
    }

    const audio = new Audio('/audio/BigFinish/thalia_2.mp3');

    function handleButtonClick() {
        setShowGif(true);
        audio.play();

        setTimeout(() => {
            get_random_supporting_character();
            audio.pause();
            setShowGif(false);
            audio.currentTime = 0;
        }, 3000); 
    }

    return ( 
        <div>
            <button type="button" data-testid="supporting-character-button" className="bfbutton" onClick={handleButtonClick}>Get Supporting Character</button>
            {showGif && <img className="support-char-gif" src="/images/bigFinish/capaldi_clocks.gif" alt="GIF" />} 
        </div>
    );
}
 
export default SupportingCharacter;
