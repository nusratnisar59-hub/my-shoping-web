function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-5 py-12">

      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Contact Us
        </h1>

        <p className="text-gray-500 mt-3">
          Have a question? We would love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-12">

        {/* Contact Information */}
        <div>

          <h2 className="text-2xl font-bold">
            Get In Touch
          </h2>

          <div className="space-y-5 mt-7">

            <div className="flex gap-4">
              <span className="text-2xl">📍</span>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-500">
                  Lahore, Pakistan
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl">📧</span>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-500">
                  info@myshop.com
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl">📞</span>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-500">
                  +92 300 1234567
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Form */}
        <form
          className="bg-white border rounded-xl p-6 shadow-sm"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent successfully!");
          }}
        >

          <div>
            <label className="block font-medium mb-2">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mt-5">
            <label className="block font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mt-5">
            <label className="block font-medium mb-2">
              Message
            </label>

            <textarea
              rows="5"
              placeholder="Write your message"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-5 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;