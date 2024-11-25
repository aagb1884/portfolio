import {useState} from 'react';
import { Link } from "react-router-dom";
import Minimise from '../Minimise';

const PoetRemixer = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
    return ( 
        <section className='project'>
      <h2 onClick={toggleVisibility}>PoetRemixer Tool</h2>
      {isVisible &&   
        <div className='project-description'>
          <br />
       <p>A text manipulation app, designed to make remixing poems easier.</p>
       <p>Initially built to simply break texts down into individual words or letters, I added more functions to it so the user can manipulate the text in different ways.</p>
       <br />

        <h4>The Tech Stack</h4>
        
        <ul>
            <li>React JS</li>
            <li>CSS</li>
        </ul>
        <br />
        <a href="https://github.com/aagb1884/poetrEMIXERtool">Github Repo <img id='external-link' title='external link' src='/images/external-link.png' /></a>
        <br />
        <Link to="https://poetremixertool.vercel.app/">Link <img id='external-link' title='external link' src='/images/external-link.png' /></Link>
        <Minimise toggleVisibility={toggleVisibility} />
        </div>
      }
     </section>
    )
}
 
export default PoetRemixer;