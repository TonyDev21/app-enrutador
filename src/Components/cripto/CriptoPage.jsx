import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const CriptoPage = () => {

    const params = useParams()

    const VITE_API_URL = import.meta.env.VITE_API_URL;
    
    const [cripto , setCripto] = useState({})
    const [history, setHistory] = useState([])

    useEffect( () => {
        axios.get(`${VITE_API_URL}assets/${params.id}`)
        .then(data => {
           setCripto(data.data.data)
        })
        .catch( () => {
            console.error("La peticion fallo")
        })
    },[cripto,VITE_API_URL,params.id])
    
    useEffect( () => {
        axios.get(`${VITE_API_URL}assets/${params.id}/history?interval=d1`)
        .then(data => {
            setHistory(data.data.data)
        })
        .catch( () => {
            console.error("La peticion fallo")
        })
    },[history,VITE_API_URL,params.id])
   


    return (
        <>
        <h2>Soy la Criptomoneda {params.id}</h2>
        <div className="info">
            <ul>
                <li><span className="label">Nombre: </span> {cripto.name}</li>
                <li><span className="label">Simbolo: </span> {cripto.symbol}</li>
            </ul>    
        </div>
        <h2>Historial de Precio</h2>
        <table>
            <thead>
                <th>Fecha</th>
                <th>Precio</th>
            </thead>
            <tbody>
                {
                    history.map(({date,priceUsd,time}) => (
                        <tr key={time}>
                            <td>{date}</td>
                            <td>{priceUsd}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </>
    )
}



export default CriptoPage