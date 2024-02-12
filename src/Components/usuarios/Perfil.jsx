import {  useContext } from "react"
import { UserContext } from "../../Context/UserContext"
import "./Perfil.css"
const Perfil = () => {

    const usuario = useContext(UserContext)


    return (
        <div className="perfil-container">
            <h2 className="perfil-title"> Perfil de {usuario.first_name} {usuario.last_name}</h2>
            <div className="perfil-parrafos">
                <p>Nombre: <span>{usuario.first_name}</span></p>
                <p>Apellido:<span> {usuario.last_name}</span></p>
                <p>ID:<span> {usuario.id}</span></p>
                <p>Email: <span>{usuario.email}</span></p>
            </div>
            <div className="perfil-img">
                <img src={usuario.avatar} alt="imagen_perfil" />
            </div>
        </div>
    )
}

export default Perfil