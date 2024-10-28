import { Link } from "react-router-dom";

const BFGeneratorAppLinks = () => {
    return ( 
        <div className="app-store-div">
                <p>The Big Finish Boxset Generator is available as a mobile/tablet app on the iOS App Store.</p>
        <div className="app-store-links">
        <Link to="https://apps.apple.com/gb/app/big-finish-boxset-generator/id6497484877">
        <img    src="/images/App_Store_(iOS)_2017.svg"
                alt="iOS app store logo"
                className="ios-app-store-logo"
        /></Link>
        {/* <Link to="https://play.google.com/store/apps/details?id=com.aagb1884.eurovision_bingo">
        <img    src="/images/Google_Play.png"
                alt="google play logo"
                className="google-play-logo"
        />
        </Link> */}
        </div>
        </div>
     );
}
 
export default BFGeneratorAppLinks;