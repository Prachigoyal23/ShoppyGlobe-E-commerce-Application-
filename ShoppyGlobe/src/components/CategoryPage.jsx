import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from './ProductItem';

function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <div>
      <h2>Category: {category}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-list">
          {products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;

