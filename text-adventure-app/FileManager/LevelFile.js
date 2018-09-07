

//this represents all the information needed to save a level. extend it and override ALL relevent functions for each level
export class LevelFile{
	//relevent data object in GameData
	data = "";
	//savable version of state.toShow in App
	screenState = "";
	//relevent function to set data object in GameData
	loadFunction = "";
	//folder name where this level's files are held, will also check top level by default
	nameSpace = "";
	
	//this MUST BE UNIQUE 
	getName(){
		return "";
	}
	
	saveData(that){
		
	}
	
	saveState(that){
		this.screenState = that.savableCopy;
	}
	
	

}