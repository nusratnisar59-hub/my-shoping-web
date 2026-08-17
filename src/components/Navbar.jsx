import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">

        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          MyShop
        </Link>

        <div className="flex gap-6 text-sm font-medium">
          <Link
            to="/"
            className="hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="hover:text-blue-600"
          >
            Products
          </Link>

          <Link
            to="/contact"
            className="hover:text-blue-600"
          >
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;