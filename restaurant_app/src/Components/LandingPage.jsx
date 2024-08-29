
// import React, { useState } from "react";
// import Header from "./Header";
// import Menu from "./Menu";

// const LandingPage = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const handleAddToCart = (item) => {
//     setCartItems((prevItems) => [...prevItems, item]);
//   };

//   const handleClearCart = () => {
//     setCartItems([]);
//   };

//   return (
//     <div className="min-h-screen">
//       {/* Header Section */}
//       <Header cartItems={cartItems} onClearCart={handleClearCart} />

//       {/* Main Content Section */}
//       <div
//         className="bg-cover bg-center min-h-screen w-full flex flex-col items-center justify-center col-auto"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
//         }}
//       >
//         <div className="bg-gray-800 bg-opacity-70 p-8 rounded-lg mt-72 shadow-lg text-center max-w-lg mx-auto text-white">
//           <h1 className="text-4xl font-bold mb-4">
//             Delicious Food, Delivered To You
//           </h1>
//           <p className="mb-4">
//             Choose your favorite meal from our broad selection of available
//             meals and enjoy a delicious lunch or dinner at home.
//           </p>
//           <p>
//             All our meals are cooked with high-quality ingredients, just-in-time
//             and of course by experienced chefs!
//           </p>
//         </div>

//         {/* Menu Section */}
//         <div className="flex mt-[5%] items-center justify-center w-[65%] my-8">
//           <Menu onAddToCart={handleAddToCart} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;


import React from "react";
import Header from "./Header";
import Menu from "./Menu";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Main Content Section */}
      <div
        className="bg-cover bg-center min-h-screen w-full flex flex-col items-center justify-center col-auto"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="bg-gray-800 bg-opacity-70 p-8 rounded-lg mt-72 shadow-lg text-center max-w-lg mx-auto text-white">
          <h1 className="text-4xl font-bold mb-4">
            Delicious Food, Delivered To You
          </h1>
          <p className="mb-4">
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </div>

        {/* Menu Section */}
        <div className="flex mt-[5%] items-center justify-center w-[65%] my-8">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
