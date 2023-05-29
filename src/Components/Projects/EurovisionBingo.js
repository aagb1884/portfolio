import {useState} from 'react';

const EurovisionBingo = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    }
    const handleMouseOut = () => {
        setIsHovering(false);
    }

    return ( 
        <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        >
        <h4>Eurovision Bingo</h4>
        <br />
            {isHovering && (
                 <div className='eurovision-bingo'>
       <h5>Solo JavaScript Project: </h5>
       <p>A React app that produces a bingo card of six Eurovision cliches as buttons.</p>
       <p>Built in my spare time in the week before Eurovision 2023 primarily because I wanted to, 
       it improved my understanding of front end Javascript and CSS.</p>
       </div>
        )}
     </div>
    )
}
 
export default EurovisionBingo;