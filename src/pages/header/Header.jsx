import { Link } from "react-scroll"
import "./header.css"
import { Button } from '../../components/Button'
import flecha_abajo from './assets/flecha_abajo.png'

export default function Header(){
  
    return(
        <header className='header'>
        <section className='contenedor'>
           <h1>COFFEE HOUSE</h1>
            <p className="header_p">Serving Only the Best since 2013</p>
            <Button>SHOP</Button>
            <Link to="main" spy={true} smooth={true} offset={150} duration={500}>
                <img className="header_image" src={flecha_abajo}/>
            </Link>     
        </section>
     </header>  
    )
}