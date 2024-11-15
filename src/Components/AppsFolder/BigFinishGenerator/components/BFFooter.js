import PithyFooterQuotes from "./lists/PithyFooterQuotes";
import { Link } from "react-router-dom";

const BFFooter = () => {
    return (  
        <footer className="big-finish-footer">
        
        <div className="footer-app-store-link">
        <p>Available as a mobile/tablet app on the iOS App Store</p> 
        <Link to="https://apps.apple.com/gb/app/big-finish-boxset-generator/id6497484877">
        <img    src="/images/App_Store_(iOS)_2017.svg"
                alt="iOS app store logo"
                className="footer-ios-app-store-logo"
        /></Link>
        </div>
        <div className="line"> | </div>
        <div className="fitton"> 
            <h4><PithyFooterQuotes /></h4>
        </div>
        </footer>
    );
}

export default BFFooter;