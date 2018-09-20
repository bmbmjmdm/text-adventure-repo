import {GlobalData, YourWorldData} from '../GameData.js';
import {Levels} from '../Menus/Levels.js';
import {FileManager} from '../FileManager/FileManager.js'

//End the level
export class Explore {

	static async createPage(that){
		
		if(YourWorldData.Mother || YourWorldData.Son){
			GlobalData.TownRuinsUnlocked = true;
		}
		
		if(YourWorldData.FoulGuy || YourWorldData.SadGal){
			GlobalData.ForestUnlocked = true;
		}
		
		if(YourWorldData.BadassGal || YourWorldData.OldGuy){
			GlobalData.DesertUnlocked = true;
		}
		
		GlobalData.CityUnlocked = true;
		await FileManager.finishLevel(that, "YourWorld");
		Levels.createPage(that);
	}
	

static getName(){ return "Explore"; }
}