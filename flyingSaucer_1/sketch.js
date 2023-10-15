//Topic 1.1 
//Object orientation revisted
//part one

var flyingSaucers;

function setup()
{
    createCanvas(1200,600);
    noStroke();  
    flyingSaucers = [];
    for(var i = 0; i < 5; i++) {
        flyingSaucers.push(new Flying_saucer(100 + i * 200, 100))
    }
}

function draw()
{
    background(50,0,80);
    
    //draw the ground
    fill(0,50,0);
    rect(0,height - 100, width, 100);
    
    for(var i = 0; i < flyingSaucers.length; i++) {
        if(flyingSaucers[i].beam_on) {
            flyingSaucers[i].beam();
        }
        flyingSaucers[i].draw();    
        flyingSaucers[i].hover();
    }
    
}

function Flying_saucer(x, y) {
    this.x = x;
    this.y = y;
    this.width = 150;
    this.height = 35;
    this.window_width = 1.05;
    this.window_height = 0.85;
    this.base_height = 1.45;
    this.num_lights = 20;
    this.brightnesses = [];
    this.beam_on = false;
    //hover and lights effect
    this.beam = function() {
        fill(255,255,100,150);
        if(random() > 0.1) {
            beginShape();
            vertex(this.x-this.width*0.20,this.y);
            vertex(this.x+this.width*0.20,this.y);
            vertex(this.x+this.width*0.45, height-100);
            vertex(this.x-this.width*0.45, height-100);
            vertex()
            endShape();
        }
    };
    this.hover = function() {
        this.x += random(-2,2);
        this.y += random(-0.5,0.5);
        if(this.beam_on == false && random() > 0.98) {
            this.beam_on = true;
        }
        else if(this.beam_on == true && random() > 0.96) {
            this.beam_on = false;
        }
    };
    this.draw = function() {
        //draw the flying saucer
        fill(175,238,238);
        arc(this.x,this.y,this.width/2*this.window_width,this.height*2*this.window_height,PI,TWO_PI)
        fill(150);
        arc(this.x,this.y,this.width,this.height,PI,TWO_PI);
        fill(50);
        arc(this.x,this.y,this.width,this.height/2*this.base_height,0,PI);
        //lights for flying saucer
        var incr = this.width/(this.num_lights-1);
        for(var i = 0; i < this.num_lights; i++) {
            fill(this.brightnesses[i]);
            ellipse(this.x-this.width/2+incr*i,this.y,5);
            this.brightnesses[i] +=3;
            this.brightnesses[i] = this.brightnesses[i]%255;
        }
    };
    for(var i = 0; i < this.num_lights; i++) {
        this.brightnesses.push((i*20)%255);
    }
}
