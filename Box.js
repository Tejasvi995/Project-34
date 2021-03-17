class Box{
  constructor(x, y, width, height) {
      var options = {
          'restitution': 0.8,
          'friction':1.0,
          'density':20
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255,102,204);
      stroke(204,51,153);
      strokeWeight(3);  
      rect(0,0,this.width,this.height);
      pop();
    }
}

    //restitution: 0.8,
     //   friction: 1.0,
      //  density: 20