import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "My grandmother's rendang at 2 a.m. after Lebaran prayers — eaten cross-legged on cold tiles, smoke and coconut on my tongue — was so good I apologised to the goat.";

if (entry.length < 1 || entry.length > 200) {
  throw new Error(`Entry must be 1 to 200 characters, got ${entry.length}.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`Wrote ${entry.length} characters to ${join(outDir, "entry.txt")}`);
