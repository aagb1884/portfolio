import { useState, useRef } from 'react';

const Villain = ({villain, setVillain}) => {

    const villains = [
        'Pigbin Josh',
        'Eighties Cyberleader',
        'Sixteenth Century French Catholics',
        'Madame Kovarian',
        'Jack Robertson',
        'the Timewyrm',
        'that big Yellow Dalek',
        'General Cobb',
        'evil gas or something, whatever it was',
        'the Birmingham six',
        'the War Engin',
        "Turlough's solicitor",
        'Mark Lawrenson',
        'Dark Sam',
        'all the Kraals',
        'Mysterious Man',
        'the Shansheeth',
        'a Hypnotron',
        'woke Davros'
    ];

    const [showGif, setShowGif] = useState(false);
    const previousVillain = useRef(null);

    function get_random_villain() {
        let randomIndex;
        
        do {
            randomIndex = Math.floor(Math.random() * villains.length)
        } while (randomIndex === previousVillain.current)

        previousVillain.current = randomIndex;
        const selectedVillain = villains[randomIndex];
        setVillain(selectedVillain);
    }

    const audio = new Audio('/audio/BigFinish/thalia_3.mp3');
    

    function handleButtonClick() {
        setShowGif(true);
        audio.play();

        setTimeout(() => {
            get_random_villain();
            audio.pause();
            setShowGif(false);
            audio.currentTime = 0;
        }, 5590); 
    }

    return ( 
        <div>
            <button type="button" data-testid="villain-button" className="button" onClick={handleButtonClick}>Get Villain</button>
            {showGif && <img className="villain-gif" src="/images/bigFinish/mccoy_titles.gif" alt="GIF" />} 
        </div>
    );
}
 
export default Villain;
