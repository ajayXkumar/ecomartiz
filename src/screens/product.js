import React, { useContext ,useState,useEffect} from 'react';
import "./products.css";
import { Cartcontext } from '../context/shopcartcontext';
import axios from 'axios';
const Product = () => {
  const { addToCart } = useContext(Cartcontext);
  
  const [arts, setarts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/products') 
      .then((response) => setarts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);
  return (
    <div className='Product'>
       <div className='hero'>
        <div className='hero-text'>
            <p></p>
        </div>
         
       </div>
      {arts.map((item) => (
        <div className="one-product" key={item._id}>
          {/* <img className='img' src={item.image} alt={item.name} /> */}
          <div className='details'>
            <div className='itname'>{item.name} </div>
            <div >&#x20B9;: {item.price}</div>
            <button className='addbtn' onClick={() => addToCart(item)}>Add to cart</button>
            
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;

