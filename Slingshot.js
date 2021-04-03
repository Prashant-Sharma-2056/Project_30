class SlingShot{
    constructor(bodyA, anchor){
        var options={
            bodyA:bodyA,
            pointB:anchor,
            stiffness:0.009,
            length:1
        }
        this.sling=Constraint.create(options);
        this.pointB=anchor;
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA=body;
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if (this.sling.bodyA!=null){
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}