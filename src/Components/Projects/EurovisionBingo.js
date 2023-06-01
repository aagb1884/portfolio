import {useState} from 'react';

const EurovisionBingo = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
    return ( 
        <div className='eurovision-bingo'>
      <h4 onClick={toggleVisibility}>Eurovision Bingo</h4>
      {isVisible &&   
        <p>
        <h5>Solo JavaScript Project: </h5>
       <p>A React app that produces a bingo card of six Eurovision cliches as buttons.</p>
       <p>Built in my spare time in the week before Eurovision 2023 primarily because I wanted to, 
       it improved my understanding of front end Javascript and CSS.</p>
       {/* <br /> */}
       <iframe width="560" height="315" src="https://www.youtube.com/embed/ojCOF79gFyU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br />
        <h5>The Tech Stack</h5>
        <p>
        <ul>
            <li>JavaScript ES6</li>
            <li>React</li>
            <li>CSS</li>
        </ul>
        </p>
        <p><a href="https://github.com/aagb1884/eurovisionBingo">Github Repo</a></p>
        <p><a href="https://poised-step.surge.sh/">Play App Here</a></p>
        </p>
       
      }
     </div>
    )
}
 
export default EurovisionBingo;