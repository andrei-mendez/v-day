const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

btnNo.addEventListener("mouseover", () => {
  const parentRect = btnNo.parentElement.getBoundingClientRect();
  const btnRect = btnNo.getBoundingClientRect();

  const maxX = parentRect.width - btnRect.width;
  const maxY = 60;

  const randomX = getRandomNumber(-maxX / 2, maxX / 2);
  const randomY = getRandomNumber(-maxY, maxY);

  btnNo.style.transform = `translate(${randomX}px, ${randomY}px)`;
});


btnYes.addEventListener("click", () => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
});
