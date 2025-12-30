const root = document.documentElement;
const themeBtn = document.getElementById("themeToggle");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

function setTheme(next){
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  themeBtn.textContent = next === "light" ? "🌙" : "☀️";
}

const saved = localStorage.getItem("theme");
if (saved === "light" || saved === "dark") setTheme(saved);

themeBtn.addEventListener("click", () => {
  const cur = root.getAttribute("data-theme") || "dark";
  setTheme(cur === "dark" ? "light" : "dark");
});
