import Header from "./Header";
import AboutMe from "./About Me";

const Footer = () => {
    return ( 
    <div className="Footer">
        <Header />
        <AboutMe />
        <br />
        <ul>
            <li><a href="https://github.com/aagb1884">Github</a></li>
            <li><a href="https://www.linkedin.com/in/andrew-blair-3604a0273/">LinkedIn</a></li>
            <li><a href="mailto:andrew.blair.work@gmail.com">Email</a></li>
        </ul>  
        <br />
    </div>  

     );
}
 
export default Footer;