//Tool to draw circles
function CircleTool() {
    this.name = "circleTool";
    this.icon = "/assets/circle.jpg";

    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false;
    this.draw = function() {
        //Function to draw the circle
        
        if(mouseIsPressed) {
            if(startMouseX == -1) {
                drawing = true;
                startMouseX = mouseX;
                startMouseY = mouseY;
                loadPixels();
            }    
            else {
                updatePixels();
                ellipse(startMouseX,startMouseY,dist(startMouseX,startMouseY,mouseX,mouseY));
            }        
        }
        else if(drawing) {
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }
    }
    //This will clear the button from the canvas when circleTool is unselected
    this.unselectTool = function() {
		updatePixels();
		//clear options
		select(".options").html("");
	};
    //adds a button and click handler to the options area. When clicked
	//toggle the fill of the circle
	this.populateOptions = function() {
		select(".options").html(
			"<button id='circleButton'>Filled Circle</button>");
		// 	//click handler
		select("#circleButton").mouseClicked(function() {
			var button = select("#" + this.elt.id);  
            //this will clear the state of the button when changing color
            if (fillButtonState) {
                self.axis = "";
                fillButtonState = false;
            }    
            console.log(self.axis);            
            if (self.axis == "fill") {
                self.axis = "notFill";
                
                button.html('Filled Circle');   
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