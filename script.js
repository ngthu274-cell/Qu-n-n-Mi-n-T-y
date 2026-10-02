/* =====================================================
   TIỆM BÚN MẮM MIỀN TÂY
   GAME ENGINE
===================================================== */


/* =====================================================
   MENU
===================================================== */

const MENU = {

    bunMam: {

        name: "Bún mắm",

        emoji: "🍜",

        basePrice: 55000,

        cost: 22000,

        ingredients: [
            "shrimp",
            "squid",
            "fish",
            "pork",
            "eggplant",
            "water",
            "banana",
            "chili",
            "sauce"
        ]

    },


    lauMam: {

        name: "Lẩu mắm",

        emoji: "🍲",

        basePrice: 180000,

        cost: 85000,

        ingredients: [
            "shrimp",
            "squid",
            "fish",
            "pork",
            "eggplant",
            "water",
            "banana",
            "chili",
            "sauce"
        ]

    },


    com: {

        name: "Cơm",

        emoji: "🍚",

        basePrice: 35000,

        cost: 12000,

        ingredients: [
            "rice"
        ]

    },


    crabRice: {

        name: "Cơm ba khía",

        emoji: "🦀",

        basePrice: 55000,

        cost: 26000,

        ingredients: [
            "rice",
            "crab"
        ]

    },


    icedTea: {

        name: "Trà đá",

        emoji: "🧊",

        basePrice: 10000,

        cost: 3000,

        ingredients: [
            "tea",
            "ice"
        ]

    },


    sugarTea: {

        name: "Trà đường",

        emoji: "🧋",

        basePrice: 15000,

        cost: 5000,

        ingredients: [
            "tea",
            "ice",
            "sugar"
        ]

    },


    coffeeTea: {

        name: "Trà đường cà phê",

        emoji: "☕",

        basePrice: 22000,

        cost: 8000,

        ingredients: [
            "tea",
            "ice",
            "sugar",
            "coffee"
        ]

    },


    snack: {

        name: "Snack",

        emoji: "🍿",

        basePrice: 12000,

        cost: 6000,

        ingredients: [
            "snack"
        ]

    },


    coconut: {

        name: "Kẹo dừa",

        emoji: "🥥",

        basePrice: 10000,

        cost: 4500,

        ingredients: [
            "coconut"
        ]

    },


    coffee: {

        name: "Cà phê đen",

        emoji: "☕",

        basePrice: 18000,

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

    shrimp: {
        name: "Tôm",
        emoji: "🦐",
        price: 3500,
        fresh: true
    },

    squid: {
        name: "Mực",
        emoji: "🦑",
        price: 4500,
        fresh: true
    },

    pork: {
        name: "Thịt quay",
        emoji: "🥩",
        price: 5000,
        fresh: true
    },

    fish: {
        name: "Cá filé",
        emoji: "🐟",
        price: 4500,
        fresh: true
    },

    eggplant: {
        name: "Cà tím",
        emoji: "🍆",
        price: 1500,
        fresh: true
    },

    water: {
        name: "Dọc mùng",
        emoji: "🥬",
        price: 1200,
        fresh: true
    },

    banana: {
        name: "Rau chuối",
        emoji: "🌿",
        price: 1200,
        fresh: true
    },

    chili: {
        name: "Ớt",
        emoji: "🌶️",
        price: 800,
        fresh: true
    },

    sauce: {
        name: "Nước sốt mẹ",
        emoji: "🥣",
        price: 2000,
        fresh: false
    },

    rice: {
        name: "Cơm",
        emoji: "🍚",
        price: 1500,
        fresh: false
    },

    crab: {
        name: "Ba khía",
        emoji: "🦀",
        price: 6000,
        fresh: true
    },

    tea: {
        name: "Trà",
        emoji: "🍵",
        price: 1000,
        fresh: false
    },

    ice: {
        name: "Đá",
        emoji: "🧊",
        price: 500,
        fresh: false
    },

    sugar: {
        name: "Đường",
        emoji: "🍬",
        price: 500,
        fresh: false
    },

    coffee: {
        name: "Cà phê",
        emoji: "☕",
        price: 1500,
        fresh: false
    },

    snack: {
        name: "Snack",
        emoji: "🍿",
        price: 3000,
        fresh: false
    },

    coconut: {
        name: "Kẹo dừa",
        emoji: "🥥",
        price: 2500,
        fresh: false
    }

};


/* =====================================================
   NHÂN VIÊN
===================================================== */

const STAFF = {

    cashier: {

        name: "Tí Thu Ngân",

        job: "Thu ngân",

        emoji: "👩🏻‍💼",

        price: 3000000

    },

    broth: {

        name: "Út Múc Lèo",

        job: "Múc nước lèo",

        emoji: "👩🏻‍🍳",

        price: 3000000

    },

    topping: {

        name: "Bảy Topping",

        job: "Chuẩn bị topping",

        emoji: "🧑🏻‍🍳",

        price: 3000000

    },

    care: {

        name: "Hai Chăm Khách",

        job: "Chăm sóc khách hàng",

        emoji: "👩🏻",

        price: 3000000

    }

};


/* =====================================================
   NÂNG CẤP
===================================================== */

const UPGRADES = [

    {
        id: "fan",
        name: "Quạt gió mát rười rượi",
        emoji: "🌀",
        price: 2000000,
        desc: "+10% thời gian chờ của khách"
    },

    {
        id: "license",
        name: "Giấy phép kinh doanh",
        emoji: "📜",
        price: 5000000,
        desc: "Không bị phạt bất ngờ"
    },

    {
        id: "roof",
        name: "Mái che miền Tây",
        emoji: "🏠",
        price: 6000000,
        desc: "+20% thời gian chờ"
    },

    {
        id: "pos",
        name: "Máy POS",
        emoji: "💳",
        price: 10000000,
        desc: "Thanh toán nhanh và chính xác"
    },

    {
        id: "sign",
        name: "Biển hiệu đèn LED nổi nhất huyện",
        emoji: "💡",
        price: 15000000,
        desc: "+10% lượng khách"
    },

    {
        id: "freezer",
        name: "Tủ lạnh cấp đông",
        emoji: "🧊",
        price: 20000000,
        desc: "Giữ nguyên liệu tươi lâu hơn"
    }

];


/* =====================================================
   KHÁCH
===================================================== */

const CUSTOMER_NAMES = [

    "Anh Quang Khải",
    "Chị Ngọc Hân",
    "Cô Hai",
    "Chú Ba",
    "Anh Minh",
    "Chị Thảo",
    "Bé Na",
    "Anh Tuấn",
    "Chị My",
    "Cô Sáu",
    "Chú Tư",
    "Anh Khoa"
];


const CUSTOMER_AVATARS = [

    "👨🏻",
    "👩🏻",
    "👩🏻‍🦳",
    "👨🏻‍🦳",
    "👧🏻",
    "👦🏻"

];


const CUSTOMER_TALKS = [

    "Trời ơi thơm quá!",

    "Mùi nước lèo hấp dẫn ghê!",

    "Quán hôm nay đông quá!",

    "Cho em thêm rau nha!",

    "Nóng lòng muốn ăn quá!",

    "Mùi này đúng quê mình luôn!"

];


/* =====================================================
   GAME STATE
===================================================== */

let game;


/* =====================================================
   KHỞI TẠO
===================================================== */

function createNewGame(shopName) {

    const stock = {};

    Object.keys(INGREDIENTS).forEach(key => {

        stock[key] =
            INGREDIENTS[key].fresh
                ? 10
                : 20;

    });


    const prices = {};

    Object.keys(MENU).forEach(key => {

        prices[key] =
            MENU[key].basePrice;

    });


    return {

        shopName:
            shopName || "Tiệm Bún Mắm",

        money:
            30000000,

        day:
            1,

        hour:
            7,

        minute:
            0,

        rating:
            5,

        reviews:
            0,

        stock,

        prices,

        orders: [],

        servedToday:
            0,

        appToday:
            0,

        fiveStarToday:
            0,

        xp:
            0,

        closed:
            false,

        paused:
            false,

        staff: {

            cashier: false,

            broth: false,

            topping: false,

            care: false

        },

        upgrades: [],

        tasks: {

            sold: 0,

            fiveStar: 0,

            app: 0

        },

        selectedTab:
            "shop"

    };

}


/* =====================================================
   LOAD / SAVE
===================================================== */

function saveGame() {

    localStorage.setItem(
        "TIEM_BUN_MAM_FINAL",
        JSON.stringify(game)
    );

}


function loadGame() {

    const data =
        localStorage.getItem(
            "TIEM_BUN_MAM_FINAL"
        );

    if (!data) return false;

    try {

        game = JSON.parse(data);

        return true;

    } catch {

        return false;

    }

}


/* =====================================================
   TIỀN
===================================================== */

function money(value) {

    return Math.round(value)
        .toLocaleString("vi-VN");

}


function moneyShort(value) {

    if (value >= 1000000) {

        return (
            (value / 1000000)
                .toFixed(1)
                .replace(".", ",")
            + "tr"
        );

    }

    return (
        (value / 1000)
            .toFixed(1)
            .replace(".", ",")
        + "k"
    );

}


/* =====================================================
   TOAST
===================================================== */

let toastTimer;


function toast(message) {

    const el =
        document.getElementById("toast");

    el.textContent =
        message;

    el.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer =
        setTimeout(() => {

            el.classList.remove("show");

        }, 2200);

}


/* =====================================================
   SOUND
===================================================== */

let muted = false;


function sound(type) {

    if (muted) return;

    try {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;

        const ctx =
            new AudioContext();

        const osc =
            ctx.createOscillator();

        const gain =
            ctx.createGain();

        osc.connect(gain);

        gain.connect(ctx.destination);


        if (type === "bell") {

            osc.frequency.value = 700;

        } else if (type === "pour") {

            osc.frequency.value = 250;

        } else {

            osc.frequency.value = 500;

        }


        gain.gain.value = .04;

        osc.start();

        osc.stop(
            ctx.currentTime + .12
        );

    } catch {}

}


/* =====================================================
   FORMAT TIME
===================================================== */

function timeString() {

    return String(game.hour)
        .padStart(2, "0")
        + ":"
        + String(game.minute)
            .padStart(2, "0");

}


/* =====================================================
   RATING
===================================================== */

function starsHTML() {

    let html = "";

    for (let i = 1; i <= 5; i++) {

        html +=
            i <= Math.round(game.rating)
                ? "★"
                : "☆";

    }

    return html;

}


/* =====================================================
   RENDER HEADER
===================================================== */

function renderHeader() {

    document.getElementById("dayText")
        .textContent =
        `Ngày ${game.day}`;


    document.getElementById("timeText")
        .textContent =
        timeString();


    document.getElementById("moneyText")
        .textContent =
        moneyShort(game.money);


    document.getElementById("starsText")
        .textContent =
        starsHTML();


    document.getElementById("ratingText")
        .textContent =
        `${game.rating.toFixed(1).replace(".", ",")} · ${game.reviews} đánh giá`;


    document.getElementById("shopNameScene")
        .textContent =
        game.shopName.toUpperCase();

}


/* =====================================================
   CHANGE TAB
===================================================== */

function changeTab(tab) {

    game.selectedTab =
        tab;

    document
        .querySelectorAll(".tab")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.tab === tab
            );

        });


    renderContent();

    saveGame();

}


