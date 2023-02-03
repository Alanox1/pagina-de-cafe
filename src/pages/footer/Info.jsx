import { ParrafoBlanco, ParrafoCentradoAlInicio } from "../../components/Parrafo";

export default function Info({texto,parrafo}) {
    return(
        <>
            <p style={{color: "#dca47d", fontSize : "20px",fontWeight:"600", margin:"30px 0px"}}>{texto}</p>
            <ParrafoCentradoAlInicio>{parrafo}</ParrafoCentradoAlInicio>
        </>   
    )
}