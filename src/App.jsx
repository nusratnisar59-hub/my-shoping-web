import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import './App.css'
function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <main className="min-h-screen">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>

      </main>

      <footer className="bg-slate-900 text-white text-center py-6">
        <p>
          © 2026 MyShop. All rights reserved.
        </p>
      </footer>

    </BrowserRouter>
  );
}

export default App;