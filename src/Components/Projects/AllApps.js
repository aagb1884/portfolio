import {useState} from 'react';
import { Link } from "react-router-dom";

const AllApps = () => {
    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

    return ( 
        <section className='daft-wee-apps-section'>
      <h2 onClick={toggleVisibility}>Daft Wee Apps</h2>
      {isVisible &&   
       
            <div className='all-apps-description'>
<br />
                  <h3>Multiple Projects</h3>
       <p>Some silly apps that I created for fun and to consolidate what I'd learned from my coursework.</p>
        <br />
        <Link to="/apps">See All Apps</Link>
                </div>
              
      }
            </section>
     

     );
    }
 
export default AllApps;