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
					this.sections[counter].centerX = (this.width*x) / 2;
					this.sections[counter].centerY = (this.height*y) / 2;
					this.sections[counter].index = counter;
					counter++
			}
		}
	}
	getGridSection(index) {
		return this.sections[index];
	}
	getCurrentGridSection(position) {
		//While getting the current grid index we update the 
		//occupations on the grid.
		var index = -1;
		var counter = 0;
		firstLoop:
		for(var y = 1; y <= this.size; y++){
			for (var x = 1; x <= this.size; x++) {
				/*console.log("pos x: " + position.x);
				console.log("ind x: " + this.width * x);
				console.log("pos y: " + position.y);
				console.log("ind y: " + this.height * y);*/
				if(position.x <= (this.width * x) && position.y <= (this.height*y)){
					//console.log("HEJSS");
					index = counter;
					break firstLoop;
				}
				counter++;
			}
		}
		return this.sections[index];
	}

	updateOccupation(){
			
	}

	getGridSectionWithLeastOccupation() {
		var leastOccupiedGrid = this.sections[0];
		let leastOccupiedArray = [];

		for (let i = 1; i < this.sections.length; i++){
			if(this.sections[i].occupation <= leastOccupiedGrid.occupation) {
				leastOccupiedArray.push(this.sections[i]);
				leastOccupiedGrid = this.sections[i];
			}
		}
		return leastOccupiedArray;
	}
}

module.exports = Grid;