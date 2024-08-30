
import  { createContext, useContext, useState } from 'react';

// Create the context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(i => i.name === item.name);
      if (existingItem) {
        return prevItems.map(i =>
          i.name === item.name ? { ...i, amount: i.amount + item.amount } : i
        );
      }
      return [...prevItems, item];
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const increaseItemAmount = (itemName) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.name === itemName ? { ...item, amount: item.amount + 1 } : item
      )
    );
  };

  const decreaseItemAmount = (itemName) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item =>
        item.name === itemName
          ? { ...item, amount: item.amount - 1 }
          : item
      ).filter(item => item.amount > 0); // Filter out items with amount 0 or less

      return updatedItems;
    });
  };

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.amount * parseFloat(item.price.slice(1)), 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, clearCart, increaseItemAmount, decreaseItemAmount, getTotalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};
