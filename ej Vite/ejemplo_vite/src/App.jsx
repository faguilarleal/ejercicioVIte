import { useEffect, useState } from 'react'
import './App.css'
import Router from './componentes/router'

function App() {

  const [rutaActual, setRutaActual] = useState("login")

  useEffect(() => {//se ejecuta una vez
    setRutaActual(window.location.pathname) //ruta inicial
    // poner la ruta a login
    window.history.pushState({}, rutaActual, "/login")
  }, [])

  return (
    <div className='sitio'>
      <div className='menu'>
        
      </div>
      <div className='contenido'>
        <Router ruta={rutaActual} setRuta={setRutaActual}></Router> 
      </div>

    </div>
      
  )
}

export default App
