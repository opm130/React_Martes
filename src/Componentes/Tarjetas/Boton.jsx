import { Link } from 'react-router-dom'
import Bot from '../../img/boton.jpg'

export default function Boton(){
    return(
        <Link to="/Formulario"><img src={Bot} alt="" /></Link>
    )
}