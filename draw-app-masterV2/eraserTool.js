function EraserTool() {
    this.name = "eraser";
    this.icon = "./assets/eraser.png";   
    this.eraserX;
    this.eraserY;     
        
    this.draw = function() {  
        fill(255);
        noStroke();    
        if (mouseIsPressed) {            
            ellipse(mouseX,mouseY,this.eraserWidth.value());
        }        
    }
     //This will clear the slider from the canvas when eraser is unselected
     this.unselectTool = function() {
        loadPixels();
		updatePixels();
		//clear options2
		select("#optionsSize").html("");
	};
     //adds a slider to the options area. When interacted with, changes the width of the image
	this.populateOptions = function() {
        select(".options2").html("<p>Eraser Width</p>") 
        this.eraserWidth = createSlider(10,60,20);       
		this.eraserWidth.parent("#optionsSize");		
	};
}