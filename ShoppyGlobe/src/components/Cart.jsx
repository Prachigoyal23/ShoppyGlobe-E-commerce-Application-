import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
import Checkout from './Checkout';
import './CartStyle.css';


function Cart(){
  const cartItems = useSelector(state => state.cart);
  const Navigate = useNavigate();

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {/* <button className="back-home" onClick={()=>{Navigate('/')}}>Start Shopping</button> */}
      {cartItems.length === 0 ? <p>You haven’t added anything yet.</p> : (
        cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))
      )}
      <button className="back-home" onClick={()=>{Navigate('/')}}>Start Shopping</button>


      <Checkout/>

    </div>
  );
};

export default Cart;
