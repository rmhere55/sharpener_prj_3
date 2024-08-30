
// import React from 'react';
import CartBadge from './CartBadge';

function Header({ cartItems, onClearCart }) {
  return (
    <header className="bg-brown fixed z-[999] w-full px-[4.5vw] py-5 p-4 flex justify-between items-center bg-[#771F0A]">
      <h1 className="text-3xl font-bold text-white">ReactMeals</h1>
      <CartBadge cartItems={cartItems} onClearCart={onClearCart} />
    </header>
  );
}

export default Header;
