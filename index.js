import { getConfig } from "./config.js";
import assert from "node:assert";

const callTwice = process.argv[2] === "true";

const PASSWORD = "keyboard-cat";

process.env = {
  ...process.env,
  PASSWORD_STRING: "The secret password is ${PASSWORD}!",
  PASSWORD,
};

if (callTwice) getConfig({});
const config = getConfig({});

console.log(config);

assert(
  config.passwordString === `The secret password is ${PASSWORD}!`,
  "Variable does not match expected value"
);
