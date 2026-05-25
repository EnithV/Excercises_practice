import { defineConfig } from "vite";
import { cpSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const base = process.env.BASE_PATH || "/";

/** Copy js/css so GitHub Pages (gh-pages) keeps demos + Java/JS/Python code tabs */
function copyStaticAssets() {
  return {
    name: "copy-static-assets",
    closeBundle() {
      const out = join(__dirname, "dist");
      cpSync(join(__dirname, "js"), join(out, "js"), { recursive: true });
      cpSync(join(__dirname, "css"), join(out, "css"), { recursive: true });
      cpSync(join(__dirname, ".nojekyll"), join(out, ".nojekyll"));
    }
  };
}

export default defineConfig({
  base,
  root: ".",
  publicDir: false,
  plugins: [copyStaticAssets()],
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
