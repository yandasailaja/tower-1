class Polygon{
constructor(x,y,width,height){

var options={

'restitution':0.8,
'friction':0.3,
'density':1.0

    }

    this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;
    this.image = loadImage("polygon.png");
    World.add(world,this.body);
}

display(){
var pos = this.body.position;
push();
translate(pos.x,pos.y);
imageMode(CENTER);
image(this.image,0,0,this.width,this.height);



}






}