/* =====================================================
   TIỆM BÚN MẮM MIỀN TÂY
   VERSION 3
===================================================== */

const SAVE_KEY = "TIEM_BUN_MAM_V3";


/* =====================================================
   MENU
===================================================== */

const MENU = {

  bunMam: {
    name: "Bún mắm",
    icon: "🍜",
    price: 55000,
    cost: 22000,
    ingredients: [
      "shrimp",
      "squid",
      "pork",
      "fish",
      "eggplant",
      "waterSpinach",
      "banana",
      "chili",
      "sauce"
    ]
  },

  lauMam: {
    name: "Lẩu mắm",
    icon: "🍲",
    price: 180000,
    cost: 85000,
    ingredients: [
      "shrimp",
      "squid",
      "pork",
      "fish",
      "eggplant",
      "waterSpinach",
      "banana",
      "chili",
      "sauce"
    ]
  },

  rice: {
    name: "Cơm",
    icon: "🍚",
    price: 35000,
    cost: 12000,
    ingredients: ["rice"]
  },

  crabRice: {
    name: "Cơm ba khía",
    icon: "🍚",
    price: 55000,
    cost: 26000,
    ingredients: ["rice", "crab"]
  },

  icedTea: {
    name: "Trà đá",
    icon: "🧊",
    price: 10000,
    cost: 3000,
    ingredients: ["tea", "ice"]
  },

  sugarTea: {
    name: "Trà đường",
    icon: "🫖",
    price: 15000,
    cost: 5000,
    ingredients: ["tea", "sugar"]
  },

  coffeeTea: {
    name: "Trà đường cà phê",
    icon: "☕",
    price: 22000,
    cost: 8000,
    ingredients: ["tea", "sugar", "coffee"]
  },

  snack: {
    name: "Snack",
    icon: "🍘",
    price: 12000,
    cost: 6000,
    ingredients: ["snack"]
  },

  coconut: {
    name: "Kẹo dừa",
    icon: "🥥",
    price: 10000,
    cost: 4500,
    ingredients: ["coconut"]
  },

  coffee: {
    name: "Cà phê đen",
    icon: "☕",
    price: 18000,
    cost: 7000,
    ingredients: ["coffee"]
  }

};


/* =====================================================
   NGUYÊN LIỆU
===================================================== */

const INGREDIENTS = {

  shrimp: {
    name: "Tôm",
    icon: "🦐",
    cost: 7000,
    fresh: true
  },

  squid: {
    name: "Mực",
    icon: "🦑",
    cost: 8000,
    fresh: true
  },

  pork: {
    name: "Thịt quay",
    icon: "🥩",
    cost: 6000,
    fresh: true
  },

  fish: {
    name: "Cá filé",
    icon: "🐟",
    cost: 6000,
    fresh: true
  },

  eggplant: {
    name: "Cà tím",
    icon: "🍆",
    cost: 2500,
    fresh: true
  },

  waterSpinach: {
    name: "Dọc mùng",
    icon: "🌿",
    cost: 2000,
    fresh: true
  },

  banana: {
    name: "Rau chuối",
    icon: "🥬",
    cost: 2000,
    fresh: true
  },

  chili: {
    name: "Ớt",
    icon: "🌶️",
    cost: 1000,
    fresh: true
  },

  sauce: {
    name: "Nước sốt mẹ",
    icon: "🥣",
    cost: 3000,
    fresh: false
  },

  rice: {
    name: "Gạo",
    icon: "🍚",
    cost: 1500,
    fresh: false
  },

  crab: {
    name: "Ba khía",
    icon: "🦀",
    cost: 7000,
    fresh: true
  },

  tea: {
    name: "Trà",
    icon: "🍵",
    cost: 1500,
    fresh: false
  },

  ice: {
    name: "Đá",
    icon: "🧊",
    cost: 500,
    fresh: false
  },

  sugar: {
    name: "Đường",
    icon: "🍬",
    cost: 700,
    fresh: false
  },

  coffee: {
    name: "Cà phê",
    icon: "☕",
    cost: 2000,
    fresh: false
  },

  snack: {
    name: "Snack",
    icon: "🍘",
    cost: 6000,
    fresh: false
  },

  coconut: {
    name: "Kẹo dừa",
    icon: "🥥",
    cost: 4500,
    fresh: false
  }

};


/* =====================================================
   NHÂN VIÊN
===================================================== */

