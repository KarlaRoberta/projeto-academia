import classes from "./Depositions.module.css";

import menina from "../../assets/img/menina.png";
import mulherd from "../../assets/img/mulherd.png";
import homem from "../../assets/img/rapaz.png";

export const Depositions = () => {

  return (
    <div>
        <h1 className={classes.localizacao}>Depoimentos</h1>
        
        <div className={classes.imagensAnteseDepois}>
            <img src={menina} alt="Foto de uma mulher" />
            <img src={mulherd} alt="Foto de uma mulher com máscara de proteção" />
            <img src={homem} alt="Foto de um homem bebendo na garrafa" />
        </div>

        <div className={classes.depoimentos}>
          <div className={classes.blocoDepoimentos}>
            <span></span>
            <span></span>
            <span></span>
          </div>

            {/* <ul>
                <li>Depoimentos são citações curtas de clientes. É uma ótima forma de convencer os clientes a experimentar seus serviços. Laura Borges, 31</li>
                <li>Depoimentos são citações curtas de clientes. É uma ótima forma de convencer os clientes a experimentar seus serviços. Luana Cruz, 28</li>
                <li>Depoimentos são citações curtas de clientes. É uma ótima forma de convencer os clientes a experimentar seus serviços. Tomas Costa, 44</li>
            </ul> */}
        </div>

      
    </div>
  )
}
export default Depositions