import {FileManager} from '../FileManager/FileManager.js';
import {Levels} from './Levels';
import {Load} from './Load';

export class NewSave {

	//note the name difference, this is NOT meant to be called from the App onClick function
	static async checkForSaveFile(that, gameClass){
		//see if we have any previous saves of this level
		var savedGames = await FileManager.getFileNamesForLevel(gameClass.name);
		
		//we found a save file for this level, ask the user if they want to start a new one 
		if(savedGames.length > 0){
			that.preparePage("You already started this level, do you want to start over and erase your previous save files?\n\n");
			that.preparePage("Yes", {createPage:async(passed)=>{await NewSave.replaceSaveFile(passed, gameClass, savedGames)}});
			that.preparePage("\n\n");
			that.preparePage("No", Levels);
			that.preparePage("\n\n");
			that.preparePage("Load previous save file", Load);
		}
		
		//there is no old save of this game, proceed as normal 
		else{
			gameClass.createPage(that);
		}
		
	}
	
	
	//the user has decided to replace a previously saved game with a new one 
	static async replaceSaveFile(that, gameClass, savedGames){
		await FileManager.removePreviousSave(savedGames);
		gameClass.createPage(that);
	}


}