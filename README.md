# 🤖 AI創造工作坊

本倉庫保存多年度的 **AI創造工作坊** 教材。課程以文科視角介紹 AI 應用開發。

## 年度課程入口

- [2025 工作坊](https://howard-haowen.github.io/genai_workshop/2025/)
- [2026 工作坊](https://howard-haowen.github.io/genai_workshop/2026/)

## 公開網站

年度入口首頁：

```text
https://howard-haowen.github.io/genai_workshop/
```

## 內容結構

```text
workshops/
├── 2025/    # 2025 年度教材、講義、投影片與靜態應用程式
└── 2026/    # 2026 年度教材、課程規劃文件與 Marp 投影片
```

每個年度資料夾可以包含：

- `index.html` — 該年度的 GitHub Pages 首頁
- `*_marp.md` — Marp 投影片來源檔
- `README.md` — 年度說明
- `planning/` — Educates course design 規劃文件
- `apps/` — 年度靜態應用程式範例，路徑格式為 `apps/<app-name>/`，每個 app 資料夾的預設入口頁是 `index.html`

目前 2025 年度包含：

- Marp 投影片：`w1_deck_marp.md` 到 `w4_deck_marp.md`，以及 `markdown_basics_marp.md`、`git_basics_marp.md`
- 講義與筆記：`markdown_basics.md`、`git_basics.md`、`deployQnA.md`、`kanban.md`
- 靜態應用程式：`apps/flash-cards/`、`apps/games/`、`apps/webpages/`

目前 2026 年度包含年度入口 `index.html`，作為今年度新增教材的入口與預留區。

## 部署方式

推送到 `main` 後，GitHub Actions 會：

1. 複製根目錄 `index.html` 到 GitHub Pages 根目錄。
2. 逐一處理 `workshops/<year>/`。
3. 將每個年度的 `index.html` 複製到 `/<year>/`。
4. 複製年度 `README.md` 與 `planning/` 規劃文件（若存在）。
5. 將年度資料夾中的 `*_marp.md` 轉換為 HTML。
6. 若年度資料夾有 `apps/`，則完整複製到 `/<year>/apps/`。
7. Pull request 會產生 GitHub Pages preview；推送到 `main` 則部署到 `gh-pages`。

`gh-pages` 是產生後的發布分支；一般教材編輯請在 `main` 進行。

## 靜態應用程式路徑

應用程式放在：

```text
workshops/<year>/apps/<app-name>/
```

發布後會出現在：

```text
https://howard-haowen.github.io/genai_workshop/<year>/apps/<app-name>/
```

例如 `flash-cards`：

```text
workshops/2025/apps/flash-cards/index.html
https://howard-haowen.github.io/genai_workshop/2025/apps/flash-cards/
```

其他 app 也使用同一模式，例如 `workshops/<year>/apps/games/` 或 `workshops/<year>/apps/webpages/`。每個 app 資料夾的預設入口頁都是 `index.html`。
