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
| 00 | Standard C Syntax | ✅ 已完整整理 | C 程式骨架、型別、運算子、控制流程、函式、指標、陣列、structure、標準輸入輸出 | 完成最小 C 程式、編譯流程、基本型別與 printf 格式、if/for/while、函式參數、pointer/array/string、struct/typedef、scanf 檢查與練習題 | 可依學生程度增加 makefile 或多檔案編譯練習 |
| 01 | Basic Concepts | ✅ 已完整整理 | ADT、演算法規格、遞迴、時間與空間複雜度、C 指標與動態配置 | 完成資料結構三層語言、ADT 規格與表示法、Big-O 成長率表與視覺追蹤、遞迴/迭代 factorial C 範例、malloc/free 動態配置範例、ADT 邊界測試案例 | 可依授課節奏增加更多小測驗 |
| 02 | Arrays and Structures | ✅ 已完整整理 | Array、structure、string、sparse matrix、polynomial representation | 完成陣列/結構/字串/稀疏資料概念地圖、row-major 位址計算、稀疏矩陣三元組圖表、動態陣列 C 範例、字串容量範例、SparseMatrix triple/transpose/add 策略、多項式 dense/sparse 與 add C 程式 | 可補更多矩陣乘法練習 |
| 03 | Stacks and Queues | ✅ 已完整整理 | Stack ADT、Queue ADT、circular queue、expression evaluation、maze/BFS 概念 | 完成 stack/queue 操作圖像、circular queue 說明、infix/postfix 與 maze BFS 教材、array stack C 程式、circular queue C 程式 | 可依課程需求加入互動表示式追蹤 |
| 04 | Linked Lists | ✅ 已完整整理 | Singly linked list、circular list、doubly linked list、header node、polynomial/list applications | 完成 singly/circular/doubly/header node 教材、插入刪除指標追蹤、insert_after/delete_after C 範例、stack/queue/polynomial 應用說明 | 可補更多 doubly linked list 刪除練習 |
| 05 | Trees | ✅ 已完整整理 | Terminology、tree representation、binary tree ADT/properties/representations、traversals、additional binary tree operations、threaded binary trees、heaps、BST、selection trees、forests、disjoint sets、counting binary trees | 完成定義、名詞、教科書章節對照、二元樹性質、表示法、遞迴與迭代走訪、copy/equality、Threaded Tree、Heap、BST、Selection Tree、Forest、Union-Find、Catalan recurrence；加入 Binary/Full/Complete/Skewed、Max Heap、Min Heap、Winner/Loser Tree、Forest、Left-child/right-sibling 圖例；保留 Trees Lab | 日後可補 deletion BST 動態步驟、threaded tree 插入圖、更多練習題 |
| 06 | Graphs | ✅ 已完整整理 | Graph 定義、terminology、Graph ADT、adjacency matrix/list、BFS、DFS、shortest paths、minimum spanning trees | 完成圖定義、名詞卡、Graph ADT、表示法比較、C adjacency list、BFS/DFS/Dijkstra/Prim/Kruskal C 程式骨架、topological sort、connected components 與 Graph Lab | 可依課程需求補 priority queue 版 Dijkstra |
| 07 | Sorting | ✅ 已完整整理 | Insertion、selection、bubble、merge、quick、heap、radix sorting；內部排序比較與穩定性/成本分析 | 每種排序法各自成節，含說明、圖例、演算法、標準 C 程式、程式碼說明；含 Merge/Radix Pass 圖例、Heap Sort 動態展示、Sorting Lab、external sorting/k-way merge 教材與測驗方向 | 可增加檔案 I/O 實作練習 |
| 08 | Hashing | ✅ 已完整整理 | Hash function、collision resolution、linear/quadratic probing、chaining、rehashing、dynamic hashing | 完成 hash function、chaining、open addressing、rehashing、load factor 視覺化、chaining insert C 範例、linear probing search C 範例 | 可補動態雜湊進階動畫 |
| 09 | Priority Queues | ✅ 已完整整理 | Priority Queue ADT、leftist tree、binomial heap、Fibonacci heap、pairing heap | 完成 binary heap 與 advanced priority queue 區分、leftist/binomial/Fibonacci/pairing heap 教材、min heap insert/delete-min C 程式、操作比較 | 可補 leftist tree meld 完整程式 |
| 10 | Efficient Binary Search Trees | ✅ 已完整整理 | AVL tree、splay tree、red-black tree、rotations、amortized behavior | 完成 single/double rotation、AVL、splay tree、red-black tree 概念、旋轉與 AVL cases C 範例 | 可補 red-black insertion 詳細案例 |
| 11 | Multiway Search Trees | ✅ 已完整整理 | m-way search tree、B-tree、B+ tree、node split/merge、external storage indexing | 完成 m-way/B-tree/B+ tree 教材、B-tree 插入分裂流程、範圍查詢與 external storage 對照、B-tree node C 結構 | 可補完整 B-tree search/insert 程式 |
| 12 | Digital Search Structures | ✅ 已完整整理 | Digital search tree、Trie、Patricia、compressed trie、suffix tree | 完成 Trie、digital search tree、Patricia、compressed trie、suffix tree 教材、Trie node/search C 範例、prefix query 練習 | 可補 compressed trie edge-label 程式 |

