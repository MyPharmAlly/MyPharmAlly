// ───────── AOS Animation Init ─────────
AOS.init({ duration: 800, once: true });

// ───────── Scroll-to-Top Button (optional) ─────────
const scrollBtn = document.querySelector(".scroll-to-top");
if (scrollBtn) {
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
}
