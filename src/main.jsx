import ReactDOM from 'react-dom/client'
import './main.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Pagina404 from './Components/Pagina404.jsx'
import Cuadricula from './Components/Cuadricula.jsx'
import App from './App.jsx'
import Home from './Home.jsx'
import CriptoPage from './Components/cripto/CriptoPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route index element={<Home/>} />
      </Route>
      <Route path='/criptomonedas' element={<App/>}>
        <Route index element={<Cuadricula/>} />
        <Route path=':id' element={<CriptoPage/>} />
      </Route>
        <Route path="*" element={<Pagina404/>} />
    </Routes>
  </BrowserRouter>

 
)