## 教科書重點對照檢核表

### Unit 00 Standard C Syntax

- [x] Minimal C program with include, main, printf, return
- [x] gcc C11 compile command with warnings
- [x] Basic types and printf format specifiers
- [x] if, for, while control flow examples
- [x] Function parameters, return values, pass by value
- [x] Pointer-based swap and address/dereference operators
- [x] Array parameter and string terminator notes
- [x] struct, typedef, and linked-node shape
- [x] scanf return-value checking
- [x] Practice exercises for syntax fluency

### Unit 01 Basic Concepts

- [x] ADT, representation, algorithm 三層架構
- [x] 演算法規格、前置條件、後置條件與不變量
- [x] Big-O 成長率比較表
- [x] 遞迴與迭代 C 範例
- [x] C 指標、malloc/free 與配置失敗處理範例
- [x] Big-O 視覺曲線與更多成本追蹤練習
- [x] ADT 測試案例與錯誤情境練習

### Unit 02 Arrays and Structures

- [x] Array、structure、string、sparse data 概念地圖
- [x] Row-major address calculation
- [x] Sparse matrix triple representation
- [x] Dynamic array C structure and append example
- [x] SparseMatrix triple C structure and insertion example
- [x] Dense and sparse polynomial representation comparison
- [x] String processing C example with capacity and terminator handling
- [x] Sparse matrix transpose/add implementation
- [x] Polynomial add full C implementation

### Unit 03 Stacks and Queues

- [x] Stack ADT and LIFO operation diagram
- [x] Queue ADT and FIFO operation diagram
- [x] Circular queue wrap-around explanation
- [x] Infix/postfix expression evaluation overview
- [x] Maze/BFS queue concept
- [x] Array stack C implementation
- [x] Circular queue C implementation

### Unit 04 Linked Lists

- [x] Singly linked list node diagram
- [x] Circular list and stopping condition
- [x] Doubly linked list prev/next maintenance
- [x] Header node / sentinel explanation
- [x] Pointer trace for insertion and deletion
- [x] insert_after/delete_after C examples
- [x] Stack, queue, polynomial applications

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
- [x] Full BFS C implementation
- [x] Full DFS C implementation
- [x] Dijkstra detailed C implementation
- [x] Prim and Kruskal detailed C implementation
- [x] Topological sort and connected components, if aligned with course scope

### Unit 07 Sorting

- [x] Insertion sort
- [x] Selection sort
- [x] Bubble sort
- [x] Merge sort
- [x] Quick sort
- [x] Heap sort
- [x] Radix sort
- [x] Sorting algorithm comparison table and interactive lab
- [x] External sorting / k-way merge, if required by syllabus

### Unit 08 Hashing

- [x] Hash function, bucket, collision, load factor
- [x] Chaining collision resolution
- [x] Linear probing and tombstone concept
- [x] Rehashing trigger and load factor visualization
- [x] Chaining insert C example
- [x] Linear probing search C example

### Unit 09 Priority Queues

- [x] Priority Queue ADT and binary heap review
- [x] Leftist tree meld concept
- [x] Binomial heap forest/union concept
- [x] Fibonacci and pairing heap amortized discussion
- [x] Min heap insert C implementation
- [x] Min heap delete-min C implementation

### Unit 10 Efficient Binary Search Trees

- [x] BST height and degeneration problem
- [x] Single and double rotations
- [x] AVL insertion cases
- [x] Splay tree and amortized behavior overview
- [x] Red-black tree properties overview
- [x] Rotation C example

### Unit 11 Multiway Search Trees

- [x] m-way search tree key range model
- [x] B-tree split/merge concept
- [x] B+ tree leaf-chain range query
- [x] External storage indexing motivation
- [x] B-tree insertion split flow
- [x] B-tree node C structure

### Unit 12 Digital Search Structures

- [x] Digital search tree concept
- [x] Trie prefix model
- [x] Patricia and compressed trie concept
- [x] Suffix tree overview
- [x] Trie node/search C example
- [x] Prefix query exercise

## 更新紀錄

