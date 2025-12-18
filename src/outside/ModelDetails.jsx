
import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const ModelDetails = () => {
  const { result: model } = useLoaderData();
  const navigate = useNavigate();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/foods/${model._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Food has been deleted.", "success");
              navigate("/");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  const { foodImage, foodName, reviewText, location } = model;

  return (
    <div className="max-w-3xl mx-auto mt-10 mb-10 p-10 shadow">
      <div className="group flex bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
        
        {/* Image */}
        <div className="w-[45%] overflow-hidden">
          <img
            src={foodImage}
            alt={foodName}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="w-[55%] p-6">
          <h2 className="text-2xl font-semibold mb-3">{foodName}</h2>

          <span className="inline-block mb-3 px-4 py-1 text-sm rounded-full bg-pink-100 text-pink-600">
            {location}
          </span>

          <p className="text-gray-600 leading-relaxed mb-6">
            {reviewText}
          </p>

          <div className="flex gap-3">
            <Link
              to={`/update-model/${model._id}`}
              className="px-6 py-2 rounded-full bg-yellow-400 text-black transition-all duration-300 hover:bg-yellow-600"
            >
              Update
            </Link>

            <button
              onClick={handleDelete}
              className="px-6 py-2 rounded-full bg-red-500 text-white transition-all duration-300 hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ModelDetails;
