import './App.css'
import ProductCard from './ProductCard.jsx'

const products = [
  {
    id: 1,
    name: 'Механическая клавиатура',
    price: 5990,
    image: '/products/keyboard.jpg',
  },
  {
    id: 2,
    name: 'Беспроводные наушники',
    price: 7490,
    image: '/products/headphones.webp',
  },
  {
    id: 3,
    name: 'Игровая мышь',
    price: 3290,
    image: '/products/mouse.webp',
  },
  {
    id: 4,
    name: 'Монитор 27"',
    price: 21990,
    image: '/products/monitor.png',
  },
  {
    id: 5,
    name: 'Веб-камера',
    price: 4590,
    image: '/products/webcam.jpg',
  },
  {
    id: 6,
    name: 'USB-хаб',
    price: 1990,
    image: '/products/hub.webp',
  },
]

function App() {
  return (
    <main className="shop">
      <h1 className="shop__title">Магазин периферии</h1>
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

export default App