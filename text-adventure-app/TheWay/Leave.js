import {GlobalData} from '../GameData.js';
import {Levels} from '../HomePage/Levels.js';

//End the level
export class Leave {

	static createPage(that){
		GlobalData.Story3Unlocked = true;
		Levels.createPage(that);
	}
	
}