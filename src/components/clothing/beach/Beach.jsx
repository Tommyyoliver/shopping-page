import arrow from "../../../assets/icons/arrow.png"
import malla from "../../../assets/img/malla.png";
import ojotas from "../../../assets/img/ojotas.png";
import bikini from "../../../assets/img/bikini.png";
import { Footer } from "../../home/Footer";
import { useNavigate } from "react-router";

function BeachMan() {
    
    const navigate = useNavigate();

    const clothing = [
        {
            id: 1,
            title: "Malla talle X",
            price: "$XX.XX",
            img: malla,
        },
        {
            id: 2,
            title: "Malla talle X",
            price: "$XX.XX",
            img: malla,
        },
        {
            id: 3,
            title: "Malla talle X",
            price: "$XX.XX",
            img: malla,
        },
        {
            id: 4,
            title: "Ojotas talle X",
            price: "$XX.XX",
            img: ojotas,
        },
        {
            id: 5,
            title: "Ojotas talle X",
            price: "$XX.XX",
            img: ojotas,
        },
        {
            id: 6,
            title: "Ojotas talle X",
            price: "$XX.XX",
            img: ojotas,
        },
    ]

    const navigateMan = () => {
        navigate("/clothing/man/beach");
    }
    const navigateWomen = () => {
        navigate("/clothing/women/beach");
    }
    const back = () => {
        navigate("/");
    }

    return (
        <div className="beachMan">
            <header className="beachMan-header-container">
                <div className="beachMan-header">
                    <img onClick={back} src={arrow} alt="flecha"/>
                    <h2>Hombre</h2>
                </div>
                <div>
                    <h4 onClick={navigateMan} style={{color: "#202020"}}>Hombre</h4>
                    <h4 onClick={navigateWomen}>Mujer</h4>
                </div>
            </header>
            <section>
                <div className="clothing-container">
                    {clothing.map(el => (
                        <div className="clothing" key={el.id}>
                            <div className="clothing-img-container">
                                <img src={el.img} alt="remera" />
                            </div>
                            <div className="clothing-text-container">
                                <h5>{el.title}</h5>
                                <p>{el.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    )
}

function BeachWomen() {
    
    const navigate = useNavigate();

    const clothing = [
        {
            id: 1,
            title: "Bikini talle X",
            price: "$XX.XX",
            img: bikini,
        },
        {
            id: 2,
            title: "Bikini talle X",
            price: "$XX.XX",
            img: bikini,
        },
        {
            id: 3,
            title: "Bikini talle X",
            price: "$XX.XX",
            img: bikini,
        },
    ]

    const navigateMan = () => {
        navigate("/clothing/man/beach");
    }
    const navigateWomen = () => {
        navigate("/clothing/women/beach");
    }
    const back = () => {
        navigate("/");
    }

    return (
        <div className="beachWomen">
            <header className="beachWomen-header-container">
                <div className="beachWomen-header">
                    <img onClick={back} src={arrow} alt="flecha"/>
                    <h2>Mujer</h2>
                </div>
                <div>
                    <h4 onClick={navigateMan}>Hombre</h4>
                    <h4 onClick={navigateWomen} style={{color: "#202020"}}>Mujer</h4>
                </div>
            </header>
            <section>
                <div className="clothing-container">
                    {clothing.map(el => (
                        <div className="clothing" key={el.id}>
                            <div className="clothing-img-container">
                                <img src={el.img} alt="remera" />
                            </div>
                            <div className="clothing-text-container">
                                <h5>{el.title}</h5>
                                <p>{el.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    )
}

export { BeachMan, BeachWomen };