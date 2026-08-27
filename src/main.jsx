import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import { CartProvider } from './context/CartContext.jsx'
import { FavProvider } from './context/FavContext.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-wkj5dib1wct8o1es.us.auth0.com"
      clientId="cAj9I7iftiudziVQBi8gS5pZ5RXyFvdC"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
    <FavProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </FavProvider>
    <ToastContainer/>
    </Auth0Provider>
  </StrictMode>,
)
