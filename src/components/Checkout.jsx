import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const navigate = useNavigate();
  const { cartTotal, clearCart } = useCart(); // Agar clearCart function maujood hai toh theek, warna hata bhi sakti hain

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully! Thank you for your purchase.");
    navigate("/"); // Payment ke baad home page par bhej dega
  };

  return (
    <section className="min-h-screen bg-[#020617] text-white px-6 py-16">
      <div className="max-w-2xl mx-auto bg-[#0f172a] border border-slate-800 rounded-3xl p-8 shadow-2xl">
        
        <h1 className="text-3xl font-bold mb-2">Checkout Details</h1>
        <p className="text-slate-400 mb-8">Please enter your shipping and payment details.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Personal Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-purple-400">Shipping Information</h2>
            
            <div>
              <label className="block text-slate-300 mb-2 text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Nusrat Nisar"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-2 text-sm font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="malaikanisar67@gmail.com"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-2 text-sm font-medium">Delivery Address</label>
              <textarea
                name="address"
                required
                rows="2"
                value={formData.address}
                onChange={handleChange}
                placeholder="House #, Street, City (e.g., Karachi)"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          {/* Payment Info */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <h2 className="text-xl font-semibold text-purple-400">Payment Details</h2>

            <div>
              <label className="block text-slate-300 mb-2 text-sm font-medium">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                required
                maxLength="19"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="4111 2222 3333 4444"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 mb-2 text-sm font-medium">Expiry Date</label>
                <input
                  type="text"
                  name="expiry"
                  required
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2 text-sm font-medium">CVC / CVV</label>
                <input
                  type="password"
                  name="cvc"
                  required
                  maxLength="4"
                  placeholder="123"
                  value={formData.cvc}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
          </div>

          {/* Total & Submit Button */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <span className="text-lg font-medium text-slate-300">Total Amount:</span>
            <span className="text-2xl font-bold text-purple-400">
              ${cartTotal ? cartTotal.toFixed(0) : "0"}
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl transition cursor-pointer shadow-lg shadow-purple-600/30"
          >
            Confirm & Pay Now
          </button>
        </form>

      </div>
    </section>
  );
}

export default Checkout;