import arrow from "../../../assets/icons/arrow.png"
import remera from "../../../assets/img/remera.png";
import pantalon from "../../../assets/img/pantalon.png";
import zapatilla from "../../../assets/img/zapatilla.png";
import { Footer } from "../../home/Footer";
import { useNavigate } from "react-router";

function Man() {
    
    const navigate = useNavigate();

    const clothing = [
        {
            id: 1,
            title: "Remera talle X",
            price: "$XX.XX",
            img: remera,
        },
        {
            id: 2,
            title: "Remera talle X",
            price: "$XX.XX",
            img: remera,
        },
        {
            id: 3,
            title: "Remera talle X",
            price: "$XX.XX",
            img: remera,
        },
        {
            id: 4,
            title: "Pantalon talle X",
            price: "$XX.XX",
            img: pantalon,
        },
        {
            id: 5,
            title: "Pantalon talle X",
            price: "$XX.XX",
            img: pantalon,
        },
        {
            id: 6,
            title: "Pantalon talle X",
            price: "$XX.XX",
            img: pantalon,
        },
        {
            id: 7,
            title: "Zapatilla talle X",
            price: "$XX.XX",
            img: zapatilla,
        },
        {
            id: 8,
            title: "Zapatilla talle X",
            price: "$XX.XX",
            img: zapatilla,
        },
        {
            id: 9,
            title: "Zapatilla talle X",
            price: "$XX.XX",
            img: zapatilla,
        },
    ]

    const navigateMan = () => {
        navigate("/clothing/man");
    }
    const navigateClothing = () => {
        navigate("/clothing/man/clothing");
    }
    const navigateShoes = () => {
        navigate("/clothing/man/shoes");
    }
    const back = () => {
        navigate("/");
    }

    return (
        <div className="Man">
            <header className="man-header-container">
                <div className="man-header">
                    <img onClick={back} src={arrow} alt="flecha"/>
                    <h2>Hombre</h2>
                </div>
                <div>
                    <h4 onClick={navigateMan} style={{color: "#202020"}}>Hombre</h4>
                    <h4 onClick={navigateClothing}>Ropa</h4>
                    <h4 onClick={navigateShoes}>Calzado</h4>
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

function ManRopa() {

    const clothing = [
        {
            id: 1,
            title: "Remera talle X",
            price: "$XX.XX",
            img: remera,
        },
        {
            id: 2,
            title: "Remera talle X",
            price: "$XX.XX",
            img: remera,
        },
        {
            id: 3,
            title: "Remera talle X",
            price: "$XX.XX",
            img: remera,
        },
        {
            id: 4,
            title: "Pantalon talle X",
            price: "$XX.XX",
            img: pantalon,
        },
        {
            id: 5,
            title: "Pantalon talle X",
            price: "$XX.XX",
            img: pantalon,
        },
        {
            id: 6,
            title: "Pantalon talle X",
            price: "$XX.XX",
            img: pantalon,
        },
    ]

    const navigate = useNavigate();

    const navigateMan = () => {
        navigate("/clothing/man");
    }
    const navigateClothing = () => {
        navigate("/clothing/man/clothing");
    }
    const navigateShoes = () => {
        navigate("/clothing/man/shoes");
    }
    const back = () => {
        navigate("/");
    }

    return(
        <div className="Man">
            <header className="man-header-container">
                <div className="man-header">
                    <img onClick={back} src={arrow} alt="flecha"/>
                    <h2>Hombre</h2>
                </div>
                <div>
                    <h4 onClick={navigateMan}>Hombre</h4>
                    <h4 onClick={navigateClothing} style={{color: "#202020"}}>Ropa</h4>
                    <h4 onClick={navigateShoes}>Calzado</h4>
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

function ManZapatilla() {

    const clothing = [
        {
            id: 7,
            title: "Zapatilla talle X",
            price: "$XX.XX",
            img: zapatilla,
        },
        {
            id: 8,
            title: "Zapatilla talle X",
            price: "$XX.XX",
            img: zapatilla,
        },
        {
            id: 9,
            title: "Zapatilla talle X",
            price: "$XX.XX",
            img: zapatilla,
        },
    ]

    const navigate = useNavigate();

    const navigateMan = () => {
        navigate("/clothing/man");
    }
    const navigateClothing = () => {
        navigate("/clothing/man/clothing");
    }
    const navigateShoes = () => {
        navigate("/clothing/man/shoes");
    }
    const back = () => {
        navigate("/");
    }

    return(
        <div className="Man">
            <header className="man-header-container">
                <div className="man-header">
                    <img onClick={back} src={arrow} alt="flecha"/>
                    <h2>Hombre</h2>
                </div>
                <div>
                    <h4 onClick={navigateMan}>Hombre</h4>
                    <h4 onClick={navigateClothing}>Ropa</h4>
                    <h4 onClick={navigateShoes} style={{color: "#202020"}}>Calzado</h4>
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

export { Man, ManRopa, ManZapatilla };