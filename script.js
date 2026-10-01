/* =====================================================
   TIỆM BÚN MẮM MIỀN TÂY
   VERSION 2
===================================================== */

const SAVE_KEY = "QUAN_AN_MIEN_TAY";


/* =====================================================
   MENU
===================================================== */

const MENU = {

  bun: {
    name: "Bún mắm",
    emoji: "🍜",
    price: 55000,
    cost: 22000,

    ingredients: [
      "shrimp",
      "squid",
      "pork",
      "fish",
      "eggplant",
      "water",
      "vegetable",
      "chili",
      "sauce"
    ]
  },

  lau: {
    name: "Lẩu mắm",
    emoji: "🍲",
    price: 180000,
    cost: 85000,

    ingredients: [
      "shrimp",
      "squid",
      "pork",
      "fish",
      "eggplant",
      "water",
      "vegetable",
      "chili",
      "sauce"
    ]
  },

  rice: {
    name: "Cơm",
    emoji: "🍚",
    price: 35000,
    cost: 12000,

    ingredients: ["rice"]
  },

  crabRice: {
    name: "Cơm ba khía",
    emoji: "🍚🦀",
    price: 55000,
    cost: 26000,

    ingredients: [
      "rice",
      "crab"
    ]
  },

  icedTea: {
    name: "Trà đá",
    emoji: "🧊🍵",
    price: 10000,
    cost: 3000,

    ingredients: [
      "tea",
      "ice"
    ]
  },

  sugarTea: {
    name: "Trà đường",
    emoji: "🍵",
    price: 15000,
    cost: 5000,

    ingredients: [
      "tea",
      "sugar"
    ]
  },

  coffeeTea: {
    name: "Trà đường + cà phê",
    emoji: "🍵☕",
    price: 22000,
    cost: 8000,

    ingredients: [
      "tea",
      "sugar",
      "coffee"
    ]
  },

  snack: {
    name: "Bánh snack",
    emoji: "🍘",
    price: 12000,
    cost: 6000,

    ingredients: [
      "snack"
    ]
  },

  coconut: {
    name: "Kẹo dừa",
    emoji: "🥥",
    price: 10000,
    cost: 4500,

    ingredients: [
      "coconut"
    ]
  },

  coffee: {
    name: "Cà phê đen",
    emoji: "☕",
    price: 18000,
    cost: 7000,

    ingredients: [
      "coffee"
    ]
  }

};


/* =====================================================
   NGUYÊN LIỆU
===================================================== */

const INGREDIENTS = {

  shrimp: ["Tôm", "🦐", 7000, true],

  squid: ["Mực", "🦑", 8000, true],

  pork: ["Thịt quay", "🥩", 9000, true],

  fish: ["Cá phile", "🐟", 7000, true],

  eggplant: ["Cà tím", "🍆", 2500, true],

  water: ["Dọc mùng", "🌿", 2000, true],

  banana: ["Rau chuối", "🥬", 1800, true],

  chili: ["Ớt", "🌶️", 1000, true],

  sauce: ["Nước sốt mẹ", "🥣", 2500, true],

  rice: ["Gạo", "🍚", 1800, false],

  crab: ["Ba khía", "🦀", 7000, true],

  tea: ["Trà", "🍵", 1200, false],

  ice: ["Đá", "🧊", 700, false],

  sugar: ["Đường", "🍬", 800, false],

  coffee: ["Cà phê", "☕", 2500, false],

  snack: ["Snack", "🍘", 5000, false],

  coconut: ["Kẹo dừa", "🥥", 4500, false]

};


/* =====================================================
   NHÂN VIÊN
===================================================== */

const STAFF = [

  {
    id: "cashier",
    emoji: "🧑‍💼",
    name: "Tí Thu Ngân",
    job: "Thu ngân",
    description:
      "Tính tiền chính xác, hạn chế khách đưa thiếu."
  },

  {
    id: "broth",
    emoji: "👨‍🍳",
    name: "Út Múc Lèo",
    job: "Múc nước lèo",
    description:
      "Múc nước lèo cho khách nhưng đôi lúc làm đổ."
  },

  {
    id: "topping",
    emoji: "👩‍🍳",
    name: "Bảy Topping",
    job: "Bỏ topping",
    description:
      "Bỏ topping vào tô nhưng đôi lúc bỏ thiếu."
  },

  {
    id: "care",
    emoji: "🧑‍🌾",
    name: "Hai Chăm Khách",
    job: "Chăm sóc khách",
    description:
      "Rót trà cho khách đang gần hết kiên nhẫn."
  }

];


/* =====================================================
   NÂNG CẤP
===================================================== */

