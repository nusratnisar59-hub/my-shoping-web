import React from "react";

function Features() {
  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <p className="text-purple-400 text-lg font-semibold uppercase">
          Our Features
        </p>

        <h1 className="text-5xl font-bold mt-4">
          Everything you need
        </h1>

        <p className="text-slate-400 text-xl mt-4">
          Discover all the amazing features available in our store.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-slate-900 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold">Quality Products</h2>
            <p className="text-slate-400 mt-3">
              We provide high-quality products for our customers.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold">Fast Delivery</h2>
            <p className="text-slate-400 mt-3">
              Get your favorite products delivered quickly.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold">Easy Shopping</h2>
            <p className="text-slate-400 mt-3">
              Enjoy a simple and easy shopping experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;