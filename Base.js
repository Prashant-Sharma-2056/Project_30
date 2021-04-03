class BaseClass{
    constructor(x,y,width,height){
        var options={
            'restitution':0.5,
            'isStatic':false
        }
        this.body=Bodies.rectangle(x,y,width,height, options);
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }

    display(){
        var pos=this.body.position;

        rectMode(CENTER)
        rect(pos.x, pos.y, width, height);
    }
}