import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/CartSlice';
import './ProductStyles.css';

function ProductDetail(){
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const Dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      {/* Back to Home button */}
      <button className="back-button" onClick={()=> navigate('/')}>Back to Home</button>
      {/* Details */}
      <img width="100px" height='100px' src={product.images[0]} alt="" /> 
      <h2>{product.title}</h2>
      <p><strong>Description: </strong>{product.description}</p>
      <p><strong>Price: ${product.price}</strong></p>
      <p><strong>Rating: {product.rating}</strong></p>
      <p><strong>Warranty: </strong>{product.warrantyInformation}</p>
      <button onClick={()=> Dispatch(addToCart(product))}>Add to Cart</button>
      
    </div>
  );
};

export default ProductDetail;