const STAFF = {

  cashier: {
    name: "Tí Thu Ngân",
    icon: "👩🏻‍💼",
    price: 3000000,
    description: "Thu tiền chính xác, giảm lỗi thanh toán."
  },

  broth: {
    name: "Út Múc Lèo",
    icon: "👩🏻‍🍳",
    price: 3000000,
    description: "Múc nước dùng nhanh hơn."
  },

  topping: {
    name: "Bảy Topping",
    icon: "🧑🏻‍🍳",
    price: 3000000,
    description: "Phụ trách thêm topping."
  },

  care: {
    name: "Hai Chăm Khách",
    icon: "👩🏻‍🌾",
    price: 3000000,
    description: "Chăm sóc khách đang chờ."
  }

};


/* =====================================================
   NÂNG CẤP
===================================================== */

const UPGRADES = [

  {
    id: "fan",
    name: "Quạt gió mát rười rượi",
    icon: "🌀",
    price: 2000000,
    description: "+10% thời gian chờ của khách."
  },

  {
    id: "license",
    name: "Giấy phép kinh doanh",
    icon: "📜",
    price: 5000000,
    description: "Không bị phạt bất ngờ."
  },

  {
    id: "roof",
    name: "Mái che",
    icon: "🏠",
    price: 6000000,
    description: "+20% thời gian chờ."
  },

  {
    id: "pos",
    name: "Máy POS",
    icon: "💳",
    price: 10000000,
    description: "Thanh toán chính xác và nhanh."
  },

  {
    id: "led",
    name: "Biển hiệu đèn LED nổi nhất huyện",
    icon: "💡",
    price: 15000000,
    description: "+10% lượng khách."
  },

  {
    id: "freezer",
    name: "Tủ lạnh cấp đông",
    icon: "🧊",
    price: 20000000,
    description: "Giữ nguyên liệu tươi lâu hơn."
  }

];


/* =====================================================
   TRẠNG THÁI GAME
===================================================== */

let game = {

  shopName: "Tiệm Bún Mắm",

  money: 30000000,

  day: 1,

  hour: 7,

  minute: 0,

  opened: false,

  closed: true,

  stockReady: false,

  rating: 5,

  reviews: 0,

  level: 1,

  xp: 0,

  orders: [],

  staff: [],

  upgrades: [],

  prices: {},

  stock: {},

  cookingOrder: null,

  selectedToppings: [],

  poured: false,

  activeTab: "warehouse"

};


/* =====================================================
   KHỞI TẠO GIÁ
===================================================== */

function setupPrices() {

  for (const key in MENU) {

    if (!game.prices[key]) {
      game.prices[key] = MENU[key].price;
    }

  }

}


/* =====================================================
   KHỞI TẠO KHO
===================================================== */

function setupStock() {

  for (const key in INGREDIENTS) {

    if (typeof game.stock[key] !== "number") {
      game.stock[key] = 0;
    }

  }

}


/* =====================================================
   SAVE
===================================================== */

function saveGame() {

  localStorage.setItem(
    SAVE_KEY,
    JSON.stringify(game)
  );

}


/* =====================================================
   LOAD
===================================================== */

function loadGame() {

  const saved = localStorage.getItem(SAVE_KEY);

  if (saved) {

    try {

      game = JSON.parse(saved);

      setupPrices();
      setupStock();

    } catch {

      newGame();

    }

  } else {

    newGame();

  }

}


/* =====================================================
   GAME MỚI
===================================================== */

function newGame() {

  game = {

    shopName: "Tiệm Bún Mắm",

    money: 30000000,

    day: 1,

    hour: 7,

    minute: 0,

    opened: false,

    closed: true,

    stockReady: false,

    rating: 5,

    reviews: 0,

    level: 1,

    xp: 0,

    orders: [],

    staff: [],

    upgrades: [],

    prices: {},

    stock: {},

    cookingOrder: null,

    selectedToppings: [],

    poured: false,

    activeTab: "warehouse"

  };

  setupPrices();
  setupStock();

  saveGame();

}


/* =====================================================
   FORMAT TIỀN
===================================================== */

function money(value) {

  return Math.round(value)
    .toLocaleString("vi-VN");

}


function moneyShort(value) {

  return (value / 1000)
    .toLocaleString("vi-VN", {
      maximumFractionDigits: 1
    }) + "k";

}


/* =====================================================
   TOAST
===================================================== */

function toast(text) {

  const el = document.getElementById("toast");

  el.innerText = text;

  el.classList.add("show");

  setTimeout(() => {

    el.classList.remove("show");

  }, 2200);

}


/* =====================================================
   MODAL
===================================================== */

function showModal(html) {

  const modal = document.getElementById("modal");

  modal.innerHTML = html;

  modal.classList.remove("hidden");

}


function closeModal() {

  document
    .getElementById("modal")
    .classList.add("hidden");

}


/* =====================================================
   RENDER HEADER
===================================================== */

