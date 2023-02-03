import shop from "../../assets/img/shop.png";
import logo from "../../assets/icons/logo-shop-dark.png";

function Shop(){
    return(
        <>
            <section className="shop-container">
                <div className="shop-header">
                    <h4>Oli Inside</h4>
                    <img src={logo} alt="logo"/>
                </div>
                <div className="shop-img-container">
                    <img src={shop} alt="shop"/>
                </div>
                <div className="shop-text">
                    <h4>Oli Tienda</h4>
                    <p>Experiencia definitiva, Oli Tienda ubicada en 123 Avenida X. Dos mil metros cuadrados de diversidad. Espacios exclusivos. Reúnete en el corazón palpitante de todas las culturas Oli.</p>
                    <a href="https://www.google.com/maps" target="_blank">
                        <button>Vamos</button>
                    </a>
                </div>
            </section>
        </>
    )
}

export { Shop };