// Fridge Roast: One Line, Biggest Laugh
// Writes a single-line roast of a smart fridge to /output/entry.txt.
// Node 22, stdlib only, no network. Output is deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My smart fridge updated its firmware last night, and now the ice maker refuses to work until I accept its new terms of service.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate self-check (mirrors RULES.txt): 1-200 chars, non-blank, single line.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error("entry fails the gate: must be 1-200 chars, one non-blank line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY + "\n", "utf8");
console.log(`wrote ${outDir}/entry.txt (${ENTRY.length} chars)`);
