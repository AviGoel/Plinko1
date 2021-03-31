class Ground{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.height=20;
        this.width=1200;
        this.body=Bodies.rectangle(x,y,960,20,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}