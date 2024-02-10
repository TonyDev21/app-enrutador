import PropTypes from 'prop-types';
import "./Cripto.css"
import { Link } from 'react-router-dom';

const Cripto = ({id, name, priceUsd,symbol,changePercent24Hr}) => {

    return (
        <>
        <div key={id} className="cripto">
            <h2>{name}</h2>
            <div className="info">
               <p><span className="label">Precio:</span> {parseFloat(priceUsd).toFixed(4)} </p>    
               <p><span className="label">Simbolo:</span> {symbol} </p> 
               <p>
                <span className="label">Variacion 24hrs: </span>
                <span className={ parseFloat(changePercent24Hr) > 0 ? "positivo" : "negativo"}>
                    {parseFloat(changePercent24Hr).toFixed(3)} % 
                    </span>
                </p>
                <Link to={`/criptomonedas/${id}`}>Ver mas Detalles</Link>   
            </div>
        </div>
        </>
    )
}


Cripto.propTypes = { // Aquí está la corrección del typo: cambia 'protoTypes' a 'propTypes'
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    priceUsd: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    changePercent24Hr: PropTypes.string.isRequired,
  };


export default Cripto