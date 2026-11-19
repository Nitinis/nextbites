# NextBites

A searchable collection of quick recipes with a prebuilt page for every recipe.

## Local development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Run `npm run build` to generate the static site in `out/`.

## GitHub Pages

The GitHub Actions workflow builds the static export for pull requests and deploys it when changes reach `main`. In repository settings, choose **Settings → Pages → Build and deployment → GitHub Actions** as the source. The workflow derives the repository subpath automatically, so the public URL is `https://<owner>.github.io/<repository>/`.

Recipe detail routes are generated from `app/data/recipes.ts` with `generateStaticParams`. Unknown recipes use the app's not-found UI.
