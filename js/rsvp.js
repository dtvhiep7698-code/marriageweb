const form = document.getElementById("rsvp-form");
const message = document.getElementById("rsvp-message");

const FORMSPREE_URL = "https://formspree.io/f/xjggvnqz"; // 🔴 thay ID của bạn

form.addEventListener("submit", async e => {
  e.preventDefault();

  const formData = new FormData(form);

  const res = await fetch(FORMSPREE_URL, {
    method: "POST",
    body: formData,
    headers: { "Accept": "application/json" }
  });

  if (res.ok) {
    message.textContent = "Cảm ơn bạn đã xác nhận tham dự 💖";
    message.style.color = "#d43737";
    form.reset();
  } else {
    message.textContent = "Có lỗi xảy ra, vui lòng thử lại.";
  }
});
