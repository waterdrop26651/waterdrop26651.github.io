# waterdrop26651.github.io

Academic homepage for **Zihao Wang (王梓豪)** — M.Phil. student in Artificial
Intelligence at The Chinese University of Hong Kong, Shenzhen.

## Editing content

All page content (news, education, publications, projects) lives in
[`app/page.tsx`](app/page.tsx). Styles are in
[`app/globals.css`](app/globals.css). Replace [`public/avatar.jpg`](public/avatar.jpg)
to update the profile photo, and `public/og.png` for the social preview image.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm test
```

The static site is exported to `out/`. Pushes to `main` are deployed to GitHub
Pages by `.github/workflows/pages.yml`.
