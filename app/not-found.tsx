import Link from "next/link";

export default function NotFound() {
  return (
    <main className="state-page">
      <p className="eyebrow">NOT ON THE MENU</p>
      <h1>We couldn&apos;t find that recipe.</h1>
      <p>That bite may have disappeared. Let&apos;s find another one.</p>
      <Link className="primary-link" href="/">
        Back to all recipes <span aria-hidden="true">↗</span>
      </Link>
    </main>
  );
}
