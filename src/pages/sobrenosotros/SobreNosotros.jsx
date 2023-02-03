import { TituloBlanco } from "../../components/Titulo";
import Cualidades from "./Cualidades";
import "./sobrenosotros.css"
import icon1 from "./assets/icon-1.png"
import icon2 from "./assets/icon-2.png"
import icon3 from "./assets/icon-3.png"
import { ParrafoBlanco } from "../../components/Parrafo";
import { Button } from "../../components/Button";
export default function SobreNosotros(){
    return(
        <section className="sobre_nosotros">
            <div className="contenedor">
             <TituloBlanco>THE BEST COFFEE SHOP</TituloBlanco>
             <article className="cualidades_contenedor">
                <Cualidades src={icon1} texto="BEST BEANS"/>
                <Cualidades src={icon2} texto="QUALITY MILK"/>
                <Cualidades src={icon3} texto="PERFECT BLEND"/>
             </article>
             <ParrafoBlanco>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.</ParrafoBlanco>
             <Button>ABOUT US</Button>
            </div>
        </section>
    )
}