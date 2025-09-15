# CSA Games

This project provides a collection of review games for AP Computer Science A topics. The app now uses the [Vite](https://vitejs.dev/) build toolchain and the latest React runtime for a faster developer experience and lean production bundles.

## Getting started

Install dependencies once after cloning the repository:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

This starts Vite on [http://localhost:5173](http://localhost:5173). The page reloads automatically as you edit source files.

### Run tests

```bash
npm test
```

Vitest runs the unit tests in watch mode by default. Press `q` to quit.

### Create a production build

```bash
npm run build
```

The production assets are generated in the `docs` directory so they can be published with GitHub Pages. The Vite configuration uses relative URLs (`base: './'`), allowing the site to be hosted from any repository name or custom domain without additional changes.

### Preview the production build locally

```bash
npm run preview
```

This serves the bundled site from the `docs` folder for final verification before deploying to GitHub Pages.
