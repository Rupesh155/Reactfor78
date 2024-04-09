import React, { useState, useEffect } from 'react';
import dummyFoodData from './CartData';
import { useNavigate } from 'react-router-dom'
import './Cart.css'; 

const Cart = () => {
  const [cartData, setCartData] = useState([]);
   let navigate=   useNavigate()

  useEffect(() => {
    setCartData(dummyFoodData);
  }, [])

  function addCart(){
    navigate('/view')

  }

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <button onClick={ addCart}> ViewCart</button>
      <ul className="cart-items">
        {cartData.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <button>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