const UPGRADES = [

  {
    id: "fan",
    emoji: "🌀",
    name: "Quạt gió mát rười rượi",
    price: 2000000,
    description:
      "Khách kiên nhẫn thêm 10%."
  },

  {
    id: "license",
    emoji: "📜",
    name: "Giấy phép kinh doanh",
    price: 5000000,
    description:
      "Không bị công an đột xuất phạt tiền."
  },

  {
    id: "roof",
    emoji: "⛱️",
    name: "Mái che",
    price: 6000000,
    description:
      "Khách kiên nhẫn thêm 20%."
  },

  {
    id: "pos",
    emoji: "💳",
    name: "Máy POS",
    price: 10000000,
    description:
      "Tính tiền nhanh và chính xác."
  },

  {
    id: "led",
    emoji: "💡",
    name: "Biển hiệu LED nổi nhất huyện",
    price: 15000000,
    description:
      "Khách đến quán nhiều hơn 10%."
  },

  {
    id: "freezer",
    emoji: "🧊",
    name: "Tủ lạnh cấp đông",
    price: 20000000,
    description:
      "Giữ đồ tươi lâu hơn."
  }

];


/* =====================================================
   GAME STATE
===================================================== */

function createNewGame() {

  let stock = {};

  Object.keys(INGREDIENTS).forEach(
    key => stock[key] = 8
  );

  return {

    shopName: "Quán ăn của ngoại",

    money: 30000000,

    day: 1,

    hour: 7,

    minute: 0,

    rating: 5,

    reviews: [],

    stock: stock,

    orders: [],

    currentTab: "shop",

    upgrades: [],

    staff: [],

    prices: {},

    muted: false,

    closed: false,

    cookingOrder: null

  };

}


let game =
  JSON.parse(
    localStorage.getItem(SAVE_KEY)
  ) || createNewGame();


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
   MONEY
===================================================== */

function money(number) {

  return new Intl.NumberFormat(
    "vi-VN"
  ).format(
    Math.round(number)
  ) + "đ";

}


/* =====================================================
   TOAST
===================================================== */

function toast(message) {

  const div =
    document.createElement("div");

  div.className =
    "toast-message";

  div.textContent =
    message;

  document
    .getElementById("toast")
    .appendChild(div);

  setTimeout(() => {

    div.remove();

  }, 2800);

}


/* =====================================================
   SOUND
===================================================== */

function sound(type = "click") {

  if (game.muted) return;

  try {

    const AudioContext =
      window.AudioContext ||
      window.webkitAudioContext;

    const audio =
      new AudioContext();

    const oscillator =
      audio.createOscillator();

    const gain =
      audio.createGain();

    oscillator.connect(gain);
    gain.connect(audio.destination);

    if (type === "bell") {

      oscillator.frequency.value = 850;

    }

    else if (type === "pour") {

      oscillator.frequency.value = 180;

    }

    else {

      oscillator.frequency.value = 430;

    }

    gain.gain.value = 0.035;

    oscillator.start();

    oscillator.stop(
      audio.currentTime +
      (
        type === "pour"
          ? 0.45
          : 0.15
      )
    );

  }

  catch (error) {}

}


/* =====================================================
   MODAL
===================================================== */

function openModal(html) {

  const modal =
    document.getElementById("modal");

  modal.innerHTML = `

    <div class="modal-box">

      ${html}

      <div style="
        text-align:right;
        margin-top:12px;
      ">

        <button
          class="btn btn-secondary"
          onclick="closeModal()"
        >
          Đóng
        </button>

      </div>

    </div>

  `;

  modal.classList.remove("hidden");

}


function closeModal() {

  document
    .getElementById("modal")
    .classList.add("hidden");

}


/* =====================================================
   START GAME
===================================================== */

function askShopName() {

  if (
    localStorage.getItem(
      SAVE_KEY
    )
  ) return;

  openModal(`

    <h2>🌴 Chào mừng về miền Tây!</h2>

    <p>
      Bạn được cấp
      <b>30.000.000đ</b>
      để mở quán.
    </p>

    <label>
      Đặt tên cho tiệm:
    </label>

    <input
      id="shopNameInput"
      class="input"
      placeholder="VD: Bún Mắm Út Thư"
      maxlength="30"
    >

    <button
      class="btn"
      onclick="startGame()"
    >
      🏮 Mở cửa quán
    </button>

  `);

}


function startGame() {

  const input =
    document.getElementById(
      "shopNameInput"
    );

  game.shopName =
    input.value.trim()
    || "Quán ăn của Ngoại";

  saveGame();

  closeModal();

  render();

  sound("bell");

  toast(
    "🏮 Quán đã mở cửa!"
  );

}


/* =====================================================
   RENDER
===================================================== */

