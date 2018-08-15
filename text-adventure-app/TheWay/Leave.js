import {TheWayData} from '../GameData.js';
import {Levels} from '../Levels.js';

//End the level
export class Leave {

	static createPage(that){
		GlobalData.Story3Unlocked = true;
		Levels.createPage(that);
	}
	
}