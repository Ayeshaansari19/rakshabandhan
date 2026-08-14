const noBtn = document.getElementById("noBtn");
const giftNo = document.getElementById("giftNo");

function moveNoButton() {
    if (!noBtn) return;

    const maxX = Math.max(window.innerWidth - noBtn.offsetWidth - 30, 0);
    const maxY = Math.max(window.innerHeight - noBtn.offsetHeight - 30, 0);
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

if (noBtn) {
    noBtn.addEventListener("mouseenter", moveNoButton);
    noBtn.addEventListener("click", moveNoButton);
}

function goToNextPage() {
    window.location.href = "page2.html";
}

function moveGiftButton() {
    if (!giftNo) return;

    const maxX = Math.max(window.innerWidth - giftNo.offsetWidth - 30, 0);
    const maxY = Math.max(window.innerHeight - giftNo.offsetHeight - 30, 0);
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    giftNo.style.position = "fixed";
    giftNo.style.left = `${randomX}px`;
    giftNo.style.top = `${randomY}px`;
}

if (giftNo) {
    giftNo.addEventListener("mouseenter", moveGiftButton);
    giftNo.addEventListener("click", moveGiftButton);
}

function goToPage3() {
    window.location.href = "page3.html";
}