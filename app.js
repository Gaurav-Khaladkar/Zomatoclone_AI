const restaurants = [
  {
    id: "r1",
    name: "Bombay Borough Kitchen",
    cuisine: ["North Indian", "Biryani"],
    category: "Biryani",
    rating: 4.6,
    deliveryTime: 28,
    distance: 2.4,
    priceForTwo: 550,
    promoted: true,
    pureVeg: false,
    offer: "50% off up to Rs. 120",
    area: "Andheri West",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=80",
    menu: [
      { id: "m1", name: "Lucknowi Chicken Biryani", price: 289, veg: false, section: "Recommended", rating: 4.8, image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=500&q=80" },
      { id: "m2", name: "Paneer Dum Biryani", price: 239, veg: true, section: "Recommended", rating: 4.5, image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=500&q=80" },
      { id: "m3", name: "Galouti Kebab", price: 245, veg: false, section: "Starters", rating: 4.4, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=80" }
    ]
  },
  {
    id: "r2",
    name: "Sorriso Pizzeria",
    cuisine: ["Pizza", "Italian"],
    category: "Pizza",
    rating: 4.4,
    deliveryTime: 34,
    distance: 4.1,
    priceForTwo: 700,
    promoted: false,
    pureVeg: false,
    offer: "Free garlic bread",
    area: "Bandra",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
    menu: [
      { id: "m4", name: "Margherita Romano", price: 299, veg: true, section: "Recommended", rating: 4.6, image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=500&q=80" },
      { id: "m5", name: "Smoked Chicken Pizza", price: 399, veg: false, section: "Mains", rating: 4.5, image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=500&q=80" },
      { id: "m6", name: "Tiramisu Jar", price: 189, veg: true, section: "Desserts", rating: 4.7, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=500&q=80" }
    ]
  },
  {
    id: "r3",
    name: "Green Leaf Thali",
    cuisine: ["Gujarati", "Thali"],
    category: "Thali",
    rating: 4.8,
    deliveryTime: 22,
    distance: 1.6,
    priceForTwo: 360,
    promoted: true,
    pureVeg: true,
    offer: "Unlimited phulka combo",
    area: "Vile Parle",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
    menu: [
      { id: "m7", name: "Premium Gujarati Thali", price: 249, veg: true, section: "Recommended", rating: 4.9, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80" },
      { id: "m8", name: "Dal Dhokli Bowl", price: 159, veg: true, section: "Mains", rating: 4.4, image: "https://images.unsplash.com/photo-1617692855027-33b14f061079?auto=format&fit=crop&w=500&q=80" },
      { id: "m9", name: "Mango Shrikhand", price: 119, veg: true, section: "Desserts", rating: 4.6, image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=500&q=80" }
    ]
  },
  {
    id: "r4",
    name: "Dragon Wok House",
    cuisine: ["Chinese", "Asian"],
    category: "Chinese",
    rating: 4.2,
    deliveryTime: 31,
    distance: 3.2,
    priceForTwo: 480,
    promoted: false,
    pureVeg: false,
    offer: "Rs. 80 off on bowls",
    area: "Powai",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80",
    menu: [
      { id: "m10", name: "Chilli Garlic Noodles", price: 209, veg: true, section: "Recommended", rating: 4.4, image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80" },
      { id: "m11", name: "Kung Pao Chicken", price: 289, veg: false, section: "Mains", rating: 4.2, image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=500&q=80" },
      { id: "m12", name: "Crystal Dimsum Basket", price: 249, veg: true, section: "Starters", rating: 4.3, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80" }
    ]
  },
  {
    id: "r5",
    name: "Madras Filter Cafe",
    cuisine: ["South Indian", "Breakfast"],
    category: "South Indian",
    rating: 4.7,
    deliveryTime: 19,
    distance: 1.1,
    priceForTwo: 280,
    promoted: true,
    pureVeg: true,
    offer: "Buy 1 filter coffee get 1",
    area: "Ghatkopar",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=80",
    menu: [
      { id: "m13", name: "Ghee Masala Dosa", price: 149, veg: true, section: "Recommended", rating: 4.8, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=500&q=80" },
      { id: "m14", name: "Idli Vada Combo", price: 129, veg: true, section: "Breakfast", rating: 4.5, image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80" },
      { id: "m15", name: "Podi Uttapam", price: 159, veg: true, section: "Mains", rating: 4.4, image: "https://images.unsplash.com/photo-1589778655375-3e622caedab9?auto=format&fit=crop&w=500&q=80" }
    ]
  },
  {
    id: "r6",
    name: "Burger Bay",
    cuisine: ["Burgers", "Fast Food"],
    category: "Burgers",
    rating: 4.1,
    deliveryTime: 25,
    distance: 2.9,
    priceForTwo: 420,
    promoted: false,
    pureVeg: false,
    offer: "Combo meals from Rs. 199",
    area: "Lower Parel",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80",
    menu: [
      { id: "m16", name: "Classic Cheese Burger", price: 199, veg: false, section: "Recommended", rating: 4.3, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80" },
      { id: "m17", name: "Crispy Veggie Burger", price: 169, veg: true, section: "Mains", rating: 4.1, image: "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=500&q=80" },
      { id: "m18", name: "Peri Peri Fries", price: 129, veg: true, section: "Sides", rating: 4.2, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80" }
    ]
  }
];

const state = {
  query: "",
  location: "Mumbai",
  category: "All",
  quickFilter: "All",
  sort: "recommended",
  maxTime: 45,
  pureVeg: false,
  activeTab: initialTab(),
  activeMenuSection: "Recommended",
  selectedRestaurantId: restaurants[0].id,
  cart: JSON.parse(localStorage.getItem("zestora_cart") || "[]"),
  favorites: JSON.parse(localStorage.getItem("zestora_favorites") || "[]"),
  orders: JSON.parse(localStorage.getItem("zestora_orders") || "[]"),
  user: JSON.parse(localStorage.getItem("zestora_user") || "null"),
  address: "Home - 221B Carter Road",
  cartDrawerOpen: false,
  restaurantDrawerOpen: false,
  authOpen: false,
  addressOpen: false
};

const categories = ["All", ...new Set(restaurants.map((restaurant) => restaurant.category))];
const quickFilters = [
  { id: "All", label: "All" },
  { id: "Offers", label: "Offers" },
  { id: "Fast", label: "Under 30 min" },
  { id: "Rating", label: "Rating 4.5+" },
  { id: "Favorites", label: "Favorites" }
];

const rupee = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
});

const app = document.querySelector("#app");

function initialTab() {
  const route = new URL(window.location.href);
  const tab = route.searchParams.get("tab") || route.hash.replace("#", "");
  return ["delivery", "tracking", "partner"].includes(tab) ? tab : "delivery";
}

function saveState() {
  localStorage.setItem("zestora_cart", JSON.stringify(state.cart));
  localStorage.setItem("zestora_favorites", JSON.stringify(state.favorites));
  localStorage.setItem("zestora_orders", JSON.stringify(state.orders));
  localStorage.setItem("zestora_user", JSON.stringify(state.user));
}

function formatPrice(value) {
  return rupee.format(value).replace("₹", "Rs. ");
}

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function cartItemCount() {
  return state.cart.reduce((sum, item) => sum + item.qty, 0);
}

function cartSubtotal() {
  return state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function cartTotals() {
  const subtotal = cartSubtotal();
  const delivery = subtotal > 499 || subtotal === 0 ? 0 : 39;
  const platform = subtotal ? 7 : 0;
  const tax = Math.round(subtotal * 0.05);
  return { subtotal, delivery, platform, tax, total: subtotal + delivery + platform + tax };
}

function selectedRestaurant() {
  return restaurants.find((restaurant) => restaurant.id === state.selectedRestaurantId) || restaurants[0];
}

function filteredRestaurants() {
  const query = state.query.trim().toLowerCase();
  const list = restaurants.filter((restaurant) => {
    const matchesQuery = !query || [
      restaurant.name,
      restaurant.area,
      restaurant.category,
      ...restaurant.cuisine,
      ...restaurant.menu.map((item) => item.name)
    ].join(" ").toLowerCase().includes(query);
    const matchesCategory = state.category === "All" || restaurant.category === state.category;
    const matchesVeg = !state.pureVeg || restaurant.pureVeg;
    const matchesTime = restaurant.deliveryTime <= state.maxTime;
    const matchesQuick = state.quickFilter === "All"
      || (state.quickFilter === "Offers" && restaurant.offer)
      || (state.quickFilter === "Fast" && restaurant.deliveryTime <= 30)
      || (state.quickFilter === "Rating" && restaurant.rating >= 4.5)
      || (state.quickFilter === "Favorites" && state.favorites.includes(restaurant.id));
    return matchesQuery && matchesCategory && matchesVeg && matchesTime && matchesQuick;
  });

  return list.sort((a, b) => {
    if (state.sort === "rating") return b.rating - a.rating;
    if (state.sort === "time") return a.deliveryTime - b.deliveryTime;
    if (state.sort === "costLow") return a.priceForTwo - b.priceForTwo;
    if (state.sort === "costHigh") return b.priceForTwo - a.priceForTwo;
    return Number(b.promoted) - Number(a.promoted) || b.rating - a.rating;
  });
}

function icon(name, size = 18) {
  return `<i data-lucide="${name}" style="width:${size}px;height:${size}px"></i>`;
}

function showToast(message) {
  const toast = document.querySelector(".toast");
  if (!toast) return;
  toast.innerHTML = `${icon("sparkles", 17)}<span>${message}</span>`;
  toast.classList.add("is-open");
  refreshIcons();
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-open"), 2300);
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function render() {
  app.innerHTML = `
    <div class="app-shell">
      ${renderTopbar()}
      <main class="layout">
        ${renderSidebar()}
        <section class="content" aria-label="Food ordering">
          ${renderMarketStrip()}
          ${renderToolbar()}
          ${renderTabs()}
          ${state.activeTab === "delivery" ? renderRestaurants() : ""}
          ${state.activeTab === "tracking" ? renderTracking() : ""}
          ${state.activeTab === "partner" ? renderAdminPanel() : ""}
        </section>
        ${renderCartPanel(false)}
      </main>
      <button class="mobile-cart-button" data-action="open-cart">${icon("shopping-bag")} ${cartItemCount()} items</button>
      ${renderRestaurantDrawer()}
      ${renderCartDrawer()}
      ${renderAuthModal()}
      ${renderAddressModal()}
      <div class="toast" role="status" aria-live="polite"></div>
    </div>
  `;
  bindEvents();
  refreshIcons();
}

function renderTopbar() {
  const userLabel = state.user ? esc(state.user.name.split(" ")[0]) : "Login";
  return `
    <header class="topbar">
      <div class="topbar__inner">
        <div class="brand" aria-label="Zestora">
          <span class="brand__mark">${icon("utensils", 19)}</span>
          <span>Zestora</span>
        </div>
        <div class="search-row" role="search">
          <label class="field">
            ${icon("map-pin", 18)}
            <input data-field="location" value="${esc(state.location)}" aria-label="Delivery location" />
          </label>
          <label class="field">
            ${icon("search", 18)}
            <input data-field="query" value="${esc(state.query)}" placeholder="Search restaurants or dishes" aria-label="Search restaurants or dishes" />
          </label>
        </div>
        <nav class="nav-actions" aria-label="Account and saved actions">
          <button class="icon-button" data-action="toggle-favorites" aria-label="Show favorites" title="Favorites">${icon("heart")}</button>
          <button class="text-button" data-action="open-address">${icon("home", 17)} Address</button>
          <button class="primary-button" data-action="open-auth">${icon("user", 17)} ${userLabel}</button>
        </nav>
      </div>
    </header>
  `;
}

function renderSidebar() {
  const categoryButtons = categories.map((category) => {
    const count = category === "All" ? restaurants.length : restaurants.filter((restaurant) => restaurant.category === category).length;
    return `
      <button class="category-button ${state.category === category ? "is-active" : ""}" data-category="${category}">
        <span>${icon(categoryIcon(category), 17)} ${category}</span>
        <small>${count}</small>
      </button>
    `;
  }).join("");

  return `
    <aside class="sidebar" aria-label="Filters">
      <section class="panel-section">
        <h2 class="panel-title">Cuisines</h2>
        <div class="category-list">${categoryButtons}</div>
      </section>
      <section class="panel-section">
        <h2 class="panel-title">Preferences</h2>
        <label class="toggle">
          <span>${icon("leaf", 17)} Pure veg</span>
          <input type="checkbox" data-field="pureVeg" ${state.pureVeg ? "checked" : ""} />
        </label>
      </section>
      <section class="panel-section">
        <h2 class="panel-title">Delivery Time</h2>
        <label class="range-label" for="maxTime">
          <span>Max minutes</span>
          <span>${state.maxTime}</span>
        </label>
        <input id="maxTime" class="range" type="range" min="15" max="60" step="5" value="${state.maxTime}" data-field="maxTime" />
      </section>
      <section class="panel-section">
        <h2 class="panel-title">Service</h2>
        <div class="filter-list">
          <button class="filter-button ${state.activeTab === "delivery" ? "is-active" : ""}" data-tab="delivery"><span>${icon("bike", 17)} Delivery</span><small>Live</small></button>
          <button class="filter-button ${state.activeTab === "tracking" ? "is-active" : ""}" data-tab="tracking"><span>${icon("route", 17)} Orders</span><small>${state.orders.length}</small></button>
          <button class="filter-button ${state.activeTab === "partner" ? "is-active" : ""}" data-tab="partner"><span>${icon("store", 17)} Partner</span><small>Ops</small></button>
        </div>
      </section>
    </aside>
  `;
}

function categoryIcon(category) {
  return {
    All: "layout-grid",
    Biryani: "flame",
    Pizza: "circle-dot",
    Thali: "plate",
    Chinese: "chef-hat",
    "South Indian": "coffee",
    Burgers: "sandwich"
  }[category] || "utensils";
}

function renderMarketStrip() {
  const topRestaurant = restaurants.slice().sort((a, b) => b.rating - a.rating)[0];
  return `
    <section class="market-strip" aria-label="Market overview">
      <div class="market-copy">
        <h1>Order food from Mumbai's loved kitchens</h1>
        <p>Explore curated restaurants, real-time cart pricing, saved favorites, checkout, and delivery tracking in one responsive food ordering experience.</p>
      </div>
      <div class="market-metrics">
        <div class="metric"><strong>${restaurants.length}</strong><span>Restaurants</span></div>
        <div class="metric"><strong>${topRestaurant.rating}</strong><span>Top Rating</span></div>
        <div class="metric"><strong>${Math.min(...restaurants.map((r) => r.deliveryTime))}m</strong><span>Fastest</span></div>
        <div class="metric"><strong>${state.orders.length}</strong><span>Orders</span></div>
      </div>
    </section>
  `;
}

function renderToolbar() {
  const chips = quickFilters.map((filter) => `
    <button class="chip ${state.quickFilter === filter.id ? "is-active" : ""}" data-quick-filter="${filter.id}">
      ${filter.label}
    </button>
  `).join("");

  return `
    <section class="toolbar" aria-label="Restaurant tools">
      <div class="chips">${chips}</div>
      <label class="sort-row">
        ${icon("sliders-horizontal", 17)}
        <span>Sort</span>
        <select data-field="sort" aria-label="Sort restaurants">
          <option value="recommended" ${state.sort === "recommended" ? "selected" : ""}>Recommended</option>
          <option value="rating" ${state.sort === "rating" ? "selected" : ""}>Rating</option>
          <option value="time" ${state.sort === "time" ? "selected" : ""}>Fastest</option>
          <option value="costLow" ${state.sort === "costLow" ? "selected" : ""}>Cost: low to high</option>
          <option value="costHigh" ${state.sort === "costHigh" ? "selected" : ""}>Cost: high to low</option>
        </select>
      </label>
    </section>
  `;
}

function renderTabs() {
  const tabs = [
    { id: "delivery", label: "Delivery", icon: "bike" },
    { id: "tracking", label: "Tracking", icon: "route" },
    { id: "partner", label: "Restaurant Ops", icon: "store" }
  ];

  return `
    <div class="tabs" role="tablist" aria-label="Views">
      ${tabs.map((tab) => `
        <button class="tab-button ${state.activeTab === tab.id ? "is-active" : ""}" data-tab="${tab.id}" role="tab">
          ${icon(tab.icon, 17)} ${tab.label}
        </button>
      `).join("")}
    </div>
  `;
}

function renderRestaurants() {
  const list = filteredRestaurants();
  if (!list.length) {
    return `
      <section class="empty-state">
        <div>
          ${icon("search-x", 42)}
          <h2>No matching restaurants</h2>
          <p>Try changing the search, category, veg filter, or delivery time.</p>
        </div>
      </section>
    `;
  }

  return `
    <section class="restaurant-grid" aria-label="Restaurants">
      ${list.map(renderRestaurantCard).join("")}
    </section>
  `;
}

function renderRestaurantCard(restaurant) {
  const isFavorite = state.favorites.includes(restaurant.id);
  return `
    <article class="restaurant-card" data-open-restaurant="${restaurant.id}">
      <div class="restaurant-image">
        <img src="${restaurant.image}" alt="${restaurant.name} food spread" loading="lazy" />
        <div class="badge-row">
          <span class="badge">${restaurant.promoted ? "Promoted" : restaurant.area}</span>
          <span class="rating">${icon("star", 14)} ${restaurant.rating}</span>
        </div>
      </div>
      <div class="restaurant-body">
        <div class="restaurant-head">
          <h3>${restaurant.name}</h3>
          <button class="favorite-button ${isFavorite ? "is-active" : ""}" data-favorite="${restaurant.id}" aria-label="Toggle favorite" title="Favorite">
            ${icon("heart", 17)}
          </button>
        </div>
        <div class="meta-line">
          <span>${restaurant.cuisine.join(", ")}</span>
          <span class="dot"></span>
          <span>${formatPrice(restaurant.priceForTwo)} for two</span>
        </div>
        <div class="meta-line">
          ${icon("timer", 16)} <span>${restaurant.deliveryTime} min</span>
          <span class="dot"></span>
          <span>${restaurant.distance} km</span>
          <span class="dot"></span>
          <span>${restaurant.pureVeg ? "Pure veg" : "Veg and non-veg"}</span>
        </div>
        <div class="offer-line">${icon("badge-percent", 16)} ${restaurant.offer}</div>
        <div class="card-actions">
          <span class="pill">${icon("shield-check", 15)} Hygienic</span>
          <button class="ghost-button" data-open-restaurant="${restaurant.id}">${icon("book-open", 16)} Menu</button>
        </div>
      </div>
    </article>
  `;
}

function renderRestaurantDrawer() {
  const restaurant = selectedRestaurant();
  const sections = ["Recommended", "Starters", "Breakfast", "Mains", "Sides", "Desserts"].filter((section) =>
    restaurant.menu.some((item) => item.section === section)
  );
  if (!sections.includes(state.activeMenuSection)) state.activeMenuSection = sections[0] || "Recommended";
  const menuItems = restaurant.menu.filter((item) => item.section === state.activeMenuSection);

  return `
    <div class="drawer-backdrop ${state.restaurantDrawerOpen ? "is-open" : ""}" data-close-layer="restaurant">
      <aside class="drawer" aria-label="${restaurant.name} menu">
        <div class="drawer-hero">
          <img src="${restaurant.image}" alt="${restaurant.name}" />
          <button class="close-button" data-action="close-restaurant" aria-label="Close restaurant menu">${icon("x")}</button>
          <div class="drawer-hero-content">
            <h2>${restaurant.name}</h2>
            <div class="meta-line">
              <span class="rating">${icon("star", 14)} ${restaurant.rating}</span>
              <span>${restaurant.deliveryTime} min</span>
              <span>${restaurant.area}</span>
            </div>
            <div class="offer-line">${icon("badge-percent", 16)} ${restaurant.offer}</div>
          </div>
        </div>
        <div class="drawer-body">
          <div class="segment-control" role="tablist" aria-label="Menu sections">
            ${sections.map((section) => `
              <button class="segment-button ${state.activeMenuSection === section ? "is-active" : ""}" data-menu-section="${section}">${section}</button>
            `).join("")}
          </div>
          <div class="menu-list">
            ${menuItems.map((item) => renderMenuItem(restaurant, item)).join("")}
          </div>
        </div>
      </aside>
    </div>
  `;
}

function renderMenuItem(restaurant, item) {
  const cartItem = state.cart.find((entry) => entry.id === item.id);
  return `
    <article class="menu-item">
      <img src="${item.image}" alt="${item.name}" loading="lazy" />
      <div>
        <div class="menu-meta">
          <span class="veg-dot ${item.veg ? "" : "nonveg"}" aria-label="${item.veg ? "Vegetarian" : "Non vegetarian"}"></span>
          <span>${icon("star", 14)} ${item.rating}</span>
        </div>
        <h4>${item.name}</h4>
        <div class="price-line">${formatPrice(item.price)}</div>
        <small class="menu-meta">${restaurant.name}</small>
      </div>
      ${cartItem ? renderQtyControl(item.id, cartItem.qty) : `<button class="add-button" data-add-item="${restaurant.id}:${item.id}">Add</button>`}
    </article>
  `;
}

function renderCartPanel(isDrawer) {
  const totals = cartTotals();
  return `
    <aside class="cart-panel" aria-label="Cart">
      <div class="cart-header">
        <div>
          <h2>${isDrawer ? "Cart" : "Your cart"}</h2>
          <p>${esc(state.address)}</p>
        </div>
        <span class="cart-count">${cartItemCount()}</span>
      </div>
      ${state.cart.length ? `
        <div class="cart-items">${state.cart.map(renderCartItem).join("")}</div>
        <div class="bill">
          <div class="bill-row"><span>Item total</span><strong>${formatPrice(totals.subtotal)}</strong></div>
          <div class="bill-row"><span>Delivery</span><strong>${totals.delivery ? formatPrice(totals.delivery) : "Free"}</strong></div>
          <div class="bill-row"><span>Platform fee</span><strong>${formatPrice(totals.platform)}</strong></div>
          <div class="bill-row"><span>Taxes</span><strong>${formatPrice(totals.tax)}</strong></div>
          <div class="bill-row total"><span>To pay</span><strong>${formatPrice(totals.total)}</strong></div>
        </div>
        <div class="checkout-box">
          <select class="address-select" data-field="address" aria-label="Delivery address">
            <option ${state.address.includes("Home") ? "selected" : ""}>Home - 221B Carter Road</option>
            <option ${state.address.includes("Work") ? "selected" : ""}>Work - Mindspace Business Park</option>
            <option ${state.address.includes("Hotel") ? "selected" : ""}>Hotel - Marine Drive</option>
          </select>
          <button class="primary-button" data-action="checkout">${icon("credit-card", 17)} Place order</button>
        </div>
      ` : `
        <div class="cart-empty">
          ${icon("shopping-bag", 48)}
          <h3>Your cart is empty</h3>
          <p>Add dishes from any restaurant to begin checkout.</p>
        </div>
      `}
    </aside>
  `;
}

function renderCartItem(item) {
  return `
    <div class="cart-item">
      <div>
        <h4>${item.name}</h4>
        <small>${item.restaurantName}</small>
        <strong>${formatPrice(item.price * item.qty)}</strong>
      </div>
      <div>
        ${renderQtyControl(item.id, item.qty)}
        <button class="remove-button" data-remove-item="${item.id}">${icon("trash-2", 15)} Remove</button>
      </div>
    </div>
  `;
}

function renderQtyControl(itemId, qty) {
  return `
    <div class="qty-control" aria-label="Quantity">
      <button class="qty-button" data-dec-item="${itemId}" aria-label="Decrease quantity">-</button>
      <span>${qty}</span>
      <button class="qty-button" data-inc-item="${itemId}" aria-label="Increase quantity">+</button>
    </div>
  `;
}

function renderCartDrawer() {
  return `
    <div class="drawer-backdrop ${state.cartDrawerOpen ? "is-open" : ""}" data-close-layer="cart">
      <aside class="drawer" aria-label="Cart drawer">
        <div class="modal-header">
          <h2>Checkout</h2>
          <button class="icon-button" data-action="close-cart" aria-label="Close cart">${icon("x")}</button>
        </div>
        ${renderCartPanel(true)}
      </aside>
    </div>
  `;
}

function renderTracking() {
  const latest = state.orders[0];
  if (!latest) {
    return `
      <section class="tracking-panel">
        <h2>Order Tracking</h2>
        <div class="empty-state">
          <div>
            ${icon("route", 42)}
            <h3>No active orders</h3>
            <p>Place an order from the delivery tab to see live preparation and rider status.</p>
          </div>
        </div>
      </section>
    `;
  }

  const steps = ["Accepted", "Preparing", "Picked up", "Arriving"];
  const progress = Math.min(100, latest.progress);
  return `
    <section class="tracking-panel">
      <h2>Order #${latest.id}</h2>
      <p class="meta-line">${icon("map-pin", 17)} ${esc(latest.address)} <span class="dot"></span> ETA ${latest.eta} min</p>
      <div class="progress-track"><div class="progress-fill" style="--progress:${progress}%"></div></div>
      <div class="tracking-steps">
        ${steps.map((step, index) => `<div class="tracking-step ${progress >= (index + 1) * 25 ? "is-done" : ""}">${step}</div>`).join("")}
      </div>
      <div class="activity-list">
        ${latest.items.map((item) => `
          <div class="activity-item">
            <span class="activity-dot"></span>
            <div><strong>${item.name}</strong><br /><small>${item.restaurantName}</small></div>
            <strong>${item.qty}x</strong>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderAdminPanel() {
  const revenue = state.orders.reduce((sum, order) => sum + order.total, 0);
  const liveRestaurants = restaurants.filter((restaurant) => restaurant.promoted).length;
  const avgRating = (restaurants.reduce((sum, restaurant) => sum + restaurant.rating, 0) / restaurants.length).toFixed(1);
  const popular = restaurants.slice().sort((a, b) => b.rating - a.rating).slice(0, 4);
  return `
    <section class="admin-panel">
      <h2>Restaurant Operations</h2>
      <div class="stat-grid">
        <div class="stat"><strong>${restaurants.length}</strong><span>Listings</span></div>
        <div class="stat"><strong>${liveRestaurants}</strong><span>Promoted</span></div>
        <div class="stat"><strong>${avgRating}</strong><span>Avg Rating</span></div>
        <div class="stat"><strong>${formatPrice(revenue)}</strong><span>GMV</span></div>
      </div>
      <div class="activity-list">
        ${popular.map((restaurant) => `
          <div class="activity-item">
            <span class="activity-dot"></span>
            <div>
              <strong>${restaurant.name}</strong><br />
              <small>${restaurant.cuisine.join(", ")} · ${restaurant.deliveryTime} min · ${formatPrice(restaurant.priceForTwo)} for two</small>
            </div>
            <span class="rating">${icon("star", 14)} ${restaurant.rating}</span>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderAuthModal() {
  return `
    <div class="modal-backdrop ${state.authOpen ? "is-open" : ""}" data-close-layer="auth">
      <section class="modal" aria-label="Login">
        <div class="modal-header">
          <h2>${state.user ? "Profile" : "Login"}</h2>
          <button class="icon-button" data-action="close-auth" aria-label="Close login">${icon("x")}</button>
        </div>
        <form class="modal-body" data-form="auth">
          <label class="form-field">
            Name
            <input name="name" value="${esc(state.user?.name || "")}" required placeholder="Your name" />
          </label>
          <label class="form-field">
            Mobile
            <input name="mobile" value="${esc(state.user?.mobile || "")}" required placeholder="+91 98765 43210" />
          </label>
          <button class="primary-button" type="submit">${icon("log-in", 17)} Continue</button>
        </form>
      </section>
    </div>
  `;
}

function renderAddressModal() {
  return `
    <div class="modal-backdrop ${state.addressOpen ? "is-open" : ""}" data-close-layer="address">
      <section class="modal" aria-label="Address">
        <div class="modal-header">
          <h2>Delivery Address</h2>
          <button class="icon-button" data-action="close-address" aria-label="Close address">${icon("x")}</button>
        </div>
        <form class="modal-body" data-form="address">
          <label class="form-field">
            Location
            <input name="location" value="${esc(state.location)}" required />
          </label>
          <label class="form-field">
            Full address
            <textarea name="address" required>${esc(state.address)}</textarea>
          </label>
          <button class="primary-button" type="submit">${icon("save", 17)} Save address</button>
        </form>
      </section>
    </div>
  `;
}

function bindEvents() {
  document.querySelectorAll("[data-field]").forEach((field) => {
    const name = field.dataset.field;
    const eventName = "change";
    field.addEventListener(eventName, () => {
      if (field.type === "checkbox") state[name] = field.checked;
      else if (field.type === "range") state[name] = Number(field.value);
      else state[name] = field.value;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.category;
      render();
    });
  });

  document.querySelectorAll("[data-quick-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.quickFilter = button.dataset.quickFilter;
      render();
    });
  });

  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeTab = button.dataset.tab;
      render();
    });
  });

  document.querySelectorAll("[data-open-restaurant]").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (event.target.closest("[data-favorite]")) return;
      state.selectedRestaurantId = element.dataset.openRestaurant;
      state.restaurantDrawerOpen = true;
      state.activeMenuSection = "Recommended";
      render();
    });
  });

  document.querySelectorAll("[data-favorite]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleFavorite(button.dataset.favorite);
    });
  });

  document.querySelectorAll("[data-menu-section]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeMenuSection = button.dataset.menuSection;
      render();
    });
  });

  document.querySelectorAll("[data-add-item]").forEach((button) => {
    button.addEventListener("click", () => {
      const [restaurantId, itemId] = button.dataset.addItem.split(":");
      addItem(restaurantId, itemId);
    });
  });

  document.querySelectorAll("[data-inc-item]").forEach((button) => {
    button.addEventListener("click", () => changeQty(button.dataset.incItem, 1));
  });

  document.querySelectorAll("[data-dec-item]").forEach((button) => {
    button.addEventListener("click", () => changeQty(button.dataset.decItem, -1));
  });

  document.querySelectorAll("[data-remove-item]").forEach((button) => {
    button.addEventListener("click", () => removeItem(button.dataset.removeItem));
  });

  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => handleAction(button.dataset.action));
  });

  document.querySelectorAll("[data-close-layer]").forEach((layer) => {
    layer.addEventListener("click", (event) => {
      if (event.target !== layer) return;
      closeLayer(layer.dataset.closeLayer);
    });
  });

  document.querySelectorAll("[data-form]").forEach((form) => {
    form.addEventListener("submit", handleForm);
  });
}

