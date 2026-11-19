import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../../data/recipes";

export const dynamicParams = false;

export function generateStaticParams() {
  return recipes.map(({ id }) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    return { title: "Recipe not found | NextBites" };
  }

  return {
    title: `${recipe.title} | NextBites`,
    description: recipe.description,
  };
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="recipe-detail">
      <Link className="back-link" href="/#recipes">
        <span aria-hidden="true">←</span> All recipes
      </Link>
      <article>
        <div className="detail-art">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            priority
            unoptimized
            sizes="(max-width: 760px) 100vw, 60vw"
          />
          <span className="detail-emoji" aria-hidden="true">{recipe.emoji}</span>
        </div>
        <div className="detail-copy">
          <p className="eyebrow">{recipe.cuisine.toUpperCase()}</p>
          <h1>{recipe.title}</h1>
          <p className="detail-description">{recipe.description}</p>
          <p className="detail-meta">
            {recipe.minutes} minutes <span aria-hidden="true">·</span> {recipe.difficulty}
          </p>
          <div className="detail-columns">
            <section aria-labelledby="ingredients-title">
              <p className="eyebrow">GET SET</p>
              <h2 id="ingredients-title">Ingredients</h2>
              <ul>
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="steps-title">
              <p className="eyebrow">LET&apos;S COOK</p>
              <h2 id="steps-title">The steps</h2>
              <ol>
                {recipe.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
