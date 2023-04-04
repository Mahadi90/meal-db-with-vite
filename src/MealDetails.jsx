import React from "react";
import { useNavigate } from "react-router-dom";


const MealDetails = () => {
    const navigate = useNavigate()

    const backHandler = () => {
    navigate(-1)
    }
  

  return (
    <div className="bg-gray-700 h-[140vh] md:h-[80vh] pt-12">
      <div className="card card-normal md:card-side py-8  bg-white mx-2 md:mx-8 lg:mx-20">
        <figure>
          <img
            src="../public/img/istockphoto-1202282754-612x612.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Sea foor Details</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, quibusdam et. Necessitatibus nulla error fuga. Corrupti reiciendis praesentium ducimus! Perspiciatis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, nostrum fugiat. Mollitia esse, odit inventore corporis ex eum accusamus nesciunt.</p>
          <div className="card-actions justify-end">
            <h3 className="text-red-500 font-bold text-2xl">Deatils Commin soon...........</h3>
            <button onClick={backHandler} className="btn btn-primary">Go Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
