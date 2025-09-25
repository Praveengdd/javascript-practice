const numberOfCircles = 88;
let numberContainer = document.querySelector(".numberContainer");
let timerValue = document.querySelector(".timerValue");
let targetValue = document.querySelector(".targetValue");
let scoreValue = document.querySelector(".scoreValue");
let timer = 10;

targetValue.innerText = generateTarget();
timerValue.innerText = timer;
timerReset();
generateNumbers();
startTimer();

function timerReset() {
  timer = 10;
  timerValue.innerText = timer;
}

function startTimer() {
  setInterval(() => {
    if (timer <= 0) {
      numberContainer.innerHTML = `
      <div class="errorContainer"><div class="errorContent">Game Over!!!
            <p>Your Score is: ${scoreValue.innerText}</p>
            <button onclick="restartGame()">Restart Game</button></div></div>
            
        `;
      return;
    }
    timer--;
    timerValue.innerText = timer;
  }, 1000);
}

function generateTarget() {
  let target = Math.ceil(Math.random() * 10);
  return target;
}

function restartGame() {
  timerReset();
  targetValue.innerText = generateTarget();
  scoreValue.innerText = 0;
  generateNumbers();
}

function generateNumbers() {
  numberContainer.innerHTML = "";
  for (let i = 0; i < numberOfCircles; i++) {
    let circle = document.createElement("div");
    circle.className = "circle";
    circle.innerText = Math.ceil(Math.random() * 10);
    numberContainer.append(circle);
  }
}

numberContainer.addEventListener("click", (event) => {
  let element = event.target;
  if (element.className === "circle") {
    let targetNumber = Number(targetValue.innerText);
    let number = Number(element.innerText);
    if (targetNumber === number) {
      scoreValue.innerText = Number(scoreValue.innerText) + 10;
      targetValue.innerText = generateTarget();
    }
    targetValue.innerText = generateTarget();
  }
});


document.addEventListener("click", (event)=>{
    if(event.target.classList.contains("errorContainer")) {
        restartGame();
    }
})
