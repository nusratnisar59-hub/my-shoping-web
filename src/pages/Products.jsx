 import ProductCard from "../components/ProductCard";

function Products() {

    const products = [
  {
    image: "/Headphone.jpg",
    name: "Wireless Headphones",
    category: "Electronics",
    price: "$49.99",
  },
  {
    image: "/Watch.png",
    name: "Smart Watch",
    category: "Electronics",
    price: "$79.99",
  },
  {
    image: "/LeatherBag.jpg",
    name: "Leather Bag",
    category: "Fashion",
    price: "$39.99",
  },
  {
    image: "/Shoes.jpg",
    name: "Running Shoes",
    category: "Shoes",
    price: "$59.99",
  },
  {
    image: "/Glasses.jpg",
    name: "Sunglasses",
    category: "Accessories",
    price: "$24.99",
  },
  {
    image: "/Camera.jpg",
    name: "Digital Camera",
    category: "Electronics",
    price: "$199.99",
  }
  ];

  return (
    <section className="max-w-6xl mx-auto px-5 py-12">

      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Our Products
        </h1>

        <p className="text-gray-500 mt-3">
          Best products at affordable prices.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            category={product.category}
            price={product.price}
            
          />
        ))}

      </div>

    </section>
  );
}

export default Products;


