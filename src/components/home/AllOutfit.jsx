import { useNavigate } from "react-router";
import accesorios from "../../assets/img/accesorios.png";
import verano from "../../assets/img/verano.png";

function AllOutfit() {
    
    const navigate = useNavigate();
    
    const navigateBeach = () => {
        navigate("/clothing/man/beach");
    }
    const navigateAccessories = () => {
        navigate("/clothing/accessories");
    }
    
    return(
        <>
        <section className="allOutfit-container">
            <div>
                <h3>Universo Oli</h3>
                <div className="stock-container">
                    <div className="stock">
                        <img src={accesorios} alt="accesorios" />
                        <div className="stock-text">
                            <h4>Accesorios</h4>
                            <p>Las mejores combinaciones</p>
                            <button onClick={navigateAccessories}>VER AHORA</button>
                        </div>
                    </div>
                    <div className="stock">
                        <img src={verano} alt="accesorios" />
                        <div className="stock-text">
                            <h4>Pileta, Playa y Sol</h4>
                            <p>Elegí el tuyo!</p>
                            <button onClick={navigateBeach}>VER AHORA</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export {  AllOutfit };