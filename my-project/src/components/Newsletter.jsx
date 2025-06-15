import React from 'react';

export default function Newsletter() {
  return (
    <div className="flex flex-col items-start justify-start gap-2 p-6 rounded-xl w-full max-w-md mx-auto bg-white">
      <h1 className="text-black text-2xl font-bold mb-1">Subscribe to our Newsletter</h1>
      <p className="text-gray-700 mb-2">Get the latest updates and news right in your inbox!</p>
      <form className="flex w-full">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-l-xl bg-gray-100 text-black text-base border-none outline-none"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-r-xl font-semibold text-black border-none shadow-inner"
          style={{
            boxShadow: 'inset 4px 4px 20px 0px rgba(19, 19, 19, 0.3)',
            background: 'rgb(231, 254, 41)',
          }}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
