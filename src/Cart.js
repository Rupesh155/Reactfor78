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



// import React, { useState, useEffect } from 'react';
// import dummyFoodData from './CartData';
// import { useNavigate } from 'react-router-dom';
// import './Cart.css';

// const Cart = () => {
//   const [cartData, setCartData] = useState([]);
//   let [cart,SetCart]=useState([])
//   let navigate=useNavigate()

//   useEffect(() => {
//     // setCartData(dummyFoodData)
//     setCartData(dummyFoodData.map(item => ({ ...item, quantity: 0 })));
//   }, []);

//   const handleAdd = (id) => {
//     const updatedCart = cartData.map(item =>
//       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     setCartData(updatedCart);
//     const productToAdd = { ...cartData.find(item => item.id === id) };
//     setCart([...cart, productToAdd]);
//   };

//   const handleRemove = (id) => {
//     const updatedCart = cartData.map(item =>
//       item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
//     );
//     setCartData(updatedCart);
//    };

//   const getTotalPrice = () => {
//     return cartData.reduce((total, item) => 
//     total + item.price * item.quantity, 0);
//   };
//   const handleViewCart = () => {
//     navigate('/view')

//   };
//   const addtoCart = (id) => {
//     console.log(id);
//     // const updatedCart=cartData.map((data)=>data.id===shivi? 
//     // {...data,quantity:1}:data)
//     const updatedCart = cartData.map(data =>
//       data.id === id ? { ...data, quantity: 1 } : data
//     );
//     setCartData(updatedCart);

//   };
//   return (
//     <div className="cart-container">
//       <h2>Cart</h2>

//       <button onClick={handleViewCart}>View Cart</button>

//       <p>Total Price: ${getTotalPrice()}</p>
//       <ul className="cart-items">
//         {cartData.map(item => (
//           <li key={item.id} className="cart-item">
//             <img src={item.image} alt={item.name} className="item-image" />
//             <div className="item-details">
//               <h3>{item.name}</h3>
//               <p>{item.description}</p>
//               <p>Price: ${item.price}</p>
//               <p> quantity:{item.quantity}  </p>
//           {
//             item.quantity===0? (  <button  onClick={()=>addtoCart(item.id)}> addtoCart</button>):(<>
//             <button onClick={() => handleAdd(item.id)}> +</button>
//             <button onClick={() =>handleRemove(item.id)} > -</button>
//             </>)
//           }

//             </div>
//           </li>
//         ))}
//       </ul>
    
//     </div>
//   );
// };

// export default Cart;




import React, { useState, useEffect } from 'react';
import dummyFoodData from './CartData';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCartData(dummyFoodData.map(item => ({ ...item, quantity: 0 })));
  }, []);

  const handleAdd = (id) => {
    const updatedCart = cartData.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartData(updatedCart);
    const productToAdd = { ...cartData.find(item => item.id === id) };
    setCart([...cart, productToAdd]);
  };

  const handleRemove = (id) => {
    const updatedCart = cartData.map(item =>
      item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartData(updatedCart);
  };

  const getTotalPrice = () => {
    return cartData.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleViewCart = () => {
    navigate('/view', { state: { cart } });
  };

  const addtoCart = (id) => {
    const updatedCartData = cartData.map(data =>
      data.id === id ? { ...data, quantity: 1 } : data
    );
    setCartData(updatedCartData)
    const productToAdd = { ...cartData.find(item => item.id === id), quantity: 1 };
    // setCartData(updatedCartData);
    setCart([...cart, productToAdd]);
  };
  

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <button onClick={handleViewCart}>View Cart</button>
      <p>Total Price: ${getTotalPrice()}</p>
      <ul className="cart-items">
        {cartData.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <p>quantity:{item.quantity}</p>
              {item.quantity === 0 ? (
                <button onClick={() => addtoCart(item.id)}>Add to Cart</button>
              ) : (
                <>
                  <button onClick={() => handleAdd(item.id)}>+</button>
                  <button onClick={() => handleRemove(item.id)}>-</button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;



// {item.quantity === 0 ? (
//   <button onClick={() => handleAddToCart(item.id)}>Add to Cart</button>
// ) : (
//   <div>
//     <button onClick={() => handleRemove(item.id)}>-</button>
//     {/* <span>{item.quantity}</span> */}
//     <button onClick={() => handleAdd(item.id)}>+</button>
//   </div>
// )}




