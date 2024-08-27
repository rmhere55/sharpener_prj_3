import React, { useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";


function CartBadge() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <button 
      className="relative text-white font-bold   hover:bg-[#5e1a14] focus:outline-none focus:ring-2 focus:ring-white-300 font-medium rounded-lg text-sm px-14 rounded-3xl bg-[#8f1915] py-2.5 text-center inline-flex items-center" 
      onClick={handleAddToCart}
    >
      <div className="relative flex items-center">
       <FaCartShopping size={22}  />
      <span className="ml-2  text-lg">Your Cart</span>
        <span className="absolute top-0 right-0 mt-0.9 -mt-1  -mr-7 bg-red-600 text-white font-bold rounded-full px-2 py-1.5 text-xs">
          {cartCount}
        </span>
      </div>
      

    </button>
  );
}

export default CartBadge;
