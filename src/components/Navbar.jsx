import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
   const { cartCount } = useCart();
  return (
    
    <nav className="w-full bg-[#0f172a] border border-gray-700 rounded-xl">
      <div className="max-w-7xl mx-auto px-6 py-5">

        <div className="flex items-center justify-between">

          {/* Logo */}
            {/* <div className="w-25 h-12 rounded-xl bg-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                Nusrat Nisar
              </span>
            </div> */}

             {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <svg
              width="45"
              height="45"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
            >
              <rect width="100" height="100" rx="20" fill="url(#purpleGradient)" />
              <text
                x="50%"
                y="54%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="white"
                fontFamily="sans-serif"
                fontSize="42"
                fontWeight="800"
                letterSpacing="-2"
              >
                NN
              </text>
              <defs>
                <linearGradient id="purpleGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#a855f7" />
                  <stop offset="1" stopColor="#7e22ce" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-white font-bold text-lg group-hover:text-purple-400 transition">
              Nusrat Nisar
            </span>
          </Link>

          {/* Menu */}

          <Link to="/"
           className="text-white font-semibold hover:text-purple-400 transition"> 
          Home
           </Link>

          <div className="hidden md:flex items-center gap-12">

            <Link
              to="/products"
              className="text-white font-semibold hover:text-purple-400 transition"
            >
              Product
            </Link>

            <Link
              to="/features"
              className="text-white font-semibold hover:text-purple-400 transition"
            >
              Features
            </Link>

            <Link
              to="/marketplace"
              className="text-white font-semibold hover:text-purple-400 transition"
            >
              Marketplace
            </Link>

            <Link
              to="/company"
              className="text-white font-semibold hover:text-purple-400 transition"
            >
              Company
            </Link>
            <Link to="/contact" className="text-white font-semibold hover:text-purple-400 transition"
            >
              Contact
             </Link>

          </div>
           
          {/* Right */}
          <div className="hidden text-white md:flex items-center gap-8">
  <Link to="/cart">
        🛒 Cart

        {cartCount > 0 && (
          <span className="ml-1 px-2 py-0.5 text-xs bg-purple-600 text-white rounded-full font-bold">
            {cartCount}
          </span>
        )}
      </Link>
            <Link
              to="/login"
              className="text-white font-semibold hover:text-purple-400 transition"
            >
              Log in
            </Link>

            <Link
              to="/signup"
              className="bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Sign up
            </Link>

          </div>

          {/* Mobile */}
          <button className="md:hidden text-white text-3xl">
            ☰
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;



// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// const Navbar = () => {
//    const { cartCount } = useCart();  
   
//   return (
//     <nav className="w-full bg-[#0f172a] border border-gray-700 rounded-xl">  
//       <div className="max-w-7xl mx-auto px-6 py-5">

//         <div className="flex items-center justify-between">

//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3 group">
//             <svg
//               width="45"
//               height="45"
//               viewBox="0 0 100 100"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
//             >
//               <rect width="100" height="100" rx="20" fill="url(#purpleGradient)" />
//               <text
//                 x="50%"
//                 y="54%"
//                 dominantBaseline="middle"
//                 textAnchor="middle"
//                 fill="white"
//                 fontFamily="sans-serif"
//                 fontSize="42"
//                 fontWeight="800"
//                 letterSpacing="-2"
//               >
//                 NN
//               </text>
//               <defs>
//                 <linearGradient id="purpleGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
//                   <stop stopColor="#a855f7" />
//                   <stop offset="1" stopColor="#7e22ce" />
//                 </linearGradient>
//               </defs>
//             </svg>
//             <span className="text-white font-bold text-lg group-hover:text-purple-400 transition">
//               Nusrat Nisar
//             </span>
//           </Link>

//           {/* Menu Links */}
//           <div className="hidden md:flex items-center gap-12">
//             <Link to="/" className="text-white font-semibold hover:text-purple-400 transition"> 
//               Home
//             </Link>

//             <Link to="/products" className="text-white font-semibold hover:text-purple-400 transition">
//               Product
//             </Link>

//             <Link to="/features" className="text-white font-semibold hover:text-purple-400 transition">
//               Features
//             </Link>

//             <Link to="/marketplace" className="text-white font-semibold hover:text-purple-400 transition">
//               Marketplace
//             </Link>

//             <Link to="/company" className="text-white font-semibold hover:text-purple-400 transition">
//               Company
//             </Link>
//           </div>
           
//           {/* Right Section */}
//           <div className="hidden text-white md:flex items-center gap-8">
//             <Link to="/cart" className="hover:text-purple-400 transition">
//               🛒 Cart
//               {cartCount > 0 && (
//                 <span className="ml-1 px-2 py-0.5 text-xs bg-purple-600 text-white rounded-full font-bold">  
//                   {cartCount}
//                 </span>
//               )}
//             </Link>

//             <Link to="/login" className="text-white font-semibold hover:text-purple-400 transition">
//               Log in
//             </Link>

//             <Link to="/signup" className="bg-purple-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
//               Sign up
//             </Link>
//           </div>

//           {/* Mobile Button */}
//           <button className="md:hidden text-white text-3xl">
//             ☰
//           </button>

//         </div>

//       </div>
//     </nav>
//   );
// };
// export default Navbar;

