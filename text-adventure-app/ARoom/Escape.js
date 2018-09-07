import {GlobalData, ARoomData} from '../GameData.js';
import {Levels} from '../HomePage/Levels.js';
import {FileManager} from '../FileManager/FileManager.js'

//End the level
export class Escape {

	static async createPage(that){
		GlobalData.Story2Unlocked = true;
		await FileManager.finishLevel(that, "ARoom");
		Levels.createPage(that);
	}
	
}