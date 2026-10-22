import fs from "node:fs";

fs.rmSync("dist", { recursive: true, force: true });
fs.cpSync("site", "dist", { recursive: true });

console.log("built → dist/");
