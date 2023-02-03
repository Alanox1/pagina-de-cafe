import { Parrafo } from "../../components/Parrafo"
import CoffeeTypes from "./CoffeeTypes"
import mocha_latte from "./assets/mocha_latte.png"
import pour_over from "./assets/pour_over.png"
import espresso from "./assets/espresso.png"
import { Button, ButtonMargin } from "../../components/Button"
import "./main.css"
export default function Main(){
    return(
        <main className='main' id="main">
        <div className='contenedor'>
          <div className='main_div'>
            <h2 className='main_titulo'>WE BELIEVE IN COFFEE THAT TASTES INCREDIBLE</h2>
            <Parrafo>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</Parrafo>
          </div>
          <div className="coffee_types_div">
            <CoffeeTypes src={mocha_latte} descripcion="MOCHA LATTE" />
            <CoffeeTypes src={pour_over} descripcion="POUR OVER" />
            <CoffeeTypes src={espresso} descripcion="ESPRESSO" />
          </div>
          <ButtonMargin>FULL MENU</ButtonMargin>
        </div>
       </main>
    )
}