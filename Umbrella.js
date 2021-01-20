class Umbrella{
    constructor(x,y,r){
        var options = {
            isStatic: true
        }

        this.body = Bodies.circle(x,y,r,options);
        //this.width = width;
        //this.height = height;
        this.r = r;
        this.image = loadImage('images/walking_1.png');
        World.add(world,this.body);
    }

    display(){
        //rectMode(CENTER);
        //rect(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        ellipseMode(CENTER);
        ellipse(this.image,this.body.position.x,this.body.position.y,this.r);
    }
}