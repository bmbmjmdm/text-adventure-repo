import {TheWayData} from '../GameData.js';
import {Parry3GuardFour} from './Parry3GuardFour.js';
import {Strike3GuardFour} from './Strike3GuardFour.js';
import {Grapple3GuardFour} from './Grapple3GuardFour.js';


//Parry for the second round, success
export class Parry2GuardFour {

	static createPage(that){
		TheWayData.GuardFour.Health -= 2;
		
		that.preparePage("As the guard charges towards you, your feet slide apart, prepared for his momentum and calculating where he'll land. The moment he's on you you drive your sword up, knock his out of the way, and sidestep. As you step, your elbow feints behind you, as if you're going to spin to slice the other guard. Instead, you step out of the way and let one guard fall into the other, who brings his own axe up to parry but instead chops into his friend, dealing 2 damage. The guard spits blood as he's helped up, pivots back into position, and nods. You then hear a yell erupt from either side of you as the men begin lunging forward, arms stretched wide. Do you ");
		that.preparePage("parry again?", Parry3GuardFour);
		that.preparePage(" Or do you ");
		that.preparePage("strike", Strike3GuardFour);
		that.preparePage(" or ");
		that.preparePage("grapple?", Grapple3GuardFour);
	}
	

static getName(){ return "Parry2GuardFour"; }
}