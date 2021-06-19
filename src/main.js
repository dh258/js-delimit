const fs = require("fs");

const src = fs.readFileSync("id_rsa", {
  encoding: "utf-8",
});

const arrText = src.split(/[\r\n]+/);
const result = arrText.join("\\n");

fs.writeFileSync("output.key", result, { encoding: "utf-8" });
