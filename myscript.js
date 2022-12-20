const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const closeBtn = document.querySelector(".close-btn");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
});

document.querySelectorAll(".nav-icons").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navbar.classList.remove("active");
  })
);
