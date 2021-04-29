class Launcher{

    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.05
        }
        //this.bodyA = bodyA;
        this.pointB=pointB;
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }

    fly(){
        //detatched:no position: null: bodyA
        this.body.bodyA = null;

    }

    display(){
        if(this.body.bodyA){
            var posA = this.body.bodyA.position;
            var posB = this.pointB;
            strokeWeight(5);
            line(posA.x, posA.y, posB.x, posB.y);
        }
    }

}