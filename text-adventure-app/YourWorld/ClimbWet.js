import {ClimbFinalStretch} from './ClimbFinalStretch.js';
import {YourWorldData} from '../GameData.js';

//climb the wet path, failure
export class ClimbWet {

	static createPage(that){
		that.preparePage("You feel around the stone and can tell it's moist. Still, you find nooks here and there to jam your fingers, stressing them and scraping your feet desperately to cross the wet rock. You lick it. You lick it? Ew. Well, it feels nice on your tongue, like scraping it with a...with a rock. Other than that it doesn't do much to quench your thirst. Looks like this path was nothing but a hazard, and your arms won't stop complaining. Luckily you get past it, but now your hands slip on holds they shouldn't as you push forward. Seconds pass like centuries as you take extra care. ");
		
		ClimbFinalStretch.createPage(that);
 
	}


}