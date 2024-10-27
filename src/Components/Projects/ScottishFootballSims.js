import {useState} from 'react';

const ScottishFootballSims = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

    return (  <section className='project'>
      <h2 onClick={toggleVisibility}>Scottish Football Simulators</h2>
      {isVisible &&     

      <div className='projectt-description'>
       <p>This website hosts my Scottish football-themed games.</p> 
       <p>Currrently there are two text adventures -  The Derek Adams Management Simulator, the Rangers Manager Simulator - and a version of the 2048 puzzle game based around Hibs managers.</p>
       <p>These have been built from tutorials in my spare time with a view to learning how to make browser-based games.</p>
       <br />
        <h4>The Tech Stack</h4>
        
        <ul>
            <li>JavaScript ES6</li>
            <li>React JS</li>
            <li>React TS</li>
            <li>CSS</li>
        </ul>
        <br />
        <a href="https://github.com/aagb1884/scottish_football_sim">Github Repo</a>
        <br />
        <img src="/images/Screenshot 2024-10-27 at 17.49.53.png" alt="Scottish Foootball Simulators Homepage" width="600" height="400"></img>
        <br />
        <a href="https://scottish-football-simulators.co.uk/">Link (External Site)</a>
        </div>
}
       </section>
     )}
 
export default ScottishFootballSims;