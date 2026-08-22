import { useState } from "react";
import { Link } from "react-router-dom";
import Products from "../data/Products";

const categories = [
  "All",
  "Dresses",
  "Tops",
  "T-Shirts",
  "Jeans",
  "Jackets",
  "Sandals",
  "Heels",
  "Jewellery",
  "Cosmetics",
  "Bags",
  "Scarves",
  "Wallets",
];

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? Products
      : Products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <section className="min-h-screen bg-[#020617] px-4 sm:px-6 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-purple-400 font-semibold tracking-wider">
            MARKETPLACE
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Discover Your Style
          </h1>

          <p className="text-gray-400 mt-4 leading-7">
            Explore our collection of fashion, jewellery,
            cosmetics, sandals, bags and more.
          </p>

        </div>

        {/* Categories */}
        <div className="mt-10 flex gap-3 overflow-x-auto pb-4">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap px-5 py-3 rounded-xl font-medium transition ${
                selectedCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-[#0f172a] text-gray-300 border border-gray-800 hover:border-purple-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* Result */}
        <div className="flex items-center justify-between mt-8 mb-6">

          <h2 className="text-2xl font-bold text-white">
            {selectedCategory === "All"
              ? "All Products"
              : selectedCategory}
          </h2>

          <p className="text-gray-400">
            {filteredProducts.length} Products
          </p>

        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {filteredProducts.map((product) => (

              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group"
              >

                <div className="bg-[#0f172a] rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500 transition">

                  {/* Image */}
                  <div className="overflow-hidden">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition duration-500"
                    />

                  </div>

                  {/* Details */}
                  <div className="p-5">

                    <div className="flex justify-between gap-3">

                      <div>
                        <h3 className="text-white font-semibold text-lg">
                          {product.name}
                        </h3>

                        <p className="text-gray-400 text-sm mt-1">
                          {product.color}
                        </p>
                      </div>

                      <p className="text-purple-400 font-bold">
                        ${product.price}
                      </p>

                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mt-4">

                      <span className="text-yellow-400">
                        ★
                      </span>

                      <span className="text-gray-400 text-sm">
                        {product.rating}
                      </span>

                    </div>

                    {/* View Product */}
                    <div className="mt-5 w-full bg-gray-800 group-hover:bg-purple-600 text-white text-center py-3 rounded-xl transition">
                      View Product
                    </div>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        ) : (

          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No products found.
            </p>
          </div>

        )}

      </div>
    </section>
  );
};

export default Marketplace;










