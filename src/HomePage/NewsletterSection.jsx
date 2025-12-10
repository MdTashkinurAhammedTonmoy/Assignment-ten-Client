

import React from "react";
import formimg from '../assets/form image.jpg'

const NewsletterSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24"
      style={{
        backgroundImage: `url(${formimg})`, // এখানে ইমেজ দিন
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* FORM BOX — now EXACT same bg you requested */}
      <div
        className="
          relative z-10 max-w-3xl
          text-left md:text-left sm:text-center
          rounded-lg p-10 shadow-xl border border-white/10
          bg-black/30 backdrop-blur-md
          mx-auto
        "
      >
        <p className="text-lime-400 text-sm mb-2">Subscribe Newsletter</p>

        <h2 className="text-4xl font-bold leading-tight mb-4">
          Get update delicious recipes everyday!
        </h2>

        <p className="text-gray-300 text-sm mb-8 leading-relaxed">
          Duis dictum magnis dis molestie rutrum quisque fringilla egestas arcu
          bibendum. Bibendum leo faucibus mus sit himenaeos pulvinar neque.
        </p>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2 rounded-md text-black"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-2 rounded-md text-black"
          />
        </div>

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded-md text-black mb-4"
        />

        <button className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-md flex items-center justify-center gap-2 hover:bg-yellow-500 transition">
          <span>📩</span> Sign up
        </button>
      </div>
    </section>
  );
};

export default NewsletterSection;

