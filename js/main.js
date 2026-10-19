/**
 * Fast Food Cafe - Main JavaScript
 * Handles Cart Management, Menu Filtering, Ambiance Toggle, and Order Submissions
 */

// Food items catalog with Pakistani Rupee (Rs.) prices and authentic descriptions
const MENU_ITEMS = [
  // Pizzas
  {
    id: 'pizza-1',
    category: 'pizza',
    title: 'Chicken Tikka Pizza',
    description: 'Traditional spiced Pakistani chicken tikka chunks, onion rings, green peppers, mozzarella & special sauce.',
    price: 1150,
    size: 'Medium (10")',
    badge: 'Desi Hit 🔥',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'pizza-2',
    category: 'pizza',
    title: 'Fajita Sicilian Feast',
    description: 'Spicy marinated chicken fajita strips, mushrooms, black olives, jalapenos, and loaded melted cheese.',
    price: 1250,
    size: 'Medium (10")',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'pizza-3',
    category: 'pizza',
    title: 'Crown Crust Kabab Pizza',
    description: 'Fluffy crust stuffed with juicy seekh kababs, topped with spicy chicken cubes and creamy garlic mayo drizzle.',
    price: 1450,
    size: 'Large (13")',
    badge: 'Chef Special',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'pizza-4',
    category: 'pizza',
    title: 'Cheese Lover Margherita',
    description: 'Double layer of premium mozzarella and cheddar blend on hand-tossed artisan dough with Italian tomato herb paste.',
    price: 950,
    size: 'Medium (10")',
    badge: 'Classic',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&auto=format&fit=crop&q=80'
  },

  // Burgers
  {
    id: 'burger-1',
    category: 'burger',
    title: 'Zinger Supreme Burger',
    description: 'Crispy golden fried chicken thigh fillet with fiery spice coat, crunchy lettuce, and signature chili garlic mayo.',
    price: 450,
    size: 'Single Patty',
    badge: 'Bestseller 🌟',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'burger-2',
    category: 'burger',
    title: 'Special Anda Shami Burger',
    description: 'The authentic Pakistani street legend! Fresh daal & beef shami patty, fried egg, onions, and mint raita chutney in toasted bun.',
    price: 240,
    size: 'Traditional',
    badge: 'Local Legend',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'burger-3',
    category: 'burger',
    title: 'Smoky Beef Double Decker',
    description: 'Two 100% pure smashed beef patties, melted cheddar cheese slices, caramelized onions, and smoky BBQ mustard glaze.',
    price: 680,
    size: 'Double Patty',
    badge: 'Heavy Bite',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'burger-4',
    category: 'burger',
    title: 'Peshawari Chapli Burger',
    description: 'Authentic spiced minced chicken chapli kebab, fresh tomatoes, coriander, green chili relish, and toasted sesame bun.',
    price: 390,
    size: 'Single Patty',
    badge: 'Desi Spice',
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&auto=format&fit=crop&q=80'
  },

  // Hot Wings
  {
    id: 'wings-1',
    category: 'wings',
    title: 'Crispy Golden Wings (6 Pcs)',
    description: 'Juicy, hand-breaded chicken wings fried to supreme crunch, served with spicy garlic dip and seasoned fries.',
    price: 390,
    size: '6 Pieces',
    badge: 'Crunchy',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wings-2',
    category: 'wings',
    title: 'Fiery Buffalo Hot Wings (8 Pcs)',
    description: 'Tossed in signature Pakistani spicy hot pepper glaze with a zesty lemon kick. For true spice enthusiasts!',
    price: 490,
    size: '8 Pieces',
    badge: 'Very Spicy 🌶️',
    image: 'https://images.unsplash.com/photo-1527477378378-0283b7a59972?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'wings-3',
    category: 'wings',
    title: 'Honey BBQ Glazed Wings (8 Pcs)',
    description: 'Crispy fried wings tossed in rich smoked BBQ sauce infused with pure natural honey and roasted sesame seeds.',
    price: 520,
    size: '8 Pieces',
    badge: 'Sweet & Smoky',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&auto=format&fit=crop&q=80'
  },

  // Ice Cream
  {
    id: 'icecream-1',
    category: 'icecream',
    title: 'Royal Peshawari Kulfa Ice Cream',
    description: 'Traditional Pakistani dense rabri kulfa topped with crushed pistachio nuts, almonds, and royal saffron drizzle.',
    price: 240,
    size: 'Double Scoop',
    badge: 'Desi Royal',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'icecream-2',
    category: 'icecream',
    title: 'Belgian Chocolate Fudge Sundae',
    description: 'Creamy rich chocolate ice cream loaded with warm fudge brownie bites, chocolate curls, and wafer cone crisps.',
    price: 320,
    size: 'Sundae Cup',
    badge: 'Choco Delight',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'icecream-3',
    category: 'icecream',
    title: 'Chaunsa Mango Swirl Scoop',
    description: 'Made with authentic Pakistani ripe Chaunsa mango pulp, velvety cream, and fresh mango chunks topping.',
    price: 260,
    size: 'Double Scoop',
    badge: 'Seasonal King',
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&auto=format&fit=crop&q=80'
  },

  // Cold Drinks & Beverages
  {
    id: 'drinks-1',
    category: 'drinks',
    title: 'Chilled Pakola Can',
    description: 'The National drink of Pakistan! Sweet, aromatic ice-cold ice-cream soda flavor that hits every nostalgic note.',
    price: 100,
    size: '250ml Can',
    badge: 'Pride of Pakistan 🇵🇰',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'drinks-2',
    category: 'drinks',
    title: 'Fresh Mint Margarita',
    description: 'Zesty lemon juice, crushed fresh mint leaves, black salt (kala namak), and sparkling soda over crushed ice.',
    price: 240,
    size: '350ml Glass',
    badge: 'Refresher',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'drinks-3',
    category: 'drinks',
    title: 'Rooh Afza Special Milkshake',
    description: 'Chilled creamy milk infused with iconic herbal red syrup, basil seeds (tukh malanga), and vanilla scoop.',
    price: 280,
    size: '400ml Jar',
    badge: 'Desi Classic',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'drinks-4',
    category: 'drinks',
    title: 'Soft Drinks (Coke / Sprite / Fanta)',
    description: 'Chilled regular or diet fizzy beverage of your choice, served with lemon slice and ice cubes.',
    price: 90,
    size: '300ml Glass/Bottle',
    badge: 'Chilled',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&auto=format&fit=crop&q=80'
  }
];

