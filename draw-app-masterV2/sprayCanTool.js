//Spray can tool
function SprayCanTool(){
	
	this.name = "sprayCanTool";
	this.icon = "assets/sprayCan.jpg";
	this.displayName = "Spray Can Tool";

	var points = 13;
	var spread = 10;

	this.draw = function(){
		var r = random(5,10);
		if(mouseIsPressed){
			for(var i = 0; i < points; i++){
				point(random(mouseX-spread, mouseX + spread), random(mouseY-spread, mouseY+spread));
			}
		}
	};
	//This will clear the tool name
    this.unselectTool = function() {
		updatePixels();
		//clear options
        select(".options").html("");
	};
     //adds the tool name
	this.populateOptions = function() {
        select(".options").html(this.displayName);
	};
}