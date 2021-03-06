class Monster {
    constructor(x,y,r) {
      var options = {
        restitution:0.5,
        density: 0.1,
        friction:0.3
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.image = loadImage("Monster-01.png")
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
