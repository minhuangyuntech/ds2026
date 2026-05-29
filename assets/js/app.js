const svgNS = "http://www.w3.org/2000/svg";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function makeSvgElement(name, attrs = {}, text = "") {
  const node = document.createElementNS(svgNS, name);
  Object.entries(attrs).forEach(([key, value]) => {
    if (value !== undefined && value !== null) node.setAttribute(key, value);
  });
  if (text) node.textContent = text;
  return node;
}

function setActiveButton(buttons, activeButton) {
  const mirrorsPrimary = buttons.some((button) => button.classList.contains("icon-btn"));
  buttons.forEach((button) => {
    const isActive = button === activeButton;
    button.classList.toggle("active", isActive);
    if (mirrorsPrimary) button.classList.toggle("primary", isActive);
  });
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

document.addEventListener("DOMContentLoaded", () => {
  if ($("#chapter-grid")) renderChapters();
  if ($("#sort-svg")) initSortingLab();
  if ($("#tree-svg")) initTreeLab();
  if ($("#graph-svg")) initGraphLab();
  if ($("#heap-demo-svg")) initHeapDemo();

  if (window.lucide) {
    window.lucide.createIcons();
  }
});

const chapters = [
  {
    title: "Basic Concepts",
    href: "chapters/01-basic-concepts.html",
    focus: "抽象資料型態、遞迴、時間與空間成本、C 語言資料表示。",
    tags: ["ADT", "Complexity", "Recursion"],
  },
  {
    title: "Arrays and Structures",
    href: "chapters/02-arrays-structures.html",
    focus: "陣列、結構、稀疏矩陣、多項式與位址計算。",
    tags: ["Array", "Struct", "Sparse"],
  },
  {
    title: "Stacks and Queues",
    href: "chapters/03-stacks-queues.html",
    focus: "堆疊、佇列、循環佇列、表示式轉換與系統堆疊。",
    tags: ["Stack", "Queue", "Expression"],
  },
  {
    title: "Linked Lists",
    href: "chapters/04-linked-lists.html",
    focus: "單向、雙向、循環串列與動態記憶體管理。",
    tags: ["Pointer", "List", "Memory"],
  },
  {
    title: "Trees",
    href: "chapters/05-trees.html",
    focus: "二元樹、走訪、二元搜尋樹、堆積與樹形成本。",
    tags: ["BST", "Traversal", "Heap"],
  },
  {
    title: "Graphs",
    href: "chapters/06-graphs.html",
    focus: "相鄰矩陣、相鄰串列、BFS、DFS、最短路徑與生成樹。",
    tags: ["BFS", "DFS", "MST"],
  },
  {
    title: "Sorting",
    href: "chapters/07-sorting.html",
    focus: "內部排序、分治、堆積排序、穩定性與資料分布。",
    tags: ["Stable", "Divide", "Heap"],
  },
  {
    title: "Hashing",
    href: "chapters/08-hashing.html",
    focus: "雜湊函數、碰撞處理、開放定址與鏈結法。",
    tags: ["Hash", "Collision", "Load"],
  },
  {
    title: "Priority Queues",
    href: "chapters/09-priority-queues.html",
    focus: "優先佇列 ADT、二元堆積、合併與刪除最小值。",
    tags: ["Priority", "Heap", "Merge"],
  },
  {
    title: "Efficient Binary Search Trees",
    href: "chapters/10-efficient-bsts.html",
    focus: "AVL、伸展樹、紅黑樹等平衡策略與旋轉概念。",
    tags: ["AVL", "Rotation", "Balance"],
  },
  {
    title: "Multiway Search Trees",
    href: "chapters/11-multiway-search-trees.html",
    focus: "B-tree、B+ tree 與外部儲存索引。",
    tags: ["B-tree", "Index", "Disk"],
  },
  {
    title: "Digital Search Structures",
    href: "chapters/12-digital-search-structures.html",
    focus: "Trie、radix tree、字串鍵值與前綴查詢。",
    tags: ["Trie", "Prefix", "Text"],
  },
];

function renderChapters() {
  const grid = $("#chapter-grid");
  grid.innerHTML = chapters
    .map((chapter, index) => {
      const tags = chapter.tags.map((tag) => `<span>${tag}</span>`).join("");
      return `
        <a class="chapter-card" href="${chapter.href}">
          <span class="chapter-index">Unit ${String(index + 1).padStart(2, "0")}</span>
          <h3>${chapter.title}</h3>
          <p>${chapter.focus}</p>
          <div class="chapter-tags">${tags}</div>
        </a>
      `;
    })
    .join("");
}

const sortMeta = {
  insertion: {
    label: "Insertion",
    avg: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
    stable: "Yes",
    note: "近乎有序資料通常表現很好；每次把新鍵值插入已排序前綴。",
  },
  selection: {
    label: "Selection",
    avg: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
    stable: "No",
    note: "交換次數少，但比較次數固定偏高；適合觀察選擇最小值的過程。",
  },
  bubble: {
    label: "Bubble",
    avg: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
    stable: "Yes",
    note: "可用提前停止處理已排序資料；反向資料會產生大量交換。",
  },
  merge: {
    label: "Merge",
    avg: "O(n log n)",
    worst: "O(n log n)",
    space: "O(n)",
    stable: "Yes",
    note: "時間穩定但需要額外陣列；很適合連結串列或外部排序脈絡。",
  },
  quick: {
    label: "Quick",
    avg: "O(n log n)",
    worst: "O(n²)",
    space: "O(log n)",
    stable: "No",
    note: "分割品質決定深度；樞紐選得差會退化成偏斜遞迴。",
  },
  heap: {
    label: "Heap",
    avg: "O(n log n)",
    worst: "O(n log n)",
    space: "O(1)",
    stable: "No",
    note: "先建立最大堆，再反覆把根移到尾端；原地但不穩定。",
  },
  radix: {
    label: "Radix",
    avg: "O(d(n + k))",
    worst: "O(d(n + k))",
    space: "O(n + k)",
    stable: "Yes",
    note: "LSD Radix Sort 由低位數到高位數做穩定分配；適合固定長度整數或字串鍵值。",
  },
};

const sortState = {
  algorithm: "insertion",
  dataset: "random",
  base: [],
  steps: [],
  index: 0,
  timer: null,
  playing: false,
};

function initSortingLab() {
  renderSortTable();
  createSortData();

  $("#sort-dataset").addEventListener("change", (event) => {
    sortState.dataset = event.target.value;
    createSortData();
  });

  $("#sort-size").addEventListener("input", createSortData);
  $("#sort-new").addEventListener("click", createSortData);
  $("#sort-reset").addEventListener("click", () => {
    pauseSort();
    prepareSortSteps();
  });
  $("#sort-step").addEventListener("click", () => {
    pauseSort();
    advanceSortStep();
  });
  $("#sort-play").addEventListener("click", toggleSortPlayback);

  $$(".algorithm-tabs [data-sort]").forEach((button) => {
    button.addEventListener("click", () => {
      pauseSort();
      sortState.algorithm = button.dataset.sort;
      setActiveButton($$(".algorithm-tabs [data-sort]"), button);
      prepareSortSteps();
      renderSortTable();
    });
  });
}

function createSortData() {
  pauseSort();
  const size = Number($("#sort-size").value);
  sortState.dataset = $("#sort-dataset").value;
  sortState.base = generateData(sortState.dataset, size);
  prepareSortSteps();
}

function generateData(kind, size) {
  const values = [];
  if (kind === "nearly") {
    for (let i = 0; i < size; i += 1) values.push(12 + Math.round((i / Math.max(1, size - 1)) * 86));
    const swaps = Math.max(2, Math.round(size * 0.16));
    for (let i = 0; i < swaps; i += 1) {
      const a = Math.floor(Math.random() * size);
      const b = clamp(a + Math.floor(Math.random() * 5) - 2, 0, size - 1);
      [values[a], values[b]] = [values[b], values[a]];
    }
    return values;
  }
  if (kind === "reversed") {
    for (let i = 0; i < size; i += 1) values.push(98 - Math.round((i / Math.max(1, size - 1)) * 86));
    return values;
  }
  if (kind === "duplicates") {
    const bucket = [18, 24, 31, 43, 58, 72, 86];
    for (let i = 0; i < size; i += 1) values.push(bucket[Math.floor(Math.random() * bucket.length)]);
    return values;
  }
  for (let i = 0; i < size; i += 1) values.push(12 + Math.floor(Math.random() * 87));
  return values;
}

function prepareSortSteps() {
  sortState.steps = buildSortSteps(sortState.algorithm, sortState.base);
  sortState.index = 0;
  renderSortStep();
}

function buildSortSteps(algorithm, source) {
  const arr = source.slice();
  const steps = [];
  let comparisons = 0;
  let writes = 0;

  const record = (action, compare = [], highlight = [], note = "", sorted = []) => {
    steps.push({
      values: arr.slice(),
      compare: compare.slice(),
      highlight: highlight.slice(),
      sorted: sorted.slice(),
      action,
      note,
      comparisons,
      writes,
    });
  };

  const swap = (a, b) => {
    if (a === b) return;
    [arr[a], arr[b]] = [arr[b], arr[a]];
    writes += 2;
  };

  record("start", [], [], "起始資料。");

  if (algorithm === "insertion") {
    for (let i = 1; i < arr.length; i += 1) {
      const key = arr[i];
      let j = i - 1;
      record("take key", [], [i], `取出 key=${key}，插入左側已排序區。`, range(0, i - 1));
      while (j >= 0) {
        comparisons += 1;
        record("compare", [j, j + 1], [i], `比較 ${arr[j]} 與 key=${key}。`, range(0, i - 1));
        if (arr[j] <= key) break;
        arr[j + 1] = arr[j];
        writes += 1;
        record("shift", [j, j + 1], [j + 1], `${arr[j]} 向右移動。`, range(0, i - 1));
        j -= 1;
      }
      arr[j + 1] = key;
      writes += 1;
      record("insert", [], [j + 1], `key=${key} 放入位置 ${j + 1}。`, range(0, i));
    }
  }

  if (algorithm === "selection") {
    for (let i = 0; i < arr.length - 1; i += 1) {
      let min = i;
      record("select", [], [i], `從位置 ${i} 起尋找最小值。`, range(0, i - 1));
      for (let j = i + 1; j < arr.length; j += 1) {
        comparisons += 1;
        record("compare", [min, j], [min], `目前最小值 ${arr[min]}，比較 ${arr[j]}。`, range(0, i - 1));
        if (arr[j] < arr[min]) {
          min = j;
          record("new min", [], [min], `新的最小值在位置 ${min}。`, range(0, i - 1));
        }
      }
      swap(i, min);
      record("place min", [i, min], [i], `把本輪最小值放到位置 ${i}。`, range(0, i));
    }
  }

  if (algorithm === "bubble") {
    for (let end = arr.length - 1; end > 0; end -= 1) {
      let swapped = false;
      for (let i = 0; i < end; i += 1) {
        comparisons += 1;
        record("compare", [i, i + 1], [], `比較相鄰值 ${arr[i]} 與 ${arr[i + 1]}。`, range(end + 1, arr.length - 1));
        if (arr[i] > arr[i + 1]) {
          swap(i, i + 1);
          swapped = true;
          record("swap", [i, i + 1], [i, i + 1], "相鄰交換。", range(end + 1, arr.length - 1));
        }
      }
      record("pass done", [], [end], `位置 ${end} 之後已固定。`, range(end, arr.length - 1));
      if (!swapped) break;
    }
  }

  if (algorithm === "merge") {
    const mergeSort = (left, right) => {
      if (left >= right) return;
      const mid = Math.floor((left + right) / 2);
      record("split", [], range(left, right), `切分區間 [${left}, ${right}]。`);
      mergeSort(left, mid);
      mergeSort(mid + 1, right);
      const leftValues = arr.slice(left, mid + 1);
      const rightValues = arr.slice(mid + 1, right + 1);
      let i = 0;
      let j = 0;
      let k = left;
      while (i < leftValues.length && j < rightValues.length) {
        comparisons += 1;
        record("merge compare", [left + i, mid + 1 + j], [k], `合併時比較 ${leftValues[i]} 與 ${rightValues[j]}。`);
        if (leftValues[i] <= rightValues[j]) {
          arr[k] = leftValues[i];
          i += 1;
        } else {
          arr[k] = rightValues[j];
          j += 1;
        }
        writes += 1;
        record("merge write", [], [k], `寫入位置 ${k}。`);
        k += 1;
      }
      while (i < leftValues.length) {
        arr[k] = leftValues[i];
        writes += 1;
        record("merge write", [], [k], `左半剩餘值寫入位置 ${k}。`);
        i += 1;
        k += 1;
      }
      while (j < rightValues.length) {
        arr[k] = rightValues[j];
        writes += 1;
        record("merge write", [], [k], `右半剩餘值寫入位置 ${k}。`);
        j += 1;
        k += 1;
      }
    };
    mergeSort(0, arr.length - 1);
  }

  if (algorithm === "quick") {
    const quickSort = (left, right) => {
      if (left >= right) return;
      const pivot = arr[right];
      let i = left - 1;
      record("pivot", [], [right], `選 ${pivot} 作為樞紐。`);
      for (let j = left; j < right; j += 1) {
        comparisons += 1;
        record("partition compare", [j, right], [right], `比較 ${arr[j]} 與 pivot=${pivot}。`);
        if (arr[j] <= pivot) {
          i += 1;
          swap(i, j);
          record("partition swap", [i, j], [i, j], `小於等於 pivot 的值移到左側。`);
        }
      }
      swap(i + 1, right);
      record("pivot placed", [i + 1, right], [i + 1], `pivot 放到位置 ${i + 1}。`);
      quickSort(left, i);
      quickSort(i + 2, right);
    };
    quickSort(0, arr.length - 1);
  }

  if (algorithm === "heap") {
    const heapify = (heapSize, root) => {
      let largest = root;
      const left = root * 2 + 1;
      const right = root * 2 + 2;
      if (left < heapSize) {
        comparisons += 1;
        record("heap compare", [largest, left], [root], `比較父節點與左子節點。`, range(heapSize, arr.length - 1));
        if (arr[left] > arr[largest]) largest = left;
      }
      if (right < heapSize) {
        comparisons += 1;
        record("heap compare", [largest, right], [root], `比較目前最大值與右子節點。`, range(heapSize, arr.length - 1));
        if (arr[right] > arr[largest]) largest = right;
      }
      if (largest !== root) {
        swap(root, largest);
        record("heap swap", [root, largest], [largest], "交換後繼續向下調整。", range(heapSize, arr.length - 1));
        heapify(heapSize, largest);
      }
    };
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i -= 1) {
      heapify(arr.length, i);
    }
    for (let end = arr.length - 1; end > 0; end -= 1) {
      swap(0, end);
      record("extract max", [0, end], [end], `最大值移到位置 ${end}。`, range(end, arr.length - 1));
      heapify(end, 0);
    }
  }

  if (algorithm === "radix") {
    const max = Math.max(...arr, 0);
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
      const buckets = Array.from({ length: 10 }, () => []);
      record("digit pass", [], [], `依 ${exp === 1 ? "個位" : exp === 10 ? "十位" : `${exp} 位`} 分配到 0-9 桶。`);

      for (let i = 0; i < arr.length; i += 1) {
        const digit = Math.floor(arr[i] / exp) % 10;
        buckets[digit].push(arr[i]);
        writes += 1;
        record("bucket", [], [i], `${arr[i]} 的目前位數是 ${digit}，放入 bucket ${digit}。`);
      }

      let index = 0;
      for (let digit = 0; digit < buckets.length; digit += 1) {
        for (const value of buckets[digit]) {
          arr[index] = value;
          writes += 1;
          record("collect", [], [index], `從 bucket ${digit} 穩定收回 ${value}。`);
          index += 1;
        }
      }
      record("pass done", [], range(0, arr.length - 1), `完成 ${exp === 1 ? "個位" : exp === 10 ? "十位" : `${exp} 位`} 分配。`);
    }
  }

  record("done", [], range(0, arr.length - 1), "排序完成。", range(0, arr.length - 1));
  return steps;
}

