import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    postalCode: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! We will get back to you soon.");
    navigate("/");
  };

  const inputClass = "w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500 transition duration-200";
  const labelClass = "block text-slate-300 mb-1 text-sm font-medium";

  return (
    <section className="min-h-screen bg-[#020617] px-4 sm:px-6 py-12 flex items-center justify-center">
      <div className="max-w-9xl w-full mx-auto bg-[#0f172a] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-purple-500/5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side: Info & Location */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-white">Get in Touch</h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Have questions about our products or need assistance? Reach out to us and our team will get back to you promptly.
            </p>
          </div>

          <div className="space-y-3 text-slate-300">
            <div className="flex items-center gap-3 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
              <span className="text-xl">📍</span>
              <div>
                <h4 className="text-xs font-semibold text-purple-400">Location</h4>
                <p className="text-xs sm:text-sm text-slate-400">Karachi, Pakistan</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
              <span className="text-xl">✉️</span>
              <div>
                <h4 className="text-xs font-semibold text-purple-400">Email Us</h4>
                <p className="text-xs sm:text-sm text-slate-400">support@nusratnisar.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className={labelClass}>Your Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Nusrat Nisar"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="malaikanisar67@gmail.com"
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelClass}>City / Location</label>
              <input
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                placeholder="Karachi"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Postal Code</label>
              <input
                type="text"
                name="postalCode"
                required
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="75000"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Message</label>
            <textarea
              name="message"
              required
              rows="3"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3.5 rounded-xl transition duration-300 cursor-pointer shadow-lg shadow-purple-600/30 mt-1"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Contact() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     city: "",
//     postalCode: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Message sent successfully! We will get back to you soon.");
//     navigate("/");
//   };

//   const inputClass = "w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500 transition duration-200";
//   const labelClass = "block text-slate-300 mb-1.5 text-sm font-medium";

//   return (
//     <section className="min-h-[85vh] bg-[#020617] px-6 py-16 flex items-center justify-center">
//       <div className="max-w-5xl w-full mx-auto bg-[#0f172a] border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl shadow-purple-500/5 grid grid-cols-1 md:grid-cols-2 gap-10">
        
//         {/* Left Side: Info & Location */}
//         <div className="flex flex-col justify-between space-y-6">
//           <div>
//             <h1 className="text-4xl font-bold mb-3 text-white">Get in Touch</h1>
//             <p className="text-slate-400 text-base leading-relaxed">
//               Have questions about our products, services, or need assistance? Reach out to us and our team will get back to you promptly.
//             </p>
//           </div>

//           <div className="space-y-4 text-slate-300">
//             <div className="flex items-center gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
//               <span className="text-2xl">📍</span>
//               <div>
//                 <h4 className="text-sm font-semibold text-purple-400">Location</h4>
//                 <p className="text-sm text-slate-400">Karachi, Pakistan</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
//               <span className="text-2xl">✉️</span>
//               <div>
//                 <h4 className="text-sm font-semibold text-purple-400">Email Us</h4>
//                 <p className="text-sm text-slate-400">support@nusratnisar.com</p>
//               </div>
//             </div>
//           </div>

//           <div className="text-xs text-slate-500">
//             Professional Web Development & E-Commerce Solutions.
//           </div>
//         </div>

//         {/* Right Side: Form with Postal Code & Location */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className={labelClass}>Your Name</label>
//             <input
//               type="text"
//               name="name"
//               required
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Nusrat Nisar"
//               className={inputClass}
//             />
//           </div>

//           <div>
//             <label className={labelClass}>Email Address</label>
//             <input
//               type="email"
//               name="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="malaikanisar67@gmail.com"
//               className={inputClass}
//             />
//           </div>

//           {/* City and Postal Code Grid */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className={labelClass}>City / Location</label>
//               <input
//                 type="text"
//                 name="city"
//                 required
//                 value={formData.city}
//                 onChange={handleChange}
//                 placeholder="Karachi"
//                 className={inputClass}
//               />
//             </div>
//             <div>
//               <label className={labelClass}>Postal Code</label>
//               <input
//                 type="text"
//                 name="postalCode"
//                 required
//                 value={formData.postalCode}
//                 onChange={handleChange}
//                 placeholder="75000"
//                 className={inputClass}
//               />
//             </div>
//           </div>

//           <div>
//             <label className={labelClass}>Message</label>
//             <textarea
//               name="message"
//               required
//               rows="3"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Write your message here..."
//               className={`${inputClass} resize-none`}
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3.5 rounded-xl transition duration-300 cursor-pointer shadow-lg shadow-purple-600/30 mt-2"
//           >
//             Send Message
//           </button>
//         </form>

//       </div>
//     </section>
//   );
// }

// export default Contact;