// ================= Local Storage Cart Helpers =================
function getCart() {
  const cart = localStorage.getItem('fastfood_cafe_cart');
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem('fastfood_cafe_cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const cart = getCart();
  const existing = cart.find(c => c.id === itemId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      category: item.category,
      quantity: 1
    });
  }

  saveCart(cart);
  showToast(`Added "${item.title}" to your order! 🍔`);
  
  // If we are on the order page, re-render cart
  if (document.getElementById('cart-items-container')) {
    renderOrderPage();
  }
}

function updateCartQty(itemId, delta) {
  let cart = getCart();
  const item = cart.find(c => c.id === itemId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(c => c.id !== itemId);
    showToast(`Removed "${item.title}" from order.`);
  }

  saveCart(cart);
  if (document.getElementById('cart-items-container')) {
    renderOrderPage();
  }
}

function removeFromCart(itemId) {
  let cart = getCart();
  cart = cart.filter(c => c.id !== itemId);
  saveCart(cart);
  if (document.getElementById('cart-items-container')) {
    renderOrderPage();
  }
}

function clearCart() {
  localStorage.removeItem('fastfood_cafe_cart');
  updateCartBadge();
  if (document.getElementById('cart-items-container')) {
    renderOrderPage();
  }
}

function updateCartBadge() {
  const cart = getCart();
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badges = document.querySelectorAll('.cart-counter-badge');
  badges.forEach(b => {
    b.textContent = totalCount;
    b.style.display = totalCount > 0 ? 'inline-block' : 'inline-block';
  });
}