function renderHeader() {

  document.getElementById("shopName")
    .innerText = game.shopName;

  document.getElementById("dayTitle")
    .innerText = "Ngày " + game.day;

  document.getElementById("money")
    .innerText = moneyShort(game.money);

  document.getElementById("rating")
    .innerText = game.rating.toFixed(1);

  document.getElementById("reviews")
    .innerText = game.reviews;

  let star = "";

  for (let i = 1; i <= 5; i++) {

    star += i <= Math.round(game.rating)
      ? "★"
      : "☆";

  }

  document.getElementById("stars")
    .innerText = star;

  document.getElementById("shopLevel")
    .innerText = game.level;

  document.getElementById("levelProgress")
    .style.width =
      Math.min(100, game.xp) + "%";


  let timeText;

  if (!game.opened) {

    timeText = "Chuẩn bị";

  } else {

    timeText =
      String(game.hour).padStart(2, "0")
      + ":"
      + String(game.minute).padStart(2, "0");

  }

  document.getElementById("time")
    .innerText = timeText;

}


/* =====================================================
   CHUYỂN TAB
===================================================== */

function changeTab(tab) {

  game.activeTab = tab;

  document.querySelectorAll(".main-tab")
    .forEach(btn => btn.classList.remove("active"));

  render();

}


/* =====================================================
   RENDER
===================================================== */

function render() {

  renderHeader();

  const content =
    document.getElementById("content");

  if (game.activeTab === "warehouse") {
    content.innerHTML = renderWarehouse();

  } else if (game.activeTab === "price") {
    content.innerHTML = renderPrices();

  } else if (game.activeTab === "upgrade") {
    content.innerHTML = renderUpgrades();

  } else if (game.activeTab === "staff") {
    content.innerHTML = renderStaff();

  } else if (game.activeTab === "ratingTab") {
    content.innerHTML = renderRatings();

  } else if (game.activeTab === "decorate") {
    content.innerHTML = renderDecorate();

  } else {
    content.innerHTML = renderShop();
  }

}


/* =====================================================
   KHO
===================================================== */

function renderWarehouse() {

  let html = `

    <div class="stock-banner">

      <strong>📦 Kho nguyên liệu</strong>

      <p>
        ${game.stockReady
          ? "Hôm nay đã nhập hàng. Có thể mở cửa."
          : "⚠️ Chưa nhập hàng. Nhập hàng trước khi mở cửa."}
      </p>

      <button
        class="restock-btn"
        onclick="restockToday()"
      >
        🛒 NHẬP HÀNG HÔM NAY
      </button>

      <div style="height:10px"></div>

      <button
        class="open-btn ${game.stockReady ? "ready" : ""}"
        onclick="openShop()"
        ${game.stockReady ? "" : "disabled"}
      >
        ${game.opened
          ? "🟢 ĐANG MỞ CỬA"
          : game.stockReady
            ? "🚪 MỞ CỬA NGÀY " + game.day
            : "🔒 NHẬP HÀNG MỚI ĐƯỢC MỞ CỬA"}
      </button>

    </div>

    <h2 class="section-title">Nước dùng</h2>

    <div class="card">

      <h3>🥣 Nước mắm mắm</h3>

      <p class="muted">
        Mỗi ngày cần chuẩn bị nước dùng mới.
      </p>

      <button
        class="restock-btn"
        onclick="cookBroth()"
      >
        🍲 Nấu nước dùng
      </button>

    </div>

    <h2 class="section-title">Nguyên liệu</h2>

  `;


  for (const key in INGREDIENTS) {

    const item = INGREDIENTS[key];

    const amount = game.stock[key] || 0;

    html += `

      <div class="stock-item">

        <div class="stock-icon">
          ${item.icon}
        </div>

        <div class="stock-info">

          <div class="stock-name">
            ${item.name}
          </div>

          <div class="stock-amount
            ${amount > 0
              ? "stock-ok"
              : "stock-empty"}">

            Còn ${amount} phần

            ${item.fresh
              ? " · 🌱 tươi"
              : ""}
          </div>

        </div>

      </div>

    `;

  }

  return html;

}


/* =====================================================
   NHẬP HÀNG
===================================================== */

function restockToday() {

  if (game.opened) {

    toast("Đang mở cửa không thể nhập hàng!");

    return;

  }


  const quantityFresh = 15;
  const quantityDry = 30;


  let total = 0;


  for (const key in INGREDIENTS) {

    const item = INGREDIENTS[key];

    const quantity =
      item.fresh
        ? quantityFresh
        : quantityDry;


    game.stock[key] = quantity;

    total += item.cost * quantity;

  }


  if (game.money < total) {

    toast("💸 Không đủ tiền nhập hàng!");

    return;

  }


  game.money -= total;


  /*
     QUAN TRỌNG:

     Sau khi nhập hàng:
     stockReady = TRUE

     => nút MỞ CỬA sẽ sáng.
  */

  game.stockReady = true;

  game.closed = true;

  saveGame();

  render();

  toast(
    "📦 Nhập hàng thành công! Bây giờ có thể mở cửa."
  );

}


