class Dustbin{

    constructor(x, y) {
        var options = {
            isStatic:true,
        }
        this.x=x;
        this.y=y; 
        this.dustbinWidth=200; 
        this.dustbinHeight=100; 
        this.wallThickness=20; 
        this.angle=0; 
        this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
        this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true}) 
        Matter.Body.setAngle(this.leftWallBody, this.angle); 
        this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, 
        this.y-this.dustbinHeight/2, 
        this.wallThickness, this.dustbinHeight, {isStatic:true});
        Matter.Body.setAngle(this.rightWallBody, -1*this.angle);

        this.image = loadImage("sprites/dustbingreen.png");

        World.add(world,this.rightWallBody);
        World.add(world,this.leftWallBody);
        World.add(world,this.bottomBody);
    }

    display(){

        var posRight = this.rightWallBody.position;
        var posLeft = this.leftWallBody.position;
        var posBottom = this.bottomBody.position;

        push()
        translate(posRight.x, posRight.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        stroke(255);
        rotate(-1*this.angle);
        rect(0,0, this.wallThickness, this.dustbinHeight);
        pop();

        push()
        translate(posLeft.x, posLeft.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        stroke(255);
        rotate(this.angle);
        rect(0,0, this.wallThickness, this.dustbinHeight);
        pop();

        push()
        //translate(posBottom.x, posBottom.y);
        imageMode(CENTER);
        image(this.image,680 ,550,this.dustbinWidth,this.dustbinHeight);
        //rectMode(CENTER);
        //stroke(255);
        //angleMode(RADIANS);
        //rect(0,0, this.dustbinWidth, this.wallThickness);
        pop();
    }
}