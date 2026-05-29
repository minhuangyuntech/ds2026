const chapterData = {
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
    labLabel: "回首頁看課程地圖",
    labHref: "../index.html#map",
    prev: null,
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
    labLabel: "回首頁看課程地圖",
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
    labLabel: "回首頁看課程地圖",
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
    labLabel: "回首頁看課程地圖",
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
    labLabel: "回首頁看課程地圖",
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
    labLabel: "回首頁看課程地圖",
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
  ["Level / Depth", "從 root 往下數的層級；本網站以 root 位於第 1 層。"],
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
        <p>本單元依《Fundamentals of Data Structures in C》的 Trees 章節脈絡整理：先建立樹與二元樹的術語，再進入表示法、走訪、Binary Search Tree、線索樹與堆積。</p>
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
        <p class="eyebrow">Textbook Map</p>
        <h2 id="tree-book-map-title">本章教材對照</h2>
        <p>依《Fundamentals of Data Structures in C》的 Trees 章節安排，本頁把樹的基本定義一路延伸到 heap、selection tree、forest、disjoint set 與 counting binary trees。每一段都以課堂講義方式重寫，方便搭配互動實驗室使用。</p>
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
        <p>教科書在基本走訪後，接著討論 copy、testing equality 與 satisfiability problem。這些例子提醒我們：樹的遞迴結構不只用於輸出序列，也能用來建立、比較與評估整棵子樹。</p>
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
        <p>教科書在 heap 與 BST 之後，進一步介紹 selection tree 與 forest。這些主題把「樹」從單一階層資料結構推廣到多路選擇、競賽淘汰與多棵樹的集合。</p>
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
  ["Vertex / Node", "圖中的一個物件或狀態，例如城市、課程、網頁、使用者。"],
  ["Edge / Arc", "連接兩個頂點的關係；有向圖常稱為 arc。"],
  ["Directed Graph", "邊有方向，(u, v) 與 (v, u) 代表不同關係。"],
  ["Undirected Graph", "邊沒有方向，{u, v} 表示 u 與 v 彼此相連。"],
  ["Weighted Graph", "每條邊有成本或距離，例如路長、時間、費用。"],
  ["Adjacent", "兩個頂點之間有邊相連時，稱為相鄰。"],
  ["Incident", "某條邊連到某個頂點時，稱該邊 incident to 該頂點。"],
  ["Degree", "無向圖中與頂點相連的邊數；有向圖分成 in-degree 與 out-degree。"],
  ["Path", "由一串頂點與邊組成的路徑；若頂點不重複，稱 simple path。"],
  ["Cycle", "起點與終點相同的路徑；若除了起終點外不重複，稱 simple cycle。"],
  ["Connected", "無向圖中任兩頂點都有路徑可達，稱為連通圖。"],
  ["Component", "非連通圖中，每個最大連通子圖稱為 connected component。"],
  ["Subgraph", "從原圖取部分頂點與邊形成的圖。"],
  ["Spanning Tree", "包含所有頂點且沒有 cycle 的連通子圖。"],
  ["Sparse / Dense", "邊數接近 |V| 時偏 sparse；接近 |V|² 時偏 dense。"],
  ["Self-loop", "邊從頂點連回自己，例如 (v, v)。"],
];

function graphTermsTemplate() {
  return graphTerms
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

function graphMaterialsTemplate() {
  return `
    <section class="section" aria-labelledby="graph-definition-title">
      <div class="section-heading">
        <p class="eyebrow">Graph Basics</p>
        <h2 id="graph-definition-title">圖的定義</h2>
        <p>圖用來描述「物件」與「物件之間的關係」。本單元依《Fundamentals of Data Structures in C》的 Graph 章節脈絡整理，從 Graph ADT、表示法、走訪、最短路徑與生成樹逐步展開。</p>
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

    <section class="section" aria-labelledby="graph-terms-title">
      <div class="section-heading">
        <p class="eyebrow">Terminology</p>
        <h2 id="graph-terms-title">Graph 名詞整理</h2>
        <p>先把名詞建立起來，後面談表示法與演算法時才不會混淆。特別注意 directed/undirected、degree/in-degree/out-degree、path/cycle 的差異。</p>
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

function chapterLabTemplate(unit) {
  if (unit === "01") return basicConceptsMaterialsTemplate();
  if (unit === "02") return arraysStructuresMaterialsTemplate();
  if (unit === "05") return `${treeMaterialsTemplate()}${treeLabTemplate()}`;
  if (unit === "06") return `${graphMaterialsTemplate()}${graphLabTemplate()}`;
  if (unit === "07") return `${sortingAlgorithmSectionsTemplate()}${sortingLabTemplate()}`;
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
