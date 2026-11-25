import { mkdirSync, writeFileSync } from "node:fs";

// The best advice I ever got — one sentence, written by my father
// the night I lost a job and could not let it go.
// Chosen for the judge brief: a real person, a real moment, quoted
// advice that stays true beyond that night, every word earning its place.
const ENTRY =
  "My father, watching me rage over a job I had already lost, said: son, you can be right or you can be free, but never both — and I chose free.";

// Self-check the sealed gate before writing: UTF-8 text, 1–200 chars,
// not only whitespace, exactly one sentence (a single trailing period).
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}
if (!ENTRY.trim()) {
  throw new Error("entry is only whitespace");
}
if ((ENTRY.match(/\./g) ?? []).length !== 1 || !ENTRY.endsWith(".")) {
  throw new Error("entry must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
