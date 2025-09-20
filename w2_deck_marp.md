---
marp: true
theme: default
class: lead
paginate: true
backgroundImage: url('https://img.freepik.com/premium-vector/wave-gradient-purple-pastel-subtle-background-abstract-purple-pastel-gradient-wallpaper_71208-807.jpg')
---

<!-- 封面 -->
# :brain: AI創造工作坊  
## 文科視角的AI應用開發入門

**第 2 週：讓 AI 幫你動腦**  

[Haowen Jiang](https://howard-haowen.github.io/)

![bg right](https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1024&q=80)

---

工具重點：**GitHub Copilot**  
應用焦點：AI 輔助程式開發  
> 利用 Copilot 幫你生成個人網頁、小遊戲、文件格式轉換

![bg right fit](https://miro.medium.com/1*qR0eZmpfmVSh1_ea5W7Hvg.png)

---

<!-- 課程地圖 -->
## :maple_leaf: 課程地圖

| 週數  | 主題                   | 工具重點                 | 應用焦點                           |
| --- | -------------------- | -------------------- | ------------------------------ |
| W1 | 開始數位創作的第一步           | Markdown, Git/GitHub | 專案筆記與版本管理：從想法紀錄到協作流程           |
| W2 | 讓 AI 幫你動腦            | GitHub Copilot       | 利用 Copilot 輔助生成前端元件、處理資料與編寫小程式 |
| W3 | 資料驅動的思考與原型           | Google Jules         | 以資料為基礎構思使用者需求，探索資料驅動設計         |
| W4 | 把 AI 接上 CLI，打造簡易互動工具 | Google Gemini CLI    | 實作一個可以接收輸入並輸出分析的App          |

---

<!-- 本週主題 -->
## :seedling: 第 2 週主題

### 讓 AI 幫你動腦
- **GitHub Copilot**：透過 AI 輔助編寫程式
- **應用焦點**：  
  - 個人網頁
  - 小遊戲  
  - 文件格式轉換  

> Copilot 就像你的程式寫作小助手，隨時補充你的靈感與技術細節

---

<!-- 學習目標 -->
## :dart: 學習目標

- **理解 AI 輔助程式開發的流程**  
  → 學會如何將需求轉化為提示，讓 Copilot 產生程式碼
- **體驗 Copilot 生成前端元件與資料處理程式**  
  → 從需求描述到程式雛型
- **建立 AI 與人的協作習慣**  
  → 學習如何檢查、修改 AI 產生的結果

---

## 🙋🏻 什麼是 GitHub Copilot？

- GitHub Copilot 是一個由 OpenAI 技術驅動的程式碼生成工具
- 根據你的提示（Prompt）與程式上下文，自動補全、產生程式碼片段
- 支援多種語言（如 JavaScript, Python, Markdown…）

![bg right fit](https://miro.medium.com/1*qR0eZmpfmVSh1_ea5W7Hvg.png)

---

## 🔁 GitHub  Copilot 的使用流程

1. **提出需求**：用自然語言或程式註釋描述想要的功能
2. **Copilot 生成程式碼**：自動補全或建議完整程式
3. **檢查與修改**：人工審核、測試與調整
4. **反覆提示**：優化提示、獲得更合適的結果

![bg right fit](https://miro.medium.com/v2/resize:fit:1400/1*eW1cziX5zw1XZktrVFTAdQ.png)

---

<!-- 為什麼 -->
## 🙋🏽 為什麼要學 GitHub  Copilot？

- **節省時間**：省去重複性與基礎碼的撰寫
- **降低門檻**：讓非科班背景也能快速嘗試程式開發
- **提升創意**：專注於設計思路，將雜事交給 AI
- **協作加速**：團隊可共享提示與產生的元件，快速迭代

> Copilot 是程式設計的「智能助理」與「創意激發器」

---

<!-- 為什麼 -->
## 🤔 如何開始使用GitHub Copilot？

- [VS Code](https://code.visualstudio.com/)編輯器：安裝VS Code以及 [GitHub Copilot](https://code.visualstudio.com/docs/copilot/overview) 擴充套件，直接在本地電腦的編輯器中使用
- [GitHub Copilot](https://github.com/copilot)網頁：透過瀏覽器，登入GitHub後，直接在網頁上使用
- [GitHub Codespaces](https://docs.github.com/en/codespaces/quickstart)：GitHub提供的雲端開發環境，內建Copilot功能

---

## 🙋🏻 什麼是 GitHub Codespaces？

- GitHub 提供的雲端開發環境，讓你可以直接在瀏覽器中編寫、執行程式碼
- 內建支援 GitHub Copilot，無需本地安裝任何軟體
- 免費使用額度，GitHub Free帳號每月 120 小時計算時間、15 GB 儲存空間

![bg right fit](https://rehan.work/wp-content/uploads/2024/07/github-codespace.webp)

---

<!-- 活動 -->
## :hammer_and_wrench: 本週活動

1. 註冊[GitHub](https://github.com/)帳號
1. Fork [課程資料repository](https://github.com/howard-haowen/genai_workshop)
1. 進入[GitHub Codespaces](https://github.com/codespaces)頁面
1. 創建一個新的 Codespace
    - 選擇剛剛 Fork 的 repository
    - 選擇 `main` 分支
    - 選擇 `2-core` 機器類型
    - 點擊 `Create codespace`

![bg right fit](https://kidz-village.ac.th/wp-content/uploads/2020/09/Hand-on-activity-min.jpg)

---

## :hammer_and_wrench: GitHub Copilot 實作範例

1. `根據下面的內容，產生個人網頁的HTML檔案: {個人背景}`
    - 進一步修改格式、顏色、字體、排版等
1. `產生井字遊戲`
    - `用HTML, CSS, JavaScript產生井字遊戲`
1. `寫一個腳本把當前目錄中所有名稱為 _marp.md的檔案，使用Marp CLI 轉換為html`
    - 也可轉換為PPTX、PDF格式

![bg right fit](https://aiforhumanists.com/assets/images/AI-for-Humanists-logo-tahoma-v7-no-outline.png)

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