function render() {

  document.getElementById(
    "shopName"
  ).textContent =
    game.shopName;

  document.getElementById(
    "restaurantSign"
  ).textContent =
    game.shopName.toUpperCase();

  document.getElementById(
    "money"
  ).textContent =
    money(game.money);

  document.getElementById(
    "time"
  ).textContent =

    String(game.hour)
      .padStart(2, "0")

    + ":" +

    String(game.minute)
      .padStart(2, "0");

  document.getElementById(
    "day"
  ).textContent =
    "Ngày " + game.day;

  document.getElementById(
    "rating"
  ).textContent =
    game.rating.toFixed(1);

  document.getElementById(
    "reviews"
  ).textContent =
    game.reviews.length +
    " đánh giá";


  document
    .querySelectorAll(
      ".menu-button"
    )
    .forEach(button => {

      button.classList.remove(
        "active"
      );

    });


  const buttons =
    document.querySelectorAll(
      ".menu-button"
    );

  const tabIndex = {

    shop: 0,

    warehouse: 1,

    staff: 2,

    upgrade: 3

  };

  if (
    buttons[tabIndex[game.currentTab]]
  ) {

    buttons[
      tabIndex[game.currentTab]
    ].classList.add("active");

  }


  renderCustomers();

  renderContent();

}


/* =====================================================
   CUSTOMERS
===================================================== */

function renderCustomers() {

  const area =
    document.getElementById(
      "customers"
    );

  area.innerHTML = "";


  game.orders.forEach(
    (order, index) => {

      const customer =
        document.createElement(
          "div"
        );

      customer.className =
        "customer customer" +
        ((index % 4) + 1);

      customer.textContent =
        order.avatar;

      customer.title =
        order.name;

      area.appendChild(
        customer
      );

    }
  );

}


/* =====================================================
   CHANGE TAB
===================================================== */

function changeTab(tab) {

  game.currentTab = tab;

  saveGame();

  render();

  sound();

}


/* =====================================================
   SHOP TAB
===================================================== */

function renderShop() {

  let html = `

    <div class="card">

      <div class="row">

        <div>

          <h2>🏮 Quầy bán hôm nay</h2>

          <span class="muted">
            07:00 – 19:00
          </span>

        </div>

        <button
          class="btn btn-secondary"
          onclick="closeEarly()"
        >
          Đóng sớm
        </button>

      </div>

    </div>

  `;


  if (game.closed) {

    html += `

      <div class="card empty">

        <div style="font-size:50px">
          🌙
        </div>

        <h3>
          Hôm nay đã đóng cửa
        </h3>

        <button
          class="btn"
          onclick="nextDay()"
        >
          🌅 Sang ngày mới
        </button>

      </div>

    `;

  }


  else if (
    game.orders.length === 0
  ) {

    html += `

      <div class="card empty">

        <div style="font-size:50px">
          🧑‍🌾
        </div>

        <b>
          Đang chờ khách...
        </b>

        <p class="muted">
          Hãy nhập đủ nguyên liệu
          trong kho.
        </p>

      </div>

    `;

  }


  game.orders.forEach(
    (order, index) => {

      const menu =
        MENU[order.menu];

      const price =
        game.prices[
          order.menu
        ] ||
        menu.price;


      html += `

        <div class="card order">

          <div class="row">

            <h3>
              ${order.avatar}
              ${order.name}
            </h3>

            <b>
              ${money(price)}
            </b>

          </div>

          <p>

            ${menu.emoji}

            <b>
              ${menu.name}
            </b>

          </p>

          <p class="muted">

            Topping:

            ${
              order.toppings
                .map(
                  x =>
                  INGREDIENTS[x][0]
                )
                .join(", ")
              ||
              "Không thêm"
            }

          </p>

          <div class="patience">

            <div
              class="patience-bar"
              style="
                width:
                ${order.patience}%
              "
            ></div>

          </div>

          <small>
            Kiên nhẫn:
            ${Math.ceil(order.patience)}%
          </small>

          <br>

          <button
            class="btn"
            onclick="startCooking(${index})"
          >
            👩‍🍳 Làm món
          </button>

          <button
            class="btn btn-secondary"
            onclick="talkCustomer(${index})"
          >
            💬 Nói chuyện
          </button>

        </div>

      `;

    }
  );


  html += `

    <div class="card">

      <h2>
        💰 Bảng giá
      </h2>

      <p class="muted">
        Bạn có thể tự điều chỉnh
        giá bán.
      </p>

      <div class="grid">

  `;


  Object.entries(MENU)
    .forEach(
      ([key, menu]) => {

        const price =
          game.prices[key]
          || menu.price;


        html += `

          <div class="item">

            <b>
              ${menu.emoji}
              ${menu.name}
            </b>

            <small>
              Giá vốn:
              ${money(menu.cost)}
            </small>

            <div
              class="row"
              style="margin-top:8px"
            >

              <input
                class="price-input"
                type="number"
                value="${price}"
                onchange="
                  changePrice(
                    '${key}',
                    this.value
                  )
                "
              >

              <span>đ</span>

            </div>

          </div>

        `;

      }
    );


  html += `

      </div>

    </div>

  `;


  return html;

}


