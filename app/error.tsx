"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="state-page">
      <p className="eyebrow">A LITTLE SPILL</p>
      <h1>That didn&apos;t go to plan.</h1>
      <p>Try again. Your next good bite is still waiting.</p>
      <button className="primary-link" onClick={reset}>
        Try again <span aria-hidden="true">↻</span>
      </button>
    </main>
  );
}
