import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ModelCard from "../outside/ModelCard";

const AllFood = () => {
  const data = useLoaderData();
  const [models,setModels] = useState(data)
  const [loading,setLoading] = useState(false)
//   console.log(data);

  const handleSearch = (e) =>{
    e.preventDefault()
    const search_text = e.target.search.value
    console.log(search_text)
    setLoading(true)

    fetch(`http://localhost:3000/search?search=${search_text}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setModels(data)
        setLoading(false)
    })
  }

  return (
    <div className="mb-10 mt-10">
      <div className="text-2xl text-center font-bold">All Models</div>
      <p className="text-center mb-10">Explore 3d Models</p>
      <form onSubmit={handleSearch} className="flex gap-5 justify-center mb-10">
        <label className="input rounded-full">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input name="search" type="search" placeholder="Search" />
        </label>
        <button className="btn bg-yellow-400  text-center hover:bg-yellow-800 text-black font-semibold rounded-full">{loading ? "Searching..." : "Search"}</button>
      </form>

      <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
        {models.map((model) => (
          <ModelCard key={model._id} model={model}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default AllFood;
