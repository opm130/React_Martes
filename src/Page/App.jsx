import Tar from "./Tar";
import Formulario from "../Orquestador/Formulario_o";
import NotFound from './NotFound'
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Tarjeta" element={<Tar/>}/>
                <Route path="/Formulario" element={<Formulario/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}