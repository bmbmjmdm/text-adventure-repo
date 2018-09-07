import {LevelFile} from './LevelFile.js';
import {YourWorldData} from '../GameData.js';
import {setYourWorldData} from '../GameData.js';
import {FileManager} from './FileManager.js';


export class YourWorldFile extends LevelFile{
	
	getName(){
		return "Your World";
	}
	
	saveData(that){
		this.data = FileManager.jsonWriter(YourWorldData);
		this.loadFunction = "setYourWorldData";
		this.nameSpace = "YourWorld"
		this.saveState(that);
	}
	
	

}