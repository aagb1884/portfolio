import './Footer.css'
import { Link } from 'react-router-dom/dist';

const HomeFooter = ({goToContactForm, goToTab, contact, tabs}) => {
    return ( 
        <nav className="home-footer">

        <div className='row-of-nav-columns'>

        <div className='home-clm'>
        <Link to='/'>Home</Link>
        <br />
        <ul className='home-clm-links'>
            <li onClick={() => {goToTab(tabs, 'tab1')}}>
                Software Development
            </li>
            <li onClick={() => {goToTab(tabs, 'tab2')}}>
                Freelance Writing
            </li>
            <li onClick={() => {goToTab(tabs, 'tab3')}}>
                Poetry/Spoken Word
            </li>
            <li onClick={() => {goToContactForm(contact)}}>
                Contact Form
            </li>
        </ul>
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
            <li>
                <Link to="https://scottish-football-simulators.co.uk/">Scottish Football Simulators <img id='external-link' title='external link' src='/images/external-link.png' /></Link>
            </li>
            <li>
                <Link to="https://poetremixertool.vercel.app/">PoetRemixer Tool <img id='external-link' title='external link' src='/images/external-link.png' /></Link>
            </li>
        </ul>
        </div>   

        <div className='blog-clm'>
        <Link to='/blog'>Blog</Link>
        <Link to='/credits'>Credits</Link>
        </div>

        </div>
        <div className="ko-fi">
        <a href='https://ko-fi.com/W7W1URM7B' target='_blank' rel="noreferrer"><img height='36' title='external ko-fi link' src='https://storage.ko-fi.com/cdn/kofi4.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
        </div>

        
        </nav>
     );
}
 
export default HomeFooter;
