import {HornSurvival} from './HornSurvival.js';
import {HornMore} from './HornMore.js';
import {YourWorldData} from '../GameData.js';

//continue after spending the night in the cove by the horn 
export class RidgeShelterContinue {

	static createPage(that){
		that.preparePage("As you climb out of your cove, you see the clouds have past, and you gaze into the valley one last time. Crisp air fills the sunbathed dale where a prison lay in shambles; no wonder it couldn't hold you. The now distant trees and shrubs adorning your past are forggoten as you turn to face the horn. You can see it fully now: jetting into the air above the rest of the ridge, covered in snow and sudden falls, steep edges, a twisting tip of earth into the sky. Nowhere left to go but up. ");
		
		
		if(YourWorldData.OldGuy){
			
			that.preparePage("\"Aye bes get ta movin. My bum's about ta full off from sleepin on that floor.\" The old man rubs his behind next to you. He gives a smirk and shrug, looks off to the peak ahead and grows wide-eyed. ");
			
			if(YourWorldData.Son){
				that.preparePage("The young child laughs, presumably about the talk of butts. ");
			}
		}
		
		that.preparePage("You plunge cold feet into cold snow and begin hiking up. The sun on your back feels nice though doesn't make up for the brisk atmosphere, each breath a chill to your core. You rest frequently to warm your feet in the sun, taking refuge on rocks jetting up through the white. You have to shield your eyes from the reflective glow. As you push onward, acutely aware of your body's struggle, you begin wondering why you do this. Could it be just for ");
		that.preparePage("survival?", HornSurvival);
		that.preparePage(" Afterall you're only human, driven by instinct and the will to live. Every prospect of adventure beyond this mountain, even the beauty you've found in this valley, all of it could be a byproduct of your animal nature, nothing more. Or is it? Do you believe in ");
		that.preparePage("something more?", HornMore);
		that.preparePage(" Perhaps some kind of meaning beyond such confined terms.");
	}

}


