/* ==========================================================
   The Store - Shared Logic
   Storage keys:
     - ageGroup : 'kids' | 'teens' | 'youth' | 'adults'
     - cart     : array of cart line items
     - lastOrder: last submitted order
     - lang     : 'ar' | 'en'
     - theme    : 'dark' | 'light'
   ========================================================== */

/* ---------- Category catalog (UI labels only) ---------- */
const CATEGORIES = [
  { id: "jackets",  en: "Jackets",          ar: "جاكيتات" },
  { id: "tshirts",  en: "T-Shirts",         ar: "تيشيرتات" },
  { id: "shirts",   en: "Shirts",           ar: "قمصان" },
  { id: "hoodies",  en: "Hoodies",          ar: "هوديز" },
  { id: "jeans",    en: "Jeans",            ar: "جينز" },
  { id: "sneakers", en: "Sneakers",         ar: "كوتشيات" },
  { id: "football", en: "Football Jerseys", ar: "تيشيرتات كورة" },
];

/* ---------- Product catalog (training data) ----------
   `images` has one image per color. The keys must match
   the strings in `colors` EXACTLY (same spelling/case).
   ------------------------------------------------------- */
const PRODUCTS = [
  // Jackets
  {
    id: "p01", name: "Classic Denim Jacket", category: "jackets", price: 850,
    ageGroups: ["teens", "youth", "adults"], sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black"],
    images: { "Blue": "images (25).jpg", "Black": "images (24).jpg" },
  },
  {
    id: "p02", name: "Black Bomber Jacket", category: "jackets", price: 1100,
    ageGroups: ["youth", "adults"], sizes: ["M", "L", "XL"],
    colors: ["Black", "Olive"],
    images: { "Black": "images.jpg", "Olive": "images (26).jpg" },
  },
  {
    id: "p03", name: "Kids Fleece Jacket", category: "jackets", price: 480,
    ageGroups: ["kids"], sizes: ["S", "M"],
    colors: ["Red", "Grey"],
    images: { "Red": "images (27).jpg", "Grey": "images (1).jpg" },
  },
  {
    id: "p18", name: "Puffer Jacket", category: "jackets", price: 980,
    ageGroups: ["youth", "adults"], sizes: ["M", "L", "XL"],
    colors: ["Black", "Olive"], bestSeller: true,
    images: { "Black": "images (28).jpg", "Olive": "images (29).jpg" },
  },
  {
  id: "p23", name: "Varsity Jacket", category: "jackets", price: 920,
  ageGroups: ["teens", "youth"], sizes: ["S", "M", "L", "XL"],
  colors: ["Navy", "Red"],
  images: { "Navy": "v1.jpg", "Red": "v2.jpg" },
},
{
  id: "p24", name: "Windbreaker", category: "jackets", price: 680,
  ageGroups: ["youth", "adults"], sizes: ["M", "L", "XL"],
  colors: ["Black", "Blue"],
  images: { "Black": "loose1.jpg", "Blue": "loose2.jpg" },
},
{
  id: "p25", name: "Leather Jacket", category: "jackets", price: 1600,
  ageGroups: ["adults"], sizes: ["M", "L", "XL"],
  colors: ["Black"],
  images: { "Black": "lea.jpg" },
},

{
  id: "p27", name: "Kids Puffer Vest", category: "jackets", price: 420,
  ageGroups: ["kids"], sizes: ["S", "M"],
  colors: ["Blue"],
  images: { "Blue": "vest.jpg" },
},
{
  id: "p28", name: "Denim Trucker Jacket", category: "jackets", price: 780,
  ageGroups: ["teens", "youth"], sizes: ["S", "M", "L", "XL"],
  colors: ["Blue"],
  images: { "Blue": "tru.jpg" },
},

  // Hoodies
  {
    id: "p15", name: "Pullover Hoodie", category: "hoodies", price: 480,
    ageGroups: ["teens", "youth", "adults"], sizes: ["S", "M", "L", "XL"],
    colors: ["Grey", "Black"], bestSeller: true,
    images: { "Grey": "images (30).jpg", "Black": "images (31).jpg" },
  },
  {
    id: "p16", name: "Zip-Up Hoodie", category: "hoodies", price: 540,
    ageGroups: ["youth", "adults"], sizes: ["M", "L", "XL"],
    colors: ["Navy","Black"], bestSeller: true,
    images: { "Navy": "images (32).jpg" ,"Black": "images (33).jpg", },
  },
  {
    id: "p17", name: "Kids Hoodie", category: "hoodies", price: 320,
    ageGroups: ["kids"], sizes: ["S", "M"],
    colors: ["Blue", "Red"],
    images: { "Blue": "images (34).jpg", "Red": "images (35).jpg" },
  },
  {
  id: "p43", name: "Oversized Hoodie", category: "hoodies", price: 560,
  ageGroups: ["youth"], sizes: ["M", "L", "XL"],
  colors: ["Grey","Black"],
  images: { "Grey": "over1.jpg" ,"Black": "over2.jpg" },
},

{
  id: "p45", name: "Fleece Hoodie", category: "hoodies", price: 500,
  ageGroups: ["adults"], sizes: ["M", "L", "XL"],
  colors: ["Navy","Grey", ],
  images: {"Navy": "fle2.jpg","Grey": "fle1.jpg" ,  },
},
{
  id: "p47", name: "Kids Character Hoodie", category: "hoodies", price: 340,
  ageGroups: ["kids"], sizes: ["S", "M"],
  colors: ["Red", "Blue"],
  images: { "Red": "mario1.jpg", "Blue": "mario2.jpg" },
},

{
  id: "p49", name: "Half-Zip Hoodie", category: "hoodies", price: 590,
  ageGroups: ["youth", "adults"], sizes: ["M", "L", "XL"],
  colors: ["Grey", "Navy"],
  images: { "Grey": "zip2.jpg", "Navy": "zip1.jpg" },
},

  // T-Shirts
  {
    id: "p04", name: "Basic Tee", category: "tshirts", price: 220,
    ageGroups: ["kids", "teens", "youth", "adults"], sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black"],
    images: { "White": "download.jpg", "Black": "images (36).jpg" },
  },
  {
    id: "p05", name: "Graphic Print Tee", category: "tshirts", price: 260,
    ageGroups: ["teens", "youth"], sizes: ["S", "M", "L"],
    colors: ["Black"],
    images: { "Black": "images (2).jpg" },
  },
  {
    id: "p06", name: "Oversized Tee", category: "tshirts", price: 290,
    ageGroups: ["youth", "adults"], sizes: ["M", "L", "XL"],
    colors: ["Black","Beige"],
    images: { "Black": "images (3).jpg", "Beige": "download.webp" },
  },
  {
    id: "p22", name: "Striped Tee", category: "tshirts", price: 240,
    ageGroups: ["teens", "youth", "adults"], sizes: ["S", "M", "L"],
    colors: ["Navy", "White"],
    images: { "Navy": "download (1).avif", "White": "images (37).jpg" },
  },
  {
  id: "p29", name: "Pocket Tee", category: "tshirts", price: 230,
  ageGroups: ["kids", "teens", "youth", "adults"], sizes: ["S", "M", "L", "XL"],
  colors: ["White", "Black"],
  images: { "White": "po2.jpg", "Black": "po1.jpg" },
},
{
  id: "p30", name: "Long Sleeve Tee", category: "tshirts", price: 270,
  ageGroups: ["teens", "youth"], sizes: ["S", "M", "L"],
  colors: ["Grey", "Navy"],
  images: { "Grey": "long2.jpg", "Navy": "long1.jpg" },
},
{
  id: "p31", name: "Tie-Dye Tee", category: "tshirts", price: 280,
  ageGroups: ["teens", "youth"], sizes: ["S", "M", "L"],
  colors: ["Multi"],
  images: { "Multi": "multi.jpg" },
},
{
  id: "p33", name: "Kids Cartoon Tee", category: "tshirts", price: 210,
  ageGroups: ["kids"], sizes: ["S", "M"],
  colors: ["Yellow", "Blue"],
  images: { "Yellow": "dino2.jpg", "Blue": "dino1.jpg" },
},
{
  id: "p34", name: "Henley Tee", category: "tshirts", price: 260,
  ageGroups: ["youth", "adults"], sizes: ["M", "L", "XL"],
  colors: [ "Black","Beige",],
  images: {"Black": "tee1.jpg", "Beige": "tee2.jpg",  },
},

  // Shirts
  {
    id: "p07", name: "Classic Oxford Shirt", category: "shirts", price: 520,
    ageGroups: ["youth", "adults"], sizes: ["M", "L", "XL"],
    colors: ["Light Blue" , "White"],
    images: {"Light Blue": "download (1).webp" , "White": "download (2).webp" },
  },
  {
    id: "p08", name: "Plaid Shirt", category: "shirts", price: 480,
    ageGroups: ["teens", "youth", "adults"], sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Green"],
    images: { "Red": "images (38).jpg", "Green": "images (39).jpg" },
  },
  {
  id: "p29", name: "Pocket Tee", category: "shirts", price: 230,
  ageGroups: ["kids", "teens", "youth", "adults"], sizes: ["S", "M", "L", "XL"],
  colors: ["White", "Black"],
  images: { "White": "po2.jpg", "Black": "po1.jpg" },
},
{
  id: "p30", name: "Long Sleeve Tee", category: "shirts", price: 270,
  ageGroups: ["teens", "youth"], sizes: ["S", "M", "L"],
  colors: ["Grey", "Navy"],
  images: { "Grey": "long2.jpg", "Navy": "long1.jpg" },
},
{
  id: "p31", name: "Tie-Dye Tee", category: "shirts", price: 280,
  ageGroups: ["teens", "youth"], sizes: ["S", "M", "L"],
  colors: ["Multi"],
  images: { "Multi": "multi.jpg" },
},

{
  id: "p33", name: "Kids Cartoon Tee", category: "shirts", price: 210,
  ageGroups: ["kids"], sizes: ["S", "M"],
  colors: ["Yellow", "Blue"],
  images: { "Yellow": "dino2.jpg", "Blue": "dino1.jpg" },
},
{
  id: "p34", name: "Henley Tee", category: "shirts", price: 260,
  ageGroups: ["youth", "adults"], sizes: ["M", "L", "XL"],
  colors: [ "Black","Beige",],
  images: { "Black": "tee1.jpg", "Beige": "tee2.jpg",  },
},

  // Jeans
  {
    id: "p09", name: "Slim Fit Jeans", category: "jeans", price: 700,
    ageGroups: ["teens", "youth", "adults"], sizes: ["S", "M", "L", "XL"],
    colors: ["Dark Blue", "Black"], bestSeller: true,
    images: { "Dark Blue": "images (6).jpg" , "Black": "images (19).jpg" },
  },
  {
    id: "p10", name: "Wide Street Jeans", category: "jeans", price: 750,
    ageGroups: ["youth"], sizes: ["M", "L", "XL"],
    colors: ["Light Blue"],
    images: { "Light Blue": "images (7).jpg" },
  },
  {
    id: "p19", name: "Cargo Joggers", category: "jeans", price: 620,
    ageGroups: ["teens", "youth"], sizes: ["S", "M", "L", "XL"],
    colors: ["Khaki", "Black"], bestSeller: true,
    images: { "Khaki": "images (17).jpg", "Black": "images (18).jpg" },
  },
  {
  id: "p50", name: "Straight Fit Jeans", category: "jeans", price: 720,
  ageGroups: ["adults"], sizes: ["M", "L", "XL"],
  colors: ["Dark Blue"],
  images: {  "Dark Blue": "stra.jpg" },
},
{
  id: "p51", name: "Ripped Jeans", category: "jeans", price: 680,
  ageGroups: ["teens", "youth"], sizes: ["S", "M", "L"],
  colors: ["Light Blue"],
  images: { "Light Blue": "ripped.jpg" },
},
{
  id: "p52", name: "Bootcut Jeans", category: "jeans", price: 710,
  ageGroups: ["adults"], sizes: ["M", "L", "XL"],
  colors: ["Dark Blue"],
  images: { "Dark Blue": "bc.jpg" },
},
{
  id: "p53", name: "Kids Jeans", category: "jeans", price: 380,
  ageGroups: ["kids"], sizes: ["S", "M"],
  colors: ["Blue"],
  images: { "Blue": "kj.jpg" },
},
{
  id: "p54", name: "Baggy lightblue Jeans", category: "jeans", price: 690,
  ageGroups: ["teens", "youth"], sizes: ["S", "M", "L", "XL"],
  colors: ["Light blue"],
  images: { "Lightblue": "baggy.jpg" },
},
{
  id: "p55", name: "Baggy Pants", category: "jeans", price: 730,
  ageGroups: ["adults"], sizes: ["M", "L", "XL"],
  colors: ["Grey", "Black"],
  images: { "Grey": "baggy1.jpg", "Black": "baggy2.jpg" },
},
{
  id: "p56", name: "Denim Shorts", category: "jeans", price: 480,
  ageGroups: ["teens", "youth"], sizes: ["S", "M", "L", "XL"],
  colors: ["Light Blue", "Black"],
  images: { "Light Blue": "denim1.jpg", "Black": "denim2.jpg" },
},

  // Sneakers
  {
    id: "p11", name: "Louis Vouttion Sneakers", category: "sneakers", price: 1350,
    ageGroups: ["teens", "youth", "adults"], sizes: ["38", "39", "40", "41", "42", "43"],
    colors: ["White", "Black"], bestSeller: true,
    images: { "White": "images (15).jpg", "Black": "images (16).jpg" },
  },
  {
    id: "p12", name: "Kids Colorful Sneakers", category: "sneakers", price: 620,
    ageGroups: ["kids"], sizes: ["28", "29", "30", "31"],
    colors: ["Red", "Blue", "Yellow"],
    images: { "Red": "images (9).jpg", "Blue": "images (13).jpg", "Yellow": "images (14).jpg" },
  },
  {
    id: "p20", name: "Nike Air Fource", category: "sneakers", price: 1450,
    ageGroups: ["youth", "adults"], sizes: ["39", "40", "41", "42", "43"],
    colors: ["White"], bestSeller: true,
    images: { "White": "download.avif" },
  },
  {
  id: "p57", name: "Nike Shoes", category: "sneakers", price: 1250,
  ageGroups: ["youth", "adults"], sizes: ["39", "40", "41", "42", "43"],
  colors: ["Black", "White"],
  images: { "Black": "black.jpg", "White": "white.jpg" },
},
{
  id: "p58", name: "Nike Air Jordan Sneakers", category: "sneakers", price: 1400,
  ageGroups: ["teens", "youth"], sizes: ["38", "39", "40", "41", "42"],
  colors: ["Black"],
  images: { "Black": "reto1.jpg"},
},
{
  id: "p59", name: "Slip-On Sneakers", category: "sneakers", price: 950,
  ageGroups: ["adults"], sizes: ["40", "41", "42", "43"],
  colors: ["Black", "White"],
  images: { "Black": "slip1.jpg", "White": "slip2.jpg" },
},
{
  id: "p60", name: "Canvas Sneakers", category: "sneakers", price: 780,
  ageGroups: ["teens", "youth"], sizes: ["38", "39", "40", "41", "42"],
  colors: ["White", "Red"],
  images: { "White": "can1.jpg", "Red": "can2.jpg" },
},
{
  id: "p61", name: "Kids adidas Sneakers", category: "sneakers", price: 590,
  ageGroups: ["kids"], sizes: ["28", "29", "30", "31"],
  colors: ["Blue", "Pink"],
  images: { "Blue": "blue.jpg", "Pink": "pink.jpg" },
},
{
  id: "p62", name: "Adidas Superstar Sneakers", category: "sneakers", price: 1300,
  ageGroups: ["youth", "adults"], sizes: ["39", "40", "41", "42", "43"],
  colors: ["White"],
  images: { "White": "super1.jpg" },
},
{
  id: "p63", name: "Adidas Samba Sneakers", category: "sneakers", price: 1550,
  ageGroups: ["adults"], sizes: ["40", "41", "42", "43"],
  colors: [ "White","Black"],
  images: {"White": "samba1.jpg", "Black": "samba2.jpg"  },
},

  // Football Jerseys
  {
    id: "p13", name: "Adidas Real Madrid T-Shirt - 26/27", category: "football", price: 950,
    ageGroups: ["teens", "youth", "adults"], sizes: ["S", "M", "L", "XL"],
    colors: ["Home", "Away"],
    images: { "Home": "images (20).jpg", "Away": "images (21).jpg" },
  },
  {
    id: "p14", name: "Puma Kids National Team", category: "football", price: 380,
    ageGroups: ["kids"], sizes: ["S", "M"],
    colors: ["Home", "Away"],
    images: { "Home": "images (11).jpg", "Away": "images (22).jpg" },
  },
  {
    id: "p21", name: "Adidas Al Ahly T-Shrit", category: "football", price: 890,
    ageGroups: ["youth", "adults"], sizes: ["S", "M", "L", "XL"],
    colors: ["Home", "Away"],
    images: { "Home": "images (12).jpg", "Away": "ahlyaway.jpg " },
  },
  {
  id: "p64", name: "Nike Barcelona T-Shirt - 26/27", category: "football", price: 620,
  ageGroups: ["teens", "youth", "adults"], sizes: ["S", "M", "L", "XL"],
  colors: ["Home", "Away"],
  images: { "Home": "barcahome.jpg", "Away": "barcaaway.jpg" },
},
{
  id: "p70", name: "Adidas Liverpool T-Shirt", category: "football", price: 1050,
  ageGroups: ["youth", "adults"], sizes: ["S", "M", "L", "XL"],
  colors: ["Home", "Away"],
  images: { "Home": "pool1.jpg", "Away": "pool2.jpg" },
},
{
  id: "p68", name: "Nike PSG T-Shrit", category: "football", price: 980,
  ageGroups: ["teens", "youth", "adults"], sizes: ["S", "M", "L", "XL"],
  colors: ["Home", "Away"],
  images: { "Home": "psghome.jpg", "Away": "psgaway.jpg" },
},
{
  id: "p67", name: "Third kit Al Ahly - 26/27", category: "football", price: 900,
  ageGroups: ["youth", "adults"], sizes: ["S", "M", "L", "XL"],
  colors: ["Away"],
  images: { "Away": "images (23).jpg" },
},
{
  id: "p65", name: "El Zamalek T-Shirt", category: "football", price: 780,
  ageGroups: ["youth", "adults"], sizes: ["S", "M", "L", "XL"],
  colors: ["Home", "Away"],
  images: { "Home": "zamalekhome.jpg", "Away": "zamalekaway.jpg" },
},
{
  id: "p66", name: "Nike Tottenham T-Shirt", category: "football", price: 520,
  ageGroups: ["teens", "youth", "adults"], sizes: ["S", "M", "L", "XL"],
  colors: ["Home", "Away"],
  images: { "Home": "tothome.jpg", "Away": "totaway.jpg" },
},


{
  id: "p69", name: "Puma Portugal Kits ", category: "football", price: 420,
  ageGroups: ["teens", "youth"], sizes: ["S", "M", "L", "XL"],
  colors: ["Home", "Away"],
  images: { "Home": "cr1.jpg", "Away": "cr2.jpg" },
},

];