/* =====================================================
   RENDER
===================================================== */

function render() {

    renderHeader();

    renderCustomers();

    renderContent();

}


/* =====================================================
   RENDER CUSTOMERS
===================================================== */

function renderCustomers() {

    const scene =
        document.getElementById(
            "customerScene"
        );

    scene.innerHTML = "";


    const visible =
        game.orders.slice(0, 4);


    visible.forEach((order, index) => {

        const div =
            document.createElement("div");

        div.className =
            "scene-customer";


        div.style.left =
            (25 + index * 22) + "%";


        div.textContent =
            order.avatar;


        scene.appendChild(div);

    });


    if (visible.length > 0) {

        document.getElementById(
            "customerBubble"
        ).textContent =
            visible[0].talk;

    }

}


/* =====================================================
   CONTENT
===================================================== */

function renderContent() {

    const content =
        document.getElementById(
            "content"
        );


    if (game.selectedTab === "shop") {

        renderShop(content);

    }

    else if (game.selectedTab === "warehouse") {

        renderWarehouse(content);

    }

    else if (game.selectedTab === "price") {

        renderPrices(content);

    }

    else if (game.selectedTab === "upgrade") {

        renderUpgrades(content);

    }

    else if (game.selectedTab === "decorate") {

        renderDecorate(content);

    }

    else if (game.selectedTab === "rating") {

        renderRating(content);

    }

    else if (game.selectedTab === "book") {

        renderBook(content);

    }

}