/* =====================================================
   NẤU NƯỚC DÙNG
===================================================== */

function cookBroth() {

  if (game.opened) {

    toast("Đang bán hàng không thể nấu lại!");

    return;

  }

  toast("🥣 Đã nấu nước dùng hôm nay!");

}


/* =====================================================
   MỞ CỬA
===================================================== */

function openShop() {

  if (game.opened) {

    toast("Tiệm đang mở rồi!");

    return;

  }


  if (!game.stockReady) {

    toast(
      "🔒 Phải nhập hàng trước khi mở cửa!"
    );

    changeTab("warehouse");

    return;

  }


  game.opened = true;

  game.closed = false;

  game.hour = 7;

  game.minute = 0;

  saveGame();

  render();

  toast("🏪 Mở cửa! Chúc buôn may bán đắt!");

}


/* =====================================================
   ĐÓNG CỬA
===================================================== */

function closeShop() {

  game.opened = false;

  game.closed = true;

  game.orders = [];

  saveGame();

  render();

  toast("🌙 Đã đóng cửa tiệm.");

}


/* =====================================================
   SHOP
===================================================== */

function renderShop() {

  if (!game.opened) {

    return `

      <div class="empty">

        <div class="empty-icon">🏪</div>

        <h2>Tiệm đang đóng cửa</h2>

        <p>
          Vào Kho → Nhập hàng → Mở cửa
          để bắt đầu ngày mới.
        </p>

        <br>

        <button
          class="restock-btn"
          onclick="changeTab('warehouse')"
        >
          📦 ĐI NHẬP HÀNG
        </button>

      </div>

    `;

  }


  let html = `

    <h2 class="section-title">
      🛎️ Khách đang chờ
    </h2>

  `;


  if (game.orders.length === 0) {

    html += `

      <div class="empty">

        <div class="empty-icon">🌴</div>

        <p>
          Chưa có khách nào.
        </p>

        <p>
          Trời quê mình hôm nay dễ chịu quá!
        </p>

      </div>

    `;

    return html;

  }


  game.orders.forEach((order, index) => {

    html += renderOrder(order, index);

  });


  html += `

    <button
      class="red-btn"
      style="width:100%;margin-top:10px"
      onclick="closeShop()"
    >
      🌙 ĐÓNG CỬA SỚM
    </button>

  `;


  return html;

}


/* =====================================================
   ORDER
===================================================== */

function renderOrder(order, index) {

  const patience =
    Math.max(0, Math.min(100, order.patience));


  const toppingText =
    order.toppings &&
    order.toppings.length
      ? " · " + order.toppings.map(
          x => INGREDIENTS[x]?.name || x
        ).join(", ")
      : "";


  return `

    <div class="order-card">

      <div class="customer-row">

        <div class="customer-avatar">
          ${order.avatar}
        </div>

        <div>

          <div class="customer-name">
            ${order.name}
          </div>

          <div class="speech">
            "${order.message}"
          </div>

        </div>

      </div>


      <div class="order-text">

        Cho mình
        <b>${order.quantity} phần</b>

        ${MENU[order.menu].name}

        ${toppingText}

      </div>


      <div class="patience">

        <span
          style="width:${patience}%"
        ></span>

      </div>


      <div class="order-buttons">

        <button
          class="green-btn"
          onclick="startCooking(${index})"
        >
          🍜 Làm món
        </button>

        <button
          class="gray-btn"
          onclick="talkCustomer(${index})"
        >
          💬 Nói chuyện
        </button>

      </div>

    </div>

  `;

}


/* =====================================================
   TẠO KHÁCH
===================================================== */

function createCustomer() {

  if (!game.opened) return;

  if (game.orders.length >= 4) return;


  const keys = Object.keys(MENU);

  const menu =
    keys[Math.floor(Math.random() * keys.length)];


  const item = MENU[menu];


  const canMake =
    item.ingredients.every(
      key => (game.stock[key] || 0) > 0
    );


  if (!canMake) return;


  const names = [
    "Chị Lan",
    "Anh Quang Khải",
    "Cô Hai",
    "Chú Ba",
    "Bé Na",
    "Anh Minh",
    "Chị Ngọc",
    "Cô Tư"
  ];


  const avatars = [
    "👩🏻",
    "👨🏻",
    "👵🏻",
    "👨🏻‍🌾",
    "👧🏻"
  ];


  const quantity =
    Math.random() < .8 ? 1 : 2;


  let toppings = [];


  if (menu === "bunMam") {

    const toppingsPool = [
      "shrimp",
      "squid",
      "pork",
      "fish",
      "eggplant"
    ];


    toppings =
      toppingsPool
        .sort(() => Math.random() - .5)
        .slice(
          0,
          Math.floor(Math.random() * 3) + 2
        );

  }


  game.orders.push({

    id: Date.now(),

    name:
      names[
        Math.floor(Math.random() * names.length)
      ],

    avatar:
      avatars[
        Math.floor(Math.random() * avatars.length)
      ],

    menu,

    quantity,

    toppings,

    patience: 100,

    message:
      Math.random() < .5
        ? "Cho mình món ngon nha!"
        : "Ở đây thơm quá!"

  });


  saveGame();

  render();

}


