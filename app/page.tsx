import Image from "next/image";
import RecipeCollection from "./components/RecipeCollection";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> A little inspiration for your table</p>
          <h1 id="hero-title">Good food,<br />made <em>simple.</em></h1>
          <p className="hero-description">
            Big flavor, everyday ingredients, and recipes worth making again.
            Your next favorite is right here.
          </p>
          <a className="primary-link" href="#recipes">Explore recipes <span aria-hidden="true">↘</span></a>
          <p className="hero-note"><span>✳</span> Cook something lovely today</p>
        </div>
        <a className="hero-feature" href="#recipes" aria-label={`Explore ${recipes[0].title}`}>
          <Image
            className="hero-image"
            src={recipes[0].image}
            alt={recipes[0].title}
            fill
            loading="eager"
            unoptimized
            sizes="(max-width: 760px) 100vw, 48vw"
          />
          <span className="feature-label">THIS WEEK&apos;S PICK</span>
          <span className="feature-caption">
            <span className="feature-caption-kicker">A classic, for good reason</span>
            <span className="feature-title">{recipes[0].title}</span>
            <span className="feature-arrow" aria-hidden="true">↗</span>
          </span>
        </a>
      </section>

      <section className="recipes-section" id="recipes" aria-labelledby="recipes-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow section-eyebrow">A GOOD PLACE TO START <span> / 01</span></p>
            <h2 id="recipes-title">On the menu</h2>
          </div>
          <p className="section-intro">Reliable favorites and new little obsessions.<br />Pick one and make it yours.</p>
        </div>
        <RecipeCollection recipes={recipes} />
      </section>

      <footer className="site-footer" id="about">
        <a className="wordmark footer-wordmark" href="#top">next<span>bites</span></a>
        <p>Made for good food and the people around it.</p>
        <a href="#recipes">Back to the recipes ↑</a>
      </footer>
    </main>
  );
}
