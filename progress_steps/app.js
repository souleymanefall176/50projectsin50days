const rond = document.querySelectorAll(".rond");
const trait = document.querySelectorAll(".trait");
const preview = document.querySelector(".preview");
const next = document.querySelector(".next");

let index = 0;

function updatePreview() {
  if (index > 0) {
    next.classList.add("colorStart");
    next.classList.remove("colorEnd");
  }

  if (preview.classList.contains("colorStart")) {
    rond[index].classList.remove("rondStart");
    rond[index].classList.add("rondEnd");

    index--;
    trait[index].classList.remove("traitStart");
    trait[index].classList.add("traitEnd");

    if (index === 0) {
      preview.classList.add("colorEnd");
      preview.classList.remove("colorStart");
    }
  }
}

function updateNext() {
  if (index >= 0) {
    preview.classList.add("colorStart");
    preview.classList.remove("colorEnd");
  }

  if (next.classList.contains("colorStart") && index <= trait.length) {
    trait[index].classList.add("traitStart");
    trait[index].classList.remove("traitEnd");
    rond[index + 1].classList.add("rondStart");
    rond[index + 1].classList.remove("rondEnd");
    index++;
    if (index === trait.length) {
      next.classList.add("colorEnd");
      next.classList.remove("colorStart");
    }
  }
}

preview.addEventListener("click", (e) => {
  e.preventDefault();
  updatePreview(); // Appel de la fonction pour gérer l'événement preview
});

next.addEventListener("click", (e) => {
  e.preventDefault();
  updateNext(); // Appel de la fonction pour gérer l'événement next
});