const AGE_LABELS = {
  kids:   { en: "Kids",         ar: "أطفال" },
  teens:  { en: "Teens",        ar: "مراهقين" },
  youth:  { en: "Young Adults", ar: "شباب" },
  adults: { en: "Adults",       ar: "كبار" },
};

const COLOR_LABELS = {
  "Blue": { en: "Blue", ar: "أزرق" },
  "Black": { en: "Black", ar: "أسود" },
  "Olive": { en: "Olive", ar: "زيتوني" },
  "Red": { en: "Red", ar: "أحمر" },
  "Grey": { en: "Grey", ar: "رمادي" },
  "White": { en: "White", ar: "أبيض" },
  "Beige": { en: "Beige", ar: "بيج" },
  "Light Blue": { en: "Light Blue", ar: "أزرق فاتح" },
  "Dark Blue": { en: "Dark Blue", ar: "أزرق غامق" },
  "Green": { en: "Green", ar: "أخضر" },
  "Yellow": { en: "Yellow", ar: "أصفر" },
  "Home": { en: "Home Kit", ar: "الطقم الأساسي" },
  "Away": { en: "Away Kit", ar: "طقم الزيارة" },
  "Navy": { en: "Navy", ar: "كحلي" },
  "Khaki": { en: "Khaki", ar: "كاكي" },
  "Brown": { en: "Brown", ar: "بني" },
  "Multi": { en: "Multicolor", ar: "متعدد الألوان" },
  "Pink": { en: "Pink", ar: "وردي" },
};

