import {ARoom} from '../ARoom/ARoom.js';
import {GlobalData} from '../GameData.js';
import {TheWay} from '../TheWay/TheWay.js';
import {YourWorld} from '../YourWorld/YourWorld.js';
import {NewSave} from './NewSave.js'
import {FileManager} from '../FileManager/FileManager.js';

export class PrisonLevel {

	static createPage(that){
		//setup the list of playable levels
		//if a level is not unlocked, it shows up but cannot be clicked
		//when a level is clicked, check to see if there is already a save file 
		//if so, ask if the user wants to erase the previous save and start a new one 
		//if not, just start a new one 
		
		that.preparePage("A Room\n\n", { createPage:async(passed)=>{await NewSave.checkForSaveFile(passed, "ARoom", ARoom)}});
		
		if(GlobalData.Story2Unlocked){
			that.preparePage("The Way\n\n",  {createPage:async(passed)=>{await NewSave.checkForSaveFile(passed, "TheWay", TheWay)}});
		}
		else{
			that.preparePage("The Way\n\n");
		}
		
		if(GlobalData.Story3Unlocked){
			that.preparePage("Your World",  { createPage:async(passed)=>{await NewSave.checkForSaveFile(passed, "YourWorld", YourWorld)}});
		}
		else{
			that.preparePage("Your World");
		}
		
	}


}