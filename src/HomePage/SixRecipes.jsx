import React from "react";
import { FaStar } from "react-icons/fa";

export default function SixRecipes({ sixData }) {
  const { title, category, author, date, rating, image, description } = sixData;

  return (
    <div className="bg-white rounded-xl shadow-md p-7 mx-auto  overflow-hidden">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4">
        {/* Category + Rating */}
        <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
          <span>{category}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className="text-yellow-400"
                style={{ opacity: i < rating ? 1 : 0.3 }}
              />
            ))}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-1">{title}</h3>

        {/* Author & Date */}
        <p className="text-xs text-gray-500 mb-3">
          {author} <span className="mx-1">|</span> {date}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4">
          {description.slice(0, 80)}...
        </p>

        {/* Button */}
        <button className="text-red-600 font-medium hover:underline">
          Read more
        </button>
      </div>
    </div>
  );
}
