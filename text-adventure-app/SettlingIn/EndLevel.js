import {GlobalData} from '../GameData.js';
import {Levels} from '../Menus/Levels.js';
import {FileManager} from '../FileManager/FileManager.js'

//end the level and return to menu 
export class EndLevel {

	static async createPage(that){
		GlobalData.Story5Unlocked = true;
		await FileManager.finishLevel(that, "SettlingIn");
		Levels.createPage(that);
	
	}



static getName(){ return "EndLevel"; }
}