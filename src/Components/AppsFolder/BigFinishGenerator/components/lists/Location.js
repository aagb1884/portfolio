import { useState, useRef } from 'react';

const EventLocation = ({setLocation, setShowGif, setGif}) => {

    const eventLocation = [
     'a lift.',
        'Pigbin Josh.',
        'Norwich.',
        "a locked Tesla.",
        'the Club Bongo International (Middlesbrough) during the Nineties.',
        'F-Space.',
        'Albert Square.',
        "an Earth colony where it's illegal to post cringe.",
        "the sleepy English village of Bidmead.",
        'the car park in Tenby that always smells of piss.',
        "a space station with abandonment issues.",
        "the Second Doctor's hotel room.",
        "or on a planet named after its primary characteristic.",
        "an amateur production of 'Footloose'.",
        'a strange limbo world where nothing is as it seems.',
        'a space whale.',
        'a popular dogging spot.',
        "Harry Sullivan's infanticide maze.",
        "Charles Dickens' death bed.",
        'a softplay.',
        'Stoke-on-Trent.',
        'the Death Zone.',
        "Adric's pocket.",
        "the Master's Mind Palace.",
        'the Land of Non-Fiction.',
        'a karaoke bar.',
        'a small, poorly staffed garden centre.',
        'the year Nick Briggs last enjoyed Doctor Who (1976).',
        'the divergent universe.',
        'Uzbekistan.',
        "the studio where Alanis Morissette is recording 'You Oughta Know'."
    ];

    const previousLocation = useRef(null)

    function get_random_location() {
        let randomIndex;

        do { randomIndex = Math.floor(Math.random() * eventLocation.length);
        } while (randomIndex === previousLocation.current)

        previousLocation.current = randomIndex;
        const selectedLocation = eventLocation[randomIndex];
        setLocation(selectedLocation);
    }

    const audio = new Audio('/audio/BigFinish/thalia_4.mp3');

    function handleButtonClick() {
        setShowGif(true);
        audio.play();
        setGif("/images/bigFinish/rtd_titles.gif");
        setTimeout(() => {
            get_random_location();
            audio.pause();
            setShowGif(false);
            audio.currentTime = 0;
        }, 3000); 
    }

    return ( 
        <div className='bfbutton-container'>
            <button type="bfbutton" data-testid="location-button" className="bfbutton" onClick={handleButtonClick}>Get Location</button>
        </div>
    );
}
 
export default EventLocation;