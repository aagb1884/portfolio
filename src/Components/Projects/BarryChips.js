import {useState} from 'react';

const BarryChips = () => {
    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };



    return ( 
        <div className='Barry-Chips'>
      <h2 onClick={toggleVisibility}>Barry Chips' Barry Chips</h2>
      {isVisible &&   
        <p>
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
        <p><a href="https://github.com/aagb1884/solo_project_andrew_blair">Github Repo</a></p>
        <br />
        <img src="images/barry_chips_homepage.png" width="600" height="400"></img>
                </div>
                </p>
      }
            </div>
     

     );
}
 
export default BarryChips;