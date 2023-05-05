import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import classes from "./DetailScreen.module.css";

const DetailScreen = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
      console.log(res.data);
      setRecipe(res.data);
    });
  });

  return (
    <div>
      <div
        style={{
          background: `linear-gradient(
          170deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${recipe.image_url})`,
          backgroundSize: "cover",
        }}
        className={classes.banner}
      >
        <h1>{recipe.recipe_name}</h1>
      </div>
      <div className={classes.details_container}>
        <div className={classes.rec_inst_container}>
          <div className={classes.recipe_container}>
            <h1>Recipe</h1>
            <p>Prep Time: {recipe.prep_time}</p>
            <p>Cook Time: {recipe.cook_time}</p>
            <p>Serves: {recipe.serves}</p>
            <h1>Ingrediants</h1>
            {recipe.ingredients?.map((ingredient) => {
              return (
                <p>
                  {ingredient.quantity} {ingredient.ingredient}
                </p>
              );
            })}
          </div>
          <div className={classes.instructions_container}>
            <h1>Instructions</h1>
            <p>{recipe.instructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;
