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
├── 2025/    # 2025 年度教材與範例
└── 2026/    # 2026 年度教材與範例
```

每個年度資料夾可以包含：

- `index.html` — 該年度的 GitHub Pages 首頁
- `*_marp.md` — Marp 投影片來源檔
- `README.md` — 年度說明
- `apps/` — 年度靜態應用程式範例，例如 `apps/flash-cards/`

## 部署方式

推送到 `main` 後，GitHub Actions 會：

1. 複製根目錄 `index.html` 到 GitHub Pages 根目錄。
2. 逐一處理 `workshops/<year>/`。
3. 將每個年度的 `index.html` 複製到 `/<year>/`。
4. 將年度資料夾中的 `*_marp.md` 轉換為 HTML。
5. 若年度資料夾有 `apps/`，則完整複製到 `/<year>/apps/`。

`gh-pages` 是產生後的發布分支；一般教材編輯請在 `main` 進行。
