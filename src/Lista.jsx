import PropTypes from 'prop-types';

const Lista = ({id, name, priceUsd}) => {

    return (
        <>
            <li key={id}>Nombre: {name} | Precio{priceUsd}</li>
        </>
    )
}


Lista.propTypes = { // Aquí está la corrección del typo: cambia 'protoTypes' a 'propTypes'
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    priceUsd: PropTypes.string.isRequired
  };


export default Lista