/* =====================================================
   WAREHOUSE
===================================================== */

function renderWarehouse() {

  let html = `

    <div class="card">

      <h2>
        📦 Kho nguyên liệu
      </h2>

      <p class="muted">
        🌱 Đồ tươi chỉ để được
        trong ngày.
      </p>

      <button
        class="btn"
        onclick="buyFullStock()"
      >
        📦 Nhập đủ hàng hôm nay
      </button>

    </div>

    <div class="grid">

  `;


  Object.entries(
    INGREDIENTS
  ).forEach(
    ([key, item]) => {

      html += `

        <div class="item">

          <div class="row">

            <b>
              ${item[1]}
              ${item[0]}
            </b>

            ${
              item[3]
              ? "🌱"
              : "📦"
            }

          </div>

          <h2>
            ${game.stock[key] || 0}
          </h2>

          <small>
            ${money(item[2])}
            / phần
          </small>

          <br><br>

          <button
            class="btn"
            onclick="
              buyIngredient(
                '${key}',
                1
              )
            "
          >
            +1
          </button>

          <button
            class="btn btn-secondary"
            onclick="
              buyIngredient(
                '${key}',
                5
              )
            "
          >
            +5
          </button>

        </div>

      `;

    }
  );


  html += `
    </div>
  `;


  return html;

}


/* =====================================================
   STAFF
===================================================== */

function renderStaff() {

  let html = `

    <div class="card">

      <h2>
        👩‍🍳 Nhân viên
      </h2>

      <p class="muted">
        Nhân viên hỗ trợ bạn,
        nhưng đôi khi vẫn mắc lỗi.
      </p>

    </div>

    <div class="grid">

  `;


  STAFF.forEach(
    staff => {

      const hired =
        game.staff.includes(
          staff.id
        );


      html += `

        <div class="card">

          <div style="font-size:38px">
            ${staff.emoji}
          </div>

          <h3>
            ${staff.name}
          </h3>

          <b>
            ${staff.job}
          </b>

          <p class="muted">
            ${staff.description}
          </p>

          ${
            hired

            ?

            `
              <b style="color:#397347">
                ✓ Đang làm việc
              </b>
            `

            :

            `
              <button
                class="btn"
                onclick="
                  hireStaff(
                    '${staff.id}'
                  )
                "
              >
                Thuê
                3.000.000đ
              </button>
            `
          }

        </div>

      `;

    }
  );


  html += `
    </div>
  `;


  return html;

}


/* =====================================================
   UPGRADES
===================================================== */

function renderUpgrade() {

  let html = `

    <div class="card">

      <h2>
        🔧 Nâng cấp quán
      </h2>

      <p class="muted">
        Mua theo thứ tự từ rẻ
        đến mắc.
      </p>

    </div>

    <div class="grid">

  `;


  UPGRADES.forEach(
    (upgrade, index) => {

      const bought =
        game.upgrades.includes(
          upgrade.id
        );

      const locked =
        index > 0 &&
        !game.upgrades.includes(
          UPGRADES[index - 1].id
        );


      html += `

        <div class="card">

          <div style="font-size:38px">
            ${upgrade.emoji}
          </div>

          <h3>
            ${upgrade.name}
          </h3>

          <p class="muted">
            ${upgrade.description}
          </p>

          <div class="row">

            <b>
              ${money(upgrade.price)}
            </b>

            ${
              bought

              ?

              `
                <span
                  style="
                    color:#397347
                  "
                >
                  ✓ Đã mua
                </span>
              `

              :

              locked

              ?

              `
                <span>
                  🔒
                </span>
              `

              :

              `
                <button
                  class="btn"
                  onclick="
                    buyUpgrade(
                      '${upgrade.id}'
                    )
                  "
                >
                  Mua
                </button>
              `
            }

          </div>

        </div>

      `;

    }
  );


  html += `
    </div>
  `;


  return html;

}


/* =====================================================
   CONTENT
===================================================== */

function renderContent() {

  let html = "";


  if (
    game.cookingOrder !== null
  ) {

    html =
      renderCooking();

  }

  else {

    if (
      game.currentTab === "shop"
    ) {

      html = renderShop();

    }

    else if (
      game.currentTab === "warehouse"
    ) {

      html =
        renderWarehouse();

    }

    else if (
      game.currentTab === "staff"
    ) {

      html =
        renderStaff();

    }

    else if (
      game.currentTab === "upgrade"
    ) {

      html =
        renderUpgrade();

    }

  }


  document.getElementById(
    "content"
  ).innerHTML = html;

}


