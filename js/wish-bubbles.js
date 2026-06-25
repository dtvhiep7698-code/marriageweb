// Wish bubbles + floating input + music button + gift modal

const sampleWishes = [
  { name: "Minh Anh", msg: "Chúc hai bạn trăm năm hạnh phúc! 💕" },
  { name: "Thảo Vy", msg: "Chúc mừng đám cưới, mãi yêu thương nhau nhé!" },
  { name: "Quốc Bảo", msg: "Chúc cô dâu chú rể bách niên giai lão 🥂" },
  { name: "Ngọc Hân", msg: "Tình yêu đẹp như mơ, chúc hai bạn luôn hạnh phúc!" },
  { name: "Đức Anh", msg: "Chúc anh chị sớm có tin vui nhé! 🎉" },
  { name: "Bích Trâm", msg: "Chúc hai bạn luôn bên nhau trọn đời 💍" }
];

let userWishes = [];
let allWishes = [...sampleWishes];
let bubbleInterval = null;

function createBubble(container, wish) {
  const bubble = document.createElement("div");
  bubble.className = "wish-bubble";
  bubble.innerHTML = `<span class="wish-name">${wish.name}:</span> ${wish.msg}`;
  const offset = Math.floor(Math.random() * 20) - 10;
  bubble.style.marginLeft = `${offset}px`;
  container.appendChild(bubble);
  setTimeout(() => bubble.remove(), 4500);
}

function startBubbles() {
  const container = document.getElementById("wish-bubbles-container");
  if (!container) return;
  let index = 0;
  const show = () => {
    createBubble(container, allWishes[index % allWishes.length]);
    index++;
  };
  setTimeout(() => {
    show();
    bubbleInterval = setInterval(show, 3500);
  }, 2000);
}

// --- Floating wish toggle ---
function initWishFloat() {
  const toggle = document.getElementById("wish-toggle");
  const float = document.getElementById("wish-float");
  const sendBtn = document.getElementById("wish-send-btn");
  if (!toggle || !float) return;

  toggle.addEventListener("click", () => {
    float.classList.toggle("expanded");
  });

  sendBtn.addEventListener("click", () => {
    const name = document.getElementById("wish-name-input").value.trim();
    const msg = document.getElementById("wish-text-input").value.trim();
    if (!name || !msg) return;

    const newWish = { name, msg };
    userWishes.push(newWish);
    allWishes.push(newWish);
    const container = document.getElementById("wish-bubbles-container");
    createBubble(container, newWish);

    document.getElementById("wish-name-input").value = "";
    document.getElementById("wish-text-input").value = "";
    float.classList.remove("expanded");
  });
}

// --- Music button ---
function initMusicBtn() {
  const btn = document.getElementById("music-btn");
  const music = document.getElementById("bg-music");
  if (!btn || !music) return;

  btn.addEventListener("click", () => {
    if (music.paused) {
      music.play().catch(() => {});
      btn.classList.add("playing");
      btn.classList.remove("paused");
    } else {
      music.pause();
      btn.classList.remove("playing");
      btn.classList.add("paused");
    }
  });

  music.addEventListener("ended", () => {
    btn.classList.remove("playing");
    btn.classList.add("paused");
  });

  music.addEventListener("play", () => {
    btn.classList.add("playing");
    btn.classList.remove("paused");
  });
}

// --- Gift box modal ---
function initGiftModal() {
  const giftBox = document.getElementById("gift-box");
  const overlay = document.getElementById("gift-modal-overlay");
  const closeBtn = document.getElementById("gift-modal-close");
  if (!giftBox || !overlay) return;

  giftBox.addEventListener("click", () => {
    overlay.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("show");
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.remove("show");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  startBubbles();
  initWishFloat();
  initMusicBtn();
  initGiftModal();
});