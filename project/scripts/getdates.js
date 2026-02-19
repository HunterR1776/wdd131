const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

document.getElementById("lastModified").textContent = document.lastModified;

const menuButton = document.getElementById("menuButton");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");

  const isOpen = nav.classList.contains("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));

  menuButton.innerHTML = isOpen ? "&times;" : "&#9776;";
});
