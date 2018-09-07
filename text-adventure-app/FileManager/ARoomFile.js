import {LevelFile} from './LevelFile.js';
import {ARoomData} from '../GameData.js';
import {setARoomData} from '../GameData.js';
import {FileManager} from './FileManager.js';

export class ARoomFile extends LevelFile{
	
	getName(){
		return "A Room";
	}
	
	saveData(that){
		this.data = FileManager.jsonWriter(ARoomData);
		this.loadFunction = "setARoomData";
		this.nameSpace = "ARoom"
		this.saveState(that);
	}
	
	

}