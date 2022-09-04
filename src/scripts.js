function handleMenuToggle() {
  const menu = document.getElementById("mobile-menu");
  const menuCont = document.getElementById("mobile-menu-cont");

  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    setTimeout(() => {
      menuCont.classList.remove("opacity-0");
      menuCont.classList.add("opacity-100");
    }, 1);
  } else {
    menuCont.classList.remove("opacity-100");
    menuCont.classList.add("opacity-0");
    setTimeout(() => {
      menu.classList.add("hidden");
    }, 200);
  }
}