/* =====================================================
   COOKING SCREEN
===================================================== */

function renderCooking() {

  const order =
    game.orders[
      game.cookingOrder
    ];


  if (!order) {

    game.cookingOrder =
      null;

    return "";

  }


  const menu =
    MENU[order.menu];


  let bowlContent =
    order.added
      .map(
        key =>
        INGREDIENTS[key][1]
      )
      .join("");


  if (!bowlContent) {

    bowlContent = "🍜";

  }


  let html = `

    <div class="card cooking">

      <h2>
        👩‍🍳 Làm ${menu.name}
      </h2>

      <p>
        Khách:
        <b>${order.name}</b>
      </p>

      <div class="bowl">

        <div class="bowl-content">
          ${bowlContent}
        </div>

      </div>

      <p>
        Kéo/thêm topping khách gọi:
      </p>

      <div class="toppings">

  `;


  order.toppings.forEach(
    key => {

      const used =
        order.added.includes(
          key
        );


      html += `

        <button
          class="
            topping-button
            ${used ? "used" : ""}
          "
          onclick="
            addTopping(
              '${key}'
            )
          "
        >

          ${INGREDIENTS[key][1]}

          <span>
            ${INGREDIENTS[key][0]}
          </span>

        </button>

      `;

    }
  );


  html += `

      </div>

      <button
        class="big-button"
        onclick="pourBroth()"
      >
        💧 ĐỔ NƯỚC LÈO
      </button>

      <button
        class="big-button"
        ${
          order.poured
          ? ""
          : "disabled"
        }
        onclick="finishCooking()"
      >
        ✨ HOÀN THÀNH MÓN
      </button>

      <button
        class="
          big-button
        "
        style="
          background:#b74b3e;
        "
        onclick="
          cancelCooking()
        "
      >
        ↩️ Quay lại
      </button>

    </div>

  `;


  return html;

}


/* =====================================================
   START COOKING
===================================================== */

function startCooking(index) {

  const order =
    game.orders[index];

  order.added = [];

  order.poured = false;

  game.cookingOrder =
    index;

  saveGame();

  render();

}


/* =====================================================
   ADD TOPPING
===================================================== */

function addTopping(key) {

  const order =
    game.orders[
      game.cookingOrder
    ];


  if (
    order.added.includes(
      key
    )
  ) {

    return;

  }


  order.added.push(key);

  sound();

  saveGame();

  render();

}


/* =====================================================
   POUR BROTH
===================================================== */

function pourBroth() {

  const order =
    game.orders[
      game.cookingOrder
    ];


  order.poured = true;

  sound("pour");

  saveGame();

  render();

  toast(
    "💧 Đã đổ nước lèo!"
  );

}


/* =====================================================
   FINISH COOKING
===================================================== */

function finishCooking() {

  const index =
    game.cookingOrder;

  const order =
    game.orders[index];


  if (!order.poured) {

    return;

  }


  const missing =
    order.toppings.filter(
      key =>
      !order.added.includes(
        key
      )
    );


  /*
    Nhân viên topping có thể
    bỏ thiếu
  */

  if (
    game.staff.includes(
      "topping"
    ) &&
    missing.length > 0 &&
    Math.random() < 0.65
  ) {

    order.missing =
      missing;

    game.cookingOrder =
      null;

    saveGame();

    render();


    openModal(`

      <h2>
        ⚠️ Nhân viên báo lỗi
      </h2>

      <p>
        Bảy Topping bỏ thiếu:
      </p>

      <b>
        ${
          missing
            .map(
              x =>
              INGREDIENTS[x][0]
            )
            .join(", ")
        }
      </b>

      <br><br>

      <button
        class="btn"
        onclick="
          fixMissing(${index})
        "
      >
        🛠️ Bổ sung topping
      </button>

      <button
        class="btn btn-danger"
        onclick="
          customerLeaves(${index})
        "
      >
        Bỏ món

      </button>

    `);

    return;

  }


  /*
    Nhân viên múc nước lèo
    có thể làm đổ
  */

  if (
    game.staff.includes(
      "broth"
    ) &&
    Math.random() < 0.2
  ) {

    game.cookingOrder =
      null;

    saveGame();

    render();


    openModal(`

      <h2>
        💦 Ôi không!
      </h2>

      <p>
        Út Múc Lèo làm đổ
        một phần nước lèo.
      </p>

      <button
        class="btn"
        onclick="
          redoBroth(${index})
        "
      >
        🍲 Làm lại
      </button>

      <button
        class="btn btn-danger"
        onclick="
          customerLeaves(${index})
        "
      >
        Bỏ món
      </button>

    `);

    return;

  }


  order.ready = true;

  order.total =
    game.prices[
      order.menu
    ] ||
    MENU[
      order.menu
    ].price;


  game.cookingOrder =
    null;

  saveGame();

  render();


  openModal(`

    <h2>
      🍜 Món đã xong!
    </h2>

    <p>
      ${MENU[order.menu].emoji}
      ${MENU[order.menu].name}
    </p>

    <button
      class="btn"
      onclick="
        deliverOrder(${index})
      "
    >
      🧑‍🌾 Giao món &
      thu tiền
    </button>

  `);

}


