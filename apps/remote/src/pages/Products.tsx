function Products() {
  const products = [
    { id: 1, name: 'Product 1', price: '$99.99', description: 'A great product' },
    { id: 2, name: 'Product 2', price: '$149.99', description: 'An amazing product' },
    { id: 3, name: 'Product 3', price: '$199.99', description: 'The best product' },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg font-bold text-indigo-600">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products