import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./RecipeCard.module.css";

const RecipeCard = (props) => {
  const navigate = useNavigate();

  return (
    <div className={classes.card}>
      <div className={classes.image_container}>
        <img src={props.recipe.image_url} />
      </div>
      <h1>{props.recipe.recipe_name}</h1>
      <button
        className="blue-btn"
        onClick={() => navigate(`/recipe/${props.recipe.recipe_id}`)}
      >
        See More
      </button>
    </div>
  );
};

export default RecipeCard;
