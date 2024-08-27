import React, { useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import CartBadge from './CartBadge';

function Header() {
//   const [cartCount, setCartCount] = useState(0);

//   const handleAddToCart = () => {
//     setCartCount(cartCount + 1);
//   };

  return (
    <header className="bg-brown p-4 flex justify-between items-cente bg-red-600">
      <h1 className="text-3xl font-bold text-white">ReactMeals</h1>
      <CartBadge/>
    </header>
  );
}

export default Header;