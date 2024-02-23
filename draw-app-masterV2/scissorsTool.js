//Basic tool for scissors, will try to implement free hand scissors alongside rectangle scissors
//defining needed variables
var selectMode = 0;
var selectedArea = {};
var selectedPixels;

function Scissors() {
    this.name = "scissorsTool";
    this.icon = "./assets/scissors.png";
    this.selectButton = createButton("Select area");
    this.selectButton.hide();
    this.displayName = "Scissors Tool";
    //defining the object itself to a variable
    var self = this;
    selectedArea = {x: 0, y: 0, w: 100, h: 100};

    this.selectButton.mousePressed(function(){
        //selecting area
        if (selectMode == 0) {
            selectMode++;
            self.selectButton.html("Cut area");
            loadPixels(); //store current canvas
        }
        //cutting area
        else if (selectMode == 1) {
            selectMode++;
            self.selectButton.html("End paste");
            updatePixels();
            selectedPixels = get(selectedArea.x,selectedArea.y,selectedArea.w,selectedArea.h);
            //drawing rectangle after cutting
            fill(255);
            noStroke();
            rect(selectedArea.x,selectedArea.y,selectedArea.w,selectedArea.h);
        }
        //resetting the button
        else if (selectMode == 2) {
            selectMode = 0;
            loadPixels();
            selectedArea = {x: 0, y: 0, w: 100, h: 100};
            self.selectButton.html("Select area");
        }
    })
    this.draw = function() {
        if (selectMode == 1) {
            updatePixels();
            noStroke();
            fill(255,0,0,70);
            rect(selectedArea.x,selectedArea.y,selectedArea.w,selectedArea.h);
        }
        stroke(0);
    }
    //mouse pressed/dragged functions
    this.mouseHasBeenPressed = function() {
        if (selectMode == 1) {
            selectedArea.x = mouseX;
            selectedArea.y = mouseY;
        }
        if (selectMode == 2) {
            //checking if mouse press is on canvas before pasting the image
            if (mouseX < canvasContainer.size().width && mouseX > 0
            && mouseY < canvasContainer.size().height && mouseY > 0) {
                image(selectedPixels,mouseX-(selectedArea.w/2),mouseY-(selectedArea.h/2));
            }
            
        }
    }
    this.mouseHasBeenDragged = function() {
        if (selectMode == 1) {
            var w = mouseX - selectedArea.x;
            var h = mouseY - selectedArea.y;
            selectedArea.w = w;
            selectedArea.h = h;
            console.log(selectedArea);
        }
    }
    //checking if the user has ended the paste before changing the tool
    this.checkToolChange = function() {
        if (selectMode == 2) {
            return false;
        }
        else {
            return true;
        }
    }
    
    //This will clear the button from the canvas when scissorsTool is unselected and clear the name
    this.unselectTool = function() {
		updatePixels();
		//clear options
		select(".options2").html("");
        select(".options").html("");
	};
     //adds a button and name of the tool
	this.populateOptions = function() {
        select(".options2").html("<p>Select area to cut</p>")        
		this.selectButton.parent("#optionsSize");	
        select(".options").html(this.displayName);
	};
}