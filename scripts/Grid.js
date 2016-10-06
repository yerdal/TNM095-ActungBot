let GridSection = require("./GridSection");
class Grid {
	constructor(gridSize, width, height) {
		this.size = gridSize;
		this.width = width;
		this.height = height;
		this.sections = [];
		this.initGrid();
	}
	initGrid() {
		for (let i = 0; i < this.size * this.size; i++) {

			this.sections.push(new GridSection());

		}

		let counter = 0;
		for(var y = 1; y <= this.size; y++){
			for (var x = 1; x <= this.size; x++) {
					// Calculate center positions for grid 0-8
					this.sections[counter].centerX = (this.width*x) / 2
					this.sections[counter].centerY = (this.height*y) / 2;
					counter++
			}
		}
	}
	getGridSection(index) {
		return this.grid[index];
	}
	getCurrentGridSection(position) {
		//While getting the current grid index we update the 
		//occupations on the grid.
		var index = -1;

		if(position.x <= this.width && position.y <= this.height){
			index = 0;
			this.sections[index].occupation++;
		}else if(position.x <= this.width*2 && position.y <= this.height){
			index = 1;
			this.sections[index].occupation++;
		}else if(position.x <= this.width*3 && position.y <= this.height){
			index = 2;
			this.sections[index].occupation++;
		}else if(position.x <= this.width && position.y <= this.height*2){
			index = 3;
			this.sections[index].occupation++;
		}else if(position.x <= this.width*2 && position.y <= this.height*2){
			index = 4;
			this.sections[index].occupation++;
		}else if(position.x <= this.width*3 && position.y <= this.height*2){
			index = 5;
			this.sections[index].occupation++;
		}else if(position.x <= this.width && position.y <= this.height*3){
			index = 6;
			this.sections[index].occupation++;
		}else if(position.x <= this.width*2 && position.y <= this.height*3){
			index = 7;
			this.sections[index].occupation++;
		}else if(position.x <= this.width*3 && position.y <= this.height*3){
			index = 8;
			this.sections[index].occupation++;
		}
		//console.log(this.sections);
		return index;
	}
	getGridSectionWithLeastOccupation() {
		var leastOccupiedGrid = this.sections[0];
		let leastGridIndex = 0;
		for (let i = 1; i < this.sections.length; i++){
			if(this.sections[i].occupation < leastOccupiedGrid.occupation){
				leastOccupiedGrid = this.sections[i];
				leastGridIndex = i;
			}
		}
		//console.log("leastOccupiedGrid", leastGridIndex);
		return leastGridIndex;
	}
	/*updateGridOccupation(position) {
		var counter = 0;
		firstLoop:
		for(var y = 1; y <= this.size; y++){
			for (var x = 1; x <= this.size; x++) {
				if(position.x < (this.width * x) && position.y < (this.height*y)){
					// add occupation for grid
					this.sections[counter].occupation++;
					break firstLoop;
				}
				counter++;
			}
		}
	}*/
}

module.exports = Grid;