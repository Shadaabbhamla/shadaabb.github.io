const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const themeBtn = document.getElementById("themeBtn");
const saved = localStorage.getItem("theme");
if (saved) document.documentElement.setAttribute("data-theme", saved);

themeBtn?.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});
