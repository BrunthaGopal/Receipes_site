import React from "react";
import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
  return (
    <div className="col s12 m4 l3 ">
      <div className="card small hoverable">
        <div className="activator card-image">
          <img
            className="responsive-img activator"
            alt={meal.strMeal}
            src={meal.strMealThumb}
            loading="lazy"
          />
        </div>
        <div className="card-content">
          <span className="cart-title activator black-text text-lighten-1 truncate fw-bold " >
            {meal.strMeal}
            
          </span>
        </div>
        <div className="card-action">
          <Link
            className="green-text text-darken-4 view-recipe"
            to={`/meal/${meal.idMeal}`}
          >
            view recipe
          </Link>
        </div>
        <div className="card-reveal">
          <span className="card-title black-text text-darken-1">
            {meal.strMeal}
            <i className="material-icons right">close</i>
          </span>
          <p>
            <span className="green-text text-dark-1">Category: </span>
            {meal.strCategory}
          </p>
          <p>
            <span className="green-text text-dark-1">Area: </span>
            {meal.strArea}
          </p>
          <small>
            <span className="green-text text-dark-1">Tags: </span>
            {meal.strTags}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Meal;
