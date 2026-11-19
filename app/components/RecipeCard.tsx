import Image from "next/image";
import Link from "next/link";
import type { Recipe } from "../data/recipes";

export default function RecipeCard({
  recipe,
  index,
}: {
  recipe: Recipe;
  index: number;
}) {
  return (
    <Link className="recipe-card-link" href={`/recipe/${recipe.id}`}>
      <article className="recipe-card">
        <div className="recipe-art">
          <span className="recipe-number">{String(index + 1).padStart(2, "0")}</span>
          <Image
            className="recipe-image"
            src={recipe.image}
            alt={recipe.title}
            fill
            unoptimized
            sizes="(max-width: 420px) 88vw, (max-width: 760px) 44vw, 24vw"
          />
        </div>
        <div className="recipe-content">
          <p className="recipe-cuisine">{recipe.cuisine.toUpperCase()}</p>
          <h3>{recipe.title}</h3>
          <p className="recipe-description">{recipe.description}</p>
          <div className="recipe-meta">
            <span>{recipe.minutes} min</span>
            <span>{recipe.difficulty}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}