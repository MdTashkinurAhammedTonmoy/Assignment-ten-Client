import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Header.css";

const Header = () => {
  // AOS init
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Animation 1 সেকেন্ডে হবে
  }, []);

  return (
    <div data-aos="fade-right" className="relative animate-[fadeIn_1.2s_ease-in-out] w-full h-[500px] flex justify-center items-center overflow-hidden">

      {/* Background Slideshow */}
      <div className="absolute inset-0 bg-cover bg-center animate-bg-slider"></div>

      {/* Content Box */}
      <div
        data-aos="fade-left" // AOS animation: left theke fade
        className="
          relative z-10 max-w-3xl 
          text-left md:text-left sm:text-center
          rounded-lg p-10 shadow-xl border border-white/10
          bg-black/30 backdrop-blur-md
          ml-10 md:ml-10 sm:ml-0
        "
      >

        {/* Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-20 rounded-lg"
          style={{
            backgroundImage: "url('/images/texture.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Text Content */}
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-green-400 mb-4">Steam</h1>

          <h2 className="text-3xl font-semibold text-white leading-snug mb-4">
            No matter how you cook, Cookkit<br />has many the recipes
          </h2>

          <p className="text-white/90 text-sm mb-6">
            Aliquam convallis dictumst vehicula maecenas duis tempor amet magna ex.
            Magna nisl aptent vitae dignissim. Platea arcu dolor habitasse conubia
            efficitur nostra erat.
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-800 text-black font-semibold px-6 py-2 rounded-md">
            Browse Menu 🍽️
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