/* =====================================================
   SHOP
===================================================== */

function renderShop(content) {

    let html = `

        <div class="section-title">
            🏪 ${game.shopName}
        </div>

    `;


    if (game.closed) {

        html += `

            <div class="card">

                <div class="card-title">
                    🌙 Tiệm đã đóng cửa
                </div>

                <div class="card-desc">
                    Hôm nay đã kết thúc.
                    Nghỉ ngơi rồi mở cửa ngày mới nha!
                </div>

                <button
                    class="open-day"
                    onclick="nextDay()">

                    🌅 Mở cửa ngày ${game.day + 1}

                </button>

            </div>

        `;

        content.innerHTML =
            html;

        return;

    }


    html += `

        <div class="card">

            <div class="card-title">
                📋 Nhiệm vụ hôm nay
            </div>

            <div class="task-row">
                Bán 10 món
                <span class="task-progress">
                    ${game.servedToday}/10
                </span>
            </div>

            <div class="task-row">
                Khách chấm 5 sao
                <span class="task-progress">
                    ${game.fiveStarToday}/3
                </span>
            </div>

            <div class="task-row">
                Giao đơn app
                <span class="task-progress">
                    ${game.appToday}/2
                </span>
            </div>

        </div>

    `;


    if (game.orders.length === 0) {

        html += `

            <div class="empty">

                <div class="empty-icon">
                    🍜
                </div>

                Chưa có khách nào.
                <br>
                Đợi khách vào quán nha!

            </div>

        `;

    }


    game.orders.forEach(
        (order, index) => {

            html += renderOrderCard(
                order,
                index
            );

        }
    );


    html += `

        <button
            class="btn btn-yellow"
            style="width:100%;margin-top:10px"
            onclick="closeEarly()">

            🌙 Đóng cửa sớm

        </button>

    `;


    content.innerHTML =
        html;

}


/* =====================================================
   ORDER CARD
===================================================== */

function renderOrderCard(
    order,
    index
) {

    const menu =
        MENU[order.menu];


    const percent =
        Math.max(
            0,
            Math.min(
                100,
                order.patience
            )
        );


    const toppingText =
        order.toppings &&
        order.toppings.length

            ? order.toppings
                .map(
                    key =>
                        INGREDIENTS[key].name
                )
                .join(", ")

            : "Không thêm topping";


    return `

        <div class="order-card">

            <div class="order-top">

                <div class="customer-avatar">
                    ${order.avatar}
                </div>

                <div class="order-info">

                    <div class="customer-name">
                        ${order.name}
                    </div>

                    <div class="order-status">
                        ${order.isApp
                            ? "📱 Đơn App"
                            : "🍜 Khách tại quán"}
                    </div>

                    <div class="patience">

                        <div
                            class="patience-fill"
                            style="width:${percent}%">
                        </div>

                    </div>

                </div>

            </div>


            <div class="order-food">

                <b>
                    ${order.quantity} phần
                    ${menu.emoji}
                    ${menu.name}
                </b>

                <br>

                ${
                    order.toppings &&
                    order.toppings.length
                        ? "Topping: " + toppingText
                        : ""
                }

                <br>

                💰
                ${money(
                    game.prices[order.menu]
                    * order.quantity
                )}đ

            </div>


            <div class="order-buttons">

                <button
                    class="btn btn-primary"
                    onclick="startCooking(${index})">

                    🍜 Làm món

                </button>


                <button
                    class="btn btn-blue"
                    onclick="talkCustomer(${index})">

                    💬 Nói chuyện

                </button>

            </div>

        </div>

    `;

}


/* =====================================================
   COOKING
===================================================== */

let cookingIndex = null;

let cookingOrder = null;


function startCooking(index) {

    cookingIndex =
        index;

    cookingOrder =
        JSON.parse(
            JSON.stringify(
                game.orders[index]
            )
        );


    cookingOrder.selected = [];

    cookingOrder.bowl = false;

    cookingOrder.broth = false;


    renderCooking();

}


/* =====================================================
   RENDER COOKING
===================================================== */

function renderCooking() {

    const content =
        document.getElementById(
            "content"
        );


    if (!cookingOrder) {

        renderContent();

        return;

    }


    const menu =
        MENU[cookingOrder.menu];


    let html = `

        <div class="cooking">

            <div class="cooking-header">

                <div class="cooking-title">

                    👩🏻‍🍳 Làm món cho
                    ${cookingOrder.name}

                </div>

                <div class="cooking-order">

                    ${cookingOrder.quantity}
                    phần ${menu.name}

                    <br>

                    ${
                        cookingOrder.toppings &&
                        cookingOrder.toppings.length
                            ? "Khách yêu cầu: " +
                              cookingOrder.toppings
                                .map(
                                    x =>
                                        INGREDIENTS[x].name
                                )
                                .join(", ")
                            : "Không yêu cầu topping"
                    }

                </div>

            </div>


            <div class="container-grid">

                <button
                    class="ingredient-button
                    ${cookingOrder.bowl
                        ? "selected"
                        : ""}"
                    onclick="takeBowl()">

                    <div class="ingredient-emoji">
                        🥣
                    </div>

                    <div class="ingredient-name">
                        ${menu.name === "Lẩu mắm"
                            ? "Nồi lẩu"
                            : "Lấy tô"}
                    </div>

                </button>


                <button
                    class="ingredient-button
                    ${cookingOrder.broth
                        ? "selected"
                        : ""}"
                    onclick="pourBroth()">

                    <div class="ingredient-emoji">
                        🍲
                    </div>

                    <div class="ingredient-name">
                        Múc nước lèo
                    </div>

                </button>


                <button
                    class="ingredient-button"
                    onclick="showRecipe()">

                    <div class="ingredient-emoji">
                        📜
                    </div>

                    <div class="ingredient-name">
                        Công thức
                    </div>

                </button>

            </div>


            <div class="bowl-area">

                ${
                    cookingOrder.bowl

                    ?

                    `<div class="bowl-image">

                        ${menu.emoji}

                    </div>`

                    :

                    `<div class="bowl-empty">

                        🥣

                        <br>

                        Chưa có tô.
                        <br>
                        Chạm "Lấy tô" để lấy.

                    </div>`
                }

            </div>


            <div class="section-title"
                 style="margin-left:4px">

                🥬 Topping

            </div>


            <div class="container-grid">

                ${renderToppings()}

            </div>


            <div class="cooking-actions">

                <button
                    class="btn btn-yellow"
                    onclick="pourBroth()">

                    🍲 Múc nước

                </button>


                <button
                    class="btn btn"
                    onclick="clearCooking()">

                    🗑️ Làm lại

                </button>

            </div>


            <button
                class="deliver-button"
                onclick="deliverDish()">

                🍜 GIAO MÓN

            </button>

            <button
                class="btn"
                style="width:100%;margin-top:8px"
                onclick="backToShop()">

                ← Quay lại

            </button>

        </div>

    `;


    content.innerHTML =
        html;

}


