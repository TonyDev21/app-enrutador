import { useEffect, useState } from "react"
import axios from "axios"
import "./App.css"

const App = () => {

  const VITE_API_URL = import.meta.env.VITE_API_URL;

  const [ criptos, setCriptos] = useState();

  useEffect(()=>{
   // fetch(`${VITE_API_URL}assets`)
    axios.get(`${VITE_API_URL}assets`)
     //.then( (respuesta) => respuesta.json())
      .then( (data) => {  
        setCriptos(data.data.data)
      })
      .catch( () => {
        console.error("La peticion fallo")
      })
  },[criptos,VITE_API_URL])

  if(!criptos) return (<span>Cargando...</span>)
  
  return (
    <>
      <h1>Lista de Criptomonedas</h1>
      <ol>
        {
          criptos.map( ({id, name, priceUsd}) => (
            <li key={id}> Nombre: {name} , Precio: {priceUsd}</li>
          ))
        }
      </ol>
    </>
  )
}

export default App
