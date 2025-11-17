document.addEventListener("DOMContentLoaded", () => {

  // Mobile Navigation
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Smooth Scrolling
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      navLinks.classList.remove("open");
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Reveal Effect
  const sections = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("revealed");
    });
  }, { threshold: 0.3 });

  sections.forEach(sec => observer.observe(sec));

  // Set Year
  document.getElementById("year").textContent = new Date().getFullYear();

});
