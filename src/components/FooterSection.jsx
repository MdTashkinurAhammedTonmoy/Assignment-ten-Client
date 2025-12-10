import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-[#faf7f3] text-black py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <span role="img" aria-label="chef">
              👨‍🍳
            </span>{" "}
            Food Lover
          </h2>
          <p className="text-sm text-gray-500">
            Odio finibus sapien velit blandit aliquam tristique erat enim dis
            fringilla. Dui volutpat letius iaculis a at cras si.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-500">
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
          <ul className="space-y-2 text-sm text-gray-500">
            <li>➜ About us</li>
            <li>➜ Team</li>
            <li>➜ Careers</li>
            <li>➜ Advertise</li>
            <li>➜ Content Licensing</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Get in connect</h3>
          <p className="text-sm mb-3 font-semibold text-gray-500">Follow Us</p>
          <div className="flex gap-4 text-xl">
            <span>
              <a href=""><FaFacebook /></a>
            </span>
            <span><a href=""><FaSquareXTwitter /></a></span>
            <span><a href=""><FaInstagramSquare /></a></span>
            <span><a href=""><FaLinkedin /></a></span>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-800 text-black font-semibold w-[150px] px-3 py-1 mt-2 rounded-md">
            Contact Us
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
