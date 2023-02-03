import instagram from "../../assets/icons/instagram.png";
import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";

function Footer() {
    return(
        <>
            <footer>
                <div className="footer-container">
                    <div className="footer-title">
                        <h4>Unete a nosotros</h4>
                    </div>
                    <div className="footer-btn">
                        <button>Tu dirección</button>
                        <button>Registrarse</button>
                    </div>
                    <div className="footer-icons">
                        <img src={instagram} alt="instagram" />
                        <img src={twitter} alt="twitter" />
                        <img src={facebook} alt="facebook" />
                    </div>
                    <div className="footer-copy"><p>copyright</p></div>
                </div>
            </footer>
        </>
    )
}

export { Footer };