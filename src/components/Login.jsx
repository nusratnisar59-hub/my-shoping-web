import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
      navigate("/"); // Login ke baad home page par bhejne ke liye
    } catch (error) {
      console.error("Error logging in: ", error.message);
      alert(error.message);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <form onSubmit={handleLogin} className="w-full max-w-md bg-[#0f172a] p-8 rounded-xl">
        <h1 className="text-3xl font-bold text-white mb-6">Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-gray-800 text-white outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-gray-800 text-white outline-none"
        />

        <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition">
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;

// const Login = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center px-6">
//       <div className="w-full max-w-md bg-[#0f172a] p-8 rounded-xl">

//         <h1 className="text-3xl font-bold text-white mb-6">
//           Login
//         </h1>

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full mb-4 p-3 rounded-lg bg-gray-800 text-white"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full mb-4 p-3 rounded-lg bg-gray-800 text-white"
//         />

//         <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700">
//           Login
//         </button>

//       </div>
//     </section>
//   );
// };

// export default Login;