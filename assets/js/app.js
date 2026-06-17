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
  if ($("#radix-buckets")) initRadixLab();
  if ($("#tree-svg")) initTreeLab();
  if ($("#custom-tree-canvas")) initCustomTreeBuilder();
  if ($("#graph-svg")) initGraphLab();
  if ($("#custom-graph-canvas")) initCustomGraphBuilder();
  if ($("#heap-demo-svg")) initHeapDemo();

  if (window.lucide) {
    window.lucide.createIcons();
  }
});

const chapters = [
  {
    unit: "Unit 00",
    title: "Standard C Syntax",
    href: "chapters/00-standard-c-syntax.html",
    focus: "C 程式骨架、型別、控制流程、函式、指標、陣列、結構與標準輸入輸出。",
    tags: ["C", "Syntax", "Pointer"],
  },
  {
    unit: "Unit 01",
    title: "Basic Concepts",
    href: "chapters/01-basic-concepts.html",
    focus: "抽象資料型態、遞迴、時間與空間成本、C 語言資料表示。",
    tags: ["ADT", "Complexity", "Recursion"],
  },
  {
    unit: "Unit 02",
    title: "Arrays and Structures",
    href: "chapters/02-arrays-structures.html",
    focus: "陣列、結構、稀疏矩陣、多項式與位址計算。",
    tags: ["Array", "Struct", "Sparse"],
  },
  {
    unit: "Unit 03",
    title: "Stacks and Queues",
    href: "chapters/03-stacks-queues.html",
    focus: "堆疊、佇列、循環佇列、表示式轉換與系統堆疊。",
    tags: ["Stack", "Queue", "Expression"],
  },
  {
    unit: "Unit 04",
    title: "Linked Lists",
    href: "chapters/04-linked-lists.html",
    focus: "單向、雙向、循環串列與動態記憶體管理。",
    tags: ["Pointer", "List", "Memory"],
  },
  {
    unit: "Unit 05",
    title: "Trees",
    href: "chapters/05-trees.html",
    focus: "二元樹、走訪、二元搜尋樹、堆積與樹形成本。",
    tags: ["BST", "Traversal", "Heap"],
  },
  {
    unit: "Unit 06",
    title: "Graphs",
    href: "chapters/06-graphs.html",
    focus: "相鄰矩陣、相鄰串列、BFS、DFS、最短路徑與生成樹。",
    tags: ["BFS", "DFS", "MST"],
  },
  {
    unit: "Unit 07",
    title: "Sorting",
    href: "chapters/07-sorting.html",
    focus: "內部排序、分治、堆積排序、穩定性與資料分布。",
    tags: ["Stable", "Divide", "Heap"],
  },
  {
    unit: "Unit 08",
    title: "Hashing",
    href: "chapters/08-hashing.html",
    focus: "雜湊函數、碰撞處理、開放定址與鏈結法。",
    tags: ["Hash", "Collision", "Load"],
  },
  {
    unit: "Unit 09",
    title: "Priority Queues",
    href: "chapters/09-priority-queues.html",
    focus: "優先佇列 ADT、二元堆積、合併與刪除最小值。",
    tags: ["Priority", "Heap", "Merge"],
  },
  {
    unit: "Unit 10",
    title: "Efficient Binary Search Trees",
    href: "chapters/10-efficient-bsts.html",
    focus: "AVL、伸展樹、紅黑樹等平衡策略與旋轉概念。",
    tags: ["AVL", "Rotation", "Balance"],
  },
  {
    unit: "Unit 11",
    title: "Multiway Search Trees",
    href: "chapters/11-multiway-search-trees.html",
    focus: "B-tree、B+ tree 與外部儲存索引。",
    tags: ["B-tree", "Index", "Disk"],
  },
  {
    unit: "Unit 12",
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
          <span class="chapter-index">${chapter.unit || `Unit ${String(index + 1).padStart(2, "0")}`}</span>
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

const radixLabState = {
  base: [179, 208, 306, 93, 859, 984, 55, 9, 271, 33],
  steps: [],
  index: 0,
  timer: null,
  playing: false,
};

function radixDigitLabel(exp) {
  if (exp === 1) return "個位數";
  if (exp === 10) return "十位數";
  if (exp === 100) return "百位數";
  return `${exp} 位`;
}

function buildRadixLabSteps(source) {
  const arr = source.slice();
  const steps = [];
  const addStep = (exp, phase, buckets, activeValue, activeBucket, note) => {
    steps.push({
      values: arr.slice(),
      exp,
      phase,
      buckets: buckets.map((bucket) => bucket.slice()),
      activeValue,
      activeBucket,
      note,
    });
  };
  addStep(0, "準備", Array.from({ length: 10 }, () => []), null, null, "按下一步，從個位數開始分桶。");

  const max = Math.max(...arr);
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    const buckets = Array.from({ length: 10 }, () => []);
    const label = radixDigitLabel(exp);
    addStep(exp, "開始分桶", buckets, null, null, `${label} pass：由左至右讀取陣列。`);
    for (const value of arr) {
      const digit = Math.floor(value / exp) % 10;
      buckets[digit].push(value);
      addStep(exp, "分桶", buckets, value, digit, `${value} 的${label}是 ${digit}，放入 bucket ${digit}。`);
    }

    let index = 0;
    addStep(exp, "開始收回", buckets, null, null, `從 bucket 0 到 bucket 9 穩定收回資料。`);
    for (let digit = 0; digit < buckets.length; digit += 1) {
      for (const value of buckets[digit]) {
        arr[index] = value;
        index += 1;
        addStep(exp, "收回", buckets, value, digit, `從 bucket ${digit} 收回 ${value}，寫入位置 ${index}。`);
      }
    }
    addStep(exp, "完成一輪", buckets, null, null, `${label} pass 完成：${arr.join(", ")}。`);
  }
  addStep(0, "排序完成", Array.from({ length: 10 }, () => []), null, null, `排序完成：${arr.join(", ")}。`);
  return steps;
}

function initRadixLab() {
  radixLabState.steps = buildRadixLabSteps(radixLabState.base);
  radixLabState.index = 0;
  $("#radix-reset").addEventListener("click", () => {
    pauseRadixLab();
    radixLabState.index = 0;
    renderRadixLab();
  });
  $("#radix-prev").addEventListener("click", () => {
    pauseRadixLab();
    if (radixLabState.index > 0) radixLabState.index -= 1;
    renderRadixLab();
  });
  $("#radix-next").addEventListener("click", () => {
    pauseRadixLab();
    advanceRadixLab();
  });
  $("#radix-play").addEventListener("click", toggleRadixLabPlayback);
  renderRadixLab();
}

function renderRadixLab() {
  const step = radixLabState.steps[radixLabState.index];
  $("#radix-digit").textContent = step.phase === "排序完成" ? "完成" : step.exp ? radixDigitLabel(step.exp) : "準備";
  $("#radix-phase").textContent = step.phase;
  $("#radix-step-count").textContent = `${radixLabState.index + 1} / ${radixLabState.steps.length}`;
  $("#radix-lab-note").textContent = step.note;
  $("#radix-array").innerHTML = step.values
    .map((value, index) => {
      const active = value === step.activeValue ? " active" : "";
      return `<span class="radix-array-cell${active}"><small>a[${index + 1}]</small><strong>${value}</strong></span>`;
    })
    .join("");
  $("#radix-buckets").innerHTML = step.buckets
    .map((bucket, digit) => {
      const active = digit === step.activeBucket ? " active" : "";
      const values = bucket.length
        ? bucket.map((value) => `<span${value === step.activeValue ? " class=\"active\"" : ""}>${value}</span>`).join("")
        : "<em>empty</em>";
      return `<div class="radix-bucket${active}"><strong>${digit}</strong><div>${values}</div></div>`;
    })
    .join("");
}

function advanceRadixLab() {
  if (radixLabState.index < radixLabState.steps.length - 1) {
    radixLabState.index += 1;
    renderRadixLab();
  } else {
    pauseRadixLab();
  }
}

function toggleRadixLabPlayback() {
  if (radixLabState.playing) {
    pauseRadixLab();
    return;
  }
  radixLabState.playing = true;
  $("#radix-play span").textContent = "暫停";
  radixLabState.timer = window.setInterval(advanceRadixLab, Number($("#radix-speed").value));
}

function pauseRadixLab() {
  if (radixLabState.timer) window.clearInterval(radixLabState.timer);
  radixLabState.timer = null;
  radixLabState.playing = false;
  const label = $("#radix-play span");
  if (label) label.textContent = "播放";
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

const customTreeState = {
  nodes: [],
  selectedId: null,
  nextId: 1,
};

function initCustomTreeBuilder() {
  $("#custom-tree-add").addEventListener("click", addCustomTreeNode);
  $("#custom-tree-delete").addEventListener("click", deleteSelectedCustomTreeNode);
  $("#custom-tree-sample").addEventListener("click", loadCustomTreeSample);
  $("#custom-tree-clear").addEventListener("click", clearCustomTree);
  $("#custom-tree-label").addEventListener("keydown", (event) => {
    if (event.key === "Enter") addCustomTreeNode();
  });
  $("#custom-tree-parent").addEventListener("change", (event) => {
    customTreeState.selectedId = event.target.value ? Number(event.target.value) : customTreeState.selectedId;
    renderCustomTree();
  });
  $("#custom-tree-canvas").addEventListener("click", selectCustomTreeNodeFromCanvas);
  window.addEventListener("resize", renderCustomTree);
  loadCustomTreeSample();
}

function loadCustomTreeSample() {
  customTreeState.nodes = [
    { id: 1, label: "A", parentId: null, children: [2, 3, 4] },
    { id: 2, label: "B", parentId: 1, children: [5, 6] },
    { id: 3, label: "C", parentId: 1, children: [7] },
    { id: 4, label: "D", parentId: 1, children: [] },
    { id: 5, label: "E", parentId: 2, children: [] },
    { id: 6, label: "F", parentId: 2, children: [] },
    { id: 7, label: "G", parentId: 3, children: [] },
  ];
  customTreeState.selectedId = 1;
  customTreeState.nextId = 8;
  $("#custom-tree-label").value = "H";
  renderCustomTree();
  setCustomTreeStatus("已載入範例樹。可選擇任一父節點後加入新節點。");
}

function clearCustomTree() {
  customTreeState.nodes = [];
  customTreeState.selectedId = null;
  customTreeState.nextId = 1;
  $("#custom-tree-label").value = "Root";
  renderCustomTree();
  setCustomTreeStatus("畫布已清空。下一個加入的節點會成為 root。");
}

function addCustomTreeNode() {
  const labelInput = $("#custom-tree-label");
  const label = labelInput.value.trim();
  if (!label) {
    setCustomTreeStatus("請先輸入節點內容。");
    labelInput.focus();
    return;
  }

  let parentId = $("#custom-tree-parent").value ? Number($("#custom-tree-parent").value) : null;
  if (customTreeState.nodes.length === 0) parentId = null;
  if (customTreeState.nodes.length > 0 && parentId === null) {
    setCustomTreeStatus("此建構器維持單一 root；請先選擇父節點再加入。");
    return;
  }

  const node = { id: customTreeState.nextId, label, parentId, children: [] };
  customTreeState.nextId += 1;
  customTreeState.nodes.push(node);
  if (parentId !== null) {
    const parent = getCustomTreeNode(parentId);
    if (parent) parent.children.push(node.id);
  }
  customTreeState.selectedId = node.id;
  labelInput.value = nextCustomTreeLabel(label);
  renderCustomTree();
  setCustomTreeStatus(`已加入節點 ${label}。`);
}

function nextCustomTreeLabel(label) {
  if (/^[A-Z]$/.test(label) && label !== "Z") return String.fromCharCode(label.charCodeAt(0) + 1);
  if (/^N\d+$/.test(label)) return `N${Number(label.slice(1)) + 1}`;
  return "";
}

function deleteSelectedCustomTreeNode() {
  const selected = getCustomTreeNode(customTreeState.selectedId);
  if (!selected) {
    setCustomTreeStatus("請先選取要刪除的節點。");
    return;
  }
  const removeIds = new Set();
  collectCustomTreeSubtree(selected.id, removeIds);
  if (selected.parentId !== null) {
    const parent = getCustomTreeNode(selected.parentId);
    if (parent) parent.children = parent.children.filter((id) => id !== selected.id);
  }
  customTreeState.nodes = customTreeState.nodes.filter((node) => !removeIds.has(node.id));
  customTreeState.selectedId = selected.parentId !== null && getCustomTreeNode(selected.parentId) ? selected.parentId : customTreeRoot()?.id ?? null;
  renderCustomTree();
  setCustomTreeStatus(`已刪除 ${selected.label} 與其子樹。`);
}

function collectCustomTreeSubtree(id, output) {
  const node = getCustomTreeNode(id);
  if (!node) return;
  output.add(id);
  node.children.forEach((childId) => collectCustomTreeSubtree(childId, output));
}

function selectCustomTreeNodeFromCanvas(event) {
  const canvas = $("#custom-tree-canvas");
  const rect = canvas.getBoundingClientRect();
  const logicalWidth = Number(canvas.dataset.logicalWidth) || rect.width;
  const logicalHeight = Number(canvas.dataset.logicalHeight) || rect.height;
  const x = ((event.clientX - rect.left) / rect.width) * logicalWidth;
  const y = ((event.clientY - rect.top) / rect.height) * logicalHeight;
  const hit = customTreeState.nodes.find((node) => {
    if (!Number.isFinite(node.x) || !Number.isFinite(node.y)) return false;
    return Math.hypot(node.x - x, node.y - y) <= node.radius + 4;
  });
  if (hit) {
    customTreeState.selectedId = hit.id;
    renderCustomTree();
    setCustomTreeStatus(`已選取節點 ${hit.label}。`);
  }
}

function getCustomTreeNode(id) {
  return customTreeState.nodes.find((node) => node.id === id) || null;
}

function customTreeRoot() {
  return customTreeState.nodes.find((node) => node.parentId === null) || null;
}

function customTreeHeightFrom(id) {
  const node = getCustomTreeNode(id);
  if (!node) return 0;
  if (!node.children.length) return 1;
  return 1 + Math.max(...node.children.map((childId) => customTreeHeightFrom(childId)));
}

function countCustomTreeLeaves() {
  return customTreeState.nodes.filter((node) => node.children.length === 0).length;
}

function layoutCustomTree() {
  const root = customTreeRoot();
  if (!root) return;

  let order = 0;
  const assign = (node, depth) => {
    node.depth = depth;
    if (!node.children.length) {
      order += 1;
      node.slot = order;
      return node.slot;
    }
    const childSlots = node.children.map((childId) => assign(getCustomTreeNode(childId), depth + 1));
    node.slot = (childSlots[0] + childSlots[childSlots.length - 1]) / 2;
    return node.slot;
  };

  assign(root, 0);
  const leaves = Math.max(1, order);
  const height = customTreeHeightFrom(root.id);
  const canvas = $("#custom-tree-canvas");
  const logicalWidth = Number(canvas.dataset.logicalWidth) || canvas.width;
  const logicalHeight = Number(canvas.dataset.logicalHeight) || canvas.height;
  const marginX = 70;
  const top = 64;
  const usableWidth = Math.max(1, logicalWidth - marginX * 2);
  const levelGap = height <= 1 ? 1 : (logicalHeight - 140) / (height - 1);
  customTreeState.nodes.forEach((node) => {
    node.x = marginX + ((node.slot - 0.5) / leaves) * usableWidth;
    node.y = top + node.depth * levelGap;
    node.radius = Math.max(24, Math.min(36, 18 + String(node.label).length * 3.2));
  });
}

function renderCustomTree() {
  const canvas = $("#custom-tree-canvas");
  const wrapper = canvas.parentElement;
  const cssWidth = Math.max(320, Math.round(wrapper.getBoundingClientRect().width - 2));
  const cssHeight = Math.max(420, Math.round(cssWidth * 0.48));
  const ratio = window.devicePixelRatio || 1;
  canvas.dataset.logicalWidth = String(cssWidth);
  canvas.dataset.logicalHeight = String(cssHeight);
  canvas.style.width = "100%";
  canvas.style.height = `${cssHeight}px`;
  canvas.width = Math.round(cssWidth * ratio);
  canvas.height = Math.round(cssHeight * ratio);

  const ctx = canvas.getContext("2d");
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  drawCustomTreeBackground(ctx, cssWidth, cssHeight);
  layoutCustomTree();
  drawCustomTreeEdges(ctx);
  drawCustomTreeNodes(ctx);
  updateCustomTreeControls();
}

function drawCustomTreeBackground(ctx, width, height) {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fbfcff";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#edf1f6";
  ctx.lineWidth = 1;
  for (let x = 0; x <= width; x += 28) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 0; y <= height; y += 28) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  if (!customTreeState.nodes.length) {
    ctx.fillStyle = "#66717e";
    ctx.font = "700 18px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("輸入第一個節點內容並按「加入」，建立 root。", width / 2, height / 2);
  }
}

function drawCustomTreeEdges(ctx) {
  ctx.strokeStyle = "#a8b1c1";
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  customTreeState.nodes.forEach((node) => {
    node.children.forEach((childId) => {
      const child = getCustomTreeNode(childId);
      if (!child) return;
      ctx.beginPath();
      ctx.moveTo(node.x, node.y + node.radius);
      ctx.lineTo(child.x, child.y - child.radius);
      ctx.stroke();
    });
  });
}

function drawCustomTreeNodes(ctx) {
  customTreeState.nodes.forEach((node) => {
    const selected = node.id === customTreeState.selectedId;
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
    ctx.fillStyle = selected ? "#e46053" : node.parentId === null ? "#4472c4" : "#7566c9";
    ctx.fill();
    ctx.lineWidth = selected ? 5 : 3;
    ctx.strokeStyle = "#ffffff";
    ctx.stroke();

    ctx.fillStyle = "#ffffff";
    ctx.font = "800 16px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(String(node.label), node.x, node.y);

    if (node.parentId === null) {
      ctx.fillStyle = "#394354";
      ctx.font = "700 12px system-ui, sans-serif";
      ctx.fillText("root", node.x, node.y + node.radius + 16);
    }
  });
}

function updateCustomTreeControls() {
  const parentSelect = $("#custom-tree-parent");
  parentSelect.innerHTML = customTreeState.nodes.length
    ? customTreeState.nodes
        .map((node) => `<option value="${node.id}"${node.id === customTreeState.selectedId ? " selected" : ""}>${escapeOptionLabel(node)}</option>`)
        .join("")
    : '<option value="">建立 root</option>';

  const root = customTreeRoot();
  $("#custom-tree-node-count").textContent = customTreeState.nodes.length;
  $("#custom-tree-height").textContent = root ? customTreeHeightFrom(root.id) : 0;
  $("#custom-tree-leaf-count").textContent = customTreeState.nodes.length ? countCustomTreeLeaves() : 0;
  $("#custom-tree-selected").textContent = getCustomTreeNode(customTreeState.selectedId)?.label ?? "-";
  $("#custom-tree-delete").disabled = customTreeState.nodes.length === 0;
  $("#custom-tree-list").innerHTML = customTreeState.nodes.length
    ? customTreeState.nodes
        .map((node) => {
          const parent = getCustomTreeNode(node.parentId);
          const active = node.id === customTreeState.selectedId ? " active" : "";
          return `<button type="button" class="custom-tree-list-item${active}" data-custom-node="${node.id}">
            <strong>${escapeHtml(String(node.label))}</strong>
            <span>${parent ? `parent: ${escapeHtml(String(parent.label))}` : "root"}</span>
          </button>`;
        })
        .join("")
    : "<p>尚未建立節點。</p>";
  $$("#custom-tree-list [data-custom-node]").forEach((button) => {
    button.addEventListener("click", () => {
      customTreeState.selectedId = Number(button.dataset.customNode);
      renderCustomTree();
    });
  });
}

function escapeOptionLabel(node) {
  return `${escapeHtml(String(node.label))}${node.parentId === null ? " (root)" : ""}`;
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (char) => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return entities[char];
  });
}

