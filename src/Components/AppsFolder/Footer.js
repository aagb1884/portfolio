import { NavLink } from "react-router-dom";

const Footer = () => {
    return ( 
        <nav className="app-page-nav-links">
        <ul>
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/apps">Apps</NavLink>
            </li>
        </ul>
        </nav>
     );
}
 
export default Footer;