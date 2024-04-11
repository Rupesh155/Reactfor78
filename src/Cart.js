// import React, { useState, useEffect } from 'react';
// import dummyFoodData from './CartData';
// import { useNavigate } from 'react-router-dom'
// import './Cart.css'; 

// const Cart = () => {
//   const [cartData, setCartData] = useState([]);
//    let navigate=   useNavigate()

//   useEffect(() => {
//     setCartData(dummyFoodData);
//   }, [])

//   function addCart(){
//     navigate('/view')

//   }

//   return (
//     <div className="cart-container">
//       <h2>Cart</h2>
//       <button onClick={ addCart}> ViewCart</button>
//       <ul className="cart-items">
//         {cartData.map(item => (
//           <li key={item.id} className="cart-item">
//             <img src={item.image} alt={item.name} className="item-image" />
//             <div className="item-details">
//               <h3>{item.name}</h3>
//               <p>{item.description}</p>
//               <p>Price: ${item.price}</p>
//               <button>Add to Cart</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Cart;



import React, { useState, useEffect } from 'react';
import dummyFoodData from './CartData';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [cart,SetCart]=useState([])
  const navigate = useNavigate();

  useEffect(() => {
    // setCartData(dummyFoodData)
    setCartData(dummyFoodData.map(item => ({ ...item, quantity: 0 })));
  }, []);

  const handleAdd = (id) => {
    const updatedCart = cartData.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartData(updatedCart);
  };

  const handleRemove = (id) => {
    // const updatedCart = cartData.map(item =>
    //   item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
    // );
    // setCartData(updatedCart);
   };

  const getTotalPrice = () => {
    // return cartData.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleViewCart = () => {
    navigate('/view');

  };

  const handleAddToCart = (id) => {
    console.log(id);
    const updatedCart = cartData.map(item =>
      item.id === id ? { ...item, quantity: 1 } : item
    );
    setCartData(updatedCart);

  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <button onClick={handleViewCart}>View Cart</button>
      <ul className="cart-items">
        {cartData.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              {item.quantity === 0 ? (
                <button onClick={() => handleAddToCart(item.id)}>Add to Cart</button>
              ) : (
                <div>
                  <button onClick={() => handleRemove(item.id)}>-</button>
                  {/* <span>{item.quantity}</span> */}
                  <button onClick={() => handleAdd(item.id)}>+</button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <p>Total Price: ${getTotalPrice()}</p>
    </div>
  );
};

export default Cart;


