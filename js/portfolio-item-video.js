const video = document.querySelector(".portfolio-item__video");
const fallbackImage = document.querySelector(".fallback-image");

video.onerror = function () {
  video.style.display = "none";
  fallbackImage.style.display = "block";
};