/* =====================================================
   TOPPING
===================================================== */

function renderToppings() {

    const keys = [

        "shrimp",
        "squid",
        "pork",
        "fish",
        "eggplant",
        "water",
        "banana",
        "chili",
        "sauce"

    ];


    return keys.map(key => {

        const item =
            INGREDIENTS[key];

        const selected =
            cookingOrder.selected
                .includes(key);


        const stock =
            game.stock[key] || 0;


        return `

            <button
                class="
                    ingredient-button
                    ${selected ? "selected" : ""}
                    ${stock <= 0 ? "disabled" : ""}
                "
                onclick="
                    addTopping('${key}')
                "
                ${stock <= 0 ? "disabled" : ""}>

                <div class="ingredient-emoji">

                    ${item.emoji}

                </div>

                <div class="ingredient-name">

                    ${item.name}

                    <br>

                    ${stock}

                </div>

            </button>

        `;

    }).join("");

}


/* =====================================================
   TAKE BOWL
===================================================== */

function takeBowl() {

    cookingOrder.bowl =
        true;

    sound("click");

    renderCooking();

}


/* =====================================================
   ADD TOPPING
===================================================== */

function addTopping(key) {

    if (!cookingOrder) return;


    const stock =
        game.stock[key] || 0;


    if (stock <= 0) {

        toast(
            "❌ Nguyên liệu đã hết!"
        );

        return;

    }


    if (
        !cookingOrder.selected
            .includes(key)
    ) {

        cookingOrder.selected.push(
            key
        );

        sound("click");

        renderCooking();

    }

}


/* =====================================================
   POUR BROTH
===================================================== */

function pourBroth() {

    if (!cookingOrder.bowl) {

        toast(
            "🥣 Lấy tô trước nha!"
        );

        return;

    }


    cookingOrder.broth =
        true;

    sound("pour");

    renderCooking();

}


/* =====================================================
   CLEAR COOKING
===================================================== */

function clearCooking() {

    if (!cookingOrder) return;

    cookingOrder.selected = [];

    cookingOrder.bowl = false;

    cookingOrder.broth = false;

    renderCooking();

}


/* =====================================================
   RECIPE
===================================================== */

function showRecipe() {

    const menu =
        MENU[cookingOrder.menu];


    showModal(`

        <div class="modal-title">
            📜 Công thức
        </div>

        <p>
            <b>${menu.name}</b>
        </p>

        <p>
            ${menu.ingredients
                .map(
                    key =>
                        INGREDIENTS[key].emoji
                        + " "
                        + INGREDIENTS[key].name
                )
                .join("<br>")}
        </p>

        <button
            class="btn btn-primary"
            style="width:100%"
            onclick="closeModal()">

            Đóng

        </button>

    `);

}


/* =====================================================
   DELIVER DISH
===================================================== */

function deliverDish() {

    if (!cookingOrder) return;


    /* ---- kiểm tra tô ---- */

    if (!cookingOrder.bowl) {

        toast(
            "❌ Chưa lấy tô!"
        );

        return;

    }


    /* ---- kiểm tra nước ---- */

    if (!cookingOrder.broth) {

        toast(
            "❌ Chưa múc nước lèo!"
        );

        return;

    }


    const menu =
        MENU[cookingOrder.menu];


    /* ---- nhân viên múc nước làm sai ---- */

    if (
        game.staff.broth &&
        Math.random() < .12
    ) {

        showModal(`

            <div class="modal-title">
                😭 Út Múc Lèo làm đổ nước!
            </div>

            <p>
                Một phần vừa bị đổ mất.
                Làm lại món này nha!
            </p>

            <div class="modal-actions">

                <button
                    class="btn"
                    onclick="closeModal()">

                    Bỏ qua

                </button>

                <button
                    class="btn btn-primary"
                    onclick="
                        closeModal();
                        renderCooking();
                    ">

                    Làm lại

                </button>

            </div>

        `);

        return;

    }


    /* ---- nhân viên quên topping ---- */

    const missing =
        (cookingOrder.toppings || [])
            .filter(
                key =>
                    !cookingOrder.selected
                        .includes(key)
            );


    if (
        missing.length &&
        game.staff.topping &&
        Math.random() < .45
    ) {

        showModal(`

            <div class="modal-title">
                😭 Quên topping!
            </div>

            <p>
                Bảy Topping quên:
            </p>

            <p style="
                color:#ff6259;
                font-weight:900;
            ">

                ${missing
                    .map(
                        x =>
                            INGREDIENTS[x].name
                    )
                    .join(", ")}

            </p>


            <button
                class="btn btn-primary"
                style="width:100%"
                onclick="fixMissingTopping()">

                ➕ Thêm topping

            </button>

        `);

        return;

    }


    /* =================================================
       LƯU THÔNG TIN TRƯỚC KHI XÓA
    ================================================= */

    const quantity =
        cookingOrder.quantity || 1;


    const price =
        game.prices[cookingOrder.menu]
        || menu.basePrice;


    const earned =
        price * quantity;


    /* =================================================
       TRỪ NGUYÊN LIỆU
    ================================================= */

    consumeIngredients(
        cookingOrder
    );


    /* =================================================
       TIỀN
    ================================================= */

    game.money +=
        earned;


    game.servedToday +=
        quantity;


    game.tasks.sold +=
        quantity;


    if (cookingOrder.isApp) {

        game.appToday++;

        game.tasks.app++;

    }


    /* =================================================
       ĐÁNH GIÁ
    ================================================= */

    let stars;


    const random =
        Math.random();


    if (random < .1) {

        stars = 3;

    }

    else if (random < .4) {

        stars = 4;

    }

    else {

        stars = 5;

    }


    addReview(
        stars
    );


    if (stars === 5) {

        game.fiveStarToday++;

        game.tasks.fiveStar++;

    }


    /* =================================================
       XÓA ĐƠN
    ================================================= */

    game.orders.splice(
        cookingIndex,
        1
    );


    /* =================================================
       RESET
    ================================================= */

    cookingOrder =
        null;

    cookingIndex =
        null;


    sound("bell");


    toast(
        `💰 +${money(earned)}đ · ⭐ ${stars} sao`
    );


    saveGame();

    render();

}


