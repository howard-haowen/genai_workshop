# AGENTS.md

Guidance for AI coding agents working in this repository.

## Repository purpose

This repository supports **AI創造工作坊**, a Traditional Chinese workshop series about AI-assisted digital creation, Markdown, Git/GitHub, GitHub Copilot/Codespaces, GitHub Pages, and GitHub Actions.

Most user-facing content is written in **Traditional Chinese**. Keep that language unless the user explicitly asks otherwise.

## Current structure

The repository now uses clean year-based workshop URLs.

Source content lives on `main`:

```text
index.html              # root year selector for GitHub Pages
README.md               # repository overview
AGENTS.md               # instructions for AI coding agents
.github/workflows/      # deployment workflow
workshops/
├── 2025/               # archived 2025 workshop source materials and apps
└── 2026/               # current-year workshop scaffold/source materials
```

Published content is generated on `gh-pages`:

```text
index.html              # year selector
2025/                   # published 2025 materials
2026/                   # published 2026 materials
```

Important public URLs:

- `https://howard-haowen.github.io/genai_workshop/`
- `https://howard-haowen.github.io/genai_workshop/2025/`
- `https://howard-haowen.github.io/genai_workshop/2026/`

## Branch model

### `main`

`main` is the source branch. Edit source files here.

Use `workshops/<year>/` for year-specific materials. For example:

- `workshops/2025/w1_deck_marp.md`
- `workshops/2025/apps/flash-cards/`
- `workshops/2025/apps/games/`
- `workshops/2025/apps/webpages/`
- `workshops/2026/index.html`
- `workshops/2026/README.md`

### `gh-pages`

`gh-pages` is generated/published output for GitHub Pages. Do **not** make normal source edits directly on `gh-pages` unless the user specifically asks for an emergency published-site patch.

The deployment workflow replaces the published branch from the generated `build/` directory. Manual edits on `gh-pages` can be overwritten.

## Deployment workflow

`.github/workflows/deploy.yaml` builds the site on pushes to `main` and pull requests:

1. Copies root `index.html` to `build/index.html`.
2. Iterates over each `workshops/<year>/` directory.
3. Copies `workshops/<year>/index.html` to `build/<year>/index.html`.
4. Converts `workshops/<year>/*_marp.md` to `build/<year>/*.html` using `marpteam/marp-cli:latest` in Docker.
5. Copies `workshops/<year>/apps/*` to `build/<year>/apps/` when present.
6. Deploys `build/` to `gh-pages` on pushes to `main`.
7. Creates PR previews using `rossjrw/pr-preview-action@v1`.

Static apps follow the path pattern `workshops/<year>/apps/<app-name>/`. For example, `workshops/2025/apps/flash-cards/` is published at `/genai_workshop/2025/apps/flash-cards/`. Other app folders, such as `games` or `webpages`, follow the same pattern. Each app folder’s default entry page is `index.html`.

## Adding a new year

To add another workshop year:

1. Create `workshops/<year>/`.
2. Add `workshops/<year>/index.html` and `workshops/<year>/README.md`.
3. Add Marp slide sources such as `w1_deck_marp.md` inside that year folder.
4. Add static app folders, such as `apps/flash-cards/`, inside that year folder if needed. Other apps follow `apps/<app-name>/`; each app folder should include `index.html` as its entry page.
5. Push to `main`; the workflow publishes the new year under `/<year>/`.

## Marp slide conventions

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
- Year-specific slide files intended for publication should be named `*_marp.md` and placed directly inside `workshops/<year>/`.
- Published slide links should include the year path, e.g. `/genai_workshop/2025/w1_deck_marp.html`.

## Static apps

The apps are plain HTML/CSS/JavaScript without a build step.

General app guidance:

- Prefer web applications. A framework such as React is acceptable when a user specifically asks for a richer app, but plain HTML/CSS/JavaScript is preferred for this repo unless a build step is justified.
- Web applications should be responsive and compatible with both desktop and mobile devices.
- Web applications should be deployable on GitHub Pages.
- After testing applications locally, ensure the GitHub workflow deploys them under the appropriate year-specific app path.
- The interface language of web applications should be Traditional Chinese (`繁體中文`).

### App folder pattern

Apps live under:

```text
workshops/<year>/apps/<app-name>/
```

The deployment workflow copies them to:

```text
https://howard-haowen.github.io/genai_workshop/<year>/apps/<app-name>/
```

For example, if a year contains `workshops/<year>/apps/flash-cards/`, it deploys to:

```text
https://howard-haowen.github.io/genai_workshop/<year>/apps/flash-cards/
```

Other apps follow the same pattern. For example, `workshops/2025/apps/games/` deploys to `/genai_workshop/2025/apps/games/`, and `workshops/2025/apps/webpages/` deploys to `/genai_workshop/2025/apps/webpages/`. Each app folder’s default entry page is `index.html`.

### `flash-cards/`

Runtime data shape in `data.json`:

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

`script.js` expects `cards` to be a non-empty array and reads `back.romanization` plus `back.definition`.

## Editing rules for agents

- Prefer editing `main` source files, not generated files on `gh-pages`.
- Do not manually edit generated `.html` slide outputs unless the user explicitly asks to patch generated output.
- Preserve archived year content unless the user explicitly asks to update that year.
- Add new workshop content under the correct `workshops/<year>/` directory.
- Avoid adding dependencies unless necessary. The repo intentionally uses Markdown, Marp, GitHub Actions, and static web files.
- Keep file and directory names stable because workflow paths and published URLs depend on them.
- Do not commit or push changes unless the user explicitly asks.

## Validation checklist

Use the most relevant checks for the change:

- For Markdown-only changes: inspect rendered Markdown/Marp syntax for broken tables, frontmatter, or slide separators.
- For Marp changes: run the GitHub Actions workflow or local Marp conversion if Docker/Marp is available.
- For `flash-cards/`: serve the relevant year folder over HTTP and verify `data.json` loads, card navigation works, and import/export still use the expected JSON shape.
- For workflow changes: review `.github/workflows/deploy.yaml` carefully for source/destination paths and branch names (`main`, `gh-pages`).
- After pushing workflow changes, check the GitHub Actions run status.

## Known caveats

- `gh-pages` contains generated/published files and is intentionally smaller than `main`.
- The workflow now uses clean versioned URLs only; legacy root-level slide URLs are not preserved by design.
- Local Docker may not be running even when Docker CLI is installed. GitHub Actions runs Docker on `ubuntu-latest`.
- Some content references external image URLs; when editing slides, avoid replacing these with unstable or inaccessible URLs unless necessary.
