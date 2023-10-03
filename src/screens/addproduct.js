import axios from 'axios';
import React, { useState } from 'react';

const Addproduct = () => {
  const [createpro, setPro] = useState({
    name: '',
    category: '',
    image: '',
    price: '',
  });

  const { name, category, image, price } = createpro;

  const nameHandle = (e) => {
    const value = e.target.value;
    setPro({ ...createpro, name: value });
  };

  const categoryHandle = (e) => {
    const value = e.target.value;
    setPro({ ...createpro, category: value });
  };

  const imageHandle = (e) => {
    const value = e.target.value;
    setPro({ ...createpro, image: value });
  };

  const priceHandle = (e) => {
    const value = e.target.value;
    setPro({ ...createpro, price: value });
  };

  const productSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8000/newproduct", createpro)
      .then(result => console.log(result))
      .catch(error => console.log(error))
  };

  return (
    <div>
      <form onSubmit={productSubmit}>
        <label>Product Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => nameHandle(e)}
        />

        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={category}
          onChange={(e) => categoryHandle(e)}
        />

        <label>Image:</label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => imageHandle(e)}
        />

        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={price}
          onChange={(e) => priceHandle(e)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Addproduct;
