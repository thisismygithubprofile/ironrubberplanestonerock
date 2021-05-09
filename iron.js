class Iron {
    constructor(x, y) {
        var options = {
          'density':30,
          'friction': 3.0,
          'restitution':0.5
        };
this.body = Bodies.rectangle(x, y, 150, 40, options);
    this.width = 150;
    this.height = 40;
    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;

    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke('white')
    fill('grey')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  };
}