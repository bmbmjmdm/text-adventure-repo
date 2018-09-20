import {GlobalData} from '../GameData.js';
import {PrisonLevel} from './PrisonLevel.js';
import {ComingSoon} from './ComingSoon.js';
import {FileManager} from '../FileManager/FileManager.js';

//display all level containers available 
export class Levels {

	static createPage(that){
		
		if(GlobalData.CityUnlocked){
			
			that.preparePage("Naeris Prison - The Escape\n\n", PrisonLevel);
			
			that.preparePage("City of Xanaphia - Rogue Rumors\n\n", ComingSoon);
			
			if(GlobalData.ForestUnlocked){
				that.preparePage("Sariel Forest - Grove Secrets\n\n", ComingSoon);
			}
			else{
				that.preparePage("Sariel Forest - Grove Secrets\n\n");
			}
			
			if(GlobalData.TownRuinsUnlocked){
				that.preparePage("Hatae Village - Empire Occupation\n\n", ComingSoon);
			}
			else{
				that.preparePage("Hatae Village - Empire Occupation\n\n");
			}
			
			if(GlobalData.DesertUnlocked){
				that.preparePage("Erdan Desert - Reptilian Grave\n\n", ComingSoon);
				
			}
			else{
				that.preparePage("Erdan Desert - Reptilian Grave\n\n");
			}
			
			if(GlobalData.VolcanoUnlocked){
				that.preparePage("Mount Drusilia - Volcanic Summit\n\n", ComingSoon);
			}
			else{
				that.preparePage("Mount Drusilia - Volcanic Summit\n\n");
			}
			
		}
		
		
		//player hasn't completed the first level container PrisonLevel, so just display those content for now as it is the intro level
		//and we want to hide the others to surprise the player when they complete it 
		else{
			PrisonLevel.createPage(that);
		}
		
		
	}

	
static getName(){
	return "Levels";
}

}