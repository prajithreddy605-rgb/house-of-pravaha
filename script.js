// =========================================
// HOUSE OF PRAVAHA
// Website interactions
// =========================================

document.addEventListener("DOMContentLoaded", function () {

  // Smooth scrolling for navigation links
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href");

      if (targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // WhatsApp order buttons
  const whatsappButtons = document.querySelectorAll(".whatsapp-order");

  whatsappButtons.forEach(function (button) {
    button.addEventListener("click", function () {

      const productName =
        this.getAttribute("data-product") || "a saree";

      const message =
        "Hello House of Pravaha! I am interested in " +
        productName +
        ". Please share more details.";

      const whatsappURL =
        "https://wa.me/919666611678?text=" +
        encodeURIComponent(message);

      window.open(whatsappURL, "_blank");
    });
  });

  // Mobile navigation toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("mobile-open");
    });
  }

});
