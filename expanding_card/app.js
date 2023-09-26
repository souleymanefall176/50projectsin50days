// const item1 = document.querySelector(".item1");
// const item2 = document.querySelector(".item2");
// const item3 = document.querySelector(".item3");
// const item4 = document.querySelector(".item4");
// const item5 = document.querySelector(".item5");
// const p1 = document.querySelector(".p1");
// const p2 = document.querySelector(".p2");
// const p3 = document.querySelector(".p3");
// const p4 = document.querySelector(".p4");
// const p5 = document.querySelector(".p5");

// item1.addEventListener("click", () => {
//   if (!item1.classList.contains("plan")) {
//     item1.classList.add("plan");
//     p1.removeAttribute("hidden");
//     item2.classList.remove("plan");
//     p2.setAttribute("hidden", "");
//     item3.classList.remove("plan");
//     p3.setAttribute("hidden", "");
//     item4.classList.remove("plan");
//     p4.setAttribute("hidden", "");
//     item5.classList.remove("plan");
//     p5.setAttribute("hidden", "");
//   }
// });

// item2.addEventListener("click", () => {
//   if (!item2.classList.contains("plan")) {
//     item2.classList.add("plan");
//     p2.removeAttribute("hidden");
//     item1.classList.remove("plan");
//     p1.setAttribute("hidden", "");
//     item3.classList.remove("plan");
//     p3.setAttribute("hidden", "");
//     item4.classList.remove("plan");
//     p4.setAttribute("hidden", "");
//     item5.classList.remove("plan");
//     p5.setAttribute("hidden", "");
//   }
// });

// item3.addEventListener("click", () => {
//   if (!item3.classList.contains("plan")) {
//     item3.classList.add("plan");
//     p3.removeAttribute("hidden");
//     item1.classList.remove("plan");
//     p1.setAttribute("hidden", "");
//     item2.classList.remove("plan");
//     p2.setAttribute("hidden", "");
//     item4.classList.remove("plan");
//     p4.setAttribute("hidden", "");
//     item5.classList.remove("plan");
//     p5.setAttribute("hidden", "");
//   }
// });

// item4.addEventListener("click", () => {
//   if (!item4.classList.contains("plan")) {
//     item4.classList.add("plan");
//     p4.removeAttribute("hidden");
//     item1.classList.remove("plan");
//     p1.setAttribute("hidden", "");
//     item3.classList.remove("plan");
//     p3.setAttribute("hidden", "");
//     item2.classList.remove("plan");
//     p2.setAttribute("hidden", "");
//     item5.classList.remove("plan");
//     p5.setAttribute("hidden", "");
//   }
// });

// item5.addEventListener("click", () => {
//   if (!item5.classList.contains("plan")) {
//     item5.classList.add("plan");
//     p5.removeAttribute("hidden");
//     item2.classList.remove("plan");
//     p2.setAttribute("hidden", "");
//     item3.classList.remove("plan");
//     p3.setAttribute("hidden", "");
//     item4.classList.remove("plan");
//     p4.setAttribute("hidden", "");
//     item1.classList.remove("plan");
//     p1.setAttribute("hidden", "");
//   }
// });

const items = document.querySelectorAll(".item");
const paragraphs = document.querySelectorAll(".p");

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    items.forEach((i) => i.classList.remove("plan"));
    paragraphs.forEach((p) => p.setAttribute("hidden", ""));
    item.classList.add("plan");
    paragraphs[index].removeAttribute("hidden");
  });
});
