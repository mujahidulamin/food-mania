import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Food = () => {
  const [meals, setMeals] = useState([]);
  console.log(meals);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMeals(data.meals);
      });
  }, []);

  return (
    <div className="px-10 py-16 courses">
      <h1 className="text-center font-bold text-4xl mb-12">Our Foods</h1>
      <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
        {meals.slice(0, 6)?.map((meal) => (
          <div className="bg-gray-100 p-6 rounded shadow-lg" key={meal.idMeal}>
            <img
              className="object-cover w-full mb-6 rounded shadow-lg xl:h-80"
              src={meal.strMealThumb}
              alt=""
            />
            <div className="flex justify-between">
              <span className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                {meal.strMeal}
              </span>
              <span className="text-gray-700 md:mt-2 text-xl font-bold ">
                {" "}
                <a href={meal.strYoutube} target="blank">
                  <u className="">See Recipe</u>
                </a>
              </span>
            </div>

            <div className="mt-2">
              <span className="font-bold">Description: </span>
              {meal.strInstructions.slice(0, 100) + "..."}
            </div>

            <div className="mt-5 text-center">
              <Link to={`/food-Details/${meal.idMeal}`}>
                <button className="btn btn-blue">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/foods")}
        className="btn btn-blue flex mx-auto"
      >
        See All
      </button>
    </div>
  );
};

export default Food;
