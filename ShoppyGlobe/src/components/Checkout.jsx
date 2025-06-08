import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './CartStyle.css';

function Checkout(){
  const cartItems = useSelector(state => state.cart);
  const totalAmount = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);
  const Navigate = useNavigate();

  if (cartItems.length === 0) return null;

  function handleCheckout(){
    Navigate('/checkout-success')
  }

  return (
    <div className="checkout-section">
      <h3>Total Amount: ${totalAmount}</h3>
      <button onClick={handleCheckout}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Checkout;

