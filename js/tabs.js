// Luôn về đầu trang khi reload
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);

const tabButtons = document.querySelectorAll(".tab-btn");

// Map tab -> section id
const tabTargets = {
  "info-page":     "info-page",
  "timeline-page": "timeline-page",
  "gallery-page":  "gallery-page",
  "rsvp-page":     "rsvp-page"
};

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const pageId = btn.getAttribute("data-page");
    const target = document.getElementById(pageId);
    if (!target) return;

    // active tab
    tabButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // scroll tới section
    const tabBar = document.getElementById("tabs");
    const offset = tabBar ? tabBar.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - offset - 10;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

// Highlight tab khi scroll tới section
const sections = document.querySelectorAll(".page");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      tabButtons.forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-page") === id);
      });
    }
  });
}, { threshold: 0.3 });

sections.forEach(s => observer.observe(s));