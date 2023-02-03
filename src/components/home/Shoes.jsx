import { useNavigate } from "react-router";
import shoes from "../../assets/img/calzado.png"

function Shoes() {
    
    const navigate = useNavigate();
    
    const navigateShoes = () => {
        navigate("/clothing/man/shoes")
    }

    return(
        <>
            <section className="shoes">
                <div>
                    <img src={shoes} alt="shoe" />
                </div>
                <div>
                    <h3>¡Calzado Oli!</h3>
                    <p>Siempre hay un calzado único para cada persona única</p>
                    <p>La mejor elección está aquí....</p>
                    <button onClick={navigateShoes}>COMPRAR</button>
                </div>
            </section>
        </>
    )
}

export { Shoes };