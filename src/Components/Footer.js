import Header from "./Header";
import AboutMe from "./About Me";

const Footer = () => {
    return ( 
    <div className="Footer">
        <Header />
        <AboutMe />
        <br />
        <ul>
            <li><a href="https://github.com/aagb1884"><img src="images/icons8-github-96.png" alt="github" style={{ width: '50%' }} ></img></a></li>
            <li><a href="https://www.linkedin.com/in/andrew-blair-3604a0273/"><img src="images/icons8-linkedin-96.png" alt="linked-in" style={{ width: '50%' }} ></img></a></li>
            <li><a href="mailto:andrew.blair.work@gmail.com"><img src="images/icons8-email-96.png" alt="email" style={{ width: '50%' }} ></img></a></li>
        </ul>  
        <br />
    </div>  

     );
}
 
export default Footer;