//Constructor for the horde
function Horde() {
	//an array of zombies
	this.zombies = [];
    this.minZombies = 10;

	//call each zombies drawing code and update it's location ready to be drawn again
	this.drawZombies = function() {
		for (var i = 0; i < this.zombies.length; i++) {
			this.zombies[i].draw();
			this.zombies[i].updateLocation();
		}
        //removing the marked zombies from array
        for(var i = this.zombies.length-1; i >= 0; i--) {
            if(this.zombies[i].dead) {
                this.zombies.splice(i,1);
            }
        }
        //Adding zombies back to array as they are being deleted
        if(this.zombies.length < this.minZombies) {
            this.zombies.push(new zombie(random(20,height-50)))
        }
	}

	//add n zombies to the horde
	this.addZombies = function(minZombies) {
		for (var i = 0; i < minZombies; i++) {
			this.zombies.push(new zombie(random(20, height - 50)))
		}
	}
    //checking if zombie is clicked
    this.checkClicked = function() {
        for(var i = 0; i < this.zombies.length; i++) {
            this.zombies[i].clicked();
        }
    }
    
}