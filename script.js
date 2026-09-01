

/* ==========================================================
   The Store - Shared Logic
   ========================================================== */

const PRODUCTS = [
  // Jackets
  {
    id: "p01",
    name: "Classic Denim Jacket",
    image: "shopping.webp",
    category: "jackets",
    price: 850,
    ageGroups: ["teens", "youth", "adults"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black"]
  },
  {
    id: "p02",
    name: "Black Bomber Jacket",
    image: "images.jpg",
    category: "jackets",
    price: 1100,
    ageGroups: ["youth", "adults"],
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Olive"]
  },
  {
    id: "p03",
    name: "Kids Fleece Jacket",
    image: "images (1).jpg",
    category: "jackets",
    price: 480,
    ageGroups: ["kids"],
    sizes: ["S", "M"],
    colors: ["Red", "Grey"]
  },

  // T-Shirts
  {
    id: "p04",
    name: "White Basic Tee",
    image: "download.jpg",
    category: "tshirts",
    price: 220,
    ageGroups: ["kids", "teens", "youth", "adults"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Grey"]
  },
  {
    id: "p05",
    name: "Graphic Print Tee",
    image: "images (2).jpg",
    category: "tshirts",
    price: 260,
    ageGroups: ["teens", "youth"],
    sizes: ["S", "M", "L"],
    colors: ["Black", "White"]
  },
  {
    id: "p06",
    name: "Oversized Tee",
    image: "images (3).jpg",
    category: "tshirts",
    price: 290,
    ageGroups: ["youth", "adults"],
    sizes: ["M", "L", "XL"],
    colors: ["Beige", "Black"]
  },

  // Shirts
  {
    id: "p07",
    name: "Classic Oxford Shirt",
    image: "images (4).jpg",
    category: "shirts",
    price: 520,
    ageGroups: ["youth", "adults"],
    sizes: ["M", "L", "XL"],
    colors: ["White", "Light Blue"]
  },
  {
    id: "p08",
    name: "Plaid Shirt",
    image: "images (5).jpg",
    category: "shirts",
    price: 480,
    ageGroups: ["teens", "youth", "adults"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Green"]
    
  },

  // Jeans
  {
    id: "p09",
    name: "Slim Fit Jeans",
    image: "images (6).jpg",
    category: "jeans",
    price: 700,
    ageGroups: ["teens", "youth", "adults"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Dark Blue", "Black"]
  },
  {
    id: "p10",
    name: "Wide Street Jeans",
    image: "images (7).jpg",
    category: "jeans",
    price: 750,
    ageGroups: ["youth"],
    sizes: ["M", "L", "XL"],
    colors: ["Light Blue"]
  },

  // Sneakers
  {
    id: "p11",
    name: "White Sport Sneakers Louis Vuitton",
    image: "images (8).jpg",
    category: "sneakers",
    price: 1350,
    ageGroups: ["teens", "youth", "adults"],
    sizes: ["38", "39", "40", "41", "42", "43"],
    colors: ["White", "Black"]
  },
  {
    id: "p12",
    name: "Kids Colorful Sneakers",
    image: "images (9).jpg",
    category: "sneakers",
    price: 620,
    ageGroups: ["kids"],
    sizes: ["28", "29", "30", "31"],
    colors: ["Red", "Blue", "Yellow"]
  },

  // Football
  {
    id: "p13",
    name: "Rael Madrid T-Shrit - Addidas Sport ",
    image: "images (10).jpg",
    category: "football",
    price: 950,
    ageGroups: ["teens", "youth", "adults"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Home", "Away"]
  },
  {
    id: "p14",
    name: "Kids National Team Jersey",
    image: "images (11).jpg",
    category: "football",
    price: 380,
    ageGroups: ["kids"],
    sizes: ["S", "M"],
    colors: ["Home", "Away"]
  }
];

const CATEGORIES = [
  { id: "jackets", label: "Jackets" },
  { id: "tshirts", label: "T-Shirts" },
  { id: "shirts", label: "Shirts" },
  { id: "jeans", label: "Jeans" },
  { id: "sneakers", label: "Sneakers" },
  { id: "football", label: "Football Jerseys" }
];

const AGE_LABELS = {
  kids: "Kids",
  teens: "Teens",
  youth: "Young Adults",
  adults: "Adults"
};


/* ==========================================================
   Storage Helpers
   ========================================================== */

function getAgeGroup() {
  return localStorage.getItem("ageGroup") || null;
}

function setAgeGroup(group) {
  localStorage.setItem("ageGroup", group);
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch (error) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function getProductById(id) {
  return PRODUCTS.find(product => product.id === id) || null;
}


/* ==========================================================
   Cart Operations
   ========================================================== */

function addToCart(productId, size, qty) {
  const product = getProductById(productId);

  if (!product) return;

  const cart = getCart();

  const existing = cart.find(
    item =>
      item.productId === productId &&
      item.size === size &&
      item.color === color
  );

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      lineId: "l" + Date.now(),
      productId: product.id,
      name: product.name,
      image: product.image,
      category: product.category,
      price: product.price,
      size: size,
      qty: qty
    });
  }

  saveCart(cart);
}

function removeFromCart(lineId) {
  const cart = getCart().filter(item => item.lineId !== lineId);
  saveCart(cart);
}

function updateCartQty(lineId, qty) {
  const cart = getCart();

  const item = cart.find(item => item.lineId === lineId);

  if (item) {
    item.qty = Math.max(1, qty);
    saveCart(cart);
  }
}

function cartCount() {
  return getCart().reduce(
    (total, item) => total + item.qty,
    0
  );
}

function cartTotal() {
  return getCart().reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
}


/* ==========================================================
   Order ID
   ========================================================== */

function generateOrderId() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  let code = "";

  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }

  return "ORD-" + code;
}


/* ==========================================================
   Cart Badge
   ========================================================== */

function renderCartBadge() {
  const badge = document.querySelector(".cart-link .count");

  if (badge) {
    badge.textContent = cartCount();
  }
}

document.addEventListener(
  "DOMContentLoaded",
  renderCartBadge
);