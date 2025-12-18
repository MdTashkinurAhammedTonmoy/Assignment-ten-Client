
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

const UpdateModel = () => {
  const data = useLoaderData();
  const model = data.result;

  const [formData, setFormData] = useState({
    foodName: "",
    foodImage: "",
    location: "",
    restaurantName: "",
    reviewText: "",
    starRating: "",
  });


  useEffect(() => {
    if (model) {
      setFormData({
        foodName: model.foodName || "",
        foodImage: model.foodImage || "",
        location: model.location || "",
        restaurantName: model.restaurantName || "",
        reviewText: model.reviewText || "",
        starRating: model.starRating || "",
      });
    }
  }, [model]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const submittedData = {
      ...formData,
      starRating: Number(formData.starRating),
    };

    fetch(`http://localhost:3000/foods/${model._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submittedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("UPDATE SUCCESS:", data);
        alert("Food updated successfully");
      })
      .catch((err) => {
        console.error("UPDATE ERROR:", err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-6"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          Update Food
        </h2>

        {/* Food Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Food Name</label>
          <input
            type="text"
            name="foodName"
            value={formData.foodName}
            onChange={handleChange}
            className="w-full rounded-full border px-4 py-2"
            required
          />
        </div>

        {/* Food Image */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Food Image URL</label>
          <input
            type="text"
            name="foodImage"
            value={formData.foodImage}
            onChange={handleChange}
            className="w-full rounded-full border px-4 py-2"
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full rounded-full border px-4 py-2"
          />
        </div>

        {/* Restaurant Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Restaurant Name
          </label>
          <input
            type="text"
            name="restaurantName"
            value={formData.restaurantName}
            onChange={handleChange}
            className="w-full rounded-full border px-4 py-2"
          />
        </div>

        {/* Review */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Review</label>
          <textarea
            name="reviewText"
            value={formData.reviewText}
            onChange={handleChange}
            className="w-full h-24 rounded-xl border px-4 py-2 resize-none"
          />
        </div>

        {/* Star Rating */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Star Rating</label>
          <input
            type="number"
            name="starRating"
            min="1"
            max="5"
            value={formData.starRating}
            onChange={handleChange}
            className="w-full rounded-full border px-4 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-full py-3 text-white font-semibold bg-gradient-to-r from-pink-500 to-red-500"
        >
          Update Food
        </button>
      </form>
    </div>
  );
};

export default UpdateModel;
