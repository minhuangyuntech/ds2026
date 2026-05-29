# 網站維護流程

本網站可能會在多台電腦上以 Codex 或一般 git 工具維護。為避免不同電腦之間互相覆蓋，所有維護工作都依照本文件流程進行。

## 核心原則

1. 開始任何修改前，先確認目前分支與工作區狀態。
2. 開始修改前，先從 GitHub 拉到最新版本。
3. 不在有未確認本地變更的狀態下直接 pull。
4. 每次整理教材內容，都要同步更新 `TASKLIST.md`。
5. CSS 或 JS 有變更時，要同步更新 HTML 中的版本查詢參數，避免瀏覽器或 GitHub Pages 快取舊檔。
6. 推送前必須做基本檢查，至少包含 JS 語法檢查、本機頁面確認與 `git diff --check`。
7. 不使用 `git reset --hard`、`git push --force` 這類會丟失他人工作的指令，除非非常明確知道後果並已備份。

## 第一次在新電腦設定

可使用一般 GitHub SSH URL：

```powershell
git clone git@github.com:minhuangyuntech/ds2026.git
cd ds2026
git status -sb
```

如果該電腦的 `~/.ssh/config` 使用專用 Host alias，可改用：

```powershell
git clone git@github.com-minhuangyuntech:minhuangyuntech/ds2026.git
cd ds2026
git remote -v
```

專用 Host alias 範例：

```text
Host github.com-minhuangyuntech
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_github_minhuangyuntech
  IdentitiesOnly yes
```

測試 SSH 是否能連到 GitHub：

```powershell
ssh -T github.com-minhuangyuntech
```

若使用一般 `github.com` host，則測試：

```powershell
ssh -T git@github.com
```

## 每次開始工作前

先進入專案目錄：

```powershell
cd D:\projects\minhuangyuntech\ds2026
```

確認目前狀態：

```powershell
git status -sb
git branch --show-current
```

如果工作區是乾淨的，再拉最新版本：

```powershell
git pull --ff-only origin main
```

如果 `git status -sb` 顯示有本地修改，先判斷那些修改是否要保留：

- 要保留：先 commit，或暫存到 stash，再 pull。
- 不確定來源：先停止，不要覆蓋。
- 確認是自己不要的暫存檔：只刪除明確知道用途的檔案。

## 修改教材時

常見教材檔案：

- `assets/js/chapter-page.js`：章節教材模板、說明文字、圖例 SVG、程式碼區塊。
- `assets/js/app.js`：互動實驗室邏輯。
- `assets/css/styles.css`：版面與圖例樣式。
- `chapters/*.html`：各章頁面入口與 JS/CSS 版本參數。
- `TASKLIST.md`：教材整理進度與教科書重點對照。

若修改 `assets/js/chapter-page.js`、`assets/js/app.js` 或 `assets/css/styles.css`，請更新所有 HTML 中的版本參數，例如：

```html
assets/js/chapter-page.js?v=20260529-topic-name
assets/js/app.js?v=20260529-topic-name
assets/css/styles.css?v=20260529-topic-name
```

可使用一致、可辨識的版本字串，例如日期加主題：`20260529-graphs-bfs`。

## 修改後檢查

至少執行：

```powershell
node --check assets\js\chapter-page.js
node --check assets\js\app.js
git diff --check
```

本機預覽：

```powershell
python -m http.server 8080
```

開啟：

```text
http://127.0.0.1:8080/
```

需要確認：

- 相關章節能正常載入。
- 新增圖例、程式碼、表格或互動元件沒有溢出或重疊。
- Browser console 沒有 error。
- 既有互動實驗室仍可操作。
- 若是教材整理，`TASKLIST.md` 已同步更新。

## Commit 與 Push

先看變更範圍：

```powershell
git status -sb
git diff --stat
```

只加入本次相關檔案：

```powershell
git add README.md TASKLIST.md MAINTENANCE.md AGENTS.md
git add assets\css\styles.css assets\js\chapter-page.js assets\js\app.js
git add index.html chapters\*.html
```

依實際變更選擇需要加入的檔案，不必每次都全部加入。

提交：

```powershell
git commit -m "Describe the course site update"
```

推送：

```powershell
git push
```

推送後確認：

```powershell
git status -sb
git log --oneline --max-count=5
```

## 衝突處理

如果 `git pull --ff-only origin main` 失敗，表示遠端與本地歷史無法快轉。處理原則：

1. 先停止修改。
2. 用 `git status -sb` 和 `git log --oneline --graph --decorate --all --max-count=20` 了解狀態。
3. 若只是本地未提交變更，先 commit 或 stash。
4. 若已發生 merge conflict，逐檔保留正確教材內容，特別注意 `chapter-page.js`、`styles.css`、`TASKLIST.md`。
5. 解完衝突後重新跑檢查，再 commit/push。

不要用強制推送覆蓋遠端，除非已明確確認另一台電腦沒有需要保留的 commit。

## GitHub Pages

本專案是純靜態網站，部署來源為 `main` branch / root。推送到 `main` 後，GitHub Pages 會使用根目錄內容部署。

若頁面看起來仍是舊版本：

- 先確認 GitHub Pages build 是否完成。
- 確認 HTML 中的 `?v=` 版本參數已更新。
- 瀏覽器強制重新整理或清除快取。