/* ---------- UI text (interface chrome only, product names stay as-is) ---------- */
const TRANSLATIONS = {
  brand:            { en: "The Store", ar: "المتجر" },
  navShop:          { en: "Shop", ar: "تسوق" },
  navCart:          { en: "Cart", ar: "السلة" },

  heroTag:          { en: "A tailored shopping experience", ar: "تجربة تسوق مخصصة" },
  heroTitle:        { en: "We dress you for you, not just anyone", ar: "هنلبسك اللي يناسبك، مش أي حاجة" },
  heroSub:          { en: "Before you start browsing, tell us who you're shopping for — so we can show you things that actually fit.", ar: "قبل ما تدخل تتفرج، قولنا أنت بتلبس لمين — عشان نوريك حاجات تليق عليك فعلاً." },
  ageKids:          { en: "Kids", ar: "أطفال" },
  ageKidsSub:       { en: "Up to 12", ar: "حتى 12 سنة" },
  ageTeens:         { en: "Teens", ar: "مراهقين" },
  ageTeensSub:      { en: "13 - 19", ar: "13 - 19 سنة" },
  ageYouth:         { en: "Young Adults", ar: "شباب" },
  ageYouthSub:      { en: "20 - 35", ar: "20 - 35 سنة" },
  ageAdults:        { en: "Adults", ar: "كبار" },
  ageAdultsSub:     { en: "36+", ar: "+36 سنة" },

  shopTitle:        { en: "Choose your category", ar: "اختار قسمك" },
  filterAll:        { en: "All", ar: "الكل" },
  allCategories:    { en: "All categories", ar: "كل الأقسام" },
  ageNotePrefix:    { en: "You're seeing items suited for", ar: "بتشوف حاجات مناسبة لفئة" },
  changeGroup:      { en: "Change group", ar: "غيّر الفئة" },
  emptyTitle:       { en: "No products here yet", ar: "مفيش منتجات هنا دلوقتي" },
  emptyText:        { en: "Try another category or change your age group.", ar: "جرب تختار قسم تاني أو تغيّر الفئة العمرية." },
  bestSeller:       { en: "Best Seller", ar: "الأكتر مبيعًا" },
  searchPlaceholder:{ en: "Search products...", ar: "دور على منتج..." },

  productNotFound:  { en: "Product not found", ar: "المنتج مش موجود" },
  backToShop:       { en: "Back to shop", ar: "ارجع لصفحة التسوق" },
  productDesc:      { en: "Part of the store's collection, available in multiple sizes. Pick a size and quantity, then add it to your cart.", ar: "قطعة من تشكيلة المتجر، متاحة بمقاسات متعددة. اختار المقاس والكمية وضيفها للسلة." },
  chooseSize:       { en: "Choose a size", ar: "اختار المقاس" },
  chooseColor:      { en: "Choose a color", ar: "اختار اللون" },
  quantity:         { en: "Quantity", ar: "الكمية" },
  addToCart:        { en: "Add to cart", ar: "ضيف للسلة" },
  selectSizeFirst:  { en: "Please select a size first", ar: "اختار المقاس الأول" },
  addedSuccess:     { en: "Added to cart ✓", ar: "اتضاف للسلة ✓" },

  showcaseTitle:    { en: "Trending Right Now", ar: "الأكتر رواجًا دلوقتي" },
  showcaseLink:     { en: "View all", ar: "شوف الكل" },
  lookbookTag:      { en: "New Season", ar: "الموسم الجديد" },
  lookbookTitle:    { en: "Styled For Every Moment", ar: "لوك مناسب لكل لحظة" },
  contactTitle:     { en: "Get in Touch", ar: "تواصل معنا" },
  contactSub:       { en: "Questions about an order? We're one message away.", ar: "عندك سؤال عن أوردر؟ إحنا على بعد رسالة واحدة." },
  whatsappCta:      { en: "Chat on WhatsApp", ar: "كلمنا على واتساب" },

  cartTitle:        { en: "Shopping Cart", ar: "سلة الشراء" },
  cartSub:          { en: "Review your order and choose how you'll receive it.", ar: "راجع طلبك، واختار تستلمه إزاي." },
  cartEmptyTitle:   { en: "Your cart is empty", ar: "السلة فاضية" },
  cartEmptyText:    { en: "You haven't added anything yet.", ar: "لسه ما ضفتش حاجة." },
  startShopping:    { en: "Start shopping", ar: "ابدأ التسوق" },
  orderSummary:     { en: "Order summary", ar: "ملخص الطلب" },
  items:            { en: "Items", ar: "عدد القطع" },
  subtotal:         { en: "Subtotal", ar: "المجموع الفرعي" },
  deliveryFee:      { en: "Delivery fee", ar: "رسوم التوصيل" },
  free:             { en: "Free", ar: "مجاني" },
  total:            { en: "Total", ar: "الإجمالي" },
  delivery:         { en: "Home delivery", ar: "توصيل للبيت" },
  pickup:           { en: "Pickup from store", ar: "استلام من المحل" },
  cash:             { en: "Cash", ar: "نقدي" },
  card:             { en: "Credit Card", ar: "كارت ائتمان" },
  cardNumber:       { en: "Card number", ar: "رقم الكارت" },
  cardExpiry:       { en: "Expiry date", ar: "تاريخ الانتهاء" },
  cardCvv:          { en: "CVV", ar: "CVV" },
  fillCardDetails:  { en: "Please fill in your card details", ar: "من فضلك املأ بيانات الكارت" },
  nameField:        { en: "Name", ar: "الاسم" },
  phoneField:       { en: "Phone number", ar: "رقم الموبايل" },
  addressField:     { en: "Full address", ar: "العنوان بالتفصيل" },
  confirmOrder:     { en: "Confirm order", ar: "تأكيد الطلب" },
  fillNamePhone:    { en: "Please fill in your name and phone number", ar: "من فضلك املأ الاسم ورقم الموبايل" },
  needAddress:      { en: "We need your address to deliver the order", ar: "محتاجين العنوان عشان نوصلك الطلب" },
  pickupCodeTitle:  { en: "Your pickup code", ar: "كود الاستلام بتاعك" },
  orderCodeTitle:   { en: "Your order code", ar: "كود الطلب بتاعك" },
  pickupNote:       { en: "Keep this code and show it to the store when you pick up your order.", ar: "احتفظ بالكود ده وقوله للمحل عند الاستلام." },
  deliveryNote:     { en: "The store will contact you on your number to confirm delivery.", ar: "هيتواصل معاك المحل على رقمك لتأكيد التوصيل." },
  size:             { en: "Size", ar: "مقاس" },
  color:            { en: "Color", ar: "لون" },
  qty:              { en: "Qty", ar: "الكمية" },

  footer:           { en: "The Store — Training / portfolio project", ar: "المتجر — مشروع تدريبي / بورتفوليو" },
};

