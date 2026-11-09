import { useContext } from 'react'
import { CartContext } from './Context'

function ProductCard({ name, price, image }) {
  const { addToCart } = useContext(CartContext)

  return (
    <article className="product-card">
      <img className="product-card__image" src={image} alt={name} />
      <div className="product-card__body">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__price">{price} ₽</p>
        <button
          className="product-card__button"
          onClick={() => addToCart({ name, price, image })}
        >
          Добавить в корзину
        </button>
      </div>
    </article>
  )
}

export default ProductCard
