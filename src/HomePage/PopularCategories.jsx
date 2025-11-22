import React from "react";
import bgimg from "../assets/well-done-steak-homemade-potatoes.jpg";
import image1 from "../assets/fried-chicken-with-mushrooms-rice.jpg";
import image2 from "../assets/top-view-chicken-salad-with-vegetables-greens-dark-desk-diet-salad-health.jpg";
import image3 from "../assets/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface.jpg";
import image4 from "../assets/tortilla-wraps-with-meat-fresh-vegetables.jpg";

export default function PopularCategories() {
  const categories = [
    {
      title: "Main Dish",
      image: image1,
      button: "Discover recipes",
    },
    {
      title: "Appetizers",
      image: image2,
      button: "Discover recipes",
    },
    {
      title: "Drink Recipes",
      image: image3,
      button: "Discover recipes",
    },
    {
      title: "Breakfast",
      image: image4,
      button: "Discover recipes",
    },
  ];

  return (
    <section className="w-full bg-gray-50 pb-20">
      {/* Header Background Section */}
      <div
        className="relative w-full bg-cover bg-center py-24 text-center"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        {/* Overlay Dark Layer (optional, matches screenshot style better) */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10">
          <p className="uppercase tracking-widest text-sm text-gray-200">Featured</p>
          <h2 className="text-4xl font-bold text-white mt-2">Popular Categories</h2>
          <p className="max-w-xl mx-auto mt-4 text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>

      {/* Round Category Cards */}
      <div className="container mx-auto -mt-20 flex flex-wrap justify-center gap-12 relative z-20">
        {categories.map((cat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-56 h-56 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-white">
              <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold mt-4">{cat.title}</h3>
            <button className="bg-yellow-400 hover:bg-yellow-800 text-black font-semibold px-6 py-2 rounded-md">
              {cat.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
