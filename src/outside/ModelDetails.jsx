import React from "react";
import { useLoaderData } from "react-router";

const ModelDetails = () => {
   const data = useLoaderData()
   const model = data.result
   
   const {foodImage,foodName,reviewText,location} = model
  return (
    <div className="max-w-3xl mx-auto mt-10 mb-10 p-10 shadow">
      <div className="group flex bg-white rounded-2xl overflow-hidden
                      shadow-lg transition-all duration-500
                      hover:-translate-y-3 hover:shadow-2xl">

        {/* Image */}
        <div className="w-[45%] overflow-hidden">
          <img
            src={foodImage}
            alt="House Plant"
            className="h-full w-full object-cover
                       transition-transform duration-700
                       group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="w-[55%] p-6 animate-fadeUp">

          <h2 className="text-2xl font-semibold mb-3">
            {foodName}
          </h2>

          <span className="inline-block mb-3 px-4 py-1 text-sm
                           rounded-full bg-pink-100 text-pink-600">
            {location}
          </span>

          <p className="text-gray-600 leading-relaxed mb-6">
            {reviewText}
          </p>

          <div className="flex gap-3">
            <button
              className="px-6 py-2 rounded-full bg-yellow-400 text-black
                         transition-all duration-300
                         hover:bg-yellow-800 hover:scale-105">
              Update Model
            </button>

            <button
              className="px-6 py-2 rounded-full bg-gray-200 text-gray-700
                         transition-all duration-300
                         hover:bg-gray-300">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;
