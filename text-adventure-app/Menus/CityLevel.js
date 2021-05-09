import {SettlingIn} from '../SettlingIn/SettlingIn.js';
import {GlobalData} from '../GameData.js';
import {NewSave} from './NewSave.js'
import {FileManager} from '../FileManager/FileManager.js';

export class CityLevel {

	static createPage(that){
		//setup the list of playable levels
		//if a level is not unlocked, it shows up but cannot be clicked
		//when a level is clicked, check to see if there is already a save file 
		//if so, ask if the user wants to erase the previous save and start a new one 
		//if not, just start a new one 
		
		that.preparePage("Settling In\n\n", { createPage:async(passed)=>{await NewSave.checkForSaveFile(passed, "SettlingIn", SettlingIn)}});
		
		if(GlobalData.Story5Unlocked){
			that.preparePage("Hunter and Hunted\n\n", ComingSoon);
		}
		else{
			that.preparePage("Hunter and Hunted\n\n");
		}
		
		if(GlobalData.Story6Unlocked){
			that.preparePage("Friends and Foes\n\n", ComingSoon);
		}
		else{
			that.preparePage("Friends and Foes");
		}
		
	}


}