// ================= Toast System =================
function showToast(message) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'custom-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="bi bi-check-circle-fill text-warning fs-5"></i> <span>${message}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// ================= Menu Page Renderer =================
function renderMenu(categoryFilter = 'all') {
  const container = document.getElementById('menu-items-grid');
  if (!container) return;

  const filtered = categoryFilter === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === categoryFilter);

  container.innerHTML = filtered.map(item => `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="food-card">
        <div class="food-img-holder">
          <img src="${item.image}" alt="${item.title}" class="food-img" loading="lazy">
          <span class="food-badge ${item.badge.includes('Spicy') || item.badge.includes('Desi') ? 'spice' : ''}">
            ${item.badge}
          </span>
        </div>
        <div class="food-body">
          <div class="d-flex justify-content-between align-items-center">
            <span class="food-category">${item.category}</span>
            <small class="text-muted fw-semibold">${item.size}</small>
          </div>
          <h4 class="food-title">${item.title}</h4>
          <p class="food-desc">${item.description}</p>
          <div class="food-footer">
            <div class="food-price">
              <span class="currency">PKR</span>
              <span class="amount">Rs. ${item.price.toLocaleString()}</span>
            </div>
            <button class="add-cart-btn" onclick="addToCart('${item.id}')">
              <i class="bi bi-cart-plus"></i> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// ================= Home Page Featured Items Renderer =================
function renderFeaturedItems() {
  const container = document.getElementById('featured-items-grid');
  if (!container) return;

  // Pick top items (1 pizza, 1 burger, 1 wings, 1 ice cream)
  const featuredIds = ['burger-1', 'pizza-1', 'wings-2', 'icecream-1'];
  const featured = MENU_ITEMS.filter(i => featuredIds.includes(i.id));

  container.innerHTML = featured.map(item => `
    <div class="col-lg-3 col-md-6 mb-4">
      <div class="food-card">
        <div class="food-img-holder">
          <img src="${item.image}" alt="${item.title}" class="food-img" loading="lazy">
          <span class="food-badge spice">${item.badge}</span>
        </div>
        <div class="food-body">
          <span class="food-category">${item.category}</span>
          <h4 class="food-title">${item.title}</h4>
          <p class="food-desc">${item.description}</p>
          <div class="food-footer">
            <div class="food-price">
              <span class="currency">PKR</span>
              <span class="amount">Rs. ${item.price.toLocaleString()}</span>
            </div>
            <button class="add-cart-btn" onclick="addToCart('${item.id}')">
              <i class="bi bi-cart-plus"></i> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// ================= Order Page Renderer =================
function renderOrderPage() {
  const container = document.getElementById('cart-items-container');
  const emptyNotice = document.getElementById('empty-cart-notice');
  const subtotalEl = document.getElementById('order-subtotal');
  const deliveryEl = document.getElementById('order-delivery');
  const grandTotalEl = document.getElementById('order-grandtotal');

  if (!container) return;

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = '';
    if (emptyNotice) emptyNotice.style.display = 'block';
    if (subtotalEl) subtotalEl.textContent = 'Rs. 0';
    if (deliveryEl) deliveryEl.textContent = 'Rs. 0';
    if (grandTotalEl) grandTotalEl.textContent = 'Rs. 0';
    return;
  }

  if (emptyNotice) emptyNotice.style.display = 'none';

  let subtotal = 0;
  container.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    return `
      <div class="cart-item-row">
        <div class="d-flex align-items-center gap-3">
          <img src="${item.image}" alt="${item.title}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 8px;">
          <div>
            <div class="cart-item-name">${item.title}</div>
            <small class="text-muted">Rs. ${item.price} each</small>
          </div>
        </div>
        <div class="d-flex align-items-center gap-3">
          <div class="d-flex align-items-center gap-2">
            <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
            <span class="fw-bold px-1">${item.quantity}</span>
            <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
          </div>
          <div class="fw-bold text-dark" style="min-width: 80px; text-align: right;">
            Rs. ${itemTotal.toLocaleString()}
          </div>
          <button class="btn btn-sm text-danger p-0 ms-2" onclick="removeFromCart('${item.id}')" title="Remove">
            <i class="bi bi-trash3"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  const deliveryFee = subtotal > 1500 ? 0 : 150;
  const grandTotal = subtotal + deliveryFee;

  if (subtotalEl) subtotalEl.textContent = `Rs. ${subtotal.toLocaleString()}`;
  if (deliveryEl) deliveryEl.textContent = deliveryFee === 0 ? 'FREE 🎉' : `Rs. ${deliveryFee}`;
  if (grandTotalEl) grandTotalEl.textContent = `Rs. ${grandTotal.toLocaleString()}`;
}

// Quick Add item selector for Order Page
function renderQuickAddGrid() {
  const grid = document.getElementById('order-quick-add-grid');
  if (!grid) return;

  grid.innerHTML = MENU_ITEMS.slice(0, 6).map(item => `
    <div class="col-md-4 col-sm-6 mb-3">
      <div class="card h-100 border p-2 text-center" style="border-radius: 12px;">
        <img src="${item.image}" alt="${item.title}" style="height: 100px; object-fit: cover; border-radius: 8px;" class="mb-2">
        <h6 class="mb-1 text-truncate" title="${item.title}">${item.title}</h6>
        <div class="fw-bold text-danger mb-2">Rs. ${item.price}</div>
        <button class="btn btn-outline-danger btn-sm rounded-pill" onclick="addToCart('${item.id}')">
          <i class="bi bi-plus-lg"></i> Add
        </button>
      </div>
    </div>
  `).join('');
}

// ================= Ambiance Image Switcher for Home Page =================
function switchAmbianceView(viewType) {
  const imgElement = document.getElementById('ambiance-display-img');
  const titleElement = document.getElementById('ambiance-display-title');
  const textElement = document.getElementById('ambiance-display-text');
  const badgeElement = document.getElementById('ambiance-display-badge');
  const outsideBtn = document.getElementById('view-outside-btn');
  const insideBtn = document.getElementById('view-inside-btn');

  if (!imgElement) return;

  if (viewType === 'outside') {
    imgElement.src = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1000&auto=format&fit=crop&q=80';
    if (titleElement) titleElement.textContent = 'Fast Food Cafe - Outdoor & Entrance View';
    if (textElement) textElement.textContent = 'Welcoming exterior facade with illuminated neon signs, spacious takeaway counter, and easy parking.';
    if (badgeElement) badgeElement.innerHTML = '<i class="bi bi-geo-alt-fill text-warning"></i> Cafe Outside View';
    if (outsideBtn) outsideBtn.classList.add('active');
    if (insideBtn) insideBtn.classList.remove('active');
  } else {
    imgElement.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&auto=format&fit=crop&q=80';
    if (titleElement) titleElement.textContent = 'Cozy Dining Hall & Family Sitting Area';
    if (textElement) textElement.textContent = 'Warm ambient lighting, comfortable booth seating, air-conditioned dining, and hygienic open kitchen.';
    if (badgeElement) badgeElement.innerHTML = '<i class="bi bi-cup-hot-fill text-warning"></i> Cafe Inside View';
    if (insideBtn) insideBtn.classList.add('active');
    if (outsideBtn) outsideBtn.classList.remove('active');
  }
}

// ================= DOM Ready Initialization =================
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();

  // Initialize Home Page components
  if (document.getElementById('featured-items-grid')) {
    renderFeaturedItems();
  }

  // Initialize Menu Page components
  if (document.getElementById('menu-items-grid')) {
    renderMenu('all');

    // Menu category filter buttons
    const filterButtons = document.querySelectorAll('.menu-tab-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.getAttribute('data-category');
        renderMenu(category);
      });
    });
  }

  // Initialize Order Page components
  if (document.getElementById('cart-items-container')) {
    renderOrderPage();
    renderQuickAddGrid();

    // Order Form Submit Handler
    const orderForm = document.getElementById('checkout-order-form');
    if (orderForm) {
      orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const cart = getCart();
        if (cart.length === 0) {
          alert('Aapka cart khali hai! Please menu sy items select karein.');
          return;
        }

        const name = document.getElementById('order-name').value;
        const phone = document.getElementById('order-phone').value;
        const address = document.getElementById('order-address').value;
        const city = document.getElementById('order-city').value;
        const payment = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'Cash on Delivery';

        const orderNum = 'FFC-' + Math.floor(100000 + Math.random() * 900000);

        // Show Order Success Modal
        const orderSummaryModal = new bootstrap.Modal(document.getElementById('orderSuccessModal'));
        document.getElementById('modal-order-id').textContent = orderNum;
        document.getElementById('modal-customer-info').textContent = `${name} (${phone}) - ${address}, ${city}`;
        document.getElementById('modal-payment-mode').textContent = payment;
        orderSummaryModal.show();

        // Clear cart
        clearCart();
        orderForm.reset();
      });
    }
  }

  // Initialize Contact Page Form
  const contactForm = document.getElementById('contact-us-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Ensure all fields were filled
      const name = document.getElementById('contact-name').value.trim();
      const phone = document.getElementById('contact-phone').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !phone || !message) {
        alert('Baraye meharbani naam, phone number aur paigham zaroor darj karein.');
        return;
      }

      // Show confirmation
      const contactSuccessModal = new bootstrap.Modal(document.getElementById('contactSuccessModal'));
      document.getElementById('contact-response-name').textContent = name;
      contactSuccessModal.show();

      // STRICT USER REQUIREMENT: "contact main sary box empty rakhny hain"
      // Reset form so every single input box remains completely EMPTY!
      contactForm.reset();
    });
  }
});
