import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-[#1e1e2f] border border-gray-800 rounded-xl p-4 flex flex-col justify-between shadow-lg hover:border-purple-500 transition duration-300">
      <div>
        {/* Product Image */}
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        </Link>

        {/* Product Title */}
        <h3 className="text-white font-semibold text-lg mb-2 truncate">
          {product.title}
        </h3>

        {/* Product Price */}
        <p className="text-purple-400 font-bold text-xl mb-4">
          ${product.price}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-2">
        <Link 
          to={`/product/${product.id}`}
          className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-center py-2 rounded-lg font-medium transition"
        >
          Details
        </Link>

        <button 
          onClick={() => addToCart(product)}
          className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-2 rounded-lg font-medium transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;



// import React from "react";
// import { useCart } from "../context/CartContext";

// const marketplaceProducts = [
//   {
//     id: 101,
//     name: "Classic White Tee",
//     color: "White",
//     price: 35,
//     image:
//       "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
//   },
//   {
//     id: 102,
//     name: "Black Street Tee",
//     color: "Black",
//     price: 40,
//     image:
//       "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=700&q=80",
//   },
//   {
//     id: 103,
//     name: "Artwork Tee",
//     color: "Artwork",
//     price: 45,
//     image:
//       "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=80",
//   },
//   {
//     id: 104,
//     name: "Casual Shirt",
//     color: "Grey",
//     price: 50,
//     image:
//       "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
//   },
// ];

// function Marketplace() {
//   const { addToCart } = useCart();

//   return (
//     <div className="min-h-screen bg-[#020617] text-white px-6 py-16">

//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-12">

//           <p className="text-purple-400 font-semibold uppercase">
//             Marketplace
//           </p>

//           <h1 className="text-4xl md:text-5xl font-bold mt-3">
//             Shop Our Marketplace
//           </h1>

//           <p className="text-slate-400 text-lg mt-4">
//             Discover products from our marketplace.
//           </p>

//         </div>


//         {/* Products */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

//           {marketplaceProducts.map((product) => (

//             <div
//               key={product.id}
//               className="bg-[#0f172a] border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500 transition"
//             >

//               {/* Image */}
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-80 object-cover"
//               />

//               {/* Details */}
//               <div className="p-5">

//                 <div className="flex justify-between items-center">

//                   <h2 className="text-lg font-bold">
//                     {product.name}
//                   </h2>

//                   <span className="font-bold text-purple-400">
//                     ${product.price}
//                   </span>

//                 </div>

//                 <p className="text-slate-400 mt-2">
//                   {product.color}
//                 </p>


//                 {/* ADD TO CART */}
//                 <button
//                   onClick={() => addToCart(product)}
//                   className="w-full mt-5 bg-purple-500 hover:bg-purple-600 py-3 rounded-xl font-bold transition"
//                 >
//                   🛒 Add to Cart
//                 </button>

//               </div>

//             </div>

//           ))}

//         </div>

//       </div>

//     </div>
//   );
// }

// export default Marketplace;