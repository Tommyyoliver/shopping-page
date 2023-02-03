import portada2 from "../../assets/img/portada2.png";
import male from "../../assets/img/section-male.png";
import feminine from "../../assets/img/section-feminine.png";
import kid from "../../assets/img/section-kid.png";
import { useNavigate } from "react-router";

function Outfits() {

    const navigate = useNavigate();

    const pageMan = () => {
        navigate("clothing/man");
    }
    const pageWomen = () => {
        navigate("clothing/women");
    }
    const pageKid = () => {
        navigate("clothing/kid");
    }

    return(
        <>
            <div className="home-img-container">
                <img src={portada2} alt="img-home" />
            </div>
            <section className="outfits">
                <div className="outfits-title"><h3>Los mejores Looks</h3></div>
                <div className="section-container">
                    <div className="section-outfit" onClick={pageMan}>
                        <img src={male} alt="man" />
                        <label>Selección para Hombres</label>
                    </div>
                    <div className="section-outfit" onClick={pageWomen}>
                        <img src={feminine} alt="women" />
                        <label>Selección para Mujeres</label>
                    </div>
                    <div className="section-outfit" onClick={pageKid}>
                        <img src={kid} alt="kid" />
                        <label>Selección para Niños</label>
                    </div>
                </div>
            </section>
        </>
    )
}

export { Outfits };