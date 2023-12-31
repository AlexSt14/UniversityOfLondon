//A tool for drawing vertices shapes and then edit them if needed
//global variables needed for editableShapes
var editMode = false;
var currentShape = [];

function EditableShapes() {
    this.name = "Editable Shapes";
    this.icon = "/assets/resize.svg";
    this.editButton = createButton('Edit Shape');
    this.finishButton = createButton('Finish Shape');
    var self = this; //Saving the editableShape "this" reference
    
    loadPixels(); //This will help prevent saving the drawing until we click finish shape
    
        this.finishButton.mousePressed(function() { 
            if(!editMode) {       
                loadPixels();
                currentShape = [];
            }
            else {
                alert("Make sure to press on Add Vertices button again before finishing the shape")
            }
        });    
    
    this.editButton.mousePressed(function() {
        if(editMode) {
            editMode = false;
            self.editButton.html('Edit Shape');
        }
        else {
            editMode = true;
            self.editButton.html('Add Vertices');
        }
    });
    //This will draw the vertices 
    this.draw = function() {
        noFill();
        updatePixels();
            if(this.mousePressOnCanvas(c) && mouseIsPressed) {
                if (!editMode) {
                    currentShape.push({
                        x: mouseX,
                        y: mouseY
                    });
                }
                else {
                    for (var i = 0; i < currentShape.length; i++) {
                        if (dist(currentShape[i].x, currentShape[i].y,mouseX,mouseY) < 35) {
                            currentShape[i].x = mouseX;
                            currentShape[i].y = mouseY;
                        }
                    }
                }
            }
        beginShape();
        for (var i = 0; i < currentShape.length; i++) {
            vertex(currentShape[i].x, currentShape[i].y);
            if (editMode) {
                ellipse(currentShape[i].x,currentShape[i].y,30);
            }
        }
        endShape();
    }
    //This will return a boolean based on where the user presses the mouse
    this.mousePressOnCanvas = function() {
        if (mouseX < canvasContainer.size().width && mouseX > 0
        && mouseY < canvasContainer.size().height && mouseY > 0) {
            return true;
        }
        return false;
    }
     //This will clear the button from the canvas when editableShapes is unselected
    this.unselectTool = function() {
		updatePixels();
		//clear options
		select(".options2").html("");
	};
     //adds a button
	this.populateOptions = function() {
        select(".options2").html("<p>Editable Shapes</p>")        
		this.finishButton.parent("#optionsSize");	
        this.editButton.parent("#optionsSize");	
	};
}