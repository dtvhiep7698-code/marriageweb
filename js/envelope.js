// Envelope reveal animation

function initEnvelope() {
  const overlay = document.getElementById("envelope-overlay");
  const flap = document.getElementById("env-flap");
  const letter = document.getElementById("env-letter");
  const envelopeWrap = document.getElementById("envelope-wrap");
  const bgMusic = document.getElementById("bg-music");

  overlay.addEventListener("click", () => {
    if (overlay.classList.contains("animating")) return;
    overlay.classList.add("animating");

    // Step 1: mở nắp phong bì
    flap.classList.add("open");

    // Step 2: thư bay lên (đợi nắp mở xong + thêm thời gian đọc tên)
    setTimeout(() => {
      letter.classList.add("fly-out");
    }, 1200);

    // Step 3: thư expand thành trang web (đợi đọc nội dung thư)
    setTimeout(() => {
      letter.classList.add("expand");
    }, 2800);

    // Step 4: ẩn overlay, hiện trang web, bắt đầu phát nhạc
    setTimeout(() => {
      overlay.classList.add("hide");
      if (bgMusic) {
        bgMusic.currentTime = 0;
        bgMusic.play().catch(() => {
          // Trình duyệt chặn autoplay, bỏ qua im lặng
        });
      }
      // ĐOẠN SỬA Ở ĐÂY: Chờ thêm 1.5 giây nữa rồi mới tự động cuộn
      setTimeout(() => {
        if (typeof startAutoScroll === "function") {
          startAutoScroll(); // Kích hoạt tự động cuộn trang
          updateBtn();       // Cập nhật icon nút thành dấu tạm dừng ⏸
        }
      }, 1500); // 1500ms = 1.5 giây. Thay bằng 2000 nếu muốn chờ hẳn 2 giây.
    }, 3600);
  });
}

document.addEventListener("DOMContentLoaded", initEnvelope);