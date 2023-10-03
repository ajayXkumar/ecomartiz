import { React, createContext, useContext, useState ,useEffect} from "react";

export const Cartcontext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const [total,settotal] =useState(0);

  const addToCart = (item) => {
    const isItemInCart = cartItem.find((cartItem) => cartItem.name === item.name);

    if (isItemInCart) {
      setCartItem(
        cartItem.map((oneitem) =>
          oneitem.name === item.name
            ? { ...oneitem, quantity: oneitem.quantity + 1 } 
            : oneitem
        )
      );
    } else {
      setCartItem([...cartItem, { ...item, quantity: 1 }]);
    }

  };

  const removeCart = (item) => {
    const isItemInCart = cartItem.find((cartItem) => cartItem.name === item.name);
  
    if (isItemInCart) {
      const updatedCart = cartItem.map((oneitem) =>
        oneitem.name === item.name
          ? { ...oneitem, quantity: oneitem.quantity - 1 }
          : oneitem
      );
  
      // Filter out items with a quantity greater than 0
      const updatedCartFiltered = updatedCart.filter(
        (oneitem) => oneitem.quantity > 0
      );
  
      setCartItem(updatedCartFiltered);
    }
  };
  
  const totalprice = () => {
    let total = 0;
    cartItem.forEach((item) => {
      total += item.quantity * item.price; 
    });
    settotal(total);
  };

  useEffect(() => {
    totalprice(); 
  }, [cartItem]);

  

  return (
    <Cartcontext.Provider
      value={{
        addToCart,
        cartItem,
        removeCart,
        total
      }}
    >
      {children}
    </Cartcontext.Provider>
  );
};
