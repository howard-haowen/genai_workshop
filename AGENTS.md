# AGENTS.md

Guidance for AI coding agents working in this repository.

## Dependency installation

Before attempting any task that requires git, Python, or Node.js, verify the relevant tools are present and guide the user to install any that are missing. Installation commands differ by OS — always detect the user's platform first.

---

### Git

**Check:**

```bash
git --version
```

If missing:

| OS | Install |
|----|---------|
| **macOS** | `brew install git` (requires [Homebrew](https://brew.sh)) — or install Xcode Command Line Tools: `xcode-select --install` |
| **Windows** | Download and run the installer from <https://git-scm.com/download/win>, or via winget: `winget install --id Git.Git -e --source winget` |

After installing on Windows, reopen the terminal so `git` is on `PATH`.

---

### Python / uv

**Check:**

```bash
uv --version
```

If missing:

| OS | Install |
|----|---------|
| **macOS** | `curl -LsSf https://astral.sh/uv/install.sh \| sh` |
| **Windows (PowerShell)** | `powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 \| iex"` |

Then reload the shell (macOS) or reopen the terminal (Windows) so `uv` is on `PATH`.

**Always run Python via `uv`. Never invoke `python`, `python3`, or `pip` directly.**

```bash
# run a script
uv run script.py

# run a module or inline tool
uv run -m http.server 8000

# add a dependency and run
uv add requests && uv run script.py
```

---

### Node.js / npm

**Check:**

```bash
node --version
npm --version
```

If missing:

| OS | Install |
|----|---------|
| **macOS** | `brew install node` (requires [Homebrew](https://brew.sh)) |
| **Windows** | Download the LTS installer from <https://nodejs.org/en/download>, or via winget: `winget install OpenJS.NodeJS.LTS` |

After installing, reopen the terminal to refresh `PATH`. Verify with `node --version` and `npm --version`.

---

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
│   ├── *.html          # pre-built or generated HTML files
│   └── apps/           # static web apps
└── 2026/               # current-year workshop source materials
    ├── *.html          # pre-built or generated HTML files
    └── haowen-projects/  # project sub-sites (optional)
```

Published content is generated on `gh-pages`:

```text
index.html              # year selector
2025/                   # published 2025 materials
│   ├── *.html
│   └── apps/
2026/                   # published 2026 materials
    ├── *.html
    └── haowen-projects/  (if present in source)
```

Important public URLs:

- `https://howard-haowen.github.io/genai_workshop/`
- `https://howard-haowen.github.io/genai_workshop/2025/`
- `https://howard-haowen.github.io/genai_workshop/2026/`

## Branch model

### `main`

`main` is the source branch. Edit source files here.

Use `workshops/<year>/` for year-specific materials. For example:

- `workshops/2025/w1_deck_marp.html`
- `workshops/2025/apps/flash-cards/`
- `workshops/2025/apps/games/`
- `workshops/2025/apps/webpages/`
- `workshops/2026/index.html`
- `workshops/2026/haowen-projects/<project-name>/`

### `gh-pages`

`gh-pages` is generated/published output for GitHub Pages. Do **not** make normal source edits directly on `gh-pages` unless the user specifically asks for an emergency published-site patch.

The deployment workflow replaces the published branch from the generated `build/` directory. Manual edits on `gh-pages` can be overwritten.

## Deployment workflow

`.github/workflows/deploy.yaml` builds the site on pushes to `main` and pull requests:

1. Copies root `index.html` to `build/index.html`.
2. For **workshops/2025/**:
   - Copies all `*.html` files to `build/2025/`.
   - Copies the `apps/` directory to `build/2025/apps/` when present.
3. For **workshops/2026/**:
   - Copies all `*.html` files to `build/2026/`.
   - Copies the `haowen-projects/` directory to `build/2026/haowen-projects/` when present.
4. Deploys `build/` to `gh-pages` on pushes to `main`.
5. Creates PR previews using `rossjrw/pr-preview-action@v1`.

> **Note:** Each year has its own deployment rules. The 2025 workflow is considered archived and should not be changed. The 2026 workflow uses `haowen-projects/` instead of `apps/`.

> **HTML source convention:**
> - `*.html` files in `workshops/2025/` are **built in GitHub Actions using Marp** — their source is `*_marp.md` and the HTML is generated during the workflow run.
> - `*.html` files in `workshops/2026/` are **created directly** (plain HTML, no Marp build step) and committed as-is to the repository.

## Adding a new year

To add another workshop year:

1. Create `workshops/<year>/`.
2. Add `workshops/<year>/index.html` as the landing page.
3. Add any additional HTML files directly inside `workshops/<year>/`; they will be copied to `build/<year>/`.
4. For project sub-sites, place them under `workshops/<year>/haowen-projects/<project-name>/` with an `index.html` entry page.
5. Update `.github/workflows/deploy.yaml` to handle the new year's specific folder structure.
6. Push to `main`; the workflow publishes the new year under `/<year>/`.

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
- After testing applications locally, ensure the GitHub workflow deploys them under the appropriate year-specific path.
- The interface language of web applications should be Traditional Chinese (`繁體中文`).

### 2025 — `apps/` pattern

Apps for 2025 live under:

```text
workshops/2025/apps/<app-name>/
```

The deployment workflow copies them to:

```text
https://howard-haowen.github.io/genai_workshop/2025/apps/<app-name>/
```

For example, `workshops/2025/apps/flash-cards/` deploys to `/genai_workshop/2025/apps/flash-cards/`. Other apps such as `games/` and `webpages/` follow the same pattern. Each app folder's default entry page is `index.html`.

### 2026 — `haowen-projects/` pattern

Project sub-sites for 2026 live under:

```text
workshops/2026/haowen-projects/<project-name>/
```

The deployment workflow copies `haowen-projects/` (when present) to:

```text
https://howard-haowen.github.io/genai_workshop/2026/haowen-projects/<project-name>/
```

Each project folder's default entry page is `index.html`.

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
- For Marp changes: run the GitHub Actions workflow or a local `marp-cli` conversion (`npx @marp-team/marp-cli`).
- For `flash-cards/`: serve the relevant year folder over HTTP and verify `data.json` loads, card navigation works, and import/export still use the expected JSON shape.
- For workflow changes: review `.github/workflows/deploy.yaml` carefully for source/destination paths and branch names (`main`, `gh-pages`).
- After pushing workflow changes, check the GitHub Actions run status.

## Known caveats

- `gh-pages` contains generated/published files and is intentionally smaller than `main`.
- The workflow now uses clean versioned URLs only; legacy root-level slide URLs are not preserved by design.
- Some content references external image URLs; when editing slides, avoid replacing these with unstable or inaccessible URLs unless necessary.
