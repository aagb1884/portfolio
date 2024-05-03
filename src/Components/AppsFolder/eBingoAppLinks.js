import { Link } from "react-router-dom";

const EuroBingoAppLinks = () => {
    return ( 
        <div className="app-store-div">
        <br />
        <h3>App Stores</h3>
                <p>Eurovision Bingo is available as a mobile/tablet app via the iOS App Store and Google Play.</p>
        <div className="app-store-links">
        <Link to="https://apps.apple.com/gb/app/eurovision-bingo/id6479647899">
        <img    src="/images/App_Store_(iOS)_2017.svg"
                alt="iOS app store logo"
                className="ios-app-store-logo"
        /></Link>
        <Link to="https://play.google.com/store/apps/details?id=com.aagb1884.eurovision_bingo">
        <img    src="/images/Google_Play.png"
                alt="google play logo"
                className="google-play-logo"
        />
        </Link>
        </div>
        </div>
     );
}
 
export default EuroBingoAppLinks;