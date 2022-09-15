const modal = document.querySelector("#modal");
const modalBtn1 = document.querySelector("#modalBtn-1");
const modalBtn2 = document.querySelector("#modalBtn-2");
const modalClose = document.querySelectorAll(".modal__close")[0];

modalBtn1.onclick = function () {
  modal.style.display = "flex";
};
modalBtn2.onclick = function () {
  modal.style.display = "flex";
};
modalClose.onclick = function () {
  modal.style.display = "none";
};
modal.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
