# beyond-ui
# beyond-ui

## Tailwind CSS Setup Required

**beyond-ui** components are styled using Tailwind CSS utility classes. To see the styled components, your app must:

1. Install Tailwind CSS (https://tailwindcss.com/docs/installation).
2. Configure your tailwind.config.js to include your source files and also:
   ```js
   content: [
     "./node_modules/@beyondcorp/beyond-ui/dist/**/*.js",
     "./src/**/*.{js,ts,jsx,tsx}",
     // ...your other content paths
   ]
   ```
3. Import Tailwind’s stylesheet in your main entry (usually `import './index.css'` or similar).

**Note:** No CSS is bundled with the library. The consumer project must build Tailwind to activate all required styles, as with all Tailwind component libraries.

### Do I really need Tailwind in my project for beyond-ui components to be styled?

**Yes, for full theme-ability and correct Tailwind utility style application.**

- beyond-ui follows [Tailwind library best practices](https://tailwindcss.com/docs/using-with-preprocessors#using-with-libraries) and emits Tailwind class names, NOT bundled CSS.
- This gives maximum flexibility: consumers can use their own Tailwind theme, purge unused UI classes, and have zero style conflicts.

**Alternatives:**
- If you do NOT want consumers to use Tailwind, you would need to ship a pre-built CSS file with all required styles, and users would have to `import 'beyond-ui/styles.css'`.  
  - This breaks Tailwind composability and is discouraged by Tailwind and most major UI libraries.

**Summary:**  
To get fully themed, tree-shakable, future-proof components, consumers should add Tailwind. Only in legacy/CSS-bundling approaches should you ship CSS, and that would require a major change to your build and user story.
