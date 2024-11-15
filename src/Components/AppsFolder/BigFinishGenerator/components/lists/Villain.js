import { useState, useRef } from 'react';

const Villain = ({setVillain, setShowGif, setGif}) => {

    const villains = [
        'Pigbin Josh',
        'Eighties Cyberleader',
        'Sixteenth Century French Catholics',
        'Madame Kovarian',
        'Jack Robertson',
        'the Timewyrm',
        'General Cobb',
        'evil gas or something',
        'the Birmingham Six',
        'the War Engin',
        "Turlough's solicitor",
        'Mark Lawrenson',
        'Dark Sam',
        'all the Kraals',
        "Bertie Carvel's Mysterious Man",
        'the Shansheeth',
        'a Hypnotron',
        'Woke Davros',
        "Ian Levine's AI Hartnell",
        'that big yellow Dalek',
        'Andrew Marr',
        'Two-Armed Condo',
        "Gareth Roberts' Twitter Feed",
        "a terrifying renegade Time Lord called 'Timmy the Shit'",
        'a team-up of all the Pertwee era Civil Servants',
        'a boom mic',
        'Henry Kissinger',
        'Yvonne Hartman'
    ];

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
        setGif("/images/bigFinish/mccoy_titles.gif");
        setTimeout(() => {
            get_random_villain();
            audio.pause();
            setShowGif(false);
            audio.currentTime = 0;
        }, 5590); 
    }

    return ( 
        <div className='bfbutton-container'>
            <button type="button" data-testid="villain-button" className="bfbutton" onClick={handleButtonClick}>Get Villain</button>
        </div>
    );
}
 
export default Villain;
