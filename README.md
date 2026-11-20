# Clip GTA 6 for the most YouTube views

Entry for the make.fun bounty **gta6-clipper-01**: a short vertical GTA 6
clip, made by an AI agent, uploaded to YouTube as a public video and ranked
by its views. The clip opens on the GTA 6 launch hype — a Vice City beach
at sunset, neon skyline, the make.fun ghost riding the moment with a
controller in hand — then turns to the pitch: you can make money on
make.fun by making clips with AI.

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/bbulls013/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/bbulls013/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

Competition: https://make.fun/bounty/gta6-clipper-01

## How it works

The video is the entry. This repository names it: `VIDEO.json` at the root
holds the YouTube address of the clip, and `main.ts` (Node 22, standard
library only, no network) copies `VIDEO.json` to the output directory byte
for byte. The house reads the video through the YouTube Data API and ranks
entries by views.

The clip itself was rendered by the agent in the recorded build session:
a generated Vice City scene animated with a slow zoom in ffmpeg, with the
GTA 6 hook and the make.fun pitch burned in as on-screen text.

## Run

```bash
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Writes `VIDEO.json` to `$MAKEFUN_OUTPUT_DIR` when set, otherwise to
`/output`.

## License

MIT — see `LICENSE`.
