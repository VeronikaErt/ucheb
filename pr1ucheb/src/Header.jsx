import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext, CartContext } from './Context'

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { cart } = useContext(CartContext)

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0)

  return (
    <header className="header">
      <div className="header__inner">
        <NavLink to="/" className="header__logo">
          Магазин периферии
        </NavLink>

        <nav className="header__nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `header__link ${isActive ? 'header__link--active' : ''}`
            }
          >
            Каталог
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `header__link ${isActive ? 'header__link--active' : ''}`
            }
          >
            Корзина
            {totalItems > 0 && (
              <span className="header__badge">{totalItems}</span>
            )}
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `header__link ${isActive ? 'header__link--active' : ''}`
            }
          >
            Вход
          </NavLink>
        </nav>

        <button
          className="header__theme-toggle"
          onClick={toggleTheme}
          aria-label="Переключить тему"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  )
}

export default Header
