import Link from "next/link";

export default function NavBar() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="NextBites home">
        next<span>bites</span>
      </Link>
      <nav className="nav-links" aria-label="Main navigation">
        <Link href="/#recipes">Recipes</Link>
        <Link href="/#about">Our kitchen</Link>
        <Link className="nav-cta" href="/#recipes">Find a recipe <span aria-hidden="true">↗</span></Link>
      </nav>
    </header>
  );
}