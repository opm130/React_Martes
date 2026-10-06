import '../Style/Tarjeta.css'
import Descripcion from '../Componentes/Tarjetas/Descripcion'
import Nombre from '../Componentes/Tarjetas/Nombre'
import Imagen from '../Componentes/Tarjetas/Imagen'

export default function Tarjeta({nombre,img,descripcion,color}){
    return(
       <div className='Principal'>
            <div className='Centrar' style={{background:color}}>
                <Imagen
                    img={img}
                />
                <div className='Contenido'>
                    <Nombre
                        nombre={nombre}
                    />
                    <Descripcion
                        descripcion={descripcion}
                    />
                    
                </div>
            </div>
        </div> 
    )
}