/* =====================================================
   FIX MISSING
===================================================== */

function fixMissing(index) {

  const order =
    game.orders[index];


  order.added =
    [
      ...order.toppings
    ];

  order.missing = [];

  order.ready = true;

  order.total =
    game.prices[
      order.menu
    ] ||
    MENU[
      order.menu
    ].price;


  closeModal();

  saveGame();

  render();


  openModal(`

    <h2>
      ✨ Đã sửa xong!
    </h2>

    <button
      class="btn"
      onclick="
        deliverOrder(${index})
      "
    >
      Giao món & thu tiền
    </button>

  `);

}


/* =====================================================
   REDO BROTH
===================================================== */

function redoBroth(index) {

  const order =
    game.orders[index];

  order.poured = true;

  closeModal();

  saveGame();

  render();


  toast(
    "🍲 Đã làm lại nước lèo!"
  );

}


/* =====================================================
   CANCEL COOKING
===================================================== */

function cancelCooking() {

  game.cookingOrder =
    null;

  saveGame();

  render();

}


/* =====================================================
   DELIVER ORDER
===================================================== */

function deliverOrder(index) {

  const order =
    game.orders[index];


  if (!order) {

    closeModal();

    return;

  }


  const price =
    game.prices[
      order.menu
    ] ||
    MENU[
      order.menu
    ].price;


  /*
    Thu ngân giúp tránh khách
    đưa thiếu
  */

  let paid = price;


  if (
    !game.staff.includes(
      "cashier"
    ) &&
    !game.upgrades.includes(
      "pos"
    ) &&
    Math.random() < 0.15
  ) {

    paid =
      Math.round(
        price * 0.8
      );

  }


  if (
    paid < price
  ) {

    openModal(`

      <h2>
        💵 Khách đưa thiếu!
      </h2>

      <p>
        Hóa đơn:
        <b>
          ${money(price)}
        </b>
      </p>

      <p>
        Khách đưa:
        <b>
          ${money(paid)}
        </b>
      </p>

      <button
        class="btn"
        onclick="
          deliverOrder(
            ${index}
          )
        "
      >
        Nhắc khách trả đủ
      </button>

    `);

    return;

  }


  game.money += price;


  addReview(
    4 + Math.random()
  );


  game.orders.splice(
    index,
    1
  );


  closeModal();

  saveGame();

  render();

  sound("bell");


  toast(
    "💰 Khách thanh toán!"
  );

}


/* =====================================================
   CUSTOMER TALK
===================================================== */

function talkCustomer(index) {

  const answers = [

    "Dạ em xin lỗi mình, em làm liền ạ 💚",

    "Mình chờ em chút nha, món sắp xong rồi ạ!",

    "Dạ cảm ơn mình đã thông cảm cho quán 🌴",

    "Ủa mình chờ lâu vậy hả? 😥"

  ];


  openModal(`

    <h2>
      💬 Khách
      ${game.orders[index].name}
    </h2>

    <p>
      “Món lâu quá rồi đó em…”
    </p>

    ${answers.map(
      (answer, i) => `

        <button
          style="
            width:100%;
            margin:5px 0;
            text-align:left;
          "
          class="btn btn-secondary"
          onclick="
            answerCustomer(
              ${index},
              ${i}
            )
          "
        >
          ${answer}
        </button>

      `
    ).join("")}

  `);

}


function answerCustomer(
  index,
  answer
) {

  const order =
    game.orders[index];


  const increase = [
    15,
    10,
    7,
    -8
  ];


  order.patience =
    Math.min(
      100,
      order.patience +
      increase[answer]
    );


  if (
    answer < 3
  ) {

    toast(
      "💚 Khách thấy bạn lịch sự!"
    );

  }


  closeModal();

  saveGame();

  render();

}


/* =====================================================
   ADD REVIEW
===================================================== */

function addReview(stars) {

  stars =
    Math.max(
      1,
      Math.min(
        5,
        Math.round(stars)
      )
    );


  game.reviews.push(
    stars
  );


  const total =
    game.reviews.reduce(
      (a, b) => a + b,
      0
    );


  game.rating =
    total /
    game.reviews.length;

}


