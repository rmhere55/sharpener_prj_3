
// import React from 'react';

// const Cards = ({ cartItems, onClose, onClearCart }) => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">
//         <h3 className="text-lg font-semibold text-gray-800">Your Order</h3>
//         {cartItems.length === 0 ? (
//           <p className="text-sm font-semibold italic text-gray-600">No items in your cart.</p>
//         ) : (
//           <ul>
//             {cartItems.map((item, index) => (
//               <li key={index} className="mb-2">
//                 <p className="text-sm font-semibold">{item.name}</p>
//                 <p className="text-xs italic text-gray-600">{item.description}</p>
//                 <p className="text-xs text-yellow-600">{item.price}</p>
//                 <p className="text-xs">Amount: {item.amount}</p>
//               </li>
//             ))}
//           </ul>
//         )}

//         <div className="flex justify-between items-center mt-4">
//           <button
//             onClick={onClose}
//             className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
//           >
//             Close
//           </button>
//           <button 
//             onClick={() => {
//               onClearCart();
//               alert('Order placed!');
//             }} 
//             className="bg-[#76210C] text-white px-4 py-2 rounded"
//           >
//             Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;


import React from 'react';
import { useCart } from './CartContext';

const Cards = ({ onClose }) => {
  const { cartItems, clearCart, increaseItemAmount, decreaseItemAmount, getTotalAmount } = useCart();

  return (
    <div className="fixed inset-0 flex  items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[28vw]   p-6 rounded-lg shadow-lg w-[300px]">
        <h1 className="text-xl font-bold text-black-800">Your Order</h1>
        {cartItems.length === 0 ? (
          <p className="text-sm font-semibold  text-gray-800">No items in your cart.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="mb-2">
                <p className="text-sm font-semibold">{item.name}</p>
                <div className="flex items-center justify-between">
                  <p className="text-lg">${(parseFloat(item.price.slice(1)) * item.amount).toFixed(2)}</p>
                  <div className="flex items-center">
                    <button 
                      className="text-lg px-2 py-1 border border-gray-300 rounded"
                      onClick={() => decreaseItemAmount(item.name)}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.amount}</span>
                    <button 
                      className="text-lg px-2 py-1 border border-gray-300 rounded"
                      onClick={() => increaseItemAmount(item.name)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-bold">Total: ${getTotalAmount().toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-800  hover:bg-gray-300 px-4 py-2 rounded"
          >
            Close
          </button>
          <button 
            onClick={() => {
              clearCart();
              alert('Order placed!');
              onClose();
            }} 
            className="bg-[#76210C]   hover:bg-[#5e1a14] text-white px-4 py-2 rounded"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
