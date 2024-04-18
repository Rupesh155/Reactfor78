import React from 'react';
import { useLocation } from 'react-router-dom';

const ViewCart = () => {
  const location = useLocation();
  const { cart } = location.state;
  console.log(cart,"dddd");

  return (
    <div>
      <h2>View Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>      
    </div>
  );
};

export default ViewCart;


