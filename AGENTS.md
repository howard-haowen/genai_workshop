# AGENTS.md

Guidance for AI coding agents working in this repository.

## Repository purpose

This repository supports **AI創造工作坊: 文科視角的 AI 應用開發入門**, a Traditional Chinese workshop about Markdown, Git/GitHub, GitHub Copilot/Codespaces, GitHub Pages, and GitHub Actions.

The repo contains:

- Workshop landing documentation in `README.md`.
- Marp slide sources in `*_marp.md`.
- Plain Markdown teaching material such as `markdown_basics.md`, `git_basics.md`, and `md_conversion/instructions.md`.
- Small static web app examples in `flash-cards/`, `games/`, and `webpages/`.
- A GitHub Actions workflow that builds and publishes part of the repo to GitHub Pages.

Most user-facing content is written in **Traditional Chinese**. Keep that language unless the user explicitly asks otherwise.

## Branch model

### `main`

`main` is the source branch. Edit source files here.

Important source files/directories:

- `README.md` — course overview with links to the published slide HTML files.
- `w1_deck_marp.md`, `w2_deck_marp.md`, `w3_deck_marp.md`, `w4_deck_marp.md` — weekly Marp slide sources.
- `markdown_basics_marp.md`, `git_basics_marp.md` — additional Marp slide sources.
- `markdown_basics.md`, `git_basics.md`, `deployQnA.md`, `kanban.md` — supporting teaching notes.
- `flash-cards/` — source for the deployed Taiwanese flash-card static app.
- `games/` — static tic-tac-toe example app; currently present on `main` but not deployed by the existing workflow.
- `webpages/` — static personal-site/webpage examples; currently present on `main` but not deployed by the existing workflow.
- `.github/workflows/deploy.yaml` — deployment pipeline.

### `gh-pages`

`gh-pages` is the generated/published branch for GitHub Pages. Do **not** make normal source edits directly on `gh-pages` unless the user specifically asks for an emergency published-site patch.

Current published branch contents are generated equivalents of selected source files:

- `w1_deck_marp.html`, `w2_deck_marp.html`, `w3_deck_marp.html`, `w4_deck_marp.html`
- `markdown_basics_marp.html`, `git_basics_marp.html`
- `apps/` containing the published copy of `flash-cards/`:
  - `apps/index.html`
  - `apps/style.css`
  - `apps/script.js`
  - `apps/data.json`
  - `apps/agent.md`

The `main` → `gh-pages` mapping is handled by `.github/workflows/deploy.yaml`:

- Converts every root-level `*_marp.md` file to `build/<same_basename>.html` using `marpteam/marp-cli:latest` in Docker.
- Copies `flash-cards/*` into `build/apps/`.
- Deploys `build/` to the `gh-pages` branch on pushes to `main`.
- Creates pull request previews under `gh-pages` using `rossjrw/pr-preview-action@v1`.

## Build and deployment commands

### Local Marp conversion

If Marp CLI is installed locally:

```bash
./convert_marp.sh
```

This converts all root-level `*_marp.md` files to HTML in the repository root.

If `convert_marp.sh` is not executable:

```bash
chmod +x convert_marp.sh
./convert_marp.sh
```

The GitHub Actions workflow uses Docker instead of the local script and writes outputs to `build/`.

### Local static app testing

There is no package manager configuration in this repo. Static apps can be tested with any simple local HTTP server from the relevant directory, for example:

```bash
python3 -m http.server 8000
```

For `flash-cards/`, use an HTTP server instead of opening `index.html` directly, because `script.js` fetches `data.json` and browser file-origin restrictions may block local file fetches.

### Deployment

Pushes to `main` trigger `.github/workflows/deploy.yaml`. The workflow deploys only:

1. Root-level Marp slide HTML outputs.
2. `flash-cards/` copied to `apps/`.

If a user asks to deploy `games/`, `webpages/`, or another app, update `.github/workflows/deploy.yaml` deliberately and document the new published path.

