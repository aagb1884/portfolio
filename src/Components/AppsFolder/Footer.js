import { NavLink } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer>
        <ul>
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/apps">Apps</NavLink>
            </li>
        </ul>
        </footer>
     );
}
 
export default Footer;