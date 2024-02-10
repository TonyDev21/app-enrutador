import { Outlet } from 'react-router-dom'
import Menu from './Components/menu/Menu.jsx'

const App = () => {
    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    )
}

export default App