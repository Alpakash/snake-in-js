let food_x;
let food_y;

const random_food = (min, max) => {
  return Math.round((Math.random() * (max - min) + min) / 10) * 10;
}

const generateFood = () => {
  food_x = random_food(0, snakeboard.width - 10);
  food_y = random_food(0, snakeboard.height - 10);
  snake.forEach(function hasSnakeEatenFood(part) {
    const has_eaten = part.x == food_x && part.y == food_y;
    if (has_eaten) generateFood();
  });
}

const drawFood = () => {
  context.fillStyle = "lightgreen";
  context.strokeStyle = "green";
  context.fillRect(food_x, food_y, 10, 10);
  context.strokeRect(food_x, food_y, 10, 10);
}


