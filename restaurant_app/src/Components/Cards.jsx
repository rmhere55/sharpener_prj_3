
import React from 'react';

const Cards = ({ cartItems, onClose, onClearCart }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">
        <h3 className="text-lg font-semibold text-gray-800">Your Order</h3>
        {cartItems.length === 0 ? (
          <p className="text-sm font-semibold italic text-gray-600">No items in your cart.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="mb-2">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-xs italic text-gray-600">{item.description}</p>
                <p className="text-xs text-yellow-600">{item.price}</p>
                <p className="text-xs">Amount: {item.amount}</p>
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
          >
            Close
          </button>
          <button 
            onClick={() => {
              onClearCart();
              alert('Order placed!');
            }} 
            className="bg-[#76210C] text-white px-4 py-2 rounded"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;