## Project conventions

### Language and audience

- Use Traditional Chinese (`zh-Hant` / `zh-TW`) for workshop-facing UI, slides, explanations, and prompts.
- Keep explanations beginner-friendly and teaching-oriented; this repository is for a humanities-oriented AI application development workshop.
- Preserve the existing tone: clear, encouraging, metaphor-rich, and practical.

### Marp slides

Marp slide files use frontmatter similar to:

```yaml
---
marp: true
theme: default
class: lead
paginate: true
backgroundImage: url('https://img.freepik.com/premium-vector/wave-gradient-purple-pastel-subtle-background-abstract-purple-pastel-gradient-wallpaper_71208-807.jpg')
---
```

Guidelines:

- Keep slide separators as `---`.
- Preserve Marp directives such as `![bg right]`, `![bg fit right]`, and `![right bg fit]` unless intentionally redesigning a slide.
- Root-level slide files intended for publication should be named `*_marp.md`; the workflow converts only those files.
- Published slide links in `README.md` point to `https://howard-haowen.github.io/genai_workshop/<basename>.html`.

### Static apps

The apps are plain HTML/CSS/JavaScript without a build step.

#### `flash-cards/`

- Deployed path: `apps/` on `gh-pages`.
- Runtime data shape in `data.json`:

```json
{
  "cards": [
    {
      "front": "狗仔",
      "back": {
        "romanization": "káu-á",
        "definition": "小狗"
      }
    }
  ]
}
```

- `script.js` expects `cards` to be a non-empty array and reads `back.romanization` plus `back.definition`.
- Keep import/export compatible with this JSON structure.

#### `games/`

- Contains a tic-tac-toe app with `index.html`, `style.css`, `script.js`, and `tic-tac-toe.html`.
- The JavaScript uses DOM APIs and `localStorage` (`ttt_stats`) for stats.
- Currently not copied into `build/` by the deployment workflow.

#### `webpages/`

- Contains static personal website examples.
- Currently not copied into `build/` by the deployment workflow.

## Editing rules for agents

- Prefer editing `main` source files, not generated files on `gh-pages`.
- Do not manually edit generated `.html` slide outputs unless the user explicitly asks to patch generated output.
- If changing published slide content, edit the corresponding `*_marp.md` source and let the workflow regenerate HTML.
- If changing the published flash-card app, edit `flash-cards/`; it deploys to `apps/`.
- If adding new deployable content, update `.github/workflows/deploy.yaml` and explain the resulting public path.
- Avoid adding dependencies unless necessary. The current repo intentionally uses simple Markdown, Marp, and static web files.
- Keep file and directory names stable because README links and workflow copy paths depend on them.
- Do not commit or push changes unless the user explicitly asks.

## Validation checklist

Use the most relevant checks for the change:

- For Markdown-only changes: inspect rendered Markdown/Marp syntax for broken tables, frontmatter, or slide separators.
- For Marp changes: run `./convert_marp.sh` if Marp CLI is available, or rely on the GitHub Actions Docker workflow if local Marp is unavailable.
- For `flash-cards/`: serve `flash-cards/` over HTTP and verify `data.json` loads, card navigation works, and import/export still use the expected JSON shape.
- For `games/`: serve `games/` over HTTP and verify starting/resetting a game, timer behavior, undo, and stats.
- For workflow changes: review `.github/workflows/deploy.yaml` carefully for source/destination paths and branch names (`main`, `gh-pages`).

## Known caveats

- `gh-pages` contains generated/published files and is intentionally much smaller than `main`.
- `games/` and `webpages/` exist on `main` but are not currently included in the published `gh-pages` output.
- The local `convert_marp.sh` writes HTML to the repo root, while the GitHub Actions workflow writes to `build/` before deployment.
- Some content references external image URLs; when editing slides, avoid replacing these with unstable or inaccessible URLs unless necessary.
