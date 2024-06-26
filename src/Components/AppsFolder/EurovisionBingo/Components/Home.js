import EuroBingoAppLinks from "../../eBingoAppLinks";
import BingoCard from "./BingoCard";

const HomePage = () => {
    return ( 
      <div className="eurovision-bingo-landing">
        
        
          <header className="animate-character">
            <div className="animated-header">EUROVISION BINGO</div>
          </header>

            <main>
              <BingoCard />
            </main>
        
        <EuroBingoAppLinks />
      </div>
     );
}
 
export default HomePage;