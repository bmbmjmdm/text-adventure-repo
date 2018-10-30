import {LevelFile} from './LevelFile.js';
import {SettlingInData} from '../GameData.js';
import {setSettlingInData} from '../GameData.js';
import {FileManager} from './FileManager.js';


export class SettlingInFile extends LevelFile{
	
	getName(){
		return "Settling In";
	}
	
	saveData(that){
		this.data = FileManager.jsonWriter(SettlingInData);
		this.loadFunction = "setSettlingInData";
		this.nameSpace = "SettlingIn"
		this.saveState(that);
	}
	
	

}