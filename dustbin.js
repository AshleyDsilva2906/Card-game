class DustBin {  
    constructor( x, y, width, height){
        this.image=loadImage("Picture/dustbingreen.png")
        var options = {
            'isStatic' : true
            
        }

        this.bodyb = Bodies.rectangle(x,y, width, height,options );
	    World.add(world, this.bodyb);
	    //this.bodyl= Bodies.rectangle((x-(width/2)), (y-(height*2)), height, width/2 ,options);
	    //World.add(world, this.bodyl);
	    //this.bodyr = Bodies.rectangle((x+(width/2)), (y-(height*2)), height, width/2 ,options);
        //World.add(world, this.bodyr);
        this.bodyb.width = width
        this.bodyb.height = height 
        
   }
   display(){
       fill("white");
       image(this.image,this.bodyb.position.x,this.bodyb.position.y,80,80)
       //rect(this.bodyb.position.x, this.bodyb.position.y,this.bodyb.width, this.bodyb.height)
       //rect((this.bodyb.position.x-(this.bodyb.width/2)), (this.bodyb.position.y-(this.bodyb.height*(2*(this.bodyb.width/100)))), this.bodyb.height, this.bodyb.width/2)
       //rect((this.bodyb.position.x+(this.bodyb.width/2)), (this.bodyb.position.y-(this.bodyb.height*(2*(this.bodyb.width/100)))), this.bodyb.height, this.bodyb.width/2)
   }
}