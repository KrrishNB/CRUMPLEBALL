class Paper{
    constructor(x,y,r){
        var options = {
            restitution:0.3,
            friction : 0.5,
            density : 1.2
        }
        this.image=loadImage("paper.png");
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r*2,this.r*2);
    }
}