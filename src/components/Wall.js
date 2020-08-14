  snakeThroughWall = () => {
    const ReachedLeftWall = snake[0].x < 0;
    const ReachedRightWall = snake[0].x > snakeboard.width - 10;
    const ReachedTopWall = snake[0].y < 0;
    const ReachedBottomWall = snake[0].y > snakeboard.height - -10;
    if (ReachedRightWall) {
      head = { x: -10, y: snake[0].y };
      snake.unshift(head);
      snake.pop();
    } else if (ReachedLeftWall) {
      head = { x: snakeboard.width, y: snake[0].y };
      snake.unshift(head);
      snake.pop();
    } else if (ReachedTopWall) {
      head = { x: snake[0].x, y: snakeboard.height };
      snake.unshift(head);
      snake.pop();
    } else if (ReachedBottomWall) {
      head = { x: snake[0].x, y: -10 };
      snake.unshift(head);
      snake.pop();
    }
  };
