import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tarjeta from './Componentes/Tarjeta'
import Datos from './Data/data.json'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {
      Datos.map((arreglo)=>(
        <Tarjeta
          key={arreglo.id}
          nombre={arreglo.Nombre}
          img={arreglo.Imagen}
          descripcion={arreglo.Descripcion}
          color={arreglo.Color}
       />
      ))
    }
  </StrictMode>,
)
