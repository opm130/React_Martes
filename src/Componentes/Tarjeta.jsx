
import '../Style/Tarjeta.css'
export default function Tarjeta({nombre,img,descripcion,color}){
    return(
       <div className='Principal'>
            <div className='Centrar' style={{background:color}}>
                <img className='Imagen' src={img} alt="" />
                <div className='Contenido'>
                    <h1 className='Titulo'>{nombre}</h1>
                    <p className='Parrafo'>{descripcion}</p>
                </div>
            </div>
        </div> 
    )
}

