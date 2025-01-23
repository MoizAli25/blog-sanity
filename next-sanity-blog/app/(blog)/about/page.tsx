"use client";

import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white min-h-screen">

      {/* Hero Section */}
      <main className="px-10 lg:px-20 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Reliable analytical tool for <span className="text-teal-400">successful trading.</span>
            </h1>
            <p className="text-lg text-gray-400">
              Maximize trading success with our cryptocurrency dashboard. Get real-time insights, live quotes, technical indicators, and market news.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-teal-400 text-black rounded-lg font-medium hover:bg-teal-300 transition">
                Download Now
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute w-96 h-96 bg-gradient-to-r from-teal-400 via-purple-500 to-blue-600 rounded-full filter blur-3xl opacity-30 -top-16 -left-16"></div>
              <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 rounded-full filter blur-3xl opacity-30 -bottom-16 -right-16"></div>
              <div className="relative z-10">
                <div className="bg-gray-800 rounded-xl shadow-lg p-6 text-center">
                  <p className="text-gray-400 mb-2">Workspace Integration</p>
                  <div className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 w-full h-48 rounded-md"></div>
                  <div className="mt-4 flex justify-center space-x-4">
                    <span className="bg-gray-700 w-8 h-8 rounded-full"></span>
                    <span className="bg-gray-700 w-8 h-8 rounded-full"></span>
                    <span className="bg-gray-700 w-8 h-8 rounded-full"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Sections */}
      <section className="px-10 lg:px-20 py-16 bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Crypto Leaders Section */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4">Crypto Leaders of Growth and Fall</h3>
            <p className="text-gray-400 text-sm">Data visualizations of key movements in the market.</p>
          </div>

          {/* Platform Info Section */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4">Our Platform</h3>
            <p className="text-gray-400 text-sm">
              Explore cutting-edge features tailored to the demands of cryptocurrency.
            </p>
          </div>

          {/* Waterfall Charts Section */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4">Visualize Progress</h3>
            <p className="text-gray-400 text-sm">
              Use waterfall charts to identify key areas of growth and decline.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
