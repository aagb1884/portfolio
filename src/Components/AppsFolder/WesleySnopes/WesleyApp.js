import './WesleyApp.css';
import WesleyFooter from './Components/WesleyFooter';
import WesleyHeader from "./Components/WesleyHeader";
import WesleyContainer from './Containers/WesleyContainer';

function WesleyApp() {
  return (
    <div className="wesley-snopes-app">
      <WesleyHeader />
      <WesleyContainer />
      <WesleyFooter />
    </div>
  );
}

export default WesleyApp;