/* =====================================================
   CONSUME INGREDIENTS
   QUAN TRỌNG:
   MỖI NGUYÊN LIỆU CHỈ TRỪ 1 LẦN
===================================================== */

function consumeIngredients(order) {

    const menu =
        MENU[order.menu];


    if (!menu) return;


    const quantity =
        order.quantity || 1;


    menu.ingredients
        .forEach(key => {

            game.stock[key] =
                Math.max(
                    0,
                    (game.stock[key] || 0)
                    - quantity
                );

        });


    /*
       Topping khách chọn thêm
       chỉ trừ nếu topping đó
       KHÔNG nằm trong nguyên liệu
       mặc định của món.
    */

    (order.selected || [])
        .forEach(key => {

            if (
                !menu.ingredients
                    .includes(key)
            ) {

                game.stock[key] =
                    Math.max(
                        0,
                        (game.stock[key] || 0)
                        - quantity
                    );

            }

        });

}


/* =====================================================
   FIX TOPPING
===================================================== */

function fixMissingTopping() {

    closeModal();

    missingToppingMode = true;

    renderCooking();

}


let missingToppingMode =
    false;


/* =====================================================
   BACK SHOP
===================================================== */

function backToShop() {

    cookingOrder =
        null;

    cookingIndex =
        null;

    missingToppingMode =
        false;

    game.selectedTab =
        "shop";

    render();

}


/* =====================================================
   CUSTOMER TALK
===================================================== */

function talkCustomer(index) {

    const responses = [

        {
            text:
                "Dạ chị đợi em một chút nha ❤️",
            add:
                15
        },

        {
            text:
                "Món đang làm rồi ạ!",
            add:
                10
        },

        {
            text:
                "Dạ em cảm ơn chị đã chờ nha!",
            add:
                7
        },

        {
            text:
                "Chờ xíu đi ạ 😅",
            add:
                -8
        }

    ];


    showModal(`

        <div class="modal-title">
            💬 Nói chuyện với khách
        </div>

        ${responses.map(
            (item, i) => `

                <button
                    class="btn"
                    style="
                        width:100%;
                        margin:4px 0;
                        text-align:left;
                    "
                    onclick="
                        answerCustomer(
                            ${index},
                            ${i}
                        )
                    ">

                    ${item.text}

                </button>

            `
        ).join("")}

    `);

}


function answerCustomer(
    index,
    responseIndex
) {

    const responses = [

        {
            text:
                "Dạ chị đợi em một chút nha ❤️",
            add:
                15
        },

        {
            text:
                "Món đang làm rồi ạ!",
            add:
                10
        },

        {
            text:
                "Dạ em cảm ơn chị đã chờ nha!",
            add:
                7
        },

        {
            text:
                "Chờ xíu đi ạ 😅",
            add:
                -8
        }

    ];


    const order =
        game.orders[index];


    order.patience =
        Math.min(
            100,
            order.patience
            + responses[responseIndex].add
        );


    if (
        responses[responseIndex].add < 0
    ) {

        addReview(3);

    }


    closeModal();

    toast(
        responses[responseIndex].text
    );


    saveGame();

    render();

}


/* =====================================================
   REVIEW
===================================================== */

function addReview(stars) {

    const total =
        game.rating *
        game.reviews;


    game.reviews++;


    game.rating =
        (
            total + stars
        ) /
        game.reviews;


    game.rating =
        Math.max(
            1,
            Math.min(
                5,
                game.rating
            )
        );

}


/* =====================================================
   WAREHOUSE
===================================================== */

function renderWarehouse(content) {

    let html = `

        <div class="section-title">
            🧺 Kho nguyên liệu
        </div>

        <div class="card">

            <div class="card-title">
                🛒 Nhập hàng
            </div>

            <div class="card-desc">
                Nguyên liệu tươi sẽ xuống chất lượng
                sau mỗi ngày nếu không có tủ đông.
            </div>

            <button
                class="btn btn-green"
                style="width:100%;margin-top:12px"
                onclick="buyFullStock()">

                🛒 Nhập đủ hàng hôm nay

            </button>

        </div>

    `;


    Object.keys(INGREDIENTS)
        .forEach(key => {

            const item =
                INGREDIENTS[key];

            const count =
                game.stock[key] || 0;


            html += `

                <div class="card">

                    <div class="stock-row">

                        <div class="stock-icon">
                            ${item.emoji}
                        </div>

                        <div class="stock-info">

                            <div class="stock-name">

                                ${item.name}

                            </div>

                            <div class="
                                stock-count
                                ${count <= 2
                                    ? "stock-low"
                                    : ""}
                            ">

                                Còn ${count}

                                ${
                                    item.fresh
                                        ? " · Tươi"
                                        : ""
                                }

                            </div>

                            <div class="stock-count">

                                ${money(item.price)}
                                đ / phần

                            </div>

                        </div>


                        <button
                            class="buy-btn"
                            onclick="
                                buyIngredient(
                                    '${key}'
                                )
                            ">

                            +5

                        </button>

                    </div>

                </div>

            `;

        });


    content.innerHTML =
        html;

}


/* =====================================================
   BUY INGREDIENT
===================================================== */

function buyIngredient(key) {

    const item =
        INGREDIENTS[key];


    const quantity =
        5;


    const cost =
        item.price *
        quantity;


    if (
        game.money < cost
    ) {

        toast(
            "❌ Không đủ tiền!"
        );

        return;

    }


    game.money -=
        cost;


    game.stock[key] =
        (game.stock[key] || 0)
        + quantity;


    toast(
        `🛒 Đã mua ${quantity} ${item.name}`
    );


    saveGame();

    render();

}


/* =====================================================
   BUY FULL STOCK
===================================================== */

