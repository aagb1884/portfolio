import soundfile from "../audio/euphoria_excerpt.mp3";
import { useState } from "react";

const Winning = ({checkIfBingoButtonIsActive, isBingoButtonActive}) => {
   

    function play() {
                var audio = document.getElementById("audio");
                audio.play();
              }

 
  
// get grid buttons working then set button below to be disabled until all six buttons are pressed/active

    return ( 
        <section className='bingo'>
            <audio id="audio" src={soundfile}>BINGO</audio>
            <button type="button" 
                    data-testid="audio-button" 
                    id="bingo" 
                    className="bingo"
                    disabled={!isBingoButtonActive}
                    onClick={play} 
                    >BINGO</button>
                    
             </section>
    );
    }


export default Winning;

