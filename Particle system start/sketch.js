//Splitting up long functions into files, making the code more organized

var emit;
var emit2;

function setup()
{
	createCanvas(800, 600);
	emit = new Emitter(width/2,height-100,0,-1,30,color(200,0,200,100));
	emit.startEmitter(300,300);
	emit2 = new Emitter(width/2,100,0,3,20,color(255,0,0,100));
	emit2.startEmitter(300,300);
}

function draw()
{
	background(10);
	emit.updateParticles();
	emit2.updateParticles();
}