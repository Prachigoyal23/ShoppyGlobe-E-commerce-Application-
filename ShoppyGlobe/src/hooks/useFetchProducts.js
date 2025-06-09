import { useState, useEffect } from 'react';

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setCategories([...new Set(data.products.map(p => p.category))]);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { products, categories, loading, error };
};

export default useFetchProducts;

