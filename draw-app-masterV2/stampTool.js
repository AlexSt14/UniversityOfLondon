function StampTool() {
    this.icon = "./assets/stamp.png";
    this.image;
    this.name = "StampTool"
    this.imageWidth = 40;              

    this.draw = function() {
        if(mouseIsPressed) {
            image(this.image, mouseX - this.imageSizeSlider.value()/2, mouseY - this.imageSizeSlider.value()/2, this.imageSizeSlider.value(), this.imageSizeSlider.value());
        }
    }
    //This will clear the slider from the canvas when stampTool is unselected
    this.unselectTool = function() {
        loadPixels();
		updatePixels();
		//clear options2
		select("#optionsSize").html("");
	};
     //adds a slider to the options area. When interacted with, changes the width of the image
	this.populateOptions = function() {
        select(".options2").html("<p>Stamp image size</p>")     
        this.imageSizeSlider = createSlider(35,80,45);   
		this.imageSizeSlider.parent("#optionsSize");		
	};
}