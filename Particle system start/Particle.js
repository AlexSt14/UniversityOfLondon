function Particle(x,y,xSpeed,ySpeed,size,colour) {
	this.x = x;
	this.y = y;
	this.xSpeed = xSpeed;
	this.ySpeed = ySpeed;
	this.size = size;
	this.colour = colour;
	this.age = 0;

	this.drawParticle = function() {
		fill(colour);
		ellipse(this.x,this.y,this.size);
	}
	this.updateParticle = function() {
		this.x += this.xSpeed;
		this.y += this.ySpeed;
		this.age++;
	}
}