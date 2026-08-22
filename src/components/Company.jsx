import React from "react";

function Company() {
  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <p className="text-purple-400 text-lg font-semibold uppercase">
          Our Company
        </p>

        <h1 className="text-5xl font-bold mt-4">
          About our store
        </h1>

        <p className="text-slate-400 text-xl mt-6 max-w-3xl">
          We are passionate about providing stylish, comfortable and
          high-quality products to our customers.
        </p>

        <div className="bg-slate-900 rounded-2xl p-8 mt-12">
          <h2 className="text-3xl font-bold">
            Our Mission
          </h2>

          <p className="text-slate-400 text-lg mt-4">
            Our mission is to make online shopping simple, affordable
            and enjoyable for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Company;