
import ProductsData from "../data/products";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="min-h-screen bg-[#020617] px-4 sm:px-6 py-12 md:py-16">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10">

          <p className="text-purple-400 font-semibold">
            OUR COLLECTION
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Customers also purchased
          </h1>

          <p className="text-gray-400 mt-4">
            Discover our latest fashion and beauty products.
          </p>

        </div>


        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {ProductsData.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Products;

// import React from "react";
// import { useCart } from "../context/CartContext";

// const products = [
//   {
//     id: 1,
//     name: "Basic Tee",
//     color: "Black",
//     price: 35,
//     image:
//       "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
//   },
//   {
//     id: 2,
//     name: "Basic Tee",
//     color: "Aspen White",
//     price: 35,
//     image:
//       "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=700&q=80",
//   },
//   {
//     id: 3,
//     name: "Basic Tee",
//     color: "Charcoal",
//     price: 35,
//     image:
//       "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=700&q=80",
//   },
//   {
//     id: 4,
//     name: "Artwork Tee",
//     color: "Iso Dots",
//     price: 35,
//     image:
//       "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=80",
//   },
// ];

// function Products() {
//   const { addToCart } = useCart();

//   return (
//     <section className="bg-[#020617] text-white min-h-screen px-6 py-16">
//       <div className="max-w-7xl mx-auto">

//         <p className="text-purple-400 font-semibold uppercase">
//           Our Collection
//         </p>

//         <h1 className="text-4xl md:text-5xl font-bold mt-3">
//           All Products
//         </h1>

//         <p className="text-slate-400 text-lg mt-4">
//           Discover our latest products.
//         </p>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">

//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-[#0f172a] border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500 transition"
//             >

//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-80 object-cover"
//               />

//               <div className="p-5">

//                 <div className="flex justify-between items-center">
//                   <h2 className="text-lg font-bold">
//                     {product.name}
//                   </h2>

//                   <span className="font-bold">
//                     ${product.price}
//                   </span>
//                 </div>

//                 <p className="text-slate-400 mt-2">
//                   {product.color}
//                 </p>

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
//     </section>
//   );
// }

// export default Products;


// import productData from "../data/Products";
// import ProductCard from "./ProductCard";

// const ProductsPage = () => {
//   return (
//     <section className="min-h-screen bg-[#020617] px-6 py-16">

//       <div className="max-w-7xl mx-auto">

//         <p className="text-purple-400 font-semibold mb-2">
//           OUR COLLECTION
//         </p>

//         <h1 className="text-4xl md:text-5xl font-bold text-white">
//           Customers also purchased
//         </h1>

//         <p className="text-gray-400 mt-3 mb-10">
//           Discover our most popular products.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

//           {productData.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//             />
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// };

// export default ProductsPage;


