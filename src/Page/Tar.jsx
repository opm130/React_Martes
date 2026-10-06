import Tarjeta from '../Orquestador/Tarjeta'
import Datos from '../Data/data.json'
import Boton from '../Componentes/Tarjetas/Boton'

export default function Tar(){
    return(
        <div>
            {
                Datos.map((arreglo)=>(
                    <Tarjeta
                        key={arreglo.id}
                        nombre={arreglo.Nombre}
                        img={arreglo.Imagen}
                        descripcion={arreglo.Descripcion}
                        color={arreglo.Color}
                    />
                ))}
            <Boton/>
        </div>
    )
}