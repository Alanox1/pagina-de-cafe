export default function Cualidades({src,texto}){
    return(
        <div style={{textAlign:"center",margin:"20px auto",display:"flex", justifyContent:"center",alignItems:"center",flexDirection:"column" }}>
             <img src={src} style={{width:"58px"}} />
             <p style={{color: "#dca47d", fontSize : "20px",fontWeight:"600", margin:"30px"}}>{texto}</p>
        </div>
   
    )
}