/* ---------- Language ---------- */
function getLang() {
  return localStorage.getItem("lang") || "ar";
}
function setLang(lang) {
  localStorage.setItem("lang", lang);
  applyLanguage();
  document.dispatchEvent(new CustomEvent("app:languagechange"));
}
function toggleLanguage() {
  setLang(getLang() === "ar" ? "en" : "ar");
}
function t(bilingualObj) {
  if (!bilingualObj) return "";
  return bilingualObj[getLang()] || bilingualObj.en;
}
function applyLanguage() {
  const lang = getLang();
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (TRANSLATIONS[key]) el.textContent = TRANSLATIONS[key][lang];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (TRANSLATIONS[key]) el.placeholder = TRANSLATIONS[key][lang];
  });

  const langBtn = document.getElementById("langToggle");
  if (langBtn) langBtn.textContent = lang === "ar" ? "EN" : "AR";
}

/* ---------- Theme ---------- */
function getTheme() {
  return localStorage.getItem("theme") || "dark";
}
function setTheme(theme) {
  localStorage.setItem("theme", theme);
  applyTheme();
}
function toggleTheme() {
  setTheme(getTheme() === "dark" ? "light" : "dark");
}
function applyTheme() {
  document.documentElement.setAttribute("data-theme", getTheme());
  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) themeBtn.textContent = getTheme() === "dark" ? "☀" : "☾";
}

