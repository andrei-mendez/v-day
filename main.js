const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Make the "No" button dodge the cursor
btnNo.addEventListener("mouseover", () => {
  const containerRect = container.getBoundingClientRect();
  const btnRect = btnNo.getBoundingClientRect();

  const maxTop = containerRect.height - btnRect.height;
  const maxLeft = containerRect.width - btnRect.width;

  let newTop, newLeft;

  do {
    newTop = getRandomNumber(0, maxTop);
  } while (Math.abs(newTop - btnNo.offsetTop) < containerRect.height / 3);

  do {
    newLeft = getRandomNumber(0, maxLeft);
  } while (Math.abs(newLeft - btnNo.offsetLeft) < containerRect.width / 3);

  btnNo.style.top = `${newTop}px`;
  btnNo.style.left = `${newLeft}px`;
});

// Handle "Yes" click
btnYes.addEventListener("click", () => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");

  // Small vibration on mobile
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }
});
