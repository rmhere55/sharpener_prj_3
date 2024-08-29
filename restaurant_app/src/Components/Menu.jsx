

// import React, { useState } from "react";

// const Menu = ({ onAddToCart }) => {
//   const menuItems = [
//     {
//       name: "Sushi",
//       description: "Finest fish and veggies",
//       price: "$22.99",
//     },
//     {
//       name: "Schnitzel",
//       description: "A German specialty!",
//       price: "$16.50",
//     },
//     {
//       name: "Barbecue Burger",
//       description: "American, raw, meaty",
//       price: "$12.99",
//     },
//     {
//       name: "Green Bowl",
//       description: "Healthy...and green...",
//       price: "$18.99",
//     },
//   ];

//   return (
//     <div className="w-[80%] mx-auto bg-white shadow-lg rounded-t-2xl overflow-hidden">
//       {menuItems.map((item, index) => (
//         <div
//           key={index}
//           className="flex w-full items-center justify-between px-6 py-4 border-b hover:bg-gray-50 transition"
//         >
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
//             <p className="text-sm font-semibold italic text-gray-600">
//               {item.description}
//             </p>
//             <h4 className="text-lg font-bold text-yellow-600">{item.price}</h4>
//           </div>
//           <form className="flex items-center space-x-4">
//             <div className="flex items-center space-x-2">
//               <label htmlFor={`amount-${index}`} className="text-sm font-semibold">
//                 Amount
//               </label>
//               <input
//                 id={`amount-${index}`}
//                 type="number"
//                 defaultValue="1"
//                 min="1"
//                 className="w-12 border rounded px-2 py-1 text-center"
//               />
//             </div>
//             <button
//               type="button" 
//               className="bg-[#76210C] text-white font-semibold rounded px-4 py-2 hover:bg-[#5e1a14] transition"
//               onClick={() => onAddToCart({
//                 ...item,
//                 amount: parseInt(document.getElementById(`amount-${index}`).value, 10),
//               })}
//             >
//               + Add
//             </button>
//           </form>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Menu;
import React from "react";
import { useCart } from './CartContext';

const Menu = () => {
  const { addItem } = useCart();
  
  const menuItems = [
    {
      name: "Sushi",
      description: "Finest fish and veggies",
      price: "$22.99",
    },
    {
      name: "Schnitzel",
      description: "A German specialty!",
      price: "$16.50",
    },
    {
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: "$12.99",
    },
    {
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: "$18.99",
    },
  ];

  const handleAddToCart = (item, amount) => {
    addItem({ ...item, amount });
  };

  return (
    <div className="w-[80%] mx-auto bg-white shadow-lg rounded-t-2xl overflow-hidden">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="flex w-full items-center justify-between px-6 py-4 border-b hover:bg-gray-50 transition"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-sm font-semibold italic text-gray-600">
              {item.description}
            </p>
            <h4 className="text-lg font-bold text-yellow-600">{item.price}</h4>
          </div>
          <form className="flex items-center space-x-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center space-x-2">
              <label htmlFor={`amount-${index}`} className="text-sm font-semibold">
                Amount
              </label>
              <input
                id={`amount-${index}`}
                type="number"
                defaultValue="1"
                min="1"
                className="w-12 border rounded px-2 py-1 text-center"
              />
            </div>
            <button
              type="button" 
              className="bg-[#76210C] text-white font-semibold rounded px-4 py-2 hover:bg-[#5e1a14] transition"
              onClick={() => {
                const amount = parseInt(document.getElementById(`amount-${index}`).value, 10);
                handleAddToCart(item, amount);
              }}
            >
              + Add
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default Menu;