function handleAction(action) {
  if (action === "open-cart") state.cartDrawerOpen = true;
  if (action === "close-cart") state.cartDrawerOpen = false;
  if (action === "close-restaurant") state.restaurantDrawerOpen = false;
  if (action === "open-auth") state.authOpen = true;
  if (action === "close-auth") state.authOpen = false;
  if (action === "open-address") state.addressOpen = true;
  if (action === "close-address") state.addressOpen = false;
  if (action === "toggle-favorites") {
    state.quickFilter = state.quickFilter === "Favorites" ? "All" : "Favorites";
    state.activeTab = "delivery";
  }
  if (action === "checkout") checkout();
  render();
}

function closeLayer(layer) {
  if (layer === "cart") state.cartDrawerOpen = false;
  if (layer === "restaurant") state.restaurantDrawerOpen = false;
  if (layer === "auth") state.authOpen = false;
  if (layer === "address") state.addressOpen = false;
  render();
}

function toggleFavorite(restaurantId) {
  const exists = state.favorites.includes(restaurantId);
  state.favorites = exists ? state.favorites.filter((id) => id !== restaurantId) : [...state.favorites, restaurantId];
  saveState();
  render();
  showToast(exists ? "Removed from favorites" : "Saved to favorites");
}

function addItem(restaurantId, itemId) {
  const restaurant = restaurants.find((entry) => entry.id === restaurantId);
  const item = restaurant?.menu.find((entry) => entry.id === itemId);
  if (!restaurant || !item) return;
  const existing = state.cart.find((entry) => entry.id === itemId);
  if (existing) existing.qty += 1;
  else state.cart.push({
    id: item.id,
    restaurantId,
    restaurantName: restaurant.name,
    name: item.name,
    price: item.price,
    veg: item.veg,
    qty: 1
  });
  saveState();
  render();
  showToast(`${item.name} added`);
}

