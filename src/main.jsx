import ReactDOM from 'react-dom/client'
import './main.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Pagina404 from './Components/Pagina404.jsx'
import Cuadricula from './Components/Cuadricula.jsx'
import App from './App.jsx'
import Home from './Home.jsx'
import CriptoPage from './Components/cripto/CriptoPage.jsx'
import { UserContextProvider } from './Context/UserContext.jsx'
import Perfil from './Components/usuarios/Perfil.jsx'
import Login from './Components/usuarios/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>} />
          <Route path='perfil' element={<Perfil />} />
        </Route>
        <Route path='/criptomonedas' element={<App/>}>
          <Route index element={<Cuadricula/>} />
          <Route path=':id' element={<CriptoPage/>} />
        </Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path="*" element={<Pagina404/>} />
      </Routes>
    </BrowserRouter>
  </UserContextProvider>

 
)
