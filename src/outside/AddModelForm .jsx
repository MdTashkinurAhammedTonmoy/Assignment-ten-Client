import React, { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const AddModelForm = () => {
  const { user } = useContext(AuthContext); // auto-fill userEmail

  const [formData, setFormData] = useState({
    foodName: "",
    foodImage: "",
    location: "",
    restaurantName: "",
    reviewText: "",
    starRating: "",
    userEmail: user?.email || "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submittedData = {
      ...formData,
      starRating: Number(formData.starRating),
    };

    console.log("FINAL FORM DATA:", submittedData);

    fetch("http://localhost:3000/foods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 animate-fadeIn"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Add New Food Review
        </h1>

        {/* Food Name */}
        <label className="block mb-2 font-medium text-gray-700">
          Food Name
        </label>
        <input
          type="text"
          name="foodName"
          placeholder="Enter food name"
          className="w-full p-3 border rounded-xl"
          value={formData.foodName}
          onChange={handleChange}
          required
        />

        {/* Food Image */}
        <label className="block mt-4 mb-2 font-medium text-gray-700">
          Food Image URL
        </label>
        <input
          type="text"
          name="foodImage"
          placeholder="Enter image URL"
          className="w-full p-3 border rounded-xl"
          value={formData.foodImage}
          onChange={handleChange}
          required
        />

        {/* Location */}
        <label className="block mt-4 mb-2 font-medium text-gray-700">
          Location
        </label>
        <input
          type="text"
          name="location"
          placeholder="Enter location"
          className="w-full p-3 border rounded-xl"
          value={formData.location}
          onChange={handleChange}
          required
        />

        {/* Restaurant Name */}
        <label className="block mt-4 mb-2 font-medium text-gray-700">
          Restaurant Name
        </label>
        <input
          type="text"
          name="restaurantName"
          placeholder="Enter restaurant name"
          className="w-full p-3 border rounded-xl"
          value={formData.restaurantName}
          onChange={handleChange}
          required
        />

        {/* Review Text */}
        <label className="block mt-4 mb-2 font-medium text-gray-700">
          Review Text
        </label>
        <textarea
          name="reviewText"
          placeholder="Write your review..."
          rows="5"
          className="w-full p-3 border rounded-xl"
          value={formData.reviewText}
          onChange={handleChange}
          required
        ></textarea>

        {/* Star Rating */}
        <label className="block mt-4 mb-2 font-medium text-gray-700">
          Star Rating (1-5)
        </label>
        <input
          type="number"
          name="starRating"
          min="1"
          max="5"
          className="w-full p-3 border rounded-xl"
          value={formData.starRating}
          onChange={handleChange}
          required
        />

        {/* Email */}
        <label className="block mt-4 mb-2 font-medium text-gray-700">
          User Email (Auto)
        </label>
        <input
          type="email"
          name="userEmail"
          className="w-full p-3 border rounded-xl bg-gray-100 cursor-not-allowed"
          value={formData.userEmail}
          readOnly
        />

        {/* Date */}
        <label className="block mt-4 mb-2 font-medium text-gray-700">
          Date
        </label>
        <input
          type="date"
          name="date"
          className="w-full p-3 border rounded-xl"
          value={formData.date}
          onChange={handleChange}
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-6 bg-red-500 text-white font-semibold py-3 rounded-xl hover:bg-red-600 transition"
        >
          Add Model
        </button>
      </form>
    </div>
  );
};

export default AddModelForm;
