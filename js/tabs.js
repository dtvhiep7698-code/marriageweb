// Luôn về đầu trang khi reload
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);

const tabButtons = document.querySelectorAll(".tab-btn");
const wrapper = document.getElementById("page-wrapper");

tabButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // active tab
    tabButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // slide page
    wrapper.style.transform = `translateX(-${index * 100}%)`;

    // trigger reveal cho các item trong tab mới
    const pages = document.querySelectorAll(".page");
    const targetPage = pages[index];
    if (!targetPage) return;

    const sections = targetPage.querySelectorAll(".reveal-section");
    const items = targetPage.querySelectorAll(".reveal-item");
    const sideItems = targetPage.querySelectorAll(".reveal-left, .reveal-right");

    sections.forEach(el => {
      el.classList.remove("show");
      void el.offsetWidth;
      setTimeout(() => el.classList.add("show"), 80);
    });

    items.forEach((el, i) => {
      el.classList.remove("show");
      void el.offsetWidth;
      setTimeout(() => el.classList.add("show"), 80 + i * 180);
    });

    sideItems.forEach((el, i) => {
      el.classList.remove("show");
      void el.offsetWidth;
      setTimeout(() => el.classList.add("show"), 80 + i * 120);
    });
  });
});