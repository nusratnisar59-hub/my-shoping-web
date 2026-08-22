import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Feature from "./components/Feature";
import Marketplace from "./components/Marketplace";
import Company from "./components/Company";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>

      <CartProvider>

        <div className="min-h-screen bg-[#020617]">

          <Navbar />
          
          <Routes>

            {/* Home */}
            <Route
              path="/"
              element={<Home />}
            />

            {/* Products */}
            <Route
              path="/products"
              element={<Products />}
            />

            {/* Product Detail */}
            <Route
              path="/product/:id"
              element={<ProductDetail />}
            />

            {/* Features */}
            <Route
              path="/features"
              element={<Feature />}
            />

            {/* Marketplace */}
            <Route
              path="/marketplace"
              element={<Marketplace />}
            />

            {/* Company */}
            <Route
              path="/company"
              element={<Company />}
            />

            {/* Contact */}
            <Route
              path="/contact"
              element={<Contact />}
            />

            {/* Login */}
            <Route
              path="/login"
              element={<Login />}
            />

            {/* Signup */}
            <Route
              path="/signup"
              element={<Signup />}
            />
            <Route
                path="/cart"
                   element={<Cart />}
                           />
            <Route
                path="/checkout"
                   element={<Checkout />}
                           />
          </Routes>

          <Footer />

        </div>

      </CartProvider>

    </BrowserRouter>
  );
}

export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import Home from "./components/Home";
// import Products from "./components/Products";
// import ProductDetail from "./components/ProductDetail";
// import Feature from "./components/Feature";
// import Marketplace from "./components/Marketplace";
// import Company from "./components/Company";
// import Contact from "./components/Contact";
// import Login from "./components/Login";
// import Signup from "./components/Signup";

// function App() {
//   return (
//     <BrowserRouter>

//       <div className="min-h-screen bg-[#020617]">

//         <Navbar />

//         <Routes>

//           {/* Home */}
//           <Route
//             path="/"
//             element={<Home />}
//           />

//           {/* Products */}
//           <Route
//             path="/products"
//             element={<Products />}
//           />

//           {/* Product Detail */}
//           <Route
//             path="/product/:id"
//             element={<ProductDetail />}
//           />

//           {/* Features */}
//           <Route
//             path="/features"
//             element={<Feature />}
//           />

//           {/* Marketplace */}
//           <Route
//             path="/marketplace"
//             element={<Marketplace />}
//           />

//           {/* Company */}
//           <Route
//             path="/company"
//             element={<Company />}
//           />

//           {/* Contact */}
//           <Route
//             path="/contact"
//             element={<Contact />}
//           />

//           {/* Login */}
//           <Route
//             path="/login"
//             element={<Login />}
//           />

//           {/* Signup */}
//           <Route
//             path="/signup"
//             element={<Signup />}
//           />

//         </Routes>

//         <Footer />

//       </div>

//     </BrowserRouter>
//   );
// }

// export default App;

