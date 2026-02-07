const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

btnNo.addEventListener("mouseover", () => {
  const containerRect = container.getBoundingClientRect();
  const btnRect = btnNo.getBoundingClientRect();

  const maxX = containerRect.width - btnRect.width;
  const maxY = 80;

  const randomX = getRandomNumber(0, maxX);
  const randomY = getRandomNumber(0, maxY);

  btnNo.style.left = `${randomX}px`;
  btnNo.style.top = `${randomY}px`;
});

btnYes.addEventListener("click", () => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
});
