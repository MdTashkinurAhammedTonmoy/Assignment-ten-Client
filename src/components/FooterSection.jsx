import React from "react";

const FooterSection = () => {
  return (
    <footer className="bg-[#e04916] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <span role="img" aria-label="chef">👨‍🍳</span> yumma
          </h2>
          <p className="text-sm text-gray-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-100">
            <li>➜ Breakfast Recipes</li>
            <li>➜ Lunch Recipes</li>
            <li>➜ Dinner Recipes</li>
            <li>➜ Drink Recipes</li>
            <li>➜ Appetizer & Snack</li>
            <li>➜ Kitchen Tips</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Learn More</h3>
          <ul className="space-y-2 text-sm text-gray-100">
            <li>➜ About us</li>
            <li>➜ Team</li>
            <li>➜ Careers</li>
            <li>➜ Advertise</li>
            <li>➜ Content Licensing</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Get in connect</h3>
          <p className="text-sm mb-3 text-gray-100">Follow Us</p>
          <div className="flex gap-4 text-xl">
            <span>📘</span>
            <span>🐦</span>
            <span>📸</span>
            <span>▶️</span>
          </div>
          <button className="mt-5 bg-white text-[#e04916] px-5 py-2 rounded">Contact Us</button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
