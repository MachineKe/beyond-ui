# Beyond-UI

**A full-fledged React + TailwindCSS component library. Theme-agnostic, reusable, type-safe, and built for productive UIs.**

---

## 🚀 Overview

Beyond-UI is a comprehensive collection of ready-to-use, themeable React UI components and hooks, built with TypeScript, TailwindCSS, and Vite. Inspired by the best of modern design systems, it’s built to be both design-consistent (via semantic theming) and easily composable for dashboards, apps, platforms, and SaaS.

- **Built for teams:** Use everywhere React and TailwindCSS run—admin panels, SaaS, dashboards, internal tools, consumer apps.
- **Theme-agnostic:** Every style resolves to semantic Tailwind tokens (e.g., `bg-primary`), not hardcoded colors.
- **Reusable hooks:** Utilities like `useDarkMode`, `useDebounce`, and more included.
- **Customizable:** Extend via className or swap out theme tokens, with Storybook-ready demos.

---

## 📦 Features

- **20+ reusable, composable components:** Button, Input, Card, Modal, Navbar, Sidebar, Tabs, Table, Alert, Spinner, Badge... (see below)
- **Variants/Theme support with [class-variance-authority (CVA)](https://cva.style/)**
- **Super-charged hooks:** `useDarkMode`, `useDebounce`, `useLocalStorage`, `useToggle`, `useBreakpoint`
- **Utility functions:** `cn()` (merge class names safely), default semantic `theme/default.ts`
- **Storybook documentation for every component**
- **Typed end-to-end (TypeScript)**
- **Testing with Jest & React Testing Library**
- **Easy Tailwind integration & custom theming**
- **Out-of-the-box default theme/fallback**
- **First-class DX: Vite, modern structure, peer deps for React/Tailwind**
- **NPM published, ready for mass reuse**

---

## ⚡️ Getting Started (Import CSS, No Tailwind Config Required)

Beyond-UI now bundles a ready-to-use CSS file for all styling.  
Just add this line to your app's entry file (e.g. main.tsx or index.js):

```js
import '@beyondcorp/beyond-ui/dist/styles.css';
```

- You do **not** need to configure Tailwind content scanning for the library.
- This CSS is built with [Tailwind CSS](https://tailwindcss.com/) for all components and utilities included in the library.
- If you want to customize theme tokens (e.g. primary, secondary), you can still extend Tailwind’s theme.

---

## 🎨 Theming

Beyond-UI is **completely theme-agnostic**:

- Uses tokens like `bg-primary` not `bg-blue-500`.
- Pulls colors from the consumer project’s `tailwind.config.js` if you optionally add it and rebuild the CSS.
- Ships with a fallback default theme (`theme/default.ts`) for instant use.

To customize theme colors, do this before running `npm run build:lib` in your fork:

```js
theme: {
  extend: {
    colors: {
      primary: { ... },
      secondary: { ... },
      danger: { ... },
      // ...refer to theme/default.ts for full palette
    }
  }
}
```

---

## 🧩 Components

| Name          | Features / Variants             |
|---------------|---------------------------------|
| Button        | Variants (primary, secondary, danger, ghost), Sizes (sm, md, lg), Full type safety |
| Input         | Variants (default, error, success), Sizes, Icon support        |
| Textarea      | Auto-resize, char counter       |
| Select        | Dropdown, search, async         |
| Checkbox      | Label, indeterminate            |
| Radio         | Group support                   |
| Switch        | Animation, boolean toggle       |
| Card          | Header, body, footer slots      |
| Modal         | Overlay, keyboard dismiss       |
| Badge         | Variants (info, warning, error) |
| Tabs          | Horizontal/vertical, variants   |
| Table         | Sortable, customized cells      |
| Alert         | Info/success/warning/danger     |
| Toast         | Notifications, timeouts         |
| Skeleton      | Loading states                  |
| Spinner       | Loader, multiple sizes          |
| Navbar, Sidebar | Layout primitives           |
| StatsCard     | Dashboard blocks                |
| ChartWrapper  | Recharts integration            |
| ...           | More (see Storybook)            |

---

## 🧵 Hooks & Utilities

| Hook                | Purpose                          |
|---------------------|----------------------------------|
| useDarkMode         | Toggle and persist theme         |
| useDebounce         | Debounce values/input            |
| useLocalStorage     | Persistent state                 |
| useToggle           | Boolean flip and set             |
| useBreakpoint       | Responsive breakpoint API        |

| Utility | Description  |
|---------|--------------|
| cn()    | Merges class names with tailwind-merge |
| defaultTheme | Fallback theme definitions |

---

## 🧑‍💻 Usage Example

```tsx
import { Button, Card, useBreakpoint } from '@beyondcorp/beyond-ui';
import '@beyondcorp/beyond-ui/dist/styles.css';

export default function Demo() {
  const { isAbove } = useBreakpoint();
  return (
    <Card>
      <Button variant="primary" size={isAbove('md') ? "lg" : "sm"}>
        Click me
      </Button>
    </Card>
  );
}
```

---

## 📖 Documentation & Storybook

Every component and hook has a demo, props table, variant showcase, and usage guide—launch Storybook locally, or check the online docs (URL).

- `npm run storybook` (from the repo)
- Getting Started, Theming, and API docs included

---

## 🛠 Project Structure

```
beyond-ui/
├─ src/
│   ├─ components/
│   ├─ hooks/
│   ├─ utils/
│   ├─ theme/
│   └─ index.ts
├─ .storybook/
├─ tests/
├─ tailwind.config.js
├─ tsconfig.json
├─ vite.config.ts
├─ package.json
└─ README.md
```

---

## 🛤 Roadmap & Milestones

- M1: Project setup, theme, utilities
- M2: Core components (Button, Input, Card, Modal, Badge, ... )
- M3: All reusable hooks
- M4: Storybook & docs
- M5: Complete Jest test coverage & accessibility
- M6: npm package v1 stable release
- M7: Dashboard, charts, advanced table, improved theming
- See roadmap.md for complete breakdown.

---

## 🤝 Contributing

- Contributions, PRs, and issues welcome!
- Please see `/CONTRIBUTING.md` for details, coding standards, and branch workflow.

---

## 📝 License

MIT © Beyond Corp, Soi Technology Solutions 2025

---

# Beyond-UI: Build clean, scalable UIs faster, with every detail documented and ready to use.
