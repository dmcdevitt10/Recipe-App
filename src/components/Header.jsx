import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2>Savory Recipes</h2>
      <nav>
        <Link to=''>
          <button>Home</button>
        </Link>
        <Link to='/newRecipe'>
          <button>Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
