import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="bg-blue-50 min-h-[460px] flex items-center">
        <div className="max-w-7xl mx-auto px-8 w-full flex items-center justify-between gap-12">

          {/* Left Content */}
          <div className="flex-1">
            <p className="text-blue-600 font-bold text-lg">
              Welcome to
            </p>

            <h1 className="text-5xl font-bold text-slate-900 mt-4">
              MyShop
            </h1>

            <p className="text-slate-600 text-lg mt-6 max-w-xl leading-8">
              Discover quality products at affordable prices.
              Shop your favorite products easily and quickly.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-lg mt-8 font-semibold transition">
              Shop Now
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <img
                src="/Shopingbag.jpg"
                alt="Shopping"
                className="w-80 h-64 object-contain rounded-2xl"
              />
            </div>
          </div>

        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Fast Delivery */}
            <div className="border border-slate-300 rounded-2xl p-8 text-center bg-white">
              <div className="text-4xl mb-5">
                🚚
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Fast Delivery
              </h3>

              <p className="text-slate-500 mt-4">
                Quick and reliable delivery.
              </p>
            </div>


            {/* Secure Shopping */}
            <div className="border border-slate-300 rounded-2xl p-8 text-center bg-white">
              <div className="text-4xl mb-5">
                🛡️
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Secure Shopping
              </h3>

              <p className="text-slate-500 mt-4">
                Safe and secure shopping experience.
              </p>
            </div>


            {/* Support */}
            <div className="border border-slate-300 rounded-2xl p-8 text-center bg-white">
              <div className="text-4xl mb-5">
                🎧
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                24/7 Support
              </h3>

              <p className="text-slate-500 mt-4">
                We are here to help you.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