function setCustomTreeStatus(message) {
  $("#custom-tree-status").textContent = message;
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

const customGraphState = {
  vertices: [],
  edges: [],
  selectedVertexId: null,
  selectedEdgeId: null,
  nextVertexId: 1,
  nextEdgeId: 1,
  kind: "undirected",
};

function initCustomGraphBuilder() {
  $("#custom-graph-type").addEventListener("change", (event) => {
    customGraphState.kind = event.target.value;
    customGraphState.edges.forEach((edge) => {
      edge.directed = customGraphState.kind === "directed";
    });
    renderCustomGraph();
    setCustomGraphStatus(customGraphState.kind === "directed" ? "已切換為有向圖，edge 會以箭頭表示。" : "已切換為無向圖，edge 會以無箭頭線段表示。");
  });
  $("#custom-graph-add-node").addEventListener("click", addCustomGraphVertex);
  $("#custom-graph-add-edge").addEventListener("click", addCustomGraphEdge);
  $("#custom-graph-delete").addEventListener("click", deleteSelectedCustomGraphItem);
  $("#custom-graph-sample").addEventListener("click", loadCustomGraphSample);
  $("#custom-graph-clear").addEventListener("click", clearCustomGraph);
  $("#custom-graph-label").addEventListener("keydown", (event) => {
    if (event.key === "Enter") addCustomGraphVertex();
  });
  $("#custom-graph-canvas").addEventListener("click", selectCustomGraphItemFromCanvas);
  window.addEventListener("resize", renderCustomGraph);
  loadCustomGraphSample();
}

function loadCustomGraphSample() {
  customGraphState.vertices = [
    { id: 1, label: "A" },
    { id: 2, label: "B" },
    { id: 3, label: "C" },
    { id: 4, label: "D" },
    { id: 5, label: "E" },
  ];
  customGraphState.edges = [
    { id: 1, from: 1, to: 2, weight: 4, directed: false },
    { id: 2, from: 1, to: 3, weight: 2, directed: false },
    { id: 3, from: 2, to: 3, weight: 1, directed: false },
    { id: 4, from: 2, to: 4, weight: 5, directed: false },
    { id: 5, from: 4, to: 5, weight: 3, directed: false },
  ];
  customGraphState.kind = "undirected";
  customGraphState.selectedVertexId = 1;
  customGraphState.selectedEdgeId = null;
  customGraphState.nextVertexId = 6;
  customGraphState.nextEdgeId = 6;
  $("#custom-graph-type").value = "undirected";
  $("#custom-graph-label").value = "F";
  $("#custom-graph-weight").value = "1";
  renderCustomGraph();
  setCustomGraphStatus("已載入無向圖範例。可切換圖類型或新增頂點與邊。");
}

function clearCustomGraph() {
  customGraphState.vertices = [];
  customGraphState.edges = [];
  customGraphState.selectedVertexId = null;
  customGraphState.selectedEdgeId = null;
  customGraphState.nextVertexId = 1;
  customGraphState.nextEdgeId = 1;
  $("#custom-graph-label").value = "A";
  renderCustomGraph();
  setCustomGraphStatus("畫布已清空。請先加入頂點。");
}

function addCustomGraphVertex() {
  const input = $("#custom-graph-label");
  const label = input.value.trim();
  if (!label) {
    setCustomGraphStatus("請先輸入頂點名稱。");
    input.focus();
    return;
  }
  if (customGraphState.vertices.some((vertex) => vertex.label === label)) {
    setCustomGraphStatus(`頂點 ${label} 已存在，請使用不同名稱。`);
    return;
  }
  const vertex = { id: customGraphState.nextVertexId, label };
  customGraphState.nextVertexId += 1;
  customGraphState.vertices.push(vertex);
  customGraphState.selectedVertexId = vertex.id;
  customGraphState.selectedEdgeId = null;
  input.value = nextCustomGraphLabel(label);
  renderCustomGraph();
  setCustomGraphStatus(`已加入頂點 ${label}。`);
}

function nextCustomGraphLabel(label) {
  if (/^[A-Z]$/.test(label) && label !== "Z") return String.fromCharCode(label.charCodeAt(0) + 1);
  if (/^V\d+$/.test(label)) return `V${Number(label.slice(1)) + 1}`;
  return "";
}

function addCustomGraphEdge() {
  const from = Number($("#custom-graph-from").value);
  const to = Number($("#custom-graph-to").value);
  if (!from || !to) {
    setCustomGraphStatus("請先建立至少兩個頂點，並選擇起點與終點。");
    return;
  }
  if (from === to) {
    setCustomGraphStatus("目前介面不建立 self-loop，請選擇不同頂點。");
    return;
  }
  const directed = customGraphState.kind === "directed";
  const duplicate = customGraphState.edges.some((edge) => {
    if (directed) return edge.from === from && edge.to === to;
    return (edge.from === from && edge.to === to) || (edge.from === to && edge.to === from);
  });
  if (duplicate) {
    setCustomGraphStatus("這條 edge 已存在。");
    return;
  }
  const rawWeight = $("#custom-graph-weight").value.trim();
  const numericWeight = Number(rawWeight);
  const weight = rawWeight && Number.isFinite(numericWeight) ? numericWeight : 1;
  const edge = { id: customGraphState.nextEdgeId, from, to, weight, directed };
  customGraphState.nextEdgeId += 1;
  customGraphState.edges.push(edge);
  customGraphState.selectedEdgeId = edge.id;
  customGraphState.selectedVertexId = null;
  renderCustomGraph();
  setCustomGraphStatus(`已加入 edge ${customGraphVertexLabel(from)} ${directed ? "→" : "-"} ${customGraphVertexLabel(to)}。`);
}

function deleteSelectedCustomGraphItem() {
  if (customGraphState.selectedEdgeId !== null) {
    const edge = getCustomGraphEdge(customGraphState.selectedEdgeId);
    customGraphState.edges = customGraphState.edges.filter((item) => item.id !== customGraphState.selectedEdgeId);
    customGraphState.selectedEdgeId = null;
    renderCustomGraph();
    setCustomGraphStatus(edge ? `已刪除 edge ${customGraphVertexLabel(edge.from)}-${customGraphVertexLabel(edge.to)}。` : "已刪除 edge。");
    return;
  }
  if (customGraphState.selectedVertexId !== null) {
    const vertex = getCustomGraphVertex(customGraphState.selectedVertexId);
    customGraphState.vertices = customGraphState.vertices.filter((item) => item.id !== customGraphState.selectedVertexId);
    customGraphState.edges = customGraphState.edges.filter((edge) => edge.from !== customGraphState.selectedVertexId && edge.to !== customGraphState.selectedVertexId);
    customGraphState.selectedVertexId = customGraphState.vertices[0]?.id ?? null;
    renderCustomGraph();
    setCustomGraphStatus(vertex ? `已刪除頂點 ${vertex.label} 與 incident edges。` : "已刪除頂點。");
    return;
  }
  setCustomGraphStatus("請先選取要刪除的頂點或 edge。");
}

function getCustomGraphVertex(id) {
  return customGraphState.vertices.find((vertex) => vertex.id === id) || null;
}

function getCustomGraphEdge(id) {
  return customGraphState.edges.find((edge) => edge.id === id) || null;
}

function customGraphVertexLabel(id) {
  return getCustomGraphVertex(id)?.label ?? "?";
}

function layoutCustomGraph() {
  const canvas = $("#custom-graph-canvas");
  const width = Number(canvas.dataset.logicalWidth) || canvas.width;
  const height = Number(canvas.dataset.logicalHeight) || canvas.height;
  const count = customGraphState.vertices.length;
  if (!count) return;
  const centerX = width / 2;
  const centerY = height / 2 + 10;
  const radius = Math.max(92, Math.min(width, height) * 0.34);
  customGraphState.vertices.forEach((vertex, index) => {
    const angle = count === 1 ? -Math.PI / 2 : -Math.PI / 2 + (Math.PI * 2 * index) / count;
    vertex.x = centerX + Math.cos(angle) * radius;
    vertex.y = centerY + Math.sin(angle) * radius;
    vertex.radius = Math.max(24, Math.min(34, 18 + String(vertex.label).length * 3.1));
  });
}

function renderCustomGraph() {
  const canvas = $("#custom-graph-canvas");
  const wrapper = canvas.parentElement;
  const cssWidth = Math.max(320, Math.round(wrapper.getBoundingClientRect().width - 2));
  const cssHeight = Math.max(420, Math.round(cssWidth * 0.48));
  const ratio = window.devicePixelRatio || 1;
  canvas.dataset.logicalWidth = String(cssWidth);
  canvas.dataset.logicalHeight = String(cssHeight);
  canvas.style.width = "100%";
  canvas.style.height = `${cssHeight}px`;
  canvas.width = Math.round(cssWidth * ratio);
  canvas.height = Math.round(cssHeight * ratio);
  const ctx = canvas.getContext("2d");
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  drawCustomGraphBackground(ctx, cssWidth, cssHeight);
  layoutCustomGraph();
  drawCustomGraphEdges(ctx);
  drawCustomGraphVertices(ctx);
  updateCustomGraphControls();
}

function drawCustomGraphBackground(ctx, width, height) {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fbfcff";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#edf1f6";
  ctx.lineWidth = 1;
  for (let x = 0; x <= width; x += 28) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 0; y <= height; y += 28) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  if (!customGraphState.vertices.length) {
    ctx.fillStyle = "#66717e";
    ctx.font = "700 18px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("加入頂點後，再選擇起點與終點建立 edge。", width / 2, height / 2);
  }
}

