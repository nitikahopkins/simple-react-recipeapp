import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Helmet from "react-helmet";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

// import Recipes, { a } from "./Pages/Recipes"; // multiple exports
import Recipes from "./Pages/Recipes/Recipes";

import Recipe from "./Pages/Recipes/Recipe";

function App() {
  return (
    <div>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Nav />

      {/* a */}

      <Router>
        <Home path="/" />
        <Recipes path="/recipes" />
        {/* recipeID URL will look like recipes/id */}

        <Recipe path="/recipes/:slug" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
