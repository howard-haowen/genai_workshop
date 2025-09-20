---
marp: true
theme: default
class: lead
paginate: true
backgroundImage: url('https://img.freepik.com/premium-vector/wave-gradient-purple-pastel-subtle-background-abstract-purple-pastel-gradient-wallpaper_71208-807.jpg')
---

# 在 GitHub Codespaces 裡批次轉換 Markdown 為 HTML

在 GitHub Codespaces 裡跑這個 `_marp.md → HTML` 的批次轉換，其實很順手，因為 Codespaces 本質上就是一個雲端 Linux 開發環境。下面我幫你整理一套從零到執行的流程，確保腳本能跑通，而且未來在 CI/CD 或教學專案中也能複用。  

![bg fit right](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1wKTAhScFAO8j6a0PiWJ6mT_ibF0PIwiy1Xi6VDtcdotlTn-dI5D855Yj1mU8uRZ8-kk&usqp=CAU)

---

## 1️⃣ 開啟 Codespaces 並進入終端機
- 在你的 GitHub 專案頁面點 **Code → Codespaces → New codespace**  
- Codespaces 啟動後，按 `Ctrl+``（或從上方選單 **Terminal → New Terminal**）開啟終端機

---

## 2️⃣ 安裝 Marp CLI
如果你的 Codespaces 映像沒有預裝 Marp CLI，可以用 npm 安裝（全域安裝方便直接呼叫 `marp`）：
```bash
npm install -g @marp-team/marp-cli
```

---

## 3️⃣ 建立並上傳腳本
在 Codespaces 裡新建檔案，例如 `convert_marp.sh`，內容就是我們之前寫的版本：

```bash
#!/bin/bash
for file in *_marp.md; do
    [ -e "$file" ] || continue
    basename="${file%.*}"
    echo "轉換：$file → ${basename}.html"
    marp "$file" --html --output "${basename}.html"
done
echo "全部轉換完成 ✅"
```

---

## 4️⃣ 設定執行權限
```bash
chmod +x convert_marp.sh
```

---

## 5️⃣ 執行腳本
確保你在含有 `_marp.md` 檔案的目錄中：
```bash
./convert_marp.sh
```
執行後會看到類似：
```
轉換：slides_marp.md → slides.html
全部轉換完成 ✅
```

---

## 6️⃣ 驗證結果
執行完後，目錄中應該會多出對應的 `.html` 檔案，可以用 Codespaces 的檔案總管或終端機查看。