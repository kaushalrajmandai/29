class Slingshot{
    constructor (bodyA, pointB){
       var options = {
       bodyA: bodyA,
       pointB: points,
            stiffness: 0.04,
            length: 20
    }
    this.points = points
    this.sling - Constraint.create(options);
    World.add(world, this.sling);
}

    fly(){
    this.sling.bodyA = null;

    }

    display(){
         if(this.sling.bodyA) {
             var pointa = this.sling.bodyA.position;
             var pointB = this.pointB;


             strokeWeight(4);
             fill("red");
             line(pointa.x, pointA.y, pointB.x, pointB.y);
    }
    }
}