- 2026-06-02：擴充 Unit 06 Graph ADT 後的名詞教材，新增 Adjacent 與 Incident 對照小節，以無向圖、有向圖文字說明及 A-B-C 圖例區分 vertex-to-vertex 與 edge-to-vertex 關係。
- 2026-06-02：重整 Unit 06 Graph 程式骨架區，將 BFS/DFS、Dijkstra、Prim 與 Kruskal 改為左右對照版面；左側列出演算法步驟與判讀重點，右側放置對應的 C 程式碼骨架。
- 2026-06-02：依 CH6_1、CH6_2 課堂投影片補強 Unit 06，新增 complete directed graph、inverse adjacency list、orthogonal list、adjacency multilist、sequential packed lists、weighted network、spanning tree 性質、Sollin/Boruvka MST、articulation point、biconnected component、dfn/low、Floyd-Warshall、transitive closure、negative cycle、AOV/AOE、critical path 與 earliest/latest/slack，並加入六題延伸例題。
- 2026-06-02：擴充 Unit 06 Graph ADT 後的圖形教材，新增無向圖、有向圖、自我邊與 multigraph 圖例；再以一張簡單原圖示範三角形、path 與 spanning tree 等合法 subgraphs。
- 2026-06-02：修正 Unit 06 柯尼茲堡 multigraph 彎曲 edge 的 SVG 樣式，加入 `fill: none`，移除 path 預設填色造成的黑色區域。
- 2026-06-02：修正 Unit 06 柯尼茲堡七橋問題的 multigraph 抽象圖，將誤接的中央邊改為 Kneiphof K 至 Lomse L，並加入七條 edge 關係摘要方便逐條核對。
- 2026-06-02：補強 Unit 06 柯尼茲堡七橋問題，新增保留河道、四塊陸地與七座橋位置的原始橋梁配置示意圖，並與 multigraph 抽象圖並列對照。
- 2026-06-02：擴充 Unit 06 Graph 經典例題，加入柯尼茲堡七橋問題的抽象圖、multigraph 建模、四個頂點 degree 分析，以及 Euler trail / Euler circuit 的存在條件。
- 2026-06-02：擴充 Unit 06 Graph 名詞整理，將每個名詞補成完整定義與具體範例；新增 in-degree/out-degree、walk、reachable、strongly connected、tree/forest、minimum spanning tree、multigraph、complete graph、bipartite graph、DAG 與 bridge 等課堂常用詞彙。
- 2026-06-02：擴充 Unit 07 Radix Sort，新增 LSD Radix Sort 動態圖例互動介面；提供重置、上一步、下一步、自動播放與速度控制，逐步顯示個位/十位/百位 pass、0-9 buckets、穩定分桶、收回順序與目前陣列狀態。
- 2026-06-02：擴充 Unit 00 Standard C Syntax，新增前置處理器與巨集小節，說明 `#include`、`#define`、函式式巨集括號、參數重複求值、`#ifdef DEBUG`、header include guard，以及何時優先使用函式或 `static inline`；加入四題例題。
- 2026-06-02：擴充 Unit 00 Standard C Syntax，新增 pointer-based `swap_int(&x, &y)` 函式呼叫與 `SWAP(x, y, type)` 巨集比較，說明型別檢查、呼叫方式、`do { ... } while (0)`、巨集參數重複求值風險，並加入三題例題。
- 2026-06-02：為 Unit 00-12 全部章節新增「各小節例題」題庫；每個單元拆成 4 個核心小節，每小節至少 3 題，共新增 52 組、156 題，可用於課堂追蹤、作業與操作驗證。
- 2026-05-30：為 Unit 00-12 全部章節新增第二輪課堂延伸教材；每章加入三個主題概念卡與課堂練習，涵蓋 C 除錯習慣、ADT 規格、表示法成本、容器狀態追蹤、pointer ownership、BST deletion、graph relaxation、sorting stability、hash probing、heap operations、AVL rotation、B-tree split 與 trie autocomplete。
- 2026-05-29：新增 Unit 00 Standard C Syntax 章節，補標準 C 語言簡易語法介紹，涵蓋程式骨架、編譯、型別、控制流程、函式、指標、陣列、structure 與標準輸入輸出；首頁章節索引同步加入 C 語法入口。
- 2026-05-29：清理首頁與章節教材中的網站功能、部署、來源查核與自述性文字，改為直接呈現課程學習主線、資料表示、操作成本與 C 實作提醒。
- 2026-05-29：補 Unit 01 Basic Concepts 教材內容，新增 ADT/representation/algorithm 架構、演算法規格、Big-O 成長率表、遞迴與迭代 factorial、C 動態配置範例；同步更新 HTML cache 版本參數。
- 2026-05-29：補 Unit 02 Arrays and Structures 教材內容，新增 row-major 位址計算、稀疏矩陣三元組、多項式 dense/sparse 表示法、動態陣列與 SparseMatrix C 範例；同步更新 HTML cache 版本參數。
- 2026-05-29：補齊 tasklist 全部剩餘教材項目；新增 Unit 03/04/08/09/10/11/12 完整教材段落與 C 範例，補強 Unit 01/02/06/07 待辦內容，並保留 Unit 05/06/07 既有互動實驗室。
- 2026-05-29：新增 `MAINTENANCE.md` 與 `AGENTS.md`，記錄跨電腦維護流程、先 pull 再更新、驗證、commit/push 與 Codex 維護原則。
- 2026-05-29：建立本 tasklist；記錄 Unit 01-12 初始狀態、Unit 05/06/07 已完成內容與後續待辦。
