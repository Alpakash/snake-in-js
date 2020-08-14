let speed = 100;
let snake = [
  { x: 200, y: 200 },
  { x: 190, y: 200 },
  { x: 180, y: 200 },
  { x: 170, y: 200 },
  { x: 160, y: 200 },
];

// Get the canvas id and make a context
const snakeboard = document.getElementById("snakeboard");
const context = snakeboard.getContext("2d");

generateFood();

// function to clear the board, move the snake to a direction and draw the snake parts
const main = () => {
  if (collision()) {
    clearBoard();
      return showStart();
  }

  setTimeout(function onTick() {
    clearBoard();
    drawFood();
    moveSnake();
    drawSnake();
    // Call main again
    main();
  }, speed);
};

main();

const clearBoard = () => {
  context.fillStyle = "white";
  context.strokeStyle = "black";
  context.fillRect(0, 0, snakeboard.width, snakeboard.height);
  context.strokeRect(0, 0, snakeboard.width, snakeboard.height);
};

// get array length of snake and draw the snake tail for every element
const drawSnake = () => {
  snake.forEach(drawSnakePart);
};

// create rectangle(s) for the snake tail
const drawSnakePart = (snakePart) => {
  context.fillStyle = "black";
  context.strokeStyle = "white";
  context.fillRect(snakePart.x, snakePart.y, 10, 10);
  context.strokeRect(snakePart.x, snakePart.y, 10, 10);
};