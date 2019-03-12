var score = 0;
var live = 3;
  function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "violet";
    ctx.fillText("Score: " + score ,10,10);
  }

  function drawLive() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "yellow";
    ctx.fillText("Live: " + live ,80,10);
  }

