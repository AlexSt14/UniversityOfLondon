//This tool will provide ability for user to write text on canvas
function TextTool() {
    this.name = "textTool";
    this.icon = "/assets/text.png";
    this.displayName = "Text to Tool";

    this.isTyping = false;
    this.textInput = "";
    var textX = 0;
    var textY = 0;

    this.draw = function() {
        //This will draw the text on canvas where the user clicked
        textSize(32);
        text(this.textInput, textX, textY);
        //THIS NEEDS ADJUSTING FOR TYPING LINE AND BLINKING LINE IF POSSIBLE
        // if(this.isTyping) {
        //     if (frameCount % 60 < 30) {
        //         console.log(frameCount);
        //         line(textX, textY, textX, textY-textSize());
        //     }
        // }

        
    }
    this.mouseHasBeenPressed = function() {
        //Checking if mouse has been pressed on canvas before starting typing
        if (mouseX < canvasContainer.size().width && mouseX > 0
        && mouseY < canvasContainer.size().height && mouseY > 0) {
            this.textInput = "";
            this.isTyping = true;
            textX = mouseX;
            textY = mouseY;
        }
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
        select(".options").html(this.displayName)        	
	};
}