import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartTotal,
  } = useCart();

  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#020617] text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-6xl">🛒</div>

            <h2 className="text-2xl font-bold mt-5">
              Your cart is empty
            </h2>

            <p className="text-slate-400 mt-2">
              Add some products to your cart.
            </p>
          </div>
        ) : (
          <div className="mt-10 space-y-5">

            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-[#0f172a] border border-slate-800 rounded-2xl p-5 flex flex-col md:flex-row gap-5 md:items-center"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-xl"
                />

                <div className="flex-1">
                  <h2 className="text-xl font-bold">
                    {item.name}
                  </h2>

                  <p className="text-slate-400">
                    {item.color}
                  </p>

                  <p className="text-purple-400 font-bold mt-2">
                    ${item.price}
                  </p>
                </div>

                <div className="flex items-center gap-3">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="w-9 h-9 bg-slate-800 rounded-lg hover:bg-purple-500"
                  >
                    −
                  </button>

                  <span className="font-bold text-lg">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="w-9 h-9 bg-slate-800 rounded-lg hover:bg-purple-500"
                  >
                    +
                  </button>

                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 hover:text-red-300 font-semibold"
                >
                  Remove
                </button>

              </div>
            ))}

            <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 mt-8">

              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold">
                  Total
                </span>

                <span className="text-3xl font-bold text-purple-400">
                  ${cartTotal.toFixed(0)}
                </span>
              </div>

              <button 
                onClick={() => navigate("/checkout")}
                className="w-full mt-6 bg-purple-500 hover:bg-purple-600 py-4 rounded-xl font-bold cursor-pointer transition"
              >
                Proceed to Checkout
              </button>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}

export default Cart;

