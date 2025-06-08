import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './ProductStyles.css';

function ProductItem({ product }){
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart!`); //  Show toast
  };

  return (
    <>
    <div className="product-card">
       <img src={product.images[0]} alt={product.title} /> 
      <h3>{product.title}</h3>
      <h5>Price: ${product.price}</h5>
      <h5>Rating: {product.rating}</h5>
      <Link to={`/product/${product.id}`}>View Details</Link>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
    </>
  );
};

export default ProductItem;
