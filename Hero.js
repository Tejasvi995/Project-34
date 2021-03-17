class Hero {
    constructor(x,y,r) {
      var options = {
          density:3,
          frictionAir:0.005
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.image = loadImage("images/Superhero-01.png")
      this.body = Bodies.circle(this.x,this.y,this.r,options);
      World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER)
        image(this.image,0,0,this.r*2,this.r*2);
        pop();
    }
  }
