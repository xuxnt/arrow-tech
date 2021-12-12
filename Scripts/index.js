let nav = document.querySelector("header");
let menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  if (!menu.classList.contains("hide-menu")) {
    menu.classList.add("hide-menu", "show-menu");
    nav.classList.add("header-show");
  } else {
    menu.classList.remove("hide-menu", "show-menu");
    nav.classList.remove("header-show");
  }
});
