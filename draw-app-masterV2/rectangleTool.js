//Tool to draw rectangle
function RectangleTool() {
    this.name = "rectangleTool";
    this.icon = "/assets/rectangle.png";

    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false;
    this.draw = function() {
        //Function to draw the rectangle
        
        if(mouseIsPressed) {
            if(startMouseX == -1) {
                drawing = true;
                startMouseX = mouseX;
                startMouseY = mouseY;
                loadPixels();
                console.log(startMouseY);
                console.log(startMouseX);
            }    
            else {
                updatePixels();
                if (mouseY < startMouseY && mouseX > startMouseX) { 
                    rect(startMouseX,startMouseY,abs(startMouseX-mouseX),-abs(startMouseY-mouseY));
                }
                else if (mouseY > startMouseY && mouseX > startMouseX) {
                    rect(startMouseX,startMouseY,abs(startMouseX-mouseX),abs(startMouseY-mouseY));
                }
                else if (mouseX < startMouseX && mouseY > startMouseY) {
                    rect(startMouseX,startMouseY,-abs(startMouseX-mouseX),abs(startMouseY-mouseY));
                }
                else if (mouseX < startMouseY && mouseY < startMouseY) {
                    rect(startMouseX,startMouseY,-abs(startMouseX-mouseX),-abs(mouseY-startMouseY));
                    console.log(startMouseY-mouseY);
                }
            }        
        }
        else if(drawing) {
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }
    }
    //This will clear the button from the canvas when rectangleTool is unselected
    this.unselectTool = function() {
		updatePixels();
		//clear options
		select(".options").html("");
	};
    //adds a button and click handler to the options area. When clicked
	//toggle the fill of the square
	this.populateOptions = function() {
		select(".options").html(
			"<button id='rectangleButton'>Filled Rectangle</button>");
			//click handler
		select("#rectangleButton").mouseClicked(function() {
			var button = select("#" + this.elt.id);  
            //this will clear the state of the button when changing color
            if (fillButtonState) {
                self.axis = "";
                fillButtonState = false;
            }    
            console.log(self.axis);            
            if (self.axis == "fill") {
                self.axis = "notFill";
                
                button.html('Filled Rectangle');   
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