/* =====================================================
   BUY INGREDIENT
===================================================== */

function buyIngredient(
  key,
  amount
) {

  const ingredient =
    INGREDIENTS[key];


  const cost =
    ingredient[2] *
    amount;


  if (
    game.money < cost
  ) {

    toast(
      "❌ Không đủ tiền!"
    );

    return;

  }


  game.money -= cost;


  game.stock[key] =
    (
      game.stock[key] || 0
    ) + amount;


  saveGame();

  render();

  sound();

}


/* =====================================================
   BUY FULL STOCK
===================================================== */

function buyFullStock() {

  let total = 0;


  Object.entries(
    INGREDIENTS
  ).forEach(
    ([key, item]) => {

      const amount =
        item[3]
        ? 6
        : 10;


      total +=
        item[2] *
        amount;

    }
  );


  if (
    game.money < total
  ) {

    toast(
      "❌ Không đủ tiền nhập hàng!"
    );

    return;

  }


  game.money -=
    total;


  Object.entries(
    INGREDIENTS
  ).forEach(
    ([key, item]) => {

      game.stock[key] +=
        item[3]
        ? 6
        : 10;

    }
  );


  saveGame();

  render();

  toast(
    "📦 Đã nhập đủ hàng!"
  );

}


/* =====================================================
   CHANGE PRICE
===================================================== */

function changePrice(
  key,
  value
) {

  if (!game.prices) {

    game.prices = {};

  }


  game.prices[key] =
    Math.max(
      1000,
      Number(value)
    );


  saveGame();

  toast(
    "💰 Đã cập nhật giá!"
  );

}


/* =====================================================
   HIRE STAFF
===================================================== */

function hireStaff(id) {

  if (
    game.money < 3000000
  ) {

    toast(
      "❌ Không đủ tiền thuê!"
    );

    return;

  }


  game.money -=
    3000000;


  game.staff.push(id);


  saveGame();

  render();


  toast(
    "👩‍🍳 Đã thuê nhân viên!"
  );

}


/* =====================================================
   BUY UPGRADE
===================================================== */

function buyUpgrade(id) {

  const index =
    UPGRADES.findIndex(
      x => x.id === id
    );


  const upgrade =
    UPGRADES[index];


  if (
    index > 0 &&
    !game.upgrades.includes(
      UPGRADES[index - 1].id
    )
  ) {

    toast(
      "🔒 Hãy mua nâng cấp trước!"
    );

    return;

  }


  if (
    game.money <
    upgrade.price
  ) {

    toast(
      "❌ Chưa đủ tiền!"
    );

    return;

  }


  game.money -=
    upgrade.price;


  game.upgrades.push(
    upgrade.id
  );


  saveGame();

  render();


  toast(
    "🎉 Nâng cấp thành công!"
  );

}


/* =====================================================
   CLOSE EARLY
===================================================== */

function closeEarly() {

  game.closed =
    true;

  game.orders = [];

  saveGame();

  render();

  toast(
    "🌙 Quán đã đóng cửa!"
  );

}


/* =====================================================
   NEXT DAY
===================================================== */

function nextDay() {

  game.day++;

  game.hour = 7;

  game.minute = 0;

  game.closed = false;

  game.orders = [];


  /*
    Đồ tươi hết hạn
  */

  Object.entries(
    INGREDIENTS
  ).forEach(
    ([key, item]) => {

      if (
        item[3] &&
        !game.upgrades.includes(
          "freezer"
        )
      ) {

        game.stock[key] = 0;

      }

    }
  );


  saveGame();

  render();


  toast(
    "🌅 Ngày mới bắt đầu!"
  );

}


/* =====================================================
   SETTINGS
===================================================== */

function openSettings() {

  openModal(`

    <h2>
      ⚙️ Cài đặt
    </h2>

    <div class="card">

      <div class="row">

        <b>
          🔇 Im lặng
        </b>

        <button
          class="btn btn-secondary"
          onclick="
            toggleMute()
          "
        >
          ${
            game.muted
            ? "Đang bật"
            : "Đang tắt"
          }
        </button>

      </div>

    </div>


    <div class="card">

      <b>
        🌙 Đóng cửa sớm
      </b>

      <p class="muted">
        Đóng quán ngay hôm nay.
      </p>

      <button
        class="btn"
        onclick="
          closeEarly();
          closeModal();
        "
      >
        Đóng cửa
      </button>

    </div>


    <div class="card">

      <b>
        🔄 Chơi lại ngày này
      </b>

      <p class="muted">
        Giữ tiền và nâng cấp,
        bắt đầu lại từ 07:00.
      </p>

      <button
        class="btn"
        onclick="
          replayDay()
        "
      >
        Chơi lại
      </button>

    </div>


    <div class="card">

      <button
        class="
          btn
          btn-danger
        "
        onclick="
          resetGame()
        "
      >
        🗑️ Xóa dữ liệu
      </button>

    </div>

  `);

}


