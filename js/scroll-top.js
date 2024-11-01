document.addEventListener("DOMContentLoaded", function () {
  const toTopButton = document.querySelector(".to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      toTopButton.classList.add("active");
    } else {
      toTopButton.classList.remove("active");
    }
  });

  toTopButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
