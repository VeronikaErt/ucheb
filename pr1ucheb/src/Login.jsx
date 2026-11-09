import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    if (login.trim() && password.trim()) {
      sessionStorage.setItem('user', login.trim())
      navigate('/dashboard', { replace: true })
      return
    }

    setError('Заполните логин и пароль')
  }

  return (
    <main className="auth">
      <form className="auth__form" onSubmit={handleSubmit}>
        <h1 className="auth__title">Вход в аккаунт</h1>
        <p className="auth__hint">
          После успешного входа произойдёт переход на /dashboard
        </p>

        <label className="auth__label">
          Логин
          <input
            className="auth__input"
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="user"
          />
        </label>

        <label className="auth__label">
          Пароль
          <input
            className="auth__input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••"
          />
        </label>

        {error && <p className="auth__error">{error}</p>}

        <button className="auth__button" type="submit">
          Войти
        </button>
      </form>
    </main>
  )
}

export default Login
