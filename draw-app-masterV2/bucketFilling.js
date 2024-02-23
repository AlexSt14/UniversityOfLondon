//Tool that will use the floodFill algorithm for the bucket filling effect
function BucketFilling() {
    this.name = "bucketFilling";
    this.icon = "/assets/bucket.png";
    this.displayName = "Bucket Filling Tool";

    this.draw = function () {

    }
    this.mouseHasBeenPressed = function() {
        //checking if mouse press is on canvas before filling the shape
        if (mouseX < canvasContainer.size().width && mouseX > 0
        && mouseY < canvasContainer.size().height && mouseY > 0) {
            //getting the color object, transforming the color text into rgba
            var fillColor = color(colourP.selectedColour);
            //adding the alpha value to the levels array
            fillColor[3] = 255;
            //getting out the levels array only from the color object
            var levels = fillColor.levels;
            console.log(fillColor);
            //Calling the fill algorithm, passing an array of rgba values
            floodFill(createVector(mouseX,mouseY),[...levels])
        }
    }
    //This will clear the tool name from the canvas
    this.unselectTool = function() {
		updatePixels();
		//clear options
		select(".options").html("");
	};
     //adds the tool name
	this.populateOptions = function() {
        select(".options").html(this.displayName)        	
	};
}