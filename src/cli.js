import arg from "arg";

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
  const options = parseArgumentsIntoOptions(args);
  console.log(options);
}