function buyFullStock() {

    let total =
        0;


    Object.keys(INGREDIENTS)
        .forEach(key => {

            const item =
                INGREDIENTS[key];


            const target =
                item.fresh
                    ? 10
                    : 20;


            const missing =
                Math.max(
                    0,
                    target -
                    (game.stock[key] || 0)
                );


            total +=
                missing *
                item.price;

        });


    if (
        game.money < total
    ) {

        toast(
            "❌ Không đủ tiền nhập hàng!"
        );

        return;

    }


    Object.keys(INGREDIENTS)
        .forEach(key => {

            const target =
                INGREDIENTS[key].fresh
                    ? 10
                    : 20;


            game.stock[key] =
                Math.max(
                    game.stock[key] || 0,
                    target
                );

        });


    game.money -=
        total;


    toast(
        `🛒 Nhập hàng -${money(total)}đ`
    );


    saveGame();

    render();

}


/* =====================================================
   PRICE
===================================================== */

function renderPrices(content) {

    let html = `

        <div class="section-title">
            🏷️ Giá bán
        </div>

        <div class="card">

            <div class="card-title">
                💡 Mẹo bán hàng
            </div>

            <div class="card-desc">

                Giá càng cao thì lợi nhuận càng nhiều,
                nhưng khách sẽ ít chọn hơn.

            </div>

        </div>

    `;


    Object.keys(MENU)
        .forEach(key => {

            const item =
                MENU[key];


            const price =
                game.prices[key];


            html += `

                <div class="card">

                    <div class="price-row">

                        <div class="price-name">

                            <div class="food-icon">
                                ${item.emoji}
                            </div>

                            <div>

                                <b>
                                    ${item.name}
                                </b>

                                <div class="stock-count">

                                    Giá vốn:
                                    ${money(item.cost)}đ

                                </div>

                            </div>

                        </div>


                        <div class="price-controls">

                            <button
                                onclick="
                                    changePrice(
                                        '${key}',
                                        -1000
                                    )
                                ">

                                −

                            </button>


                            <div class="price-number">

                                ${money(price / 1000)}k

                            </div>


                            <button
                                onclick="
                                    changePrice(
                                        '${key}',
                                        1000
                                    )
                                ">

                                +

                            </button>

                        </div>

                    </div>

                </div>

            `;

        });


    content.innerHTML =
        html;

}


/* =====================================================
   CHANGE PRICE
===================================================== */

function changePrice(
    key,
    amount
) {

    game.prices[key] =
        Math.max(
            MENU[key].cost + 1000,
            game.prices[key] + amount
        );


    saveGame();

    render();

}


/* =====================================================
   PRICE SATISFACTION
===================================================== */

function priceChance(menuKey) {

    const price =
        game.prices[menuKey];


    const base =
        MENU[menuKey].basePrice;


    const ratio =
        price / base;


    if (ratio <= 1) {

        return 1;

    }


    if (ratio <= 1.15) {

        return .9;

    }


    if (ratio <= 1.3) {

        return .75;

    }


    if (ratio <= 1.5) {

        return .55;

    }


    return .35;

}


/* =====================================================
   UPGRADE
===================================================== */

function renderUpgrades(content) {

    let html = `

        <div class="section-title">
            ⬆️ Nâng cấp tiệm
        </div>

    `;


    UPGRADES.forEach(
        (upgrade, index) => {

            const bought =
                game.upgrades
                    .includes(
                        upgrade.id
                    );


            html += `

                <div class="upgrade-card">

                    <div class="upgrade-icon">
                        ${upgrade.emoji}
                    </div>

                    <div class="upgrade-info">

                        <div class="upgrade-name">
                            ${upgrade.name}
                        </div>

                        <div class="upgrade-desc">
                            ${upgrade.desc}
                        </div>

                        <div class="upgrade-price">

                            ${
                                bought
                                    ? "✅ Đã mua"
                                    : money(
                                        upgrade.price
                                      ) + "đ"
                            }

                        </div>

                    </div>


                    ${
                        bought

                        ?

                        `<button
                            class="btn btn-green">

                            ✓

                        </button>`

                        :

                        `<button
                            class="btn btn-primary"
                            onclick="
                                buyUpgrade(
                                    '${upgrade.id}'
                                )
                            ">

                            Mua

                        </button>`
                    }

                </div>

            `;

        }
    );


    content.innerHTML =
        html;

}


/* =====================================================
   BUY UPGRADE
===================================================== */

function buyUpgrade(id) {

    const upgrade =
        UPGRADES.find(
            x =>
                x.id === id
        );


    if (!upgrade) return;


    if (
        game.upgrades
            .includes(id)
    ) {

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
        id
    );


    toast(
        `⬆️ Đã nâng cấp: ${upgrade.name}`
    );


    saveGame();

    render();

}


/* =====================================================
   DECORATE
===================================================== */

function renderDecorate(content) {

    content.innerHTML = `

        <div class="section-title">
            🌸 Trang trí
        </div>


        <div class="card">

            <div class="card-title">
                🌴 Phong cách miền Tây
            </div>

            <div class="card-desc">

                Quán hiện tại đã có cây dừa,
                mái hiên, đèn lồng và bảng hiệu.

            </div>

        </div>


        <div class="card">

            <div style="
                font-size:55px;
                text-align:center;
                padding:20px;
            ">

                🌴 🏮 🥥 🌿 🛖

            </div>

            <button
                class="btn btn-green"
                style="width:100%"
                onclick="
                    toast('🌴 Đã trang trí quán!')
                ">

                ✨ Trang trí

            </button>

        </div>

    `;

}


/* =====================================================
   RATING
===================================================== */

function renderRating(content) {

    content.innerHTML = `

        <div class="section-title">
            ⭐ Đánh giá khách hàng
        </div>


        <div class="card"
             style="text-align:center">

            <div style="
                font-size:42px;
                color:#ffd23f;
            ">

                ${starsHTML()}

            </div>

            <div style="
                font-size:30px;
                font-weight:900;
                margin-top:8px;
            ">

                ${game.rating
                    .toFixed(1)
                    .replace(".", ",")}

            </div>

            <div class="card-desc">

                ${game.reviews}
                lượt đánh giá

            </div>

        </div>


        <div class="card">

            <div class="card-title">
                💡 Chất lượng quán
            </div>

            <div class="card-desc">

                ${
                    game.rating >= 4.5

                        ? "Khách rất yêu thích quán! ❤️"

                        : game.rating >= 4

                        ? "Quán đang hoạt động khá tốt."

                        : "Khách đang không hài lòng. Hãy phục vụ tốt hơn!"
                }

            </div>

        </div>

    `;

}