/* =====================================================
   NẤU MÓN
===================================================== */

function startCooking(index) {

  const order = game.orders[index];

  if (!order) return;


  game.cookingOrder = index;

  game.selectedToppings = [];

  game.poured = false;


  renderCooking();

}


/* =====================================================
   RENDER COOKING
===================================================== */

function renderCooking() {

  const index = game.cookingOrder;

  const order = game.orders[index];

  if (!order) {

    changeTab("shop");

    return;

  }


  const menu = MENU[order.menu];


  let html = `

    <div class="cooking-box">

      <h2>
        🍜 Làm ${menu.name}
      </h2>

      <p class="muted">
        ${order.name} · ${order.quantity} phần
      </p>

      <div class="bowl">
        🍜
      </div>

      <p>
        Tô đang làm:
        <b>
          ${game.selectedToppings.length}
          topping
        </b>
      </p>

      <div class="ingredients">

  `;


  for (const key in INGREDIENTS) {

    const item = INGREDIENTS[key];

    const selected =
      game.selectedToppings.includes(key);


    const required =
      menu.ingredients.includes(key);


    html += `

      <button
        class="ingredient-btn
          ${selected ? "selected" : ""}"
        onclick="toggleIngredient('${key}')"
      >

        <div>${item.icon}</div>

        <small>${item.name}</small>

        ${required ? "⭐" : ""}

      </button>

    `;

  }


  html += `

      </div>

      <div style="margin-top:20px">

        <button
          class="green-btn"
          style="width:100%;margin-bottom:8px"
          onclick="pourBroth()"
        >
          🥣 Múc nước dùng
        </button>

        <button
          class="red-btn"
          style="width:100%"
          onclick="finishCooking()"
        >
          🍜 GIAO MÓN
        </button>

      </div>

    </div>

  `;


  document.getElementById("content")
    .innerHTML = html;

}


/* =====================================================
   CHỌN NGUYÊN LIỆU
===================================================== */

function toggleIngredient(key) {

  const index =
    game.selectedToppings.indexOf(key);


  if (index >= 0) {

    game.selectedToppings.splice(index, 1);

  } else {

    game.selectedToppings.push(key);

  }


  renderCooking();

}


/* =====================================================
   MÚC NƯỚC
===================================================== */

function pourBroth() {

  game.poured = true;

  toast("🥣 Đã múc nước dùng!");

}


/* =====================================================
   HOÀN THÀNH MÓN
===================================================== */

function finishCooking() {

  const index = game.cookingOrder;

  const order = game.orders[index];

  if (!order) return;


  if (!game.poured) {

    toast("⚠️ Chưa múc nước dùng!");

    return;

  }


  const menu = MENU[order.menu];


  /*
    Kiểm tra nguyên liệu bắt buộc
  */

  const missing =
    menu.ingredients.filter(
      key =>
        !game.selectedToppings.includes(key) &&
        key !== "rice" &&
        key !== "tea" &&
        key !== "ice" &&
        key !== "sugar" &&
        key !== "coffee" &&
        key !== "snack" &&
        key !== "coconut"
    );


  /*
    Nếu có nhân viên topping:
    cho phép thiếu topping đôi lúc.
  */

  if (
    menu === MENU.bunMam &&
    game.staff.includes("topping") &&
    Math.random() < .15
  ) {

    toast("😅 Nhân viên quên một topping!");

  }


  /*
    TRỪ KHO
  */

  for (const key of menu.ingredients) {

    const amount =
      game.stock[key] || 0;

    if (amount <= 0) {

      toast(
        "❌ Hết " +
        INGREDIENTS[key].name
      );

      changeTab("warehouse");

      return;

    }

    game.stock[key] =
      Math.max(0, amount - order.quantity);

  }


  /*
    Trừ topping thêm
  */

  for (const key of game.selectedToppings) {

    if (
      !menu.ingredients.includes(key) &&
      game.stock[key] > 0
    ) {

      game.stock[key]--;

    }

  }


  deliverOrder(index);

}


/* =====================================================
   GIAO MÓN
===================================================== */

