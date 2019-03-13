var x = redball.x;
var y = redball.y;

var boxCol = 7;
var boxRow = 3;
var boxHeight = 20;
var boxWidth = 75;
var boxPadding = 10;

var boxs = [];

for(var c= 0 ; c<boxCol;c++){
  boxs[c] = [];
  for(var r = 0; r< boxRow; r++){
    boxs[c][r] = {x :0 , y:0 , status :1}
  }
}

function drawBox() {
  for( var c= 0; c < boxCol ; c++) {
    for (var r = 0; r < boxRow; r++) {
      if(boxs[c][r].status==1){
        var boxX = (c*(boxWidth+boxPadding)+50);
        var boxY = (r*(boxHeight+boxPadding)+30);
        boxs[c][r].x= boxX;
        boxs[c][r].y= boxY;
        ctx.beginPath();
        ctx.rect(boxX, boxY, boxWidth, boxHeight);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function touch(){
  for(var c=0; c<boxCol; c++) {
    for(var r=0; r<boxRow; r++) {
      var b = boxs[c][r];
      if(b.status ==1){
        if(redball.x> b.x && redball.x<b.x+boxWidth &&  redball.y>b.y && redball.y<b.y +boxHeight){
          redball.dy = -redball.dy
          b.status =0;
          score++;
          if(score == boxRow*boxCol){
            alert("you win");
            document.location.reload();
          }
      }
    }
    }
  }
}
