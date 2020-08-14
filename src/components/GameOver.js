const showStart = () => {
  context.font = "30px Arial";
  context.fillStyle = "#ae1f24";
  context.fillText("Game over", 10, 50);
  context.fillStyle = "green";
  context.fillText(`Total Score: ${score}`, 50, 100);
  context.fillStyle = "black";
  context.fillText("Click to play again", 75, 350);

  context.fillStyle = "gold";
  if (score >= 22) {
    context.fillText("Are you god?!", 100, 200);
  } else if (score > 20) {
    context.fillText("You are very good!", 80, 200);
  } else if (score > 10) {
    context.fillText("You are great!", 100, 200);
  } else if (score > 4) {
    context.fillText("Good job...", 140, 200);
  } else if (score >= 1) {
    context.fillText("You can do better...", 80, 200);
  }

  snakeboard.addEventListener("click", restartSnake);
};

const restartSnake = () => {
  generateFood();
  resetGame();
  main();
};

const resetGame = () => {
  // Reset the snakes position to the middle of the canvas
  snake = [
    { x: 200, y: 200 },
    { x: 190, y: 200 },
    { x: 180, y: 200 },
    { x: 170, y: 200 },
    { x: 160, y: 200 },
  ];
  speed = 100;
  // reset score to 0
  score = 0;
  // reset innerHTML score to 0
  document.getElementById("score").innerHTML = score;
  // reset snakes direction, head moving to the right
  dx = 10;
  dy = 0;
};

const collision = () => {
  for (let i = 4; i < snake.length; i++) {
    // return true if the snake's head collides against tail
    const collided = snake[i].x === snake[0].x && snake[i].y === snake[0].y;
    if (collided) return true;
  }

  if (wallTurnedOn) {
    // return true if the snake hits the wall with it's head;
    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > snakeboard.width - 10;
    const hitTopWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y > snakeboard.height - 10;

    return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall;
  } else {
    snakeThroughWall();
  }
};

let wallTurnedOn = false;
const wallSwitch = () => {
  wallTurnedOn = !wallTurnedOn;
  let wallButton = document.getElementById("wallButton");

  if (wallTurnedOn === false) {
    wallButton.innerHTML = "ON";
    wallButton.className = "btn btn-danger ml-2";
  } else {
    wallButton.innerHTML = "OFF";
    wallButton.className = "btn btn-success ml-2";
  }
};

wallSwitch();
