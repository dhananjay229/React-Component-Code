import React, { useState } from 'react';

// Sample product data
const products = [
  { id: 1, name: 'Product 1', category: 'Category A', price: 10 },
  { id: 2, name: 'Product 2', category: 'Category B', price: 20 },
  { id: 3, name: 'Product 3', category: 'Category A', price: 15 },
  { id: 4, name: 'Product 4', category: 'Category C', price: 25 },
  // Add more products as needed
];

function ProductFilter() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaxPrice, setSelectedMaxPrice] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setSelectedMaxPrice(event.target.value);
  };

  const filterProducts = () => {
    return products.filter((product) => {
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }
      if (selectedMaxPrice && product.price > parseInt(selectedMaxPrice)) {
        return false;
      }
      return true;
    });
  };

  const filteredProducts = filterProducts();

  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label className="block mb-2 font-bold">Category:</label>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="block w-full p-2 border rounded"
        >
          <option value="All">All</option>
          <option value="Category A">Category A</option>
          <option value="Category B">Category B</option>
          <option value="Category C">Category C</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Max Price:</label>
        <input
          type="number"
          value={selectedMaxPrice}
          onChange={handleMaxPriceChange}
          className="block w-full p-2 border rounded"
          placeholder="Enter maximum price"
        />
      </div>
      <h2 className="font-bold text-lg mb-2">Filtered Products:</h2>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.category} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductFilter;
