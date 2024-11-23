import { Link } from "react-router-dom/dist";

const BlogNav = () => {
    return ( 
        <nav style={{'width': '100%', 'margin-bottom': '15px'}}>
            <ul className="blog-nav">
        
            <li>
            <Link to="/blog">Blog Home</Link> 
            </li>
       
            <li>
            <Link to="/apps">Apps</Link> 
            </li>  

            <li>
            <Link to="/">Portfolio Home</Link> 
            </li>
            </ul>
        </nav>
     );
}
 
export default BlogNav;