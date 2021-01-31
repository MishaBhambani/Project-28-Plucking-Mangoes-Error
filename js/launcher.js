class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.bodyA = bodyA;
        this.pointB = pointB
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }

    fly(){
        this.body.bodyA = null;
    }

    display(){
        var x = this.pointB.x;
        var y = this.pointB.y;
        if(this.body.bodyA){
            push();
            strokeWeight(8);
            line(this.bodyA.position.x, this.bodyA.position.y, this.body.pointB.x, this.body.pointB.y);
            pop();
        }
        console.log(x);
        console.log(y);
    }
}