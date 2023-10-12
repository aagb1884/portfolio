import PithyFooterQuotes from "./lists/PithyFooterQuotes";

const Footer = () => {
    return (  
        <footer className="big-finish-footer">
        <h1>WE LOVE STORIES</h1>
            <div className="line"> | </div>
            <div className="fitton"> 
                <h5>please help</h5>
                <h4><PithyFooterQuotes /></h4>
            </div>
        </footer>
    );
}
 
export default Footer;