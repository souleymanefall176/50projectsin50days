const menu = document.querySelector(".menu");
const exit = document.querySelector(".exit");
const circle = document.querySelector(".circle");
const container = document.querySelector(".container");
const menus = document.querySelector(".menus");

menu.addEventListener("click", (e) => {
  container.classList.add("rotatePage");
  circle.classList.add("circleRotate");
  menus.classList.add("menusAvant");
});

exit.addEventListener("click", (e) => {
  container.classList.remove("rotatePage");
  circle.classList.remove("circleRotate");
  menus.classList.remove("menusAvant");
});
