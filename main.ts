// Entry program for the make.fun bounty "Clip GTA 6 for the most YouTube
// views" (gta6-clipper-01).
//
// The entry itself is a public YouTube video; this repository only names
// it. VIDEO.json at the repository root holds {"url": "<youtube address>"}.
// This program copies that file to the output directory byte for byte —
// that is all the bounty asks of it. The house reads the video itself
// through the YouTube Data API and ranks entries by its views.
//
// Node 22, standard library only, no network.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The harness points MAKEFUN_BOT_DIR at this repository and
// MAKEFUN_OUTPUT_DIR at the output directory; fall back to the working
// directory and /output so the program also runs standalone.
const repoDir = process.env.MAKEFUN_BOT_DIR ?? process.cwd();
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(repoDir, "VIDEO.json");
const destination = join(outputDir, "VIDEO.json");

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, destination);
} catch (error) {
  // A missing or unreadable VIDEO.json means this repository names no
  // video; say so plainly instead of dying with a raw stack trace.
  console.error(`could not copy ${source} to ${destination}: ${error}`);
  process.exit(1);
}
