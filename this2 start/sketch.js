var rocket; 
var baseLine;
var bullet;

function setup()
{
     createCanvas(800, 600);
    
    baseLine = height - 100
	rocket =    {
        x: width/2,
        y: baseLine, 
        thrust: false, 
        moveLeft: false,
        moveRight: false,
		fire: false,
		//
		//Not yet finished, introducing bullet fire from the rocket
		//
		fireRocket: function() {				
			if (this.fire) {
				bullet.fireBullet();
				console.log(this.fire);
			}			
		},
		drawRocket: function() {
			//draw the rocket
			fill(180)
			beginShape();
			vertex(this.x + 10, this.y + 60);
			vertex(this.x + 10, this.y + 20);
			vertex(this.x + 15, this.y);
			vertex(this.x + 20, this.y + 20);
			vertex(this.x + 20, this.y + 60);
			endShape(CLOSE);
			
			fill(255, 0, 0);
			beginShape();
			vertex(this.x, this.y + 60);
			vertex(this.x + 10, this.y + 40);
			vertex(this.x + 10, this.y + 60);
			endShape(CLOSE);
			
			beginShape();
			vertex(this.x + 30, this.y + 60);
			vertex(this.x + 20, this.y + 40);
			vertex(this.x + 20, this.y + 60);
			endShape(CLOSE);
			
			if (this.thrust)
			{
				fill(255, 150, 0);
				beginShape();
				vertex(this.x + 10, this.y + 60);
				vertex(this.x + 13, this.y + 80);
				vertex(this.x + 15, this.y + 70);
				vertex(this.x + 18, this.y + 80);
				vertex(this.x + 20, this.y + 60);
				endShape(CLOSE);
			}
		},
		moveRocket: function() {
			//move the rocket
			if (this.thrust && this.y > 0)
			{
				this.y -= 6;
			}
			else if (this.y < baseLine)
			{
				this.y += 4;
			}
		
			if (this.moveLeft && this.x > 0 && this.y != baseLine)
			{
				this.x -= 4;
			}
		
			if (this.moveRight && this.x < width && this.y != baseLine)
			{
				this.x += 4;
			}
		}		
    };
	bullet = {
		x: rocket.x+15,
		y: baseLine,
		fireBullet: function() {
			fill(255,0,0);
			ellipse(this.x,this.y,5);
			this.y -= 5;
		}
	};
    
}
function draw()
{    
    background(10);
	
	rocket.drawRocket();
	rocket.moveRocket();
	rocket.fireRocket();	
		
}

function keyPressed()
{
	if (key == "W")
	{
		rocket.thrust = true;
	}

	if (key == "A")
	{
		rocket.moveLeft = true;
	}

	if (key == "D")
	{
		rocket.moveRight = true;
	}
	
	if (keyCode == 32) {
		rocket.fire = true;
	}
}

function keyReleased()
{
    if(key == "W")
    {
	   rocket.thrust = false;
    }
    
    if(key == "A")
    {
	   rocket.moveLeft = false;
    }
    
    if(key == "D")
    {
	   rocket.moveRight = false;
    }

	if (keyCode === 32) {
		rocket.fire = false;
	}
}
