// "Sorry, I Heard That Wrong" — make.fun one-liner entry.
// Writes exactly one line — the apology a smart speaker gives its owner
// after mishearing them — to /output/entry.txt. Deterministic: the same
// bytes on every run (sha256 6aaf3fffc1e5cdd3d99f0898319f6353e0b845afea034abdcf74431de3e1a936).
// 89 characters, 1 line, inside the 140-char gate.
import { writeFileSync, mkdirSync } from "node:fs";

const entry =
  "Sorry — you said 'call Mom'. I called your boss instead. He knows about the sick day now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
