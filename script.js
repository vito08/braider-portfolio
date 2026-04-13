AOS.init({
  duration: 1000,
  once: true
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});
