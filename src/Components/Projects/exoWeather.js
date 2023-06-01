import {useState} from 'react';

const ExoWeather = () => {
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
            <h4>exoWeather</h4>
            <br />
            {isHovering && (
            <div className='exoWeather'>
        <h5>JavaScript Group Project, 1 week:</h5>
       <p>This React app fetches APIs, Router DOM, styled components and database to provide weather foreast information for multiple locations.</p> 
       <p>You can display two locations and their weather data simultaneously, including other planets, moons and fictional spaceships.</p>
       <p>The aim of the project was to be part of an Agile team and solidify our understanding of full stack JavaScript apps.</p>
       <br />
        <h5>The Tech Stack</h5>
        <p>
        <ul>
            <li>JavaScript ES6</li>
            <li>React</li>
            <li>Mongo db</li>
            <li>Express Server</li>
            <li>3rd party APIs</li>
            <li>CSS</li>
        </ul>
        <p><a href="https://github.com/aagb1884/exoWeather">Github Repo</a></p>
        </p>
       </div>
     )}
     </div>
    )
}
 
export default ExoWeather;