import React from "react";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1607100766206-40a9f5d32e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNocmlzdG1hc3xlbnwwfHx8fDE2ODAxNzkyMzg&ixlib=rb-1.2.1&q=80&w=1080')",
      }}
    >
      <header className="bg-black bg-opacity-60 text-white p-8">
        <h1 className="text-4xl font-bold">Merry Christmas!</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center text-center text-white p-8">
        <p className="text-lg mb-4">
          Wishing you a season of joy and a year of happiness
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">About Us</h2>
            <p className="text-gray-700">
              Learn more about our mission and values.
            </p>
          </div>
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">Services</h2>
            <p className="text-gray-700">
              Discover the wide range of services we offer.
            </p>
          </div>
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">Contact</h2>
            <p className="text-gray-700">
              Get in touch with us for any inquiries or support.
            </p>
          </div>
        </div>
        <a
          href="/christmas-wish"
          className="mt-4 inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Wish for a present
        </a>
      </main>
      <footer className="bg-black bg-opacity-60 text-white p-4 text-center">
        <p>&copy; 2024 Our Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
