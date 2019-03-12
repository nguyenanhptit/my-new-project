

var One_rad = Math.PI/180;
var rad360 = 360* One_rad;

  function Car(x,y,mapWidth, mapHeight) {
    this.img = new Image();
    this.img.src = "lambor.jpg";
    this.mapWidth = mapWidth;
    this.mapHeight =mapHeight;

    this.maxspeed =15;
    this.minspeed = -5;
    this.speed =0;

    this.acceleration = 2;
    this.friction = 0;
    this.rotationAngle= 3*One_rad;
    this.angle = -90* One_rad;

    this.height = 50
    this.width = 40
    this.h_height= 25;
    this.h_width = 20;

    this.cx =x;
    this.cy = y;

    this.vertices = [];
    this.vertices.push({x:0 ,y:0});
    this.vertices.push({x:0 ,y:0});
    this.vertices.push({x:0 ,y:0});
    this.vertices.push({x:0 ,y:0});

  }

  Car.prototype.draw = function (context) {
    context.save();
    context.translate(this.cx,this.cy);
    context.rotate(this.angle);
    context.drawImage(this.img, -this.h_width, - this.h_height, this.width, this.height);
    context.restore();
  }
  Car.prototype.update=function () {
    var cos = Math.cos(this.angle);
    var sin = Math.sin(this.angle);
    if(this.speed != 0) {             //move
      this.cx += cos * this.speed;
      this.cy += sin * this.speed;

      if (this.cx < 0) {
        this.cx = 0;
      } else if (this.cx > this.mapWidth) {
        this.cx = this.mapWidth;
      }

      if (this.cy < 0) {
        this.cy = 0;
      } else if (this.cy > this.mapHeight) {
        this.cy = this.mapHeight;
      }
    }
    // update 4 vertices based on rotatio angle vs origin posit
    // top-left
    this.vertices[0] = {
      x: Math.floor(this.cx + cos*-this.h_width-sin*-this.h_height),
      y: Math.floor(this.cy + sin*-this.h_width+cos*-this.h_height)
    };
    // top-right
    this.vertices[1] = {
      x: Math.floor(this.cx + cos*this.h_width-sin*-this.h_height),
      y: Math.floor(this.cy + sin*this.h_width+cos*-this.h_height)
    };
    // bottom-right
    this.vertices[2] = {
      x: Math.floor(this.cx + cos*this.h_width-sin*this.h_height),
      y: Math.floor(this.cy + sin*this.h_width+cos*this.h_height)
    };
    // left-bottom
    this.vertices[3] = {
      x: Math.floor(this.cx + cos*-this.h_width-sin*this.h_height),
      y: Math.floor(this.cy + sin*-this.h_width+cos*this.h_height)
    };
  };
  
  Car.prototype.handleInput = function (keyStates) {
    if(keyStates[Keys.UP_ARROW]){
      this.speed += this.acceleration ;
      if(this.speed > this.maxspeed){
        this.speed = this.maxspeed;
      }else if(keyStates[Keys.DOWN_ARROW]){
        this.speed -= this.acceleration;
        if(this.speed < this.minspeed){
          this.speed = this.minspeed;
        }
      }
    }

    if(keyStates[Keys.LEFT_ARROW]){
      this.angle -= this.rotationAngle;
    }
    if (keyStates[Keys.RIGHT_ARROW]){
      this.angle += this.rotationAngle;
    }

    this.angle = this.angle % rad360;
    this.speed *= (1 - this.friction);
    if(Math.abs(this.speed)<0.1){
      this.speed = 0;
    }

  };
