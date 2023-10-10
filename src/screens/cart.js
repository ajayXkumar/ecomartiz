import React, { useContext, useEffect } from 'react';
import { Cartcontext } from '../context/shopcartcontext';
import "./cart.css"
const Cart = () => {
  const { cartItem ,addToCart,removeCart,total,totalprice} = useContext(Cartcontext);
  
  console.log("cartItem in Cart component:", cartItem);

  //localstorage
  // useEffect(() => {
  //   localStorage.setItem('Cart', JSON.stringify(cartItem));
  // }, [cartItem]);
  

  return (
    <div className='cart'>
     
      {
        cartItem.map((item) => (
           <div className='allpro'>
          <div className='oneitem' key={item._id} ><img className="img2" src={item.image} />
           {item.name}
          <div> Rs {item.price} </div>
           <button className='quantity-button' onClick={()=>{removeCart(item)}}> - </button>
           <div>{item.quantity}</div>
           <button className="quantity-button" onClick={()=>{addToCart(item)}}> + </button>
           </div>
           
          </div>
        ))
      }
      <div>Total Rs {total}/-</div> 
      <button className='checkout-button'>checkout</button>
    </div>
  );
}

export default Cart;