function drawCustomGraphEdges(ctx) {
  customGraphState.edges.forEach((edge) => {
    const from = getCustomGraphVertex(edge.from);
    const to = getCustomGraphVertex(edge.to);
    if (!from || !to) return;
    const selected = edge.id === customGraphState.selectedEdgeId;
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const length = Math.max(1, Math.hypot(dx, dy));
    const ux = dx / length;
    const uy = dy / length;
    const startX = from.x + ux * from.radius;
    const startY = from.y + uy * from.radius;
    const endX = to.x - ux * to.radius;
    const endY = to.y - uy * to.radius;

    ctx.strokeStyle = selected ? "#2f9f75" : "#9aa7b8";
    ctx.lineWidth = selected ? 5 : 3;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    if (edge.directed) drawCustomGraphArrow(ctx, endX, endY, Math.atan2(dy, dx), selected);

    const labelX = (startX + endX) / 2;
    const labelY = (startY + endY) / 2;
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#d5dbe5";
    ctx.lineWidth = 1;
    customCanvasRoundedRect(ctx, labelX - 16, labelY - 13, 32, 22, 6);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#566173";
    ctx.font = "800 12px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(String(edge.weight), labelX, labelY - 1);
  });
}

function customCanvasRoundedRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawCustomGraphArrow(ctx, x, y, angle, selected) {
  const size = selected ? 13 : 11;
  ctx.fillStyle = selected ? "#2f9f75" : "#9aa7b8";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x - Math.cos(angle - Math.PI / 6) * size, y - Math.sin(angle - Math.PI / 6) * size);
  ctx.lineTo(x - Math.cos(angle + Math.PI / 6) * size, y - Math.sin(angle + Math.PI / 6) * size);
  ctx.closePath();
  ctx.fill();
}

