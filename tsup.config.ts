import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  sourcemap: false,
  target: 'esnext',
  minify: false,
  splitting: false,
  treeshake: true,
  tsconfig: "tsconfig.build.json"
});