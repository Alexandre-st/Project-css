const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {
  const subMenu = item.querySelector("ul");

  item.addEventListener("mouseover", () => {
    subMenu.classList.add("active");
  });

  item.addEventListener("mouseleave", () => {
    subMenu.classList.remove("active");
  });
});
