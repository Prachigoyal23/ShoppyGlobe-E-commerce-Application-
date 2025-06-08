import React from 'react';
import { Link } from 'react-router-dom';
import './CartStyle.css';

function OrderSuccess (){
  return (
    <div className="order-success">
      <h2>✅ Order Placed Successfully!</h2>
      <p>Thank you for your purchase.</p>
      <Link to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default OrderSuccess;