function deliverOrder(index) {

  const order = game.orders[index];

  if (!order) return;


  const price =
    game.prices[order.menu]
    * order.quantity;


  game.money += price;


  /*
    rating
  */

  const stars =
    Math.random() < .8
      ? 5
      : 4;


  addRating(stars);


  game.xp += 5;


  if (game.xp >= 100) {

    game.level++;

    game.xp = 0;

    toast(
      "🎉 Lên cấp " +
      game.level +
      "!"
    );

  }


  game.orders.splice(index, 1);


  game.cookingOrder = null;


  saveGame();

  render();


  toast(
    "💰 Thu được " +
    money(price) +
    "đ!"
  );

}


/* =====================================================
   NÓI CHUYỆN
===================================================== */

function talkCustomer(index) {

  const replies = [

    "Dạ chị đợi em một chút nha ❤️",

    "Món sắp ra rồi ạ!",

    "Quán đông nhưng em làm nhanh cho mình nha!",

    "Dạ cảm ơn chị đã chờ ạ!"
  ];


  showModal(`

    <div class="modal-box">

      <h2>💬 Nói chuyện với khách</h2>

      ${replies.map(
        (text, i) => `

          <button
            class="green-btn"
            style="width:100%;margin-bottom:8px"
            onclick="answerCustomer(${index},${i})"
          >
            ${text}
          </button>

        `
      ).join("")}

      <button
        class="gray-btn"
        style="width:100%"
        onclick="closeModal()"
      >
        Đóng
      </button>

    </div>

  `);

}


/* =====================================================
   TRẢ LỜI KHÁCH
===================================================== */

function answerCustomer(index, type) {

  const order = game.orders[index];

  if (!order) return;


  if (type === 0 || type === 1) {

    order.patience =
      Math.min(100, order.patience + 15);

  } else if (type === 2) {

    order.patience =
      Math.min(100, order.patience + 10);

  } else {

    order.patience =
      Math.max(0, order.patience - 8);

  }


  closeModal();

  saveGame();

  render();

}


/* =====================================================
   ĐÁNH GIÁ
===================================================== */

function addRating(stars) {

  const total =
    game.rating * game.reviews;

  game.reviews++;

  game.rating =
    (total + stars) /
    game.reviews;

}


/* =====================================================
   GIÁ BÁN
===================================================== */

function renderPrices() {

  let html = `

    <h2 class="section-title">
      🏷️ Giá bán
    </h2>

    <div class="card">

      <p class="muted">
        Giá càng cao thì lợi nhuận càng lớn,
        nhưng khách có thể bỏ sang quán khác.
      </p>

    </div>

  `;


  for (const key in MENU) {

    const item = MENU[key];

    const price = game.prices[key];


    html += `

      <div class="price-row">

        <div class="food-icon">
          ${item.icon}
        </div>

        <div class="price-info">

          <b>${item.name}</b>

          <small>
            Giá vốn: ${money(item.cost)}đ
          </small>

        </div>

        <div class="price-control">

          <button
            onclick="changePrice('${key}', -5000)"
          >
            −
          </button>

          <div class="price-number">
            ${moneyShort(price)}
          </div>

          <button
            onclick="changePrice('${key}', 5000)"
          >
            +
          </button>

        </div>

      </div>

    `;

  }


  return html;

}


/* =====================================================
   ĐỔI GIÁ
===================================================== */

function changePrice(key, amount) {

  game.prices[key] =
    Math.max(
      MENU[key].cost,
      game.prices[key] + amount
    );


  saveGame();

  render();

}


/* =====================================================
   NHÂN VIÊN
===================================================== */

function renderStaff() {

  let html = `

    <h2 class="section-title">
      👩🏻‍🍳 Nhân viên
    </h2>

  `;


  for (const key in STAFF) {

    const staff = STAFF[key];

    const hired =
      game.staff.includes(key);


    html += `

      <div class="staff-card">

        <div class="staff-avatar">
          ${staff.icon}
        </div>

        <div class="staff-info">

          <h3>
            ${staff.name}
          </h3>

          <p>
            ${staff.description}
          </p>

        </div>

        ${
          hired

          ? `<button
                class="hire-btn"
                style="background:#398c51"
              >
                Đã thuê
             </button>`

          : `<button
                class="hire-btn"
                onclick="hireStaff('${key}')"
             >
                ${moneyShort(staff.price)}
             </button>`
        }

      </div>

    `;

  }


  return html;

}


/* =====================================================
   THUÊ NHÂN VIÊN
===================================================== */

function hireStaff(key) {

  const staff = STAFF[key];


  if (game.staff.includes(key)) {

    toast("Nhân viên này đã được thuê!");

    return;

  }


  if (game.money < staff.price) {

    toast("💸 Không đủ tiền!");

    return;

  }


  game.money -= staff.price;

  game.staff.push(key);


  saveGame();

  render();


  toast(
    "👩🏻‍🍳 Đã thuê " +
    staff.name
  );

}


