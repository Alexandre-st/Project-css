const menuItems = document.querySelectorAll('.menu-item');
console.log(menuItems);

menuItems.forEach((item) => {
  item.addEventListener('click', (evt) => {
    const subMenu = item.querySelector('ul');
    subMenu.classList.toggle('active');
    evt.preventDefault();
  })
})