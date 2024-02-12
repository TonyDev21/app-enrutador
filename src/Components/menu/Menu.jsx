import { useContext } from "react"
import "./Menu.css"
import { NavLink, useNavigate } from "react-router-dom"
import { UserContext } from "../../Context/UserContext"

const Menu = () => {

    const navigation = useNavigate()

    const usuario = useContext(UserContext)

    return (
        <>
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/criptomonedas">Lista de Criptomonedas</NavLink></li>
                <li><NavLink to="/perfil">Perfil de {usuario.first_name} {usuario.last_name}</NavLink></li>
                <li><a onClick={ () => {
                    localStorage.removeItem("TokenAPI"),
                    navigation("/login")
                }}>Cerrar Sesion</a></li>
            </ul>
        </nav>
        </>
    )
}

export default Menu