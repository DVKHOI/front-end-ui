const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
const slide = document.querySelector("#slide");

btnNext.addEventListener("click", () => {
  let listItem = document.querySelectorAll(".item");
  slide.appendChild(listItem[0]);
});
btnPrev.addEventListener("click", () => {
  let listItem = document.querySelectorAll(".item");
  slide.prepend(listItem[listItem.length - 1]);
});
