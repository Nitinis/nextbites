"use client";

import { useState } from "react";
import RecipeCard from "./RecipeCard";
import type { Recipe } from "../data/recipes";

export default function RecipeCollection({ recipes }: { recipes: Recipe[] }) {
  const [query, setQuery] = useState("");
  const searchTerm = query.trim().toLowerCase();
  const filteredRecipes = recipes.filter((recipe) =>
    [recipe.title, recipe.cuisine, recipe.description, recipe.difficulty]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm),
  );

  return (
    <>
      <label className="recipe-search">
        <span>Search recipes</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try pasta, breakfast, or easy"
        />
      </label>
      {filteredRecipes.length > 0 ? (
        <div className="recipe-grid">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              index={recipes.indexOf(recipe)}
            />
          ))}
        </div>
      ) : (
        <p className="recipe-empty" role="status">
          No recipes match “{query}”. Try another search.
        </p>
      )}
    </>
  );
}
