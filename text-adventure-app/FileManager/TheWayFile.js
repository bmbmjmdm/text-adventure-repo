import {LevelFile} from './LevelFile.js';
import {TheWayData} from '../GameData.js';
import {setTheWayData} from '../GameData.js';
import {FileManager} from './FileManager.js';


export class TheWayFile extends LevelFile{
	
	getName(){
		return "The Way";
	}
	
	saveData(that){
		this.data = FileManager.jsonWriter(TheWayData);
		this.loadFunction = "setTheWayData";
		this.nameSpace = "TheWay"
		this.saveState(that);
	}
	

}