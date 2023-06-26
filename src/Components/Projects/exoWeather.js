import {useState} from 'react';

const ExoWeather = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

    return ( 
        <section className='exoWeather'>
      <h2 onClick={toggleVisibility}>exoWeather</h2>
      {isVisible &&     

      <div className='exoWeather-description'>
        <br />
        <h3>JavaScript Group Project, 1 week:</h3>
       <p>This React app fetches APIs, Router DOM, styled components and database to provide weather foreast information for multiple locations.</p> 
       <p>You can display two locations and their weather data simultaneously, including other planets, moons and fictional spaceships.</p>
       <p>The aim of the project was to be part of an Agile team and solidify our understanding of full stack JavaScript apps.</p>
       <br />
        <h4>The Tech Stack</h4>
        
        <ul>
            <li>JavaScript ES6</li>
            <li>React</li>
            <li>Mongo db</li>
            <li>Express Server</li>
            <li>3rd party APIs</li>
            <li>CSS</li>
        </ul>
        <br />
        <a href="https://github.com/aagb1884/exoWeather">Github Repo</a>
        <br />
        <br />
        <img src="images/exoWeather_searchScreen.png" width="600" height="400"></img>
        
        </div>
}
       </section>
     )}
    
export default ExoWeather;