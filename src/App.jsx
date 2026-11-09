import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, CartProvider } from './Context'
import Header from './Header'
import Catalog from './Catalog'
import Cart from './Cart'
import Login from './Login'
import Dashboard from './Dashboard'
import './App.css'

function AppContent() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App