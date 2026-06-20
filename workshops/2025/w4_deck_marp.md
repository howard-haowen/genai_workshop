---
marp: true
theme: default
class: lead
paginate: true
backgroundImage: url('https://img.freepik.com/premium-vector/wave-gradient-purple-pastel-subtle-background-abstract-purple-pastel-gradient-wallpaper_71208-807.jpg')
---

## :rocket: AI創造工作坊
## 文科視角的AI應用開發入門

**第 4 週：應用程式部署與自動化**

[Haowen Jiang](https://howard-haowen.github.io/)

![bg right](https://scribemedia.com/wp-content/uploads/2021/07/how-to-find-a-publisher-for-my-book.jpeg)

---

工具重點：**GitHub Pages, GitHub Actions**
應用焦點：**自動化部署與公開你的作品**
> 學習如何將你的專案自動部署到網頁，並用 Actions 實現自動化流程

![bg right fit](https://repository-images.githubusercontent.com/237890763/6b570c80-fd1c-11ea-9163-00a26e78a40e)

---

## :maple_leaf: 課程地圖(更新):sparkles: 

| 週數  | 主題                                   | 工具重點                 | 應用焦點                                       |
| --- | ------------------------------------- | -------------------- | ------------------------------------------ |
| W1 | 開始數位創作的第一步                           | Markdown, Git/GitHub | 專案筆記與版本管理：從想法紀錄到協作流程                       |
| W2 | 讓 AI 幫你動腦                               | GitHub Copilot, Codespaces       | 利用 Copilot 輔助生成前端元件、處理資料與編寫小程式                     |
| W3 | 探索GitHub Copilot的Ask, Edit, Agent模式         | GitHub Copilot, Codespaces       | 學習如何透過提問、編輯和代理模式，更有效地利用 Copilot             |
| W4 | 應用程式部署與自動化 | GitHub Pages, GitHub Actions | 將你的數位創作成果公諸於世                        |

---

## :seedling: 第 4 週主題

### 應用程式部署與自動化
- **應用焦點**：
  - GitHub Pages：一鍵部署靜態網站
  - GitHub Actions：自動化流程、持續整合(CI)、持續部署(CD)

> 讓你的作品不只停留在本地，直接向全世界發佈！

![bg fit right](https://github.githubassets.com/images/modules/site/features/actions-icon-actions.svg)

---

## :dart: 學習目標

- **理解 GitHub Pages 的部署流程**
  → 學會將靜態網站/作品發佈到網路
- **掌握 GitHub Actions 的自動化原理**
  → 學會設計自動化腳本，提升開發效率
- **實作自動部署與版本管理**
  → 讓每次更新都能自動發佈

![bg right fit](https://fr.sysdig.com/wp-content/uploads/01_github_actions_diagram.png)

---

## 🙋🏻 什麼是 GitHub Pages？

- GitHub Pages 是 GitHub 提供的免費靜態網站託管服務
- 只要把 HTML/CSS/JS 放在指定分支或資料夾，就能自動生成公開網頁
- 適合作品集、教學網頁、簡易應用程式

> 官方說明：[GitHub Pages](https://pages.github.com/)

![bg fit right](https://cf-assets2.tenlong.com.tw/ig/029/567/665/9798868811944.jpg?1748916933)

---

## 🙋🏻 什麼是 GitHub Actions？

- GitHub Actions 是 GitHub 的自動化工作流程服務
- 可以根據事件（如 push、pull request）自動執行腳本
- 常見用途：自動測試、建置、部署、格式檢查

> 官方說明：[GitHub Actions](https://github.com/features/actions)

![bg fit right](https://cf-assets2.tenlong.com.tw/ig/026/978/538/9781098131074.jpg?1708999156)


---

## 🛠️ 本週活動大綱

1. 設定 GitHub Pages 發佈你的作品
2. 編輯 `.github/workflows` 目錄下的 Actions 工作流程
3. 提交程式碼，觀察自動部署流程
4. 分享你的公開作品（網站或應用程式）連結

![bg  fit right:45%](https://kidz-village.ac.th/wp-content/uploads/2020/09/Hand-on-activity-min.jpg)

---

## 🛠️ 01複製課程資料

1. 註冊[GitHub](https://github.com/)帳號（另有教育版，申請教學[影片](https://www.youtube.com/watch?v=yKrFy97mHnI)，學生[大禮包](https://education.github.com/pack)）
1. Fork [課程資料repository](https://github.com/howard-haowen/genai_workshop)

---

## 🛠️ 02新增分支

1. 進入你的GitHub repository
2. 點選「Code」頁籤
3. 點選「Branch: main」下拉選單
4. 輸入新分支名稱（如：`deploy`），並按下 Enter 鍵

---

## 🛠️ 03進入開發環境

1. 進入[GitHub Codespaces](https://github.com/codespaces)頁面
1. 創建一個新的 Codespace
    - 選擇剛剛 Fork 的 repository
    - 選擇剛剛新增的分支名稱（如：`deploy`）
    - 選擇 `2-core` 機器類型
    - 點擊 `Create codespace`

---

## 🛠️ 04新增一個檔名為`my_deck_marp.md`的簡報

- 當前目錄下檔名為`*_marp.md`的檔案都是簡報

```txt
.
├── git_basics_marp.md
├── markdown_basics_marp.md
├── w1_deck_marp.md
├── w2_deck_marp.md
├── w3_deck_marp.md
├── w3_deck_marp.md
└── my_deck_marp.md (這個是你要新增的檔案！)
```

---

##  🛠️ 05 在  Codespaces 與 repository 同步檔案

- 點選左側的「Source Control」圖示
- 輸入變更的說明（如：`Add my_deck_marp.md`）
- 點選「✔️ Commit」按鈕
- 點選「...」按鈕，選擇「Push」將變更推送到 GitHub
- 回到你的 GitHub repository 網頁，確認變更已經反映在你的 repository 中

---

##  🛠️ 06 GitHub Pages 設定步驟

1. 進入你的 repository
2. 點選「Settings」→「Pages」
3. 選擇要發佈的分支（如：`gh-pages`）與資料夾（如：當前目錄`/`）
4. 儲存設定，取得網頁基本網址（以我的 repository 為例是：`https://howard-haowen.github.io/genai_workshop`）

---

##  🛠️ 07 把修改合併到主分支

1. 回到你的 GitHub repository 網頁
2. 點選「Pull requests」頁籤
3. 點選「New pull request」按鈕
4. 選擇 base branch 為 `main`，compare branch 為你剛剛新增的分支（如：`deploy`）
5. 點選「Create pull request」按鈕
6. 輸入標題與描述，然後點選「Create pull request」按鈕
7. 點選「Merge pull request」按鈕，然後點選「Confirm merge」按鈕
8. 查看新增的頁面是否成功發佈（以我的 repository 為例是：`https://howard-haowen.github.io/genai_workshop/my_deck_marp.html`）

---

##  🛠️ 08 GitHub Actions 設定步驟
1. 在 Codespaces 修改工作流程腳本`deploy.yml`(腳本位置為`.github/workflows/deploy.yml`，讓🤖AI幫你，參考範例`deployQnA.md`)
1. 提交並推送到 GitHub 
1. 把修改合併到主分支（參考上頁步驟）
1. 查看 Actions 頁面，確認工作流程執行狀態
1. 到 GitHub Pages 基本網址加上`/apps`（以我的 repository 為例是：`https://howard-haowen.github.io/genai_workshop/apps`），查看你的應用程式是否成功發佈

---

## 💡下一步：把AI搬回家使用，免費又安全！

1. 安裝 [Ollama](https://ollama.com/)
1. 下載開源模型（如IBM的[`granite3.3`](https://ollama.com/library/granite3.3)）
1. 下載[VS Code](https://code.visualstudio.com/)
1. 在GitHub Copilot設定中，選擇`Manage Models`，然後先後選擇`Ollama`、`granite-3.3`

![bg fit right](https://www.kdnuggets.com/wp-content/uploads/bala-ollama-1024x512.png)

---

## :sparkles: 課程連結
- [GitHub網站](https://github.com/)
- [GitHub Codespaces](https://github.com/codespaces)
- [課程資料repository](https://github.com/howard-haowen/genai_workshop)
- [提詞範例庫](https://prompts.chat/)

## 🤖 AI平台
- [GitHub Copilot](https://github.com/copilot)
- [Microsoft Copilot](https://copilot.microsoft.com/chats/)
- [Google Gemini](https://gemini.google.com/)

![bg right fit](https://mediaengagement.org/wp-content/uploads/2018/09/iStock-116248249-600x400.jpg)

--- 

## 📚 推薦VS Code擴充套件 (本課程)

| 擴充套件名稱 | 功能簡介 | 適合用途 |
|--------------|----------|----------|
| [**Markdown All in One**](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) | 提供 Markdown 語法高亮、快速格式化、預覽等功能 | 撰寫筆記、報告、簡報、學習筆記 |
| [**Git Graph**](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) | 提供 Git 分支圖，方便查看版本歷史與進行各種 Git 操作 | 版本控制、專案管理 |
| [**Live Server**](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) | 啟動本地伺服器，即時預覽 HTML/Markdown 編輯結果 | 預覽教學網頁、互動教材 |
| [**Marp for VS Code**](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode) | 使用 Markdown 製作簡報，支援主題、動畫、PDF 匯出 | 製作課堂簡報、教學投影片 |

--- 

## 📚 推薦VS Code擴充套件 (一般寫作)

| 擴充套件名稱 | 功能簡介 | 適合用途 |
|--------------|----------|----------|
| [**LTeX**](https://marketplace.visualstudio.com/items?itemName=valentjn.vscode-ltex) | 支援語法檢查、文法建議，類似 Grammarly 的功能 | 改進英文寫作、學術論文撰寫 |
| [**LaTeX Workshop**](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop) | 支援 LaTeX 編輯、編譯與預覽 | 撰寫學術論文、數學或語言學報告 |
| [**Markdown Kanban**](https://marketplace.visualstudio.com/items?itemName=holooooo.markdown-kanban) | 提供看板式任務管理功能 | 管理專案進度、任務追蹤 |
| [**Todo Tree**](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) | 自動整理文件中的 TODO 標記，形成清單 | 管理學習進度、研究任務追蹤 |
| [**Foam**](https://marketplace.visualstudio.com/items?itemName=foam.foam-vscode) | 類似 Roam Research 的筆記系統，支援連結思考與知識網絡 | 建構個人知識庫、研究筆記 |
