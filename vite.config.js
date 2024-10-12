import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  esbuild: {
    loader: 'jsx',   // Ensuring JSX loader
    include: /\.jsx?$/,  // Apply the JSX loader to .js and .jsx files
  },
})