function toggleMute() {

  game.muted =
    !game.muted;

  saveGame();

  closeModal();

  openSettings();

}


function replayDay() {

  game.hour = 7;

  game.minute = 0;

  game.closed = false;

  game.orders = [];


  saveGame();

  closeModal();

  render();


  toast(
    "🔄 Đã chơi lại ngày!"
  );

}


function resetGame() {

  if (
    confirm(
      "Bạn có chắc muốn xóa toàn bộ game?"
    )
  ) {

    localStorage.removeItem(
      SAVE_KEY
    );

    location.reload();

  }

}


/* =====================================================
   NEW CUSTOMER
===================================================== */

function createCustomer() {

  if (
    game.closed
  ) return;


  if (
    game.orders.length >= 4
  ) return;


  const menuKeys =
    Object.keys(
      MENU
    );


  const possible =
    menuKeys.filter(
      key => {

        return MENU[key]
          .ingredients
          .every(
            ingredient =>
              game.stock[
                ingredient
              ] > 0
          );

      }
    );


  if (
    possible.length === 0
  ) return;


  const menuKey =
    possible[
      Math.floor(
        Math.random() *
        possible.length
      )
    ];


  const names = [

    "Cô Ba",
    "Chú Tư",
    "Bé Na",
    "Anh Sáu",
    "Chị Hai",
    "Cậu Út",
    "Dì Năm"

  ];


  const avatars = [

    "👩‍🌾",
    "🧑‍🌾",
    "👒",
    "🧔"

  ];


  let toppings = [];


  if (
    menuKey === "bun" ||
    menuKey === "lau"
  ) {

    toppings = [

      "shrimp",
      "squid",
      "pork",
      "fish",
      "eggplant",
      "water",
      "banana",
      "chili",
      "sauce"

    ]
      .sort(
        () =>
          Math.random() -
          .5
      )
      .slice(
        0,
        3 +
        Math.floor(
          Math.random() * 3
        )
      );

  }


  game.orders.push({

    name:
      names[
        Math.floor(
          Math.random() *
          names.length
        )
      ],

    avatar:
      avatars[
        Math.floor(
          Math.random() *
          avatars.length
        )
      ],

    menu:
      menuKey,

    toppings:
      toppings,

    patience: 100,

    added: [],

    poured: false,

    ready: false

  });


  sound("bell");

  render();

}


/* =====================================================
   GAME CLOCK
===================================================== */

function gameTick() {

  if (
    game.closed
  ) return;


  game.minute += 5;


  if (
    game.minute >= 60
  ) {

    game.hour++;

    game.minute = 0;

  }


  /*
    KHÁCH MẤT KIÊN NHẪN
  */

  game.orders.forEach(
    order => {

      let decrease = 2;


      if (
        game.upgrades.includes(
          "fan"
        )
      ) {

        decrease = 1.5;

      }


      if (
        game.upgrades.includes(
          "roof"
        )
      ) {

        decrease = 1.1;

      }


      order.patience -=
        decrease;

    }
  );


  /*
    KHÁCH BỎ ĐI
  */

  const left =
    game.orders.filter(
      order =>
        order.patience <= 0
    );


  left.forEach(
    order => {

      addReview(
        Math.random() < .7
          ? 1
          : 2
      );


      toast(
        order.name +
        " hết kiên nhẫn và bỏ đi 😥"
      );

    }
  );


  game.orders =
    game.orders.filter(
      order =>
        order.patience > 0
    );


  /*
    KHÁCH MỚI
  */

  if (
    game.hour >= 7 &&
    game.hour < 19
  ) {

    let chance =
      0.25;


    if (
      game.upgrades.includes(
        "led"
      )
    ) {

      chance += .1;

    }


    if (
      Math.random() <
      chance
    ) {

      createCustomer();

    }

  }


  /*
    HẾT GIỜ
  */

  if (
    game.hour >= 19 &&
    game.orders.length === 0
  ) {

    game.closed = true;

    toast(
      "🌙 Hết giờ bán!"
    );

  }


  saveGame();

  render();

}


/* =====================================================
   INITIALIZE
===================================================== */

document
  .querySelectorAll(
    ".menu-button"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          sound();

        }
      );

    }
  );


askShopName();

render();


/*
  Mỗi 3.5 giây =
  5 phút trong game
*/

setInterval(
  gameTick,
  3500
);