function drawCustomGraphVertices(ctx) {
  customGraphState.vertices.forEach((vertex) => {
    const selected = vertex.id === customGraphState.selectedVertexId;
    ctx.beginPath();
    ctx.arc(vertex.x, vertex.y, vertex.radius, 0, Math.PI * 2);
    ctx.fillStyle = selected ? "#e46053" : "#4472c4";
    ctx.fill();
    ctx.lineWidth = selected ? 5 : 3;
    ctx.strokeStyle = "#ffffff";
    ctx.stroke();
    ctx.fillStyle = "#ffffff";
    ctx.font = "800 16px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(String(vertex.label), vertex.x, vertex.y);
  });
}

function selectCustomGraphItemFromCanvas(event) {
  const canvas = $("#custom-graph-canvas");
  const rect = canvas.getBoundingClientRect();
  const logicalWidth = Number(canvas.dataset.logicalWidth) || rect.width;
  const logicalHeight = Number(canvas.dataset.logicalHeight) || rect.height;
  const x = ((event.clientX - rect.left) / rect.width) * logicalWidth;
  const y = ((event.clientY - rect.top) / rect.height) * logicalHeight;
  const vertex = customGraphState.vertices.find((item) => Math.hypot(item.x - x, item.y - y) <= item.radius + 4);
  if (vertex) {
    customGraphState.selectedVertexId = vertex.id;
    customGraphState.selectedEdgeId = null;
    renderCustomGraph();
    setCustomGraphStatus(`已選取頂點 ${vertex.label}。`);
    return;
  }
  const edge = customGraphState.edges.find((item) => {
    const from = getCustomGraphVertex(item.from);
    const to = getCustomGraphVertex(item.to);
    if (!from || !to) return false;
    return pointToSegmentDistance(x, y, from.x, from.y, to.x, to.y) <= 10;
  });
  if (edge) {
    customGraphState.selectedVertexId = null;
    customGraphState.selectedEdgeId = edge.id;
    renderCustomGraph();
    setCustomGraphStatus(`已選取 edge ${customGraphVertexLabel(edge.from)}-${customGraphVertexLabel(edge.to)}。`);
  }
}

