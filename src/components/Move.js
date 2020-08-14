let dx = 10;
let dy = 0;
let score = 0;

// Could not get the audio working:
// Uncaught (in promise) DOMException: Failed to load because no supported source was found.
// function playAudio() {
//   var audio = new Audio("../assets/sounds/Bubble5.mp3");
//   audio.play();
// }

// move the snake automatically to the right
const moveSnake = () => {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);
  const hasEatenFood = snake[0].x === food_x && snake[0].y === food_y;

  if (hasEatenFood) {
    score += 1;
    document.getElementById("score").innerHTML = score;
    // generate new food location
    generateFood();

    // playAudio();

    speed -= 4;
  } else {
    snake.pop();
  }
};

const changeDirection = (event) => {
  // key constants
  const LEFT_KEY = 37;
  const RIGHT_KEY = 39;
  const UP_KEY = 38;
  const DOWN_KEY = 40;
  const W_KEY = 87;
  const A_KEY = 65;
  const S_KEY = 83;
  const D_KEY = 68;

  // get the keyCode
  const keyPressed = event.keyCode;

  // conditions of which direction the snake is going
  const goingUp = dy === -10;
  const goingDown = dy === 10;
  const goingRight = dx === 10;
  const goingLeft = dx === -10;

  // move the snake on the x- or y-axis
  switch (keyPressed) {
    case LEFT_KEY:
    case A_KEY:
      if (goingRight) return;
      dx = -10;
      dy = 0;
      break;
    case UP_KEY:
    case W_KEY:
      if (goingDown) return;
      dx = 0;
      dy = -10;
      break;
    case RIGHT_KEY:
    case D_KEY:
      if (goingLeft) return;
      dx = 10;
      dy = 0;
      break;
    case DOWN_KEY:
    case S_KEY:
      if (goingUp) return;
      dx = 0;
      dy = 10;
      break;
  }
};

document.addEventListener("keydown", changeDirection);
