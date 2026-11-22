import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "You've read a thousand of these tonight, and this one asks nothing of you. Somewhere a cup of coffee is cooling beside an open window, steam thinning into morning light, and no one is waiting for you to finish.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
