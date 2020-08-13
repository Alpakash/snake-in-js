const showStart = () => {
  context.font = "30px Arial";
  context.fillStyle = "#ae1f24";
  context.fillText("Game over", 10, 50);
  context.fillStyle = "green";
  context.fillText(`Total Score: ${score}`, 50, 100);
  context.fillStyle = "black";
  context.fillText("Click to play again", 75, 350);

  snakeboard.addEventListener("click", restartSnake);
}

const restartSnake = () => {  
     generateFood();
     resetGame();
     main();
}

const collision = () => {
  for (let i = 4; i < snake.length; i++) {
    // return true if the snake's head collides against tail
    const collided = snake[i].x === snake[0].x && snake[i].y === snake[0].y;
    if (collided) return true;
  }

  // return true if the snake hits the wall with it's head;
  const hitLeftWall = snake[0].x < 0;
  const hitRightWall = snake[0].x > snakeboard.width - 10;
  const hitTopWall = snake[0].y < 0;
  const hitBottomWall = snake[0].y > snakeboard.height - 10;

  return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall;
}
