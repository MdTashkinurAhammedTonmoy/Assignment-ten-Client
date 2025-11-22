import React from "react";
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";
import img4 from "../assets/img-4.jpg";

const Categories = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Popular Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* 1 */}
        <div
          className="h-[200px]  flex flex-col justify-end p-4 text-center rounded-full text-white font-bold bg-cover bg-center transition-all duration-500 hover:brightness-75 items-center"
          style={{ backgroundImage: `url(${img1})` }}
        >
          <h2 className="text-xl">Main Dish</h2>
          <button className="bg-yellow-400 hover:bg-yellow-800 text-black font-semibold w-[250px] px-3 py-1 mt-2 rounded-md">
            All Recipes
          </button>
        </div>

        {/* 2 */}
        <div
          className="h-[200px]  flex flex-col justify-end p-4 text-center rounded-full text-white font-bold bg-cover  bg-center transition-all duration-500 hover:brightness-75 items-center"
          style={{ backgroundImage: `url(${img2})` }}
        >
          <h2 className="text-xl">Appetizers</h2>
          <button className="bg-yellow-400 hover:bg-yellow-800 text-black font-semibold w-[250px] px-3 py-1 mt-2 rounded-md">
            All Recipes
          </button>
        </div>

        {/* 3 */}
        <div
          className="h-[200px] flex flex-col justify-end p-4 text-center rounded-full text-white font-bold
             bg-cover bg-center transition-all duration-500 hover:brightness-75 items-center"
          style={{ backgroundImage: `url(${img3})` }}
        >
          <h2 className="text-xl">Drink Recipes</h2>
          <button className="bg-yellow-400 hover:bg-yellow-800 text-black font-semibold w-[250px] px-3 py-1 mt-2 rounded-md">
            All Recipes
          </button>
        </div>

        {/* 4 */}
        <div
          className="h-[200px]  flex flex-col justify-end p-4 text-center rounded-full text-white font-bold bg-cover bg-center transition-all duration-500 hover:brightness-75 items-center"
          style={{ backgroundImage: `url(${img4})` }}
        >
          <h2 className="text-xl">Breakfast</h2>
          <button className="bg-yellow-400 hover:bg-yellow-800 text-black font-semibold w-[250px] px-3 py-1 mt-2 rounded-md">
            All Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
