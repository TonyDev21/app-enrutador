import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
    return (
        <>
        <div className="home-container">
            <h1>Hola Bienvenido a VanitasCrip</h1>
            <p>Conoce las 100 criptos mas usadas</p>
            <Link to="/criptomonedas">Ver criptomonedas</Link>
        </div>
        </>
    )
}

export default Home