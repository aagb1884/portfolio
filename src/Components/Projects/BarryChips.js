import {useState} from 'react';

const BarryChips = () => {
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
            <div className='Barry-Chips'>
            <h4>Barry Chips' Barry Chips</h4>
            <br />
            {isHovering && (
            <div className='Barry-Chips-Description'>
                  <h5>Solo Python Project, 1 week: </h5>
       <p>The app simulates a chip shop website: “Barry Chips’ Barry Chips”. This was achieved using Python, SQL, CSS, HTML, Flask and psycogb2 
       as part of a solo project on the Software Development course at CodeClan, Edinburgh.</p>
        <p> The aim of the project was to cement my understanding of Restful Routes and CRUD actions.</p>
        <br />
        <h5>The Tech Stack</h5>
        <p>
        <ul>
            <li>Python</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Flask</li>
            <li>PostgreSQL</li>
        </ul>
        </p>
        <br />
        <img src="images/barry_chips_homepage.png" width="600" height="400"></img>
                </div>
                
            )}
            </div>
        </div>

     );
}
 
export default BarryChips;