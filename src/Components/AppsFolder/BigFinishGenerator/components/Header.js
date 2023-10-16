import Footer from "../../Footer";

const Header = () => {
    return ( 
        <div className="header-with-nav">
        <div className="bf-app-links"><Footer /></div> 
        <header className="big-finish-header">
            <div className="the">The </div> 
            <h1>   <div className="big">BIG</div> 
            <div className="finish"> FINISH</div> </h1>
            <div className="boxset-generator"> Boxset Generator </div>
            <div className="line"> | </div>
            <h3 className="ideas-are-hard"><i>Because we have hundreds of these to make and ideas are hard.</i></h3>
        </header>
    </div>
     );
}
 
export default Header;