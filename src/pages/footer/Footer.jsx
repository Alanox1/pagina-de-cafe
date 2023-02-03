import { Button, ButtonCentradoAlInicio } from "../../components/Button"
import { ParrafoBlanco } from "../../components/Parrafo"
import { TituloBlanco, TituloBlancoCentradoAlInicio } from "../../components/Titulo"
import "./footer.css"
import Info from "./Info"
export default function Footer () {
    return (
        <footer className="footer">
            
                <div className="parte_izquierda">
                    <div className="contenedor">
                        <TituloBlancoCentradoAlInicio>COME ON IN!</TituloBlancoCentradoAlInicio>
                        <Info texto="WEEKDAYS" parrafo="08PM -12AM" />
                        <Info texto="WEEKENDS" parrafo="12PM -02AM" />
                        <ButtonCentradoAlInicio>VIEW THE MENU</ButtonCentradoAlInicio>
                    </div>
                </div>
                <div className="parte_derecha">
                    <div className="contenedor">
                        <TituloBlancoCentradoAlInicio>CONTACT</TituloBlancoCentradoAlInicio>
                        <Info texto="PHONE" parrafo="+(000) 111 222 333" />
                        <Info texto="MAIL" parrafo="address@domain.com" />
                        <Info texto="ADDRESS" parrafo="543 TN, doula street
                        NY, New York" />                                   
                    </div>
                </div>
        </footer>
    )
}