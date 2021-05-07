class Umbrella{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			}
			this.image=loadImage("images/Walking Frame/walking_1.png")
		this.body=Bodies.circle(x,y,50, options);
        this.radious = 50;
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		
		imageMode(CENTER);
		
		image(this.image, mangoPos.x,mangoPos.y+70,300,300);
		
 }
}