class Paper{

    constructor(x, y, r){
        var options = {
            'isStatic' : false,
            'restitution' : 0.3,
            'friction' :0.5,
            'density' : 1.2
        }

        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(x, y, this.r/2, options);
        this.image = loadImage("sprites/paper.png");

        World.add(world, this.body)
    }
     display(){
     var paper = this.body.position;

     push();
     translate(paper.x, paper.y);
     //rectMode(CENTER);
     //fill ("white");
     imageMode(CENTER);
     image(this.image, 0, 0, 70, 70);
     //ellipse(0,0,this.r);
     pop();
     }

}