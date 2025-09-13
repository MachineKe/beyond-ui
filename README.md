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

### Troubleshooting: Styles not applied in consumer project

If you have installed Tailwind CSS but your beyond-ui components are unstyled, check:

1. **Tailwind config content:**  
   Open your `tailwind.config.js` in the consuming app. Make sure you have something like:

   ```js
   module.exports = {
     content: [
       "./src/**/*.{js,ts,jsx,tsx}",
       "./node_modules/@beyondcorp/beyond-ui/dist/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       // your theme config
     },
     plugins: [],
   }
   ```

2. **Import Tailwind CSS:**  
   Make sure your app's entry point (`src/index.js`, `src/main.tsx`, etc.) has:
   ```js
   import './index.css'; // or wherever your Tailwind CSS is output
   ```

3. **Check build output:**  
   Look in your compiled site's HTML dev tools. Search for Tailwind utilities (e.g., `class="bg-primary-500"`, `p-4`, etc.) injected into the class attributes of beyond-ui components. If present but not styled, Tailwind CSS is not being loaded.

4. **Purge and rebuild:**  
   Delete your build output and `.next`, `dist`, or similar folders and restart the dev server. Sometimes Tailwind's JIT watcher misses node_modules changes the first time.

5. **No duplicate Tailwind instances:**  
   Make sure only one Tailwind is present in node_modules (check for accidental hoisting or duplicates).

If after these steps styles are still missing, provide your exact consumer project tailwind.config.js and css imports for further support.

### If Tailwind works but beyond-ui components are unstyled

- Double-check your tailwind.config.js:

  - The `content` **must** include the path to the built JS/CJS files in node_modules:
    ```js
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/@beyondcorp/beyond-ui/dist/**/*.{js,jsx,cjs,mjs,ts,tsx}"
    ]
    ```
  - Restart your dev server after every tailwind.config.js/content change, so Tailwind JIT detects new files.
- Make sure you have no `.npmignore`, `.gitignore`, or other config that would prevent node_modules/** imports or CSS output.
- If you are using frameworks (Next.js, Vite), confirm your tailwind.config.js is at the project root and not shadowed by a monorepo/hoist.
- Open the page and inspect beyond-ui elements in dev tools. If their classes look correct but they are not styled, it means Tailwind’s CSS did not include those utility classes (purged).
- Try temporarily adding a utility like `bg-accent-700` in your consumer src/App.tsx and in a beyond-ui component. If it works in src/ but not in beyond-ui, the content config is misconfigured.

If these checks don’t resolve the styling, please paste your consumer project’s tailwind.config.js content and your import statements for additional troubleshooting.
