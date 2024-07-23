import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import StoreContextProvider from './Context/StoreContext.jsx'
import Curd from './components/Curd/Curd.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <StoreContextProvider>
<App />
   
   </StoreContextProvider>

  </BrowserRouter>
   
  
)

// {/* <Curd /> */}
