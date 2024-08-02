import React, { createContext, useState, useEffect, useContext  } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    // console.log('savedCartItems:', savedCartItems)
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const [subtotal, setSubtotal] = useState(0);

  const calculateSubtotal = (items) => {
    if (!Array.isArray(items)) return 0;
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  useEffect(() => {
    setSubtotal(calculateSubtotal(cartItems));
    //save cart items to local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (product, quantity) => {
    const existingItem = cartItems.find((item)=> item.id === product.id)
    if (existingItem) {
        setCartItems((prevItems)=>
            prevItems.map((item) => 
                item.id === product.id ? {...item, quantity: item.quantity + quantity} : item
            )
        )
    } else {
        setCartItems((prevItems) => [
            ...prevItems,
            { ...product, quantity },
        ]);
    }
    console.log('subtotal:', subtotal)
  };

  const updateItemQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );

    // const item = cartItems.find((item) => item.id === id);
    // if (item) {
    //   const priceDifference = (quantity - item.quantity) * item.price;
    // }
  };
  const removeItemFromCart = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);

    if (item) {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, subtotal, addItemToCart, updateItemQuantity, removeItemFromCart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
