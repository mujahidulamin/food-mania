import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import { FaFilePdf } from "react-icons/fa";
import ReactPlayer from "react-player";
import './FoodDetails.css'
const ref = React.createRef();

const options = {
  orientation: "landscape",
  unit: "in",
  format: [5, 11],
};

const FoodDetails = () => {
  const foodDetails = useLoaderData();
  console.log(foodDetails.meals[0]);

  const {
    strMealThumb,
    strInstructions,
    strMeal,
    strArea,
    strCategory,
    strYoutube,
  } = foodDetails.meals[0];

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div ref={ref}>
        <div className="bg-gray-100 p-6 rounded shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-5">
            {strMeal}{" "}
            <Pdf
              targetRef={ref}
              filename="description.pdf"
              options={options}
              x={0.5}
              y={0}
              scale={0.8}
            >
              {({ toPdf }) => (
                <button onClick={toPdf}>
                  <FaFilePdf></FaFilePdf>
                </button>
              )}
            </Pdf>
          </h2>

          <img
            className="object-cover w-full mb-6 rounded shadow-lg xl:h-80"
            src={strMealThumb}
            alt=""
          />
          <div className="text-justify">
            <span className="font-bold ">Description: </span>
            {strInstructions}
          </div>

          <p className="mt-2 mb-2">
            <span className="font-bold ">Country Food: </span> {strArea}
          </p>

          <p className="mt-2 mb-2">
            <span className="font-bold ">Category: </span> {strCategory}
          </p>

          <p className="text-center font-bold text-3xl mb-5">
            Full Recipe Video
          </p>
          <div className="wrapper flex justify-center">
            <ReactPlayer controls url={strYoutube} className="iframe" width={"1160px"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
