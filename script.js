// ===== COUNTDOWN =====
const countdown = document.getElementById("countdown");
const eventDate = new Date("August 1, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    countdown.innerHTML = "Conference Live";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);

  countdown.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes Remaining`;
}, 1000);

// ===== SCROLL FADE-IN =====
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  observer.observe(section);
});

// ===== NAV GLOW ON SCROLL =====
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 0 30px #6d28d9";
  } else {
    nav.style.boxShadow = "none";
  }
});
