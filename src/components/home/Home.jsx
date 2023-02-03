import { AllOutfit } from "./AllOutfit";
import { Shop } from "./Shop";
import { Navbar } from "./Navbar";
import { Outfits } from "./Outfits";
import { Shoes } from "./Shoes";
import { Footer } from "./Footer";

function Home() {
    return(
        <div className="home-container">
            <Navbar />
            <Outfits />
            <Shoes />
            <AllOutfit />
            <Shop />
            <Footer />
        </div>
    )
}

export { Home };