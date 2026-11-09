import React, { createContext, useReducer, useState, useEffect } from 'react'

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
})

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
})

function cartReducer(cart, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = cart.findIndex(
        (item) => item.id === action.payload.id
      )
      if (existing >= 0) {
        return cart.map((item, i) =>
          i === existing ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...cart, { ...action.payload, qty: 1 }]
    }
    case 'REMOVE': {
      return cart.filter((_, i) => i !== action.payload)
    }
    default:
      return cart
  }
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [])

  const addToCart = (product) => {
    dispatch({ type: 'ADD', payload: product })
  }

  const removeFromCart = (index) => {
    dispatch({ type: 'REMOVE', payload: index })
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export { ThemeProvider, CartProvider }
