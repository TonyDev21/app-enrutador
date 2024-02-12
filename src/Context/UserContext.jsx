import {  createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios";

const UserContext = createContext()

const UserContextProvider = ( {children }) => {


    const [usuario, setUsuario] = useState({})

    
    useEffect( () => {

        axios.get("https://reqres.in/api/users/2")
        .then( data => {
            setUsuario(data.data.data)
            console.log(data)
        })
        .catch( e => console.error(e))
    },[])
    

    
    return (

        <UserContext.Provider value={usuario}>
            {children }
        </UserContext.Provider>

    )
}

UserContextProvider.propTypes = { // Aquí está la corrección del typo: cambia 'protoTypes' a 'propTypes'
    children : PropTypes.object.isRequired,

};

export { UserContext , UserContextProvider }