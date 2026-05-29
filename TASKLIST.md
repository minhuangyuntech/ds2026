# 教材整理 Tasklist

最後更新：2026-05-29

## 維護規則

**每次整理、增加、刪除或修改任何章節教材時，都必須同步更新本檔案，並與該次教材變更放在同一個 commit。**

跨電腦或跨 Codex 工作環境維護時，必須先閱讀 `MAINTENANCE.md` 與 `AGENTS.md`。開始修改前先確認工作區狀態，並在工作區乾淨時執行 `git pull --ff-only origin main`，確保本地版本已同步 GitHub。

需要更新的項目包含：

- 各章完成度與下一步。
- 與《Fundamentals of Data Structures in C, 2/e》重點的對照。
- 新增的圖例、互動實驗室、C 程式碼、練習題或教材段落。
- 尚未處理或需要回頭補強的內容。

本站內容以教科書章節脈絡為參考，使用原創摘要、圖解、互動示意與標準 C 範例整理；不得直接重製教科書原文。

## 狀態標記

- ✅ 已完整整理：已有教材說明、圖例、C 範例或互動內容，並已本機驗證。
- 🟡 部分完成：已有初版內容，但仍需補完整教材、圖例、程式或題目。
- ⬜ 待整理：目前只有章節骨架、學習目標與基本導覽。
- 🔁 需回頭補強：內容已存在，但應再對照教科書補細節。

## 全站進度總覽

| Unit | 網頁章節 | 目前狀態 | 教科書重點對照 | 已完成內容 | 下一步 |
| --- | --- | --- | --- | --- | --- |
| 01 | Basic Concepts | 🟡 部分完成 | ADT、演算法規格、遞迴、時間與空間複雜度、C 指標與動態配置 | 完成資料結構三層語言、ADT 規格與表示法、Big-O 成長率表、遞迴/迭代 factorial C 範例、malloc/free 動態配置範例；保留學習目標、C 實作提醒與練習題 | 補 Big-O 視覺曲線、更多迴圈成本追蹤題、ADT 測試案例 |
| 02 | Arrays and Structures | 🟡 部分完成 | Array、structure、string、sparse matrix、polynomial representation | 完成陣列/結構/字串/稀疏資料概念地圖、row-major 位址計算、稀疏矩陣三元組圖表、動態陣列 C 範例、SparseMatrix triple C 範例、多項式 dense/sparse 表示法比較 | 補字串處理 C 範例、稀疏矩陣 transpose/add、polynomial add 完整 C 程式 |
| 03 | Stacks and Queues | ⬜ 待整理 | Stack ADT、Queue ADT、circular queue、expression evaluation、maze/BFS 概念 | 章節頁骨架、目標與練習方向 | 補 stack/queue 圖例、infix/postfix 範例、循環佇列 C 程式 |
| 04 | Linked Lists | ⬜ 待整理 | Singly linked list、circular list、doubly linked list、header node、polynomial/list applications | 章節頁骨架、目標與練習方向 | 補節點圖、插入刪除指標追蹤、標準 C 範例 |
| 05 | Trees | ✅ 已完整整理 | Terminology、tree representation、binary tree ADT/properties/representations、traversals、additional binary tree operations、threaded binary trees、heaps、BST、selection trees、forests、disjoint sets、counting binary trees | 完成定義、名詞、教科書章節對照、二元樹性質、表示法、遞迴與迭代走訪、copy/equality、Threaded Tree、Heap、BST、Selection Tree、Forest、Union-Find、Catalan recurrence；加入 Binary/Full/Complete/Skewed、Max Heap、Min Heap、Winner/Loser Tree、Forest、Left-child/right-sibling 圖例；保留 Trees Lab | 日後可補 deletion BST 動態步驟、threaded tree 插入圖、更多練習題 |
| 06 | Graphs | 🟡 部分完成 | Graph 定義、terminology、Graph ADT、adjacency matrix/list、BFS、DFS、shortest paths、minimum spanning trees | 完成圖的定義、名詞卡、Graph ADT、相鄰矩陣/串列比較、C adjacency list 範例、BFS/DFS/Dijkstra/MST 導覽與 Graph Lab | 補教科書章節對照、BFS/DFS/Dijkstra/Prim/Kruskal 詳細 C 程式與圖例 |
| 07 | Sorting | ✅ 已完整整理 | Insertion、selection、bubble、merge、quick、heap、radix sorting；內部排序比較與穩定性/成本分析 | 每種排序法各自成節，含說明、圖例、演算法、標準 C 程式、程式碼說明；含 Merge/Radix Pass 圖例、Heap Sort 動態展示、Sorting Lab | 補外部排序與 k-way merge 對照，視課程需求加入測驗題 |
| 08 | Hashing | ⬜ 待整理 | Hash function、collision resolution、linear/quadratic probing、chaining、rehashing、dynamic hashing | 章節頁骨架、目標與練習方向 | 補碰撞圖例、開放定址與 chaining C 範例、load factor 視覺化 |
| 09 | Priority Queues | ⬜ 待整理 | Priority Queue ADT、leftist tree、binomial heap、Fibonacci heap、pairing heap | 章節頁骨架、目標與練習方向 | 與 Unit 05 Heap 區分，補 advanced priority queue 圖例與操作比較 |
| 10 | Efficient Binary Search Trees | ⬜ 待整理 | AVL tree、splay tree、red-black tree、rotations、amortized behavior | 章節頁骨架、目標與練習方向 | 補 rotation 圖例、AVL 插入平衡、red-black 性質與 C 範例 |
| 11 | Multiway Search Trees | ⬜ 待整理 | m-way search tree、B-tree、B+ tree、node split/merge、external storage indexing | 章節頁骨架、目標與練習方向 | 補 B-tree/B+ tree 節點圖、插入分裂流程、範圍查詢比較 |
| 12 | Digital Search Structures | ⬜ 待整理 | Digital search tree、Trie、Patricia、compressed trie、suffix tree | 章節頁骨架、目標與練習方向 | 補 Trie/Patricia 圖例、字串插入搜尋 C 範例、prefix query 練習 |

