"use client";

import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center p-6">
      <div className="bg-gray-800 shadow-xl rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-teal-400 text-center mb-4">
          Contact Form
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Thanks for visiting, contact us in case of any query.
        </p>
        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-gray-400 font-medium mb-2"
            >
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="fullName"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Full Name"
              />
              <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>
          {/* Email Address */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-400 font-medium mb-2"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Email Address"
              />
              <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          {/* Choose Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-gray-400 font-medium mb-2"
            >
              Choose Subject
            </label>
            <select
              id="subject"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            >
              <option value="">Select a Subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Support">Support</option>
              <option value="Feedback">Feedback</option>
            </select>
          </div>
          {/* Your Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-400 font-medium mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none"
              placeholder="Your Message"
            ></textarea>
          </div>
          {/* Buttons */}
          <div className="flex justify-between items-center mt-6">
            <Link
              href="/"
              className="px-4 py-2 bg-gray-600 text-white rounded-sm hover:bg-gray-500 transition-all"
            >
              Back to Home
            </Link>
            <button
              type="submit"
              className="px-4 py-2 bg-teal-400 text-white rounded-sm hover:bg-pink-700 transition-all"
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
