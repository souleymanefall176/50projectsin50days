const champ = document.querySelector(".champ");
const bouton = document.querySelector(".bouton");

bouton.addEventListener("click", (e) => {
  champ.toggleAttribute("hidden");
  champ.style.color = "black";
});
