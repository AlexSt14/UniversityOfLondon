//Tool to draw square
function SquareTool() {
    this.name = "squareTool";
    this.icon = "/assets/square.png";

    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false;
    this.draw = function() {
        //Function to draw the square
        
        if(mouseIsPressed) {
            if(startMouseX == -1) {
                drawing = true;
                startMouseX = mouseX;
                startMouseY = mouseY;
                loadPixels();
            }    
            else {
                updatePixels();
                var wh = mouseX-startMouseX;
                rect(startMouseX,startMouseY,wh,wh);
            }        
        }
        else if(drawing) {
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }
    }
    //This will clear the button from the canvas when squareTool is unselected
    this.unselectTool = function() {
		updatePixels();
		//clear options
		select(".options").html("");
	};
    //adds a button and click handler to the options area. When clicked
	//toggle the fill of the square
	this.populateOptions = function() {
		select(".options").html("<p>Square Tool</p><button id='squareButton'>Filled Square</button>");
		// 	//click handler
		select("#squareButton").mouseClicked(function() {
			var button = select("#" + this.elt.id);  
            //this will clear the state of the button when changing color
            if (fillButtonState) {
                self.axis = "";
                fillButtonState = false;
            }    
            console.log(self.axis);            
            if (self.axis == "fill") {
                self.axis = "notFill";
                
                button.html('Filled Square');   
                fill(colourP.selectedColour);             
            }
            else {                
                self.axis = "fill";
                self.lineOfSymmetry = width / 2;
                noFill();
                button.html('Not Filled');
            }			
		});
	};
}