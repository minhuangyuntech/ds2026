# 資料結構（Data Structure）

這是一個可直接部署到 GitHub Pages 的純靜態課程網站，內容用於大學資料結構課程展示與課堂互動。

## 內容範圍

- 首頁：課程說明與 13 個單元章節索引。
- 第 0 章標準 C 語法：程式骨架、編譯、型別、控制流程、函式、指標、陣列、結構與標準輸入輸出。
- 各章頁面：每一章都有獨立頁面，包含學習目標、C 實作提醒、常見練習題與前後章導覽。
- 第 5 章樹實驗室：二元搜尋樹建立、走訪結果、高度、葉節點與偏斜/平衡形狀比較。
- 第 6 章圖實驗室：加權無向圖、相鄰串列/矩陣、BFS、DFS、Dijkstra、Prim MST。
- 第 7 章排序教材與實驗室：每一種排序法各自成節，包含詳細說明、圖例、演算法步驟、標準 C 程式與程式碼說明；章末提供逐步長條圖比較。

## 教材整理進度

每次整理、增加、刪除或修改章節教材時，都必須同步更新 `TASKLIST.md`。該檔案記錄各章完成度、後續待辦，以及與 *Fundamentals of Data Structures in C, 2/e* 的重點對照。

## 跨電腦維護

如果在另一台電腦或另一個 Codex 工作環境維護本網站，開始修改前必須先依照 `MAINTENANCE.md` 執行 `git status -sb` 與 `git pull --ff-only origin main`。給 Codex 或其他 coding agent 的簡明規則放在 `AGENTS.md`。

## 本地預覽

直接開啟 `index.html` 即可使用。若要用本地伺服器預覽：

```powershell
cd D:\projects\minhuangyuntech\ds2026
python -m http.server 8080
```

然後開啟：

```text
http://localhost:8080
```

## GitHub Pages 部署方向

1. 建立 GitHub repository，例如 `ds2026`。
2. 將此資料夾內容推到 `main` 分支。
3. 在 repository 的 Settings -> Pages 選擇 `Deploy from a branch`。
4. Source 選擇 `main` / root。
5. 等待 GitHub Pages 建置完成。

## 檔案結構

```text
ds2026/
  AGENTS.md
  index.html
  MAINTENANCE.md
  README.md
  TASKLIST.md
  .nojekyll
  chapters/
    00-standard-c-syntax.html
    01-basic-concepts.html
    ...
    12-digital-search-structures.html
  assets/
    css/
      styles.css
    js/
      app.js
      chapter-page.js
```

## 參考

- Horowitz, Sahni, Anderson-Freed, *Fundamentals of Data Structures in C, 2/e*.
- Open Library: https://openlibrary.org/books/OL17873506M/Fundamentals_of_data_structures_in_C
- ISI Library catalog: https://library.isical.ac.in/cgi-bin/koha/opac-detail.pl?biblionumber=436578

本站內容為課堂補充教材，以原創摘要與互動示意呈現；不重製教科書原文。
