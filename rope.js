class rope
{
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA : body1,
            bodyB : body2,
            pointB :{x:this.offsetX,y: this.offsetY},
            stiffness: 0.5
            //length: 5
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display()
    {
        
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
push ()
        strokeWeight(2);

        var anchor2X = pointB.x+this.offsetX;
        var anchor2Y = pointB.y;

        line (pointA.x,pointA.y,anchor2X,anchor2Y);
        pop ()
    }
}