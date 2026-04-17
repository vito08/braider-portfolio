AOS.init({
  duration: 1000,
  once: true,
  disable: window.innerWidth < 768
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

window.addEventListener('load', () => {
  AOS.refreshHard();
});