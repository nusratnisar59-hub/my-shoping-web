import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Products from "../data/Products";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  // Find product by id
  const product = Products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <p className="text-white text-2xl">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    // Product ke sath selected quantity bhi context mein bhej rahe hain
    addToCart({ ...product, quantity });
    alert("Product added to cart!");
  };

  return (
    <section className="min-h-screen bg-[#020617] px-6 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <Link 
          to="/products"
          className="text-purple-400 hover:text-purple-300 mb-6 inline-block"
        >
          ← Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
          {/* Product Image */}
          <div className="bg-[#1e1e2f] rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full aspect-square object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-start">
            <span className="text-purple-400 font-semibold">{product.category}</span>
            
            <h1 className="text-3xl font-bold text-white mt-2">
              {product.title}
            </h1>

            <p className="text-2xl font-bold text-white mt-4">
              ${product.price}
            </p>

            <p className="text-gray-400 leading-7 mt-4">
              {product.description}
            </p>

            {/* Quantity Selector */}
            <div className="mt-8">
              <p className="text-white font-semibold mb-2">Quantity</p>
              
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg bg-gray-800 text-white font-bold hover:bg-gray-700 transition"
                >
                  -
                </button>

                <span className="text-white text-lg font-semibold">
                  {quantity}
                </span>

                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg bg-gray-800 text-white font-bold hover:bg-gray-700 transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button 
              onClick={handleAddToCart}
              className="w-full mt-8 bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-bold text-lg transition shadow-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;

// import { useCart } from "../context/CartContext";
// import { useParams, Link } from "react-router-dom";
// import { useState } from "react";
// import Products from "../data/Products";

// const ProductDetail = () => {
//   const { id } = useParams();

//   const product = Products.find(
//     (item) => item.id === Number(id)
//   );

//   const [quantity, setQuantity] = useState(1);

//   if (!product) {
//     return (
//       <div className="min-h-screen bg-[#020617] flex items-center justify-center">
//         <h1 className="text-white text-3xl">
//           Product not found
//         </h1>
//       </div>
//     );
//   }

//   const addToCart = () => {
//     const oldCart =
//       JSON.parse(localStorage.getItem("cart")) || [];

//     const existingProduct = oldCart.find(
//       (item) => item.id === product.id
//     );

//     if (existingProduct) {
//       existingProduct.quantity += quantity;
//     } else {
//       oldCart.push({
//         ...product,
//         quantity,
//       });
//     }

//     localStorage.setItem(
//       "cart",
//       JSON.stringify(oldCart)
//     );

//     alert("Product added to cart!");
//   };

//   return (
//     <section className="min-h-screen bg-[#020617] px-6 py-16">
//       <div className="max-w-7xl mx-auto">

//         <Link
//           to="/products"
//           className="text-purple-400 hover:text-purple-300"
//         >
//           ← Back to Products
//         </Link>

//         <div className="grid md:grid-cols-2 gap-12 mt-8">

//           {/* Product Image */}
//           <div className="bg-[#0f172a] rounded-2xl overflow-hidden">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full aspect-square object-cover"
//             />
//           </div>

//           {/* Product Details */}
//           <div className="flex flex-col justify-center">

//             <p className="text-purple-400 font-semibold">
//               {product.color}
//             </p>

//             <h1 className="text-4xl font-bold text-white mt-3">
//               {product.name}
//             </h1>

//             <p className="text-3xl font-bold text-white mt-5">
//               ${product.price}
//             </p>

//             <p className="text-gray-400 leading-7 mt-6">
//               {product.description}
//             </p>

//             {/* Quantity */}
//             <div className="mt-8">
//               <p className="text-white font-semibold mb-3">
//                 Quantity
//               </p>

//               <div className="flex items-center gap-4">

//                 <button
//                   onClick={() =>
//                     setQuantity(Math.max(1, quantity - 1))
//                   }
//                   className="w-10 h-10 rounded-lg bg-gray-800 text-white"
//                 >
//                   -
//                 </button>

//                 <span className="text-white text-lg">
//                   {quantity}
//                 </span>

//                 <button
//                   onClick={() =>
//                     setQuantity(quantity + 1)
//                   }
//                   className="w-10 h-10 rounded-lg bg-gray-800 text-white"
//                 >
//                   +
//                 </button>

//               </div>
//             </div>

//             {/* Add To Cart */}
//             <button
//               onClick={addToCart}
//               className="mt-8 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition"
//             >
//               Add to Cart
//             </button>

//             <div className="border-t border-gray-800 mt-10 pt-6">

//               <p className="text-gray-500">
//                 Material
//               </p>

//               <p className="text-white mt-1">
//                 Premium Cotton
//               </p>

//               <p className="text-gray-500 mt-5">
//                 Availability
//               </p>

//               <p className="text-green-400 mt-1">
//                 In Stock
//               </p>

//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductDetail;