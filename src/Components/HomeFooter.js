import './Footer.css'
import { Link } from 'react-router-dom/dist';

const HomeFooter = () => {
    return ( 
        <footer className="home-footer">
        <h3 style={{'textAlign': 'left'}}>Website Navigation</h3>

        <div className='row-of-nav-columns'>

        <div className='home-clm'>
        <Link to='/'>Home</Link>
        </div>

        <div className='apps-clm'>
        <Link to='/apps'>Apps</Link>
        <br />
        <ul className='apps-clm-links'>
            <li>
                <Link to='/apps/eurovision-bingo'>Eurovision Bingo</Link>
            </li>
            <li>
                <Link to='/apps/wesley-snopes'>Wesley Snopes</Link>
            </li>
            <li>
                <Link to="/apps/big-finish-generator">Big Finish Boxset Generator</Link>
            </li>
        </ul>
        </div>   

        <div className='blog-clm'>
        <Link to='/blog'>Blog</Link>
        </div>

        </div>
        <div className="ko-fi">
        <a href='https://ko-fi.com/W7W1URM7B' target='_blank' rel="noreferrer"><img height='36' src='https://storage.ko-fi.com/cdn/kofi4.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
        </div>

        
        </footer>
     );
}
 
export default HomeFooter;