function range(start, end) {
  if (end < start) return [];
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

function renderSortTable() {
  $("#sort-table").innerHTML = Object.entries(sortMeta)
    .map(([key, meta]) => {
      const active = key === sortState.algorithm ? " class=\"active-row\"" : "";
      return `<tr${active}><td>${meta.label}</td><td>${meta.avg}</td><td>${meta.worst}</td><td>${meta.space}</td><td>${meta.stable}</td></tr>`;
    })
    .join("");
}

function renderSortStep() {
  const svg = $("#sort-svg");
  const step = sortState.steps[sortState.index] || { values: sortState.base, compare: [], highlight: [], sorted: [] };
  const values = step.values;
  const width = 1000;
  const height = 380;
  const pad = 24;
  const barGap = 4;
  const maxValue = Math.max(...values, 1);
  const barWidth = (width - pad * 2) / values.length;

  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.innerHTML = "";

  values.forEach((value, index) => {
    const x = pad + index * barWidth + barGap / 2;
    const usable = height - 74;
    const barHeight = Math.max(6, (value / maxValue) * usable);
    const y = height - 42 - barHeight;
    let fill = "#007c89";
    if (step.sorted?.includes(index)) fill = "#27855d";
    if (step.compare?.includes(index)) fill = "#d94f45";
    if (step.highlight?.includes(index)) fill = "#f0ad2c";
    svg.appendChild(
      makeSvgElement("rect", {
        class: "bar",
        x,
        y,
        width: Math.max(4, barWidth - barGap),
        height: barHeight,
        rx: 5,
        fill,
      }),
    );
    if (values.length <= 30) {
      svg.appendChild(
        makeSvgElement(
          "text",
          {
            class: "bar-label",
            x: x + (barWidth - barGap) / 2,
            y: height - 16,
            "text-anchor": "middle",
          },
          String(value),
        ),
      );
    }
  });

  $("#sort-step-count").textContent = `${sortState.index + 1} / ${sortState.steps.length}`;
  $("#sort-comparisons").textContent = step.comparisons ?? 0;
  $("#sort-writes").textContent = step.writes ?? 0;
  $("#sort-status").textContent = step.action || "Ready";
  $("#sort-note").textContent = step.note || sortMeta[sortState.algorithm].note;
}

function advanceSortStep() {
  if (sortState.index < sortState.steps.length - 1) {
    sortState.index += 1;
    renderSortStep();
  } else {
    pauseSort();
  }
}

function toggleSortPlayback() {
  if (sortState.playing) {
    pauseSort();
    return;
  }
  sortState.playing = true;
  $("#sort-play span").textContent = "暫停";
  sortState.timer = window.setInterval(() => {
    advanceSortStep();
  }, Number($("#sort-speed").value));
}

function pauseSort() {
  if (sortState.timer) window.clearInterval(sortState.timer);
  sortState.timer = null;
  sortState.playing = false;
  const playLabel = $("#sort-play span");
  if (playLabel) playLabel.textContent = "播放";
}

const treeState = {
  root: null,
  values: [],
  traversal: "inorder",
};

function initTreeLab() {
  $("#tree-build").addEventListener("click", buildTreeFromInput);
  $("#tree-random").addEventListener("click", () => {
    const values = uniqueRandomValues(10, 12, 92);
    $("#tree-input").value = values.join(", ");
    buildTreeFromInput();
  });
  $$("#trees [data-traversal]").forEach((button) => {
    button.addEventListener("click", () => {
      treeState.traversal = button.dataset.traversal;
      setActiveButton($$("#trees [data-traversal]"), button);
      renderTree();
    });
  });
  buildTreeFromInput();
}

function uniqueRandomValues(count, min, max) {
  const values = new Set();
  while (values.size < count) {
    values.add(min + Math.floor(Math.random() * (max - min + 1)));
  }
  return Array.from(values);
}

function buildTreeFromInput() {
  const values = parseKeyInput($("#tree-input").value);
  treeState.values = values;
  treeState.root = values.reduce((root, value) => insertBst(root, value), null);
  renderTree();
}

function parseKeyInput(text) {
  const values = text
    .split(/[\s,;]+/)
    .map((item) => Number(item.trim()))
    .filter((value) => Number.isFinite(value))
    .map((value) => Math.round(value));
  return Array.from(new Set(values)).slice(0, 18);
}

function insertBst(root, value) {
  if (!root) return { value, left: null, right: null };
  if (value < root.value) root.left = insertBst(root.left, value);
  if (value > root.value) root.right = insertBst(root.right, value);
  return root;
}

function buildBalancedTree(values) {
  if (!values.length) return null;
  const mid = Math.floor(values.length / 2);
  return {
    value: values[mid],
    left: buildBalancedTree(values.slice(0, mid)),
    right: buildBalancedTree(values.slice(mid + 1)),
  };
}

function treeHeight(node) {
  if (!node) return 0;
  return 1 + Math.max(treeHeight(node.left), treeHeight(node.right));
}

function countNodes(node) {
  if (!node) return 0;
  return 1 + countNodes(node.left) + countNodes(node.right);
}

function countLeaves(node) {
  if (!node) return 0;
  if (!node.left && !node.right) return 1;
  return countLeaves(node.left) + countLeaves(node.right);
}

function treeBalanceInfo(node) {
  let balanced = true;
  const inspect = (current) => {
    if (!current) return 0;
    const left = inspect(current.left);
    const right = inspect(current.right);
    if (Math.abs(left - right) > 1) balanced = false;
    return 1 + Math.max(left, right);
  };
  inspect(node);
  return balanced ? "良好" : "偏斜";
}

function traverseTree(node, mode) {
  if (!node) return [];
  if (mode === "preorder") return [node.value, ...traverseTree(node.left, mode), ...traverseTree(node.right, mode)];
  if (mode === "postorder") return [...traverseTree(node.left, mode), ...traverseTree(node.right, mode), node.value];
  if (mode === "levelorder") {
    const output = [];
    const queue = [node];
    while (queue.length) {
      const current = queue.shift();
      output.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return output;
  }
  return [...traverseTree(node.left, mode), node.value, ...traverseTree(node.right, mode)];
}

function layoutTree(root, width, levelGap) {
  const nodes = [];
  const edges = [];
  let order = 0;
  const total = countNodes(root);

  const walk = (node, depth, parent = null) => {
    if (!node) return;
    walk(node.left, depth + 1, node);
    order += 1;
    node._x = (order / (total + 1)) * width;
    node._y = 52 + depth * levelGap;
    nodes.push(node);
    if (parent) {
      edges.push({ from: parent, to: node });
    }
    walk(node.right, depth + 1, node);
  };

  walk(root, 0);
  return { nodes, edges };
}

function renderTree() {
  const root = treeState.root;
  const svg = $("#tree-svg");
  const width = 1000;
  const height = Math.max(430, treeHeight(root) * 88 + 80);
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.innerHTML = "";

  if (!root) return;
  const { nodes, edges } = layoutTree(root, width, 74);
  const traversal = traverseTree(root, treeState.traversal);
  const currentValue = traversal[0];

  edges.forEach((edge) => {
    svg.appendChild(
      makeSvgElement("line", {
        class: "tree-edge",
        x1: edge.from._x,
        y1: edge.from._y,
        x2: edge.to._x,
        y2: edge.to._y,
        "stroke-width": 3,
      }),
    );
  });

  nodes.forEach((node) => {
    const group = makeSvgElement("g");
    group.appendChild(
      makeSvgElement("circle", {
        class: `tree-node${node.value === currentValue ? " current" : ""}`,
        cx: node._x,
        cy: node._y,
        r: 23,
      }),
    );
    group.appendChild(makeSvgElement("text", { class: "node-label", x: node._x, y: node._y + 5 }, String(node.value)));
    svg.appendChild(group);
  });

  $("#tree-height").textContent = treeHeight(root);
  $("#tree-nodes").textContent = countNodes(root);
  $("#tree-leaves").textContent = countLeaves(root);
  $("#tree-balance").textContent = treeBalanceInfo(root);
  $("#traversal-output").innerHTML = traversal.map((value) => `<span>${value}</span>`).join("");
  $("#tree-note").textContent =
    treeState.traversal === "inorder"
      ? "BST 的中序走訪會得到遞增序列，可作為排序與搜尋樹性質的連結。"
      : "不同走訪順序對應不同的遞迴時機：先處理根、左右子樹之間，或最後處理根。";

  renderTreeComparison();
}

function renderTreeComparison() {
  const sortedValues = treeState.values.slice().sort((a, b) => a - b);
  const skewRoot = sortedValues.reduce((root, value) => insertBst(root, value), null);
  const balancedRoot = buildBalancedTree(sortedValues);
  drawMiniTree($("#tree-skew-svg"), skewRoot);
  drawMiniTree($("#tree-balanced-svg"), balancedRoot);
}

function drawMiniTree(svg, root) {
  const width = 320;
  const height = 160;
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.innerHTML = "";
  if (!root) return;
  const levelGap = Math.max(24, (height - 32) / Math.max(1, treeHeight(root)));
  const { nodes, edges } = layoutTree(root, width, levelGap);
  edges.forEach((edge) => {
    svg.appendChild(
      makeSvgElement("line", {
        class: "tree-edge",
        x1: edge.from._x,
        y1: edge.from._y * 0.82 + 8,
        x2: edge.to._x,
        y2: edge.to._y * 0.82 + 8,
        "stroke-width": 2,
      }),
    );
  });
  nodes.forEach((node) => {
    const y = node._y * 0.82 + 8;
    svg.appendChild(makeSvgElement("circle", { class: "tree-node", cx: node._x, cy: y, r: 10 }));
  });
}

const graphNodes = [
  { id: "A", x: 110, y: 90 },
  { id: "B", x: 320, y: 70 },
  { id: "C", x: 225, y: 210 },
  { id: "D", x: 470, y: 185 },
  { id: "E", x: 650, y: 95 },
  { id: "F", x: 610, y: 300 },
  { id: "G", x: 360, y: 335 },
];

const graphEdges = [
  { a: "A", b: "B", w: 4 },
  { a: "A", b: "C", w: 2 },
  { a: "B", b: "C", w: 1 },
  { a: "B", b: "D", w: 5 },
  { a: "C", b: "D", w: 8 },
  { a: "C", b: "G", w: 10 },
  { a: "D", b: "E", w: 6 },
  { a: "D", b: "F", w: 2 },
  { a: "D", b: "G", w: 3 },
  { a: "E", b: "F", w: 7 },
  { a: "F", b: "G", w: 1 },
];

const graphState = {
  mode: "bfs",
  representation: "list",
  steps: [],
  index: 0,
};

function initGraphLab() {
  $$("[data-graph]").forEach((button) => {
    button.addEventListener("click", () => {
      graphState.mode = button.dataset.graph;
      setActiveButton($$("[data-graph]"), button);
      prepareGraphSteps();
    });
  });
  $("#graph-start").addEventListener("change", prepareGraphSteps);
  $("#graph-step").addEventListener("click", () => {
    if (graphState.index < graphState.steps.length - 1) {
      graphState.index += 1;
      renderGraphStep();
    }
  });
  $$("#graphs [data-rep]").forEach((button) => {
    button.addEventListener("click", () => {
      graphState.representation = button.dataset.rep;
      setActiveButton($$("#graphs [data-rep]"), button);
      renderGraphRepresentation();
    });
  });
  prepareGraphSteps();
  renderGraphRepresentation();
}

function edgeKey(a, b) {
  return [a, b].sort().join("-");
}

function adjacencyList() {
  const adjacency = new Map(graphNodes.map((node) => [node.id, []]));
  graphEdges.forEach((edge) => {
    adjacency.get(edge.a).push({ to: edge.b, w: edge.w, key: edgeKey(edge.a, edge.b) });
    adjacency.get(edge.b).push({ to: edge.a, w: edge.w, key: edgeKey(edge.a, edge.b) });
  });
  adjacency.forEach((neighbors) => neighbors.sort((a, b) => a.to.localeCompare(b.to)));
  return adjacency;
}

function prepareGraphSteps() {
  const start = $("#graph-start").value;
  if (graphState.mode === "dfs") graphState.steps = buildDfsSteps(start);
  if (graphState.mode === "dijkstra") graphState.steps = buildDijkstraSteps(start);
  if (graphState.mode === "mst") graphState.steps = buildMstSteps(start);
  if (graphState.mode === "bfs") graphState.steps = buildBfsSteps(start);
  graphState.index = 0;
  renderGraphStep();
}

function buildBfsSteps(start) {
  const adjacency = adjacencyList();
  const visited = new Set([start]);
  const queue = [start];
  const treeEdges = [];
  const steps = [];
  const record = (current, activeEdge, note) => {
    steps.push({
      current,
      visited: Array.from(visited),
      frontier: queue.slice(),
      activeEdges: activeEdge ? [activeEdge] : [],
      selectedEdges: treeEdges.slice(),
      total: treeEdges.length,
      note,
    });
  };
  record(start, null, `BFS 從 ${start} 開始。`);
  while (queue.length) {
    const current = queue.shift();
    record(current, null, `取出 ${current}。`);
    adjacency.get(current).forEach((edge) => {
      if (!visited.has(edge.to)) {
        visited.add(edge.to);
        queue.push(edge.to);
        treeEdges.push(edge.key);
        record(edge.to, edge.key, `${current} 發現 ${edge.to}，加入佇列。`);
      }
    });
  }
  record(null, null, "BFS 完成。");
  return steps;
}

function buildDfsSteps(start) {
  const adjacency = adjacencyList();
  const visited = new Set();
  const treeEdges = [];
  const steps = [];
  const stack = [];
  const record = (current, activeEdge, note) => {
    steps.push({
      current,
      visited: Array.from(visited),
      frontier: stack.slice(),
      activeEdges: activeEdge ? [activeEdge] : [],
      selectedEdges: treeEdges.slice(),
      total: treeEdges.length,
      note,
    });
  };
  const dfs = (node) => {
    visited.add(node);
    stack.push(node);
    record(node, null, `DFS 進入 ${node}。`);
    adjacency.get(node).forEach((edge) => {
      if (!visited.has(edge.to)) {
        treeEdges.push(edge.key);
        record(node, edge.key, `${node} 沿邊前往 ${edge.to}。`);
        dfs(edge.to);
      }
    });
    stack.pop();
    record(node, null, `DFS 離開 ${node}。`);
  };
  dfs(start);
  record(null, null, "DFS 完成。");
  return steps;
}

function buildDijkstraSteps(start) {
  const adjacency = adjacencyList();
  const dist = Object.fromEntries(graphNodes.map((node) => [node.id, Infinity]));
  const prev = {};
  const visited = new Set();
  const unvisited = new Set(graphNodes.map((node) => node.id));
  const steps = [];
  dist[start] = 0;

  const selectedEdges = () =>
    Object.entries(prev)
      .filter(([, parent]) => parent)
      .map(([node, parent]) => edgeKey(node, parent));

  const frontier = () =>
    Array.from(unvisited)
      .filter((id) => Number.isFinite(dist[id]))
      .sort((a, b) => dist[a] - dist[b])
      .map((id) => `${id}:${dist[id]}`);

  const record = (current, activeEdge, note) => {
    steps.push({
      current,
      visited: Array.from(visited),
      frontier: frontier(),
      activeEdges: activeEdge ? [activeEdge] : [],
      selectedEdges: selectedEdges(),
      total: Number.isFinite(dist[current]) ? dist[current] : "-",
      note,
    });
  };

  record(start, null, `Dijkstra 從 ${start} 開始，距離為 0。`);
  while (unvisited.size) {
    const current = Array.from(unvisited).sort((a, b) => dist[a] - dist[b])[0];
    if (!Number.isFinite(dist[current])) break;
    unvisited.delete(current);
    visited.add(current);
    record(current, null, `鎖定 ${current}，目前最短距離 ${dist[current]}。`);
    adjacency.get(current).forEach((edge) => {
      if (visited.has(edge.to)) return;
      const candidate = dist[current] + edge.w;
      if (candidate < dist[edge.to]) {
        dist[edge.to] = candidate;
        prev[edge.to] = current;
        record(edge.to, edge.key, `${edge.to} 距離更新為 ${candidate}。`);
      } else {
        record(edge.to, edge.key, `${edge.to} 保持距離 ${dist[edge.to]}。`);
      }
    });
  }
  steps.push({
    current: null,
    visited: Array.from(visited),
    frontier: Object.entries(dist).map(([id, value]) => `${id}:${value}`),
    activeEdges: [],
    selectedEdges: selectedEdges(),
    total: "-",
    note: "最短路徑樹完成。",
  });
  return steps;
}

function buildMstSteps(start) {
  const visited = new Set([start]);
  const selected = [];
  const steps = [];
  let total = 0;

  const record = (current, activeEdge, note) => {
    steps.push({
      current,
      visited: Array.from(visited),
      frontier: candidateEdges(visited).map((edge) => `${edge.a}${edge.b}:${edge.w}`),
      activeEdges: activeEdge ? [activeEdge] : [],
      selectedEdges: selected.map((edge) => edge.key),
      total,
      note,
    });
  };

  record(start, null, `Prim MST 從 ${start} 開始。`);
  while (visited.size < graphNodes.length) {
    const candidate = candidateEdges(visited)[0];
    if (!candidate) break;
    const next = visited.has(candidate.a) ? candidate.b : candidate.a;
    visited.add(next);
    selected.push(candidate);
    total += candidate.w;
    record(next, candidate.key, `選擇權重 ${candidate.w} 的邊 ${candidate.a}-${candidate.b}。`);
  }
  record(null, null, "MST 完成。");
  return steps;
}

function candidateEdges(visited) {
  return graphEdges
    .filter((edge) => visited.has(edge.a) !== visited.has(edge.b))
    .map((edge) => ({ ...edge, key: edgeKey(edge.a, edge.b) }))
    .sort((a, b) => a.w - b.w || a.key.localeCompare(b.key));
}

function renderGraphStep() {
  const svg = $("#graph-svg");
  const width = 760;
  const height = 420;
  const step = graphState.steps[graphState.index] || {};
  const nodeById = new Map(graphNodes.map((node) => [node.id, node]));
  const visited = new Set(step.visited || []);
  const frontier = new Set((step.frontier || []).map((item) => String(item).split(":")[0]));
  const activeEdges = new Set(step.activeEdges || []);
  const selectedEdges = new Set(step.selectedEdges || []);

  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.innerHTML = "";

  graphEdges.forEach((edge) => {
    const from = nodeById.get(edge.a);
    const to = nodeById.get(edge.b);
    const key = edgeKey(edge.a, edge.b);
    const className = `graph-edge${selectedEdges.has(key) ? " selected" : ""}${activeEdges.has(key) ? " active" : ""}`;
    svg.appendChild(
      makeSvgElement("line", {
        class: className,
        x1: from.x,
        y1: from.y,
        x2: to.x,
        y2: to.y,
        "stroke-width": 3,
      }),
    );
    svg.appendChild(
      makeSvgElement(
        "text",
        {
          class: "edge-label",
          x: (from.x + to.x) / 2,
          y: (from.y + to.y) / 2 - 6,
        },
        String(edge.w),
      ),
    );
  });

  graphNodes.forEach((node) => {
    let className = "graph-node";
    if (visited.has(node.id)) className += " visited";
    if (frontier.has(node.id)) className += " frontier";
    if (step.current === node.id) className += " current";
    svg.appendChild(makeSvgElement("circle", { class: className, cx: node.x, cy: node.y, r: 24 }));
    svg.appendChild(makeSvgElement("text", { class: "node-label", x: node.x, y: node.y + 5 }, node.id));
  });

  $("#graph-step-count").textContent = `${graphState.index + 1} / ${graphState.steps.length}`;
  $("#graph-frontier").textContent = (step.frontier || []).join(", ") || "-";
  $("#graph-visited").textContent = (step.visited || []).join(", ") || "-";
  $("#graph-total").textContent = step.total ?? "-";
  $("#graph-note").textContent = step.note || "選擇演算法。";
}

function renderGraphRepresentation() {
  const output = $("#graph-representation");
  const ids = graphNodes.map((node) => node.id);
  if (graphState.representation === "matrix") {
    const matrix = ids.map(() => ids.map(() => "·"));
    graphEdges.forEach((edge) => {
      const i = ids.indexOf(edge.a);
      const j = ids.indexOf(edge.b);
      matrix[i][j] = String(edge.w);
      matrix[j][i] = String(edge.w);
    });
    output.textContent = ["    " + ids.join("  "), ...matrix.map((row, index) => `${ids[index]} | ${row.map((cell) => cell.padStart(2, " ")).join(" ")}`)].join("\n");
    return;
  }
  const adjacency = adjacencyList();
  output.textContent = Array.from(adjacency.entries())
    .map(([id, neighbors]) => `${id}: ${neighbors.map((edge) => `${edge.to}(${edge.w})`).join(", ")}`)
    .join("\n");
}

const heapDemoPositions = [
  { x: 380, y: 58 },
  { x: 220, y: 135 },
  { x: 540, y: 135 },
  { x: 125, y: 220 },
  { x: 315, y: 220 },
  { x: 465, y: 220 },
  { x: 635, y: 220 },
  { x: 78, y: 315 },
  { x: 172, y: 315 },
  { x: 315, y: 315 },
];

const heapDemoState = {
  base: [26, 5, 77, 1, 61, 11, 59, 15, 48, 19],
  steps: [],
  index: 0,
  timer: null,
  playing: false,
};

function initHeapDemo() {
  heapDemoState.steps = buildHeapDemoSteps(heapDemoState.base);
  heapDemoState.index = 0;
  renderHeapDemoStep();

  $("#heap-demo-step").addEventListener("click", () => {
    pauseHeapDemo();
    advanceHeapDemoStep();
  });
  $("#heap-demo-reset").addEventListener("click", () => {
    pauseHeapDemo();
    heapDemoState.index = 0;
    renderHeapDemoStep();
  });
  $("#heap-demo-play").addEventListener("click", toggleHeapDemoPlayback);
}

function buildHeapDemoSteps(source) {
  const arr = source.slice();
  const steps = [];
  let heapSize = arr.length;

  const record = (phase, message, highlights = {}) => {
    steps.push({
      values: arr.slice(),
      heapSize,
      phase,
      message,
      compare: highlights.compare || [],
      swap: highlights.swap || [],
      focus: highlights.focus || [],
      sorted: range(heapSize, arr.length - 1),
    });
  };

  const swap = (a, b) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  };

  const heapify = (size, root) => {
    let largest = root;
    const left = root * 2 + 1;
    const right = root * 2 + 2;

    record("heapify", `檢查節點 [${root + 1}]，目前值 ${arr[root]}。`, { focus: [root] });

    if (left < size) {
      record("compare", `比較 [${root + 1}] ${arr[largest]} 與左子節點 [${left + 1}] ${arr[left]}。`, {
        compare: [largest, left],
      });
      if (arr[left] > arr[largest]) {
        largest = left;
        record("select", `左子節點 [${left + 1}] 成為目前較大者。`, { focus: [largest] });
      }
    }

    if (right < size) {
      record("compare", `比較目前較大者 [${largest + 1}] ${arr[largest]} 與右子節點 [${right + 1}] ${arr[right]}。`, {
        compare: [largest, right],
      });
      if (arr[right] > arr[largest]) {
        largest = right;
        record("select", `右子節點 [${right + 1}] 成為目前較大者。`, { focus: [largest] });
      }
    }

    if (largest !== root) {
      record("swap", `交換 [${root + 1}] ${arr[root]} 與 [${largest + 1}] ${arr[largest]}，讓較大值往上。`, {
        swap: [root, largest],
      });
      swap(root, largest);
      record("after swap", `交換完成，繼續從 [${largest + 1}] 向下調整。`, { swap: [root, largest] });
      heapify(size, largest);
    } else {
      record("keep", `[${root + 1}] 已符合 max heap 性質。`, { focus: [root] });
    }
  };

  record("start", "原始陣列以 1-based index 對應完全二元樹。");
  for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i -= 1) {
    record("build", `Build max heap：從最後一個非葉節點 [${i + 1}] 開始 heapify。`, { focus: [i] });
    heapify(heapSize, i);
  }
  record("heap built", "最大堆建立完成，根節點是目前 heap 中最大值。", { focus: [0] });

  for (let end = arr.length - 1; end > 0; end -= 1) {
    record("extract max", `交換 root [1] ${arr[0]} 與尾端 [${end + 1}] ${arr[end]}，把最大值放入排序區。`, {
      swap: [0, end],
    });
    swap(0, end);
    heapSize = end;
    record("sorted grows", `[${end + 1}] 已固定，右側排序區擴大。`, { sorted: range(heapSize, arr.length - 1), focus: [end] });
    heapify(heapSize, 0);
  }
  heapSize = 0;
  record("done", "Heap Sort 完成，整個陣列已遞增排序。", { sorted: range(0, arr.length - 1) });
  return steps;
}

