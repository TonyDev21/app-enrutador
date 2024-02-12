import { useState , useEffect} from "react";
import axios from "axios";

const usePetition = (endpoint) => {

    const VITE_API_URL = import.meta.env.VITE_API_URL;
    
    const [data,setData] = useState()
    const [cargando,setCargando] = useState(false)

    useEffect( () => {

        setCargando(true)

        axios.get(`${VITE_API_URL}${endpoint}`)
        .then(data => {
            setData(data.data.data)
            setCargando(false)
        })
        .catch( (e) => {
            setCargando(false)
            console.error(e)
        })

    },[VITE_API_URL,endpoint])

    return [data,cargando]
}

export default usePetition