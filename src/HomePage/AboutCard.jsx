import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import cookingImg from "../assets/cooking.jpg";

const AboutCard = () => {
  // AOS init
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full bg-[#faf7f3] py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE - Image + Testimonial */}
        <div data-aos="fade-right" className="relative">
          {/* Image */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={cookingImg}
              alt="Cooking Together"
              className="rounded-xl w-full h-auto"
            />
          </div>

          {/* White Testimonial Card (Overlap on image) */}
          <div
  className="
    absolute -top-14 left-8
    w-[75%] bg-white shadow-xl rounded-xl 
    p-10 border border-gray-200
    transition-transform duration-300 ease-in-out
    hover:scale-105 hover:shadow-2xl
  "
>
  <div className="text-center text-yellow-500 text-5xl mb-3">“</div>

  <p className="text-center text-gray-800 font-semibold text-lg leading-relaxed mb-2">
    “Ask not what you can do for your country. Ask what’s for lunch.”
  </p>

  <p className="text-center text-gray-500 text-sm">
    — Orson Welles
  </p>
</div>

        </div>

        {/* RIGHT SIDE - Text */}
        <div data-aos="fade-left">
          <p className="text-sm tracking-wider text-red-600 mb-3 font-semibold">
            WHO WE ARE
          </p>

          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-8">
            One thousand flavors<br /> in one place.
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Tortor scelerisque feugiat nibh ridiculus nisi si. Enim penatibus ac sed primis
            convallis fames taciti dolor tempor. Faucibus morbi posuere sagittis turpis
            class vivamus penatibus ornare mollis donec scelerisque.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Tortor scelerisque feugiat nibh ridiculus nisi si. Enim penatibus ac sed primis
            convallis fames taciti dolor tempor. Faucibus morbi posuere sagittis turpis
            class vivamus penatibus ornare mollis donec scelerisque.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutCard;
