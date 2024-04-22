import Header from "./TitleHeading";
import AboutMe from "./About Me";

const Links = ({showForm, setShowForm}) => {

    function displayForm() {
        setShowForm(!showForm);
    }


    return ( 
    <header className="header-section">
        <Header />
        <AboutMe />
        <br />
        <nav>
        <ul className="links">
            <li><a href="https://github.com/aagb1884"><img src="images/icons8-github-96.png" title="Github Profile" alt="github" style={{ width: '50%' }} ></img></a></li>
            <li><a href="https://www.linkedin.com/in/andrew-blair-3604a0273/"><img src="images/icons8-linkedin-96.png" title="LinkedIn Profile" alt="linked-in" style={{ width: '50%' }} ></img></a></li>
            <li><button className='contact-form-header-button' onClick={displayForm} ><img src="images/icons8-email-96.png" title="Contact Form" alt="contact-form" style={{ width: '50%' }} ></img></button></li>
        </ul>  
        </nav>
        <br />
    </header>  

     );
}
 
export default Links;