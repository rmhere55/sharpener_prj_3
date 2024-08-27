import React from 'react';
// import { MdShoppingCart } from 'react-icons/md';
import CartBadge from './CartBadge';

function Header() {
//   const [cartCount, setCartCount] = useState(0);

//   const handleAddToCart = () => {
//     setCartCount(cartCount + 1);
//   };

  return (
    <header className="bg-brown fixed z-[999] w-full px-[4.5vw] py-5  p-4 flex justify-between items-cente bg-[#771F0A]">
      <h1 className="text-3xl font-bold text-white">ReactMeals</h1>
      <CartBadge/>
    </header>
  );
}

export default Header;