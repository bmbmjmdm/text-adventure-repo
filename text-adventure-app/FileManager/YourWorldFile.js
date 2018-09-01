import {LevelFile} from './LevelFile.js';
import {YourWorldData} from '../GameData.js';
import {setYourWorldData} from '../GameData.js';

export class YourWorldFile extends LevelFile{
	
	getName(){
		return "Your World";
	}
	
	saveData(that){
		this.data = JSON.stringify(YourWorldData);
		this.loadFunction = "setYourWorldData";
		this.nameSpace = "YourWorld"
		this.saveState(that);
	}
	
	

}