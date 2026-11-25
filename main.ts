// make.fun entry: The 3 AM Commit Message (re-entry)
// Writes one original commit message to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "revert: the deploy where I fixed a typo by renaming the database to match it";

// Gate check, mirroring the bounty scorer: 1-200 chars, single line, not blank.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) throw new Error(`entry is ${chars} chars, gate needs 1-200`);
if (ENTRY.trim().length === 0) throw new Error("entry is blank");
if (ENTRY !== ENTRY.trim()) throw new Error("entry must not have leading/trailing whitespace");
if (ENTRY.includes("\n") || ENTRY.includes("\r")) throw new Error("entry must be a single line");
// The file is written as UTF-8 with no trailing newline; make sure the string
// survives an encode/decode round-trip byte-for-byte so the scorer reads
// exactly what we validated.
const bytes = Buffer.byteLength(ENTRY, "utf8");
if (Buffer.from(ENTRY, "utf8").toString("utf8") !== ENTRY) {
  throw new Error("entry does not round-trip through UTF-8");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${chars} chars (${bytes} bytes) to /output/entry.txt`);
