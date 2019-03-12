var canvas = document.getElementById('bouncing');
var ctx = canvas.getContext('2d');
// ctx.beginPath();
// ctx.arc(50,50,10,0,Math.PI *2);
// ctx.fillStyle = "red";
// ctx.fill();
// ctx.closePath();
var x=  canvas.width/2;    // - dich sang trai
var y = canvas.height-25;
var dx = 1; var dy =-1;
var ballRad = 10;

//thanh ngang
var paddleHeight = 15;
var paddleWidth = 100;
var paddleX = (canvas.width-paddleWidth)/2;
var paddleY = canvas.height - paddleHeight
var rightPress =false;
var leftPress = false;

  function drawwBall() {
    ctx.beginPath();
    ctx.arc(x,y,ballRad,0, Math.PI * 2);
    ctx.fillStyle="red";
    ctx.fill();
    ctx.closePath();

  }



  function darawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY ,  paddleWidth, paddleHeight);
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.closePath();
  }


  function keyDown(ele) {
    if (ele.keyCode == 39) {
      rightPress = true;
    } else if (ele.keyCode == 37) {
      leftPress = true;
    }
  }
  function keyUp(ele) {
    if(ele.keyCode == 39){
      rightPress = false;
    }else  if(ele.keyCode == 37){
      leftPress = false;
    }
  }

  function mouseMove(ele) {
    var relativeX = ele.clientX - canvas.offsetLeft; // di chuyen theo truc X va thuan theo chuot
    if(relativeX > 0 && relativeX < canvas.width) {
      paddleX = relativeX - paddleWidth/2;
    }
   }

document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);
document.addEventListener("mousemove", mouseMove, false);

