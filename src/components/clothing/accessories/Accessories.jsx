import arrow from "../../../assets/icons/arrow.png";
import reloj from "../../../assets/img/reloj.png"
import collar from "../../../assets/img/collar.png";
import anillo from "../../../assets/img/anillo.png";
import { Footer } from "../../home/Footer";
import { useNavigate } from "react-router";

function Accessories() {
    
    const navigate = useNavigate();

    const clothing = [
        {
            id: 1,
            title: "Reloj talle X",
            price: "$XX.XX",
            img: reloj,
        },
        {
            id: 2,
            title: "Reloj talle X",
            price: "$XX.XX",
            img: reloj,
        },
        {
            id: 3,
            title: "Reloj talle X",
            price: "$XX.XX",
            img: reloj,
        },
        {
            id: 4,
            title: "Collar talle X",
            price: "$XX.XX",
            img: collar,
        },
        {
            id: 5,
            title: "Collar talle X",
            price: "$XX.XX",
            img: collar,
        },
        {
            id: 6,
            title: "Collar talle X",
            price: "$XX.XX",
            img: collar,
        },
        {
            id: 7,
            title: "Anillo talle X",
            price: "$XX.XX",
            img: anillo,
        },
        {
            id: 8,
            title: "Anillo talle X",
            price: "$XX.XX",
            img: anillo,
        },
        {
            id: 9,
            title: "Anillo talle X",
            price: "$XX.XX",
            img: anillo,
        },
    ]

    const back = () => {
        navigate("/");
    }

    return (
        <div className="accessories">
            <header className="accessories-header-container">
                <div className="accessories-header">
                    <img onClick={back} src={arrow} alt="flecha"/>
                    <h2>Accesorios</h2>
                </div>
                <div>
                    <h4 style={{color: "#202020"}}>Disponibles</h4>
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

export { Accessories };