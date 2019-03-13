

var Laze = function () {

      this.lx =;
      this.ly = redball.y;
      this.dly =-1;

  this.drawwLaze= function () {
    ctx.moveTo(this.lx, this.ly+10 );
    ctx.lineTo(this.lx, this.ly - 20);
    ctx.stroke();
  }
}
 var laze = new Laze();


function lazeShoot(){

}
document.addEventListener("mousedown", lazeShoot ,false);
