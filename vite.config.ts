

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'


export default defineConfig({
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    rollupOptions: {
      input: 'src/index.ts',
      output: [
        {
          dir: 'dist',
          format: 'es',
          name: "request",
          entryFileNames: "[name].es.js",
        },
        {
          dir: 'dist',
          format: 'umd',
          name: 'request',
          entryFileNames: "[name].umd.js",
        },
        {
          dir: 'dist',
          format: 'cjs',
          name: 'request',
          entryFileNames: "[name].cjs.js",
        },
      ]
    }
  },
  plugins: [
    dts()
  ]
})