/* ---------- Category / age / color helpers (UI labels) ---------- */
function getCategoryLabel(id) {
  const cat = CATEGORIES.find((c) => c.id === id);
  if (cat) return t(cat);
  if (id === "all") return TRANSLATIONS.filterAll[getLang()];
  return id;
}
function getAgeLabel(key) {
  return AGE_LABELS[key] ? t(AGE_LABELS[key]) : key;
}
function getColorLabel(key) {
  return COLOR_LABELS[key] ? t(COLOR_LABELS[key]) : key;
}

/* ---------- Image helpers (per-color images) ---------- */
function getProductImages(product) {
  if (!product) return {};
  return product.images || {};
}
function getProductImage(product, color) {
  const images = getProductImages(product);
  return images[color] || Object.values(images)[0] || "";
}

/* ---------- Storage helpers ---------- */
function getAgeGroup() {
  return localStorage.getItem("ageGroup") || null;
}
function setAgeGroup(group) {
  localStorage.setItem("ageGroup", group);
}
function getCart() {
  try {
    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch (e) {
    return [];
  }
}
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null;
}

/* ---------- Cart operations ---------- */
function addToCart(productId, size, color, qty) {
  const product = getProductById(productId);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find(
    (item) => item.productId === productId && item.size === size && item.color === color
  );
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ lineId: "l" + Date.now(), productId, size, color, qty });
  }
  saveCart(cart);
}
function removeFromCart(lineId) {
  saveCart(getCart().filter((item) => item.lineId !== lineId));
}
function updateCartQty(lineId, qty) {
  const cart = getCart();
  const item = cart.find((i) => i.lineId === lineId);
  if (item) {
    item.qty = Math.max(1, qty);
    saveCart(cart);
  }
}
function cartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}
function cartTotal() {
  return getCart().reduce((sum, item) => {
    const product = getProductById(item.productId);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
}

/* ---------- Order ID ---------- */
function generateOrderId() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return "ORD-" + code;
}

/* ---------- Shared logic for single-category pages ---------- */
function renderCategoryPage(categoryId) {
  const grid = document.getElementById("productGrid");
  const ageNote = document.getElementById("ageNote");
  const titleEl = document.getElementById("categoryTitle");
  const searchInput = document.getElementById("searchInput");
  let searchTerm = searchInput ? searchInput.value.trim() : "";

  function renderAgeNote() {
    const ageGroup = getAgeGroup();
    ageNote.innerHTML = "";
    if (!ageGroup) return;
    ageNote.append(`${TRANSLATIONS.ageNotePrefix[getLang()]} "${getAgeLabel(ageGroup)}". `);
    const changeLink = document.createElement("a");
    changeLink.href = "index.html";
    changeLink.style.color = "var(--tag)";
    changeLink.textContent = TRANSLATIONS.changeGroup[getLang()];
    ageNote.appendChild(changeLink);
  }

  function getVisibleProducts() {
    const ageGroup = getAgeGroup();
    return PRODUCTS.filter((p) => {
      const matchesAge = !ageGroup || p.ageGroups.includes(ageGroup);
      const matchesCat = categoryId === "all" || p.category === categoryId;
      const matchesSearch = !searchTerm || p.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesAge && matchesCat && matchesSearch;
    });
  }

  function renderGrid() {
    const items = getVisibleProducts();
    grid.innerHTML = "";

    if (items.length === 0) {
      grid.style.display = "block";
      grid.innerHTML = `
        <div class="empty-state">
          <div class="headline">${TRANSLATIONS.emptyTitle[getLang()]}</div>
          <p>${TRANSLATIONS.emptyText[getLang()]}</p>
        </div>`;
      return;
    }

    grid.style.display = "grid";
    items.forEach((p) => {
      const thumbImage = getProductImage(p, p.colors[0]);
      const card = document.createElement("a");
      card.href = `product.html?id=${p.id}`;
      card.className = "product-card";
      card.style.position = "relative";
      card.innerHTML = `
        ${p.bestSeller ? `<span class="badge-best">${TRANSLATIONS.bestSeller[getLang()]}</span>` : ""}
        <img class="product-thumb" src="${thumbImage}" alt="${p.name}">
        <div class="product-info">
          <div class="cat-label">${getCategoryLabel(p.category)}</div>
          <h3>${p.name}</h3>
          <div class="price">${p.price} EGP</div>
        </div>`;
      grid.appendChild(card);
    });
  }

  function renderAll() {
    if (titleEl && categoryId !== "all") titleEl.textContent = getCategoryLabel(categoryId);
    renderAgeNote();
    renderGrid();
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchTerm = e.target.value.trim();
      renderGrid();
    });
  }

  document.addEventListener("app:languagechange", renderAll);
  renderAll();
}

/* ---------- Shared UI wiring ---------- */
function renderCartBadge() {
  const badge = document.querySelector(".cart-link .count");
  if (badge) badge.textContent = cartCount();
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  applyLanguage();
  renderCartBadge();

  const langBtn = document.getElementById("langToggle");
  if (langBtn) langBtn.addEventListener("click", toggleLanguage);

  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);
});