var canvas = document.getElementById('bouncing');
var ctx = canvas.getContext('2d');
// ctx.beginPath();
// ctx.arc(50,50,10,0,Math.PI *2);
// ctx.fillStyle = "red";
// ctx.fill();
// ctx.closePath();


//thanh ngang


  var Ball = function () {
    this.x=  canvas.width/2;    // - dich sang trai
    this.y = canvas.height-25;
    this.dx = 1; this.dy =-1;
    this.ballRad = 10;

    this.drawwBall = function () {
      ctx.beginPath();
      ctx.arc(this.x,this.y,this.ballRad,0, Math.PI * 2);
      ctx.fillStyle="red";
      ctx.fill();
      ctx.closePath();

    };
  };

  var Paddle = function () {

    this.paddleHeight = 15;
    this.paddleWidth = 100;
    this.paddleX = (canvas.width - this.paddleWidth) / 2;
    this.paddleY = canvas.height - this.paddleHeight;
    this.rightPress = false;
    this.leftPress = false;
    this.Laser = function (laser) {

    }

   this.drawPaddle = function () {
      ctx.beginPath();
      ctx.rect(this.paddleX, this.paddleY, this.paddleWidth, this.paddleHeight);
      ctx.fillStyle = "blue";
      ctx.fill();
      ctx.closePath();
    };
  };

  var redball = new Ball();
  var bluepad = new Paddle();


  function keyDown(ele) {
    if (ele.keyCode == 39) {
      bluepad.rightPress = true;
    } else if (ele.keyCode == 37) {
      bluepad.leftPress = true;
    }
  }
  function keyUp(ele) {
    if(ele.keyCode == 39){
      bluepad.brightPress = false;
    }else  if(ele.keyCode == 37){
      bluepad.leftPress = false;
    }
  }

  function mouseMove(ele) {
    var relativeX = ele.clientX - canvas.offsetLeft; // di chuyen theo truc X va thuan theo chuot
    if(relativeX > 0 && relativeX < canvas.width) {
      bluepad.paddleX = relativeX - bluepad.paddleWidth/2;
      //return bluepad.paddleX;
    }
   }

document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);
document.addEventListener("mousemove", mouseMove, false);

