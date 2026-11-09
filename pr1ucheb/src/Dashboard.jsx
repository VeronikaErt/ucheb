import { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { CartContext } from './Context'

function Dashboard() {
  const { cart } = useContext(CartContext)
  const navigate = useNavigate()
  const user = sessionStorage.getItem('user')

  if (!user) {
    return <Navigate to="/login" replace />
  }

  const positions = cart.reduce((sum, item) => sum + item.qty, 0)
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <main className="dashboard">
      <h1 className="dashboard__title">Личный кабинет</h1>
      <p className="dashboard__welcome">Пользователь: {user}</p>

      <div className="dashboard__stats">
        <div className="dashboard__stat">
          <span className="dashboard__stat-value">{positions}</span>
          <span className="dashboard__stat-label">Позиций в корзине</span>
        </div>
        <div className="dashboard__stat">
          <span className="dashboard__stat-value">{total} ₽</span>
          <span className="dashboard__stat-label">Сумма заказов</span>
        </div>
      </div>

      <div className="dashboard__actions">
        <button
          className="dashboard__button"
          onClick={() => navigate('/cart')}
        >
          Перейти в корзину
        </button>
        <button
          className="dashboard__button dashboard__button--ghost"
          onClick={() => {
            sessionStorage.removeItem('user')
            navigate('/login', { replace: true })
          }}
        >
          Выйти
        </button>
      </div>
    </main>
  )
}

export default Dashboard
