// Auto-scroll tự trôi trang từ từ

let scrollInterval = null;
let isScrolling = false;
const SCROLL_SPEED = 1.5; // px mỗi frame

function startAutoScroll() {
  if (scrollInterval) return;
  isScrolling = true;
  scrollInterval = setInterval(() => {
    window.scrollBy(0, SCROLL_SPEED);
    // Dừng khi tới cuối trang
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 10) {
      stopAutoScroll();
    }
  }, 16); // ~60fps
}

function stopAutoScroll() {
  clearInterval(scrollInterval);
  scrollInterval = null;
  isScrolling = false;
  updateBtn();
}

function updateBtn() {
  const btn = document.getElementById("autoscroll-btn");
  if (!btn) return;
  if (isScrolling) {
    btn.textContent = "⏸";
    btn.title = "Dừng cuộn tự động";
    btn.classList.add("scrolling");
  } else {
    btn.textContent = "▶";
    btn.title = "Cuộn tự động";
    btn.classList.remove("scrolling");
  }
}

function initAutoScroll() {
  const btn = document.getElementById("autoscroll-btn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    if (isScrolling) {
      stopAutoScroll();
    } else {
      startAutoScroll();
      updateBtn();
    }
  });

  // Dừng khi người dùng tự scroll
  let userScrollTimer = null;
  window.addEventListener("wheel", () => {
    if (isScrolling) {
      stopAutoScroll();
    }
  }, { passive: true });

  window.addEventListener("touchmove", () => {
    if (isScrolling) stopAutoScroll();
  }, { passive: true });
}

document.addEventListener("DOMContentLoaded", initAutoScroll);