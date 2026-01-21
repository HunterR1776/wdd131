const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector("#primaryNav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");

  const isOpen = nav.classList.contains("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));

  menuButton.innerHTML = isOpen ? "&times;" : "&#9776;";
});