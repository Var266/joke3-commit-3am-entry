// make.fun entry: The 3 AM Commit Message
// Writes one original commit message to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "fix: revert the 3 AM deploy I was so confident about, it took down prod (confidence: 98%, accuracy: 0%)";

// Gate check, mirroring the bounty scorer: 1-200 chars, single line, not blank.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) throw new Error(`entry is ${chars} chars, gate needs 1-200`);
if (ENTRY.trim().length === 0) throw new Error("entry is blank");
if (ENTRY.includes("\n")) throw new Error("entry must be a single line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${chars} chars to /output/entry.txt`);
