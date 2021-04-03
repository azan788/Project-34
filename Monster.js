class Monster {
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution : 1
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("Monster-01.png");
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius);
        pop();
    }
}