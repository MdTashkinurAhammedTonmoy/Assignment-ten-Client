import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";
import img4 from "../assets/img-4.jpg";
import { Link } from "react-router";

const Categories = () => {
  // AOS init
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="p-6 mt-10 mb-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Popular Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* 1️⃣ Right থেকে আসবে */}
        <div
          data-aos="fade-right"
          className="h-[200px] flex flex-col justify-end p-4 text-center rounded-full text-white font-bold bg-cover bg-center transition-all duration-500 hover:brightness-75 items-center"
          style={{ backgroundImage: `url(${img1})` }}
        >
          <h2 className="text-xl">Main Dish</h2>
          <Link to="/allfood" className="bg-yellow-400 hover:bg-yellow-800 text-black font-semibold w-[250px] px-3 py-1 mt-2 rounded-md">
            All Recipes
          </Link>
        </div>

        {/* 2️⃣ Top থেকে আসবে */}
        <div
          data-aos="fade-down"
          className="h-[200px] flex flex-col justify-end p-4 text-center rounded-full text-white font-bold bg-cover bg-center transition-all duration-500 hover:brightness-75 items-center"
          style={{ backgroundImage: `url(${img2})` }}
        >
          <h2 className="text-xl">Appetizers</h2>
          <Link to="/allfood" className="bg-yellow-400 hover:bg-yellow-800 text-black font-semibold w-[250px] px-3 py-1 mt-2 rounded-md">
            All Recipes
          </Link>
        </div>

        {/* 3️⃣ Bottom থেকে আসবে */}
        <div
          data-aos="fade-up"
          className="h-[200px] flex flex-col justify-end p-4 text-center rounded-full text-white font-bold bg-cover bg-center transition-all duration-500 hover:brightness-75 items-center"
          style={{ backgroundImage: `url(${img3})` }}
        >
          <h2 className="text-xl">Drink Recipes</h2>
          <Link to="/allfood" className="bg-yellow-400 hover:bg-yellow-800 text-black font-semibold w-[250px] px-3 py-1 mt-2 rounded-md">
            All Recipes
          </Link>
        </div>

        {/* 4️⃣ Left থেকে আসবে */}
        <div
          data-aos="fade-left"
          className="h-[200px] flex flex-col justify-end p-4 text-center rounded-full text-white font-bold bg-cover bg-center transition-all duration-500 hover:brightness-75 items-center"
          style={{ backgroundImage: `url(${img4})` }}
        >
          <h2 className="text-xl">Breakfast</h2>
          <Link to="/allfood" className="bg-yellow-400 hover:bg-yellow-800 text-black font-semibold w-[250px] px-3 py-1 mt-2 rounded-md">
            All Recipes
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Categories;