/* =====================================================
   BOOK
===================================================== */

function renderBook(content) {

    content.innerHTML = `

        <div class="section-title">
            📒 Sổ sách
        </div>


        <div class="card">

            <div class="card-title">
                💰 Tài chính
            </div>

            <div class="task-row">

                Vốn hiện tại

                <span class="task-progress">

                    ${money(game.money)}đ

                </span>

            </div>


            <div class="task-row">

                Món đã bán

                <span class="task-progress">

                    ${game.tasks.sold}

                </span>

            </div>


            <div class="task-row">

                Đơn app

                <span class="task-progress">

                    ${game.tasks.app}

                </span>

            </div>


            <div class="task-row">

                5 sao

                <span class="task-progress">

                    ${game.tasks.fiveStar}

                </span>

            </div>

        </div>


        <div class="card">

            <div class="card-title">
                🏆 Cấp độ quán
            </div>

            <div class="card-desc">

                Cấp ${Math.max(
                    1,
                    Math.floor(
                        game.xp / 100
                    ) + 1
                )}

                · ${game.xp} XP

            </div>

        </div>

    `;

}


/* =====================================================
   STAFF
===================================================== */

function renderStaff(content) {

    let html = `

        <div class="section-title">
            👩🏻‍🍳 Nhân viên
        </div>

    `;


    Object.keys(STAFF)
        .forEach(key => {

            const staff =
                STAFF[key];


            const hired =
                game.staff[key];


            html += `

                <div class="staff-card">

                    <div class="staff-avatar">
                        ${staff.emoji}
                    </div>

                    <div class="staff-info">

                        <div class="staff-name">

                            ${staff.name}

                        </div>

                        <div class="staff-job">

                            ${staff.job}

                        </div>

                    </div>


                    ${
                        hired

                        ?

                        `<button
                            class="btn btn-green">

                            ✓ Đang làm

                        </button>`

                        :

                        `<button
                            class="btn btn-primary"
                            onclick="
                                hireStaff('${key}')
                            ">

                            ${money(
                                staff.price
                            )}đ

                        </button>`
                    }

                </div>

            `;

        });


    content.innerHTML =
        html;

}


/* =====================================================
   HIRE STAFF
===================================================== */

function hireStaff(key) {

    const staff =
        STAFF[key];


    if (
        game.staff[key]
    ) {

        return;

    }


    if (
        game.money <
        staff.price
    ) {

        toast(
            "❌ Không đủ tiền thuê!"
        );

        return;

    }


    game.money -=
        staff.price;


    game.staff[key] =
        true;


    toast(
        `👩🏻‍🍳 Đã thuê ${staff.name}`
    );


    saveGame();

    render();

}


/* =====================================================
   FIX CUSTOMER TOPPING
===================================================== */

function fixCustomerOrder(index) {

    const order =
        game.orders[index];

    if (!order) return;

}


/* =====================================================
   CLOSE EARLY
===================================================== */

function closeEarly() {

    if (game.closed) return;


    if (
        !confirm(
            "Đóng cửa sớm hôm nay?"
        )
    ) {

        return;

    }


    game.closed =
        true;


    toast(
        "🌙 Quán đã đóng cửa!"
    );


    saveGame();

    render();

}


/* =====================================================
   NEXT DAY
===================================================== */

function nextDay() {

    game.day++;

    game.hour =
        7;

    game.minute =
        0;

    game.closed =
        false;

    game.orders =
        [];

    game.servedToday =
        0;

    game.appToday =
        0;

    game.fiveStarToday =
        0;


    /*
       Nếu không có tủ đông:
       thực phẩm tươi hết sau ngày.
    */

    if (
        !game.upgrades
            .includes("freezer")
    ) {

        Object.keys(
            INGREDIENTS
        ).forEach(key => {

            if (
                INGREDIENTS[key].fresh
            ) {

                game.stock[key] =
                    0;

            }

        });

    }


    saveGame();

    render();

}


/* =====================================================
   PAUSE
===================================================== */

function pauseGame() {

    game.paused =
        !game.paused;


    toast(
        game.paused
            ? "⏸ Đã tạm dừng"
            : "▶️ Tiếp tục"
    );

}


/* =====================================================
   SETTINGS
===================================================== */

function openSettings() {

    showModal(`

        <div class="modal-title">
            ⚙️ Cài đặt
        </div>


        <button
            class="btn btn-yellow"
            style="width:100%;margin:5px 0"
            onclick="
                closeModal();
                closeEarly();
            ">

            🌙 Đóng cửa sớm

        </button>


        <button
            class="btn"
            style="width:100%;margin:5px 0"
            onclick="
                muted = !muted;
                toast(
                    muted
                    ? '🔇 Đã tắt âm thanh'
                    : '🔊 Đã bật âm thanh'
                );
            ">

            🔊 Âm thanh

        </button>


        <button
            class="btn btn-blue"
            style="width:100%;margin:5px 0"
            onclick="
                closeModal();
                replayDay();
            ">

            🔄 Chơi lại ngày

        </button>


        <button
            class="btn btn-primary"
            style="width:100%;margin:5px 0"
            onclick="resetGame()">

            🗑️ Xóa game

        </button>


        <button
            class="btn"
            style="width:100%;margin-top:10px"
            onclick="closeModal()">

            Đóng

        </button>

    `);

}


/* =====================================================
   REPLAY DAY
===================================================== */

function replayDay() {

    if (
        !confirm(
            "Chơi lại ngày hiện tại?"
        )
    ) {

        return;

    }


    game.hour =
        7;

    game.minute =
        0;

    game.orders =
        [];

    game.closed =
        false;

    game.servedToday =
        0;

    game.appToday =
        0;

    game.fiveStarToday =
        0;


    saveGame();

    render();

}


/* =====================================================
   RESET
===================================================== */

function resetGame() {

    if (
        !confirm(
            "Xóa toàn bộ tiến trình?"
        )
    ) {

        return;

    }


    localStorage.removeItem(
        "TIEM_BUN_MAM_FINAL"
    );


    location.reload();

}


/* =====================================================
   MODAL
===================================================== */

