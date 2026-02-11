// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
    // close mobile menu if open
    const ul = document.querySelector('nav ul');
    if (ul && ul.classList.contains('show')) ul.classList.remove('show');
  });
});

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const ul = document.querySelector('nav ul');
    if (!ul) return;
    ul.classList.toggle('show');
  });
}
