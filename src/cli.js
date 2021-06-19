import arg from "arg";

import { convertToNewlineCharacter } from "./main";

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      "--input": String,
      "--output": String,
      "-i": "--input",
      "-o": "--output",
    },
    {
      argv: rawArgs.slice(2),
    }
  );

  return {
    output: args["--output"],
    input: args["--input"],
  };
}

export async function cli(args) {
  const { input, output } = parseArgumentsIntoOptions(args);
  await convertToNewlineCharacter(input, output);
}
