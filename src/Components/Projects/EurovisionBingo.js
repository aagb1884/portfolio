import {useState} from 'react';
import { NavLink } from "react-router-dom";

const EurovisionBingo = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
    return ( 
        <section className='eurovision-bingo'>
      <h2 onClick={toggleVisibility}>Eurovision Bingo</h2>
      {isVisible &&   
        <div className='eurovision-bingo-description'>
          <br />
        <h3>Solo JavaScript Project: </h3>
       <p>A React app that produces a bingo card of six Eurovision cliches as buttons.</p>
       <p>Built in my spare time in the week before Eurovision 2023 primarily because I wanted to, 
       it improved my understanding of front end Javascript and CSS.</p>
       <br />
       <iframe width="560" height="315" src="https://www.youtube.com/embed/ojCOF79gFyU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br />
        <br />

        <h4>The Tech Stack</h4>
        
        <ul>
            <li>JavaScript ES6</li>
            <li>React</li>
            <li>CSS</li>
        </ul>
        <br />
        <a href="https://github.com/aagb1884/eurovisionBingo">Github Repo</a>
        <br />
        <NavLink to="/apps/eurovision-bingo">Play App here</NavLink>
        </div>
       
      }
     </section>
    )
}
 
export default EurovisionBingo;