## 教科書重點對照檢核表

### Unit 01 Basic Concepts

- [x] ADT, representation, algorithm 三層架構
- [x] 演算法規格、前置條件、後置條件與不變量
- [x] Big-O 成長率比較表
- [x] 遞迴與迭代 C 範例
- [x] C 指標、malloc/free 與配置失敗處理範例
- [ ] Big-O 視覺曲線與更多成本追蹤練習
- [ ] ADT 測試案例與錯誤情境練習

### Unit 02 Arrays and Structures

- [x] Array、structure、string、sparse data 概念地圖
- [x] Row-major address calculation
- [x] Sparse matrix triple representation
- [x] Dynamic array C structure and append example
- [x] SparseMatrix triple C structure and insertion example
- [x] Dense and sparse polynomial representation comparison
- [ ] String processing C example with capacity and terminator handling
- [ ] Sparse matrix transpose/add implementation
- [ ] Polynomial add full C implementation

### Unit 05 Trees

- [x] Tree definition and terminology
- [x] Tree representation
- [x] Binary Tree ADT and properties
- [x] Array and linked binary tree representation
- [x] Inorder, preorder, postorder, level-order traversal
- [x] Iterative inorder traversal
- [x] Copying binary trees
- [x] Testing equality
- [x] Expression/satisfiability tree concept
- [x] Threaded binary trees
- [x] Heaps and priority queue operations
- [x] Binary search trees
- [x] Selection trees: winner tree and loser tree
- [x] Forests and left-child right-sibling representation
- [x] Disjoint sets / Union-Find
- [x] Counting binary trees / Catalan recurrence

### Unit 06 Graphs

- [x] Graph definition and terminology
- [x] Graph ADT overview
- [x] Adjacency matrix/list comparison
- [x] C adjacency list representation
- [x] BFS/DFS/Dijkstra/MST interactive lab
- [ ] Full BFS C implementation
- [ ] Full DFS C implementation
- [ ] Dijkstra detailed C implementation
- [ ] Prim and Kruskal detailed C implementation
- [ ] Topological sort and connected components, if aligned with course scope

### Unit 07 Sorting

- [x] Insertion sort
- [x] Selection sort
- [x] Bubble sort
- [x] Merge sort
- [x] Quick sort
- [x] Heap sort
- [x] Radix sort
- [x] Sorting algorithm comparison table and interactive lab
- [ ] External sorting / k-way merge, if required by syllabus

## 更新紀錄

- 2026-05-29：補 Unit 01 Basic Concepts 教材內容，新增 ADT/representation/algorithm 架構、演算法規格、Big-O 成長率表、遞迴與迭代 factorial、C 動態配置範例；同步更新 HTML cache 版本參數。
- 2026-05-29：補 Unit 02 Arrays and Structures 教材內容，新增 row-major 位址計算、稀疏矩陣三元組、多項式 dense/sparse 表示法、動態陣列與 SparseMatrix C 範例；同步更新 HTML cache 版本參數。
- 2026-05-29：新增 `MAINTENANCE.md` 與 `AGENTS.md`，記錄跨電腦維護流程、先 pull 再更新、驗證、commit/push 與 Codex 維護原則。
- 2026-05-29：建立本 tasklist；記錄 Unit 01-12 初始狀態、Unit 05/06/07 已完成內容與後續待辦。
