import React from "react";
import { Star } from "lucide-react"; // optional, remove if not using lucide-react
import { Link } from "react-router";

const ModelCard = ({ model }) => {
  const {
    foodName,
    foodImage,
    location,
    restaurantName,
    reviewText,
    starRating,
    userEmail,
    date,
    _id
  } = model;

  return (
    <div
      className="
        bg-white rounded-2xl shadow-md 
        hover:shadow-2xl hover:-translate-y-2 
        transition-all duration-300 
        p-5 flex flex-col 
        animate-fadeIn
      "
    >
      {/* Image */}
      <div className="w-full h-56 overflow-hidden rounded-xl">
        <img
          src={foodImage}
          alt={foodName}
          className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="mt-4 flex flex-col flex-1">
        <p className="text-sm font-medium text-gray-500">{location}</p>

        {/* Food Name */}
        <h1 className="text-2xl font-bold mt-1 text-gray-800">{foodName}</h1>

        {/* Star Rating */}
        <div className="flex items-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className={i < starRating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>

        {/* Review text */}
        <h2 className="text-lg font-semibold mt-3 text-gray-900">{reviewText}</h2>

        {/* Restaurant & Date */}
        <p className="text-sm text-gray-600 mt-1">
          {restaurantName} • {date}
        </p>

        {/* Author */}
        <p className="text-sm text-gray-500 mt-1">Reviewed by: {userEmail}</p>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-3 flex-1">
          This dish has received excellent feedback for flavour and presentation.  
          Click below to read the full review.
        </p>

        {/* View Button */}
        <Link to={`/model-details/${_id}`} className="bg-yellow-400 w-full  text-center hover:bg-yellow-800 text-black font-semibold  px-3 py-1 mt-2 rounded-md">
          View
        </Link>
      </div>
    </div>
  );
};

export default ModelCard;
