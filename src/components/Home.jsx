import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Stylish Leatherbag",
    subtitle: "PREMIUM ACCESSORIES",
    description: "Discover timeless pieces crafted with elegance.",
    // Agar public folder ke andar tasveer ka naam 'LeatherBag.jpg' hai:
    image: "/LeatherBag.jpg", 
    btnText: "Shop LeatherBag",
    btnLink: "/marketplace"
  },
  {
    title: "Stylish Watch",
    subtitle: "GLOW EVERYDAY",
    description: "Enhance your natural beauty with our high-end cosmetic products, skin care essentials, and trendy makeup collections.",
    image: "/Watch.png",
    btnText: "Explore Beauty",
    btnLink: "/marketplace"
  },
  {
    title: "Stylish Sandals & Footwear",
    subtitle: "WALK IN COMFORT",
    description: "Step out in absolute style with our comfortable, chic, and trendy collection of luxury sandals and footwear.",
    image: "Shoes.jpg",
    btnText: "Shop Footwear",
    btnLink: "/marketplace"
  }
];

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const slide = slides[currentSlide];

  return (
    <div className="relative overflow-hidden bg-[#020617] text-white py-12 px-6">
      {/* Background Container with Dynamic Image & Dark Overlay */}
      <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
        
        {/* Background Image with Dark Tint */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 filter brightness-50"
          style={{
            backgroundImage: `url("${slide.image}")`
          }}
        ></div>

        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#0f172a]/80 to-transparent"></div>

        {/* Content Layer */}
        <div className="relative z-10 p-8 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[350px]">
            
            <div className="space-y-6 transition-all duration-500">
              <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase bg-purple-950/60 px-3 py-1 rounded-full border border-purple-800/50">
                {slide.subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                {slide.title}
              </h1>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                {slide.description}
              </p>
              <div className="flex items-center gap-4 pt-2">
                <Link
                  to={slide.btnLink}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-3.5 rounded-xl transition duration-300 shadow-lg shadow-purple-600/30"
                >
                  {slide.btnText}
                </Link>
              </div>
            </div>

            <div className="relative bg-slate-900/60 backdrop-blur-md border border-slate-700/60 rounded-2xl h-64 md:h-80 flex items-center justify-center p-8 shadow-inner overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple-600/30 rounded-full blur-3xl"></div>
              
              <div className="text-center z-10 space-y-3">
                <div className="w-16 h-16 mx-auto bg-purple-600/30 border border-purple-500/40 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                  NN
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white whitespace-pre-line">
                  Featured Collection\nTop Quality
                </h3>
                <p className="text-xs text-purple-300 tracking-wider uppercase font-medium">
                  Nusrat Nisar Store
                </p>
              </div>
            </div>

          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-purple-600 border border-slate-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition shadow-md z-20 cursor-pointer"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-purple-600 border border-slate-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition shadow-md z-20 cursor-pointer"
          >
            ❯
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "w-8 bg-purple-500" : "w-2.5 bg-slate-700 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <HeroCarousel />

      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white text-center">
        <div className="bg-[#0f172a] p-6 rounded-2xl border border-slate-800">
          <h3 className="text-3xl font-extrabold text-purple-400">500+</h3>
          <p className="text-slate-400 text-sm mt-1">Products</p>
        </div>
        <div className="bg-[#0f172a] p-6 rounded-2xl border border-slate-800">
          <h3 className="text-3xl font-extrabold text-purple-400">10K+</h3>
          <p className="text-slate-400 text-sm mt-1">Customers</p>
        </div>
        <div className="bg-[#0f172a] p-6 rounded-2xl border border-slate-800">
          <h3 className="text-3xl font-extrabold text-purple-400">4.9 ★</h3>
          <p className="text-slate-400 text-sm mt-1">Rating</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

// import React from "react";
// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <div className="min-h-screen bg-[#020617] text-white">

//       {/* HERO SECTION */}
//       <section className="bg-[#020617]">
//         <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">

//           <div className="grid md:grid-cols-2 gap-14 items-center">

//             {/* LEFT */}
//             <div>
//               <p className="text-purple-400 font-semibold text-lg mb-4">
//                 WELCOME TO MYSHOP
//               </p>

//               <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
//                 Shop Smart.
//                 <br />
//                 <span className="text-purple-400">
//                   Live Better.
//                 </span>
//               </h1>

//               <p className="text-slate-400 text-lg md:text-xl mt-6 max-w-xl leading-8">
//                 Discover quality products at affordable prices.
//                 Shop your favorite products easily, quickly and securely.
//               </p>

//               <div className="flex gap-4 mt-8">

//                 {/* Shop Now Button - Linked to Products */}
//                 <Link 
//                   to="/products"
//                   className="bg-purple-500 hover:bg-purple-600 px-8 py-4 rounded-xl font-bold transition shadow-lg shadow-purple-500/20 text-center"
//                 >
//                   Shop Now →
//                 </Link>

//                 {/* Explore Button - Linked to Products */}
//                 <Link 
//                   to="/products"
//                   className="border border-slate-600 hover:border-purple-400 hover:text-purple-400 px-8 py-4 rounded-xl font-bold transition text-center"
//                 >
//                   Explore
//                 </Link>

//               </div>

//               {/* STATS */}
//               <div className="flex gap-10 mt-10">

//                 <div>
//                   <p className="text-2xl font-bold">500+</p>
//                   <p className="text-slate-500">Products</p>
//                 </div>

//                 <div>
//                   <p className="text-2xl font-bold">10K+</p>
//                   <p className="text-slate-500">Customers</p>
//                 </div>

//                 <div>
//                   <p className="text-2xl font-bold">4.9★</p>
//                   <p className="text-slate-500">Rating</p>
//                 </div>

//               </div>
//             </div>


//             {/* RIGHT IMAGE */}
//             <div className="relative">

//               <div className="absolute -top-8 -right-8 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

//               <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>

//               <div className="relative bg-[#0f172a] border border-slate-800 rounded-3xl p-5 shadow-2xl">

//                 <img
//                   src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80"
//                   alt="Shopping"
//                   className="w-full h-[400px] object-cover rounded-2xl"
//                 />

//                 <div className="absolute bottom-10 left-10 bg-[#111827] border border-slate-700 px-6 py-4 rounded-2xl shadow-xl">

//                   <p className="text-slate-400 text-sm">
//                     Special Offer
//                   </p>

//                   <p className="text-xl font-bold text-purple-400">
//                     Up to 30% OFF
//                   </p>

//                 </div>

//               </div>
//             </div>

//           </div>
//         </div>
//       </section>


//       {/* WHY CHOOSE US */}
//       <section className="bg-[#0b1120] py-20 border-t border-slate-800">

//         <div className="max-w-7xl mx-auto px-6">

//           <div className="text-center mb-14">

//             <p className="text-purple-400 font-semibold uppercase tracking-wider">
//               Why Us?
//             </p>

//             <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
//               Why Choose Us?
//             </h2>

//             <p className="text-slate-400 text-lg mt-4">
//               Everything you need for a better shopping experience.
//             </p>

//           </div>


//           <div className="grid md:grid-cols-3 gap-8">

//             {/* CARD 1 */}
//             <div className="bg-[#111827] border border-slate-800 rounded-2xl p-8 text-center hover:border-purple-500 hover:-translate-y-2 transition duration-300">

//               <div className="w-16 h-16 mx-auto flex items-center justify-center bg-purple-500/10 border border-purple-500/20 rounded-2xl text-3xl">
//                 🚚
//               </div>

//               <h3 className="text-xl font-bold mt-6">
//                 Fast Delivery
//               </h3>

//               <p className="text-slate-400 mt-3 leading-7">
//                 Quick and reliable delivery right to your doorstep.
//               </p>

//             </div>


//             {/* CARD 2 */}
//             <div className="bg-[#111827] border border-slate-800 rounded-2xl p-8 text-center hover:border-purple-500 hover:-translate-y-2 transition duration-300">

//               <div className="w-16 h-16 mx-auto flex items-center justify-center bg-purple-500/10 border border-purple-500/20 rounded-2xl text-3xl">
//                 🛡️
//               </div>

//               <h3 className="text-xl font-bold mt-6">
//                 Secure Shopping
//               </h3>

//               <p className="text-slate-400 mt-3 leading-7">
//                 Safe and secure shopping experience you can trust.
//               </p>

//             </div>


//             {/* CARD 3 */}
//             <div className="bg-[#111827] border border-slate-800 rounded-2xl p-8 text-center hover:border-purple-500 hover:-translate-y-2 transition duration-300">

//               <div className="w-16 h-16 mx-auto flex items-center justify-center bg-purple-500/10 border border-purple-500/20 rounded-2xl text-3xl">
//                 🎧
//               </div>

//               <h3 className="text-xl font-bold mt-6">
//                 24/7 Support
//               </h3>

//               <p className="text-slate-400 mt-3 leading-7">
//                 Our support team is always here to help you.
//               </p>

//             </div>

//           </div>
//         </div>
//       </section>


//       {/* FEATURED SECTION */}
//       <section className="bg-[#020617] py-20">

//         <div className="max-w-7xl mx-auto px-6">

//           <div className="text-center mb-12">

//             <p className="text-purple-400 font-semibold uppercase">
//               Our Collection
//             </p>

//             <h2 className="text-4xl md:text-5xl font-bold mt-3">
//               Customers also purchased
//             </h2>

//             <p className="text-slate-400 text-lg mt-4">
//               Discover our most popular products.
//             </p>

//           </div>


//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

//             {/* PRODUCT 1 */}
//             <div className="bg-[#0f172a] border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500 transition">

//               <img
//                 src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80"
//                 alt="Basic Tee"
//                 className="w-full h-72 object-cover"
//               />

//               <div className="p-5">

//                 <div className="flex justify-between">
//                   <h3 className="font-bold text-lg">
//                     Basic Tee
//                   </h3>

//                   <span className="font-bold">
//                     $35
//                   </span>
//                 </div>

//                 <p className="text-slate-400 mt-2">
//                   Black
//                 </p>

//               </div>
//             </div>


//             {/* PRODUCT 2 */}
//             <div className="bg-[#0f172a] border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500 transition">

//               <img
//                 src="https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=700&q=80"
//                 alt="Basic Tee"
//                 className="w-full h-72 object-cover"
//               />

//               <div className="p-5">

//                 <div className="flex justify-between">
//                   <h3 className="font-bold text-lg">
//                     Basic Tee
//                   </h3>

//                   <span className="font-bold">
//                     $35
//                   </span>
//                 </div>

//                 <p className="text-slate-400 mt-2">
//                   Aspen White
//                 </p>

//               </div>
//             </div>


//             {/* PRODUCT 3 */}
//             <div className="bg-[#0f172a] border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500 transition">

//               <img
//                 src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=700&q=80"
//                 alt="Basic Tee"
//                 className="w-full h-72 object-cover"
//               />

//               <div className="p-5">

//                 <div className="flex justify-between">
//                   <h3 className="font-bold text-lg">
//                     Basic Tee
//                   </h3>

//                   <span className="font-bold">
//                     $35
//                   </span>
//                 </div>

//                 <p className="text-slate-400 mt-2">
//                   Charcoal
//                 </p>

//               </div>
//             </div>


//             {/* PRODUCT 4 */}
//             <div className="bg-[#0f172a] border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500 transition">

//               <img
//                 src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=80"
//                 alt="Artwork Tee"
//                 className="w-full h-72 object-cover"
//               />

//               <div className="p-5">

//                 <div className="flex justify-between">
//                   <h3 className="font-bold text-lg">
//                     Artwork Tee
//                   </h3>

//                   <span className="font-bold">
//                     $35
//                   </span>
//                 </div>

//                 <p className="text-slate-400 mt-2">
//                   Iso Dots
//                 </p>

//               </div>
//             </div>

//           </div>
//         </div>
//       </section>


//       {/* CTA */}
//       <section className="bg-[#0b1120] border-t border-slate-800 py-20">

//         <div className="max-w-4xl mx-auto text-center px-6">

//           <p className="text-purple-400 font-semibold uppercase">
//             Start Shopping
//           </p>

//           <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
//             Find something you love.
//           </h2>

//           <p className="text-slate-400 text-lg mt-5">
//             Explore our collection and discover products made for you.
//           </p>

//           {/* Explore Products Button - Linked to Products */}
//           <Link 
//             to="/products"
//             className="inline-block mt-8 bg-purple-500 hover:bg-purple-600 px-9 py-4 rounded-xl font-bold shadow-lg shadow-purple-500/20 transition"
//           >
//             Explore Products →
//           </Link>

//         </div>

//       </section>

//     </div>
//   );
// }

// export default Home;