/* =====================================================
   NÂNG CẤP
===================================================== */

function renderUpgrades() {

  let html = `

    <h2 class="section-title">
      🔧 Nâng cấp tiệm
    </h2>

  `;


  UPGRADES.forEach((upgrade, index) => {

    const bought =
      game.upgrades.includes(upgrade.id);


    const previous =
      index > 0
        ? game.upgrades.includes(
            UPGRADES[index - 1].id
          )
        : true;


    const locked =
      !previous && !bought;


    html += `

      <div class="upgrade-card
        ${locked ? "locked" : ""}">

        <div class="upgrade-top">

          <div class="upgrade-icon">
            ${upgrade.icon}
          </div>

          <div class="upgrade-info">

            <h3>
              ${upgrade.name}
            </h3>

            <p>
              ${upgrade.description}
            </p>

          </div>

        </div>


        ${
          bought

          ? `<button
                class="buy-upgrade done"
              >
                ✓ ĐÃ NÂNG CẤP
             </button>`

          : locked

          ? `<button
                class="buy-upgrade"
                disabled
              >
                🔒 Cần nâng cấp trước
             </button>`

          : `<button
                class="buy-upgrade"
                onclick="buyUpgrade('${upgrade.id}')"
             >
                ${moneyShort(upgrade.price)}
                · NÂNG CẤP
             </button>`
        }

      </div>

    `;

  });


  return html;

}


/* =====================================================
   MUA NÂNG CẤP
===================================================== */

function buyUpgrade(id) {

  const upgrade =
    UPGRADES.find(x => x.id === id);


  if (!upgrade) return;


  if (game.money < upgrade.price) {

    toast("💸 Không đủ tiền!");

    return;

  }


  game.money -= upgrade.price;

  game.upgrades.push(id);


  saveGame();

  render();


  toast(
    "🎉 Đã nâng cấp: " +
    upgrade.name
  );

}


/* =====================================================
   ĐÁNH GIÁ
===================================================== */

function renderRatings() {

  return `

    <h2 class="section-title">
      ⭐ Đánh giá khách hàng
    </h2>

    <div class="card" style="text-align:center">

      <div style="
        font-size:50px;
        color:#ffd34d;
      ">
        ${game.rating.toFixed(1)}
      </div>

      <div style="
        color:#ffd34d;
        font-size:25px;
      ">
        ★★★★★
      </div>

      <p class="muted">
        ${game.reviews} khách đã đánh giá
      </p>

    </div>

    <div class="card">

      <h3>💬 Khách hàng nói</h3>

      <p style="margin-top:10px">
        "Bún mắm thơm, nước dùng đậm đà!"
      </p>

      <hr style="
        border-color:#54353e;
        margin:15px 0;
      ">

      <p>
        "Cô chủ dễ thương, lần sau sẽ quay lại."
      </p>

    </div>

  `;

}


/* =====================================================
   TRANG TRÍ
===================================================== */

function renderDecorate() {

  return `

    <h2 class="section-title">
      🌸 Trang trí
    </h2>

    <div class="card">

      <h3>🌴 Phong cách miền Tây</h3>

      <p class="muted">
        Cây dừa · nón lá · đèn lồng ·
        bàn gỗ · hoa miền quê
      </p>

    </div>

    <div class="card">

      <h3>🏮 Đèn lồng miền Tây</h3>

      <p class="muted">
        Tăng vẻ đẹp của tiệm.
      </p>

      <button
        class="restock-btn"
        onclick="toast('🏮 Đã trang trí thêm đèn!')"
      >
        Trang trí
      </button>

    </div>

  `;

}


/* =====================================================
   ĐỔI TÊN QUÁN
===================================================== */

function renameShop() {

  showModal(`

    <div class="modal-box">

      <h2>🏪 Đặt tên tiệm</h2>

      <input
        id="shopNameInput"
        class="modal-input"
        value="${game.shopName}"
        maxlength="30"
      >

      <div class="modal-buttons">

        <button
          class="modal-cancel"
          onclick="closeModal()"
        >
          Hủy
        </button>

        <button
          class="modal-confirm"
          onclick="saveShopName()"
        >
          Lưu
        </button>

      </div>

    </div>

  `);

}


function saveShopName() {

  const input =
    document.getElementById("shopNameInput");


  const name =
    input.value.trim();


  if (!name) {

    toast("Nhập tên tiệm nha!");

    return;

  }


  game.shopName = name;

  saveGame();

  closeModal();

  render();

}


/* =====================================================
   XẾP HẠNG
===================================================== */

