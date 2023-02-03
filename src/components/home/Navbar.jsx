import { useEffect, useState } from "react";
import menu from "../../assets/icons/more.png";

function Navbar() {

    const [toggle, setToggle] = useState(false);
    
    useEffect(()=> {
        const $menu = document.querySelector(".handleMenu-container");
        $menu.classList.toggle("handle");
    }, [toggle])

    return(
        <div className="navbar-container">
            <div>
                <div className="menu-container">
                    <img src={menu} alt="menu" onClick={() => setToggle(!toggle)}/>
                </div>
                <h2>Ropa Oli</h2>
            </div>
            <div className="handleMenu-container">
                <ul>
                    <li>Mi carrito</li>
                    <li>Secciones</li>
                    <li>Prendas</li>
                    <li>Contacto</li>
                    <li>Ayuda</li>
                </ul>    
            </div>
        </div>
    )
}

export { Navbar };