import { useState } from 'react'

function ProductCard({ name, price, image }) {
  const [count, setCount] = useState(0)

  return (
    <article className="product-card">
      <img className="product-card__image" src={image} alt={name} />
      <div className="product-card__body">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__price">{price} ₽</p>
        <p className="product-card__count">
          В корзине: <span className="product-card__badge">{count}</span>
        </p>
        <button
          className="product-card__button"
          onClick={() => setCount(count + 1)}
        >
          Добавить в корзину
        </button>
      </div>
    </article>
  )
}

export default ProductCard
