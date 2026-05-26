import { execSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const base = process.env.BASE_PATH || "/Excercises_practice/";

process.env.BASE_PATH = base;
execSync("vite build", { stdio: "inherit", env: { ...process.env, BASE_PATH: base } });

/** Vite emits a hashed CSS under /assets/; gh-pages must load the copied css/styles.css */
const indexPath = join(root, "dist", "index.html");
let html = readFileSync(indexPath, "utf8");
html = html.replace(/<link rel="stylesheet" crossorigin href="[^"]*\/assets\/[^"]+\.css">\s*/g, "");
const sheet = `<link href="${base}css/styles.css" rel="stylesheet">`;
if (!html.includes("css/styles.css")) {
  html = html.replace("</head>", `  ${sheet}\n</head>`);
}
writeFileSync(indexPath, html);
