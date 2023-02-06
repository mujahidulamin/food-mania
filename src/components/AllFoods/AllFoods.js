import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const AllFoods = () => {
  const [meals, setMeals] = useState([]);
  console.log(meals);

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
      <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
        {meals?.map((meal) => (
          <div className="bg-gray-100 p-6 rounded shadow-lg">
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
    </div>
  );
};

export default AllFoods;
