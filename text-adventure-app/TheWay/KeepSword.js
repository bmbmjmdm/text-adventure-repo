import {TheWayData} from '../GameData.js';
import {IsSinner} from './IsSinner.js';
import {IsStruggling} from './IsStruggling.js';

//Keeping the sword angers guardfour
export class KeepSword {

	static createPage(that){
		TheWayData.GuardFour.Hostility += 2;
		
		that.preparePage("Your hands hold the sword tight, your feet dig in. The guards halt a few feet before you and growl, \"You won't make it outa 'ere, ya know? You all keep comin' an' we keep strikin' ye down. It ne'er ends.\" \"That's what we get fer comin' down 'ere. Might a' well be a mop inste'a th'axe. Some'n gotta clean up th'mess a'sinners.\" The prisoners in the corner are gashed, bloody, tied. \"And wha' about you? Why're you 'ere?\" Their gaze doesn't leave you, or your sword. There's a bit of disgust in their eyes. That's a good question though, why are you here? Did you ");
		that.preparePage("smuggle? ", IsStruggling);
		that.preparePage("Commit ");
		that.preparePage("blasphemy? ", IsSinner);
		that.preparePage("Are you an ");
		that.preparePage("escaped slave ", IsStruggling); 
		that.preparePage(" or perhaps ");
		that.preparePage("an adulterer?", IsSinner);
		
		
	}
	

static getName(){ return "KeepSword"; }
}