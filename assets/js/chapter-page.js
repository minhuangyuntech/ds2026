const chapterData = {
  "00": {
    unit: "Unit 00",
    title: "Standard C Syntax",
    subtitle: "C 程式骨架、型別、控制流程、函式、指標與結構",
    focus: "資料結構課程中的程式範例大量使用標準 C。先熟悉編譯流程、基本型別、控制流程、函式、指標、陣列與 structure，後續閱讀 stack、list、tree、graph 程式會順很多。",
    objectives: [
      "寫出可編譯的最小 C 程式，理解 include、main、return 的角色。",
      "辨認 int、double、char、array、pointer、struct 的基本用法。",
      "使用 if、switch、for、while 表達條件與重複流程。",
      "用函式切分程式，理解 pass by value 與透過 pointer 修改呼叫端資料。",
      "建立編譯、執行、追蹤警告訊息的基本習慣。",
    ],
    implementation: [
      "編譯時開啟警告，例如 gcc -std=c11 -Wall -Wextra。",
      "陣列傳入函式時會退化成指標，因此要另外傳入長度。",
      "使用 scanf 時要傳入變數位址，且檢查回傳值是否讀取成功。",
      "指標使用前要初始化；釋放記憶體後不要再解參照。",
    ],
    questions: [
      "說明 printf 與 scanf 的格式字串如何對應變數型別。",
      "把一段重複程式改成函式，並設計參數與回傳值。",
      "追蹤指標變數、陣列名稱與取址運算子的差異。",
    ],
    labLabel: "進入 Basic Concepts",
    labHref: "01-basic-concepts.html",
    prev: null,
    next: ["01-basic-concepts.html", "Basic Concepts"],
  },
  "01": {
    unit: "Unit 01",
    title: "Basic Concepts",
    subtitle: "抽象資料型態、遞迴、演算法規格與成本分析",
    focus: "本章建立整門課的語言：用 ADT 描述資料與操作，用 C 指標與動態配置落實表示法，再用時間與空間複雜度評估取捨。",
    objectives: [
      "說明資料結構、ADT 與實作之間的差異。",
      "用前置條件、後置條件與不變量描述演算法。",
      "分析簡單迴圈、巢狀迴圈與遞迴程式的時間成本。",
      "辨認 C 指標、配置、釋放與別名造成的常見錯誤。",
    ],
    implementation: [
      "每個 ADT 至少分成公開介面、內部表示與測試程式。",
      "動態配置失敗時要有明確處理路徑，不要假設 malloc 永遠成功。",
      "遞迴版本與迭代版本都要確認終止條件。",
    ],
    questions: [
      "比較 O(n)、O(n log n)、O(n²) 在 n 放大時的差距。",
      "把一段遞迴程式改成堆疊模擬，說明系統堆疊扮演的角色。",
      "替一個 List ADT 寫出操作規格，而不是先寫結構欄位。",
    ],
    labLabel: "回課程地圖",
    labHref: "../index.html#map",
    prev: ["00-standard-c-syntax.html", "Standard C Syntax"],
    next: ["02-arrays-structures.html", "Arrays and Structures"],
  },
  "02": {
    unit: "Unit 02",
    title: "Arrays and Structures",
    subtitle: "陣列、結構、字串、稀疏矩陣與多項式表示",
    focus: "本章重點是連續記憶體的表示法。陣列讓索引成為 O(1) 位址計算，但插入、刪除、稀疏資料與可變大小資料會暴露它的成本。",
    objectives: [
      "理解一維與二維陣列的位址計算。",
      "用 structure 表示多欄位資料與自我參照節點。",
      "比較多項式與稀疏矩陣的緊密表示與展開表示。",
      "說明字串與模式比對的資料表示問題。",
    ],
    implementation: [
      "動態陣列要保存容量與實際長度，避免越界存取。",
      "稀疏矩陣建議用三元組或列導向結構保存非零項。",
      "structure 內若有指標欄位，要定義複製與釋放責任。",
    ],
    questions: [
      "給定 row-major 二維陣列，計算 A[i][j] 的位址。",
      "比較 dense matrix 與 sparse matrix 在乘法上的成本。",
      "設計 polynomial add 的測試資料，涵蓋同次方、缺項與零係數。",
    ],
    labLabel: "回課程地圖",
    labHref: "../index.html#map",
    prev: ["01-basic-concepts.html", "Basic Concepts"],
    next: ["03-stacks-queues.html", "Stacks and Queues"],
  },
  "03": {
    unit: "Unit 03",
    title: "Stacks and Queues",
    subtitle: "堆疊、佇列、循環佇列與表示式處理",
    focus: "堆疊與佇列是控制流程的基本容器。LIFO 適合巢狀與回溯，FIFO 適合公平排程、層次走訪與最短邊數搜尋。",
    objectives: [
      "描述 stack push/pop 與 queue enqueue/dequeue 的 ADT 行為。",
      "用陣列與循環陣列實作固定容量容器。",
      "用 stack 完成 postfix evaluation 與 infix-to-postfix。",
      "理解迷宮、呼叫堆疊與 BFS 為什麼需要不同容器。",
    ],
    implementation: [
      "循環佇列要清楚區分空與滿，可用 size 或保留一格。",
      "pop/dequeue 前必須檢查 underflow。",
      "表示式處理要定義運算子優先權、結合性與括號錯誤處理。",
    ],
    questions: [
      "追蹤一個 infix 表示式轉 postfix 的 stack 變化。",
      "設計 queue 的 wrap-around 測試。",
      "比較 DFS 迷宮搜尋與 BFS 迷宮搜尋的路徑差異。",
    ],
    labLabel: "到圖實驗室看 BFS/DFS",
    labHref: "06-graphs.html#graphs",
    prev: ["02-arrays-structures.html", "Arrays and Structures"],
    next: ["04-linked-lists.html", "Linked Lists"],
  },
  "04": {
    unit: "Unit 04",
    title: "Linked Lists",
    subtitle: "單向、循環、雙向串列與動態節點",
    focus: "鏈結串列把資料分散在記憶體中，用指標建立順序。它讓插入刪除更彈性，但犧牲隨機存取並增加指標維護成本。",
    objectives: [
      "畫出 singly、circular、doubly linked list 的節點關係。",
      "比較陣列與串列在搜尋、插入、刪除上的成本。",
      "用串列表示 stack、queue、多項式與稀疏矩陣。",
      "理解 header node 與 tail pointer 如何簡化邊界情況。",
    ],
    implementation: [
      "刪除節點前先保存下一個節點，避免遺失串列尾端。",
      "每個 create 對應 destroy，避免 memory leak。",
      "雙向串列插入刪除必須同步更新 prev 與 next。",
    ],
    questions: [
      "追蹤刪除第一個節點、最後一個節點與中間節點的指標變化。",
      "用 circular list 設計 Josephus 問題。",
      "比較以 array 與 linked list 儲存 polynomial 的加法流程。",
    ],
    labLabel: "回課程地圖",
    labHref: "../index.html#map",
    prev: ["03-stacks-queues.html", "Stacks and Queues"],
    next: ["05-trees.html", "Trees"],
  },
  "05": {
    unit: "Unit 05",
    title: "Trees",
    subtitle: "二元樹、走訪、搜尋樹、線索樹與堆積概念",
    focus: "樹把線性序列擴展成階層結構。走訪順序、節點高度與平衡程度會直接影響搜尋、插入與刪除成本。",
    objectives: [
      "理解 degree、height、level、leaf、ancestor 等樹術語。",
      "比較 array representation 與 linked representation。",
      "執行 inorder、preorder、postorder、level-order 走訪。",
      "說明 BST 的中序結果與搜尋路徑。",
    ],
    implementation: [
      "遞迴走訪要先處理空節點基底案例。",
      "BST 插入要明確規範重複鍵值處理策略。",
      "刪除二子節點時可用 inorder predecessor 或 successor 替換。",
    ],
    questions: [
      "從走訪序列重建二元樹，並說明何時資訊不足。",
      "比較排序插入與隨機插入對 BST 高度的影響。",
      "把遞迴 inorder 改成 stack 迭代版本。",
    ],
    labLabel: "跳到本章樹實驗室",
    labHref: "#trees",
    prev: ["04-linked-lists.html", "Linked Lists"],
    next: ["06-graphs.html", "Graphs"],
  },
  "06": {
    unit: "Unit 06",
    title: "Graphs",
    subtitle: "相鄰矩陣、相鄰串列、走訪、最短路徑與生成樹",
    focus: "圖描述任意關係。表示法決定空間成本與鄰居查詢成本，而 BFS、DFS、Dijkstra、MST 會用不同資料結構管理候選節點或邊。",
    objectives: [
      "比較 adjacency matrix 與 adjacency list 的空間與查詢成本。",
      "用 queue 執行 BFS，用 recursion 或 stack 執行 DFS。",
      "理解非負權重圖上的 Dijkstra 最短路徑。",
      "說明 Prim 或 Kruskal 如何建立 minimum spanning tree。",
    ],
    implementation: [
      "無向圖加邊時要同步更新兩個方向。",
      "走訪前要初始化 visited、parent、distance 等陣列。",
      "Dijkstra 只能直接用於非負權重邊。",
    ],
    questions: [
      "同一張圖分別寫成相鄰矩陣與相鄰串列。",
      "追蹤 BFS 佇列內容，建立 BFS tree。",
      "比較 shortest path tree 與 minimum spanning tree 的不同目標。",
    ],
    labLabel: "跳到本章圖實驗室",
    labHref: "#graphs",
    prev: ["05-trees.html", "Trees"],
    next: ["07-sorting.html", "Sorting"],
  },
  "07": {
    unit: "Unit 07",
    title: "Sorting",
    subtitle: "插入排序、快速排序、合併排序、堆積排序與外部排序",
    focus: "排序讓資料更容易搜尋與比較。不同演算法的差異不只在 Big-O，也包含穩定性、額外空間、資料分布與實作複雜度。",
    objectives: [
      "比較 insertion、selection、bubble、merge、quick、heap 的成本。",
      "理解 stable sorting 與 in-place sorting 的取捨。",
      "說明 quick sort partition 與 merge sort merge 的核心步驟。",
      "認識外部排序與 k-way merge 的使用情境。",
    ],
    implementation: [
      "排序函式要明確定義比較器與資料交換方式。",
      "Quick sort 要避免壞 pivot 造成深度退化。",
      "Merge sort 額外陣列的配置與釋放要集中管理。",
    ],
    questions: [
      "給定同一筆資料，手動追蹤 quick sort 的 partition。",
      "比較近乎有序資料在 insertion sort 與 heap sort 的差異。",
      "設計測試驗證排序是否穩定。",
    ],
    labLabel: "跳到本章排序實驗室",
    labHref: "#sorting",
    prev: ["06-graphs.html", "Graphs"],
    next: ["08-hashing.html", "Hashing"],
  },
  "08": {
    unit: "Unit 08",
    title: "Hashing",
    subtitle: "雜湊函數、碰撞處理、負載因子與動態雜湊",
    focus: "Hashing 用函數把鍵值映射到表格位置，目標是平均 O(1) 查詢。真正的重點在碰撞處理、負載因子與資料分布。",
    objectives: [
      "說明 hash function、bucket、collision、load factor。",
      "比較 chaining、linear probing、quadratic probing 與 double hashing。",
      "理解 rehashing 與 dynamic hashing 的時機。",
      "認識 Bloom filter 的 false positive 特性。",
    ],
    implementation: [
      "hash table 要保存 table size、count 與碰撞策略。",
      "開放定址刪除時要用 tombstone 或重排探測序列。",
      "字串鍵值要避免過度簡單的加總 hash。",
    ],
    questions: [
      "追蹤 linear probing 插入與搜尋的探測序列。",
      "比較相同鍵值集合在不同 table size 下的碰撞狀況。",
      "說明 Bloom filter 為什麼可能誤判存在，但不會誤判不存在。",
    ],
    labLabel: "回課程地圖",
    labHref: "../index.html#map",
    prev: ["07-sorting.html", "Sorting"],
    next: ["09-priority-queues.html", "Priority Queues"],
  },
  "09": {
    unit: "Unit 09",
    title: "Priority Queues",
    subtitle: "優先佇列、左式樹、二項堆積、費氏堆積與配對堆積",
    focus: "Priority queue 不是依到達順序移除元素，而是依優先權。它支撐排程、事件模擬、Dijkstra 與 Prim 等演算法。",
    objectives: [
      "描述 priority queue 的 insert、delete-min、decrease-key。",
      "比較 binary heap 與一般 BST 作為優先佇列的差異。",
      "理解 meldable heap 的合併需求。",
      "認識 amortized analysis 在進階堆積中的用途。",
    ],
    implementation: [
      "binary heap 可用陣列表示，父子索引計算要一致。",
      "delete-min 後要用下濾維持 heap order。",
      "decrease-key 需要能定位元素，常搭配外部索引表。",
    ],
    questions: [
      "把一串鍵值插入 min heap，畫出每一步上濾結果。",
      "追蹤 delete-min 的最後元素移根與下濾過程。",
      "說明 priority queue 如何改善 Dijkstra 的候選節點選取。",
    ],
    labLabel: "到圖實驗室看 Dijkstra",
    labHref: "06-graphs.html#graphs",
    prev: ["08-hashing.html", "Hashing"],
    next: ["10-efficient-bsts.html", "Efficient BSTs"],
  },
  "10": {
    unit: "Unit 10",
    title: "Efficient Binary Search Trees",
    subtitle: "AVL、伸展樹、紅黑樹與旋轉",
    focus: "二元搜尋樹若失衡會退化成串列。平衡搜尋樹用旋轉與額外資訊維持高度，讓搜尋、插入、刪除保持可預測成本。",
    objectives: [
      "說明 BST 退化的原因與高度對搜尋成本的影響。",
      "理解 single rotation 與 double rotation。",
      "比較 AVL、splay tree、red-black tree 的維護策略。",
      "辨認何時需要保證最壞情況成本。",
    ],
    implementation: [
      "旋轉前後要同時維持 BST order 與父子連結。",
      "AVL 節點可保存 height 或 balance factor。",
      "紅黑樹插入刪除測試要涵蓋 recolor 與 rotation。",
    ],
    questions: [
      "對一串遞增鍵值執行 AVL 插入並標出旋轉。",
      "比較 AVL 與 splay tree 對近期常用資料的表現。",
      "說明紅黑樹為什麼能限制路徑高度。",
    ],
    labLabel: "到樹實驗室比較樹高",
    labHref: "05-trees.html#trees",
    prev: ["09-priority-queues.html", "Priority Queues"],
    next: ["11-multiway-search-trees.html", "Multiway Search Trees"],
  },
  "11": {
    unit: "Unit 11",
    title: "Multiway Search Trees",
    subtitle: "m-way search tree、B-tree 與 B+ tree",
    focus: "多路搜尋樹把一個節點放入多個鍵值與多個子樹，降低高度，特別適合磁碟或區塊式儲存上的索引。",
    objectives: [
      "理解 m-way search tree 節點中的鍵值區間。",
      "說明 B-tree 的分裂、合併與最小填充限制。",
      "比較 B-tree 與 B+ tree 的查詢與範圍掃描。",
      "連結資料庫索引與檔案系統的應用情境。",
    ],
    implementation: [
      "節點要保存 key count、keys 與 child pointers。",
      "插入造成 overflow 時要由中間鍵值向上分裂。",
      "B+ tree 的資料通常集中在葉節點，葉節點可串接支援範圍查詢。",
    ],
    questions: [
      "給定 B-tree 階數，追蹤插入序列造成的節點分裂。",
      "比較在記憶體與磁碟上搜尋樹設計的不同目標。",
      "說明 B+ tree 為什麼適合範圍查詢。",
    ],
    labLabel: "回課程地圖",
    labHref: "../index.html#map",
    prev: ["10-efficient-bsts.html", "Efficient BSTs"],
    next: ["12-digital-search-structures.html", "Digital Search Structures"],
  },
  "12": {
    unit: "Unit 12",
    title: "Digital Search Structures",
    subtitle: "Digital search tree、Trie、Patricia、compressed trie 與 suffix tree",
    focus: "Digital search structures 依鍵值的位元或字元逐步分支，特別適合字串、前綴、字典與文字搜尋。",
    objectives: [
      "比較 BST 依整個鍵值比較與 trie 依字元路徑比較。",
      "理解 binary trie、Patricia 與 compressed trie 的壓縮方式。",
      "說明 prefix search 的操作流程。",
      "認識 suffix tree 可支援子字串搜尋。",
    ],
    implementation: [
      "Trie 節點要明確保存終止標記，避免前綴與完整字混淆。",
      "節點子指標可用固定陣列、map 或壓縮邊標籤表示。",
      "刪除字串後要清理不再需要的節點，但保留其他字串路徑。",
    ],
    questions: [
      "把一組英文單字插入 trie，標出共享前綴。",
      "比較 trie 與 hash table 在前綴查詢上的能力。",
      "說明 compressed trie 如何降低空間浪費。",
    ],
    labLabel: "回課程地圖",
    labHref: "../index.html#map",
    prev: ["11-multiway-search-trees.html", "Multiway Search Trees"],
    next: null,
  },
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function listItems(items) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function navLink(target, fallbackText) {
  if (!target) return `<span class="text-link" aria-disabled="true">${fallbackText}</span>`;
  return `<a class="text-link" href="${target[0]}">${escapeHtml(target[1])}</a>`;
}

function radixPassDiagram({ pass, digitLabel, input, buckets, output, note }) {
  const markerId = `radix-arrow-head-pass-${pass}`;
  const xs = Array.from({ length: 10 }, (_, index) => 40 + index * 100);
  const topCells = input
    .map(
      (value, index) => `
        <text class="radix-label" x="${xs[index]}" y="86">a[${index + 1}]</text>
        <rect x="${xs[index] - 30}" y="96" width="60" height="42" rx="3"></rect>
        <text x="${xs[index]}" y="123">${value}</text>
      `,
    )
    .join("");
  const topArrows = xs
    .slice(0, -1)
    .map((x) => `<path class="radix-arrow" marker-end="url(#${markerId})" d="M${x + 30} 117 H${x + 68}"></path>`)
    .join("");
  const bucketGuides = xs
    .map(
      (x, digit) => `
        <text class="radix-label" x="${x}" y="190">e[${digit}]</text>
        <line class="radix-bucket-line" x1="${x}" y1="200" x2="${x}" y2="382"></line>
        <text class="radix-label" x="${x}" y="414">f[${digit}]</text>
      `,
    )
    .join("");
  const bucketCells = buckets
    .flatMap((bucket, digit) =>
      bucket.map((value, offset) => {
        const x = xs[digit];
        const y = 214 + offset * 41;
        return `
          <rect x="${x - 30}" y="${y}" width="60" height="35" rx="3"></rect>
          <text x="${x}" y="${y + 24}">${value}</text>
        `;
      }),
    )
    .join("");
  const outputCells = output
    .map(
      (value, index) => `
        <text class="radix-label" x="${xs[index]}" y="442">a[${index + 1}]</text>
        <rect x="${xs[index] - 30}" y="452" width="60" height="42" rx="3"></rect>
        <text x="${xs[index]}" y="479">${value}</text>
      `,
    )
    .join("");

  return `
    <svg class="radix-pass-svg" viewBox="0 0 1040 560" role="img" aria-label="Radix Sort Pass ${pass} ${escapeHtml(digitLabel)}分桶圖例">
      <defs>
        <marker id="${markerId}" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#66717e"></path>
        </marker>
      </defs>
      <text class="radix-title" x="520" y="32">Radix Sort: Pass ${pass}</text>
      <text class="radix-note" x="520" y="56">${escapeHtml(note)}</text>
      <g class="radix-cell">${topCells}</g>
      ${topArrows}
      <g>${bucketGuides}</g>
      <g class="radix-bucket-cell">${bucketCells}</g>
      <g class="radix-cell">${outputCells}</g>
    </svg>
    <div class="radix-pass-explanation">
      <strong>Pass ${pass}：${escapeHtml(digitLabel)}</strong>
      <span>${escapeHtml(note)}</span>
    </div>
  `;
}

const sortingLessons = [
  {
    id: "insertion-sort",
    title: "Insertion Sort",
    subtitle: "把新元素插入左側已排序區",
    overview:
      "Insertion Sort 的想法像整理手上的牌：左側維持已排序，每次拿出一張新牌 key，往左比較並把較大的元素右移，最後把 key 放進空位。它在近乎有序資料上非常有效，也常被混合排序法拿來處理小區間。",
    complexity: ["Best O(n)", "Average O(n²)", "Worst O(n²)", "Space O(1)", "Stable"],
    diagram: `
      <div class="mini-array">
        <span class="cell sorted">12</span><span class="cell sorted">31</span><span class="cell sorted">48</span><span class="cell active">25</span><span class="cell">67</span>
      </div>
      <div class="mini-array">
        <span class="cell sorted">12</span><span class="cell compare">31</span><span class="cell compare">48</span><span class="diagram-arrow">shift right</span><span class="cell active">25</span>
      </div>
      <div class="mini-array">
        <span class="cell sorted">12</span><span class="cell sorted">25</span><span class="cell sorted">31</span><span class="cell sorted">48</span><span class="cell">67</span>
      </div>
      <div class="diagram-note">黃色是 key；紅色是被比較並可能右移的元素。</div>
    `,
    algorithm: [
      "令 i 從 1 到 n - 1，假設 a[0..i-1] 已排序。",
      "把 a[i] 暫存成 key，從 j = i - 1 開始往左掃描。",
      "只要 a[j] 大於 key，就把 a[j] 複製到 a[j + 1]。",
      "掃描停止後，把 key 放到 j + 1。",
    ],
    code: `void insertion_sort(int a[], int n) {
    for (int i = 1; i < n; ++i) {
        int key = a[i];
        int j = i - 1;

        while (j >= 0 && a[j] > key) {
            a[j + 1] = a[j];
            --j;
        }
        a[j + 1] = key;
    }
}`,
    codeNotes: [
      "`key` 先暫存，避免右移元素時覆蓋原本的 a[i]。",
      "`a[j] > key` 而不是 `>=`，所以相等元素不會交換前後順序，排序是穩定的。",
      "資料已接近有序時，while 迴圈會很快停止，接近 O(n)。",
    ],
  },
  {
    id: "selection-sort",
    title: "Selection Sort",
    subtitle: "每一輪選出未排序區的最小值",
    overview:
      "Selection Sort 將陣列分成左側已排序區與右側未排序區。每一輪掃描右側找最小值，再和本輪起點交換。它的比較次數幾乎固定，因此不會因資料已排序而明顯變快，但交換次數最多只有 n - 1 次。",
    complexity: ["Best O(n²)", "Average O(n²)", "Worst O(n²)", "Space O(1)", "Not stable"],
    diagram: `
      <div class="mini-array">
        <span class="cell sorted">12</span><span class="cell active">64</span><span class="cell">48</span><span class="cell compare">25</span><span class="cell">67</span>
      </div>
      <div class="mini-array">
        <span class="cell sorted">12</span><span class="cell sorted">25</span><span class="cell">48</span><span class="cell active">64</span><span class="cell">67</span>
      </div>
      <div class="diagram-note">黃色是目前位置，紅色是掃描後找到的最小值。</div>
    `,
    algorithm: [
      "令 i 從 0 到 n - 2，i 左側視為已排序。",
      "設定 min = i，掃描 j = i + 1 到 n - 1。",
      "若 a[j] 小於 a[min]，更新 min。",
      "掃描完成後，若 min 不等於 i，交換 a[i] 與 a[min]。",
    ],
    code: `void selection_sort(int a[], int n) {
    for (int i = 0; i < n - 1; ++i) {
        int min = i;
        for (int j = i + 1; j < n; ++j) {
            if (a[j] < a[min]) {
                min = j;
            }
        }
        if (min != i) {
            int temp = a[i];
            a[i] = a[min];
            a[min] = temp;
        }
    }
}`,
    codeNotes: [
      "`min` 保存目前找到的最小元素索引，不是元素值。",
      "內層迴圈一定會掃完整個未排序區，所以時間複雜度固定偏高。",
      "交換可能讓相等鍵值的相對順序改變，因此一般版本不穩定。",
    ],
  },
  {
    id: "bubble-sort",
    title: "Bubble Sort",
    subtitle: "相鄰比較，把最大值推到尾端",
    overview:
      "Bubble Sort 反覆比較相鄰兩個元素，若順序錯誤就交換。每完成一輪，該輪最大值會被推到右端固定。它常用來教交換與迴圈不變量，但實務上通常只適合小資料或教學情境。",
    complexity: ["Best O(n)", "Average O(n²)", "Worst O(n²)", "Space O(1)", "Stable"],
    diagram: `
      <div class="mini-array">
        <span class="cell">12</span><span class="cell compare">48</span><span class="cell compare">25</span><span class="cell">31</span><span class="cell">67</span>
      </div>
      <div class="mini-array">
        <span class="cell">12</span><span class="cell active">25</span><span class="cell active">48</span><span class="diagram-arrow">bubble</span><span class="cell sorted">67</span>
      </div>
      <div class="diagram-note">每一輪結束後，右側綠色區域已固定。</div>
    `,
    algorithm: [
      "外層控制尚未固定的右邊界 end。",
      "內層從左到右比較 a[i] 與 a[i + 1]。",
      "若 a[i] 大於 a[i + 1]，交換兩者。",
      "若某一輪沒有任何交換，表示陣列已排序，可提前停止。",
    ],
    code: `void bubble_sort(int a[], int n) {
    for (int end = n - 1; end > 0; --end) {
        int swapped = 0;
        for (int i = 0; i < end; ++i) {
            if (a[i] > a[i + 1]) {
                int temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = 1;
            }
        }
        if (!swapped) {
            break;
        }
    }
}`,
    codeNotes: [
      "`end` 右側的元素已經放到正確位置，不需要再比較。",
      "`swapped` 可讓已排序或近乎有序資料提早結束。",
      "只在 `>` 時交換，相等元素不交換，所以排序是穩定的。",
    ],
  },
  {
    id: "merge-sort",
    title: "Merge Sort",
    subtitle: "分治切半，再穩定合併",
    overview:
      "Merge Sort 將問題切成左右兩半，遞迴排序後再合併兩個已排序序列。它的時間複雜度穩定是 O(n log n)，且合併時可保持穩定性；代價是需要額外暫存陣列。",
    complexity: ["Best O(n log n)", "Average O(n log n)", "Worst O(n log n)", "Space O(n)", "Stable"],
    diagram: `
      <svg class="merge-recursive-svg" viewBox="0 0 980 560" role="img" aria-label="Recursive merge sort 合併樹圖例">
        <defs>
          <marker id="merge-arrow-head" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#66717e"></path>
          </marker>
        </defs>
        <text class="merge-caption" x="490" y="28">Recursive Merge Sort</text>
        <line class="merge-divider" x1="490" y1="56" x2="490" y2="130"></line>

        <g class="merge-box">
          <rect x="28" y="70" width="62" height="42" rx="3"></rect><text x="59" y="98">26</text>
          <rect x="126" y="70" width="62" height="42" rx="3"></rect><text x="157" y="98">5</text>
          <rect x="224" y="70" width="62" height="42" rx="3"></rect><text x="255" y="98">77</text>
          <rect x="322" y="70" width="62" height="42" rx="3"></rect><text x="353" y="98">1</text>
          <rect x="420" y="70" width="62" height="42" rx="3"></rect><text x="451" y="98">61</text>
          <rect x="518" y="70" width="62" height="42" rx="3"></rect><text x="549" y="98">11</text>
          <rect x="616" y="70" width="62" height="42" rx="3"></rect><text x="647" y="98">59</text>
          <rect x="714" y="70" width="62" height="42" rx="3"></rect><text x="745" y="98">15</text>
          <rect x="812" y="70" width="62" height="42" rx="3"></rect><text x="843" y="98">48</text>
          <rect x="910" y="70" width="62" height="42" rx="3"></rect><text x="941" y="98">19</text>

          <rect x="42" y="165" width="168" height="46" rx="3"></rect><text x="84" y="195">5</text><text x="166" y="195">26</text>
          <rect x="532" y="165" width="168" height="46" rx="3"></rect><text x="574" y="195">11</text><text x="656" y="195">59</text>
          <rect x="798" y="165" width="168" height="46" rx="3"></rect><text x="840" y="195">19</text><text x="922" y="195">48</text>

          <rect x="28" y="270" width="280" height="46" rx="3"></rect><text x="74" y="300">5</text><text x="168" y="300">26</text><text x="262" y="300">77</text>
          <rect x="330" y="270" width="170" height="46" rx="3"></rect><text x="372" y="300">1</text><text x="458" y="300">61</text>
          <rect x="532" y="270" width="268" height="46" rx="3"></rect><text x="576" y="300">11</text><text x="666" y="300">15</text><text x="754" y="300">59</text>
          <rect x="812" y="270" width="154" height="46" rx="3"></rect><text x="856" y="300">19</text><text x="928" y="300">48</text>

          <rect x="28" y="385" width="470" height="48" rx="3"></rect><text x="70" y="416">1</text><text x="160" y="416">5</text><text x="252" y="416">26</text><text x="350" y="416">61</text><text x="454" y="416">77</text>
          <rect x="532" y="385" width="434" height="48" rx="3"></rect><text x="580" y="416">11</text><text x="668" y="416">15</text><text x="756" y="416">19</text><text x="846" y="416">48</text><text x="928" y="416">59</text>

          <rect x="28" y="500" width="938" height="48" rx="3"></rect>
          <text x="72" y="531">1</text><text x="170" y="531">5</text><text x="268" y="531">11</text><text x="366" y="531">15</text><text x="464" y="531">19</text><text x="562" y="531">26</text><text x="660" y="531">48</text><text x="758" y="531">59</text><text x="856" y="531">61</text><text x="936" y="531">77</text>
        </g>

        <path class="merge-arrow" marker-end="url(#merge-arrow-head)" d="M59 112 L92 162"></path>
        <path class="merge-arrow" marker-end="url(#merge-arrow-head)" d="M157 112 L158 162"></path>
        <path class="merge-arrow" marker-end="url(#merge-arrow-head)" d="M255 112 L252 268"></path>
        <path class="merge-arrow" marker-end="url(#merge-arrow-head)" d="M353 112 L378 268"></path>
        <path class="merge-arrow" marker-end="url(#merge-arrow-head)" d="M451 112 L456 268"></path>
        <path class="merge-arrow" marker-end="url(#merge-arrow-head)" d="M549 112 L584 162"></path>
        <path class="merge-arrow" marker-end="url(#merge-arrow-head)" d="M647 112 L650 162"></path>
        <path class="merge-arrow" marker-end="url(#merge-arrow-head)" d="M745 112 L704 268"></path>
        <path class="merge-arrow" marker-end="url(#merge-arrow-head)" d="M843 112 L858 162"></path>
        <path class="merge-arrow" marker-end="url(#merge-arrow-head)" d="M941 112 L920 162"></path>

        <path class="merge-arrow" marker-end="url(#merge-arrow-head)" d="M126 212 L155 268"></path>
        <path class="merge-arrow" marker-end="url(#merge-arrow-head)" d="M616 212 L650 268"></path>
        <path class="merge-arrow" marker-end="url(#merge-arrow-head)" d="M882 212 L888 268"></path>

        <path class="merge-arrow" marker-end="url(#merge-arrow-head)" d="M168 316 L250 382"></path>
        <path class="merge-arrow" marker-end="url(#merge-arrow-head)" d="M415 316 L292 382"></path>
        <path class="merge-arrow" marker-end="url(#merge-arrow-head)" d="M666 316 L732 382"></path>
        <path class="merge-arrow" marker-end="url(#merge-arrow-head)" d="M889 316 L780 382"></path>

        <path class="merge-arrow" marker-end="url(#merge-arrow-head)" d="M263 433 L430 497"></path>
        <path class="merge-arrow" marker-end="url(#merge-arrow-head)" d="M749 433 L570 497"></path>
      </svg>
      <div class="merge-row">
        <span class="cell">38</span><span class="cell">12</span><span class="cell">55</span><span class="cell">31</span>
        <span class="diagram-arrow">split</span>
        <span class="cell">38</span><span class="cell">12</span>
        <span class="cell">55</span><span class="cell">31</span>
      </div>
      <div class="merge-row">
        <span class="cell sorted">12</span><span class="cell sorted">38</span>
        <span class="cell sorted">31</span><span class="cell sorted">55</span>
        <span class="diagram-arrow">merge</span>
        <span class="cell sorted">12</span><span class="cell sorted">31</span><span class="cell sorted">38</span><span class="cell sorted">55</span>
      </div>
      <div class="diagram-note">合併時總是從兩個已排序前端選較小者。</div>
    `,
    algorithm: [
      "若區間長度小於等於 1，直接返回。",
      "將區間 [left, right] 切成 [left, mid] 與 [mid + 1, right]。",
      "遞迴排序左右兩半。",
      "使用暫存陣列，把兩個已排序區間合併回原陣列。",
    ],
    code: `#include <stdlib.h>

static void merge(int a[], int temp[], int left, int mid, int right) {
    int i = left;
    int j = mid + 1;
    int k = left;

    while (i <= mid && j <= right) {
        if (a[i] <= a[j]) temp[k++] = a[i++];
        else temp[k++] = a[j++];
    }
    while (i <= mid) temp[k++] = a[i++];
    while (j <= right) temp[k++] = a[j++];

    for (i = left; i <= right; ++i) {
        a[i] = temp[i];
    }
}

static void merge_sort_range(int a[], int temp[], int left, int right) {
    if (left >= right) return;
    int mid = left + (right - left) / 2;
    merge_sort_range(a, temp, left, mid);
    merge_sort_range(a, temp, mid + 1, right);
    merge(a, temp, left, mid, right);
}

int merge_sort(int a[], int n) {
    int *temp = malloc((size_t)n * sizeof(int));
    if (temp == NULL) return 0;
    merge_sort_range(a, temp, 0, n - 1);
    free(temp);
    return 1;
}`,
    codeNotes: [
      "`mid = left + (right - left) / 2` 可避免 left + right 溢位。",
      "`a[i] <= a[j]` 讓左半相等元素先被放入，因此保持穩定。",
      "包裝函式 `merge_sort` 負責配置與釋放暫存陣列，失敗時回傳 0。",
    ],
  },
  {
    id: "quick-sort",
    title: "Quick Sort",
    subtitle: "選 pivot 分割，再遞迴處理左右區",
    overview:
      "Quick Sort 的核心是 partition：選一個 pivot，重新排列區間，使較小元素在左、較大元素在右。若 pivot 能平均切分資料，效能很好；若每次都切得很偏，最壞會退化到 O(n²)。",
    complexity: ["Best O(n log n)", "Average O(n log n)", "Worst O(n²)", "Space O(log n)", "Not stable"],
    diagram: `
      <div class="mini-array">
        <span class="cell">38</span><span class="cell compare">12</span><span class="cell">55</span><span class="cell compare">31</span><span class="cell pivot">40</span>
      </div>
      <div class="mini-array">
        <span class="cell sorted">12</span><span class="cell sorted">31</span><span class="cell pivot">40</span><span class="cell">55</span><span class="cell">38</span>
      </div>
      <div class="diagram-note">紅色是 pivot；分割後 pivot 左側都不大於它。</div>
    `,
    algorithm: [
      "選取區間最後一個元素作為 pivot。",
      "用 i 記錄小於等於 pivot 區域的尾端。",
      "掃描 j，遇到 a[j] <= pivot 就把它交換到左側。",
      "最後把 pivot 交換到 i + 1，遞迴排序左右區間。",
    ],
    code: `static int partition(int a[], int left, int right) {
    int pivot = a[right];
    int i = left - 1;

    for (int j = left; j < right; ++j) {
        if (a[j] <= pivot) {
            ++i;
            int temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }

    int temp = a[i + 1];
    a[i + 1] = a[right];
    a[right] = temp;
    return i + 1;
}

void quick_sort(int a[], int left, int right) {
    if (left < right) {
        int p = partition(a, left, right);
        quick_sort(a, left, p - 1);
        quick_sort(a, p + 1, right);
    }
}`,
    codeNotes: [
      "`partition` 回傳 pivot 最終位置，pivot 本身不需要再排序。",
      "這是 Lomuto partition，寫法清楚但在大量重複值時可能不理想。",
      "實務上可使用 random pivot 或 median-of-three 降低最壞情況機率。",
    ],
  },
  {
    id: "heap-sort",
    title: "Heap Sort",
    subtitle: "建立最大堆，反覆取出最大值",
    overview:
      "Heap Sort 先把陣列視為完全二元樹並建立最大堆。最大值會在根節點；每次把根和尾端交換，尾端就成為已排序區，再對新的根做 heapify。它保證 O(n log n)，且不需要額外陣列。",
    complexity: ["Best O(n log n)", "Average O(n log n)", "Worst O(n log n)", "Space O(1)", "Not stable"],
    diagram: `
      <svg class="heap-tree-svg" viewBox="0 0 720 430" role="img" aria-label="Heap sort 陣列與完全二元樹對應圖例">
        <line class="heap-tree-edge" x1="360" y1="70" x2="205" y2="150"></line>
        <line class="heap-tree-edge" x1="360" y1="70" x2="515" y2="150"></line>
        <line class="heap-tree-edge" x1="205" y1="150" x2="120" y2="235"></line>
        <line class="heap-tree-edge" x1="205" y1="150" x2="290" y2="235"></line>
        <line class="heap-tree-edge" x1="515" y1="150" x2="430" y2="235"></line>
        <line class="heap-tree-edge" x1="515" y1="150" x2="600" y2="235"></line>
        <line class="heap-tree-edge" x1="120" y1="235" x2="72" y2="322"></line>
        <line class="heap-tree-edge" x1="120" y1="235" x2="168" y2="322"></line>
        <line class="heap-tree-edge" x1="290" y1="235" x2="290" y2="322"></line>

        <g>
          <circle class="heap-tree-node" cx="360" cy="70" r="27"></circle>
          <text class="heap-tree-value" x="360" y="78">26</text>
          <text class="heap-tree-index" x="322" y="74">[1]</text>
        </g>
        <g>
          <circle class="heap-tree-node" cx="205" cy="150" r="27"></circle>
          <text class="heap-tree-value" x="205" y="158">5</text>
          <text class="heap-tree-index" x="167" y="154">[2]</text>
        </g>
        <g>
          <circle class="heap-tree-node max" cx="515" cy="150" r="27"></circle>
          <text class="heap-tree-value" x="515" y="158">77</text>
          <text class="heap-tree-index" x="477" y="154">[3]</text>
        </g>
        <g>
          <circle class="heap-tree-node" cx="120" cy="235" r="27"></circle>
          <text class="heap-tree-value" x="120" y="243">1</text>
          <text class="heap-tree-index" x="82" y="239">[4]</text>
        </g>
        <g>
          <circle class="heap-tree-node" cx="290" cy="235" r="27"></circle>
          <text class="heap-tree-value" x="290" y="243">61</text>
          <text class="heap-tree-index" x="252" y="239">[5]</text>
        </g>
        <g>
          <circle class="heap-tree-node" cx="430" cy="235" r="27"></circle>
          <text class="heap-tree-value" x="430" y="243">11</text>
          <text class="heap-tree-index" x="430" y="290">[6]</text>
        </g>
        <g>
          <circle class="heap-tree-node" cx="600" cy="235" r="27"></circle>
          <text class="heap-tree-value" x="600" y="243">59</text>
          <text class="heap-tree-index" x="600" y="290">[7]</text>
        </g>
        <g>
          <circle class="heap-tree-node" cx="72" cy="322" r="27"></circle>
          <text class="heap-tree-value" x="72" y="330">15</text>
          <text class="heap-tree-index" x="72" y="374">[8]</text>
        </g>
        <g>
          <circle class="heap-tree-node" cx="168" cy="322" r="27"></circle>
          <text class="heap-tree-value" x="168" y="330">48</text>
          <text class="heap-tree-index" x="168" y="374">[9]</text>
        </g>
        <g>
          <circle class="heap-tree-node" cx="290" cy="322" r="27"></circle>
          <text class="heap-tree-value" x="290" y="330">19</text>
          <text class="heap-tree-index" x="290" y="374">[10]</text>
        </g>
        <text class="diagram-note" x="360" y="412" text-anchor="middle">陣列用 1-based index 說明：left(i)=2i，right(i)=2i+1，parent(i)=floor(i/2)。</text>
      </svg>
      <div class="heap-array-strip" aria-label="Heap array representation">
        <span><strong>26</strong><small>[1]</small></span>
        <span><strong>5</strong><small>[2]</small></span>
        <span><strong>77</strong><small>[3]</small></span>
        <span><strong>1</strong><small>[4]</small></span>
        <span><strong>61</strong><small>[5]</small></span>
        <span><strong>11</strong><small>[6]</small></span>
        <span><strong>59</strong><small>[7]</small></span>
        <span><strong>15</strong><small>[8]</small></span>
        <span><strong>48</strong><small>[9]</small></span>
        <span><strong>19</strong><small>[10]</small></span>
      </div>
      <div class="heap-demo-panel" aria-label="Heap sort dynamic demonstration">
        <div class="heap-demo-header">
          <div>
            <strong>Heap Sort 動態展示</strong>
            <span>使用上方同一組資料，逐步觀察 build max heap 與 extract max。</span>
          </div>
          <div class="heap-demo-controls">
            <button type="button" class="icon-btn primary" id="heap-demo-play" title="播放 Heap Sort" aria-label="播放 Heap Sort">
              <i data-lucide="play"></i>
              <span>播放</span>
            </button>
            <button type="button" class="icon-btn" id="heap-demo-step" title="下一步" aria-label="下一步">
              <i data-lucide="step-forward"></i>
              <span>一步</span>
            </button>
            <button type="button" class="icon-btn" id="heap-demo-reset" title="重置" aria-label="重置">
              <i data-lucide="rotate-ccw"></i>
              <span>重置</span>
            </button>
          </div>
        </div>
        <svg id="heap-demo-svg" class="heap-demo-svg" viewBox="0 0 760 430" role="img" aria-label="Heap sort 動態完全二元樹"></svg>
        <div id="heap-demo-array" class="heap-demo-array" aria-label="Heap sort array state"></div>
        <div class="metric-row heap-demo-metrics" aria-label="Heap sort dynamic metrics">
          <div><strong id="heap-demo-step-count">0 / 0</strong><span>步驟</span></div>
          <div><strong id="heap-demo-heap-size">10</strong><span>Heap size</span></div>
          <div><strong id="heap-demo-phase">Ready</strong><span>階段</span></div>
          <div><strong id="heap-demo-status">初始化</strong><span>說明</span></div>
        </div>
      </div>
      <div class="heap-level">
        <span class="cell pivot">67</span>
        <span class="diagram-arrow">root max</span>
        <span class="cell">48</span><span class="cell">55</span>
      </div>
      <div class="mini-array">
        <span class="cell">55</span><span class="cell">48</span><span class="cell">31</span><span class="cell">12</span><span class="cell sorted">67</span>
      </div>
      <div class="diagram-note">每次 extract max 後，右側綠色區域擴大。</div>
    `,
    algorithm: [
      "從最後一個非葉節點開始向前 heapify，建立最大堆。",
      "把 a[0] 最大值與目前尾端 a[end] 交換。",
      "縮小 heap size，對根節點做 heapify。",
      "重複直到 heap size 只剩 1。",
    ],
    code: `static void heapify(int a[], int heap_size, int root) {
    int largest = root;
    int left = root * 2 + 1;
    int right = root * 2 + 2;

    if (left < heap_size && a[left] > a[largest]) largest = left;
    if (right < heap_size && a[right] > a[largest]) largest = right;

    if (largest != root) {
        int temp = a[root];
        a[root] = a[largest];
        a[largest] = temp;
        heapify(a, heap_size, largest);
    }
}

void heap_sort(int a[], int n) {
    for (int i = n / 2 - 1; i >= 0; --i) {
        heapify(a, n, i);
    }

    for (int end = n - 1; end > 0; --end) {
        int temp = a[0];
        a[0] = a[end];
        a[end] = temp;
        heapify(a, end, 0);
    }
}`,
    codeNotes: [
      "陣列表示的完全二元樹中，左子節點是 `2 * root + 1`，右子節點是 `2 * root + 2`。",
      "建立堆從 `n / 2 - 1` 開始，因為後半部都是葉節點。",
      "Heap Sort 會跨很遠交換元素，因此通常不穩定。",
    ],
  },
  {
    id: "radix-sort",
    title: "Radix Sort",
    subtitle: "逐位分配到桶子，再穩定收回",
    overview:
      "Radix Sort 不用元素之間的大小比較，而是依鍵值的位數或字元逐輪分類。這裡使用 LSD 十進位版本：先看個位，再看十位、百位。每一輪必須穩定，前一輪建立的低位順序才不會被破壞。",
    complexity: ["Time O(d(n + k))", "Space O(n + k)", "Stable", "Non-comparison sort"],
    diagram: `
      <div class="radix-pass-stack">
      ${radixPassDiagram({
        pass: 1,
        digitLabel: "個位數",
        input: [179, 208, 306, 93, 859, 984, 55, 9, 271, 33],
        buckets: [[ ], [271], [ ], [93, 33], [984], [55], [306], [ ], [208], [179, 859, 9]],
        output: [271, 93, 33, 984, 55, 306, 208, 179, 859, 9],
        note: "Pass 1 依個位數分桶，收回後得到 271, 93, 33, 984, 55, 306, 208, 179, 859, 9。",
      })}
      <svg class="radix-pass-svg" viewBox="0 0 1040 520" role="img" aria-label="Radix Sort Pass 2 十位數分桶圖例">
        <defs>
          <marker id="radix-arrow-head" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#66717e"></path>
          </marker>
        </defs>
        <text class="radix-title" x="520" y="32">Radix Sort: Pass 2</text>
        <text class="radix-note" x="520" y="56">依十位數分配：0, 3, 5, 7, 8, 9 桶有資料；收回時仍維持同桶內原順序。</text>

        <g class="radix-cell">
          <text class="radix-label" x="40" y="86">a[1]</text><rect x="10" y="96" width="60" height="42" rx="3"></rect><text x="40" y="123">271</text>
          <text class="radix-label" x="140" y="86">a[2]</text><rect x="110" y="96" width="60" height="42" rx="3"></rect><text x="140" y="123">93</text>
          <text class="radix-label" x="240" y="86">a[3]</text><rect x="210" y="96" width="60" height="42" rx="3"></rect><text x="240" y="123">33</text>
          <text class="radix-label" x="340" y="86">a[4]</text><rect x="310" y="96" width="60" height="42" rx="3"></rect><text x="340" y="123">984</text>
          <text class="radix-label" x="440" y="86">a[5]</text><rect x="410" y="96" width="60" height="42" rx="3"></rect><text x="440" y="123">55</text>
          <text class="radix-label" x="540" y="86">a[6]</text><rect x="510" y="96" width="60" height="42" rx="3"></rect><text x="540" y="123">306</text>
          <text class="radix-label" x="640" y="86">a[7]</text><rect x="610" y="96" width="60" height="42" rx="3"></rect><text x="640" y="123">208</text>
          <text class="radix-label" x="740" y="86">a[8]</text><rect x="710" y="96" width="60" height="42" rx="3"></rect><text x="740" y="123">179</text>
          <text class="radix-label" x="840" y="86">a[9]</text><rect x="810" y="96" width="60" height="42" rx="3"></rect><text x="840" y="123">859</text>
          <text class="radix-label" x="940" y="86">a[10]</text><rect x="910" y="96" width="60" height="42" rx="3"></rect><text x="940" y="123">9</text>
        </g>

        <path class="radix-arrow" marker-end="url(#radix-arrow-head)" d="M70 117 H108"></path>
        <path class="radix-arrow" marker-end="url(#radix-arrow-head)" d="M170 117 H208"></path>
        <path class="radix-arrow" marker-end="url(#radix-arrow-head)" d="M270 117 H308"></path>
        <path class="radix-arrow" marker-end="url(#radix-arrow-head)" d="M370 117 H408"></path>
        <path class="radix-arrow" marker-end="url(#radix-arrow-head)" d="M470 117 H508"></path>
        <path class="radix-arrow" marker-end="url(#radix-arrow-head)" d="M570 117 H608"></path>
        <path class="radix-arrow" marker-end="url(#radix-arrow-head)" d="M670 117 H708"></path>
        <path class="radix-arrow" marker-end="url(#radix-arrow-head)" d="M770 117 H808"></path>
        <path class="radix-arrow" marker-end="url(#radix-arrow-head)" d="M870 117 H908"></path>

        <g>
          <text class="radix-label" x="40" y="190">e[0]</text><line class="radix-bucket-line" x1="40" y1="200" x2="40" y2="335"></line>
          <text class="radix-label" x="140" y="190">e[1]</text><line class="radix-bucket-line" x1="140" y1="200" x2="140" y2="335"></line>
          <text class="radix-label" x="240" y="190">e[2]</text><line class="radix-bucket-line" x1="240" y1="200" x2="240" y2="335"></line>
          <text class="radix-label" x="340" y="190">e[3]</text><line class="radix-bucket-line" x1="340" y1="200" x2="340" y2="335"></line>
          <text class="radix-label" x="440" y="190">e[4]</text><line class="radix-bucket-line" x1="440" y1="200" x2="440" y2="335"></line>
          <text class="radix-label" x="540" y="190">e[5]</text><line class="radix-bucket-line" x1="540" y1="200" x2="540" y2="335"></line>
          <text class="radix-label" x="640" y="190">e[6]</text><line class="radix-bucket-line" x1="640" y1="200" x2="640" y2="335"></line>
          <text class="radix-label" x="740" y="190">e[7]</text><line class="radix-bucket-line" x1="740" y1="200" x2="740" y2="335"></line>
          <text class="radix-label" x="840" y="190">e[8]</text><line class="radix-bucket-line" x1="840" y1="200" x2="840" y2="335"></line>
          <text class="radix-label" x="940" y="190">e[9]</text><line class="radix-bucket-line" x1="940" y1="200" x2="940" y2="335"></line>
        </g>

        <g class="radix-bucket-cell">
          <rect x="10" y="214" width="60" height="36" rx="3"></rect><text x="40" y="238">306</text>
          <rect x="10" y="258" width="60" height="36" rx="3"></rect><text x="40" y="282">208</text>
          <rect x="10" y="302" width="60" height="36" rx="3"></rect><text x="40" y="326">9</text>
          <rect x="310" y="302" width="60" height="36" rx="3"></rect><text x="340" y="326">33</text>
          <rect x="510" y="258" width="60" height="36" rx="3"></rect><text x="540" y="282">55</text>
          <rect x="510" y="214" width="60" height="36" rx="3"></rect><text x="540" y="238">859</text>
          <rect x="710" y="258" width="60" height="36" rx="3"></rect><text x="740" y="282">271</text>
          <rect x="710" y="214" width="60" height="36" rx="3"></rect><text x="740" y="238">179</text>
          <rect x="810" y="302" width="60" height="36" rx="3"></rect><text x="840" y="326">984</text>
          <rect x="910" y="302" width="60" height="36" rx="3"></rect><text x="940" y="326">93</text>
        </g>

        <rect class="radix-highlight" x="14" y="306" width="52" height="26" rx="2"></rect>
        <rect class="radix-highlight" x="514" y="262" width="52" height="26" rx="2"></rect>
        <rect class="radix-highlight" x="714" y="262" width="52" height="26" rx="2"></rect>
        <rect class="radix-highlight" x="814" y="306" width="52" height="26" rx="2"></rect>
        <rect class="radix-highlight" x="914" y="306" width="52" height="26" rx="2"></rect>

        <g>
          <text class="radix-label" x="40" y="372">f[0]</text>
          <text class="radix-label" x="140" y="372">f[1]</text>
          <text class="radix-label" x="240" y="372">f[2]</text>
          <text class="radix-label" x="340" y="372">f[3]</text>
          <text class="radix-label" x="440" y="372">f[4]</text>
          <text class="radix-label" x="540" y="372">f[5]</text>
          <text class="radix-label" x="640" y="372">f[6]</text>
          <text class="radix-label" x="740" y="372">f[7]</text>
          <text class="radix-label" x="840" y="372">f[8]</text>
          <text class="radix-label" x="940" y="372">f[9]</text>
        </g>

        <g class="radix-cell">
          <text class="radix-label" x="40" y="426">a[1]</text><rect x="10" y="436" width="60" height="42" rx="3"></rect><text x="40" y="463">306</text>
          <text class="radix-label" x="140" y="426">a[2]</text><rect x="110" y="436" width="60" height="42" rx="3"></rect><text x="140" y="463">208</text>
          <text class="radix-label" x="240" y="426">a[3]</text><rect x="210" y="436" width="60" height="42" rx="3"></rect><text x="240" y="463">9</text>
          <text class="radix-label" x="340" y="426">a[4]</text><rect x="310" y="436" width="60" height="42" rx="3"></rect><text x="340" y="463">33</text>
          <text class="radix-label" x="440" y="426">a[5]</text><rect x="410" y="436" width="60" height="42" rx="3"></rect><text x="440" y="463">55</text>
          <text class="radix-label" x="540" y="426">a[6]</text><rect x="510" y="436" width="60" height="42" rx="3"></rect><text x="540" y="463">859</text>
          <text class="radix-label" x="640" y="426">a[7]</text><rect x="610" y="436" width="60" height="42" rx="3"></rect><text x="640" y="463">271</text>
          <text class="radix-label" x="740" y="426">a[8]</text><rect x="710" y="436" width="60" height="42" rx="3"></rect><text x="740" y="463">179</text>
          <text class="radix-label" x="840" y="426">a[9]</text><rect x="810" y="436" width="60" height="42" rx="3"></rect><text x="840" y="463">984</text>
          <text class="radix-label" x="940" y="426">a[10]</text><rect x="910" y="436" width="60" height="42" rx="3"></rect><text x="940" y="463">93</text>
        </g>
        <text class="radix-note" x="520" y="506">Pass 2 後的新順序：306, 208, 9, 33, 55, 859, 271, 179, 984, 93。</text>
      </svg>
      <div class="radix-pass-explanation">
        <strong>Pass 2：十位數</strong>
        <span>Pass 2 依十位數分桶，0 桶先收回 306、208、9，再依序收回 3、5、7、8、9 桶。</span>
      </div>
      ${radixPassDiagram({
        pass: 3,
        digitLabel: "百位數",
        input: [306, 208, 9, 33, 55, 859, 271, 179, 984, 93],
        buckets: [[9, 33, 55, 93], [179], [208, 271], [306], [ ], [ ], [ ], [ ], [859], [984]],
        output: [9, 33, 55, 93, 179, 208, 271, 306, 859, 984],
        note: "Pass 3 依百位數分桶，沒有百位數的資料視為 0，最後得到 9, 33, 55, 93, 179, 208, 271, 306, 859, 984。",
      })}
      </div>
      <div class="mini-array">
        <span class="cell active">42</span><span class="cell active">17</span><span class="cell active">93</span><span class="cell active">24</span>
        <span class="diagram-arrow">ones digit</span>
      </div>
      <div class="bucket-row">
        <span class="bucket"><strong>2</strong><span>42</span></span>
        <span class="bucket"><strong>3</strong><span>93</span></span>
        <span class="bucket"><strong>4</strong><span>24</span></span>
        <span class="bucket"><strong>7</strong><span>17</span></span>
      </div>
      <div class="mini-array">
        <span class="cell sorted">17</span><span class="cell sorted">24</span><span class="cell sorted">42</span><span class="cell sorted">93</span>
      </div>
      <div class="diagram-note">k 是桶子數；十進位整數時 k = 10，d 是最大值位數。</div>
    `,
    algorithm: [
      "找出最大值，決定需要處理多少位數。",
      "對 exp = 1, 10, 100... 逐輪處理。",
      "計算每個元素在目前位數上的 digit，統計 count[digit]。",
      "將 count 轉成前綴和，從右到左放入 output，維持穩定。",
      "把 output 複製回原陣列，進入下一位數。",
    ],
    code: `#include <stdlib.h>

int radix_sort_nonnegative(int a[], int n) {
    if (n <= 1) return 1;

    int max = a[0];
    for (int i = 1; i < n; ++i) {
        if (a[i] > max) max = a[i];
    }

    int *output = malloc((size_t)n * sizeof(int));
    if (output == NULL) return 0;

    for (int exp = 1; max / exp > 0; exp *= 10) {
        int count[10] = {0};

        for (int i = 0; i < n; ++i) {
            int digit = (a[i] / exp) % 10;
            ++count[digit];
        }
        for (int i = 1; i < 10; ++i) {
            count[i] += count[i - 1];
        }
        for (int i = n - 1; i >= 0; --i) {
            int digit = (a[i] / exp) % 10;
            output[--count[digit]] = a[i];
        }
        for (int i = 0; i < n; ++i) {
            a[i] = output[i];
        }
    }

    free(output);
    return 1;
}`,
    codeNotes: [
      "此版本只處理非負整數；若要處理負數，可分開排序負數與非負數再合併。",
      "從右到左填入 `output` 是穩定排序的關鍵。",
      "`count` 先統計桶子大小，再轉成每個桶子的結束位置。",
    ],
  },
];

function sortingAlgorithmSectionsTemplate() {
  const sections = sortingLessons
    .map(
      (lesson, index) => `
        <article id="${lesson.id}" class="sort-lesson">
          <header class="sort-lesson-header">
            <p class="eyebrow">Sort ${String(index + 1).padStart(2, "0")}</p>
            <h3>${escapeHtml(lesson.title)}</h3>
            <p><strong>${escapeHtml(lesson.subtitle)}</strong></p>
            <p>${escapeHtml(lesson.overview)}</p>
            <div class="complexity-strip">
              ${lesson.complexity.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
            </div>
          </header>
          <div class="lesson-layout">
            <div class="lesson-column">
              <section class="lesson-block" aria-label="${escapeHtml(lesson.title)} 圖例">
                <h4>圖例</h4>
                <div class="diagram-stage">${lesson.diagram}</div>
              </section>
              <section class="lesson-block">
                <h4>演算法</h4>
                <ol>${listItems(lesson.algorithm)}</ol>
              </section>
              <section class="lesson-block">
                <h4>程式碼說明</h4>
                <ul>${listItems(lesson.codeNotes)}</ul>
              </section>
            </div>
            <div class="lesson-code">
              <h4>標準 C 程式</h4>
              <pre><code class="language-c">${escapeHtml(lesson.code)}</code></pre>
            </div>
          </div>
        </article>
      `,
    )
    .join("");

  return `
    <section class="section" aria-labelledby="sorting-lessons-title">
      <div class="section-heading">
        <p class="eyebrow">Sorting Lessons</p>
        <h2 id="sorting-lessons-title">各種排序法</h2>
        <p>從基礎的比較排序到非比較式排序，逐一觀察資料如何移動，以及時間、空間與穩定性的取捨。</p>
      </div>
      <div class="sort-lesson-stack">${sections}</div>
    </section>
  `;
}

function sortingTeachingTemplate() {
  return `
    <section class="section" aria-labelledby="sorting-guide-title">
      <div class="section-heading">
        <p class="eyebrow">Visual Guide</p>
        <h2 id="sorting-guide-title">排序演算法圖解教材</h2>
        <p>以下圖示用同一種閱讀方式看排序：灰色是尚未處理，黃色是正在處理，綠色是已固定或已排序區，紅色通常代表 pivot 或正在比較的關鍵元素。</p>
      </div>

      <div class="teaching-grid">
        <article class="algorithm-card">
          <h3>Insertion Sort</h3>
          <p>維持左側已排序區，把新 key 向左比較，直到找到插入位置。</p>
          <div class="diagram-stage" aria-label="Insertion sort diagram">
            <div class="mini-array">
              <span class="cell sorted">12</span><span class="cell sorted">31</span><span class="cell sorted">48</span><span class="cell active">25</span><span class="cell">67</span>
            </div>
            <div class="mini-array">
              <span class="cell sorted">12</span><span class="cell compare">31</span><span class="cell compare">48</span><span class="diagram-arrow">shift</span><span class="cell active">25</span>
            </div>
            <div class="diagram-note">適合近乎有序資料；穩定、原地、最壞 O(n²)。</div>
          </div>
        </article>

        <article class="algorithm-card">
          <h3>Selection Sort</h3>
          <p>每一輪從未排序區選出最小值，放到目前位置。</p>
          <div class="diagram-stage" aria-label="Selection sort diagram">
            <div class="mini-array">
              <span class="cell sorted">12</span><span class="cell active">64</span><span class="cell">48</span><span class="cell compare">25</span><span class="cell">67</span>
            </div>
            <div class="mini-array">
              <span class="cell sorted">12</span><span class="cell sorted">25</span><span class="cell">48</span><span class="cell active">64</span><span class="cell">67</span>
            </div>
            <div class="diagram-note">比較次數固定較多；交換少，但通常不穩定。</div>
          </div>
        </article>

        <article class="algorithm-card">
          <h3>Bubble Sort</h3>
          <p>反覆比較相鄰元素，把較大的值一路推到右端。</p>
          <div class="diagram-stage" aria-label="Bubble sort diagram">
            <div class="mini-array">
              <span class="cell">12</span><span class="cell compare">48</span><span class="cell compare">25</span><span class="cell">31</span><span class="cell">67</span>
            </div>
            <div class="mini-array">
              <span class="cell">12</span><span class="cell active">25</span><span class="cell active">48</span><span class="diagram-arrow">swap</span><span class="cell sorted">67</span>
            </div>
            <div class="diagram-note">容易教學與偵錯；可用 swapped 旗標提前結束。</div>
          </div>
        </article>

        <article class="algorithm-card">
          <h3>Merge Sort</h3>
          <p>先切半到小問題，再把兩個已排序序列穩定合併。</p>
          <div class="diagram-stage" aria-label="Merge sort diagram">
            <div class="merge-row">
              <span class="cell">38</span><span class="cell">12</span><span class="cell">55</span><span class="cell">31</span>
              <span class="diagram-arrow">split</span>
              <span class="cell">38</span><span class="cell">12</span>
              <span class="cell">55</span><span class="cell">31</span>
            </div>
            <div class="merge-row">
              <span class="cell sorted">12</span><span class="cell sorted">38</span>
              <span class="cell sorted">31</span><span class="cell sorted">55</span>
              <span class="diagram-arrow">merge</span>
              <span class="cell sorted">12</span><span class="cell sorted">31</span><span class="cell sorted">38</span><span class="cell sorted">55</span>
            </div>
            <div class="diagram-note">時間穩定 O(n log n)，但需要 O(n) 額外空間。</div>
          </div>
        </article>

        <article class="algorithm-card">
          <h3>Quick Sort</h3>
          <p>選 pivot，讓小於 pivot 的值到左側，大於 pivot 的值到右側，再遞迴處理左右區。</p>
          <div class="diagram-stage" aria-label="Quick sort diagram">
            <div class="mini-array">
              <span class="cell">38</span><span class="cell compare">12</span><span class="cell">55</span><span class="cell compare">31</span><span class="cell pivot">40</span>
            </div>
            <div class="mini-array">
              <span class="cell sorted">12</span><span class="cell sorted">31</span><span class="cell pivot">40</span><span class="cell">55</span><span class="cell">38</span>
            </div>
            <div class="diagram-note">平均 O(n log n)，但 pivot 選差會退化到 O(n²)。</div>
          </div>
        </article>

        <article class="algorithm-card">
          <h3>Heap Sort</h3>
          <p>先建立最大堆，反覆把根節點最大值移到尾端，再向下調整。</p>
          <div class="diagram-stage" aria-label="Heap sort diagram">
            <div class="heap-level">
              <span class="cell pivot">67</span>
              <span class="diagram-arrow">root max</span>
              <span class="cell">48</span><span class="cell">55</span>
            </div>
            <div class="mini-array">
              <span class="cell">55</span><span class="cell">48</span><span class="cell">31</span><span class="cell">12</span><span class="cell sorted">67</span>
            </div>
            <div class="diagram-note">原地、不穩定；最壞仍保持 O(n log n)。</div>
          </div>
        </article>

        <article class="algorithm-card">
          <h3>Radix Sort</h3>
          <p>不直接比較大小，而是從個位、十位、百位逐位分配到桶子，再穩定收回。</p>
          <div class="diagram-stage" aria-label="Radix sort diagram">
            <div class="mini-array">
              <span class="cell active">42</span><span class="cell active">17</span><span class="cell active">93</span><span class="cell active">24</span>
              <span class="diagram-arrow">ones digit</span>
            </div>
            <div class="bucket-row">
              <span class="bucket"><strong>2</strong><span>42</span></span>
              <span class="bucket"><strong>3</strong><span>93</span></span>
              <span class="bucket"><strong>4</strong><span>24</span></span>
              <span class="bucket"><strong>7</strong><span>17</span></span>
            </div>
            <div class="diagram-note">LSD Radix Sort 依位數輪數執行；對固定長度整數可接近 O(d(n + k))。</div>
          </div>
        </article>
      </div>
    </section>
  `;
}

function sortingCodeTemplate() {
  return `
    <section class="section" aria-labelledby="sorting-code-title">
      <div class="section-heading">
        <p class="eyebrow">Standard C</p>
        <h2 id="sorting-code-title">標準 C 語言程式碼說明</h2>
        <p>以下範例使用 C11 相容寫法，只依賴標準函式庫。實作時可先用整數陣列練習，再把比較與交換抽成泛型介面。</p>
      </div>

      <div class="code-grid">
        <article class="code-panel">
          <h3>Insertion Sort：穩定、原地</h3>
          <pre><code class="language-c">void insertion_sort(int a[], int n) {
    for (int i = 1; i &lt; n; ++i) {
        int key = a[i];
        int j = i - 1;

        while (j &gt;= 0 &amp;&amp; a[j] &gt; key) {
            a[j + 1] = a[j];
            --j;
        }
        a[j + 1] = key;
    }
}</code></pre>
        </article>

        <article class="code-panel">
          <h3>Selection Sort：每輪選最小值</h3>
          <pre><code class="language-c">void selection_sort(int a[], int n) {
    for (int i = 0; i &lt; n - 1; ++i) {
        int min = i;
        for (int j = i + 1; j &lt; n; ++j) {
            if (a[j] &lt; a[min]) {
                min = j;
            }
        }
        if (min != i) {
            int temp = a[i];
            a[i] = a[min];
            a[min] = temp;
        }
    }
}</code></pre>
        </article>

        <article class="code-panel">
          <h3>Merge Sort：分治與合併</h3>
          <pre><code class="language-c">static void merge(int a[], int temp[], int left, int mid, int right) {
    int i = left;
    int j = mid + 1;
    int k = left;

    while (i &lt;= mid &amp;&amp; j &lt;= right) {
        if (a[i] &lt;= a[j]) temp[k++] = a[i++];
        else temp[k++] = a[j++];
    }
    while (i &lt;= mid) temp[k++] = a[i++];
    while (j &lt;= right) temp[k++] = a[j++];

    for (i = left; i &lt;= right; ++i) {
        a[i] = temp[i];
    }
}

static void merge_sort_range(int a[], int temp[], int left, int right) {
    if (left &gt;= right) return;
    int mid = left + (right - left) / 2;
    merge_sort_range(a, temp, left, mid);
    merge_sort_range(a, temp, mid + 1, right);
    merge(a, temp, left, mid, right);
}</code></pre>
        </article>

        <article class="code-panel">
          <h3>Quick Sort：partition 是核心</h3>
          <pre><code class="language-c">static int partition(int a[], int left, int right) {
    int pivot = a[right];
    int i = left - 1;

    for (int j = left; j &lt; right; ++j) {
        if (a[j] &lt;= pivot) {
            ++i;
            int temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }

    int temp = a[i + 1];
    a[i + 1] = a[right];
    a[right] = temp;
    return i + 1;
}</code></pre>
        </article>

        <article class="code-panel">
          <h3>Heap Sort：最大堆下濾</h3>
          <pre><code class="language-c">static void heapify(int a[], int heap_size, int root) {
    int largest = root;
    int left = root * 2 + 1;
    int right = root * 2 + 2;

    if (left &lt; heap_size &amp;&amp; a[left] &gt; a[largest]) largest = left;
    if (right &lt; heap_size &amp;&amp; a[right] &gt; a[largest]) largest = right;

    if (largest != root) {
        int temp = a[root];
        a[root] = a[largest];
        a[largest] = temp;
        heapify(a, heap_size, largest);
    }
}</code></pre>
        </article>

        <article class="code-panel">
          <h3>Radix Sort：LSD 十進位版本</h3>
          <pre><code class="language-c">void radix_sort_nonnegative(int a[], int n) {
    int max = a[0];
    for (int i = 1; i &lt; n; ++i) {
        if (a[i] &gt; max) max = a[i];
    }

    int output[n];
    for (int exp = 1; max / exp &gt; 0; exp *= 10) {
        int count[10] = {0};

        for (int i = 0; i &lt; n; ++i) {
            int digit = (a[i] / exp) % 10;
            ++count[digit];
        }
        for (int i = 1; i &lt; 10; ++i) {
            count[i] += count[i - 1];
        }
        for (int i = n - 1; i &gt;= 0; --i) {
            int digit = (a[i] / exp) % 10;
            output[--count[digit]] = a[i];
        }
        for (int i = 0; i &lt; n; ++i) {
            a[i] = output[i];
        }
    }
}</code></pre>
        </article>
      </div>
    </section>
  `;
}

function sortingLabTemplate() {
  return `
    <section id="sorting" class="section lab-section" aria-labelledby="sorting-title">
      <div class="section-heading">
        <p class="eyebrow">Sorting Lab</p>
        <h2 id="sorting-title">排序：資料形狀與成本比較</h2>
        <p>用同一組資料觀察交換、覆寫、比較次數與中途狀態；同時對照穩定性、額外空間與最壞時間。</p>
      </div>

      <div class="lab-grid sorting-grid">
        <div class="visual-panel">
          <div class="toolbar" aria-label="排序控制">
            <label class="field">
              <span>資料</span>
              <select id="sort-dataset">
                <option value="random">隨機</option>
                <option value="nearly">近乎有序</option>
                <option value="reversed">反向</option>
                <option value="duplicates">重複值</option>
              </select>
            </label>
            <label class="field compact-field">
              <span>筆數</span>
              <input id="sort-size" type="range" min="12" max="42" value="26">
            </label>
            <button type="button" class="icon-btn" id="sort-new" title="重新產生資料" aria-label="重新產生資料">
              <i data-lucide="shuffle"></i>
              <span>重產</span>
            </button>
            <button type="button" class="icon-btn primary" id="sort-play" title="播放排序" aria-label="播放排序">
              <i data-lucide="play"></i>
              <span>播放</span>
            </button>
            <button type="button" class="icon-btn" id="sort-step" title="下一步" aria-label="下一步">
              <i data-lucide="step-forward"></i>
              <span>一步</span>
            </button>
            <button type="button" class="icon-btn" id="sort-reset" title="回到起點" aria-label="回到起點">
              <i data-lucide="rotate-ccw"></i>
              <span>重置</span>
            </button>
            <label class="field compact-field">
              <span>速度</span>
              <input id="sort-speed" type="range" min="40" max="520" value="180">
            </label>
          </div>

          <div class="algorithm-tabs" role="tablist" aria-label="排序演算法">
            <button type="button" class="tab active" data-sort="insertion">Insertion</button>
            <button type="button" class="tab" data-sort="selection">Selection</button>
            <button type="button" class="tab" data-sort="bubble">Bubble</button>
            <button type="button" class="tab" data-sort="merge">Merge</button>
            <button type="button" class="tab" data-sort="quick">Quick</button>
            <button type="button" class="tab" data-sort="heap">Heap</button>
            <button type="button" class="tab" data-sort="radix">Radix</button>
          </div>

          <svg id="sort-svg" class="chart-surface" role="img" aria-label="排序長條圖"></svg>

          <div class="metric-row" aria-label="排序指標">
            <div><strong id="sort-step-count">0 / 0</strong><span>步驟</span></div>
            <div><strong id="sort-comparisons">0</strong><span>比較</span></div>
            <div><strong id="sort-writes">0</strong><span>寫入</span></div>
            <div><strong id="sort-status">Ready</strong><span>狀態</span></div>
          </div>
        </div>

        <div class="analysis-panel">
          <h3>比較表</h3>
          <div class="responsive-table">
            <table>
              <thead>
                <tr>
                  <th>演算法</th>
                  <th>平均</th>
                  <th>最壞</th>
                  <th>空間</th>
                  <th>穩定</th>
                </tr>
              </thead>
              <tbody id="sort-table"></tbody>
            </table>
          </div>
          <div class="insight-box" id="sort-note">選一個演算法開始觀察。</div>
        </div>
      </div>
    </section>
  `;
}

const treeTerms = [
  ["Node", "樹中的一個資料項目；通常包含 key/data 與指向子節點的連結。"],
  ["Root", "整棵樹唯一沒有 parent 的節點，是所有路徑的起點。"],
  ["Edge / Branch", "連接 parent 與 child 的線；有 n 個節點的非空樹一定有 n - 1 條邊。"],
  ["Parent / Child", "若節點 x 連到 y，x 是 y 的 parent，y 是 x 的 child。"],
  ["Siblings", "擁有同一個 parent 的節點。"],
  ["Degree", "某節點的子節點數；整棵樹的 degree 是所有節點 degree 的最大值。"],
  ["Leaf / Terminal Node", "degree 為 0 的節點，也就是沒有任何 child 的節點。"],
  ["Internal Node", "不是 leaf 的節點；通常負責連接下一層子樹。"],
  ["Ancestor / Descendant", "沿 parent 方向可抵達的節點是 ancestor；沿 child 方向可抵達的是 descendant。"],
  ["Level / Depth", "從 root 往下數的層級；課堂圖例以 root 位於第 1 層。"],
  ["Height", "從節點到最深 leaf 的層數；互動實驗室也用層數表示高度。"],
  ["Subtree", "由某個節點與其所有 descendant 形成的樹。"],
  ["Forest", "多棵互不相交的樹集合；刪除 root 後，剩下的子樹形成 forest。"],
  ["Binary Tree", "每個節點最多有 left child 與 right child 兩個子節點的樹。"],
  ["Complete Binary Tree", "除了最後一層外皆填滿，最後一層由左至右填入。"],
  ["Binary Search Tree", "左子樹鍵值小於 root，右子樹鍵值大於 root，且每棵子樹也符合此規則。"],
];

function treeTermsTemplate() {
  return treeTerms
    .map(
      ([term, description]) => `
        <article class="term-card">
          <h3>${escapeHtml(term)}</h3>
          <p>${escapeHtml(description)}</p>
        </article>
      `,
    )
    .join("");
}

function treeMaterialsTemplate() {
  return `
    <section class="section" aria-labelledby="tree-definition-title">
      <div class="section-heading">
        <p class="eyebrow">Tree Basics</p>
        <h2 id="tree-definition-title">樹的定義</h2>
        <p>樹的學習順序可先建立樹與二元樹的術語，再進入表示法、走訪、Binary Search Tree、線索樹與堆積。</p>
      </div>
      <div class="definition-panel">
        <div class="definition-formula">T = { root } ∪ T1 ∪ T2 ∪ ... ∪ Tk</div>
        <p>樹是由有限個節點組成的階層式資料結構。若樹非空，會有一個特殊節點稱為 <strong>root</strong>；其餘節點可分成 k 個互不相交的子集合，每個子集合本身也是一棵樹，稱為 root 的 <strong>subtree</strong>。若 k = 0，root 同時也是 leaf。</p>
        <svg class="tree-mini-svg" viewBox="0 0 720 330" role="img" aria-label="Tree definition example">
          <line class="tree-mini-edge" x1="360" y1="72" x2="210" y2="150"></line>
          <line class="tree-mini-edge" x1="360" y1="72" x2="360" y2="150"></line>
          <line class="tree-mini-edge" x1="360" y1="72" x2="510" y2="150"></line>
          <line class="tree-mini-edge" x1="210" y1="150" x2="135" y2="235"></line>
          <line class="tree-mini-edge" x1="210" y1="150" x2="285" y2="235"></line>
          <line class="tree-mini-edge" x1="510" y1="150" x2="455" y2="235"></line>
          <line class="tree-mini-edge" x1="510" y1="150" x2="585" y2="235"></line>
          <circle class="tree-mini-node root" cx="360" cy="72" r="27"></circle><text class="tree-mini-label" x="360" y="78">A</text>
          <circle class="tree-mini-node internal" cx="210" cy="150" r="25"></circle><text class="tree-mini-label" x="210" y="156">B</text>
          <circle class="tree-mini-node" cx="360" cy="150" r="25"></circle><text class="tree-mini-label" x="360" y="156">C</text>
          <circle class="tree-mini-node internal" cx="510" cy="150" r="25"></circle><text class="tree-mini-label" x="510" y="156">D</text>
          <circle class="tree-mini-node leaf" cx="135" cy="235" r="23"></circle><text class="tree-mini-label" x="135" y="241">E</text>
          <circle class="tree-mini-node leaf" cx="285" cy="235" r="23"></circle><text class="tree-mini-label" x="285" y="241">F</text>
          <circle class="tree-mini-node leaf" cx="455" cy="235" r="23"></circle><text class="tree-mini-label" x="455" y="241">G</text>
          <circle class="tree-mini-node leaf" cx="585" cy="235" r="23"></circle><text class="tree-mini-label" x="585" y="241">H</text>
          <text class="tree-mini-caption" x="360" y="25">Root</text>
          <text class="tree-mini-caption" x="64" y="241">Leaves</text>
          <text class="tree-mini-caption" x="612" y="157">Subtree</text>
        </svg>
      </div>
    </section>

    <section class="section" aria-labelledby="tree-terms-title">
      <div class="section-heading">
        <p class="eyebrow">Terminology</p>
        <h2 id="tree-terms-title">Tree 名詞整理</h2>
        <p>Tree 的題目常把「形狀」轉成「成本」。名詞若先釐清，後面分析 height、走訪順序與搜尋路徑會清楚很多。</p>
      </div>
      <div class="term-grid">${treeTermsTemplate()}</div>
    </section>

    <section class="section" aria-labelledby="tree-book-map-title">
      <div class="section-heading">
        <p class="eyebrow">Topic Map</p>
        <h2 id="tree-book-map-title">樹主題地圖</h2>
        <p>樹的基本定義會一路延伸到 heap、selection tree、forest、disjoint set 與 counting binary trees。這些主題共同回答兩件事：階層資料如何表示，以及高度如何影響操作成本。</p>
      </div>
      <div class="teaching-grid">
        <article class="algorithm-card">
          <h3>5.1 Introduction</h3>
          <p>建立 terminology，並說明一般樹可以用 parent array、children list 或 left-child right-sibling 表示。</p>
          <div class="chapter-tags"><span>Terminology</span><span>Representation</span></div>
        </article>
        <article class="algorithm-card">
          <h3>5.2 Binary Trees</h3>
          <p>把一般樹收斂成最多兩個 child 的結構，定義 ADT、重要性質與陣列/鏈結表示法。</p>
          <div class="chapter-tags"><span>ADT</span><span>Properties</span><span>Linked Nodes</span></div>
        </article>
        <article class="algorithm-card">
          <h3>5.3 Traversals</h3>
          <p>比較 inorder、preorder、postorder、iterative inorder、level-order，以及不使用 stack 的走訪想法。</p>
          <div class="chapter-tags"><span>Recursion</span><span>Stack</span><span>Queue</span></div>
        </article>
        <article class="algorithm-card">
          <h3>5.4 Additional Operations</h3>
          <p>二元樹不只拿來走訪，也常用在 copy、equality testing 與布林表示式求值。</p>
          <div class="chapter-tags"><span>Copy</span><span>Equality</span><span>Expression Tree</span></div>
        </article>
        <article class="algorithm-card">
          <h3>5.5-5.7 Specialized Trees</h3>
          <p>Threaded binary tree、heap 與 BST 都是在二元樹基礎上加入額外不變量，換取走訪、優先權或搜尋效率。</p>
          <div class="chapter-tags"><span>Thread</span><span>Heap</span><span>BST</span></div>
        </article>
        <article class="algorithm-card">
          <h3>5.8-5.11 Extensions</h3>
          <p>Selection tree 支援競賽式選取，forest 可轉成 binary tree，disjoint set 用樹表示等價類，Catalan recurrence 可計算不同二元樹數量。</p>
          <div class="chapter-tags"><span>Winner Tree</span><span>Forest</span><span>Union-Find</span><span>Catalan</span></div>
        </article>
      </div>
    </section>

    <section class="section" aria-labelledby="binary-tree-title">
      <div class="section-heading">
        <p class="eyebrow">Binary Tree</p>
        <h2 id="binary-tree-title">二元樹與重要性質</h2>
        <p>二元樹限制每個節點最多兩個 child，因此天然適合用遞迴定義：一棵二元樹不是空樹，就是由 root、left subtree、right subtree 組成。</p>
      </div>
      <div class="tree-diagram-grid">
        <article class="tree-diagram-card">
          <h3>Binary Tree</h3>
          <p>每個節點最多有 left child 與 right child；不要求每個位置都填滿。</p>
          <svg class="tree-diagram-svg" viewBox="0 0 360 260" role="img" aria-label="Binary tree example">
            <line class="tree-diagram-edge" x1="180" y1="48" x2="108" y2="118"></line>
            <line class="tree-diagram-edge" x1="180" y1="48" x2="252" y2="118"></line>
            <line class="tree-diagram-edge" x1="108" y1="118" x2="145" y2="192"></line>
            <circle class="tree-diagram-node root" cx="180" cy="48" r="24"></circle><text class="tree-diagram-label" x="180" y="54">A</text>
            <circle class="tree-diagram-node internal" cx="108" cy="118" r="23"></circle><text class="tree-diagram-label" x="108" y="124">B</text>
            <circle class="tree-diagram-node" cx="252" cy="118" r="23"></circle><text class="tree-diagram-label" x="252" y="124">C</text>
            <circle class="tree-diagram-node leaf" cx="145" cy="192" r="22"></circle><text class="tree-diagram-label" x="145" y="198">D</text>
            <text class="tree-diagram-note" x="82" y="158">right child</text>
            <text class="tree-diagram-note" x="180" y="236">允許缺少某些 child</text>
          </svg>
        </article>
        <article class="tree-diagram-card">
          <h3>Full Binary Tree</h3>
          <p>每個 internal node 都剛好有兩個 child；不會出現只有一個 child 的節點。</p>
          <svg class="tree-diagram-svg" viewBox="0 0 360 260" role="img" aria-label="Full binary tree example">
            <line class="tree-diagram-edge" x1="180" y1="44" x2="105" y2="112"></line>
            <line class="tree-diagram-edge" x1="180" y1="44" x2="255" y2="112"></line>
            <line class="tree-diagram-edge" x1="105" y1="112" x2="65" y2="190"></line>
            <line class="tree-diagram-edge" x1="105" y1="112" x2="145" y2="190"></line>
            <line class="tree-diagram-edge" x1="255" y1="112" x2="215" y2="190"></line>
            <line class="tree-diagram-edge" x1="255" y1="112" x2="295" y2="190"></line>
            <circle class="tree-diagram-node root" cx="180" cy="44" r="23"></circle><text class="tree-diagram-label" x="180" y="50">A</text>
            <circle class="tree-diagram-node internal" cx="105" cy="112" r="22"></circle><text class="tree-diagram-label" x="105" y="118">B</text>
            <circle class="tree-diagram-node internal" cx="255" cy="112" r="22"></circle><text class="tree-diagram-label" x="255" y="118">C</text>
            <circle class="tree-diagram-node leaf" cx="65" cy="190" r="21"></circle><text class="tree-diagram-label" x="65" y="196">D</text>
            <circle class="tree-diagram-node leaf" cx="145" cy="190" r="21"></circle><text class="tree-diagram-label" x="145" y="196">E</text>
            <circle class="tree-diagram-node leaf" cx="215" cy="190" r="21"></circle><text class="tree-diagram-label" x="215" y="196">F</text>
            <circle class="tree-diagram-node leaf" cx="295" cy="190" r="21"></circle><text class="tree-diagram-label" x="295" y="196">G</text>
            <text class="tree-diagram-note" x="180" y="236">internal node 的 degree 都是 2</text>
          </svg>
        </article>
        <article class="tree-diagram-card">
          <h3>Complete Binary Tree</h3>
          <p>最後一層以外全部填滿；最後一層由左往右連續填入。</p>
          <svg class="tree-diagram-svg" viewBox="0 0 360 260" role="img" aria-label="Complete binary tree example">
            <line class="tree-diagram-edge" x1="180" y1="44" x2="105" y2="112"></line>
            <line class="tree-diagram-edge" x1="180" y1="44" x2="255" y2="112"></line>
            <line class="tree-diagram-edge" x1="105" y1="112" x2="65" y2="190"></line>
            <line class="tree-diagram-edge" x1="105" y1="112" x2="145" y2="190"></line>
            <line class="tree-diagram-edge" x1="255" y1="112" x2="215" y2="190"></line>
            <circle class="tree-diagram-node root" cx="180" cy="44" r="23"></circle><text class="tree-diagram-label" x="180" y="50">A</text>
            <circle class="tree-diagram-node internal" cx="105" cy="112" r="22"></circle><text class="tree-diagram-label" x="105" y="118">B</text>
            <circle class="tree-diagram-node internal" cx="255" cy="112" r="22"></circle><text class="tree-diagram-label" x="255" y="118">C</text>
            <circle class="tree-diagram-node leaf" cx="65" cy="190" r="21"></circle><text class="tree-diagram-label" x="65" y="196">D</text>
            <circle class="tree-diagram-node leaf" cx="145" cy="190" r="21"></circle><text class="tree-diagram-label" x="145" y="196">E</text>
            <circle class="tree-diagram-node leaf" cx="215" cy="190" r="21"></circle><text class="tree-diagram-label" x="215" y="196">F</text>
            <text class="tree-diagram-note" x="282" y="196">下一格才會是 G</text>
            <text class="tree-diagram-note" x="180" y="236">適合用陣列表示，也是 heap 的形狀基礎</text>
          </svg>
        </article>
        <article class="tree-diagram-card">
          <h3>Skewed Binary Tree</h3>
          <p>每層幾乎只有一個 child，搜尋或插入成本會接近 linked list。</p>
          <svg class="tree-diagram-svg" viewBox="0 0 360 260" role="img" aria-label="Skewed binary tree example">
            <line class="tree-diagram-edge" x1="95" y1="42" x2="145" y2="92"></line>
            <line class="tree-diagram-edge" x1="145" y1="92" x2="195" y2="142"></line>
            <line class="tree-diagram-edge" x1="195" y1="142" x2="245" y2="192"></line>
            <circle class="tree-diagram-node root" cx="95" cy="42" r="23"></circle><text class="tree-diagram-label" x="95" y="48">A</text>
            <circle class="tree-diagram-node internal" cx="145" cy="92" r="22"></circle><text class="tree-diagram-label" x="145" y="98">B</text>
            <circle class="tree-diagram-node internal" cx="195" cy="142" r="22"></circle><text class="tree-diagram-label" x="195" y="148">C</text>
            <circle class="tree-diagram-node leaf" cx="245" cy="192" r="22"></circle><text class="tree-diagram-label" x="245" y="198">D</text>
            <text class="tree-diagram-note" x="180" y="236">高度接近節點數，最壞 O(n)</text>
          </svg>
        </article>
      </div>
      <div class="chapter-layout">
        <article class="chapter-panel">
          <h3>常見型態</h3>
          <ul>
            <li><strong>Full binary tree</strong>：每個 internal node 都剛好有兩個 child。</li>
            <li><strong>Complete binary tree</strong>：最後一層以外都填滿，最後一層由左至右填入。</li>
            <li><strong>Skewed tree</strong>：每個節點幾乎只有一個 child，操作成本會退化成線性。</li>
            <li><strong>Balanced tree</strong>：左右子樹高度差受控制，搜尋成本接近 O(log n)。</li>
          </ul>
        </article>
        <article class="chapter-panel">
          <h3>性質與公式</h3>
          <ul>
            <li>非空樹若有 n 個節點，邊數為 n - 1。</li>
            <li>第 i 層最多有 2<sup>i-1</sup> 個節點。</li>
            <li>高度為 h 的二元樹最多有 2<sup>h</sup> - 1 個節點。</li>
            <li>若 full binary tree 中 n0 是 leaf 數、n2 是 degree 2 的節點數，則 n0 = n2 + 1。</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="section" aria-labelledby="tree-representations-title">
      <div class="section-heading">
        <p class="eyebrow">Representations in C</p>
        <h2 id="tree-representations-title">樹的 C 語言表示法</h2>
        <p>教材中最常比較兩種表示法：用陣列保存接近 complete tree 的結構，或用 linked nodes 保存一般二元樹。BST、Expression Tree 與 Threaded Tree 通常都建立在 linked representation 上。</p>
      </div>
      <div class="tree-material-grid">
        <div class="lesson-column">
          <article class="lesson-block">
            <h4>陣列表示法</h4>
            <p>若節點存在陣列位置 i，則 parent 與 children 可由索引計算。</p>
            <ul>
              <li>0-based：parent = (i - 1) / 2，left = 2i + 1，right = 2i + 2。</li>
              <li>適合 complete binary tree 與 heap。</li>
              <li>一般稀疏形狀會浪費大量空格。</li>
            </ul>
          </article>
          <article class="lesson-block">
            <h4>鏈結表示法</h4>
            <p>每個節點保存資料與左右子指標；空子樹以 NULL 表示。</p>
            <ul>
              <li>適合一般二元樹、BST、AVL、expression tree。</li>
              <li>插入與刪除會改變指標連結，需要小心保存子樹。</li>
              <li>若需要 parent，可在節點中額外保存 parent pointer。</li>
            </ul>
          </article>
          <article class="lesson-block">
            <h4>線索樹 Threaded Tree</h4>
            <p>二元樹中很多 NULL 指標可改成 inorder predecessor 或 successor 的線索，讓 inorder traversal 不必使用 stack 或 recursion。</p>
          </article>
        </div>
        <article class="tree-code-panel">
          <h3>標準 C：二元搜尋樹節點、插入、搜尋與走訪</h3>
          <pre><code class="language-c">#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

typedef struct TreeNode {
    int key;
    struct TreeNode *left;
    struct TreeNode *right;
} TreeNode;

TreeNode *make_node(int key) {
    TreeNode *node = malloc(sizeof(TreeNode));
    if (node == NULL) return NULL;

    node-&gt;key = key;
    node-&gt;left = NULL;
    node-&gt;right = NULL;
    return node;
}

TreeNode *bst_insert(TreeNode *root, int key) {
    if (root == NULL) {
        return make_node(key);
    }

    if (key &lt; root-&gt;key) {
        root-&gt;left = bst_insert(root-&gt;left, key);
    } else if (key &gt; root-&gt;key) {
        root-&gt;right = bst_insert(root-&gt;right, key);
    }
    return root;
}

TreeNode *bst_search(TreeNode *root, int key) {
    while (root != NULL) {
        if (key == root-&gt;key) return root;
        if (key &lt; root-&gt;key) root = root-&gt;left;
        else root = root-&gt;right;
    }
    return NULL;
}

void inorder(TreeNode *root) {
    if (root == NULL) return;
    inorder(root-&gt;left);
    printf("%d ", root-&gt;key);
    inorder(root-&gt;right);
}

void preorder(TreeNode *root) {
    if (root == NULL) return;
    printf("%d ", root-&gt;key);
    preorder(root-&gt;left);
    preorder(root-&gt;right);
}

void postorder(TreeNode *root) {
    if (root == NULL) return;
    postorder(root-&gt;left);
    postorder(root-&gt;right);
    printf("%d ", root-&gt;key);
}

void destroy_tree(TreeNode *root) {
    if (root == NULL) return;
    destroy_tree(root-&gt;left);
    destroy_tree(root-&gt;right);
    free(root);
}</code></pre>
        </article>
      </div>
    </section>

    <section class="section" aria-labelledby="tree-traversal-title">
      <div class="section-heading">
        <p class="eyebrow">Traversal</p>
        <h2 id="tree-traversal-title">走訪順序與圖例</h2>
        <p>走訪是把樹的階層結構轉成線性序列。前序、中序、後序都可用遞迴描述；層序走訪則使用 queue。</p>
      </div>
      <div class="tree-material-grid">
        <div class="definition-panel">
          <svg class="tree-mini-svg" viewBox="0 0 620 310" role="img" aria-label="Binary tree traversal example">
            <line class="tree-mini-edge" x1="310" y1="65" x2="190" y2="138"></line>
            <line class="tree-mini-edge" x1="310" y1="65" x2="430" y2="138"></line>
            <line class="tree-mini-edge" x1="190" y1="138" x2="125" y2="220"></line>
            <line class="tree-mini-edge" x1="190" y1="138" x2="255" y2="220"></line>
            <line class="tree-mini-edge" x1="430" y1="138" x2="365" y2="220"></line>
            <line class="tree-mini-edge" x1="430" y1="138" x2="495" y2="220"></line>
            <circle class="tree-mini-node root" cx="310" cy="65" r="25"></circle><text class="tree-mini-label" x="310" y="71">A</text>
            <circle class="tree-mini-node internal" cx="190" cy="138" r="24"></circle><text class="tree-mini-label" x="190" y="144">B</text>
            <circle class="tree-mini-node internal" cx="430" cy="138" r="24"></circle><text class="tree-mini-label" x="430" y="144">C</text>
            <circle class="tree-mini-node leaf" cx="125" cy="220" r="22"></circle><text class="tree-mini-label" x="125" y="226">D</text>
            <circle class="tree-mini-node leaf" cx="255" cy="220" r="22"></circle><text class="tree-mini-label" x="255" y="226">E</text>
            <circle class="tree-mini-node leaf" cx="365" cy="220" r="22"></circle><text class="tree-mini-label" x="365" y="226">F</text>
            <circle class="tree-mini-node leaf" cx="495" cy="220" r="22"></circle><text class="tree-mini-label" x="495" y="226">G</text>
          </svg>
        </div>
        <div class="traversal-strip">
          <div class="traversal-row"><strong>Preorder</strong><span>A, B, D, E, C, F, G</span></div>
          <div class="traversal-row"><strong>Inorder</strong><span>D, B, E, A, F, C, G</span></div>
          <div class="traversal-row"><strong>Postorder</strong><span>D, E, B, F, G, C, A</span></div>
          <div class="traversal-row"><strong>Level-order</strong><span>A, B, C, D, E, F, G</span></div>
          <article class="lesson-block">
            <h4>如何記憶</h4>
            <ul>
              <li>Preorder：先處理 root，再 left、right。</li>
              <li>Inorder：先 left，再 root，再 right；套用於 BST 時會得到遞增序列。</li>
              <li>Postorder：先 left、right，最後 root；適合釋放樹或計算 expression tree。</li>
              <li>Level-order：一層一層拜訪，需要 queue。</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="tree-iterative-title">
      <div class="section-heading">
        <p class="eyebrow">Iterative Traversal</p>
        <h2 id="tree-iterative-title">迭代走訪與不使用堆疊的走訪</h2>
        <p>遞迴走訪其實是把待處理節點暫存在系統呼叫堆疊中。若要控制記憶體使用或避免遞迴深度過深，可以改用明確 stack；若使用 threaded tree，則可以把原本的 NULL link 改成走訪線索。</p>
      </div>
      <div class="tree-material-grid">
        <div class="lesson-column">
          <article class="lesson-block">
            <h4>Iterative inorder 的核心想法</h4>
            <ol>
              <li>沿著 left child 一路把節點推入 stack。</li>
              <li>沒有 left child 時，pop 出節點並處理它。</li>
              <li>改往該節點的 right child，重複同樣流程。</li>
            </ol>
          </article>
          <article class="lesson-block">
            <h4>Level-order traversal</h4>
            <p>層序走訪使用 queue：先把 root 入佇列，每次取出 front 節點並拜訪，再依序放入 left child 與 right child。這個流程和 Graph BFS 的精神相同。</p>
          </article>
          <article class="lesson-block">
            <h4>Traversal without a stack</h4>
            <p>Threaded binary tree 會把空的 child link 轉成 inorder predecessor 或 successor 的線索，使 inorder traversal 能沿線索前進，而不必再額外使用 stack。</p>
          </article>
        </div>
        <article class="tree-code-panel">
          <h3>標準 C：以 stack 執行 inorder traversal</h3>
          <pre><code class="language-c">#include &lt;stdio.h&gt;

#define MAX_STACK 128

void inorder_iterative(TreeNode *root) {
    TreeNode *stack[MAX_STACK];
    int top = -1;
    TreeNode *current = root;

    while (current != NULL || top &gt;= 0) {
        while (current != NULL) {
            if (top == MAX_STACK - 1) return;
            stack[++top] = current;
            current = current-&gt;left;
        }

        current = stack[top--];
        printf("%d ", current-&gt;key);
        current = current-&gt;right;
    }
}</code></pre>
        </article>
      </div>
    </section>

    <section class="section" aria-labelledby="tree-extra-ops-title">
      <div class="section-heading">
        <p class="eyebrow">Additional Operations</p>
        <h2 id="tree-extra-ops-title">額外二元樹操作</h2>
        <p>基本走訪之後，可進一步練習 copy、testing equality 與 satisfiability problem。這些例子提醒我們：樹的遞迴結構不只用於輸出序列，也能用來建立、比較與評估整棵子樹。</p>
      </div>
      <div class="tree-material-grid">
        <div class="lesson-column">
          <article class="lesson-block">
            <h4>Copying Binary Trees</h4>
            <p>複製一棵樹時，不能只複製 root 指標；必須為每個節點配置新記憶體，再遞迴複製左右子樹。</p>
          </article>
          <article class="lesson-block">
            <h4>Testing Equality</h4>
            <p>兩棵樹相等必須同時滿足：根節點資料相同、左子樹相等、右子樹相等。形狀不同即使節點集合相同，也不是同一棵樹。</p>
          </article>
          <article class="lesson-block">
            <h4>Satisfiability Problem</h4>
            <p>布林表示式可以表示成 expression tree：internal nodes 是 AND、OR、NOT，leaves 是變數或常數。評估時使用 postorder，先算子樹再算運算子。</p>
          </article>
        </div>
        <article class="tree-code-panel">
          <h3>標準 C：複製與比較二元樹</h3>
          <pre><code class="language-c">TreeNode *copy_tree(const TreeNode *root) {
    TreeNode *node;

    if (root == NULL) return NULL;

    node = make_node(root-&gt;key);
    if (node == NULL) return NULL;

    node-&gt;left = copy_tree(root-&gt;left);
    node-&gt;right = copy_tree(root-&gt;right);
    return node;
}

int equal_tree(const TreeNode *a, const TreeNode *b) {
    if (a == NULL || b == NULL) {
        return a == b;
    }

    return a-&gt;key == b-&gt;key
        &amp;&amp; equal_tree(a-&gt;left, b-&gt;left)
        &amp;&amp; equal_tree(a-&gt;right, b-&gt;right);
}</code></pre>
        </article>
      </div>
    </section>

    <section class="section" aria-labelledby="bst-title">
      <div class="section-heading">
        <p class="eyebrow">Binary Search Tree</p>
        <h2 id="bst-title">二元搜尋樹 BST</h2>
        <p>BST 把排序關係放進樹的形狀中：每次比較可排除一整棵子樹。若樹接近平衡，搜尋、插入、刪除的平均成本約為 O(log n)；若退化成 skewed tree，最壞會變成 O(n)。</p>
      </div>
      <div class="teaching-grid">
        <article class="algorithm-card">
          <h3>搜尋 Search</h3>
          <p>從 root 開始，key 較小往 left，key 較大往 right；每一步都縮小候選範圍。</p>
          <div class="chapter-tags"><span>Average O(log n)</span><span>Worst O(n)</span></div>
        </article>
        <article class="algorithm-card">
          <h3>插入 Insert</h3>
          <p>先用搜尋路徑找到 NULL 位置，再把新節點接上。重複鍵值要事先規範：忽略、計數或放到固定一側。</p>
          <div class="chapter-tags"><span>Pointer Update</span><span>Duplicate Policy</span></div>
        </article>
        <article class="algorithm-card">
          <h3>刪除 Delete</h3>
          <p>刪除 leaf 最簡單；刪除單一 child 節點時讓 child 取代它；刪除兩個 child 的節點時，常用 inorder successor 或 predecessor 替換。</p>
          <div class="chapter-tags"><span>3 Cases</span><span>Successor</span><span>Predecessor</span></div>
        </article>
        <article class="algorithm-card">
          <h3>中序特性</h3>
          <p>BST 的 inorder traversal 會依鍵值遞增輸出，因此可以用來檢查樹是否仍符合搜尋樹性質。</p>
          <div class="chapter-tags"><span>Sorted Order</span><span>Invariant</span></div>
        </article>
      </div>
    </section>

    <section class="section" aria-labelledby="threaded-tree-title">
      <div class="section-heading">
        <p class="eyebrow">Threaded Binary Trees</p>
        <h2 id="threaded-tree-title">線索二元樹</h2>
        <p>一般鏈結二元樹中，leaf 與部分 internal node 會留下許多 NULL child link。Threaded binary tree 把這些空 link 改成 inorder predecessor 或 successor，並用 tag 記錄這條指標是 child link 還是 thread。</p>
      </div>
      <div class="tree-material-grid">
        <div class="lesson-column">
          <article class="lesson-block">
            <h4>為什麼需要 thread</h4>
            <p>Recursive inorder 需要系統 stack；iterative inorder 需要明確 stack。若每個節點能知道自己的 inorder successor，就可以沿著 thread 走完整棵樹。</p>
          </article>
          <article class="lesson-block">
            <h4>Header node</h4>
            <p>實作 threaded tree 時常加上一個 header node，讓 traversal 的起點與終點都能用同一套 successor 規則處理，減少特殊情況。</p>
          </article>
          <article class="lesson-block">
            <h4>插入提醒</h4>
            <p>插入新節點不只接上 child link，也要更新 predecessor/successor threads；否則下一次 inorder traversal 會跳錯位置。</p>
          </article>
        </div>
        <article class="tree-code-panel">
          <h3>標準 C：Threaded Tree 節點與 inorder successor</h3>
          <pre><code class="language-c">typedef enum { LINK, THREAD } PointerTag;

typedef struct ThreadNode {
    int key;
    struct ThreadNode *left;
    struct ThreadNode *right;
    PointerTag left_tag;
    PointerTag right_tag;
} ThreadNode;

ThreadNode *inorder_successor(ThreadNode *node) {
    ThreadNode *current;

    if (node-&gt;right_tag == THREAD) {
        return node-&gt;right;
    }

    current = node-&gt;right;
    while (current-&gt;left_tag == LINK) {
        current = current-&gt;left;
    }
    return current;
}

void threaded_inorder(ThreadNode *head) {
    ThreadNode *current = head;

    while (1) {
        current = inorder_successor(current);
        if (current == head) break;
        printf("%d ", current-&gt;key);
    }
}</code></pre>
        </article>
      </div>
    </section>

    <section class="section" aria-labelledby="heap-priority-title">
      <div class="section-heading">
        <p class="eyebrow">Heaps</p>
        <h2 id="heap-priority-title">Heap 與 Priority Queue</h2>
        <p>Heap 是 complete binary tree，通常用陣列表示。Max heap 要求每個 parent 都大於等於 children；Min heap 則相反。這個結構可支援 priority queue 的 insert 與 delete max/min。</p>
      </div>
      <div class="tree-diagram-grid">
        <article class="tree-diagram-card">
          <h3>Max Heap Tree</h3>
          <p>每個 parent 的鍵值都大於或等於 children；root 保存目前最大值。</p>
          <svg class="tree-diagram-svg" viewBox="0 0 360 260" role="img" aria-label="Max heap tree example">
            <line class="tree-diagram-edge" x1="180" y1="44" x2="105" y2="112"></line>
            <line class="tree-diagram-edge" x1="180" y1="44" x2="255" y2="112"></line>
            <line class="tree-diagram-edge" x1="105" y1="112" x2="65" y2="190"></line>
            <line class="tree-diagram-edge" x1="105" y1="112" x2="145" y2="190"></line>
            <line class="tree-diagram-edge" x1="255" y1="112" x2="215" y2="190"></line>
            <line class="tree-diagram-edge" x1="255" y1="112" x2="295" y2="190"></line>
            <circle class="tree-diagram-node heap-max" cx="180" cy="44" r="24"></circle><text class="tree-diagram-label" x="180" y="50">90</text>
            <circle class="tree-diagram-node internal" cx="105" cy="112" r="23"></circle><text class="tree-diagram-label" x="105" y="118">75</text>
            <circle class="tree-diagram-node internal" cx="255" cy="112" r="23"></circle><text class="tree-diagram-label" x="255" y="118">60</text>
            <circle class="tree-diagram-node leaf" cx="65" cy="190" r="22"></circle><text class="tree-diagram-label" x="65" y="196">42</text>
            <circle class="tree-diagram-node leaf" cx="145" cy="190" r="22"></circle><text class="tree-diagram-label" x="145" y="196">30</text>
            <circle class="tree-diagram-node leaf" cx="215" cy="190" r="22"></circle><text class="tree-diagram-label" x="215" y="196">55</text>
            <circle class="tree-diagram-node leaf" cx="295" cy="190" r="22"></circle><text class="tree-diagram-label" x="295" y="196">20</text>
            <text class="tree-diagram-note strong" x="180" y="236">parent >= children，delete-max 取 root</text>
          </svg>
        </article>
        <article class="tree-diagram-card">
          <h3>Min Heap Tree</h3>
          <p>每個 parent 的鍵值都小於或等於 children；root 保存目前最小值。</p>
          <svg class="tree-diagram-svg" viewBox="0 0 360 260" role="img" aria-label="Min heap tree example">
            <line class="tree-diagram-edge" x1="180" y1="44" x2="105" y2="112"></line>
            <line class="tree-diagram-edge" x1="180" y1="44" x2="255" y2="112"></line>
            <line class="tree-diagram-edge" x1="105" y1="112" x2="65" y2="190"></line>
            <line class="tree-diagram-edge" x1="105" y1="112" x2="145" y2="190"></line>
            <line class="tree-diagram-edge" x1="255" y1="112" x2="215" y2="190"></line>
            <line class="tree-diagram-edge" x1="255" y1="112" x2="295" y2="190"></line>
            <circle class="tree-diagram-node heap-min" cx="180" cy="44" r="24"></circle><text class="tree-diagram-label" x="180" y="50">8</text>
            <circle class="tree-diagram-node internal" cx="105" cy="112" r="23"></circle><text class="tree-diagram-label" x="105" y="118">12</text>
            <circle class="tree-diagram-node internal" cx="255" cy="112" r="23"></circle><text class="tree-diagram-label" x="255" y="118">20</text>
            <circle class="tree-diagram-node leaf" cx="65" cy="190" r="22"></circle><text class="tree-diagram-label" x="65" y="196">24</text>
            <circle class="tree-diagram-node leaf" cx="145" cy="190" r="22"></circle><text class="tree-diagram-label" x="145" y="196">31</text>
            <circle class="tree-diagram-node leaf" cx="215" cy="190" r="22"></circle><text class="tree-diagram-label" x="215" y="196">45</text>
            <circle class="tree-diagram-node leaf" cx="295" cy="190" r="22"></circle><text class="tree-diagram-label" x="295" y="196">50</text>
            <text class="tree-diagram-note strong" x="180" y="236">parent <= children，delete-min 取 root</text>
          </svg>
        </article>
      </div>
      <div class="tree-material-grid">
        <div class="lesson-column">
          <article class="lesson-block">
            <h4>Array index 對應</h4>
            <ul>
              <li>Parent index：<code>(i - 1) / 2</code></li>
              <li>Left child：<code>2 * i + 1</code></li>
              <li>Right child：<code>2 * i + 2</code></li>
            </ul>
          </article>
          <article class="lesson-block">
            <h4>Insertion</h4>
            <p>把新鍵值暫放在陣列尾端，然後和 parent 比較。若比 parent 大，就把 parent 往下移，直到找到正確位置，稱為 up-heap 或 percolate up。</p>
          </article>
          <article class="lesson-block">
            <h4>Deletion</h4>
            <p>刪除 max heap 的 root 後，取最後一個元素補到 root，再與較大的 child 比較並往下移，稱為 down-heap 或 percolate down。</p>
          </article>
        </div>
        <article class="tree-code-panel">
          <h3>標準 C：Max Heap 插入與刪除最大值</h3>
          <pre><code class="language-c">void heap_insert(int heap[], int *size, int key) {
    int i = *size;
    int parent;

    (*size)++;
    while (i &gt; 0) {
        parent = (i - 1) / 2;
        if (key &lt;= heap[parent]) break;
        heap[i] = heap[parent];
        i = parent;
    }
    heap[i] = key;
}

int heap_delete_max(int heap[], int *size, int *out) {
    int last;
    int i = 0;
    int child = 1;

    if (*size &lt;= 0) return 0;

    *out = heap[0];
    last = heap[--(*size)];
    if (*size == 0) return 1;

    while (child &lt; *size) {
        if (child + 1 &lt; *size &amp;&amp; heap[child + 1] &gt; heap[child]) {
            child++;
        }
        if (last &gt;= heap[child]) break;

        heap[i] = heap[child];
        i = child;
        child = 2 * i + 1;
    }

    heap[i] = last;
    return 1;
}</code></pre>
        </article>
      </div>
    </section>

    <section class="section" aria-labelledby="tree-extension-title">
      <div class="section-heading">
        <p class="eyebrow">Selection Trees and Forests</p>
        <h2 id="tree-extension-title">Selection Tree 與 Forest</h2>
        <p>Heap 與 BST 之後，可以進一步比較 selection tree 與 forest。這些主題把「樹」從單一階層資料結構推廣到多路選擇、競賽淘汰與多棵樹的集合。</p>
      </div>
      <div class="tree-diagram-grid">
        <article class="tree-diagram-card">
          <h3>Winner Tree</h3>
          <p>每次比較把勝者往上送，root 保存整體勝者；適合 k-way merge 反覆選最小值。</p>
          <svg class="tree-diagram-svg" viewBox="0 0 360 260" role="img" aria-label="Winner tree example">
            <line class="tree-diagram-edge" x1="180" y1="50" x2="100" y2="125"></line>
            <line class="tree-diagram-edge" x1="180" y1="50" x2="260" y2="125"></line>
            <line class="tree-diagram-edge" x1="100" y1="125" x2="65" y2="202"></line>
            <line class="tree-diagram-edge" x1="100" y1="125" x2="135" y2="202"></line>
            <line class="tree-diagram-edge" x1="260" y1="125" x2="225" y2="202"></line>
            <line class="tree-diagram-edge" x1="260" y1="125" x2="295" y2="202"></line>
            <circle class="tree-diagram-node winner" cx="180" cy="50" r="24"></circle><text class="tree-diagram-label" x="180" y="56">3</text>
            <circle class="tree-diagram-node winner" cx="100" cy="125" r="23"></circle><text class="tree-diagram-label" x="100" y="131">3</text>
            <circle class="tree-diagram-node winner" cx="260" cy="125" r="23"></circle><text class="tree-diagram-label" x="260" y="131">4</text>
            <circle class="tree-diagram-node leaf" cx="65" cy="202" r="22"></circle><text class="tree-diagram-label" x="65" y="208">7</text>
            <circle class="tree-diagram-node leaf" cx="135" cy="202" r="22"></circle><text class="tree-diagram-label" x="135" y="208">3</text>
            <circle class="tree-diagram-node leaf" cx="225" cy="202" r="22"></circle><text class="tree-diagram-label" x="225" y="208">9</text>
            <circle class="tree-diagram-node leaf" cx="295" cy="202" r="22"></circle><text class="tree-diagram-label" x="295" y="208">4</text>
            <text class="tree-diagram-note strong" x="180" y="236">root = winner，例中以較小值獲勝</text>
          </svg>
        </article>
        <article class="tree-diagram-card">
          <h3>Loser Tree</h3>
          <p>internal node 保存比較失敗者，整體勝者另存在 root 或外部變數；多路合併時更新路徑較有效率。</p>
          <svg class="tree-diagram-svg" viewBox="0 0 360 260" role="img" aria-label="Loser tree example">
            <line class="tree-diagram-edge" x1="180" y1="70" x2="100" y2="135"></line>
            <line class="tree-diagram-edge" x1="180" y1="70" x2="260" y2="135"></line>
            <line class="tree-diagram-edge" x1="100" y1="135" x2="65" y2="205"></line>
            <line class="tree-diagram-edge" x1="100" y1="135" x2="135" y2="205"></line>
            <line class="tree-diagram-edge" x1="260" y1="135" x2="225" y2="205"></line>
            <line class="tree-diagram-edge" x1="260" y1="135" x2="295" y2="205"></line>
            <circle class="tree-diagram-node winner" cx="180" cy="32" r="23"></circle><text class="tree-diagram-label" x="180" y="38">3</text>
            <text class="tree-diagram-note strong" x="180" y="70">winner</text>
            <circle class="tree-diagram-node loser" cx="180" cy="100" r="23"></circle><text class="tree-diagram-label" x="180" y="106">4</text>
            <circle class="tree-diagram-node loser" cx="100" cy="155" r="22"></circle><text class="tree-diagram-label" x="100" y="161">7</text>
            <circle class="tree-diagram-node loser" cx="260" cy="155" r="22"></circle><text class="tree-diagram-label" x="260" y="161">9</text>
            <circle class="tree-diagram-node leaf" cx="65" cy="215" r="20"></circle><text class="tree-diagram-label" x="65" y="221">7</text>
            <circle class="tree-diagram-node leaf" cx="135" cy="215" r="20"></circle><text class="tree-diagram-label" x="135" y="221">3</text>
            <circle class="tree-diagram-node leaf" cx="225" cy="215" r="20"></circle><text class="tree-diagram-label" x="225" y="221">9</text>
            <circle class="tree-diagram-node leaf" cx="295" cy="215" r="20"></circle><text class="tree-diagram-label" x="295" y="221">4</text>
            <text class="tree-diagram-note" x="180" y="250">internal nodes store losers</text>
          </svg>
        </article>
        <article class="tree-diagram-card">
          <h3>Forest</h3>
          <p>Forest 是多棵互不相交的樹集合；刪除 root 後，原本的子樹就形成 forest。</p>
          <svg class="tree-diagram-svg" viewBox="0 0 360 260" role="img" aria-label="Forest example">
            <line class="tree-diagram-edge" x1="75" y1="72" x2="45" y2="145"></line>
            <line class="tree-diagram-edge" x1="75" y1="72" x2="105" y2="145"></line>
            <line class="tree-diagram-edge" x1="190" y1="70" x2="170" y2="145"></line>
            <line class="tree-diagram-edge" x1="190" y1="70" x2="220" y2="145"></line>
            <line class="tree-diagram-edge" x1="285" y1="72" x2="285" y2="145"></line>
            <circle class="tree-diagram-node root" cx="75" cy="72" r="23"></circle><text class="tree-diagram-label" x="75" y="78">B</text>
            <circle class="tree-diagram-node leaf" cx="45" cy="145" r="21"></circle><text class="tree-diagram-label" x="45" y="151">E</text>
            <circle class="tree-diagram-node leaf" cx="105" cy="145" r="21"></circle><text class="tree-diagram-label" x="105" y="151">F</text>
            <circle class="tree-diagram-node root" cx="190" cy="70" r="23"></circle><text class="tree-diagram-label" x="190" y="76">C</text>
            <circle class="tree-diagram-node leaf" cx="170" cy="145" r="21"></circle><text class="tree-diagram-label" x="170" y="151">G</text>
            <circle class="tree-diagram-node leaf" cx="220" cy="145" r="21"></circle><text class="tree-diagram-label" x="220" y="151">H</text>
            <circle class="tree-diagram-node root" cx="285" cy="72" r="23"></circle><text class="tree-diagram-label" x="285" y="78">D</text>
            <circle class="tree-diagram-node leaf" cx="285" cy="145" r="21"></circle><text class="tree-diagram-label" x="285" y="151">I</text>
            <text class="tree-diagram-note strong" x="75" y="210">T1</text>
            <text class="tree-diagram-note strong" x="190" y="210">T2</text>
            <text class="tree-diagram-note strong" x="285" y="210">T3</text>
            <text class="tree-diagram-note" x="180" y="238">多棵樹彼此沒有共同節點</text>
          </svg>
        </article>
        <article class="tree-diagram-card">
          <h3>Left-Child Right-Sibling</h3>
          <p>一般樹轉成二元樹：left 指向第一個 child，right 指向下一個 sibling。</p>
          <svg class="tree-diagram-svg" viewBox="0 0 360 260" role="img" aria-label="Left child right sibling tree example">
            <line class="tree-diagram-edge" x1="72" y1="48" x2="72" y2="120"></line>
            <line class="tree-diagram-edge" x1="72" y1="120" x2="160" y2="120"></line>
            <line class="tree-diagram-edge" x1="160" y1="120" x2="248" y2="120"></line>
            <line class="tree-diagram-edge" x1="72" y1="120" x2="72" y2="195"></line>
            <line class="tree-diagram-edge" x1="72" y1="195" x2="160" y2="195"></line>
            <circle class="tree-diagram-node root" cx="72" cy="48" r="23"></circle><text class="tree-diagram-label" x="72" y="54">A</text>
            <circle class="tree-diagram-node internal" cx="72" cy="120" r="22"></circle><text class="tree-diagram-label" x="72" y="126">B</text>
            <circle class="tree-diagram-node internal" cx="160" cy="120" r="22"></circle><text class="tree-diagram-label" x="160" y="126">C</text>
            <circle class="tree-diagram-node internal" cx="248" cy="120" r="22"></circle><text class="tree-diagram-label" x="248" y="126">D</text>
            <circle class="tree-diagram-node leaf" cx="72" cy="195" r="21"></circle><text class="tree-diagram-label" x="72" y="201">E</text>
            <circle class="tree-diagram-node leaf" cx="160" cy="195" r="21"></circle><text class="tree-diagram-label" x="160" y="201">F</text>
            <text class="tree-diagram-note" x="46" y="88">first child</text>
            <text class="tree-diagram-note" x="160" y="104">next sibling</text>
            <text class="tree-diagram-note" x="180" y="238">一般樹可用二元鏈結表示</text>
          </svg>
        </article>
      </div>
      <div class="teaching-grid">
        <article class="algorithm-card">
          <h3>Winner Tree</h3>
          <p>把候選元素放在 leaves，internal node 保存勝出的元素。更新某個 leaf 後，只需沿著到 root 的路徑重新比賽。</p>
          <div class="chapter-tags"><span>Selection</span><span>O(log k)</span><span>k-way Merge</span></div>
        </article>
        <article class="algorithm-card">
          <h3>Loser Tree</h3>
          <p>internal node 保存失敗者，root 保存整體勝者。多路合併時，loser tree 可減少重複比較並快速找下一個最小值。</p>
          <div class="chapter-tags"><span>Tournament</span><span>External Sort</span></div>
        </article>
        <article class="algorithm-card">
          <h3>Forest</h3>
          <p>Forest 是多棵互不相交的樹。刪除一棵樹的 root 後，它的每個 subtree 會形成一個 forest。</p>
          <div class="chapter-tags"><span>Tree Set</span><span>Subtrees</span></div>
        </article>
        <article class="algorithm-card">
          <h3>Left-Child Right-Sibling</h3>
          <p>一般樹可轉成二元樹：left 指向第一個 child，right 指向下一個 sibling。這讓一般樹也能用二元樹結構處理。</p>
          <div class="chapter-tags"><span>General Tree</span><span>Binary Transform</span></div>
        </article>
      </div>
      <div class="tree-code-panel standalone-code-panel">
        <h3>標準 C：一般樹的 left-child right-sibling 表示法</h3>
        <pre><code class="language-c">typedef struct ForestNode {
    int key;
    struct ForestNode *first_child;
    struct ForestNode *next_sibling;
} ForestNode;</code></pre>
      </div>
    </section>

    <section class="section" aria-labelledby="disjoint-set-title">
      <div class="section-heading">
        <p class="eyebrow">Disjoint Sets</p>
        <h2 id="disjoint-set-title">不相交集合與 Union-Find</h2>
        <p>Disjoint set 使用多棵樹表示互不重疊的集合。每棵樹的 root 代表該集合；find 找 root，union 合併兩棵樹。這個結構後續會在 equivalence classes 與 Kruskal MST 中反覆出現。</p>
      </div>
      <div class="tree-material-grid">
        <div class="lesson-column">
          <article class="lesson-block">
            <h4>Find</h4>
            <p>沿 parent link 往上找到 root。若加入 path compression，查詢過程會順便把路徑上的節點直接接到 root，降低後續成本。</p>
          </article>
          <article class="lesson-block">
            <h4>Union</h4>
            <p>把兩個 root 接在一起。若使用 union by size 或 union by height，會把較小或較矮的樹接到較大的 root 底下，避免高度失控。</p>
          </article>
          <article class="lesson-block">
            <h4>Equivalence Classes</h4>
            <p>若關係具有 reflexive、symmetric、transitive，便可用 union-find 把元素分組成等價類。</p>
          </article>
        </div>
        <article class="tree-code-panel">
          <h3>標準 C：Union by Size 與 Path Compression</h3>
          <pre><code class="language-c">void make_sets(int parent[], int size[], int n) {
    int i;

    for (i = 0; i &lt; n; i++) {
        parent[i] = i;
        size[i] = 1;
    }
}

int find_root(int parent[], int x) {
    if (parent[x] != x) {
        parent[x] = find_root(parent, parent[x]);
    }
    return parent[x];
}

void union_sets(int parent[], int size[], int a, int b) {
    int root_a = find_root(parent, a);
    int root_b = find_root(parent, b);
    int temp;

    if (root_a == root_b) return;

    if (size[root_a] &lt; size[root_b]) {
        temp = root_a;
        root_a = root_b;
        root_b = temp;
    }

    parent[root_b] = root_a;
    size[root_a] += size[root_b];
}</code></pre>
        </article>
      </div>
    </section>

    <section class="section" aria-labelledby="counting-trees-title">
      <div class="section-heading">
        <p class="eyebrow">Counting Binary Trees</p>
        <h2 id="counting-trees-title">二元樹計數</h2>
        <p>章末的 counting binary trees 把資料結構連回組合數學。不同二元樹數量、stack permutations 與矩陣乘法括號化，都會出現同一類 Catalan recurrence。</p>
      </div>
      <div class="chapter-layout">
        <article class="chapter-panel">
          <h3>Catalan recurrence</h3>
          <p>令 C(n) 表示 n 個節點可形成的不同二元樹數量。若 root 左邊有 i 個節點，右邊就有 n - 1 - i 個節點，因此：</p>
          <div class="definition-formula">C(n) = Σ C(i)C(n - 1 - i), C(0) = 1</div>
          <p>封閉形式為 C(n) = (1 / (n + 1)) · binomial(2n, n)。</p>
        </article>
        <article class="tree-code-panel">
          <h3>標準 C：動態規劃計算 C(n)</h3>
          <pre><code class="language-c">unsigned long long count_binary_trees(int n) {
    unsigned long long dp[32];
    int nodes;
    int left;

    if (n &lt; 0 || n &gt;= 32) return 0;

    dp[0] = 1;
    for (nodes = 1; nodes &lt;= n; nodes++) {
        dp[nodes] = 0;
        for (left = 0; left &lt; nodes; left++) {
            dp[nodes] += dp[left] * dp[nodes - 1 - left];
        }
    }
    return dp[n];
}</code></pre>
        </article>
      </div>
    </section>
  `;
}

function treeLabTemplate() {
  return `
    <section id="trees" class="section lab-section" aria-labelledby="trees-title">
      <div class="section-heading">
        <p class="eyebrow">Tree Lab</p>
        <h2 id="trees-title">樹：形狀、走訪與搜尋成本</h2>
        <p>同一批鍵值會因插入順序形成不同高度；高度差會直接改變搜尋、插入與刪除的路徑長度。</p>
      </div>

      <div class="lab-grid tree-grid">
        <div class="visual-panel">
          <div class="toolbar" aria-label="樹控制">
            <label class="field wide-field">
              <span>鍵值序列</span>
              <input id="tree-input" type="text" value="42, 24, 64, 16, 31, 50, 75, 28, 36, 70">
            </label>
            <button type="button" class="icon-btn primary" id="tree-build" title="建立樹" aria-label="建立樹">
              <i data-lucide="git-branch-plus"></i>
              <span>建立</span>
            </button>
            <button type="button" class="icon-btn" id="tree-random" title="隨機鍵值" aria-label="隨機鍵值">
              <i data-lucide="dice-5"></i>
              <span>隨機</span>
            </button>
          </div>

          <div class="algorithm-tabs" role="tablist" aria-label="樹走訪">
            <button type="button" class="tab active" data-traversal="inorder">Inorder</button>
            <button type="button" class="tab" data-traversal="preorder">Preorder</button>
            <button type="button" class="tab" data-traversal="postorder">Postorder</button>
            <button type="button" class="tab" data-traversal="levelorder">Level</button>
          </div>

          <svg id="tree-svg" class="tree-surface" role="img" aria-label="二元搜尋樹圖形"></svg>
          <div class="metric-row" aria-label="樹指標">
            <div><strong id="tree-height">0</strong><span>高度</span></div>
            <div><strong id="tree-nodes">0</strong><span>節點</span></div>
            <div><strong id="tree-leaves">0</strong><span>葉節點</span></div>
            <div><strong id="tree-balance">-</strong><span>平衡度</span></div>
          </div>
        </div>

        <div class="analysis-panel">
          <h3>走訪結果</h3>
          <div id="traversal-output" class="sequence-output"></div>
          <h3>形狀比較</h3>
          <div class="tree-compare">
            <div>
              <span>排序插入</span>
              <svg id="tree-skew-svg" role="img" aria-label="偏斜樹比較"></svg>
            </div>
            <div>
              <span>中位數優先</span>
              <svg id="tree-balanced-svg" role="img" aria-label="近似平衡樹比較"></svg>
            </div>
          </div>
          <div class="insight-box" id="tree-note">BST 的中序走訪會得到遞增序列。</div>
        </div>
      </div>
    </section>
  `;
}

const graphTerms = [
  [
    "Vertex / Node",
    "圖中的基本物件或狀態，組成頂點集合 V。頂點可以帶有名稱、編號或其他資料；圖演算法通常以頂點作為拜訪與標記的單位。",
    "在道路圖中，A、B、C 三座城市可分別表示三個 vertices。",
  ],
  [
    "Edge / Arc",
    "連接兩個頂點的關係，組成邊集合 E。無向圖通常稱 edge；有向圖常稱 arc，並以起點與終點描述方向。",
    "道路 A-B 可寫成 {A, B}；追蹤關係 A 追蹤 B 可寫成 (A, B)。",
  ],
  [
    "Directed Graph",
    "每條邊都有方向的圖。邊 (u, v) 表示可以由 u 前往 v，不保證能反向由 v 前往 u，因此 (u, v) 與 (v, u) 是兩條不同的邊。",
    "課程先修圖中，(資料結構, 演算法) 表示修演算法前應先修資料結構。",
  ],
  [
    "Undirected Graph",
    "每條邊都沒有方向的圖。邊 {u, v} 表示 u 與 v 彼此相連，從任一端都能走到另一端。",
    "若 A 與 B 是好友，可用無向邊 {A, B} 表示雙向關係。",
  ],
  [
    "Weighted Graph",
    "每條邊額外帶有數值權重。權重可以代表距離、時間、費用、容量或風險；最短路徑與最小生成樹會使用這些數值比較方案。",
    "道路 A-B 的距離為 12 公里，可記為 w(A, B) = 12。",
  ],
  [
    "Adjacent",
    "若兩個頂點之間有邊直接相連，稱兩個頂點相鄰。相鄰只描述一步可達，不等同於經過多條邊後仍可到達。",
    "有邊 {A, B} 時 A 與 B adjacent；只有 A-B-C 時，A 與 C 並不 adjacent。",
  ],
  [
    "Incident",
    "若一條邊連接某個頂點，稱這條邊 incident to 該頂點。這個詞描述邊與頂點的關係，常用於計算 degree。",
    "邊 {A, B} 同時 incident to A 與 B。",
  ],
  [
    "Degree",
    "在無向圖中，頂點 v 的 degree 是與 v 相接的邊數，記為 deg(v)。所有頂點的 degree 總和等於 2|E|，因為每條邊會被兩端各計算一次。",
    "若 A 連到 B、C、D，則 deg(A) = 3。",
  ],
  [
    "In-degree / Out-degree",
    "在有向圖中，in-degree 是進入某頂點的邊數，out-degree 是從該頂點出發的邊數。拓撲排序常以 in-degree 是否為 0 決定下一個可處理的頂點。",
    "若有 (A, C)、(B, C)、(C, D)，則 C 的 in-degree = 2，out-degree = 1。",
  ],
  [
    "Walk",
    "由一串相鄰頂點形成的行走序列，途中允許重複經過頂點與邊。Walk 是最寬鬆的走法描述，可用來說明一次實際移動過程。",
    "A-B-C-B-D 是合法 walk，因為途中可以再次經過 B。",
  ],
  [
    "Path / Simple Path",
    "Path 是沿著邊由起點走到終點的路線。不同教材對 path 是否允許重複頂點的用法略有差異；明確要求頂點不重複時，稱為 simple path。",
    "A-B-C-D 是一條由 A 到 D 的 simple path；A-B-C-B-D 則不是 simple path。",
  ],
  [
    "Cycle / Simple Cycle",
    "起點與終點相同的封閉路線稱為 cycle。若除了起終點外沒有重複頂點，稱為 simple cycle。偵測 cycle 是判斷樹、DAG 與拓撲排序可行性的關鍵。",
    "A-B-C-A 是 simple cycle；樹中不會出現任何 cycle。",
  ],
  [
    "Reachable",
    "若存在一條由 u 到 v 的 path，稱 v 可由 u 到達。對有向圖而言方向很重要：v 可由 u 到達，不代表 u 一定可由 v 到達。",
    "若只有 (A, B)、(B, C)，則 C reachable from A，但 A 不可由 C 到達。",
  ],
  [
    "Connected Graph",
    "在無向圖中，若任意兩個頂點之間都有 path，稱為連通圖。只要存在一個無法與其他頂點互通的孤立頂點，整張圖就不是 connected。",
    "A-B-C 且 C-D 的圖是 connected；若另有孤立頂點 E，則整張圖不連通。",
  ],
  [
    "Connected Component",
    "非連通無向圖中，每個最大的連通子圖稱為 connected component。最大的意思是不能再加入其他頂點而仍保持連通。",
    "若邊只有 {A, B} 與 {C, D}，則圖有 {A, B}、{C, D} 兩個 components。",
  ],
  [
    "Strongly Connected",
    "在有向圖中，若每一對頂點 u、v 都能彼此到達，稱為強連通。圖也可以拆成數個 strongly connected components，分析相互可達的群組。",
    "具有 (A, B)、(B, C)、(C, A) 時，A、B、C 形成 strongly connected component。",
  ],
  [
    "Subgraph",
    "從原圖取出部分頂點與部分邊所形成的圖。子圖中的邊仍必須使用被選中的頂點，常用來聚焦局部結構或建立演算法結果。",
    "原圖有 A、B、C、D 與多條邊時，只取頂點 A、B、C 和邊 {A, B} 即形成 subgraph。",
  ],
  [
    "Tree / Forest",
    "無向圖中，connected 且沒有 cycle 的圖稱為 tree。數個彼此分離的 trees 合在一起稱為 forest。DFS 與 BFS 都能產生搜尋樹或搜尋森林。",
    "A-B-C 與 D-E 兩棵分離的樹合在一起是一個 forest。",
  ],
  [
    "Spanning Tree",
    "連通無向圖中，包含原圖所有頂點且本身是一棵樹的子圖。若原圖有 |V| 個頂點，任何 spanning tree 都恰好有 |V| - 1 條邊。",
    "三角形 A-B-C-A 可移除任一條邊，得到包含 A、B、C 的 spanning tree。",
  ],
  [
    "Minimum Spanning Tree",
    "帶權重連通無向圖中，總權重最小的 spanning tree，簡稱 MST。它保留所有頂點的連通性，同時把建設成本降到最低。",
    "若三角形邊權重為 AB=2、BC=3、AC=9，MST 會選 AB 與 BC，總成本為 5。",
  ],
  [
    "Sparse / Dense",
    "Sparse graph 的邊數相對少，常接近 |V|；dense graph 的邊數相對多，接近可能的最大邊數。密度會影響 adjacency list 與 adjacency matrix 的選擇。",
    "1000 個頂點只有 1500 條邊通常偏 sparse，社群關係圖常有這種特性。",
  ],
  [
    "Self-loop",
    "邊的起點與終點是同一個頂點，稱為 self-loop。某些問題允許它表示自我關係，但處理 degree、cycle 或矩陣表示法時要特別注意。",
    "有向邊 (A, A) 表示 A 指向自己；在 adjacency matrix 中會落在對角線位置。",
  ],
  [
    "Parallel Edges / Multigraph",
    "若相同兩個頂點之間允許存在多條邊，稱為 parallel edges；允許此結構的圖稱為 multigraph。每條邊仍可有自己的權重或標籤。",
    "A 與 B 之間同時有公車與火車路線，可用兩條不同的 parallel edges 表示。",
  ],
  [
    "Complete Graph",
    "無向圖中，若每一對不同頂點之間都有邊相連，稱為 complete graph，記為 Kₙ。n 個頂點的 complete graph 共有 n(n - 1) / 2 條邊。",
    "K₄ 有 4 個頂點，每個頂點都連到另外 3 個頂點，共有 6 條邊。",
  ],
  [
    "Bipartite Graph",
    "若能把頂點分成兩組，且每條邊都只連接不同組的頂點，稱為二分圖。同一組內不會有邊；它很適合表示配對問題。",
    "學生與課程可分成兩組，學生選課關係用跨組的邊表示。",
  ],
  [
    "DAG",
    "Directed Acyclic Graph 的縮寫，指沒有 directed cycle 的有向圖。DAG 能進行 topological sort，常用來表示具有先後依賴的工作。",
    "編譯前置工作 A 指向建置 B，B 指向測試 C；只要不形成回圈，就是 DAG。",
  ],
  [
    "Euler Trail / Euler Circuit",
    "恰好經過每條 edge 一次的走法稱為 Euler trail；若起點與終點相同，稱為 Euler circuit。無向連通圖存在 Euler circuit 的條件是所有頂點 degree 皆為偶數；若恰有兩個奇數 degree 頂點，則只能形成起終點不同的 Euler trail。",
    "柯尼茲堡七橋問題有四個奇數 degree 頂點，因此既沒有 Euler trail，也沒有 Euler circuit。",
  ],
  [
    "Bridge / Cut Edge",
    "在無向圖中，移除後會讓 connected components 數量增加的邊稱為 bridge 或 cut edge。它代表網路中不能輕易失去的關鍵連線。",
    "A-B-C 中，移除 {B, C} 後 C 會與 A、B 分離，因此 {B, C} 是 bridge。",
  ],
];

function graphTermsTemplate() {
  return graphTerms
    .map(
      ([term, description, example]) => `
        <article class="term-card">
          <h3>${escapeHtml(term)}</h3>
          <p>${escapeHtml(description)}</p>
          <div class="term-example"><strong>例：</strong><span>${escapeHtml(example)}</span></div>
        </article>
      `,
    )
    .join("");
}

function graphMaterialsTemplate() {
  return `
    <section class="section" aria-labelledby="graph-definition-title">
      <div class="section-heading">
        <p class="eyebrow">Graph Basics</p>
        <h2 id="graph-definition-title">圖的定義</h2>
        <p>圖用來描述「物件」與「物件之間的關係」。學習時可從 Graph ADT、表示法、走訪、最短路徑與生成樹逐步展開。</p>
      </div>
      <div class="definition-panel">
        <div class="definition-formula">G = (V, E)</div>
        <p><strong>V</strong> 是有限的頂點集合，<strong>E</strong> 是邊集合。若是無向圖，邊通常寫成 {u, v}；若是有向圖，邊寫成有序對 (u, v)，表示從 u 指向 v。若每條邊有成本，則再加上一個權重函數 w(e)。</p>
        <svg class="graph-mini-svg" viewBox="0 0 620 260" role="img" aria-label="Graph definition example">
          <defs>
            <marker id="graph-mini-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#8792a1"></path>
            </marker>
          </defs>
          <line class="graph-mini-edge directed" x1="135" y1="88" x2="286" y2="70"></line>
          <line class="graph-mini-edge directed" x1="327" y1="88" x2="430" y2="166"></line>
          <line class="graph-mini-edge" x1="120" y1="126" x2="236" y2="184"></line>
          <line class="graph-mini-edge" x1="274" y1="188" x2="428" y2="184"></line>
          <line class="graph-mini-edge" x1="475" y1="160" x2="524" y2="96"></line>
          <text class="graph-mini-weight" x="210" y="62">4</text>
          <text class="graph-mini-weight" x="385" y="122">7</text>
          <text class="graph-mini-weight" x="183" y="172">2</text>
          <text class="graph-mini-weight" x="352" y="178">3</text>
          <text class="graph-mini-weight" x="512" y="142">5</text>
          <circle class="graph-mini-node start" cx="105" cy="105" r="24"></circle><text class="graph-mini-label" x="105" y="111">A</text>
          <circle class="graph-mini-node" cx="310" cy="66" r="24"></circle><text class="graph-mini-label" x="310" y="72">B</text>
          <circle class="graph-mini-node" cx="255" cy="194" r="24"></circle><text class="graph-mini-label" x="255" y="200">C</text>
          <circle class="graph-mini-node target" cx="455" cy="184" r="24"></circle><text class="graph-mini-label" x="455" y="190">D</text>
          <circle class="graph-mini-node" cx="540" cy="74" r="24"></circle><text class="graph-mini-label" x="540" y="80">E</text>
        </svg>
      </div>
    </section>

    <section class="section" aria-labelledby="konigsberg-title">
      <div class="section-heading">
        <p class="eyebrow">Classic Example</p>
        <h2 id="konigsberg-title">柯尼茲堡七橋問題</h2>
        <p>18 世紀的柯尼茲堡有七座橋連接四塊陸地。問題是：能否選一個起點，每座橋恰好走一次，最後走完全部橋梁？歐拉把地圖簡化成圖，開啟了 graph theory 的研究。</p>
      </div>
      <div class="definition-panel">
        <div class="konigsberg-grid">
          <figure class="konigsberg-figure">
            <figcaption>原始橋梁配置示意圖</figcaption>
            <svg class="konigsberg-map-svg" viewBox="0 0 620 300" role="img" aria-label="柯尼茲堡四塊陸地與七座橋配置示意圖">
              <rect class="konigsberg-water" width="620" height="300"></rect>
              <path class="konigsberg-land" d="M0,0 H620 V78 C520,68 452,75 374,92 C300,108 228,96 156,78 C96,63 48,66 0,82 Z"></path>
              <path class="konigsberg-land" d="M0,216 C72,230 136,220 192,205 C258,187 315,194 382,212 C470,236 537,225 620,214 V300 H0 Z"></path>
              <path class="konigsberg-land island" d="M164,121 C221,92 307,100 364,122 C397,135 397,169 361,181 C296,202 218,195 166,174 C135,162 135,137 164,121 Z"></path>
              <path class="konigsberg-land island" d="M447,111 C491,92 561,101 594,124 C615,139 613,162 590,177 C551,199 488,197 449,177 C420,162 420,127 447,111 Z"></path>
              <g class="konigsberg-bridges">
                <rect x="185" y="79" width="20" height="57" transform="rotate(-24 195 108)"></rect>
                <rect x="287" y="86" width="20" height="47" transform="rotate(9 297 110)"></rect>
                <rect x="193" y="170" width="20" height="55" transform="rotate(24 203 198)"></rect>
                <rect x="292" y="174" width="20" height="43" transform="rotate(-10 302 196)"></rect>
                <rect x="380" y="141" width="62" height="20"></rect>
                <rect x="470" y="76" width="20" height="49" transform="rotate(19 480 100)"></rect>
                <rect x="480" y="175" width="20" height="50" transform="rotate(-19 490 200)"></rect>
              </g>
              <text class="konigsberg-map-label" x="310" y="42">北岸 N</text>
              <text class="konigsberg-map-label" x="310" y="270">南岸 S</text>
              <text class="konigsberg-map-label island" x="270" y="153">Kneiphof K</text>
              <text class="konigsberg-map-label island" x="520" y="153">Lomse L</text>
            </svg>
          </figure>
          <figure class="konigsberg-figure">
            <figcaption>抽象成 multigraph</figcaption>
            <svg class="graph-mini-svg" viewBox="0 0 620 300" role="img" aria-label="柯尼茲堡七橋問題抽象圖">
              <path class="graph-mini-edge" d="M303,68 C235,48 168,74 127,132"></path>
              <path class="graph-mini-edge" d="M303,68 C240,104 190,128 129,148"></path>
              <path class="graph-mini-edge" d="M303,230 C234,251 170,221 127,168"></path>
              <path class="graph-mini-edge" d="M303,230 C238,195 188,174 129,154"></path>
              <line class="graph-mini-edge" x1="135" y1="150" x2="470" y2="150"></line>
              <path class="graph-mini-edge" d="M512,126 C475,56 406,42 342,66"></path>
              <path class="graph-mini-edge" d="M512,170 C472,239 405,251 342,232"></path>
              <circle class="graph-mini-node start" cx="105" cy="150" r="30"></circle>
              <text class="graph-mini-label" x="105" y="156">K</text>
              <circle class="graph-mini-node" cx="325" cy="62" r="30"></circle>
              <text class="graph-mini-label" x="325" y="68">N</text>
              <circle class="graph-mini-node target" cx="325" cy="238" r="30"></circle>
              <text class="graph-mini-label" x="325" y="244">S</text>
              <circle class="graph-mini-node" cx="500" cy="150" r="30"></circle>
              <text class="graph-mini-label" x="500" y="156">L</text>
              <text class="graph-mini-weight" x="105" y="202">Kneiphof：degree 5</text>
              <text class="graph-mini-weight" x="325" y="22">北岸 N：degree 3</text>
              <text class="graph-mini-weight" x="325" y="286">南岸 S：degree 3</text>
              <text class="graph-mini-weight" x="500" y="202">Lomse：degree 3</text>
              <text class="konigsberg-edge-summary" x="310" y="178">K-N x 2、K-S x 2、K-L、N-L、S-L</text>
            </svg>
          </figure>
        </div>
        <div class="insight-box">
          <strong>建模：</strong>四塊陸地是 vertices，七座橋是 edges。同一對陸地之間可以有多座橋，因此這是一個 multigraph。<br>
          <strong>判斷：</strong>若要每條 edge 恰好走一次，途中每次進入一個頂點，通常也必須由另一條 edge 離開。Euler circuit 要求所有頂點 degree 都是偶數；Euler trail 則最多只能有兩個奇數 degree 頂點。柯尼茲堡的四個頂點 degree 分別為 5、3、3、3，全都是奇數，因此無法一次走完七座橋。
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="graph-terms-title">
      <div class="section-heading">
        <p class="eyebrow">Terminology</p>
        <h2 id="graph-terms-title">Graph 名詞整理</h2>
    <p>先把名詞建立起來，後面談表示法與演算法時才不會混淆。每張卡片都附有具體例子；閱讀時先分辨圖是否有方向、邊是否帶權重，再確認路徑、連通與生成樹等概念。</p>
      </div>
      <div class="term-grid">${graphTermsTemplate()}</div>
    </section>

    <section class="section" aria-labelledby="graph-adt-title">
      <div class="section-heading">
        <p class="eyebrow">Graph ADT</p>
        <h2 id="graph-adt-title">Graph 抽象資料型態</h2>
        <p>Graph ADT 的重點不是畫圖，而是定義「可以對圖做什麼操作」。實作時再決定用相鄰矩陣、相鄰串列或其他結構。</p>
      </div>
      <div class="chapter-layout">
        <article class="chapter-panel">
          <h3>常見操作</h3>
          <ul>
            <li><strong>create_graph(n)</strong>：建立 n 個頂點的圖。</li>
            <li><strong>add_edge(u, v, w)</strong>：加入 u 到 v 的邊，可選擇權重 w。</li>
            <li><strong>remove_edge(u, v)</strong>：移除指定邊。</li>
            <li><strong>adjacent(u, v)</strong>：查詢 u 與 v 是否相鄰。</li>
            <li><strong>neighbors(u)</strong>：列出 u 的所有鄰居。</li>
            <li><strong>traverse(start)</strong>：從 start 進行 BFS 或 DFS。</li>
          </ul>
        </article>
        <article class="chapter-panel">
          <h3>表示法選擇</h3>
          <ul>
            <li>頂點數少且邊密集：相鄰矩陣簡單，查詢 edge 是否存在是 O(1)。</li>
            <li>頂點多但邊稀疏：相鄰串列較省空間，列出鄰居更有效率。</li>
            <li>有權重：矩陣可存權重，串列節點可多一個 weight 欄位。</li>
            <li>有向圖：只存 u 到 v；無向圖：u 到 v 與 v 到 u 都要存。</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="section" aria-labelledby="graph-representations-title">
      <div class="section-heading">
        <p class="eyebrow">Representations in C</p>
        <h2 id="graph-representations-title">圖的 C 語言表示法</h2>
        <p>教材中強調圖的表示法會直接影響空間與操作成本。以下用標準 C 呈現相鄰矩陣與相鄰串列的核心結構。</p>
      </div>
      <div class="graph-material-grid">
        <div class="lesson-column">
          <article class="lesson-block">
            <h4>相鄰矩陣 Adjacency Matrix</h4>
            <p>使用 n x n 陣列。若 edge (i, j) 存在，matrix[i][j] 可設為 1 或權重；不存在則為 0 或 INF。</p>
            <ul>
              <li>空間：O(|V|²)</li>
              <li>查 edge 是否存在：O(1)</li>
              <li>列出某頂點所有鄰居：O(|V|)</li>
            </ul>
          </article>
          <article class="lesson-block">
            <h4>相鄰串列 Adjacency List</h4>
            <p>每個頂點保存一條 linked list，串列中的節點代表它連到的鄰居。</p>
            <ul>
              <li>空間：O(|V| + |E|)</li>
              <li>適合 sparse graph</li>
              <li>列出某頂點鄰居：O(degree(v))</li>
            </ul>
          </article>
        </div>
        <article class="graph-code-panel">
          <h3>標準 C：相鄰串列</h3>
          <pre><code class="language-c">#include &lt;stdlib.h&gt;

typedef struct EdgeNode {
    int to;
    int weight;
    struct EdgeNode *next;
} EdgeNode;

typedef struct Graph {
    int vertices;
    int directed;
    EdgeNode **heads;
} Graph;

Graph *create_graph(int vertices, int directed) {
    Graph *g = malloc(sizeof(Graph));
    if (g == NULL) return NULL;

    g-&gt;vertices = vertices;
    g-&gt;directed = directed;
    g-&gt;heads = calloc((size_t)vertices, sizeof(EdgeNode *));
    if (g-&gt;heads == NULL) {
        free(g);
        return NULL;
    }
    return g;
}

static int insert_edge_node(Graph *g, int from, int to, int weight) {
    EdgeNode *node = malloc(sizeof(EdgeNode));
    if (node == NULL) return 0;

    node-&gt;to = to;
    node-&gt;weight = weight;
    node-&gt;next = g-&gt;heads[from];
    g-&gt;heads[from] = node;
    return 1;
}

int add_edge(Graph *g, int from, int to, int weight) {
    if (from &lt; 0 || from &gt;= g-&gt;vertices) return 0;
    if (to &lt; 0 || to &gt;= g-&gt;vertices) return 0;

    if (!insert_edge_node(g, from, to, weight)) return 0;
    if (!g-&gt;directed) {
        if (!insert_edge_node(g, to, from, weight)) return 0;
    }
    return 1;
}</code></pre>
        </article>
      </div>
    </section>

    <section class="section" aria-labelledby="graph-algorithms-title">
      <div class="section-heading">
        <p class="eyebrow">Core Algorithms</p>
        <h2 id="graph-algorithms-title">核心演算法地圖</h2>
        <p>Graph 章節通常會從走訪開始，接著進入生成樹與路徑問題。關鍵在於每個演算法如何管理 frontier：佇列、堆疊、優先佇列或候選邊集合。</p>
      </div>
      <div class="teaching-grid">
        <article class="algorithm-card">
          <h3>BFS：Breadth-First Search</h3>
          <p>使用 queue，先拜訪距離起點 1 條邊的頂點，再拜訪距離 2 條邊的頂點。無權圖中可找到最少邊數路徑。</p>
          <div class="chapter-tags"><span>Queue</span><span>O(V + E)</span><span>Level Order</span></div>
        </article>
        <article class="algorithm-card">
          <h3>DFS：Depth-First Search</h3>
          <p>使用 recursion 或 stack，沿著一條路徑深入到底，再回溯。適合偵測 cycle、拓樸排序、連通分量。</p>
          <div class="chapter-tags"><span>Stack</span><span>O(V + E)</span><span>Backtracking</span></div>
        </article>
        <article class="algorithm-card">
          <h3>Dijkstra Shortest Path</h3>
          <p>處理非負權重圖。每次選目前距離最小且尚未固定的頂點，放鬆它的 outgoing edges。</p>
          <div class="chapter-tags"><span>Priority Queue</span><span>Nonnegative</span><span>Relaxation</span></div>
        </article>
        <article class="algorithm-card">
          <h3>Minimum Spanning Tree</h3>
          <p>在連通無向加權圖中，找出連接所有頂點且總權重最小的樹。Prim 從一個頂點擴張；Kruskal 依邊權重排序。</p>
          <div class="chapter-tags"><span>Prim</span><span>Kruskal</span><span>Greedy</span></div>
        </article>
      </div>
    </section>
  `;
}

function graphLabTemplate() {
  return `
    <section id="graphs" class="section lab-section" aria-labelledby="graphs-title">
      <div class="section-heading">
        <p class="eyebrow">Graph Lab</p>
        <h2 id="graphs-title">圖：表示法、走訪與路徑</h2>
        <p>圖的核心不是畫出節點，而是選擇表示法，並理解佇列、堆疊、權重與候選邊如何推動演算法。</p>
      </div>

      <div class="lab-grid graph-grid">
        <div class="visual-panel">
          <div class="toolbar" aria-label="圖演算法控制">
            <label class="field">
              <span>起點</span>
              <select id="graph-start">
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
                <option>F</option>
                <option>G</option>
              </select>
            </label>
            <button type="button" class="icon-btn primary" data-graph="bfs" title="廣度優先搜尋" aria-label="廣度優先搜尋">
              <i data-lucide="list-tree"></i>
              <span>BFS</span>
            </button>
            <button type="button" class="icon-btn" data-graph="dfs" title="深度優先搜尋" aria-label="深度優先搜尋">
              <i data-lucide="waypoints"></i>
              <span>DFS</span>
            </button>
            <button type="button" class="icon-btn" data-graph="dijkstra" title="Dijkstra 最短路徑" aria-label="Dijkstra 最短路徑">
              <i data-lucide="route"></i>
              <span>Dijkstra</span>
            </button>
            <button type="button" class="icon-btn" data-graph="mst" title="Prim 最小生成樹" aria-label="Prim 最小生成樹">
              <i data-lucide="network"></i>
              <span>MST</span>
            </button>
            <button type="button" class="icon-btn" id="graph-step" title="下一步" aria-label="下一步">
              <i data-lucide="step-forward"></i>
              <span>一步</span>
            </button>
          </div>

          <svg id="graph-svg" class="graph-surface" role="img" aria-label="加權無向圖"></svg>
          <div class="metric-row" aria-label="圖指標">
            <div><strong id="graph-step-count">0 / 0</strong><span>步驟</span></div>
            <div><strong id="graph-frontier">-</strong><span>Frontier</span></div>
            <div><strong id="graph-visited">-</strong><span>Visited</span></div>
            <div><strong id="graph-total">-</strong><span>成本</span></div>
          </div>
        </div>

        <div class="analysis-panel">
          <h3>表示法比較</h3>
          <div class="representation-toggle" role="tablist" aria-label="圖表示法">
            <button type="button" class="tab active" data-rep="list">Adjacency List</button>
            <button type="button" class="tab" data-rep="matrix">Matrix</button>
          </div>
          <div id="graph-representation" class="representation-output"></div>
          <div class="insight-box" id="graph-note">BFS 使用佇列，適合無權圖最短邊數；Dijkstra 處理非負權重。</div>
        </div>
      </div>
    </section>
  `;
}

function basicConceptsMaterialsTemplate() {
  return `
    <section class="section" aria-labelledby="basic-map-title">
      <div class="section-heading">
        <p class="eyebrow">Foundation Map</p>
        <h2 id="basic-map-title">資料結構的三層語言</h2>
        <p>Basic Concepts 不是背名詞，而是建立之後每一章都會用到的判斷框架：先說清楚抽象行為，再選擇表示法，最後用演算法成本與 C 語言邊界條件檢查設計是否可靠。</p>
      </div>
      <div class="teaching-grid">
        <article class="algorithm-card">
          <h3>Abstract Data Type</h3>
          <p>ADT 描述資料集合與可用操作，例如 List 的 insert、delete、retrieve。它刻意不承諾內部用陣列、串列或其他表示法。</p>
          <div class="chapter-tags"><span>Interface</span><span>Behavior</span><span>Contract</span></div>
        </article>
        <article class="algorithm-card">
          <h3>Representation</h3>
          <p>表示法把 ADT 落在記憶體上。相同 List ADT 可用 contiguous array 或 linked nodes，兩者的搜尋、插入、空間彈性都不同。</p>
          <div class="chapter-tags"><span>Array</span><span>Pointer</span><span>Struct</span></div>
        </article>
        <article class="algorithm-card">
          <h3>Algorithm</h3>
          <p>演算法是操作的步驟。好的教材描述會同時寫出輸入、輸出、前置條件、後置條件與在迴圈中維持的不變量。</p>
          <div class="chapter-tags"><span>Precondition</span><span>Invariant</span><span>Postcondition</span></div>
        </article>
        <article class="algorithm-card">
          <h3>Complexity</h3>
          <p>成本分析忽略常數與機器細節，關注資料規模放大後的成長率。它協助我們比較可伸縮性，而不是只看小資料的秒數。</p>
          <div class="chapter-tags"><span>Time</span><span>Space</span><span>Growth</span></div>
        </article>
      </div>
    </section>

    <section class="section" aria-labelledby="adt-title">
      <div class="section-heading">
        <p class="eyebrow">ADT Contract</p>
        <h2 id="adt-title">從規格到實作</h2>
        <p>課程中的每一個容器都可以用同一種讀法拆開：外部看得到的操作、內部保存資料的方式，以及測試時必須覆蓋的邊界條件。</p>
      </div>
      <div class="lesson-layout">
        <div class="lesson-column">
          <article class="lesson-block">
            <h4>規格範例：List ADT</h4>
            <ol>
              <li><code>create()</code> 建立空 list。</li>
              <li><code>insert(pos, item)</code> 在合法位置插入資料。</li>
              <li><code>delete(pos)</code> 移除指定位置並回傳資料。</li>
              <li><code>retrieve(pos)</code> 查詢資料但不改變 list。</li>
            </ol>
          </article>
          <article class="lesson-block">
            <h4>規格應該說清楚什麼</h4>
            <ul>
              <li>合法輸入範圍，例如 <code>0 <= pos <= length</code>。</li>
              <li>操作成功後資料結構應滿足的狀態。</li>
              <li>錯誤情境的回傳方式，例如容量不足或位置越界。</li>
            </ul>
          </article>
        </div>
        <div class="lesson-column">
          <article class="lesson-block">
            <h4>表示法選擇</h4>
            <p>Array list 用索引快速讀取，但中間插入要搬移元素；linked list 中間插入只調整指標，但必須先走訪到目標節點。</p>
          </article>
          <article class="lesson-block">
            <h4>不變量</h4>
            <p>不變量是操作前後都應保持為真的規則，例如 <code>0 <= length <= capacity</code>、head 指向第一個節點、tail 的 next 為 NULL。</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="complexity-title">
      <div class="section-heading">
        <p class="eyebrow">Cost Model</p>
        <h2 id="complexity-title">成長率與 Big-O</h2>
        <p>Big-O 描述上界成長率。分析時先找出基本操作，再觀察它執行次數如何隨 n 變化；常數、低階項與硬體差異先放到第二層討論。</p>
      </div>
      <div class="analysis-panel">
        <table class="comparison-table">
          <thead>
            <tr>
              <th>成長率</th>
              <th>常見來源</th>
              <th>n = 1,000 時的直覺</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>O(1)</code></td>
              <td>陣列索引、stack top</td>
              <td>資料變大，步數仍大致固定。</td>
            </tr>
            <tr>
              <td><code>O(log n)</code></td>
              <td>每次折半，例如 binary search</td>
              <td>約 10 次比較可縮到單一位置。</td>
            </tr>
            <tr>
              <td><code>O(n)</code></td>
              <td>掃描陣列或串列</td>
              <td>最多看 1,000 個元素。</td>
            </tr>
            <tr>
              <td><code>O(n log n)</code></td>
              <td>merge sort、heap sort</td>
              <td>約一萬級別的比較，通常可接受。</td>
            </tr>
            <tr>
              <td><code>O(n²)</code></td>
              <td>兩層巢狀迴圈、簡單排序</td>
              <td>約一百萬次，n 再放大會很快變慢。</td>
            </tr>
          </tbody>
        </table>
        <div class="insight-box">分析遞迴時可先寫 recurrence：binary search 是 T(n) = T(n/2) + O(1)，merge sort 是 T(n) = 2T(n/2) + O(n)。</div>
      </div>
    </section>

    <section class="section" aria-labelledby="recursion-title">
      <div class="section-heading">
        <p class="eyebrow">Recursion And Iteration</p>
        <h2 id="recursion-title">遞迴、迭代與系統堆疊</h2>
        <p>遞迴讓程式貼近問題定義，但每一次呼叫都會使用 call stack 保存區域變數與返回位置。能否改成迭代，取決於狀態是否能用變數或明確的 stack 保存。</p>
      </div>
      <div class="code-grid">
        <article class="code-panel">
          <h3>Recursive factorial</h3>
          <pre><code>int factorial_recursive(int n) {
    if (n < 0) return -1;
    if (n == 0) return 1;
    return n * factorial_recursive(n - 1);
}</code></pre>
        </article>
        <article class="code-panel">
          <h3>Iterative factorial</h3>
          <pre><code>int factorial_iterative(int n) {
    if (n < 0) return -1;

    int result = 1;
    for (int i = 2; i <= n; ++i) {
        result *= i;
    }
    return result;
}</code></pre>
        </article>
      </div>
    </section>

    <section class="section" aria-labelledby="memory-title">
      <div class="section-heading">
        <p class="eyebrow">C Memory Discipline</p>
        <h2 id="memory-title">指標與動態配置的基本紀律</h2>
        <p>資料結構在 C 裡通常會碰到 pointer ownership。只要有 <code>malloc</code>，就要決定誰負責檢查配置失敗、誰負責釋放，以及釋放後指標是否還會被使用。</p>
      </div>
      <div class="code-grid">
        <article class="code-panel">
          <h3>Safe dynamic array</h3>
          <pre><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int *create_scores(int count) {
    if (count <= 0) return NULL;

    int *scores = malloc(sizeof(int) * count);
    if (scores == NULL) {
        return NULL;
    }

    for (int i = 0; i < count; ++i) {
        scores[i] = 0;
    }
    return scores;
}</code></pre>
        </article>
        <article class="code-panel">
          <h3>Use and release</h3>
          <pre><code>int main(void) {
    int n = 5;
    int *scores = create_scores(n);
    if (scores == NULL) {
        fprintf(stderr, "allocation failed\\n");
        return 1;
    }

    scores[0] = 95;
    free(scores);
    scores = NULL;
    return 0;
}</code></pre>
        </article>
      </div>
    </section>
  `;
}

function arraysStructuresMaterialsTemplate() {
  return `
    <section class="section" aria-labelledby="array-map-title">
      <div class="section-heading">
        <p class="eyebrow">Contiguous Memory</p>
        <h2 id="array-map-title">陣列與結構的核心問題</h2>
        <p>Arrays and Structures 章節把資料放進連續記憶體與固定欄位紀錄中。重點不只是語法，而是位址如何計算、資料如何壓縮，以及何時需要用 structure 表示更複雜的關係。</p>
      </div>
      <div class="teaching-grid">
        <article class="algorithm-card">
          <h3>Array</h3>
          <p>陣列把同型別元素連續排列，索引可直接轉成位址，因此讀寫 <code>a[i]</code> 是 O(1)。代價是容量固定或需要重新配置。</p>
          <div class="chapter-tags"><span>Index</span><span>O(1)</span><span>Capacity</span></div>
        </article>
        <article class="algorithm-card">
          <h3>Structure</h3>
          <p>Structure 把不同欄位打包成一筆紀錄，例如多項式項次的 coefficient 與 exponent。資料結構常用它建立節點與表格列。</p>
          <div class="chapter-tags"><span>Record</span><span>Field</span><span>Node</span></div>
        </article>
        <article class="algorithm-card">
          <h3>String</h3>
          <p>C 字串是以 <code>\\0</code> 結尾的 char array。處理字串時必須同時保存容量、長度與終止字元空間。</p>
          <div class="chapter-tags"><span>char[]</span><span>Length</span><span>Terminator</span></div>
        </article>
        <article class="algorithm-card">
          <h3>Sparse Data</h3>
          <p>稀疏矩陣與多項式都適合只保存非零或存在的項目，避免用大量 0 浪費空間。</p>
          <div class="chapter-tags"><span>Tuple</span><span>Polynomial</span><span>Compression</span></div>
        </article>
      </div>
    </section>

    <section class="section" aria-labelledby="row-major-title">
      <div class="section-heading">
        <p class="eyebrow">Address Calculation</p>
        <h2 id="row-major-title">Row-major 位址計算</h2>
        <p>C 的二維陣列採 row-major order：同一列的元素連續擺放。若 <code>A</code> 是 <code>rows x cols</code> 的 int array，<code>A[i][j]</code> 的位移是 <code>i * cols + j</code> 個元素。</p>
      </div>
      <div class="analysis-panel">
        <div class="mini-array">
          <span class="cell sorted">A[0][0]</span><span class="cell sorted">A[0][1]</span><span class="cell sorted">A[0][2]</span>
          <span class="cell active">A[1][0]</span><span class="cell active">A[1][1]</span><span class="cell active">A[1][2]</span>
          <span class="cell compare">A[2][0]</span><span class="cell compare">A[2][1]</span><span class="cell compare">A[2][2]</span>
        </div>
        <div class="insight-box">若 base address 是 B、每個元素大小是 w，則 <code>address(A[i][j]) = B + ((i * cols) + j) * w</code>。這也是為什麼依列掃描通常比依欄掃描更符合 cache locality。</div>
      </div>
    </section>

    <section class="section" aria-labelledby="sparse-title">
      <div class="section-heading">
        <p class="eyebrow">Sparse Matrix</p>
        <h2 id="sparse-title">稀疏矩陣三元組表示法</h2>
        <p>當矩陣多數元素是 0，使用完整二維陣列會浪費空間。三元組只保存 row、column、value，通常再加上第一列描述矩陣大小與非零項數。</p>
      </div>
      <div class="lesson-layout">
        <article class="lesson-block">
          <h4>原矩陣</h4>
          <table class="comparison-table">
            <tbody>
              <tr><td>0</td><td>0</td><td>15</td><td>0</td></tr>
              <tr><td>0</td><td>22</td><td>0</td><td>0</td></tr>
              <tr><td>-3</td><td>0</td><td>0</td><td>7</td></tr>
            </tbody>
          </table>
        </article>
        <article class="lesson-block">
          <h4>Triples</h4>
          <table class="comparison-table">
            <thead><tr><th>row</th><th>col</th><th>value</th></tr></thead>
            <tbody>
              <tr><td>3</td><td>4</td><td>4</td></tr>
              <tr><td>0</td><td>2</td><td>15</td></tr>
              <tr><td>1</td><td>1</td><td>22</td></tr>
              <tr><td>2</td><td>0</td><td>-3</td></tr>
              <tr><td>2</td><td>3</td><td>7</td></tr>
            </tbody>
          </table>
        </article>
      </div>
    </section>

    <section class="section" aria-labelledby="array-code-title">
      <div class="section-heading">
        <p class="eyebrow">Standard C</p>
        <h2 id="array-code-title">動態陣列與稀疏矩陣 C 範例</h2>
        <p>實作時要把容量、長度與資料指標包在同一個 structure 裡，讓操作函式能檢查邊界並維持不變量。</p>
      </div>
      <div class="code-grid">
        <article class="code-panel">
          <h3>Dynamic integer array</h3>
          <pre><code>#include &lt;stdlib.h&gt;

typedef struct {
    int *data;
    int length;
    int capacity;
} IntArray;

int init_array(IntArray *a, int capacity) {
    if (capacity <= 0) return 0;
    a-&gt;data = malloc(sizeof(int) * capacity);
    if (a-&gt;data == NULL) return 0;
    a-&gt;length = 0;
    a-&gt;capacity = capacity;
    return 1;
}

int append(IntArray *a, int value) {
    if (a-&gt;length == a-&gt;capacity) return 0;
    a-&gt;data[a-&gt;length++] = value;
    return 1;
}</code></pre>
        </article>
        <article class="code-panel">
          <h3>Sparse matrix triple</h3>
          <pre><code>typedef struct {
    int row;
    int col;
    int value;
} Term;

typedef struct {
    int rows;
    int cols;
    int terms;
    Term data[100];
} SparseMatrix;

void add_term(SparseMatrix *m, int r, int c, int v) {
    if (v == 0 || m-&gt;terms >= 100) return;
    m-&gt;data[m-&gt;terms].row = r;
    m-&gt;data[m-&gt;terms].col = c;
    m-&gt;data[m-&gt;terms].value = v;
    ++m-&gt;terms;
}</code></pre>
        </article>
      </div>
    </section>

    <section class="section" aria-labelledby="polynomial-title">
      <div class="section-heading">
        <p class="eyebrow">Polynomial Representation</p>
        <h2 id="polynomial-title">多項式表示法</h2>
        <p>多項式若用完整陣列保存每一個次方，適合最高次方不大且項目密集的資料；若缺項很多，用 term array 只保存非零係數更省空間。</p>
      </div>
      <div class="teaching-grid">
        <article class="algorithm-card">
          <h3>Dense representation</h3>
          <p><code>coef[i]</code> 保存 x 的 i 次方係數。加法容易，直接逐格相加；但最高次方很大且多數係數為 0 時浪費空間。</p>
          <div class="chapter-tags"><span>Fast Access</span><span>Simple Add</span></div>
        </article>
        <article class="algorithm-card">
          <h3>Sparse representation</h3>
          <p>每個 term 保存 coefficient 與 exponent，依 exponent 排序。加法像 merge：同次方合併，不同次方複製到結果。</p>
          <div class="chapter-tags"><span>Term Array</span><span>Merge</span></div>
        </article>
      </div>
    </section>
  `;
}

function basicConceptsSupplementTemplate() {
  return `
    <section class="section" aria-labelledby="big-o-visual-title">
      <div class="section-heading">
        <p class="eyebrow">Growth Curve</p>
        <h2 id="big-o-visual-title">Big-O 視覺曲線與追蹤題</h2>
        <p>同一台電腦上，小 n 可能看不出差距；但 n 擴大時，成長率會主導執行時間。下表用估算步數提醒學生不要只靠直覺選資料結構。</p>
      </div>
      <div class="analysis-panel">
        <table class="comparison-table">
          <thead><tr><th>n</th><th>log n</th><th>n</th><th>n log n</th><th>n²</th></tr></thead>
          <tbody>
            <tr><td>10</td><td>4</td><td>10</td><td>40</td><td>100</td></tr>
            <tr><td>1,000</td><td>10</td><td>1,000</td><td>10,000</td><td>1,000,000</td></tr>
            <tr><td>1,000,000</td><td>20</td><td>1,000,000</td><td>20,000,000</td><td>10¹²</td></tr>
          </tbody>
        </table>
        <div class="lesson-layout">
          <article class="lesson-block">
            <h4>迴圈追蹤題</h4>
            <ol>
              <li>單層迴圈每次 i 加 1，執行次數通常是 O(n)。</li>
              <li>巢狀迴圈 i 與 j 都跑 n 次，總次數是 O(n²)。</li>
              <li>每次 i 乘 2，次數是 O(log n)。</li>
            </ol>
          </article>
          <article class="lesson-block">
            <h4>ADT 測試案例</h4>
            <ul>
              <li>空容器 pop/delete 應回報 underflow 或錯誤狀態。</li>
              <li>滿容量 insert 應回報 overflow 或觸發擴容。</li>
              <li>插入第一個、最後一個與中間位置都要檢查不變量。</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  `;
}

function arraysStructuresSupplementTemplate() {
  return `
    <section class="section" aria-labelledby="string-title">
      <div class="section-heading">
        <p class="eyebrow">String Safety</p>
        <h2 id="string-title">字串容量與終止字元</h2>
        <p>C 字串必須保留一格給終止字元。複製或串接時要以 buffer capacity 為準，而不是只看來源字串長度。</p>
      </div>
      <div class="code-grid">
        <article class="code-panel">
          <h3>Bounded copy</h3>
          <pre><code>#include &lt;stddef.h&gt;

int copy_string(char dest[], size_t cap, const char src[]) {
    if (cap == 0) return 0;

    size_t i = 0;
    while (i + 1 &lt; cap && src[i] != '\\0') {
        dest[i] = src[i];
        ++i;
    }
    dest[i] = '\\0';
    return src[i] == '\\0';
}</code></pre>
        </article>
        <article class="code-panel">
          <h3>Polynomial add</h3>
          <pre><code>typedef struct { int coef; int exp; } PolyTerm;

int add_poly(const PolyTerm a[], int na,
             const PolyTerm b[], int nb,
             PolyTerm out[]) {
    int i = 0, j = 0, k = 0;
    while (i &lt; na && j &lt; nb) {
        if (a[i].exp == b[j].exp) {
            int c = a[i].coef + b[j].coef;
            if (c != 0) out[k++] = (PolyTerm){c, a[i].exp};
            ++i; ++j;
        } else if (a[i].exp &gt; b[j].exp) {
            out[k++] = a[i++];
        } else {
            out[k++] = b[j++];
        }
    }
    while (i &lt; na) out[k++] = a[i++];
    while (j &lt; nb) out[k++] = b[j++];
    return k;
}</code></pre>
        </article>
      </div>
    </section>

    <section class="section" aria-labelledby="sparse-code-title">
      <div class="section-heading">
        <p class="eyebrow">Sparse Operations</p>
        <h2 id="sparse-code-title">稀疏矩陣 transpose 與 add</h2>
        <p>Transpose 可依 column 掃描原三元組，把 row/col 對調；add 則像 merge sorted lists，依 row-major 順序合併同位置項目。</p>
      </div>
      <div class="code-grid">
        <article class="code-panel">
          <h3>Simple transpose</h3>
          <pre><code>void transpose(const SparseMatrix *a, SparseMatrix *b) {
    b-&gt;rows = a-&gt;cols;
    b-&gt;cols = a-&gt;rows;
    b-&gt;terms = 0;

    for (int c = 0; c &lt; a-&gt;cols; ++c) {
        for (int i = 0; i &lt; a-&gt;terms; ++i) {
            if (a-&gt;data[i].col == c) {
                add_term(b, a-&gt;data[i].col, a-&gt;data[i].row,
                         a-&gt;data[i].value);
            }
        }
    }
}</code></pre>
        </article>
        <article class="code-panel">
          <h3>Add strategy</h3>
          <pre><code>int term_order(Term t) {
    return t.row * 10000 + t.col;
}

/* 若 data 已依 row-major 排序：
   1. 較小位置直接複製到結果
   2. 相同位置加總
   3. 加總為 0 時不輸出該 term */</code></pre>
        </article>
      </div>
    </section>
  `;
}

function stacksQueuesMaterialsTemplate() {
  return `
    <section class="section" aria-labelledby="stack-queue-title">
      <div class="section-heading">
        <p class="eyebrow">Linear Containers</p>
        <h2 id="stack-queue-title">Stack 與 Queue 的操作圖像</h2>
        <p>Stack 是 LIFO，最新放入的資料最先移除；Queue 是 FIFO，最早等待的資料最先移除。兩者常被用來控制演算法的探索順序。</p>
      </div>
      <div class="teaching-grid">
        <article class="algorithm-card">
          <h3>Stack ADT</h3>
          <p><code>push</code> 放入 top，<code>pop</code> 從 top 移除。適合括號配對、表示式處理、遞迴模擬與 DFS。</p>
          <div class="mini-array"><span class="cell">12</span><span class="cell">18</span><span class="cell active">top 31</span></div>
          <div class="chapter-tags"><span>LIFO</span><span>DFS</span><span>Call Stack</span></div>
        </article>
        <article class="algorithm-card">
          <h3>Queue ADT</h3>
          <p><code>enqueue</code> 從 rear 加入，<code>dequeue</code> 從 front 移除。適合排程、buffer 與 BFS。</p>
          <div class="mini-array"><span class="cell compare">front 8</span><span class="cell">14</span><span class="cell active">rear 27</span></div>
          <div class="chapter-tags"><span>FIFO</span><span>BFS</span><span>Scheduling</span></div>
        </article>
        <article class="algorithm-card">
          <h3>Circular Queue</h3>
          <p>用 <code>(index + 1) % capacity</code> 讓 rear/front 繞回陣列開頭，避免 dequeue 後前方空間無法再用。</p>
          <div class="chapter-tags"><span>Modulo</span><span>Wrap</span><span>Size</span></div>
        </article>
        <article class="algorithm-card">
          <h3>Expression Evaluation</h3>
          <p>Infix 轉 postfix 時，operand 直接輸出，operator 依優先權與括號進出 stack；postfix evaluation 再用 stack 保存中間值。</p>
          <div class="chapter-tags"><span>Infix</span><span>Postfix</span><span>Precedence</span></div>
        </article>
      </div>
    </section>

    <section class="section" aria-labelledby="stack-code-title">
      <div class="section-heading">
        <p class="eyebrow">Standard C</p>
        <h2 id="stack-code-title">Stack 與循環佇列 C 程式</h2>
        <p>固定容量版本適合課堂練習，重點是清楚處理 overflow、underflow 與 wrap-around。</p>
      </div>
      <div class="code-grid">
        <article class="code-panel">
          <h3>Array stack</h3>
          <pre><code>#define MAX_STACK 100

typedef struct {
    int data[MAX_STACK];
    int top;
} Stack;

void init_stack(Stack *s) { s-&gt;top = -1; }
int is_empty(const Stack *s) { return s-&gt;top == -1; }
int is_full(const Stack *s) { return s-&gt;top == MAX_STACK - 1; }

int push(Stack *s, int value) {
    if (is_full(s)) return 0;
    s-&gt;data[++s-&gt;top] = value;
    return 1;
}

int pop(Stack *s, int *out) {
    if (is_empty(s)) return 0;
    *out = s-&gt;data[s-&gt;top--];
    return 1;
}</code></pre>
        </article>
        <article class="code-panel">
          <h3>Circular queue</h3>
          <pre><code>#define MAX_QUEUE 100

typedef struct {
    int data[MAX_QUEUE];
    int front;
    int rear;
    int size;
} Queue;

void init_queue(Queue *q) {
    q-&gt;front = 0; q-&gt;rear = 0; q-&gt;size = 0;
}

int enqueue(Queue *q, int value) {
    if (q-&gt;size == MAX_QUEUE) return 0;
    q-&gt;data[q-&gt;rear] = value;
    q-&gt;rear = (q-&gt;rear + 1) % MAX_QUEUE;
    ++q-&gt;size;
    return 1;
}

int dequeue(Queue *q, int *out) {
    if (q-&gt;size == 0) return 0;
    *out = q-&gt;data[q-&gt;front];
    q-&gt;front = (q-&gt;front + 1) % MAX_QUEUE;
    --q-&gt;size;
    return 1;
}</code></pre>
        </article>
      </div>
    </section>

    <section class="section" aria-labelledby="expression-title">
      <div class="section-heading">
        <p class="eyebrow">Expression Lab Notes</p>
        <h2 id="expression-title">Infix / Postfix 與 Maze BFS</h2>
        <p>Stack 解決巢狀結構，Queue 解決層次擴張。這就是為什麼 postfix evaluation 需要 stack，而無權迷宮最短步數會使用 BFS queue。</p>
      </div>
      <div class="lesson-layout">
        <article class="lesson-block">
          <h4>Infix to postfix</h4>
          <p><code>A * (B + C) - D</code> 轉成 <code>A B C + * D -</code>。括號內先處理，乘法優先於減法。</p>
        </article>
        <article class="lesson-block">
          <h4>Maze BFS</h4>
          <p>從起點 enqueue，反覆 dequeue 一格並 enqueue 尚未拜訪的鄰格。第一次到達終點時，即為最少邊數路徑。</p>
        </article>
      </div>
    </section>
  `;
}

function linkedListsMaterialsTemplate() {
  return `
    <section class="section" aria-labelledby="list-types-title">
      <div class="section-heading">
        <p class="eyebrow">Linked Representation</p>
        <h2 id="list-types-title">串列節點與變形</h2>
        <p>Linked list 用指標保存順序，不要求元素在記憶體中連續。它的優勢是局部插入刪除，代價是無法 O(1) 隨機存取。</p>
      </div>
      <div class="teaching-grid">
        <article class="algorithm-card">
          <h3>Singly linked list</h3>
          <p>每個節點只有 <code>next</code>。插入刪除時要保存前一個節點，否則無法改掉前驅的 next。</p>
          <div class="mini-array"><span class="cell">head</span><span class="diagram-arrow">-&gt;</span><span class="cell">12</span><span class="diagram-arrow">-&gt;</span><span class="cell">31</span><span class="diagram-arrow">-&gt; NULL</span></div>
        </article>
        <article class="algorithm-card">
          <h3>Circular list</h3>
          <p>最後一個節點指回第一個節點，適合輪替問題與 queue。走訪時必須知道停止條件，避免無限迴圈。</p>
          <div class="chapter-tags"><span>tail-&gt;next=head</span><span>Josephus</span></div>
        </article>
        <article class="algorithm-card">
          <h3>Doubly linked list</h3>
          <p>每個節點有 <code>prev</code> 與 <code>next</code>，可雙向走訪，但每次插入刪除都要同步維護兩邊連結。</p>
          <div class="chapter-tags"><span>prev</span><span>next</span><span>Bidirectional</span></div>
        </article>
        <article class="algorithm-card">
          <h3>Header node</h3>
          <p>Header node 不存有效資料，用來統一空串列、插入第一個節點與刪除第一個節點的程式流程。</p>
          <div class="chapter-tags"><span>Sentinel</span><span>Boundary</span></div>
        </article>
      </div>
    </section>

    <section class="section" aria-labelledby="list-pointer-title">
      <div class="section-heading">
        <p class="eyebrow">Pointer Trace</p>
        <h2 id="list-pointer-title">插入刪除指標追蹤</h2>
        <p>串列題目最容易錯在更新順序。插入時先讓新節點接上後半段，再讓前驅指向新節點；刪除時先保存被刪節點，再接回前後段。</p>
      </div>
      <div class="code-grid">
        <article class="code-panel">
          <h3>Singly linked node</h3>
          <pre><code>#include &lt;stdlib.h&gt;

typedef struct Node {
    int data;
    struct Node *next;
} Node;

Node *insert_after(Node *prev, int value) {
    if (prev == NULL) return NULL;
    Node *node = malloc(sizeof(Node));
    if (node == NULL) return NULL;
    node-&gt;data = value;
    node-&gt;next = prev-&gt;next;
    prev-&gt;next = node;
    return node;
}</code></pre>
        </article>
        <article class="code-panel">
          <h3>Delete after</h3>
          <pre><code>int delete_after(Node *prev, int *out) {
    if (prev == NULL || prev-&gt;next == NULL) return 0;
    Node *victim = prev-&gt;next;
    *out = victim-&gt;data;
    prev-&gt;next = victim-&gt;next;
    free(victim);
    return 1;
}</code></pre>
        </article>
      </div>
    </section>

    <section class="section" aria-labelledby="list-app-title">
      <div class="section-heading">
        <p class="eyebrow">Applications</p>
        <h2 id="list-app-title">串列應用：Stack、Queue、多項式</h2>
        <p>Stack 可在 head push/pop；Queue 可保存 front/rear；多項式可用依 exponent 排序的 linked terms 進行 merge add。</p>
      </div>
      <div class="lesson-layout">
        <article class="lesson-block">
          <h4>Polynomial terms</h4>
          <p>每個節點保存 <code>coef</code>、<code>exp</code>、<code>next</code>。相加時同次方合併，係數為 0 的項目直接略過。</p>
        </article>
        <article class="lesson-block">
          <h4>Memory ownership</h4>
          <p>建立節點的函式要明確說明誰負責釋放；整條串列通常提供 <code>destroy_list</code> 從 head 逐一 free。</p>
        </article>
      </div>
    </section>
  `;
}

function graphAdvancedTemplate() {
  return `
    <section class="section" aria-labelledby="graph-code-title">
      <div class="section-heading">
        <p class="eyebrow">Graph C Implementations</p>
        <h2 id="graph-code-title">BFS、DFS、Dijkstra、Prim/Kruskal 程式骨架</h2>
        <p>以下使用 adjacency matrix 版本呈現核心流程，適合課堂追蹤；大型稀疏圖可改成 adjacency list 與 priority queue。</p>
      </div>
      <div class="code-grid">
        <article class="code-panel">
          <h3>BFS and DFS</h3>
          <pre><code>#define MAX_V 32

void bfs(int n, int g[MAX_V][MAX_V], int start) {
    int visited[MAX_V] = {0};
    int q[MAX_V], front = 0, rear = 0;
    visited[start] = 1;
    q[rear++] = start;

    while (front &lt; rear) {
        int v = q[front++];
        for (int w = 0; w &lt; n; ++w) {
            if (g[v][w] && !visited[w]) {
                visited[w] = 1;
                q[rear++] = w;
            }
        }
    }
}

void dfs_visit(int n, int g[MAX_V][MAX_V],
               int v, int visited[]) {
    visited[v] = 1;
    for (int w = 0; w &lt; n; ++w) {
        if (g[v][w] && !visited[w]) {
            dfs_visit(n, g, w, visited);
        }
    }
}</code></pre>
        </article>
        <article class="code-panel">
          <h3>Dijkstra</h3>
          <pre><code>#define INF 1000000000

void dijkstra(int n, int cost[MAX_V][MAX_V],
              int start, int dist[]) {
    int fixed[MAX_V] = {0};
    for (int i = 0; i &lt; n; ++i) dist[i] = cost[start][i];
    dist[start] = 0;

    for (int step = 0; step &lt; n; ++step) {
        int u = -1, best = INF;
        for (int i = 0; i &lt; n; ++i)
            if (!fixed[i] && dist[i] &lt; best) {
                best = dist[i]; u = i;
            }
        if (u == -1) break;
        fixed[u] = 1;
        for (int v = 0; v &lt; n; ++v)
            if (!fixed[v] && cost[u][v] &lt; INF &&
                dist[u] + cost[u][v] &lt; dist[v])
                dist[v] = dist[u] + cost[u][v];
    }
}</code></pre>
        </article>
        <article class="code-panel">
          <h3>Prim MST</h3>
          <pre><code>int prim(int n, int cost[MAX_V][MAX_V], int start) {
    int in_tree[MAX_V] = {0};
    int low[MAX_V];
    for (int i = 0; i &lt; n; ++i) low[i] = cost[start][i];
    in_tree[start] = 1;

    int total = 0;
    for (int e = 1; e &lt; n; ++e) {
        int u = -1, best = INF;
        for (int i = 0; i &lt; n; ++i)
            if (!in_tree[i] && low[i] &lt; best) {
                best = low[i]; u = i;
            }
        if (u == -1) return INF;
        in_tree[u] = 1;
        total += best;
        for (int v = 0; v &lt; n; ++v)
            if (!in_tree[v] && cost[u][v] &lt; low[v])
                low[v] = cost[u][v];
    }
    return total;
}</code></pre>
        </article>
        <article class="code-panel">
          <h3>Kruskal and components</h3>
          <pre><code>int parent[MAX_V];

int find_set(int x) {
    while (parent[x] != x) {
        parent[x] = parent[parent[x]];
        x = parent[x];
    }
    return x;
}

int union_set(int a, int b) {
    int ra = find_set(a), rb = find_set(b);
    if (ra == rb) return 0;
    parent[rb] = ra;
    return 1;
}

/* Kruskal:
   1. sort edges by weight
   2. scan edges from light to heavy
   3. add edge only if union_set succeeds */</code></pre>
        </article>
      </div>
    </section>

    <section class="section" aria-labelledby="topological-title">
      <div class="section-heading">
        <p class="eyebrow">Directed Graphs</p>
        <h2 id="topological-title">Topological sort 與 connected components</h2>
        <p>DAG 可用 indegree queue 做 topological sort；無向圖可重複啟動 DFS/BFS，計算每個 connected component。</p>
      </div>
      <div class="lesson-layout">
        <article class="lesson-block"><h4>Topological sort</h4><p>把 indegree 為 0 的頂點入 queue，移除時降低鄰居 indegree；若最後輸出頂點數不足，表示有 cycle。</p></article>
        <article class="lesson-block"><h4>Connected components</h4><p>從尚未拜訪的頂點啟動 DFS，每一次啟動代表找到一個 component。</p></article>
      </div>
    </section>
  `;
}

function sortingSupplementTemplate() {
  return `
    <section class="section" aria-labelledby="external-sort-title">
      <div class="section-heading">
        <p class="eyebrow">External Sorting</p>
        <h2 id="external-sort-title">外部排序與 k-way merge</h2>
        <p>當資料大到無法一次放入記憶體，排序成本主要來自磁碟 I/O。External sort 先分批排序產生 runs，再用 k-way merge 合併。</p>
      </div>
      <div class="teaching-grid">
        <article class="algorithm-card">
          <h3>Run generation</h3>
          <p>每次讀入一批可放入記憶體的資料，用內部排序法排好後寫成 sorted run。</p>
          <div class="chapter-tags"><span>Chunk</span><span>Run</span><span>I/O</span></div>
        </article>
        <article class="algorithm-card">
          <h3>k-way merge</h3>
          <p>同時打開 k 個 run，每個 run 取目前最小候選值放入 min heap，反覆輸出最小值並補下一筆。</p>
          <div class="chapter-tags"><span>Min Heap</span><span>Buffer</span><span>Merge</span></div>
        </article>
        <article class="algorithm-card">
          <h3>Pass count</h3>
          <p>k 越大，merge pass 越少，但需要更多 input buffers。實務設計常在記憶體、檔案數與 I/O pattern 之間取平衡。</p>
          <div class="chapter-tags"><span>Passes</span><span>Buffers</span></div>
        </article>
        <article class="algorithm-card">
          <h3>課堂測驗方向</h3>
          <p>給定記憶體容量、run 數與 k 值，計算需要幾輪 merge，並追蹤 heap 中候選元素的變化。</p>
          <div class="chapter-tags"><span>Quiz</span><span>Trace</span></div>
        </article>
      </div>
    </section>
  `;
}

function hashingMaterialsTemplate() {
  return `
    <section class="section" aria-labelledby="hash-title">
      <div class="section-heading">
        <p class="eyebrow">Hash Table</p>
        <h2 id="hash-title">雜湊、碰撞與負載因子</h2>
        <p>Hash table 的目標是平均 O(1) 查詢，但前提是 hash function 分布良好且 load factor 受控制。碰撞不是例外，而是設計的一部分。</p>
      </div>
      <div class="teaching-grid">
        <article class="algorithm-card"><h3>Hash function</h3><p>把 key 轉成 table index。整數常用 modulo；字串需逐字元混合，避免 anagram 或共同前綴集中。</p><div class="chapter-tags"><span>Key</span><span>Index</span></div></article>
        <article class="algorithm-card"><h3>Chaining</h3><p>每格 bucket 保存 linked list。碰撞項目掛在同一 bucket，刪除簡單，但需要額外指標空間。</p><div class="chapter-tags"><span>Bucket</span><span>List</span></div></article>
        <article class="algorithm-card"><h3>Open addressing</h3><p>碰撞後用 probing 找下一格。Linear probing 容易 primary clustering；quadratic probing 可減輕連續群聚。</p><div class="chapter-tags"><span>Probe</span><span>Tombstone</span></div></article>
        <article class="algorithm-card"><h3>Rehashing</h3><p>當 load factor 過高，建立更大的表並重新插入所有 key，降低平均探測長度。</p><div class="chapter-tags"><span>Resize</span><span>Load</span></div></article>
      </div>
    </section>
    <section class="section" aria-labelledby="hash-code-title">
      <div class="section-heading"><p class="eyebrow">Standard C</p><h2 id="hash-code-title">Chaining 與 linear probing C 範例</h2><p>課堂可先用整數 key 練習，再把 hash function 換成字串版本。</p></div>
      <div class="code-grid">
        <article class="code-panel"><h3>Chaining insert</h3><pre><code>#define TABLE_SIZE 101

typedef struct Entry {
    int key;
    int value;
    struct Entry *next;
} Entry;

int hash_int(int key) {
    if (key &lt; 0) key = -key;
    return key % TABLE_SIZE;
}

int put_chain(Entry *table[], Entry *node) {
    int h = hash_int(node-&gt;key);
    node-&gt;next = table[h];
    table[h] = node;
    return h;
}</code></pre></article>
        <article class="code-panel"><h3>Linear probing search</h3><pre><code>#define EMPTY 0
#define USED 1
#define DELETED 2

typedef struct {
    int key;
    int value;
    int state;
} Slot;

int find_slot(Slot table[], int key) {
    int h = hash_int(key);
    for (int step = 0; step &lt; TABLE_SIZE; ++step) {
        int i = (h + step) % TABLE_SIZE;
        if (table[i].state == EMPTY) return -1;
        if (table[i].state == USED && table[i].key == key)
            return i;
    }
    return -1;
}</code></pre></article>
      </div>
    </section>
    <section class="section" aria-labelledby="load-title">
      <div class="section-heading"><p class="eyebrow">Load Factor</p><h2 id="load-title">Load factor 視覺化</h2><p><code>alpha = count / table_size</code>。Chaining 可容忍 alpha 超過 1，但平均串列長度會上升；open addressing 通常需要在 0.5 到 0.75 左右 rehash。</p></div>
      <div class="mini-array"><span class="cell sorted">0</span><span class="cell compare">17</span><span class="cell sorted">2</span><span class="cell active">collision</span><span class="cell">4</span><span class="cell">5</span><span class="cell compare">23</span></div>
    </section>
  `;
}

function priorityQueuesMaterialsTemplate() {
  return `
    <section class="section" aria-labelledby="pq-title">
      <div class="section-heading"><p class="eyebrow">Priority Queue</p><h2 id="pq-title">進階優先佇列</h2><p>Unit 05 已介紹 binary heap；本章重點是 meld、decrease-key 與 amortized cost，理解為什麼 Dijkstra、Prim 和事件模擬需要不同層級的 priority queue。</p></div>
      <div class="teaching-grid">
        <article class="algorithm-card"><h3>Binary heap</h3><p>陣列表示完全二元樹，insert 上濾、delete-min 下濾，適合一般用途。</p><div class="chapter-tags"><span>O(log n)</span><span>Array</span></div></article>
        <article class="algorithm-card"><h3>Leftist tree</h3><p>保存 null path length，讓右路徑短，meld 時沿右路徑合併並交換左右子樹。</p><div class="chapter-tags"><span>Meld</span><span>NPL</span></div></article>
        <article class="algorithm-card"><h3>Binomial heap</h3><p>由多棵 binomial trees 組成，像二進位加法一樣合併同 degree 的樹。</p><div class="chapter-tags"><span>Forest</span><span>Union</span></div></article>
        <article class="algorithm-card"><h3>Fibonacci / Pairing heap</h3><p>延遲整理結構來取得良好的 amortized decrease-key；pairing heap 實作較簡潔，常作為實務折衷。</p><div class="chapter-tags"><span>Amortized</span><span>Decrease-key</span></div></article>
      </div>
    </section>
    <section class="section" aria-labelledby="pq-code-title">
      <div class="section-heading"><p class="eyebrow">Standard C</p><h2 id="pq-code-title">Min heap C 程式與操作比較</h2><p>先把 binary heap 寫穩，再比較其他可合併 heap 的動機。</p></div>
      <div class="code-grid">
        <article class="code-panel"><h3>Insert</h3><pre><code>typedef struct {
    int data[256];
    int size;
} MinHeap;

int heap_push(MinHeap *h, int value) {
    if (h-&gt;size == 256) return 0;
    int i = h-&gt;size++;
    while (i &gt; 0) {
        int p = (i - 1) / 2;
        if (h-&gt;data[p] &lt;= value) break;
        h-&gt;data[i] = h-&gt;data[p];
        i = p;
    }
    h-&gt;data[i] = value;
    return 1;
}</code></pre></article>
        <article class="code-panel"><h3>Delete min</h3><pre><code>int heap_pop(MinHeap *h, int *out) {
    if (h-&gt;size == 0) return 0;
    *out = h-&gt;data[0];
    int last = h-&gt;data[--h-&gt;size];
    int i = 0;
    while (i * 2 + 1 &lt; h-&gt;size) {
        int c = i * 2 + 1;
        if (c + 1 &lt; h-&gt;size && h-&gt;data[c + 1] &lt; h-&gt;data[c]) ++c;
        if (h-&gt;data[c] &gt;= last) break;
        h-&gt;data[i] = h-&gt;data[c];
        i = c;
    }
    h-&gt;data[i] = last;
    return 1;
}</code></pre></article>
      </div>
    </section>
  `;
}

function efficientBstsMaterialsTemplate() {
  return `
    <section class="section" aria-labelledby="balanced-title">
      <div class="section-heading"><p class="eyebrow">Balanced Search Trees</p><h2 id="balanced-title">旋轉與平衡搜尋樹</h2><p>BST 的搜尋成本由高度決定。AVL、splay tree、red-black tree 都透過旋轉或重新著色限制高度或改善近期使用資料的成本。</p></div>
      <div class="teaching-grid">
        <article class="algorithm-card"><h3>Single rotation</h3><p>LL 或 RR 失衡時用一次旋轉恢復高度，同時維持 inorder key order。</p><div class="chapter-tags"><span>LL</span><span>RR</span></div></article>
        <article class="algorithm-card"><h3>Double rotation</h3><p>LR 或 RL 失衡時先對 child 旋轉，再對 root 旋轉。</p><div class="chapter-tags"><span>LR</span><span>RL</span></div></article>
        <article class="algorithm-card"><h3>AVL tree</h3><p>每個節點左右子樹高度差最多 1，搜尋很穩定，但插入刪除維護較嚴格。</p><div class="chapter-tags"><span>Height</span><span>Strict</span></div></article>
        <article class="algorithm-card"><h3>Red-black tree</h3><p>用顏色規則限制最長路徑不超過最短路徑兩倍，常用於標準函式庫 map/set。</p><div class="chapter-tags"><span>Color</span><span>Worst-case</span></div></article>
      </div>
    </section>
    <section class="section" aria-labelledby="rotation-code-title">
      <div class="section-heading"><p class="eyebrow">Standard C</p><h2 id="rotation-code-title">旋轉與 AVL 插入骨架</h2><p>旋轉後要更新子樹指標與高度。只要 inorder 順序不變，BST order 就被保留下來。</p></div>
      <div class="code-grid">
        <article class="code-panel"><h3>Right rotation</h3><pre><code>typedef struct TNode {
    int key;
    int height;
    struct TNode *left;
    struct TNode *right;
} TNode;

TNode *rotate_right(TNode *y) {
    TNode *x = y-&gt;left;
    TNode *t2 = x-&gt;right;
    x-&gt;right = y;
    y-&gt;left = t2;
    /* update_height(y); update_height(x); */
    return x;
}</code></pre></article>
        <article class="code-panel"><h3>AVL cases</h3><pre><code>/* balance = height(left) - height(right)
   LL: balance &gt; 1 and key &lt; node-&gt;left-&gt;key
   RR: balance &lt; -1 and key &gt; node-&gt;right-&gt;key
   LR: rotate_left(node-&gt;left), then rotate_right(node)
   RL: rotate_right(node-&gt;right), then rotate_left(node) */</code></pre></article>
      </div>
    </section>
  `;
}

function multiwaySearchTreesMaterialsTemplate() {
  return `
    <section class="section" aria-labelledby="btree-title">
      <div class="section-heading"><p class="eyebrow">Disk-friendly Index</p><h2 id="btree-title">m-way、B-tree 與 B+ tree</h2><p>多路搜尋樹把多個 key 放在同一節點，降低高度，讓每次磁碟讀取取得更多比較資訊。這是資料庫與檔案系統索引的核心動機。</p></div>
      <div class="teaching-grid">
        <article class="algorithm-card"><h3>m-way search tree</h3><p>一個有 k 個 key 的節點最多有 k + 1 個 child，每個 child 對應一段 key range。</p><div class="chapter-tags"><span>Ranges</span><span>Children</span></div></article>
        <article class="algorithm-card"><h3>B-tree</h3><p>維持最小填充率，插入 overflow 時把中間 key 往上提升並分裂節點。</p><div class="chapter-tags"><span>Split</span><span>Merge</span></div></article>
        <article class="algorithm-card"><h3>B+ tree</h3><p>內部節點只做導覽，資料集中在葉節點；葉節點串接後特別適合範圍查詢。</p><div class="chapter-tags"><span>Leaf chain</span><span>Range</span></div></article>
        <article class="algorithm-card"><h3>External storage</h3><p>設計目標從 CPU 比較次數轉向減少 block I/O，因此節點大小常對齊磁碟頁或資料庫 page。</p><div class="chapter-tags"><span>Page</span><span>I/O</span></div></article>
      </div>
    </section>
    <section class="section" aria-labelledby="btree-flow-title">
      <div class="section-heading"><p class="eyebrow">Insertion Flow</p><h2 id="btree-flow-title">B-tree 插入分裂流程</h2><p>先在葉節點插入 key；若節點超過容量，選中間 key 上推，左右兩側分成兩個節點。若 parent 也 overflow，分裂會一路往 root 傳播。</p></div>
      <div class="mini-array"><span class="cell">10</span><span class="cell">20</span><span class="cell active">30</span><span class="cell">40</span><span class="diagram-arrow">split</span><span class="cell compare">promote 30</span></div>
    </section>
    <section class="section" aria-labelledby="btree-code-title">
      <div class="section-heading"><p class="eyebrow">Standard C</p><h2 id="btree-code-title">B-tree 節點結構</h2><p>完整 B-tree 程式較長，課堂先掌握節點欄位、key count 與 child pointer 的關係。</p></div>
      <div class="code-grid"><article class="code-panel"><h3>Node layout</h3><pre><code>#define ORDER 5

typedef struct BNode {
    int key_count;
    int keys[ORDER - 1];
    struct BNode *child[ORDER];
    int is_leaf;
} BNode;

/* key_count == k 時：
   keys[0..k-1] 有效
   non-leaf 節點 child[0..k] 有效 */</code></pre></article></div>
    </section>
  `;
}

function digitalSearchStructuresMaterialsTemplate() {
  return `
    <section class="section" aria-labelledby="trie-title">
      <div class="section-heading"><p class="eyebrow">String Keys</p><h2 id="trie-title">Trie、Patricia 與壓縮搜尋結構</h2><p>Digital search structures 不把 key 當成一個整體比較，而是逐字元或逐位元分支。它們特別適合字典、prefix query 與文字搜尋。</p></div>
      <div class="teaching-grid">
        <article class="algorithm-card"><h3>Trie</h3><p>每條 root-to-node path 對應一個 prefix。節點要有終止標記，才能區分 app 與 apple。</p><div class="chapter-tags"><span>Prefix</span><span>Terminal</span></div></article>
        <article class="algorithm-card"><h3>Digital search tree</h3><p>依 key 的 bit 或 character 決定往哪個分支走，適合固定 alphabet 或 bit string。</p><div class="chapter-tags"><span>Bit</span><span>Branch</span></div></article>
        <article class="algorithm-card"><h3>Patricia</h3><p>壓縮只有單一 child 的路徑，並記錄分歧 bit，降低空節點與長鏈空間浪費。</p><div class="chapter-tags"><span>Compressed</span><span>Bit index</span></div></article>
        <article class="algorithm-card"><h3>Suffix tree</h3><p>保存字串所有 suffix 的壓縮 trie，可支援快速 substring query，但建構與實作複雜度較高。</p><div class="chapter-tags"><span>Substring</span><span>Text</span></div></article>
      </div>
    </section>
    <section class="section" aria-labelledby="trie-code-title">
      <div class="section-heading"><p class="eyebrow">Standard C</p><h2 id="trie-code-title">Trie 插入與搜尋 C 範例</h2><p>以下用小寫英文 alphabet 示範。若 alphabet 很大，可把 child array 改成 map 或排序邊表。</p></div>
      <div class="code-grid">
        <article class="code-panel"><h3>Trie node</h3><pre><code>#define ALPHA 26

typedef struct TrieNode {
    int is_word;
    struct TrieNode *child[ALPHA];
} TrieNode;

int index_of(char c) { return c - 'a'; }</code></pre></article>
        <article class="code-panel"><h3>Insert and search</h3><pre><code>int trie_search(TrieNode *root, const char word[]) {
    TrieNode *cur = root;
    for (int i = 0; word[i] != '\\0'; ++i) {
        int k = index_of(word[i]);
        if (k &lt; 0 || k &gt;= ALPHA || cur-&gt;child[k] == 0)
            return 0;
        cur = cur-&gt;child[k];
    }
    return cur-&gt;is_word;
}

/* insert:
   for each char, create missing child node;
   after final char, set is_word = 1 */</code></pre></article>
      </div>
    </section>
    <section class="section" aria-labelledby="prefix-title">
      <div class="section-heading"><p class="eyebrow">Prefix Query</p><h2 id="prefix-title">Prefix 查詢練習</h2><p>查詢 prefix 時先走到 prefix 最後一個字元；若路徑存在，從該節點 DFS 收集所有 terminal words。Compressed trie 則一次比對一段 edge label。</p></div>
      <div class="mini-array"><span class="cell sorted">tea</span><span class="cell sorted">team</span><span class="cell active">tear</span><span class="cell compare">to</span><span class="cell compare">top</span></div>
    </section>
  `;
}

function standardCSyntaxMaterialsTemplate() {
  return `
    <section class="section" aria-labelledby="c-program-title">
      <div class="section-heading">
        <p class="eyebrow">Program Shape</p>
        <h2 id="c-program-title">最小 C 程式與編譯流程</h2>
        <p>C 程式通常由前置處理器指令、函式定義與敘述組成。資料結構課程的範例可先用單一檔案練習，再逐步拆成 header 與 implementation。</p>
      </div>
      <div class="code-grid">
        <article class="code-panel">
          <h3>Hello C</h3>
          <pre><code>#include &lt;stdio.h&gt;

int main(void) {
    printf("Data Structures in C\\n");
    return 0;
}</code></pre>
        </article>
        <article class="code-panel">
          <h3>Compile and run</h3>
          <pre><code>gcc -std=c11 -Wall -Wextra hello.c -o hello
./hello</code></pre>
        </article>
      </div>
    </section>

    <section class="section" aria-labelledby="c-types-title">
      <div class="section-heading">
        <p class="eyebrow">Types And Operators</p>
        <h2 id="c-types-title">基本型別、運算子與格式化輸出</h2>
        <p>型別決定資料佔用空間、可做的運算與格式化輸出方式。讀資料結構程式時，要同時看變數型別與操作意圖。</p>
      </div>
      <div class="analysis-panel">
        <table class="comparison-table">
          <thead><tr><th>型別</th><th>常見用途</th><th>printf 格式</th></tr></thead>
          <tbody>
            <tr><td><code>int</code></td><td>索引、計數、鍵值</td><td><code>%d</code></td></tr>
            <tr><td><code>double</code></td><td>浮點數、權重、平均值</td><td><code>%f</code></td></tr>
            <tr><td><code>char</code></td><td>字元、字串元素</td><td><code>%c</code></td></tr>
            <tr><td><code>char[]</code></td><td>以 <code>\\0</code> 結尾的字串</td><td><code>%s</code></td></tr>
            <tr><td><code>size_t</code></td><td>大小、長度、配置容量</td><td><code>%zu</code></td></tr>
          </tbody>
        </table>
        <div class="insight-box">整數除法會捨去小數，例如 <code>5 / 2 == 2</code>；若需要浮點結果，至少一個運算元要是浮點型別，例如 <code>5.0 / 2</code>。</div>
      </div>
    </section>

    <section class="section" aria-labelledby="c-control-title">
      <div class="section-heading">
        <p class="eyebrow">Control Flow</p>
        <h2 id="c-control-title">條件、迴圈與陣列走訪</h2>
        <p>資料結構操作多半是在「找到位置前持續走訪」或「符合條件時更新狀態」。先掌握 if、for、while，才能穩定追蹤後續章節的演算法。</p>
      </div>
      <div class="code-grid">
        <article class="code-panel">
          <h3>Condition and loop</h3>
          <pre><code>int max_value(const int a[], int n) {
    int max = a[0];
    for (int i = 1; i &lt; n; ++i) {
        if (a[i] &gt; max) {
            max = a[i];
        }
    }
    return max;
}</code></pre>
        </article>
        <article class="code-panel">
          <h3>while search</h3>
          <pre><code>int linear_search(const int a[], int n, int key) {
    int i = 0;
    while (i &lt; n && a[i] != key) {
        ++i;
    }
    return i == n ? -1 : i;
}</code></pre>
        </article>
      </div>
    </section>

    <section class="section" aria-labelledby="c-functions-title">
      <div class="section-heading">
        <p class="eyebrow">Functions</p>
        <h2 id="c-functions-title">函式、參數與回傳值</h2>
        <p>C 的函式參數預設是 pass by value。若函式需要修改呼叫端變數，必須傳入該變數的位址，並在函式內透過指標修改。</p>
      </div>
      <div class="code-grid">
        <article class="code-panel">
          <h3>Pass by value</h3>
          <pre><code>void try_swap(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
    /* caller variables are unchanged */
}</code></pre>
        </article>
        <article class="code-panel">
          <h3>Pass address</h3>
          <pre><code>void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}</code></pre>
        </article>
      </div>
    </section>

    <section class="section" aria-labelledby="c-swap-title">
      <div class="section-heading">
        <p class="eyebrow">Function Versus Macro</p>
        <h2 id="c-swap-title">交換兩個變數：函式呼叫與 SWAP 巨集</h2>
        <p>交換兩個整數可以寫成接收位址的函式，也可以用前置處理器巨集展開。兩種方法看起來接近，但型別檢查、呼叫方式與副作用風險不同。</p>
      </div>
      <div class="code-grid">
        <article class="code-panel">
          <h3>Pointer-based swap function</h3>
          <pre><code>void swap_int(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int x = 10;
int y = 20;
swap_int(&amp;x, &amp;y);</code></pre>
        </article>
        <article class="code-panel">
          <h3>SWAP macro</h3>
          <pre><code>#define SWAP(a, b, type) do { \\
    type temp = (a);          \\
    (a) = (b);                \\
    (b) = temp;               \\
} while (0)

int x = 10;
int y = 20;
SWAP(x, y, int);</code></pre>
        </article>
      </div>
      <div class="analysis-panel">
        <table class="comparison-table">
          <thead><tr><th>比較項目</th><th>swap_int 函式</th><th>SWAP 巨集</th></tr></thead>
          <tbody>
            <tr><td>呼叫方式</td><td>傳入位址：<code>swap_int(&amp;x, &amp;y)</code></td><td>傳入可賦值運算式：<code>SWAP(x, y, int)</code></td></tr>
            <tr><td>型別</td><td>函式簽章固定為 <code>int *</code></td><td>可指定 <code>int</code>、<code>double</code> 等型別</td></tr>
            <tr><td>編譯器檢查</td><td>參數型別較容易檢查</td><td>前置處理器先展開文字，錯誤訊息可能較難讀</td></tr>
            <tr><td>副作用</td><td>每個參數運算式只在呼叫前求值一次</td><td>參數在展開後可能出現多次，不要傳入 <code>i++</code> 或函式呼叫</td></tr>
            <tr><td>適用情境</td><td>優先選擇，介面清楚且容易維護</td><td>教學比較或需要泛型式交換時使用，必須限制參數形式</td></tr>
          </tbody>
        </table>
        <div class="insight-box">巨集參數會做文字替換。請使用 <code>SWAP(a[i], a[j], int)</code> 這類單純可賦值運算式；避免 <code>SWAP(a[i++], a[j++], int)</code>，否則索引可能被增加多次。</div>
      </div>
      <article class="chapter-panel standalone-code-panel">
        <h3>例題</h3>
        <ol>
          <li>令 <code>x = 10</code>、<code>y = 20</code>，分別追蹤 <code>swap_int(&amp;x, &amp;y)</code> 與 <code>SWAP(x, y, int)</code> 執行後的結果。</li>
          <li>將 <code>SWAP(p, q, double)</code> 展開成實際 C 敘述，說明 <code>do { ... } while (0)</code> 的用途。</li>
          <li>說明為什麼不應呼叫 <code>SWAP(a[i++], a[j++], int)</code>，並指出索引可能被求值幾次。</li>
        </ol>
      </article>
    </section>

    <section class="section" aria-labelledby="c-preprocessor-title">
      <div class="section-heading">
        <p class="eyebrow">Preprocessor</p>
        <h2 id="c-preprocessor-title">前置處理器與巨集</h2>
        <p>C compiler 正式分析語法前，前置處理器會先處理以 <code>#</code> 開頭的 directives。常見用途包含引入 header、定義常數、建立簡短巨集與控制條件編譯。</p>
      </div>
      <div class="teaching-grid">
        <article class="algorithm-card">
          <h3>#include</h3>
          <p><code>#include &lt;stdio.h&gt;</code> 引入系統 header；<code>#include "stack.h"</code> 引入專案 header。Header 通常放 type、constant 與 function declarations。</p>
          <div class="chapter-tags"><span>Header</span><span>Declaration</span></div>
        </article>
        <article class="algorithm-card">
          <h3>#define</h3>
          <p><code>#define MAX_SIZE 100</code> 建立物件式巨集。前置處理器會在編譯前進行文字替換，不會配置一個可取址的變數。</p>
          <div class="chapter-tags"><span>Constant</span><span>Substitution</span></div>
        </article>
        <article class="algorithm-card">
          <h3>Function-like macro</h3>
          <p><code>#define SQUARE(x) ((x) * (x))</code> 看起來像函式，但參數可能被展開多次。每個參數與整體結果都應加括號。</p>
          <div class="chapter-tags"><span>Parentheses</span><span>Side effect</span></div>
        </article>
        <article class="algorithm-card">
          <h3>Conditional compilation</h3>
          <p><code>#ifdef DEBUG</code> 可在 debug build 顯示額外資訊；<code>#ifndef</code> 常用來建立 header include guard。</p>
          <div class="chapter-tags"><span>DEBUG</span><span>Guard</span></div>
        </article>
      </div>
      <div class="code-grid">
        <article class="code-panel">
          <h3>Constant and function-like macros</h3>
          <pre><code>#define MAX_SIZE 100
#define SQUARE(x) ((x) * (x))
#define MAX(a, b) ((a) &gt; (b) ? (a) : (b))

int area = SQUARE(5);
int larger = MAX(12, 30);</code></pre>
        </article>
        <article class="code-panel">
          <h3>Header include guard</h3>
          <pre><code>#ifndef STACK_H
#define STACK_H

#define STACK_CAPACITY 100

typedef struct {
    int data[STACK_CAPACITY];
    int top;
} Stack;

void stack_init(Stack *s);

#endif</code></pre>
        </article>
        <article class="code-panel">
          <h3>Conditional debug output</h3>
          <pre><code>#ifdef DEBUG
printf("top = %d\\n", stack.top);
#endif

/* compile with:
   gcc -DDEBUG -std=c11 stack.c -o stack */</code></pre>
        </article>
      </div>
      <div class="analysis-panel">
        <table class="comparison-table">
          <thead><tr><th>情境</th><th>建議工具</th><th>理由</th></tr></thead>
          <tbody>
            <tr><td>簡單整數常數</td><td><code>enum</code>、<code>const</code> 或 <code>#define</code></td><td>依是否需要型別、作用域與可取址能力選擇。</td></tr>
            <tr><td>需要型別檢查的操作</td><td>函式或 <code>static inline</code></td><td>錯誤訊息清楚，也能避免重複求值。</td></tr>
            <tr><td>Header 防止重複引入</td><td><code>#ifndef</code> include guard</td><td>避免同一宣告被重複處理。</td></tr>
            <tr><td>Debug 版本額外訊息</td><td><code>#ifdef DEBUG</code></td><td>release build 可完全移除除錯輸出。</td></tr>
          </tbody>
        </table>
        <div class="insight-box">避免把複雜邏輯塞進巨集。能用函式或 <code>static inline</code> 表達時，通常更容易閱讀、除錯與檢查型別。</div>
      </div>
      <article class="chapter-panel standalone-code-panel">
        <h3>例題</h3>
        <ol>
          <li>展開 <code>SQUARE(a + b)</code>，說明為什麼參數與整體結果都需要括號。</li>
          <li>解釋 <code>SQUARE(i++)</code> 為何危險，並指出 <code>i</code> 可能被增加幾次。</li>
          <li>為 <code>queue.h</code> 寫出 include guard，並加入容量常數與函式宣告。</li>
          <li>使用 <code>#ifdef DEBUG</code> 包住一段 queue 狀態輸出，寫出啟用 debug build 的 gcc 指令。</li>
        </ol>
      </article>
    </section>

    <section class="section" aria-labelledby="c-pointer-title">
      <div class="section-heading">
        <p class="eyebrow">Pointers And Arrays</p>
        <h2 id="c-pointer-title">指標、陣列與字串</h2>
        <p>指標保存位址，解參照後才能讀寫該位址上的資料。陣列傳入函式時會退化成第一個元素的位址，因此函式通常還需要長度參數。</p>
      </div>
      <div class="lesson-layout">
        <article class="lesson-block">
          <h4>常見運算子</h4>
          <ul>
            <li><code>&amp;x</code> 取得 x 的位址。</li>
            <li><code>*p</code> 存取 p 指向的資料。</li>
            <li><code>a[i]</code> 等價於 <code>*(a + i)</code>。</li>
            <li><code>s[i] == '\\0'</code> 表示 C 字串結尾。</li>
          </ul>
        </article>
        <article class="code-panel">
          <h3>Array parameter</h3>
          <pre><code>int sum_array(const int a[], int n) {
    int sum = 0;
    for (int i = 0; i &lt; n; ++i) {
        sum += a[i];
    }
    return sum;
}</code></pre>
        </article>
      </div>
    </section>

    <section class="section" aria-labelledby="c-struct-title">
      <div class="section-heading">
        <p class="eyebrow">Struct And typedef</p>
        <h2 id="c-struct-title">結構與自訂型別</h2>
        <p>資料結構通常會把多個欄位包成一個 structure。節點、動態陣列、圖的邊、多項式項目都會用到這個技巧。</p>
      </div>
      <div class="code-grid">
        <article class="code-panel">
          <h3>Point record</h3>
          <pre><code>typedef struct {
    int x;
    int y;
} Point;

Point move_right(Point p) {
    p.x += 1;
    return p;
}</code></pre>
        </article>
        <article class="code-panel">
          <h3>Node shape</h3>
          <pre><code>typedef struct Node {
    int data;
    struct Node *next;
} Node;</code></pre>
        </article>
      </div>
    </section>

    <section class="section" aria-labelledby="c-io-title">
      <div class="section-heading">
        <p class="eyebrow">Input And Debugging</p>
        <h2 id="c-io-title">輸入、錯誤檢查與練習方式</h2>
        <p>初學 C 時，很多錯誤不是演算法，而是格式字串、未初始化變數、越界或未檢查輸入。每次練習都應該讓 compiler warnings 保持乾淨。</p>
      </div>
      <div class="code-grid">
        <article class="code-panel">
          <h3>Checked scanf</h3>
          <pre><code>int value;
if (scanf("%d", &amp;value) != 1) {
    printf("invalid input\\n");
    return 1;
}</code></pre>
        </article>
        <article class="lesson-block">
          <h4>練習清單</h4>
          <ol>
            <li>寫一個讀入 n 個整數並輸出最大值的程式。</li>
            <li>把最大值搜尋改成函式。</li>
            <li>用 struct 保存學生姓名與分數。</li>
            <li>用指標版本的 swap 交換兩個整數。</li>
          </ol>
        </article>
      </div>
    </section>
  `;
}

const chapterExtensions = {
  "00": {
    eyebrow: "Reading C Programs",
    title: "從編譯器訊息建立除錯習慣",
    intro: "學習 C 時，先把 warning 當成必須處理的訊息。型別不相容、未初始化變數、格式字串錯誤與遺漏 prototype，往往會在資料結構程式變長後放大成難追蹤的錯誤。",
    cards: [
      ["Declaration and definition", "宣告告訴編譯器名稱與型別；定義才配置儲存空間或提供函式本體。Header 通常放宣告，.c 檔放定義。", "Header|Prototype|Linker"],
      ["Scope and lifetime", "區域變數離開 block 後不再有效；static 變數會保留值；malloc 配置的空間則持續到 free。", "Block|static|malloc"],
      ["Undefined behavior", "越界、使用已釋放記憶體、除以 0、讀取未初始化變數，都可能產生不可預測結果。", "Bounds|Lifetime|Safety"],
    ],
    practice: [
      "找出一段 scanf 遺漏 & 的程式，說明 compiler warning 與執行結果。",
      "比較 local array、static array、malloc array 的生命週期。",
      "用 -Wall -Wextra 編譯一段有未使用變數與格式錯誤的程式。",
    ],
  },
  "01": {
    eyebrow: "Specification Practice",
    title: "用規格描述資料結構操作",
    intro: "實作前先寫規格，可以把資料結構問題拆成可驗證的行為。這也是後續設計測試資料與分析邊界案例的起點。",
    cards: [
      ["Precondition", "操作開始前必須成立的條件。例如 delete(list, pos) 要求 0 <= pos < length。", "Input|Valid range"],
      ["Postcondition", "操作完成後保證成立的結果。例如成功插入後 length 增加 1，原有元素相對順序不變。", "Output|State"],
      ["Invariant", "每次操作前後都要維持的規則。例如動態陣列永遠滿足 0 <= length <= capacity。", "Rule|Verification"],
    ],
    practice: [
      "替 queue enqueue/dequeue 寫出 precondition 與 postcondition。",
      "分析兩層迴圈中內層只跑 i 次時，總成本為何是 O(n^2)。",
      "列出 malloc 失敗時 ADT create 操作應回傳的狀態。",
    ],
  },
  "02": {
    eyebrow: "Representation Trade-offs",
    title: "連續記憶體、壓縮表示與成本",
    intro: "表示法的選擇會直接改變空間需求與操作流程。陣列適合直接索引，稀疏表示適合只保存有效項目。",
    cards: [
      ["Cache locality", "Row-major 陣列依列掃描時，連續元素較可能位於同一 cache line；依欄掃描可能增加 cache miss。", "Row-major|Cache"],
      ["Sparse transpose", "簡單 transpose 逐欄掃描 triples；fast transpose 則先計算各欄數量與起始位置。", "Triple|Prefix sum"],
      ["Polynomial merge", "兩個依 exponent 遞減排列的 term array 可用雙指標線性合併，概念與 merge sort 類似。", "Two pointers|O(m+n)"],
    ],
    practice: [
      "計算 int A[4][6] 中 A[3][2] 相對於 A[0][0] 的 byte offset。",
      "比較 1000 x 1000 矩陣只有 100 個非零項時 dense 與 triple 表示的空間。",
      "手動合併兩個多項式 term arrays，略過係數加總為 0 的項目。",
    ],
  },
  "03": {
    eyebrow: "State Trace",
    title: "用狀態表追蹤 Stack 與 Circular Queue",
    intro: "線性容器最適合用逐步狀態表練習。每一步都記錄 top、front、rear、size 與內容，就能快速找出 off-by-one 錯誤。",
    cards: [
      ["Stack trace", "push 先增加 top 再寫入；pop 先讀取 top 再減少。空 stack 常用 top = -1 表示。", "top|LIFO"],
      ["Queue trace", "rear 指向下一個可寫位置，front 指向下一個可讀位置；size 用來區分空與滿。", "front|rear|size"],
      ["Expression stack", "遇到 operand 直接輸出；遇到 operator 比較 precedence；遇到右括號則彈出直到左括號。", "Operator|Precedence"],
    ],
    practice: [
      "用 capacity = 5 的 circular queue 追蹤 enqueue 10,20,30、dequeue 兩次、再 enqueue 40,50,60。",
      "把 A + B * C 轉為 postfix，列出每一步 operator stack。",
      "說明 BFS 為什麼使用 queue 而不是 stack。",
    ],
  },
  "04": {
    eyebrow: "Pointer Discipline",
    title: "串列操作中的 ownership 與邊界案例",
    intro: "Linked list 的核心不是背程式，而是確保每一次指標更新都不遺失節點、不重複釋放，也不留下無法抵達的記憶體。",
    cards: [
      ["Insert order", "插入節點時先讓 node->next 指向後半段，再讓 prev->next 指向 node，避免遺失原串列。", "Insert|next"],
      ["Delete order", "刪除前先保存 victim 與 victim->next，接回串列後再 free victim。", "Delete|free"],
      ["Sentinel node", "Header node 可統一空串列與刪除第一個節點的流程，減少特殊分支。", "Header|Boundary"],
    ],
    practice: [
      "畫出刪除 head、tail、中間節點時需要更新的指標。",
      "寫 destroy_list 並說明為什麼要在 free 前保存 next。",
      "比較 singly list 與 doubly list 刪除已知節點時需要的資訊。",
    ],
  },
  "05": {
    eyebrow: "Tree Reasoning",
    title: "BST 刪除、走訪序列與高度",
    intro: "樹題目常同時考形狀與操作。先確認走訪順序，再分析高度；處理 BST 刪除時，依 child 數量拆成三種情況。",
    cards: [
      ["Leaf deletion", "刪除 leaf 時直接讓 parent 對應 child pointer 變成 NULL。", "BST|Leaf"],
      ["One-child deletion", "用唯一 child 接替被刪節點的位置，保留整棵子樹。", "BST|Relink"],
      ["Two-child deletion", "以 inorder successor 或 predecessor 取代 key，再到子樹中刪除替代節點。", "Successor|Predecessor"],
    ],
    practice: [
      "對 50,30,70,20,40,60,80 建立 BST，再依序刪除 20、30、50。",
      "比較遞增插入與亂序插入對 BST 高度的影響。",
      "給定 preorder 與 inorder，重建唯一二元樹。",
    ],
  },
  "06": {
    eyebrow: "Graph Reasoning",
    title: "Frontier、Relaxation 與圖演算法選擇",
    intro: "圖演算法的差異常集中在 frontier 如何管理：BFS 用 queue，DFS 用 stack，Dijkstra 選最短暫定距離，Prim 選連到生成樹的最輕邊。",
    cards: [
      ["Visited timing", "BFS 通常在 enqueue 時標記 visited，避免同一頂點被重複加入 queue。", "BFS|Queue"],
      ["Relaxation", "若 dist[u] + w(u,v) < dist[v]，就更新 dist[v] 與 parent[v]。", "Dijkstra|Distance"],
      ["MST versus shortest path", "MST 最小化整棵樹總權重；shortest path tree 最小化從單一起點到各點的距離。", "Prim|Dijkstra"],
    ],
    practice: [
      "對同一張圖列出 BFS queue 與 DFS recursion stack 的變化。",
      "追蹤 Dijkstra 每輪 fixed 頂點與 dist 陣列。",
      "舉例說明 MST 不一定是 shortest path tree。",
    ],
  },
  "07": {
    eyebrow: "Sorting Decisions",
    title: "穩定性、輸入形狀與演算法選擇",
    intro: "排序法沒有單一最佳答案。除了 Big-O，還要觀察資料是否近乎有序、是否需要穩定排序、是否允許額外空間，以及資料是否大到必須使用外部排序。",
    cards: [
      ["Stable sorting", "相同 key 的資料排序後仍保留原相對順序，適合多欄位依序排序。", "Stable|Records"],
      ["Nearly sorted input", "Insertion sort 在接近有序資料上接近 O(n)，常被用於小區間或混合排序。", "Insertion|Adaptive"],
      ["Worst-case guard", "Quick sort 若 pivot 選得差會退化為 O(n^2)；可用 randomized pivot 或 introsort 降低風險。", "Quick sort|Pivot"],
    ],
    practice: [
      "設計一組資料驗證某排序法是否穩定。",
      "比較 reverse order 對 insertion、merge、heap、quick sort 的影響。",
      "計算 64 個 sorted runs 使用 4-way merge 需要幾輪合併。",
    ],
  },
  "08": {
    eyebrow: "Hash Table Trace",
    title: "探測序列、刪除標記與 rehash",
    intro: "Hash table 的平均效率來自短探測序列。練習時要記錄每一個 key 的 home bucket、碰撞位置與最終插入位置。",
    cards: [
      ["Linear probing", "依序檢查 h, h+1, h+2...，容易形成連續群聚。", "Probe|Cluster"],
      ["Tombstone", "Open addressing 刪除不能直接改成 EMPTY，否則會截斷其他 key 的搜尋路徑。", "Delete|DELETED"],
      ["Rehash", "負載因子過高時建立較大的表，重新計算每個 key 的位置。", "Load factor|Resize"],
    ],
    practice: [
      "table size = 11，使用 key % 11 插入 22,1,13,11,24,33，追蹤 linear probing。",
      "說明為什麼刪除 22 後不能直接標成 EMPTY。",
      "比較 chaining 與 open addressing 在高負載下的差異。",
    ],
  },
  "09": {
    eyebrow: "Heap Operations",
    title: "上濾、下濾、meld 與 decrease-key",
    intro: "Priority queue 的操作成本取決於結構。Binary heap 適合一般 insert/delete-min；若演算法頻繁合併 heaps，leftist tree 或其他 meldable heap 更合適。",
    cards: [
      ["Percolate up", "插入元素先放在最後，再反覆與 parent 比較並上移。", "Insert|O(log n)"],
      ["Percolate down", "delete-min 以最後元素補 root，再與較小 child 交換直到 heap order 恢復。", "Delete-min|O(log n)"],
      ["Decrease-key", "降低 priority 後通常要上濾；Dijkstra 常需要快速定位待更新元素。", "Index map|Dijkstra"],
    ],
    practice: [
      "把 8,3,12,1,6,5 依序插入 min heap，畫出每一步。",
      "從 heap 刪除最小值兩次，追蹤下濾過程。",
      "比較 binary heap 與 leftist tree 的 meld 成本。",
    ],
  },
  "10": {
    eyebrow: "Rotation Trace",
    title: "從失衡路徑判斷旋轉",
    intro: "AVL 插入後，從新節點往 root 回溯，找到第一個失衡節點。再根據插入路徑是 LL、RR、LR 或 RL 選擇旋轉。",
    cards: [
      ["LL case", "插入發生在左 child 的左子樹，對失衡節點做 right rotation。", "AVL|Right rotate"],
      ["RR case", "插入發生在右 child 的右子樹，對失衡節點做 left rotation。", "AVL|Left rotate"],
      ["LR and RL", "折線型路徑需要兩次旋轉：先轉 child，再轉失衡節點。", "Double rotation|Height"],
    ],
    practice: [
      "依序插入 30,20,10，標出 LL 失衡與旋轉後結果。",
      "依序插入 30,10,20，標出 LR 兩次旋轉。",
      "比較 AVL 與 red-black tree 對平衡條件的嚴格程度。",
    ],
  },
  "11": {
    eyebrow: "Index Blocks",
    title: "B-tree 分裂與 B+ tree 範圍查詢",
    intro: "多路搜尋樹的重點是降低高度與 block I/O。每個節點放多個 keys，讓一次讀取可以縮小更大的搜尋範圍。",
    cards: [
      ["Node split", "插入後若節點 overflow，將中間 key 提升到 parent，左右 keys 分成兩個節點。", "B-tree|Split"],
      ["Leaf chain", "B+ tree 葉節點彼此串接，找到起點後可沿鏈結線性輸出範圍結果。", "B+ tree|Range"],
      ["Fan-out", "節點可容納越多 children，樹越矮；實務上常讓節點大小接近 storage page。", "Page|Height"],
    ],
    practice: [
      "對 order 4 B-tree 插入 10,20,5,6,12,30,7,17，追蹤分裂。",
      "說明 B+ tree 查詢 20 到 50 範圍資料的流程。",
      "比較 binary search tree 與 B-tree 在磁碟上的 I/O 次數。",
    ],
  },
  "12": {
    eyebrow: "Prefix Search",
    title: "Trie 自動完成與壓縮路徑",
    intro: "Trie 將共同 prefix 合併成共用路徑。查詢字串長度為 L 時，走訪成本主要與 L 有關，而不是字典中單字數量。",
    cards: [
      ["Terminal marker", "節點必須記錄是否為完整單字，才能區分 car 與 cargo。", "Word|Prefix"],
      ["Autocomplete", "走到 prefix 最後節點後，用 DFS 收集所有 terminal descendants。", "DFS|Suggestions"],
      ["Compressed edge", "若一段路徑沒有分支，可把多個字元壓成單一 edge label，節省節點數。", "Patricia|Compressed trie"],
    ],
    practice: [
      "把 tea, team, tear, to, top 插入 trie，畫出共享 prefix。",
      "列出 prefix te 的 autocomplete 結果。",
      "比較 trie、hash table、BST 對 prefix query 的支援差異。",
    ],
  },
};

function chapterExtensionTemplate(unit) {
  const extension = chapterExtensions[unit];
  if (!extension) return "";
  const cards = extension.cards
    .map(
      ([title, text, tags]) => `
        <article class="algorithm-card">
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(text)}</p>
          <div class="chapter-tags">${tags
            .split("|")
            .map((tag) => `<span>${escapeHtml(tag)}</span>`)
            .join("")}</div>
        </article>
      `,
    )
    .join("");
  return `
    <section class="section" aria-labelledby="extension-${unit}-title">
      <div class="section-heading">
        <p class="eyebrow">${escapeHtml(extension.eyebrow)}</p>
        <h2 id="extension-${unit}-title">${escapeHtml(extension.title)}</h2>
        <p>${escapeHtml(extension.intro)}</p>
      </div>
      <div class="teaching-grid">${cards}</div>
      <article class="chapter-panel standalone-code-panel">
        <h3>課堂練習</h3>
        <ol>${listItems(extension.practice)}</ol>
      </article>
    </section>
  `;
}

const chapterExampleSets = {
  "00": [
    ["程式骨架與編譯", ["寫出包含 stdio.h、main 與 return 0 的最小 C 程式。", "說明 gcc -std=c11 -Wall -Wextra 中每個選項的用途。", "判斷遺漏函式 prototype 可能造成的 compiler warning。"]],
    ["型別與輸入輸出", ["選擇 int、double、char、size_t 對應的 printf 格式字串。", "說明 7 / 2 與 7.0 / 2 的結果為何不同。", "修正 scanf(\"%d\", value) 中的錯誤，並檢查回傳值。"]],
    ["控制流程與函式", ["用 for 寫出 1 到 n 的整數總和。", "把 linear search 改寫成 while 版本。", "比較 pass by value 與 pointer swap 對呼叫端變數的影響。"]],
    ["指標、陣列與結構", ["說明 a[i] 與 *(a + i) 的關係。", "寫出保存姓名與分數的 Student structure。", "找出使用未初始化 pointer 解參照的風險。"]],
  ],
  "01": [
    ["ADT 與規格", ["替 stack push 寫出 precondition 與 postcondition。", "替 queue dequeue 設計空容器錯誤狀態。", "說明 List ADT 為什麼不應先綁定 array 或 linked list。"]],
    ["不變量與測試", ["為 dynamic array 寫出 length 與 capacity 不變量。", "列出插入第一筆、最後一筆與滿容量時的測試案例。", "設計一個能抓出 off-by-one 錯誤的邊界測試。"]],
    ["Big-O 分析", ["分析單層迴圈從 0 跑到 n - 1 的時間複雜度。", "分析內層只跑 i 次的雙層迴圈總成本。", "比較 O(n log n) 與 O(n^2) 在 n = 1000 時的估算步數。"]],
    ["遞迴與記憶體", ["追蹤 factorial(4) 的 call stack。", "把遞迴計算總和改寫成迭代版本。", "說明 malloc 失敗後程式應如何處理。"]],
  ],
  "02": [
    ["陣列與位址", ["計算 int A[4][6] 中 A[3][2] 的元素位移。", "若 int 為 4 bytes，計算 A[2][5] 相對於 base address 的 byte offset。", "說明 row-major 陣列依欄掃描可能造成較多 cache miss 的原因。"]],
    ["字串與結構", ["為 10 個字元的文字配置足夠的 char array 容量。", "找出未保留字串終止字元空間的錯誤。", "設計 Term structure 保存多項式係數與次方。"]],
    ["稀疏矩陣", ["把一個 3 x 4 稀疏矩陣轉成 triples。", "比較 dense matrix 與 triple representation 的空間成本。", "手動執行 sparse matrix transpose，交換 row 與 col。"]],
    ["多項式表示", ["將 3x^5 - 2x^2 + 7 寫成 term array。", "合併兩個依 exponent 遞減排序的多項式。", "處理係數相加為 0 時應如何略過該項。"]],
  ],
  "03": [
    ["Stack ADT", ["追蹤 push 10、push 20、pop、push 30 後的 top。", "設計空 stack pop 的錯誤處理。", "用 stack 判斷括號字串 ((a+b)*c) 是否平衡。"]],
    ["Circular Queue", ["capacity = 5 時追蹤 enqueue 與 dequeue 後的 front、rear、size。", "說明只看 front == rear 為何無法區分空與滿。", "設計 wrap-around 測試讓 rear 回到陣列開頭。"]],
    ["表示式處理", ["將 A + B * C 轉為 postfix。", "追蹤 (A + B) * C 的 operator stack。", "用 stack 計算 postfix 2 3 4 * +。"]],
    ["Maze 與 BFS", ["說明無權迷宮找最少步數為何使用 queue。", "列出 BFS 搜尋一個 3 x 3 迷宮時的 frontier。", "比較 DFS 與 BFS 找到的第一條路徑可能有何差異。"]],
  ],
  "04": [
    ["Singly Linked List", ["畫出 head -> 10 -> 20 -> NULL。", "在 10 後插入 15，列出指標更新順序。", "刪除 head 時應更新哪一個 pointer。"]],
    ["Circular 與 Doubly List", ["說明 circular list 的停止條件。", "刪除 doubly list 中間節點時要更新哪些 prev/next。", "比較 singly 與 doubly list 反向走訪能力。"]],
    ["Header Node", ["說明 sentinel 如何簡化空串列插入。", "以 header node 寫出刪除第一個有效節點的步驟。", "比較有 header 與無 header 的邊界分支數量。"]],
    ["記憶體管理", ["寫出 destroy_list 的逐節點釋放流程。", "說明 free 前為何要先保存 next。", "找出刪除節點後再次解參照 victim 的錯誤。"]],
  ],
  "05": [
    ["樹術語與形狀", ["給定一棵樹，標出 root、leaf、degree、height。", "判斷一棵樹是否為 full binary tree。", "判斷 complete binary tree 最後一層是否符合由左至右填入。"]],
    ["走訪", ["列出一棵二元樹的 inorder、preorder、postorder。", "用 queue 追蹤 level-order traversal。", "用 stack 模擬 iterative inorder traversal。"]],
    ["BST 操作", ["依序插入 50、30、70、20、40、60、80。", "刪除 BST 中的 leaf 20。", "刪除 BST 中有兩個 child 的 50，選擇 inorder successor。"]],
    ["Heap、Forest 與 Union-Find", ["將 15 插入 max heap 並追蹤上濾。", "把一般樹轉成 left-child right-sibling 表示。", "對 Union-Find 執行 union(1,2)、union(2,3)、find(3)。"]],
  ],
  "06": [
    ["圖表示法", ["把一張無向圖寫成 adjacency matrix。", "把同一張圖寫成 adjacency list。", "比較稀疏圖使用 matrix 與 list 的空間成本。"]],
    ["BFS 與 DFS", ["追蹤 BFS queue 中每一步的 frontier。", "追蹤 DFS recursion stack 與回溯順序。", "用 DFS 計算一張無向圖的 connected components。"]],
    ["Dijkstra", ["追蹤每一輪 fixed 頂點與 dist 陣列。", "對一條邊執行 relaxation 並更新 parent。", "說明負權重邊為何不適合直接使用 Dijkstra。"]],
    ["Minimum Spanning Tree", ["用 Prim 從 A 開始選出 MST edges。", "用 Kruskal 依權重排序並略過形成 cycle 的邊。", "舉例說明 MST 與 shortest path tree 的目標不同。"]],
  ],
  "07": [
    ["基礎排序", ["追蹤 insertion sort 對 5,2,4,1 的每一輪。", "追蹤 selection sort 每輪選出的最小值。", "說明 bubble sort 如何利用 swap flag 提前停止。"]],
    ["分治排序", ["將 8,3,7,2 拆分並執行 merge sort。", "追蹤 quick sort partition 中 pivot 的最終位置。", "比較 merge sort 與 quick sort 的額外空間需求。"]],
    ["Heap 與 Radix Sort", ["將陣列建成 max heap 並追蹤 heapify。", "追蹤 heap sort 每輪把 root 移到尾端。", "對 170,45,75,90 執行 LSD radix sort 的個位數 pass。"]],
    ["穩定性與外部排序", ["設計含相同 key 的 record 測試排序穩定性。", "比較近乎有序資料使用 insertion 與 heap sort。", "計算 64 個 runs 使用 4-way merge 需要幾輪。"]],
  ],
  "08": [
    ["Hash Function", ["使用 key % 11 計算 22、35、47 的 bucket。", "說明只把字元 ASCII 相加作為 string hash 的缺點。", "設計一組會集中到同一 bucket 的 keys。"]],
    ["Chaining", ["將碰撞 keys 插入同一 bucket linked list。", "追蹤 chaining search 的節點比較次數。", "比較 load factor 為 0.5 與 2.0 時平均串列長度。"]],
    ["Open Addressing", ["table size = 11 時插入 22、1、13、11、24、33。", "比較 linear probing 與 quadratic probing 的探測序列。", "說明刪除時為何需要 tombstone。"]],
    ["Rehashing", ["當 count = 8、table size = 11 時估算 load factor。", "把舊表 keys 重新插入 size = 23 的新表。", "比較 rehash 前後搜尋所需探測次數。"]],
  ],
  "09": [
    ["Priority Queue ADT", ["說明 insert、find-min、delete-min 的行為。", "用 priority queue 模擬三個不同優先權工作。", "比較 FIFO queue 與 priority queue 移除順序。"]],
    ["Binary Heap", ["依序插入 8、3、12、1、6、5 建立 min heap。", "執行 delete-min 並追蹤下濾。", "由 index i 推導 parent、left、right 索引。"]],
    ["Meldable Heap", ["說明 leftist tree 為何維持短右路徑。", "追蹤兩棵 leftist trees 的 meld。", "比較 binary heap 與 leftist tree 的 merge 成本。"]],
    ["Decrease-key", ["將 heap 中一個 key 從 20 降為 4 並追蹤上濾。", "說明 Dijkstra 為何需要 decrease-key。", "設計外部 index map 來定位 heap 元素。"]],
  ],
  "10": [
    ["BST 失衡", ["依序插入 10、20、30、40，觀察 BST 高度。", "比較平衡 BST 與 skewed BST 的搜尋成本。", "找出一組會產生最壞高度的插入順序。"]],
    ["Single Rotation", ["依序插入 30、20、10，執行 LL right rotation。", "依序插入 10、20、30，執行 RR left rotation。", "驗證旋轉前後 inorder 順序不變。"]],
    ["Double Rotation", ["依序插入 30、10、20，執行 LR rotations。", "依序插入 10、30、20，執行 RL rotations。", "標出每次旋轉後需要更新的高度。"]],
    ["AVL、Splay 與 Red-black", ["比較 AVL 與 red-black tree 的平衡嚴格程度。", "追蹤 splay tree 存取節點後的 zig-zig。", "列出 red-black tree root 與紅色節點的基本規則。"]],
  ],
  "11": [
    ["m-way Search Tree", ["給定節點 keys 20、40，說明三個 child ranges。", "比較二元樹與多路樹在相同 key 數下的高度。", "說明 fan-out 增加如何降低 block I/O。"]],
    ["B-tree Split", ["對 order 4 B-tree 插入 10、20、5、6。", "節點 overflow 時選出中間 key 上推。", "追蹤 root split 後樹高增加。"]],
    ["B-tree Delete", ["刪除後節點低於最小 keys 時向 sibling 借 key。", "說明無法借 key 時如何 merge。", "追蹤 merge 造成 parent 也 underflow 的情況。"]],
    ["B+ Tree Range Query", ["找到 key 20 所在 leaf 後查詢 20 到 50。", "說明 leaf chain 如何支援順序掃描。", "比較 B-tree 與 B+ tree 資料儲存位置。"]],
  ],
  "12": [
    ["Trie Insert", ["插入 tea、team、tear，畫出共享 prefix。", "插入 to、top，標出新的分支。", "說明 app 與 apple 為何需要 terminal marker。"]],
    ["Trie Search", ["追蹤搜尋 team 的字元路徑。", "比較搜尋 tea 與搜尋 te 的結果。", "處理包含非 a-z 字元的輸入。"]],
    ["Patricia 與 Compressed Trie", ["找出 trie 中只有單一 child 的路徑。", "將共同路徑壓縮為 edge label。", "比較壓縮前後節點數量。"]],
    ["Prefix 與 Suffix Query", ["列出 prefix te 的 autocomplete 結果。", "比較 trie 與 hash table 支援 prefix query 的差異。", "說明 suffix tree 如何支援 substring 搜尋。"]],
  ],
};

function chapterExamplesTemplate(unit) {
  const groups = chapterExampleSets[unit];
  if (!groups) return "";
  const sections = groups
    .map(
      ([title, questions], index) => `
        <article class="lesson-block">
          <h3>${index + 1}. ${escapeHtml(title)}</h3>
          <ol>${listItems(questions)}</ol>
        </article>
      `,
    )
    .join("");
  return `
    <section class="section" aria-labelledby="examples-${unit}-title">
      <div class="section-heading">
        <p class="eyebrow">Worked Example Prompts</p>
        <h2 id="examples-${unit}-title">各小節例題</h2>
        <p>每個核心小節至少包含三題。可先手動追蹤資料狀態，再對照 C 程式或互動實驗室驗證。</p>
      </div>
      <div class="teaching-grid">${sections}</div>
    </section>
  `;
}

function radixInteractiveLabTemplate() {
  return `
    <section id="radix-lab" class="section lab-section" aria-labelledby="radix-lab-title">
      <div class="section-heading">
        <p class="eyebrow">Radix Sort Lab</p>
        <h2 id="radix-lab-title">LSD Radix Sort：逐位分桶與穩定收回</h2>
        <p>使用個位、十位、百位依序分類。每一步都保留同桶內原本順序，才能在下一輪延續已完成的低位排序結果。</p>
      </div>
      <div class="visual-panel radix-lab-panel">
        <div class="toolbar" aria-label="Radix Sort 動態圖例控制">
          <button type="button" class="icon-btn" id="radix-reset" title="回到起點" aria-label="回到起點">
            <i data-lucide="rotate-ccw"></i><span>重置</span>
          </button>
          <button type="button" class="icon-btn" id="radix-prev" title="上一步" aria-label="上一步">
            <i data-lucide="step-back"></i><span>上一步</span>
          </button>
          <button type="button" class="icon-btn primary" id="radix-play" title="播放或暫停" aria-label="播放或暫停">
            <i data-lucide="play"></i><span>播放</span>
          </button>
          <button type="button" class="icon-btn" id="radix-next" title="下一步" aria-label="下一步">
            <i data-lucide="step-forward"></i><span>下一步</span>
          </button>
          <label class="field compact-field">
            <span>速度</span>
            <input id="radix-speed" type="range" min="180" max="1200" value="620">
          </label>
        </div>
        <div class="radix-lab-summary" aria-live="polite">
          <div><span>位數</span><strong id="radix-digit">準備</strong></div>
          <div><span>階段</span><strong id="radix-phase">尚未開始</strong></div>
          <div><span>步驟</span><strong id="radix-step-count">1 / 1</strong></div>
        </div>
        <div class="radix-array-zone">
          <p class="eyebrow">Current Array</p>
          <div id="radix-array" class="radix-array-row"></div>
        </div>
        <div id="radix-buckets" class="radix-bucket-grid" aria-label="Radix Sort buckets"></div>
        <div id="radix-lab-note" class="insight-box">按下一步，從個位數開始分桶。</div>
      </div>
    </section>
  `;
}

function chapterLabTemplate(unit) {
  if (unit === "00") return standardCSyntaxMaterialsTemplate();
  if (unit === "01") return `${basicConceptsMaterialsTemplate()}${basicConceptsSupplementTemplate()}`;
  if (unit === "02") return `${arraysStructuresMaterialsTemplate()}${arraysStructuresSupplementTemplate()}`;
  if (unit === "03") return stacksQueuesMaterialsTemplate();
  if (unit === "04") return linkedListsMaterialsTemplate();
  if (unit === "05") return `${treeMaterialsTemplate()}${treeLabTemplate()}`;
  if (unit === "06") return `${graphMaterialsTemplate()}${graphAdvancedTemplate()}${graphLabTemplate()}`;
  if (unit === "07") return `${sortingAlgorithmSectionsTemplate()}${sortingSupplementTemplate()}${radixInteractiveLabTemplate()}${sortingLabTemplate()}`;
  if (unit === "08") return hashingMaterialsTemplate();
  if (unit === "09") return priorityQueuesMaterialsTemplate();
  if (unit === "10") return efficientBstsMaterialsTemplate();
  if (unit === "11") return multiwaySearchTreesMaterialsTemplate();
  if (unit === "12") return digitalSearchStructuresMaterialsTemplate();
  return "";
}

document.addEventListener("DOMContentLoaded", () => {
  const unit = document.body.dataset.unit;
  const data = chapterData[unit];
  const root = document.querySelector("#chapter-root");
  if (!data || !root) return;

  document.title = `${data.title} | 資料結構（Data Structure）`;

  root.innerHTML = `
    <section class="section chapter-hero" aria-labelledby="chapter-title">
      <p class="eyebrow">${escapeHtml(data.unit)}</p>
      <h1 id="chapter-title">${escapeHtml(data.title)}</h1>
      <p><strong>${escapeHtml(data.subtitle)}</strong></p>
      <p>${escapeHtml(data.focus)}</p>
      <div class="chapter-actions">
        <a class="text-link primary" href="${data.labHref}">${escapeHtml(data.labLabel)}</a>
        <a class="text-link" href="../index.html#map">回課程地圖</a>
      </div>
    </section>

    ${chapterLabTemplate(unit)}
    ${chapterExtensionTemplate(unit)}
    ${chapterExamplesTemplate(unit)}

    <section class="section">
      <div class="chapter-layout">
        <article class="chapter-panel">
          <h2>學習目標</h2>
          <ul>${listItems(data.objectives)}</ul>
        </article>
        <article class="chapter-panel">
          <h2>C 實作提醒</h2>
          <ul>${listItems(data.implementation)}</ul>
        </article>
        <article class="chapter-panel">
          <h2>常見練習題</h2>
          <ol>${listItems(data.questions)}</ol>
        </article>
        <article class="chapter-panel">
          <h2>章節導覽</h2>
          <div class="chapter-nav">
            ${navLink(data.prev, "已是第一章")}
            ${navLink(data.next, "已是最後一章")}
          </div>
        </article>
      </div>
    </section>
  `;
});