function pointToSegmentDistance(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const lengthSq = dx * dx + dy * dy;
  if (!lengthSq) return Math.hypot(px - x1, py - y1);
  const t = clamp(((px - x1) * dx + (py - y1) * dy) / lengthSq, 0, 1);
  return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
}

function updateCustomGraphControls() {
  const options = customGraphState.vertices
    .map((vertex) => `<option value="${vertex.id}">${escapeHtml(String(vertex.label))}</option>`)
    .join("");
  $("#custom-graph-from").innerHTML = options || '<option value="">起點</option>';
  $("#custom-graph-to").innerHTML = options || '<option value="">終點</option>';
  if (customGraphState.selectedVertexId) $("#custom-graph-from").value = String(customGraphState.selectedVertexId);
  const selectedIndex = customGraphState.vertices.findIndex((vertex) => vertex.id === customGraphState.selectedVertexId);
  const nextVertex = customGraphState.vertices[(selectedIndex + 1 + customGraphState.vertices.length) % customGraphState.vertices.length];
  if (nextVertex) $("#custom-graph-to").value = String(nextVertex.id);
  $("#custom-graph-delete").disabled = !customGraphState.selectedVertexId && !customGraphState.selectedEdgeId;
  $("#custom-graph-vertex-count").textContent = customGraphState.vertices.length;
  $("#custom-graph-edge-count").textContent = customGraphState.edges.length;
  $("#custom-graph-kind").textContent = customGraphState.kind === "directed" ? "有向" : "無向";
  $("#custom-graph-selected").textContent =
    getCustomGraphVertex(customGraphState.selectedVertexId)?.label ||
    formatCustomGraphEdge(getCustomGraphEdge(customGraphState.selectedEdgeId)) ||
    "-";
  $("#custom-graph-adjacency").textContent = formatCustomGraphAdjacency();
  $("#custom-graph-edge-list").innerHTML = customGraphState.edges.length
    ? customGraphState.edges
        .map((edge) => {
          const active = edge.id === customGraphState.selectedEdgeId ? " active" : "";
          return `<button type="button" class="custom-graph-edge-item${active}" data-custom-edge="${edge.id}">
            <strong>${formatCustomGraphEdge(edge)}</strong>
            <span>w=${edge.weight}</span>
          </button>`;
        })
        .join("")
    : "<p>尚未建立 edge。</p>";
  $$("#custom-graph-edge-list [data-custom-edge]").forEach((button) => {
    button.addEventListener("click", () => {
      customGraphState.selectedVertexId = null;
      customGraphState.selectedEdgeId = Number(button.dataset.customEdge);
      renderCustomGraph();
    });
  });
}

function formatCustomGraphEdge(edge) {
  if (!edge) return "";
  return `${customGraphVertexLabel(edge.from)} ${edge.directed ? "→" : "-"} ${customGraphVertexLabel(edge.to)}`;
}

function formatCustomGraphAdjacency() {
  if (!customGraphState.vertices.length) return "尚未建立頂點。";
  const rows = new Map(customGraphState.vertices.map((vertex) => [vertex.id, []]));
  customGraphState.edges.forEach((edge) => {
    rows.get(edge.from)?.push(`${customGraphVertexLabel(edge.to)}(${edge.weight})`);
    if (!edge.directed) rows.get(edge.to)?.push(`${customGraphVertexLabel(edge.from)}(${edge.weight})`);
  });
  return customGraphState.vertices
    .map((vertex) => `${vertex.label}: ${(rows.get(vertex.id) || []).join(", ") || "∅"}`)
    .join("\n");
}

function setCustomGraphStatus(message) {
  $("#custom-graph-status").textContent = message;
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
