//A tool to erase from canvas
function EraserTool() {
    this.name = "eraser";
    this.icon = "./assets/eraser.png";  
    this.displayName = "Eraser Tool"; 
    this.eraserX;
    this.eraserY;     
        
    this.draw = function() {  
        fill(255);
        noStroke();    
        if (mouseIsPressed) {            
            ellipse(mouseX,mouseY,this.eraserWidth.value());
        }  
        stroke(1); //needed to reset stroke for unfilled circles to be visible again
    }
     //This will clear the slider from the canvas when eraser is unselected and clear the name
     this.unselectTool = function() {
        loadPixels();
		updatePixels();
		//clear options2
		select("#optionsSize").html("");
        select(".options").html("");
	};
     //adds a slider to the options area. When interacted with, changes the width of the image
     //Also adding the name of the tool
	this.populateOptions = function() {
        select(".options2").html("<p>Eraser Width</p>") 
        this.eraserWidth = createSlider(10,60,20);       
		this.eraserWidth.parent("#optionsSize");	
        select(".options").html(this.displayName);	
	};
}