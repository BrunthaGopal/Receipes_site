import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getIngredientImg, mealDetails } from "../api";
import Ingredients from "../components/Ingredients";
import Preloader from "../components/Preloader";
import ReactPlayer from "react-player/youtube";
import { isEmpty } from "../utils";

const MealInfo = () => {
  const [meal, setMeal] = useState({});
  const [ingredients, setIngredients] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    const getMeal = async () => {
      let mealInfo = await mealDetails(id);
      setMeal(mealInfo.meals[0]);
      getData();
    };
    getMeal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meal]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getData = async () => {
    let data = [];
    let i = 1;
    for (i; i <= 20; i++) {
      const item = {
        name: meal[`strIngredient${i}`],
        measure: meal[`strMeasure${i}`],
        img: getIngredientImg(meal[`strIngredient${i}`]),
      };
      data.push(item);
      i += 1;
    }
    return setIngredients(data);
  };

  return (
    <>
      <div className="container black-text text-darken-2 mb-3">
        <div className="margin-tb row mb-3 meal-info ">
          {!isEmpty(meal) ? (
            <>
              <div className="col s12 m5 mb-3">
                <h4 className="center-align">
                  <span>{meal.strMeal}</span>
                </h4>
                <img
                  className="materialboxed responsive-img"
                  src={meal.strMealThumb}
                  alt={`${meal.strMeal} meal`}
                />
              </div>
              <div className="col s12 m7">
                <h4 className="center-align">
                  <span>Ingredients</span>
                </h4>
                <div className="d-flex justify-content-center align-items-center">
                  <Ingredients ingredients={ingredients} />
                </div>
              </div>
            </>
          ) : (
            <Preloader />
          )}
        </div>
        <div className="row center-align">
          <div className="col s12">
            <h4>
              <span>Instructions</span>
            </h4>
            <p>{meal.strInstructions}</p>
          </div>
        </div>
        {meal.strYoutube && (
          <div className="row center-align">
            <div className="col s12">
              <h4>
                <span>Demo</span>
              </h4>
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player"
                  url={meal.strYoutube}
                  width="100%"
                  height="100%"
                  pip={true}
                  stopOnUnmount={false}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MealInfo;
