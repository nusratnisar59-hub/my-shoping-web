import React, { useState } from "react";
import { auth, db } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // 1. Create User in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2. Save additional user details in Firestore Database
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
        uid: user.uid,
        createdAt: new Date()
      });

      alert("Signup Successful!");
    } catch (error) {
      console.error("Error signing up: ", error.message);
      alert(error.message);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <form onSubmit={handleSignup} className="w-full max-w-md bg-[#0f172a] p-8 rounded-xl">
        <h1 className="text-3xl font-bold text-white mb-6">Sign Up</h1>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-gray-800 text-white outline-none"
        />

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
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default Signup;

// const Signup = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center px-6">
//       <div className="w-full max-w-md bg-[#0f172a] p-8 rounded-xl">

//         <h1 className="text-3xl font-bold text-white mb-6">
//           Sign Up
//         </h1>

//         <input
//           type="text"
//           placeholder="Name"
//           className="w-full mb-4 p-3 rounded-lg bg-gray-800 text-white"
//         />

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
//           Sign Up
//         </button>

//       </div>
//     </section>
//   );
// };

// export default Signup;