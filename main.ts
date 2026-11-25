// One Line, One Laugh — entry program.
// Writes a single funny line of text to /output/entry.txt.
// The line is a fixed, hand-written joke: a small everyday scene
// (a neighbour's dog barking) that escalates into the narrator
// barking back, and lands on a deadpan claim of victory.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My neighbour's dog barks at me every morning, so I started barking back. He stopped. I think I won.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The gate only accepts 1 to 140 characters of UTF-8 text.
// Refuse to write anything outside that range rather than
// silently shipping an entry the scorer would reject.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-140`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${OUT_FILE}`);
