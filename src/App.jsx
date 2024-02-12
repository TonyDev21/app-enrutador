import { Navigate, Outlet } from 'react-router-dom'
import Menu from './Components/menu/Menu.jsx'
import "./App.css"

const App = () => {

    if(!localStorage.getItem("TokenAPI")) return <Navigate to="/login" />

    return (
        <>
            <div className='app-container'>
                <Menu/>
                <Outlet/>
            </div>
        </>
    )
}

export default App