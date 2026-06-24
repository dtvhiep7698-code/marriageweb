// ĐỔI NGÀY CƯỚI TẠI ĐÂY
const weddingDate = new Date("2026-07-12T17:00:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateNumber(el, newValue) {
    if (el.textContent === newValue) return;

    el.classList.add("animate");

    setTimeout(() => {
        el.textContent = newValue;
        el.classList.remove("animate");
    }, 200);
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    const countdownBox = document.getElementById("countdown-box");

    if (distance < 0) {
        countdownBox.innerHTML = "💍 Hôm nay là ngày cưới!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    if (days < 7) {
    countdownBox.classList.add("urgent");
    } else {
    countdownBox.classList.remove("urgent");
    }

    updateNumber(daysEl, days.toString());
    updateNumber(hoursEl, hours.toString().padStart(2, "0"));
    updateNumber(minutesEl, minutes.toString().padStart(2, "0"));
    updateNumber(secondsEl, seconds.toString().padStart(2, "0"));
}

updateCountdown();
setInterval(updateCountdown, 1000);