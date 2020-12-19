class Paper {  
    constructor(x, y, radius){
        this.image2=loadImage("Picture/paper.png")
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
         this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
	    World.add(world, this.body);
       
        
   }
   display(){
       image(this.image2,this.body.position.x,this.body.position.y,50,50)
    fill("yellow");
    //ellipseMode(RADIUS);
    //ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
   }
}
