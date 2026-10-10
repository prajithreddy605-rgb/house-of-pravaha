
/* ==========================================
   HOUSE OF PRAVAHA
   Kalamkari Handblock Silk Saree Collection
   ========================================== */

const WHATSAPP_NUMBER = "919666611678";

const sarees = [
  {
    id: "kalamkari-peach",
    name: "Kalamkari Handblock Silk Saree",
    colour: "Peach & Rust",
    image: "images/kalamkari-peach.jpg",
    price: 1650
  },
  {
    id: "kalamkari-cream-blue",
    name: "Kalamkari Handblock Silk Saree",
    colour: "Cream & Blue",
    image: "images/kalamkari-cream-blue.jpg",
    price: 1650
  },
  {
    id: "kalamkari-yellow",
    name: "Kalamkari Handblock Silk Saree",
    colour: "Yellow Multicolour",
    image: "images/kalamkari-yellow.jpg",
    price: 1650
  },
  {
    id: "kalamkari-navy",
    name: "Kalamkari Handblock Silk Saree",
    colour: "Navy Blue & Cream",
    image: "images/kalamkari-navy.jpg",
    price: 1650
  }
];

/* Format prices in Indian rupees */
function formatPrice(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}

/* Create the saree cards on the website */
function displaySarees() {
  const productGrid = document.getElementById("product-grid");

  if (!productGrid) {
    console.warn(
      'Product area not found. Add id="product-grid" to index.html.'
    );
    return;
  }

  productGrid.innerHTML = sarees.map((saree) => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img
          class="product-image"
          src="${saree.image}"
          alt="${saree.name} in ${saree.colour}"
          loading="lazy"
          onerror="this.style.display='none';
            this.nextElementSibling.style.display='flex';"
        />
        <div class="image-placeholder" style="display:none;">
          Image unavailable
        </div>
      </div>

      <div class="product-info">
        <p class="product-colour">${saree.colour}</p>
        <h3>${saree.name}</h3>
        <p class="product-price">${formatPrice(saree.price)}</p>
        <p class="shipping-note">
          Shipping charges extra
        </p>

        <button
          class="whatsapp-order"
          type="button"
          data-product="${saree.name} - ${saree.colour}"
          data-price="${saree.price}"
        >
          Order on WhatsApp
        </button>
      </div>
    </article>
  `).join("");
}

/* Open WhatsApp with the selected saree details */
function setupWhatsAppOrders() {
  document.addEventListener("click", function (event) {
    const button = event.target.closest(".whatsapp-order");

    if (!button) return;

    const productName =
      button.getAttribute("data-product") || "Kalamkari saree";

    const price =
      Number(button.getAttribute("data-price")) || 1650;

    const message = [
      "Hello House of Pravaha!",
      "",
      "I am interested in this saree:",
      productName,
      `Price: ${formatPrice(price)}`,
      "Please share the shipping charges and delivery details.",
      "Please confirm availability before I place the order."
    ].join("\n");

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  });
}

/* Mobile navigation menu */
function setupMobileMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("mobile-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("mobile-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* Run everything after the page has loaded */
document.addEventListener("DOMContentLoaded", function () {
  displaySarees();
  setupWhatsAppOrders();
  setupMobileMenu();
});
