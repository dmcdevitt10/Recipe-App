import React, { useEffect, useState } from "react";
import AdBanner from "./AdBanner";
import axios from "axios";
import RecipeCard from "../newRecipeComponents/RecipeCard";
import classes from "./HomeScreen.module.css";
import { ImSearch } from "react-icons/im";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes`).then((res) => {
      console.log(res.data[0]);
      setRecipes([
        res.data[0],
        res.data[1],
        res.data[2],
        res.data[3],
      ]);
    });
  });

  const displayRecipes = recipes
    .filter((recipe) => {
      let name = recipe.recipe_name.toLowerCase();
      let search = searchInput.toLowerCase();
      return name.includes(search);
    })
    .map((recipe) => {
      return <RecipeCard recipe={recipe} />;
    }, []);

  return (
    <div>
      <AdBanner />
      <div className={classes.search_section}>
        <div className={classes.input_btn_container}>
          <button className={classes.btn}>
            <ImSearch />
          </button>
          <input
            className={classes.search_input}
            placeholder="Search for a Recipe"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
        </div>
      </div>
      <div className={classes.recipes_container}>
        {displayRecipes}
        {/* <RecipeCard recipes={recipes}/> */}
      </div>
    </div>
  );
};

export default HomeScreen;
