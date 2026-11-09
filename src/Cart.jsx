import { useContext } from 'react'
import { CartContext } from './Context'

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext)

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  if (cart.length === 0) {
    return (
      <main className="cart-empty">
        <h1 className="cart-empty__title">Корзина пуста</h1>
        <p className="cart-empty__text">Добавьте товары из каталога</p>
      </main>
    )
  }

  return (
    <main className="cart">
      <h1 className="cart__title">Корзина</h1>

      <table className="cart__table">
        <thead>
          <tr>
            <th className="cart__th">Товар</th>
            <th className="cart__th">Цена</th>
            <th className="cart__th">Кол-во</th>
            <th className="cart__th">Сумма</th>
            <th className="cart__th"></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={`${item.id}-${index}`}>
              <td className="cart__td">
                <img
                  className="cart__item-image"
                  src={item.image}
                  alt={item.name}
                />
                <span>{item.name}</span>
              </td>
              <td className="cart__td">{item.price} ₽</td>
              <td className="cart__td">{item.qty}</td>
              <td className="cart__td">{item.price * item.qty} ₽</td>
              <td className="cart__td">
                <button
                  className="cart__remove-btn"
                  onClick={() => removeFromCart(index)}
                >
                  ✕
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart__total">
        <strong>Итого: {total} ₽</strong>
      </div>
    </main>
  )
}

export default Cart
