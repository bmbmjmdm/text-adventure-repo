import {GlobalData, TheWayData} from '../GameData.js';
import {Levels} from '../Menus/Levels.js';
import {FileManager} from '../FileManager/FileManager.js'

//End the level
export class Leave {

	static async createPage(that){
		GlobalData.Story3Unlocked = true;
		await FileManager.finishLevel(that, "TheWay");
		Levels.createPage(that);
	}
	

static getName(){ return "Leave"; }
}