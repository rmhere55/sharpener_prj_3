// src/components/Menu.js
import React from "react";

const Menu = () => {
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

  return (
    

    <div className="w-[80%] mx-auto bg-white shadow-lg   rounded-t-2xl overflow-hidden">
  {menuItems.map((item, index) => (
    <div
      key={index}
      className="flex w-full  items-center px-6 py-4 border-b hover:bg-gray-50 transition"
    >
      <div>
        <h3 className="text-lg font-semibold  text-gray-800">{item.name}</h3>
        <p className="text-sm   font-semibold italic text-gray-600">{item.description}</p>
      <h4 className="text-lg font-bold text-yellow-600">{item.price}</h4 >
      </div>
      
    </div>
  ))}
</div>

  );
};

export default Menu;
