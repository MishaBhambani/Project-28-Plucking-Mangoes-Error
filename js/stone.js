class Stone
{
    constructor(x, y){
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.image = loadImage("images/stone.png");
        this.body = Bodies.rectangle(this.x, this.y, this.height, this.width);
        World.add(world, this.body)
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, 30, 30);
    }
}