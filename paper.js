class Paper {
    constructor(x,y) {
        var options = { 
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            isStatic:false
           
          
        }
        this.body = Bodies.circle(x, y,10,10,this.radius,options);
        this.width=width;
        this.image = loadImage("sprites/paper.png")
        this.height=height; 
        World.add(world, this.body);
      }
      display(){
  
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}