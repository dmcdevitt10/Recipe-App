import React, { useState } from "react";
import classes from "./NewRecipeScreen.module.css";
import { Formik } from "formik";
import axios from "axios";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  let initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    axios.post(`https://recipes.devmountain.com/recipes`, values);
    console.log(values);
    
  };

  return (
    <section className={classes.section}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit} className={classes.form}>
              <h1>Tell us about your Recipe!</h1>
              <div className={classes.name_image}>
                <input
                  className={classes.input}
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                  value={values.recipeName}
                  name="recipeName"
                />
                <input
                  className={classes.input}
                  type="text"
                  placeholder="Image URL"
                  onChange={handleChange}
                  value={values.imageURL}
                  name="imageURL"
                />
              </div>

              <div className={classes.radio_btns}>
                <div>
                  <input
                    type="radio"
                    name="type"
                    onChange={handleChange}
                    value="Cook"
                  />
                  <h2>Cook</h2>
                </div>
                <div>
                  <input
                    type="radio"
                    name="type"
                    onChange={handleChange}
                    value="Bake"
                  />
                  <h2>Bake</h2>
                </div>
                <div>
                  <input
                    type="radio"
                    name="type"
                    onChange={handleChange}
                    value="Drink"
                  />
                  <h2>Drink</h2>
                </div>
              </div>

              <div className={classes.times}>
                <input
                  className={classes.input}
                  type="text"
                  placeholder="Prep Time"
                  onChange={handleChange}
                  value={values.prepTime}
                  name="prepTime"
                />
                <input
                  className={classes.input}
                  type="text"
                  placeholder="Cook Time"
                  onChange={handleChange}
                  value={values.cookTime}
                  name="cookTime"
                />
                <input
                  className={classes.input}
                  type="text"
                  placeholder="Serves"
                  onChange={handleChange}
                  value={values.serves}
                  name="serves"
                />
              </div>

              <div className={classes.ingredients}>
                <div className={classes.add_ing}>
                  <input
                    className={classes.input}
                    type="text"
                    placeholder="Ingredient"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className={classes.input}
                    type="text"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <div className={classes.show_ing}>
                  <ul>
                    {ingredients.map((ingredient) => {
                      return (
                        <li>
                          {ingredient.quantity} {ingredient.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <button
                type="button"
                className={classes.orange_btn}
                onClick={addIngredient}
              >
                Add Another
              </button>

              <textarea
                className={classes.inst_input}
                placeholder="What are the Intructions?"
                onChange={handleChange}
                value={values.instructions}
                name="instructions"
              />

              <button type="submit" className="blue-btn">
                Save
              </button>
            </form>
          );
        }}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
