class Plinko{
    constructor(x,y){
        var options={
            isStatic: false,
            friction: 1.0,
            density: 1
        }
        this.r=10;
        this.body=Bodies.circle(x,y,this.r, options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
    
        push();
        translate(pos.x, pos.y)
        rotate(this.body.angle);
        strokeWeight(4);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}