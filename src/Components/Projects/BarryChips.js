import {useState} from 'react';

const BarryChips = () => {
    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };



    return ( 
        <section className='Barry-Chips'>
      <h2 onClick={toggleVisibility}>Barry Chips' Barry Chips</h2>
      {isVisible &&   
       
            <div className='Barry-Chips-Description'>
<br />
                  <h3>Solo Python Project, 1 week: </h3>
       <p>The app simulates a chip shop website: “Barry Chips’ Barry Chips”. This was achieved using Python, SQL, CSS, HTML, Flask and psycogb2 
       as part of a solo project on the Software Development course at CodeClan, Edinburgh.</p>
        <p> The aim of the project was to cement my understanding of Restful Routes and CRUD actions.</p>
        <br />
        <h4>The Tech Stack</h4>
       
        <ul>
            <li>Python</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Flask</li>
            <li>PostgreSQL</li>
        </ul>
        <br />
       <a href="https://github.com/aagb1884/solo_project_andrew_blair">Github Repo <img id='external-link' title='external link' src='/images/external-link.png' /></a>
        <br />
        <br />
        <img src="images/barry_chips_homepage.png" alt="barry chips homepage"  width="600" height="400"></img>
                </div>
              
      }
            </section>
     

     );
}
 
export default BarryChips;