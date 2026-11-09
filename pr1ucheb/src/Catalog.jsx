import ProductCard from './ProductCard'
import { products } from './products'

function Catalog() {
  return (
    <main className="shop">
      <h1 className="shop__title">Каталог товаров</h1>
      <p className="shop__subtitle">Товаров в каталоге: {products.length}</p>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </main>
  )
}

export default Catalog