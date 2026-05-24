import { defineConfig } from "vite";

const base = process.env.BASE_PATH || "/";

export default defineConfig({
  base,
  root: ".",
  publicDir: false,
  build: {
    outDir: "dist",
    emptyOutDir: true
  },
  server: {
    port: 5173,
    open: true
  },
  preview: {
    port: 4173
  }
});
