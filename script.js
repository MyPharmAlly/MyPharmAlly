// ───────── AOS Animation Init ─────────
AOS.init({ duration: 800, once: true });

// ───────── Scroll-to-Top Button ─────────
const scrollBtn = document.querySelector(".scroll-to-top");
if (scrollBtn) {
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
}

// ───────── Login/Signup Modal ─────────
const loginModal = document.getElementById("loginModal");
const loginBtn = document.querySelector(".open-login");
const closeLogin = document.querySelector(".close-login");

if (loginBtn) loginBtn.onclick = () => loginModal.classList.add("show");
if (closeLogin) closeLogin.onclick = () => loginModal.classList.remove("show");

// ───────── Counter Animation ─────────
const counters = document.querySelectorAll(".counter");
const animateCounters = () => {
  counters.forEach(counter => {
    const update = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const step = Math.ceil(target / 100);

      if (count < target) {
        counter.innerText = count + step;
        setTimeout(update, 20);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
};
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    animateCounters();
    observer.disconnect(); // Run once
  }
}, { threshold: 0.4 });

if (counters.length > 0) observer.observe(counters[0]);

// ───────── Buy Medicines - Cart Logic ─────────
let cart = JSON.parse(localStorage.getItem("mypharm_cart")) || {};

function addToCart(id) {
  const qtyInput = document.getElementById(`qty-${id}`);
  const qty = parseInt(qtyInput?.value || "1");

  if (!qty || qty <= 0) {
    alert("Please enter a valid quantity.");
    return;
  }

  cart[id] = (cart[id] || 0) + qty;
  localStorage.setItem("mypharm_cart", JSON.stringify(cart));
  alert("✅ Added to cart!");
}

// ───────── Product Detail Modal ─────────
function openProductModal(id) {
  const product = medicines.find(m => m.id === id);
  if (!product) return;

  document.getElementById("modalTitle").innerText = product.name;
  document.getElementById("modalImage").src = product.image;
  document.getElementById("modalPrice").innerText = product.price;
  document.getElementById("modalCategory").innerText = product.category;
  document.getElementById("modalDesc").innerText = product.description;

  document.getElementById("productDetailModal").classList.add("show");
}

function closeProductModal() {
  document.getElementById("productDetailModal").classList.remove("show");
}

// ───────── Upload Prescription Modal ─────────
function openPrescriptionModal() {
  document.getElementById("prescription-modal").classList.add("show");
}
function closePrescriptionModal() {
  document.getElementById("prescription-modal").classList.remove("show");
}

const prescriptionForm = document.getElementById("prescriptionForm");
if (prescriptionForm) {
  prescriptionForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("📤 Prescription uploaded!");
    closePrescriptionModal();
  });

  document.getElementById("prescriptionFile").addEventListener("change", function () {
    const file = this.files[0];
    const previewBox = document.getElementById("previewBox");
    previewBox.innerHTML = "";

    if (file && file.type.startsWith("image")) {
      const reader = new FileReader();
      reader.onload = function (e) {
        previewBox.innerHTML = `<img src="${e.target.result}" style="max-width:100%;height:auto;" alt="Preview" />`;
      };
      reader.readAsDataURL(file);
    } else if (file && file.type === "application/pdf") {
      previewBox.innerHTML = `<p>📄 PDF File Selected: ${file.name}</p>`;
    } else {
      previewBox.innerHTML = `<p>No valid file selected.</p>`;
    }
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

  document.getElementById("noResults").style.display = visible === 0 ? "block" : "none";
}

function filterCategory(cat) {
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

  document.getElementById("noResults").style.display = "none";
}
