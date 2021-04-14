class Dustbin{
    constructor(x,y){
        var  options = {
            isStatic : true
        }
        this.bottom = Bodies.rectangle(x,y,200,20,options);
        this.left = Bodies.rectangle(x-100,y-50,20,100,options);
        this.right = Bodies.rectangle(x+100,y-50,20,100,options);

        this.image = loadImage("dustbingreen.png");

        World.add(world,this.bottom);
        World.add(world,this.left);
        World.add(world,this.right);
    }

    display(){
        var pos= this.bottom.position;

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,200,210);
    }
}