# Tailwind Tokens — React pricing app

A small React app that uses **design tokens** with Tailwind CSS. The UI is driven from a single place (`src/index.css`), so designers can change colors and typography without touching component code.

---

## For designers

### Where the design lives

All visual design is controlled from **one file**: **`src/index.css`**.

That file defines **design tokens** in three layers:

| Layer | Purpose | Example |
|-------|--------|--------|
| **Primitive** | Raw palette values (hex, rgba) | `--color-cream-50`, `--color-ink` |
| **Semantic** | Purpose-based names used across the app | `--color-surface`, `--color-text-primary`, `--color-card` |
| **Component** | Tokens for specific UI elements | `--color-btn-primary`, `--color-btn-secondary` |

**Change a primitive** (e.g. `--color-cream-50`) and every semantic and component token that uses it updates everywhere — cards, buttons, text, backgrounds.

### How tokens become classes

Tailwind turns each token into utility classes automatically. The naming convention is the mapping:

- **`--color-{name}`** → use as **`bg-{name}`** (background), **`text-{name}`** (text color), **`border-{name}`**
- **`--font-{name}`** → use as **`font-{name}`**

Examples:

- `--color-card` → `bg-card` (card background)
- `--color-text-primary` → `text-text-primary` (main text)
- `--color-btn-primary` → `bg-btn-primary` (primary button)

So when you add or rename a token in `@theme` in **`src/index.css`**, those classes are available everywhere. No extra config.

### Quick reference for this project

- **`src/index.css`** — Edit tokens here. Primitives at the top, then semantic, then component. Comments explain each block.
- **`src/tailwind-reference.css`** — Reference only (not imported). Lists the Tailwind classes used in the app and which ones map to tokens, so you can see token → class at a glance.

### Running the app

From the project root:

```bash
npm install
npm run dev
```

Open the URL shown in the terminal to see the Pricing page. Change a token in `src/index.css`, save, and the app updates live.

---

## Project structure

All application code lives in **`src/`**:

```
src/
├── index.html          # HTML shell — React mounts into <div id="root">
├── index.jsx           # Entry point: mounts the app
├── index.css           # Global styles + design tokens (edit here for design)
├── tailwind-reference.css   # Class reference for designers (not executed)
├── App.jsx             # Root component
├── pages/
│   └── Pricing.jsx     # Pricing page — plan data and layout
└── components/
    ├── PricingCard/
    │   └── PricingCard.jsx
    └── Button/
        └── Button.jsx
```

Components use **Tailwind utility classes** (e.g. `bg-card`, `text-text-primary`) that reference the tokens in `index.css`. There are no separate `.css` files per component.

---

## Teaching focus (for developers)

| Topic | Where |
|-------|--------|
| Entry point | `src/index.jsx` — renders `<App />` |
| Root component | `src/App.jsx` — renders pages (e.g. `<Pricing />`) |
| Pages | `src/pages/Pricing.jsx` — assembles components and data |
| Reusable components | `src/components/PricingCard/`, `src/components/Button/` |
| Design tokens | `src/index.css` — `@theme` block; Tailwind generates classes from token names |

Vite uses **`src`** as the project root (`vite.config.js`); the dev server serves from `src/index.html`.
