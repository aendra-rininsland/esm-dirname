import { strictEqual } from "assert";
import { dirname } from "../index.js";

const __dirname = dirname(import.meta);
const fragments = __dirname.split("/");
const lastFragment = fragments[fragments.length - 1];
strictEqual(
  "test",
  lastFragment,
  `__dirname should be "test", received ${lastFragment}`
);
console.log(`✅ Basic test passed`);
process.exit(0);