function showModal(html) {

    document.getElementById(
        "modalContent"
    ).innerHTML =
        html;


    document.getElementById(
        "modal"
    ).classList.remove(
        "hidden"
    );

}


function closeModal() {

    document.getElementById(
        "modal"
    ).classList.add(
        "hidden"
    );

}


/* =====================================================
   CREATE CUSTOMER
===================================================== */

function createCustomer() {

    if (game.closed) return;


    if (game.hour >= 19) return;


    if (
        game.orders.length >= 4
    ) {

        return;

    }


    const possible =
        Object.keys(MENU)
            .filter(key => {

                const menu =
                    MENU[key];


                const enough =
                    menu.ingredients
                        .every(
                            ingredient =>
                                (
                                    game.stock[
                                        ingredient
                                    ] || 0
                                ) > 0
                        );


                return enough;

            })
            .filter(
                key =>
                    Math.random()
                    <
                    priceChance(key)
            );


    if (
        possible.length === 0
    ) {

        return;

    }


    const menu =
        possible[
            Math.floor(
                Math.random()
                * possible.length
            )
        ];


    const quantity =
        MENU[menu].name === "Lẩu mắm"
            ? 1
            : (
                Math.random() < .2
                    ? 2
                    : 1
            );


    const toppings = [];


    if (
        menu === "bunMam"
    ) {

        const toppingPool = [

            "shrimp",
            "squid",
            "pork",
            "fish",
            "eggplant"

        ];


        toppingPool
            .sort(
                () =>
                    Math.random() - .5
            )
            .slice(
                0,
                Math.floor(
                    Math.random() * 3
                )
            )
            .forEach(
                x =>
                    toppings.push(x)
            );

    }


    const order = {

        id:
            Date.now()
            + Math.random(),

        name:
            CUSTOMER_NAMES[
                Math.floor(
                    Math.random()
                    * CUSTOMER_NAMES.length
                )
            ],

        avatar:
            CUSTOMER_AVATARS[
                Math.floor(
                    Math.random()
                    * CUSTOMER_AVATARS.length
                )
            ],

        menu,

        quantity,

        toppings,

        patience:
            100,

        talk:
            CUSTOMER_TALKS[
                Math.floor(
                    Math.random()
                    * CUSTOMER_TALKS.length
                )
            ],

        isApp:
            Math.random() < .15

    };


    game.orders.push(
        order
    );


    sound("bell");

    render();

}


/* =====================================================
   GAME TICK
===================================================== */

function gameTick() {

    if (!game) return;


    if (
        game.paused ||
        game.closed
    ) {

        return;

    }


    /*
       5 phút trong game
       mỗi 3.5 giây
    */

    game.minute += 5;


    if (
        game.minute >= 60
    ) {

        game.minute = 0;

        game.hour++;

    }


    /* -----------------------------------------------
       KHÁCH MẤT KIÊN NHẪN
    ----------------------------------------------- */

    game.orders.forEach(
        order => {

            let decrease =
                3;


            if (
                game.upgrades
                    .includes("fan")
            ) {

                decrease *= .9;

            }


            if (
                game.upgrades
                    .includes("roof")
            ) {

                decrease *= .8;

            }


            order.patience -=
                decrease;

        }
    );


    /* -----------------------------------------------
       KHÁCH BỎ ĐI
    ----------------------------------------------- */

    const leaving =
        game.orders
            .filter(
                order =>
                    order.patience <= 0
            );


    leaving.forEach(
        order => {

            const index =
                game.orders.indexOf(
                    order
                );


            if (index >= 0) {

                game.orders.splice(
                    index,
                    1
                );

            }


            addReview(2);


            toast(
                `${order.name} bỏ đi vì chờ lâu 😭`
            );

        }
    );


    /* -----------------------------------------------
       TẠO KHÁCH MỚI
    ----------------------------------------------- */

    let customerChance =
        .27;


    if (
        game.upgrades
            .includes("sign")
    ) {

        customerChance += .1;

    }


    /*
       Rating thấp -> ít khách
    */

    if (
        game.rating < 4
    ) {

        customerChance *= .65;

    }


    if (
        Math.random()
        < customerChance
    ) {

        createCustomer();

    }


    /* -----------------------------------------------
       ĐÓNG CỬA 19:00
    ----------------------------------------------- */

    if (
        game.hour >= 19
        &&
        game.orders.length === 0
    ) {

        game.closed =
            true;

        toast(
            "🌙 Đã đến giờ đóng cửa!"
        );

    }


    saveGame();

    render();

}


/* =====================================================
   STAFF TAB ACCESS
===================================================== */

function openStaff() {

    game.selectedTab =
        "staff";

    render();

}


/* =====================================================
   INITIAL GAME
===================================================== */

function startGame() {

    if (
        loadGame()
    ) {

        render();

        return;

    }


    showModal(`

        <div class="modal-title">
            🌴 Chào mừng đến Tiệm Bún Mắm!
        </div>

        <p>
            Hãy đặt tên cho quán của bạn.
        </p>

        <input
            id="shopNameInput"
            maxlength="24"
            placeholder="Ví dụ: Bún Mắm Út Thư">

        <button
            class="btn btn-primary"
            style="width:100%"
            onclick="createShop()">

            🍜 Bắt đầu mở quán

        </button>

    `);


    /*
       Render shop trước
    */

    renderContent();

}


/* =====================================================
   CREATE SHOP
===================================================== */

function createShop() {

    const input =
        document.getElementById(
            "shopNameInput"
        );


    const name =
        input.value.trim()
        ||
        "Tiệm Bún Mắm";


    game =
        createNewGame(
            name
        );


    saveGame();

    closeModal();

    render();

    toast(
        `🌴 Chào mừng đến ${name}!`
    );

}


/* =====================================================
   OPEN STAFF FROM SHOP
===================================================== */

document.addEventListener(
    "click",
    event => {

        /*
           Không làm gì thêm.
        */

    }
);


/* =====================================================
   START
===================================================== */

startGame();


/* =====================================================
   CLOCK
===================================================== */

setInterval(
    gameTick,
    3500
);


/* =====================================================
   STAFF BUTTON:
   thêm nút Nhân viên nếu muốn mở riêng
===================================================== */

function showStaffFromMenu() {

    renderStaff(
        document.getElementById(
            "content"
        )
    );

}


/* =====================================================
   KEYBOARD / MOBILE
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);