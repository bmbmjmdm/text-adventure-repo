import {SettlingInData} from '../GameData.js';
import {HHSafe} from './HHSafe.js';
import {HHAmbush} from './HHAmbush.js';

//Refuse to enter the helping hand building / trap 
export class HHRefuse {

	static createPage(that){
		that.preparePage("You wave your hand and kindly refuse, \"Well that's a shame. Let me know if you change your mind, I'll be inside.\" You try to discuss the matter outside but he cuts you off, \"Sorry, too many prying ears around here.\" The man enters the building, which you spot as fairly empty from over his shoulder. The door closes heavily and you begin to walk away. You look back at the end of the block... after waiting a few minutes, you return to the odd man's building and, looking around, put an ear to the door. ");
		
		if(SettlingInData.Stealth >= 0){
			HHSafe.createPage(that);
		}
		else{
			HHAmbush.createPage(that);
		}
	}



static getName(){ return "HHRefuse"; }
}