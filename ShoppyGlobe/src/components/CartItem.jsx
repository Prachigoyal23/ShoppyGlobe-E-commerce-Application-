import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/CartSlice';
import './CartStyle.css';

function CartItem({ item }){
  const dispatch = useDispatch();

  function handleDecrease(){
    if(item.quantity>1){
      dispatch(updateQuantity({id: item.id, quantity: item.quantity-1}))
    }
  }

  function handleIncrease(){
    dispatch(updateQuantity({id: item.id, quantity: item.quantity+1}))
  }

  function handleRemove(){
    dispatch(removeFromCart(item.id));
  }
  
  return (
    <div className="cart-item">
      <img src={item.images[0]} alt={item.title} />
      
      <div className="cart-item-details">
        <h4>{item.title}</h4>
        <p>Price: ${item.price}</p>
          Quantity:
          <button onClick={handleDecrease}>-</button>
          {item.quantity}
          <button onClick={handleIncrease}>+</button>
        </div>
        <p><strong>Total: ${item.price * item.quantity}</strong></p>
      
      <button className="remove" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
