import {useState} from 'react';
import { Link } from "react-router-dom";
import Minimise from '../Minimise';

const AllApps = () => {
    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

    return ( 
        <section className='daft-wee-apps-section'>
      <h2 onClick={toggleVisibility}>Daft Wee Apps</h2>
      {isVisible &&   
       
            <div className='project-description'>
<br />
                  <h3>Multiple Projects</h3>
       <p>Some silly apps that I created for fun and to consolidate what I'd learned from my coursework, including the Eurovision Bingo app mentioned above,
        a Wesley-Snipes themed fact checker, and a text-based adventure game taking you through the recent career of Scottish football manager Derek Adams.
       </p>
        <br />
        <Link to="/apps">See All Apps</Link>
        <Minimise toggleVisibility={toggleVisibility} />
                </div>
              
      }
            </section>
     

     );
    }
 
export default AllApps;