function toggleHeapDemoPlayback() {
  if (heapDemoState.playing) {
    pauseHeapDemo();
    return;
  }
  heapDemoState.playing = true;
  $("#heap-demo-play span").textContent = "暫停";
  heapDemoState.timer = window.setInterval(() => {
    advanceHeapDemoStep();
  }, 850);
}

function pauseHeapDemo() {
  if (heapDemoState.timer) window.clearInterval(heapDemoState.timer);
  heapDemoState.timer = null;
  heapDemoState.playing = false;
  const label = $("#heap-demo-play span");
  if (label) label.textContent = "播放";
}

function advanceHeapDemoStep() {
  if (heapDemoState.index < heapDemoState.steps.length - 1) {
    heapDemoState.index += 1;
    renderHeapDemoStep();
  } else {
    pauseHeapDemo();
  }
}

function renderHeapDemoStep() {
  const step = heapDemoState.steps[heapDemoState.index];
  const svg = $("#heap-demo-svg");
  const array = $("#heap-demo-array");
  const sortedSet = new Set(step.sorted || []);
  const compareSet = new Set(step.compare || []);
  const swapSet = new Set(step.swap || []);
  const focusSet = new Set(step.focus || []);

  svg.innerHTML = "";
  const edgePairs = heapDemoPositions
    .map((_, index) => [Math.floor((index - 1) / 2), index])
    .filter((pair) => pair[1] > 0);

  edgePairs.forEach(([parent, child]) => {
    const from = heapDemoPositions[parent];
    const to = heapDemoPositions[child];
    const muted = child >= step.heapSize;
    svg.appendChild(
      makeSvgElement("line", {
        class: `heap-demo-edge${muted ? " muted" : ""}`,
        x1: from.x,
        y1: from.y,
        x2: to.x,
        y2: to.y,
      }),
    );
  });

  step.values.forEach((value, index) => {
    const pos = heapDemoPositions[index];
    let cls = "heap-demo-node";
    if (index >= step.heapSize) cls += " outside";
    if (sortedSet.has(index)) cls += " sorted";
    if (compareSet.has(index) || focusSet.has(index)) cls += " compare";
    if (swapSet.has(index)) cls += " swap";
    svg.appendChild(makeSvgElement("circle", { class: cls, cx: pos.x, cy: pos.y, r: 27 }));
    svg.appendChild(makeSvgElement("text", { class: "heap-demo-value", x: pos.x, y: pos.y + 8 }, String(value)));
    svg.appendChild(makeSvgElement("text", { class: "heap-demo-index", x: pos.x - 38, y: pos.y + 5 }, `[${index + 1}]`));
  });

  array.innerHTML = step.values
    .map((value, index) => {
      const classes = ["heap-demo-cell"];
      if (sortedSet.has(index)) classes.push("sorted");
      if (compareSet.has(index) || focusSet.has(index)) classes.push("compare");
      if (swapSet.has(index)) classes.push("swap");
      return `<span class="${classes.join(" ")}"><strong>${value}</strong><small>[${index + 1}]</small></span>`;
    })
    .join("");

  $("#heap-demo-step-count").textContent = `${heapDemoState.index + 1} / ${heapDemoState.steps.length}`;
  $("#heap-demo-heap-size").textContent = step.heapSize;
  $("#heap-demo-phase").textContent = step.phase;
  $("#heap-demo-status").textContent = step.message;
}
