class Particle{
    constructor(x,y,r){
        var options={
            isStatic: false,
            friction: 1.0,
            density: 1
        }
        this.r=r/25;
        this.body=Bodies.circle(x,y,this.r/25, options);
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
    
        push();
        translate(pos.x, pos.y)
        rotate(this.body.angle);
        strokeWeight(4);
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0,0,this.r/25,this.r/25);
        pop();
    }
}