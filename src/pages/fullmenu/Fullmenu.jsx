import { ButtonCentradoAlInicio } from "../../components/Button";
import { ParrafoGrande } from "../../components/Parrafo";
import { Titulo } from "../../components/Titulo";
import "./fullmenu.css"
export default function Fullmenu(){
    return (
     <section className="fullmenu">
        <div className="contenedor">
         <div className="fullmenu_div">
            <Titulo>GREAT COFFE</Titulo>
            <ParrafoGrande>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</ParrafoGrande>
            <ButtonCentradoAlInicio>FULL MENU</ButtonCentradoAlInicio>
         </div>
        </div>
     </section>
     
    )
}