//Displays and handles the colour palette.
function ColourPalette() {
	//a list of web colour strings
	this.colours = ["black", "silver", "gray", "white", "maroon", "red", "purple",
		"orange", "pink", "fuchsia", "green", "lime", "olive", "yellow", "navy",
		"blue", "teal", "aqua"
	];
	
	//make the start colour be black
	this.selectedColour = "black";

	var self = this;

	this.setSelectedColour = function(colour) {
		//checking if the provided colour is a text name or a color object
		if (typeof colour === 'string') {
			//if it's a text name, find the corresponding color
			var colorIndex = this.colours.indexOf(colour);
			if (colorIndex !== -1) {
				this.selectedColour = this.colours[colorIndex];
			}
		} else {
			if (typeof self.selectedColour === "string") {
				//remove the old border only if the previous color was a string
				var current = select("#" + self.selectedColour + "Swatch");
				current.style("border", "0");
			}
			//if it's a color object, directly set it
			this.selectedColour = colour;
		}
	
		fill(this.selectedColour);
		stroke(this.selectedColour);
		loadPixels(); // As mentioned in your code
		//this will reset the button and the fill state
		if (toolbox.selectedTool.name == "circleTool" || toolbox.selectedTool.name == "eraser" || toolbox.selectedTool.name == "rectangleTool"
			|| toolbox.selectedTool.name == "scissorsTool" || toolbox.selectedTool.name == "squareTool") {
			toolbox.selectedTool.unselectTool();
			toolbox.selectedTool.populateOptions();
			fillButtonState = true;			
		}	
	};
	var colourClick = function() {
		//checking if the provided colour is a text name or a color object
		if (typeof self.selectedColour === 'string') {
			//remove the old border
			var current = select("#" + self.selectedColour + "Swatch");
			current.style("border", "0");
		}
		
		//get the new colour from the id of the clicked element
		var c = this.id().split("Swatch")[0];

		//set the selected colour and fill and stroke
		self.setSelectedColour(c);
		
		//add a new border to the selected colour
		this.style("border", "2px solid blue");
	}

	//load in the colours
	this.loadColours = function() {
		//set the fill and stroke properties to be black at the start of the programme
		//running
		fill(this.colours[0]);
		stroke(this.colours[0]);

		//for each colour create a new div in the html for the colourSwatches
		for (var i = 0; i < this.colours.length; i++) {
			var colourID = this.colours[i] + "Swatch";

			//using JQuery add the swatch to the palette and set its background colour
			//to be the colour value.
			var colourSwatch = createDiv()
			colourSwatch.class('colourSwatches');
			colourSwatch.id(colourID);

			select(".colourPalette").child(colourSwatch);
			select("#" + colourID).style("background-color", this.colours[i]);
			colourSwatch.mouseClicked(colourClick)
		}
		//set the color according to the picker color
		colorPicker.input(function() {
			self.setSelectedColour(colorPicker.color());
			console.log(colorPicker.color());
		})
		select(".colourSwatches").style("border", "2px solid blue");
	};
	//call the loadColours function now it is declared
	this.loadColours();
}