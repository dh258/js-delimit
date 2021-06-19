const fs = require("fs");

export async function convertToNewlineCharacter(inputFile, outputFile) {
  const src = fs.readFileSync(inputFile, {
    encoding: "utf-8",
  });

  const arrText = src.split(/[\r\n]+/);
  const result = arrText.join("\\n");

  fs.writeFileSync(outputFile, result, { encoding: "utf-8" });
}
