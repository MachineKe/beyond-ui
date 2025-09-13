import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const isLibrary = mode === 'library';
  
  if (isLibrary) {
    return {
      plugins: [
        react(),
        dts({
          insertTypesEntry: true,
        }),
      ],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'BeyondUI',
          formats: ['es', 'cjs'],
          fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
        },
        rollupOptions: {
          external: ['react', 'react-dom', 'tailwindcss'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
          },
        },
      },
      optimizeDeps: {
        exclude: ['lucide-react'],
      },
    };
  }

  return {
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});