# Codex 維護指引

這個 repository 是大學資料結構課程網站。Codex 或其他 coding agent 維護此專案時，請遵守以下規則。

## 開始前

1. 先讀 `README.md`、`MAINTENANCE.md`、`TASKLIST.md`。
2. 先執行 `git status -sb`。
3. 若工作區乾淨，先執行 `git pull --ff-only origin main`，再開始修改。
4. 若工作區不乾淨，不要直接 pull；先理解本地變更來源。

## 修改規則

- 教材內容主要在 `assets/js/chapter-page.js`。
- 互動功能主要在 `assets/js/app.js`。
- 視覺樣式主要在 `assets/css/styles.css`。
- 修改 JS 或 CSS 後，要同步更新 `index.html` 與 `chapters/*.html` 的 `?v=` 版本參數。
- 每次整理、增加、刪除或修改章節教材時，必須同步更新 `TASKLIST.md`。
- 教材可以參考 *Fundamentals of Data Structures in C, 2/e* 的章節脈絡，但必須使用原創摘要、圖解、互動示意與標準 C 範例，不得直接重製教科書原文。
- 不要移除或覆蓋別人尚未確認的變更。

## 完成前檢查

至少執行：

```powershell
node --check assets\js\chapter-page.js
node --check assets\js\app.js
git diff --check
git status -sb
```

若有前端畫面或互動改動，使用本機伺服器與瀏覽器確認：

```powershell
python -m http.server 8080
```

確認相關頁面載入正常、console 無 error、互動實驗室仍可操作。

## Commit 與 Push

- Commit message 使用簡短英文描述。
- 只 stage 本次相關檔案。
- Push 前再確認 `git status -sb`。
- 正常使用 `git push`。
- 不使用 `git push --force` 或 `git reset --hard`，除非使用者明確要求且已確認風險。
