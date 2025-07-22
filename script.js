// ───────── AOS Animation Init ─────────
AOS.init({ duration: 800, once: true });

// ───────── Scroll-to-Top Button ─────────
const scrollBtn = document.querySelector(".scroll-to-top");
if (scrollBtn) {
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
}

// ───────── Medicine Search & Filter ─────────
function filterMedicines() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".medicine-card");
  let visible = 0;

  cards.forEach(card => {
    const name = card.querySelector("h3").textContent.toLowerCase();
    if (name.includes(search)) {
      card.style.display = "block";
      visible++;
    } else {
      card.style.display = "none";
    }
  });

  const noResults = document.getElementById("noResults");
  if (noResults) noResults.style.display = visible === 0 ? "block" : "none";
}

function filterCategory(cat, event) {
  const buttons = document.querySelectorAll(".category-buttons button");
  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  const cards = document.querySelectorAll(".medicine-card");
  cards.forEach(card => {
    if (cat === "all" || card.dataset.category === cat.toLowerCase()) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  const noResults = document.getElementById("noResults");
  if (noResults) noResults.style.display = "none";
}
