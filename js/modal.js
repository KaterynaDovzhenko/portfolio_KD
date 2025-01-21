(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");
  const menuItems = document.querySelectorAll(".js-nav-link");
  const body = document.querySelector("body");
  const modal = document.querySelector("#modal");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");

    if (mobileMenu.classList.contains("is-open")) {
      body.classList.add("no-scroll");
      body.style.overflow = "hidden";
    } else {
      body.classList.remove("no-scroll");
      body.style.overflow = "";
    }
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
      body.classList.remove("no-scroll");
      body.style.overflow = "";
    });
  });

  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    body.classList.remove("no-scroll");
    body.style.overflow = "";
  });

  // Toggle modal
  const openModal = () => {
    modal.classList.add("is-open");
    body.classList.add("no-scroll");
    body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    body.classList.remove("no-scroll");
    body.style.overflow = "";
  };
})();
