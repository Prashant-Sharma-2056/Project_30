class HexagonalStone{
    constructor(x,y,width,height){
        var options={
            'restitution':0.5,
            'density':2
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("polygon.png");
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }

    display(){
        push();
        var pos=this.body.position;
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
    }
}