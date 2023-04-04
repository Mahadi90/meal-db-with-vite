import { PlayCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const SingleMeal = ({ singleMeal }) => {
    const {strMeal, strCategory, strMealThumb,idMeal} = singleMeal;

//   console.log(singleMeal);

  return (
    <div>
      <div className="card w-full h-full bg-base-100 shadow-2xl">
        <figure>
          <img
          className="w-96 rounded-lg"
            src={strMealThumb}
            alt="meal"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-purple-950 font-bold">Name: {strMeal}</h2>
          <p className="text-purple-500 font-bold">Category: {strCategory}</p>
          <div className="card-actions justify-end">
            <Link to={`/singleMeal/${idMeal}`}><button className="btn btn-primary">More Detais</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMeal;