function changeQty(itemId, delta) {
  const item = state.cart.find((entry) => entry.id === itemId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) state.cart = state.cart.filter((entry) => entry.id !== itemId);
  saveState();
  render();
}

function removeItem(itemId) {
  state.cart = state.cart.filter((entry) => entry.id !== itemId);
  saveState();
  render();
}

function checkout() {
  if (!state.cart.length) return;
  const totals = cartTotals();
  const order = {
    id: Math.floor(100000 + Math.random() * 900000),
    items: state.cart,
    total: totals.total,
    address: state.address,
    eta: Math.max(18, Math.min(...state.cart.map((item) => {
      const restaurant = restaurants.find((entry) => entry.id === item.restaurantId);
      return restaurant?.deliveryTime || 30;
    }))),
    progress: 25,
    createdAt: new Date().toISOString()
  };
  state.orders = [order, ...state.orders].slice(0, 6);
  state.cart = [];
  state.activeTab = "tracking";
  state.cartDrawerOpen = false;
  state.restaurantDrawerOpen = false;
  saveState();
  render();
  showToast("Order placed");
}

function handleForm(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  if (form.dataset.form === "auth") {
    state.user = {
      name: data.get("name").toString().trim(),
      mobile: data.get("mobile").toString().trim()
    };
    state.authOpen = false;
    saveState();
    render();
    showToast("Profile saved");
  }
  if (form.dataset.form === "address") {
    state.location = data.get("location").toString().trim();
    state.address = data.get("address").toString().trim();
    state.addressOpen = false;
    saveState();
    render();
    showToast("Address updated");
  }
}

window.setInterval(() => {
  if (!state.orders.length) return;
  const latest = state.orders[0];
  if (latest.progress >= 100) return;
  latest.progress += 25;
  saveState();
  if (state.activeTab === "tracking") render();
}, 9000);

render();
