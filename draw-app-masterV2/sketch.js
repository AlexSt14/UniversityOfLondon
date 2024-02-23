//global variables that will store the toolbox colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;
var circleTool = null;
var circleImg;
var stampTool;
var colorPicker;
var scissors;
//needed to control the fill/unfill button of circleTool
var fillButtonState; 
var c;

function preload() {
	circleImg = loadImage("./assets/amongus.png");
	stampTool = new StampTool();
	stampTool.image = loadImage("./assets/amongus.png");
}

function setup() {
	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");
	
	colorPicker = createColorPicker('deeppink');
	colorPicker.parent('#colorPicker')
	colorPicker.width = 200;
	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	colourP = new ColourPalette();
	scissors = new Scissors();
	fillButtonState = false;
	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	colorMode(RGB);
	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new mirrorDrawTool());
	toolbox.addTool(new CircleTool());
	toolbox.addTool(new SquareTool());
	toolbox.addTool(new RectangleTool());
	toolbox.addTool(stampTool);
	toolbox.addTool(new EraserTool());
	toolbox.addTool(new EditableShapes());
	toolbox.addTool(scissors);
	background(255);

}

function draw() {
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}	
	
	
}
function keyPressed(){  
	if (keyCode == 71){
		//getting the color object, transforming the color text into rgba
		var fillColor = color(colourP.selectedColour);
		//adding the alpha value to the levels array
		fillColor[3] = 255;
		//getting out the levels array only from the color object
		var levels = fillColor.levels;
		console.log(fillColor);
		
	  	floodFill(createVector(mouseX,mouseY),[...levels])
	}  
}
function mousePressed() {
	if (toolbox.selectedTool.name === "scissorsTool") {
		scissors.mouseHasBeenPressed();
	}
}
function mouseDragged() {
	if (toolbox.selectedTool.name === "scissorsTool") {
		scissors.mouseHasBeenDragged();
	}
}