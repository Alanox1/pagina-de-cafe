import { ButtonCentradoAlInicio } from "../../components/Button";
import { ParrafoGrande } from "../../components/Parrafo";
import { Titulo } from "../../components/Titulo";
import "./caracteristicas.css"
import foto from "./foto-del-cafe.jpg"
export default function Caracteristicas(){
    return(
        <section className="caracteristicas" >
                <div className="parte-izquierda">
                    <Titulo>FRESH BEANS</Titulo>
                    <ParrafoGrande>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</ParrafoGrande>
                    <ButtonCentradoAlInicio>LEARN MORE</ButtonCentradoAlInicio>
                </div>
                <div className="parte-derecha">
                    <img src={foto} />
                </div>   
        </section>
        
    )
}