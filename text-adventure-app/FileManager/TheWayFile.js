import {LevelFile} from './LevelFile.js';
import {TheWayData} from '../GameData.js';
import {setTheWayData} from '../GameData.js';

export class TheWayFile extends LevelFile{
	
	getName(){
		return "The Way";
	}
	
	saveData(that){
		this.data = JSON.stringify(TheWayData);
		this.loadFunction = "setTheWayData";
		this.nameSpace = "TheWay"
		this.saveState(that);
	}
	
	

}