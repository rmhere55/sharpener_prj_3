import React from 'react';
import { useCart } from './CartContext';

const Cards = ({ onClose }) => {
  const { cartItems, clearCart, increaseItemAmount, decreaseItemAmount, getTotalAmount } = useCart();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[28vw] p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Order</h1>
        {cartItems.length === 0 ? (
          <p className="text-sm font-semibold text-gray-800">No items in your cart.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item, index) => (
              <li key={index} className="py-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-xl font-bold text-black">{item.name}</h1>
                    <p className="text-lg text-red-800">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      className="text-lg text-white bg-[#76210C] hover:bg-[#5e1a14] px-2 py-1 "
                      onClick={() => decreaseItemAmount(item.name)}
                    >
                      -
                    </button>
                    <span className="text-xl font-semibold">{item.amount}</span>
                    <button
                      className="text-lg text-white bg-[#76210C] hover:bg-[#5e1a14] px-2 py-1 "
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
        <div className="flex justify-between items-center mt-6 border-t pt-4">
          <h1 className="text-xl font-bold text-black">Total Amount</h1>
          <h2 className="text-xl font-bold text-black">${getTotalAmount().toFixed(2)}</h2>
        </div>
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={onClose}
            className="text-gray-800 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full"
          >
            Close
          </button>
          <button
            onClick={() => {
              clearCart();
              alert('Order placed!');
              onClose();
            }}
            className="text-white bg-[#76210C] hover:bg-[#5e1a14] px-4 py-2 rounded-full"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
