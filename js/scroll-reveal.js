// Scroll reveal: zoom-in animation khi cuộn tới

function initScrollReveal() {
  const sections = document.querySelectorAll(".reveal-section");
  const items = document.querySelectorAll(".reveal-item");
  const sideItems = document.querySelectorAll(".reveal-left, .reveal-right");

  const sectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 }
  );

  const itemObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  const sideObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach(section => sectionObserver.observe(section));
  items.forEach((item, index) => {
    item.style.transitionDelay = `${(index % 6) * 0.18}s`;
    itemObserver.observe(item);
  });
  sideItems.forEach((item, index) => {
    item.style.transitionDelay = `${(index % 4) * 0.25}s`;
    sideObserver.observe(item);
  });
}

document.addEventListener("DOMContentLoaded", initScrollReveal);