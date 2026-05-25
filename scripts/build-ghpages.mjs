import { execSync } from "child_process";

process.env.BASE_PATH = "/Excercises_practice/";
execSync("vite build", { stdio: "inherit", env: { ...process.env } });
