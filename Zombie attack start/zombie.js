//constructor for the Zombies
function zombie(y) {
	//initial x so all zombies start to the left of the screen
	this.x = random(-75,-55);
	this.y = y;
	//set a random speed
	this.speed = random(0.3, 0.6);
	this.health = 40;
	this.dead = false;

	//draw the zombie to the screen
	this.draw = function() {
		push();
		//arms
		fill(128, 0, 128);
		rect(this.x - 10, this.y - 50, 65, 15);
		rect(this.x - 10, this.y + 35, 65, 15);
		//shoulders
		rect(this.x - 20, this.y - 50, 35, 100, 10);
		//head
		fill(50);
		ellipse(this.x, this.y, 50);
		pop();
	}

	//update the zombies x location as it lumbers across the screen
	this.updateLocation = function() {
		this.x += this.speed;
		//making a continous movement for zombies from left to right
		if(this.x > width+30){
			this.x = -55;
		}
		if(dist(this.x,this.y,mouseX,mouseY)<25) {
			fill(255,0,0);
			rect(this.x-20,this.y-40,this.health,10);
		}
	}
	this.clicked = function() {
		if(mouseX < this.x+25 && mouseX > this.x-25
			&& mouseY < this.y+25 && mouseY > this.y-25) {
			console.log("Zombie hit");
			this.health -= 15;		
			//Not allowing the health bar going backwards
			if(this.health < 0) {	
				this.health = 0;
			}		
		}
		//marking enemies for deletion from array
		if(this.health <= 0.6) {
			this.dead = true;
		} 
	}
}