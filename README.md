# React pricing app — teaching focus: `src` and App.jsx

A small teaching project focused on the **`src`** folder and how a React app is structured, with **App.jsx** as the root component.

## Project structure

All application code lives in **`src/`**:

```
src/
├── index.html      # Single HTML shell — React mounts into <div id="root">
├── index.jsx       # Entry point: mounts the app into the page
├── index.css       # Global styles (resets, body, fonts)
├── App.jsx         # Root component — start here for teaching
├── pages/
│   ├── Pricing.jsx
│   └── Pricing.css
└── components/
    ├── PricingCard/
    │   ├── PricingCard.jsx
    │   └── PricingCard.css
    └── Button/
        ├── Button.jsx
        └── Button.css
```

- **`index.jsx`** runs once on load and renders `<App />` into the DOM.
- **`App.jsx`** is the top of the component tree; it currently renders the Pricing page. This is the main file to use when teaching structure and composition.

## How to run

From the project root:

```bash
npm install
npm run dev
```

Vite uses **`src`** as the project root (see `vite.config.js`), so the dev server serves the app from `src/index.html` and `src/index.jsx`.

## Teaching focus

| Topic | Where |
|-------|--------|
| Entry point | `src/index.jsx` — creates root, renders `<App />` |
| Root component / component tree | `src/App.jsx` — imports and renders pages (e.g. `<Pricing />`) |
| Pages | `src/pages/Pricing.jsx` — assembles components and data |
| Reusable components | `src/components/PricingCard/`, `src/components/Button/` |
| JSX vs HTML | `className` instead of `class`; expressions in `{ }`; components and props |

Same CSS approach in both components and pages: each component can have its own `.css` file; `index.css` holds global styles.
