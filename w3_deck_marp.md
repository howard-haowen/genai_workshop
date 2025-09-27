---
marp: true
theme: default
class: lead
paginate: true
backgroundImage: url('https://img.freepik.com/premium-vector/wave-gradient-purple-pastel-subtle-background-abstract-purple-pastel-gradient-wallpaper_71208-807.jpg')
---

<!-- 週次主題 -->
## :brain: AI創造工作坊
## 文科視角的AI應用開發入門

**第 3 週：探索GitHub Copilot的三種互動模式**

[Haowen Jiang](https://howard-haowen.github.io/)

![bg right](https://govindamyoga.org/wp-content/uploads/2020/12/3-modes-of-nature-sattva-rajas-tamas-1080x675.jpg)

---

工具重點：**GitHub Copilot**
應用焦點：**Ask, Edit, Agent 模式**
> 學習如何透過提問、編輯和代理模式，更有效地利用 Copilot

![bg right fit](https://miro.medium.com/1*qR0eZmpfmVSh1_ea5W7Hvg.png)

---

<!-- 課程地圖 -->
## :maple_leaf: 課程地圖(原始)

| 週數  | 主題                   | 工具重點                 | 應用焦點                           |
| --- | -------------------- | -------------------- | ------------------------------ |
| W1 | 開始數位創作的第一步           | Markdown, Git/GitHub | 專案筆記與版本管理：從想法紀錄到協作流程           |
| W2 | 讓 AI 幫你動腦            | GitHub Copilot       | 利用 Copilot 輔助生成前端元件、處理資料與編寫小程式 |
| W3 | 資料驅動的思考與原型           | Google Jules         | 以資料為基礎構思使用者需求，探索資料驅動設計         |
| W4 | 把 AI 接上 CLI，打造簡易互動工具 | Google Gemini CLI    | 實作一個可以接收輸入並輸出分析的App          |

--- 

## :maple_leaf: 課程地圖(更新):sparkles: 

| 週數  | 主題                                   | 工具重點                 | 應用焦點                                       |
| --- | ------------------------------------- | -------------------- | ------------------------------------------ |
| W1 | 開始數位創作的第一步                           | Markdown, Git/GitHub | 專案筆記與版本管理：從想法紀錄到協作流程                       |
| W2 | 讓 AI 幫你動腦                               | GitHub Copilot, Codespaces       | 利用 Copilot 輔助生成前端元件、處理資料與編寫小程式                     |
| W3 | 探索GitHub Copilot的Ask, Edit, Agent模式         | GitHub Copilot, Codespaces       | 學習如何透過提問、編輯和代理模式，更有效地利用 Copilot             |
| W4 | 應用程式部署與自動化 | GitHub Pages, GitHub Actions | 將你的數位創作成果公諸於世                        |

---

<!-- 本週主題 -->
## :seedling: 第 3 週主題

### 探索GitHub Copilot的Ask, Edit, Agent模式
- **應用焦點**：
  - Ask: 學習如何有效地向 Copilot 提問
  - Edit: 學習如何編輯 Copilot 生成的程式碼
  - Agent: 學習如何讓 Copilot 作為你的程式設計代理人

> Copilot 不只是程式碼生成工具，更是你的程式設計夥伴

![bg right fit](https://media.licdn.com/dms/image/v2/D4E12AQEkg3SgxikdBg/article-cover_image-shrink_720_1280/B4EZbEE12rHIAM-/0/1747046326256?e=2147483647&v=beta&t=vNCYSmw7m-_ogdu0dOFlddjGqE99WjKLadamvowHDIw)

---

<!-- 學習目標 -->
## :dart: 學習目標

- **理解 Ask, Edit, Agent 模式的核心概念**
  → 掌握與 Copilot 協作的不同層次
- **善用Copilot的自動補全與圖片理解**
  → 提升程式碼生成的效率與準確性
- **學會如何使用Git同步程式碼與共創**
  → 有效管理版本與進行多人協作

![bg fit right:45%](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVOKzbyfT8IqYyG4pXobNeiLHuvLzMkT6dbA&s)

---

## 🙋🏻 什麼是 Ask, Edit, Agent 模式？

> YouTube[影片](https://www.youtube.com/watch?v=s7Qzq0ejhjg)

- Ask（純聊天）：像跟朋友閒聊，隨便問、隨便聊，沒有後續任務。
- Edit（編輯）：你給我內容，我幫你修改、潤飾、重組，讓它更清楚好看。
- Agent（代辦）：不只回答，還幫你「去做事」，查資料、整理資訊、規劃流程。

![bg right fit](https://copilot.microsoft.com/th/id/BCO.cc52b526-0bf2-4884-9780-4f1d89c2e47d.png)

---

<!-- 活動 -->
## 🛠️ 本週活動

1. 註冊[GitHub](https://github.com/)帳號
1. Fork [課程資料repository](https://github.com/howard-haowen/genai_workshop)
1. 進入[GitHub Codespaces](https://github.com/codespaces)頁面
1. 創建一個新的 Codespace
    - 選擇剛剛 Fork 的 repository
    - 選擇 `w3_ask_edit_agent` 分支
    - 選擇 `2-core` 機器類型
    - 點擊 `Create codespace`

![bg  fit right:45%](https://kidz-village.ac.th/wp-content/uploads/2020/09/Hand-on-activity-min.jpg)

---

## 🛠️ 實作範例

1.  **Ask**: 根據你的需求，用清晰的語言向 Copilot 提問
    -   例如：使用`ask.md`提問如何修改個人網頁
2.  **Edit**: 修改程式碼，使其更符合你的需求
    -   例如：使用`edit.md`修改`games`資料夾內的井字遊戲
3.  **Agent**: 讓 Copilot 自動完成任務
    -   例如：使用`agent.md`讓 Copilot 自動產生類似Quizlet的單字卡應用程式

![bg right fit](https://aiforhumanists.com/assets/images/AI-for-Humanists-logo-tahoma-v7-no-outline.png)

---

## 單字卡應用程式提問範例

> 產生類似Quizlet風格的單詞卡 (flash cards) 網頁應用，單詞來源為json檔案，使用者可以匯入跟匯出單詞。預先載入五個台灣閩南語跟動物有關的詞彙，正面是漢字，反面是台灣閩南語羅馬字以及國語解釋。

![bg right fit](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Hn1PTeuK_3Hg_YS-GL1hTbeSPBDKaLxsbQ&s)

--- 

## 🧠 使用 GitHub Copilot 的`Add context`按鈕

 ✨ 功能說明
Copilot 的`Add context`按鈕可以讓你手動加入額外的程式碼或專案背景，幫助 Copilot 更準確地理解你的需求。

 🔧 可加入的 Context 類型舉例：
- `#codebase`：整個專案的程式碼架構與邏輯
- `#selection`：你選取的程式碼區塊
- `#comment`：註解內容
- `source control`：Git commit 訊息等版本控制資訊

---

## 📌 `Add context`使用方式

1. 點選 Copilot Chat 視窗中的`Add context`
2. 選擇要加入的檔案、資料夾或 Commit歷史
3. Copilot 會根據你加入的內容回答問題或產生程式碼

💡 範例

```bash
/explain #codebase
用中文說明這個專案的功能與架構
```

---

## 🛠️本週作業

1. **修改或新增** 上述範例程式/內容  
1. 在 [GitHub](https://github.com/) 提交 **Pull Request (PR)**  
1. 所有新增內容需依以下資料夾結構放置：

```txt
submissions/
  └── student_user_name/
        └── homework1.md
        └── homework2.md
        └── ...   
```

## 🌟注意事項
- 資料夾名稱請用自己帳號名稱替換 `student_user_name`  
- 提交前先檢查檔案是否能正常開啟與顯示

---

## 🪜 提交步驟
1. **Commit** 並推送到自己 repository 的分支  
1. 回到你 fork 的 GitHub 頁面
1. GitHub 會偵測到你剛推送的新分支，點擊`Compare & pull request`按鈕
1. 確認 base repository 是原始 repo（`howard-haowen/genai_workshop`）
1. 確認 base branch 是原始 repo 的目標分支（通常是`main`）
1. 確認 compare branch 是你 fork 的 repo 中的修改分支 (`w3_ask_edit_agent`)
1. 填寫 PR 的標題與描述，說明你做了哪些修改
1. 點擊「Create pull request」

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
