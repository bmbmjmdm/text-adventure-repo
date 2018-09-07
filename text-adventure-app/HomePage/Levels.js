import {ARoom} from '../ARoom/ARoom.js';
import {GlobalData} from '../GameData.js';
import {TheWay} from '../TheWay/TheWay.js';
import {YourWorld} from '../YourWorld/YourWorld.js';
import {NewSave} from './NewSave.js'
import {FileManager} from '../FileManager/FileManager.js';

export class Levels {

	static createPage(that){
		//setup the list of playable levels
		//if a level is not unlocked, it shows up but cannot be clicked
		//when a level is clicked, check to see if there is already a save file 
		//if so, ask if the user wants to erase the previous save and start a new one 
		//if not, just start a new one 
		
		//this line is to make sure we don't accidentily save the level page if the user dies in a level
		FileManager.clearLevelFile();
		
		that.preparePage("A Room\n\n", { createPage:async(passed)=>{await NewSave.checkForSaveFile(passed, ARoom)}});
		
		if(GlobalData.Story2Unlocked){
			that.preparePage("The Way\n\n",  {createPage:async(passed)=>{await NewSave.checkForSaveFile(passed, TheWay)}});
		}
		else{
			that.preparePage("The Way\n\n");
		}
		
		if(GlobalData.Story3Unlocked){
			that.preparePage("Your World",  { createPage:async(passed)=>{await NewSave.checkForSaveFile(passed, YourWorld)}});
		}
		else{
			that.preparePage("Your World");
		}
		
	}


}