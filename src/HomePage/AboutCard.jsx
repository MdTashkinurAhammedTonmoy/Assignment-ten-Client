import React from "react";
import cookingImg from "../assets/cooking.jpg";

const AboutCard = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#faf7f3] to-[#f3f0eb] py-24 px-6 mt-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="relative">

          {/* Glassmorphism Quote Card */}
          <div className="
            relative w-[85%] mb-8 p-10 rounded-2xl 
            bg-white/10 backdrop-blur-xl shadow-xl
            border border-white/30 
            overflow-hidden
          ">

            {/* Glass highlight overlay */}
            <div className="absolute inset-0 bg-gradient-to-br  from-white/40 to-transparent opacity-20"></div>

            <div className="relative z-10 ">
              <div className="text-center text-yellow-500 text-5xl mb-3">“</div>

              <p className="text-center text-gray-800 font-semibold text-lg leading-relaxed mb-2">
                “Ask not what you can do for your country. Ask what’s for lunch.”
              </p>

              <p className="text-center text-gray-600 text-sm">
                — Orson Welles
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="overflow-hidden relative rounded-xl shadow-lg group cursor-pointer">
            <img
              src={cookingImg}
              alt="Cooking Together"
              className="rounded-xl group-hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="px-4">
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
