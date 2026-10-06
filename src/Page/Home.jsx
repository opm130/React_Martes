import { useNavigate } from "react-router-dom";
import Efecto from "../Componentes/Home/Efecto";
import ABC from '../img/Home.jpg'

export default function Home(){
    const voltear=useNavigate()
    return(
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <h1>Bienvenidos</h1>
            <Efecto
                src={ABC}
                onFin={()=>voltear('/Tarjeta')}
            />
        </div>
    )
}