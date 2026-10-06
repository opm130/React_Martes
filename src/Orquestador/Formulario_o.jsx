import Campos from "../Componentes/Formulario/Campos";
import Boton from "../Componentes/Formulario/Botones";

const Inputs=[
    {label:"Titulo",input:"text"},
    {label:"Descripcion",input:"text"},
    {label:"Imagen",input:"text"},
    {label:"Color",input:"text"}
]

export default function Formulario(){
    return(
        <div>
            {Inputs.map((cam)=>(
                <Campos
                    key={cam.label}
                    label={cam.label}
                    entrada={cam.label}
                    input={cam.input}
                    holder={cam.label}
                />
            ))}
        </div>
    )
}