function showRanking() {

  showModal(`

    <div class="modal-box">

      <h2>🏆 Bảng xếp hạng</h2>

      <div class="card">
        🥇 Tiệm Bún Mắm Cô Ba
        <br>
        ⭐ 5.0
      </div>

      <div class="card">
        🥈 Tiệm Mắm Miền Tây
        <br>
        ⭐ 4.9
      </div>

      <div class="card">
        🥉 Tiệm Bún Mắm Nhà Làm
        <br>
        ⭐ 4.8
      </div>

      <button
        class="gray-btn"
        style="width:100%"
        onclick="closeModal()"
      >
        Đóng
      </button>

    </div>

  `);

}


/* =====================================================
   CÔNG THỨC
===================================================== */

function showRecipe() {

  showModal(`

    <div class="modal-box">

      <h2>🍜 Công thức Bún Mắm</h2>

      <p style="line-height:1.8">

        🦐 Tôm<br>
        🦑 Mực<br>
        🥩 Thịt quay<br>
        🐟 Cá filé<br>
        🍆 Cà tím<br>
        🌿 Dọc mùng<br>
        🥬 Rau chuối<br>
        🌶️ Ớt<br>
        🥣 Nước sốt mẹ

      </p>

      <br>

      <button
        class="green-btn"
        style="width:100%"
        onclick="closeModal()"
      >
        Đã hiểu
      </button>

    </div>

  `);

}


/* =====================================================
   CÀI ĐẶT
===================================================== */

function openSettings() {

  showModal(`

    <div class="modal-box">

      <h2>⚙️ Cài đặt</h2>

      <button
        class="gray-btn"
        style="width:100%;margin-bottom:8px"
        onclick="closeShop();closeModal()"
      >
        🌙 Đóng cửa sớm
      </button>

      <button
        class="gray-btn"
        style="width:100%;margin-bottom:8px"
        onclick="resetGame()"
      >
        🔄 Chơi lại từ đầu
      </button>

      <button
        class="modal-cancel"
        style="width:100%"
        onclick="closeModal()"
      >
        Đóng
      </button>

    </div>

  `);

}


/* =====================================================
   RESET
===================================================== */

function resetGame() {

  if (
    !confirm(
      "Bạn chắc chắn muốn chơi lại từ đầu?"
    )
  ) return;


  localStorage.removeItem(SAVE_KEY);

  newGame();

  closeModal();

  render();

  toast("🔄 Đã bắt đầu lại!");

}


/* =====================================================
   TẠO KHÁCH TỰ ĐỘNG
===================================================== */

function customerLoop() {

  if (!game.opened) return;


  let chance = .30;


  if (game.upgrades.includes("led")) {

    chance += .10;

  }


  /*
    Rating thấp => ít khách
  */

  if (game.rating < 4) {

    chance -= .12;

  }


  if (Math.random() < chance) {

    createCustomer();

  }

}


/* =====================================================
   GAME CLOCK
===================================================== */

function gameTick() {

  if (!game.opened) return;


  /*
    1 tick = 5 phút
  */

  game.minute += 5;


  if (game.minute >= 60) {

    game.minute = 0;

    game.hour++;

  }


  /*
    Giảm kiên nhẫn
  */

  game.orders.forEach(order => {

    let decrease = 4;


    if (game.upgrades.includes("fan")) {

      decrease -= 1;

    }


    if (game.upgrades.includes("roof")) {

      decrease -= 1;

    }


    order.patience -= decrease;


    if (order.patience <= 0) {

      game.reviews++;

      game.rating =
        (
          game.rating *
          (game.reviews - 1)
          + 2
        )
        / game.reviews;

    }

  });


  game.orders =
    game.orders.filter(
      order => order.patience > 0
    );


  /*
    Sau 19h:
    không nhận khách mới.
    Khách cũ vẫn phải làm.
  */

  if (
    game.hour >= 19 &&
    game.orders.length === 0
  ) {

    endDay();

    return;

  }


  customerLoop();

  saveGame();

  render();

}


/* =====================================================
   KẾT THÚC NGÀY
===================================================== */

function endDay() {

  game.opened = false;

  game.closed = true;

  game.stockReady = false;

  game.orders = [];


  /*
    Nguyên liệu tươi hết sau ngày.
  */

  for (const key in INGREDIENTS) {

    if (INGREDIENTS[key].fresh) {

      game.stock[key] = 0;

    }

  }


  game.day++;

  game.hour = 7;

  game.minute = 0;


  saveGame();

  render();


  toast(
    "🌙 Hết ngày! Ngày mai nhớ nhập hàng."
  );

}


/* =====================================================
   START
===================================================== */

loadGame();

render();


/*
   Cứ 3.5 giây:
   - thời gian + 5 phút
   - khách có thể xuất hiện
*/

setInterval(
  gameTick,
  3500
);