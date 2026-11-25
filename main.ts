// emits the meme bundle/entry.png as the entry artifact; source path stays repo-relative
import { copyFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const SRC = fileURLToPath(new URL('./entry.png', import.meta.url));
const out = (process.env.MAKEFUN_OUTPUT_DIR ?? '/output').replace(/\/$/, '');
mkdirSync(out, { recursive: true });
copyFileSync(SRC, `${out}/entry.png`);
