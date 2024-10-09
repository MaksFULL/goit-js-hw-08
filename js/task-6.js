function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const boxes = document.querySelector("div#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("div#controls>input");


btnCreate.addEventListener("click", () => {
  const amount = Number(input.value);


  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  }

  createBoxes(amount);
  input.value = ""; 
});


function createBoxes(amount) {
  let width = 30;
  let height = 30;
  const boxesData = [];


  boxes.innerHTML = "";

  for (let i = 1; i <= amount; i++) {
    const randomColor = getRandomHexColor();
    boxesData.push(`<div style="width:${width}px; height:${height}px; background-color:${randomColor}"></div>`);
    width += 10; 
    height += 10;
  }

  boxes.insertAdjacentHTML("beforeend", boxesData.join(""));
}


btnDestroy.addEventListener("click", () => {
  boxes.innerHTML = ""; 
  input.value = ""; 
});
