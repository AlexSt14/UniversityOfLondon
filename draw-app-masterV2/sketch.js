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

function setup() {
	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");
	pixelDensity(1);
	noSmooth();
	colorPicker = createColorPicker('deeppink');
	colorPicker.parent('#colorPicker')
	colorPicker.width = 200;
	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	colourP = new ColourPalette();
	scissors = new Scissors();
	editableShapes = new EditableShapes();
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
	toolbox.addTool(new EraserTool());
	toolbox.addTool(editableShapes);
	toolbox.addTool(scissors);
	toolbox.addTool(new BucketFilling());
	toolbox.addTool(new TextTool());
	background(255);

}

function draw() {
	//call the draw function from the selected tool
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	//but this will only run if the selected tool is not bucket filling, this is because
	//we do not need a draw function for bucket filling so theres no need for this function call
	if (!(toolbox.selectedTool.name === "bucketFilling")) {
		console.log(!(toolbox.selectedTool.name === "bucketFilling"))
		if (toolbox.selectedTool.hasOwnProperty("draw")) {
			toolbox.selectedTool.draw();
		}
		else {
			alert("it doesn't look like your tool has a draw method!");
		}
	}
}

function mousePressed() {
	if (toolbox.selectedTool.name === "scissorsTool") {
		scissors.mouseHasBeenPressed();
	}
	if (toolbox.selectedTool.name === "bucketFilling") {
		toolbox.selectedTool.mouseHasBeenPressed();
	}
	if (toolbox.selectedTool.name === "textTool") {
		toolbox.selectedTool.mouseHasBeenPressed();
	}
}
function mouseDragged() {
	if (toolbox.selectedTool.name === "scissorsTool") {
		scissors.mouseHasBeenDragged();
	}
}
function keyTyped() {
	if (toolbox.selectedTool.name === "textTool") {
		toolbox.selectedTool.keyTyped();
	}
}
function keyPressed() {
	if (toolbox.selectedTool.name === "textTool") {
		toolbox.selectedTool.keyPressed();
	}
}