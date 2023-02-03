import gallery_coffe_1 from "./assets/gallery-coffee-image-1.jpg"
import gallery_coffe_2 from "./assets/gallery-coffee-image-2.jpg"
import gallery_coffe_3 from "./assets/gallery-coffee-image-3.jpg"
import "./galeria.css"
export default function Galeria(){
    return(
        <section className="galeria">
                <img src={gallery_coffe_1} />
                <img src={gallery_coffe_2} />
                <img src={gallery_coffe_3} />
        </section>
   
    )
}