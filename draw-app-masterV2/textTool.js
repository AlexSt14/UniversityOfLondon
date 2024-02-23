//This tool will provide ability for user to write text on canvas
function TextTool() {
    this.name = "textTool";
    this.icon = "/assets/text.png";
    this.displayName = "Text to Tool";

    this.isTyping = false;
    this.textInput = "";
    var textX = 0;
    var textY = 0;
    var lineX = 0;

    this.draw = function() {
        //This will draw the text on canvas where the user clicked
        //It will also update pixels every time the text size changes
        this.textSize.changed(this.deTyping);
        textSize(this.textSize.value());
        text(this.textInput, textX, textY);
        
    }
    this.mouseHasBeenPressed = function() {
        //Checking if mouse has been pressed on canvas before starting typing
        if (mouseX < canvasContainer.size().width && mouseX > 0
        && mouseY < canvasContainer.size().height && mouseY > 0) {
            //Resetting the textinput for every click on canvas, setting the typing variable to true and adjusting X and Y coordinates
            //Loading pixels after a click on canvas is required to prevent a bug when changing text size in mid typing, this is related to deTyping call
            loadPixels();
            this.textInput = "";
            this.isTyping = true;
            textX = mouseX;
            textY = mouseY;
            lineX = mouseX;
            select(".options2").html("<p>Press ENTER to end typing");
        }
    }
    //This function will update pixels after text size changed, this fixes an issue where the user would change the text size in mid typing
    //Visual effect is not so nice but it works
    this.deTyping = function() {
        console.log("Was hit"); //debugging
        updatePixels();
    }
    //This will be called from sketch once the p5 keytyped and keypressed functions are activated
    this.keyTyped = function() {
        if(this.isTyping) {
            this.textInput += key;
        }
    }
    this.keyPressed = function() {
        if (keyCode === RETURN) {
            this.isTyping = false;
            select(".options2").html("<p>Click on Canvas and start typing</p>");
        }
    }
    //This will clear the tool name from the canvas and will empty the textInput
    this.unselectTool = function() {
        this.textInput = "";
		//clear options
		select(".options").html("");
	};
     //adds the tool name
	this.populateOptions = function() {
        select(".options").html(this.displayName + "<p>Size</p>");   
        select(".options2").html("<p>Click on Canvas and start typing</p>");
        this.textSize = createSlider(25,100,30);       
		this.textSize.parent("#option1");
	};
}