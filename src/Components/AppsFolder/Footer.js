import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <nav className="app-page-nav-links">
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/apps">Apps</Link>
            </li>
            <li>
            <Link to="/blog">Blog</Link>
            </li>
            <li>
            <Link to="/credis">Credits</Link>
            </li>
        </ul>
        </nav>
     );
}
 
export default Footer;