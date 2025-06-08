import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductItem from './ProductItem';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function SearchResults(){
  const query = useQuery();
  const searchTerm = query.get('q');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/search?q=' + searchTerm)
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, [searchTerm]);

  return (
    <div>
      <h2>Search Results for "{searchTerm}"</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
