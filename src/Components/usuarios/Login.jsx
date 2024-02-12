import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import "./Login.css"

const Login = () => {

    const navigation = useNavigate()

    const [user,setUser] = useState({
        email: "",
        password: ""
    })


    const submit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("https://reqres.in/api/login",user)
            localStorage.setItem("TokenAPI", response.data.token)
            navigation("/")
        } catch (error) {
            console.log(error)
        }
    }

    if(localStorage.getItem("TokenAPI")) return <Navigate to="/" />

    return (
        <>
        <div className="login-container">
            <h1>Iniciar Sesion</h1>
            <form onSubmit={submit}>
                <div className="field">
                    <label htmlFor="email">Correo Electronico</label>
                    <input required onChange={ (e) => {
                        setUser( {
                            ...user,
                            email: e.target.value
                        })
                    }}  type="email" name="email"  />
                </div>
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input required onChange={ (e) => {
                        setUser({
                            ...user,
                            password: e.target.value
                        })
                    }} type="password" name="password" />
                </div>
                <div className="submit">
                    <input type="submit"  value="Ingresar"/>
                </div>
            </form>
        </div>
        </>
    )
}

export default Login