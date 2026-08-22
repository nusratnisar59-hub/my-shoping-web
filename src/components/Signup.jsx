const Signup = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-[#0f172a] p-8 rounded-xl">

        <h1 className="text-3xl font-bold text-white mb-6">
          Sign Up
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 p-3 rounded-lg bg-gray-800 text-white"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded-lg bg-gray-800 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 rounded-lg bg-gray-800 text-white"
        />

        <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700">
          Sign Up
        </button>

      </div>
    </section>
  );
};

export default Signup;