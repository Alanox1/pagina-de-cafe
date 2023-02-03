import { Parrafo } from "../../components/Parrafo";

export default function CoffeeTypes({src,descripcion}){
    return(
        <div style={{textAlign:"center",margin:"18px 0px"}}>
            <img src={src} />
            <h3 style={{letterSpacing: "1px",
                        lineHeight: "1.7em",
                        fontSize : "25px",
                        color:"#333"}}>{descripcion}</h3>
            <Parrafo>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</Parrafo>
        </div>
    )
}