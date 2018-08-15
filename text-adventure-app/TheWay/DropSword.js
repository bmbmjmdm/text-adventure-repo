import {TheWayData} from '../GameData.js';
import {IsSinner} from './IsSinner.js';
import {IsStruggling} from './IsStruggling.js';

//Dropping the sword pleases guardfour
export class DropSword {

	static createPage(that){
		TheWayData.GuardFour.Hostility -= 2;
		
		TheWayData.HasWeapon.Sword = false; 
		
		that.preparePage("You let the sword slide through your grip, banging and tumbling onto the floor. The guards look... surprised. They ease up, straighten their stance a bit, and lower their weapons though still hold them tight. \"It ne'er ends.\" \"That's what we get fer comin' down 'ere. Might a' well be a mop inste'a th'axe. Some'n gotta clean up th'mess a'sinners.\" The prisoners in the corner are gashed, bloody, tied. \"And wha' about you? Why're you 'ere?\" They turn to you with a bit of disgust in their eyes. That's a good question though, why are you here? Did you");
		that.preparePage("smuggle? ", IsStruggling);
		that.preparePage("Commit ");
		that.preparePage("blasphemy? ", IsSinner);
		that.preparePage("Are you an ");
		that.preparePage("escaped slave ", IsStruggling); 
		that.preparePage(" or perhaps ");
		that.preparePage("an adulterer?", IsSinner);
		
		
	}
	
}