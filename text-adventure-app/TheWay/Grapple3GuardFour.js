import {TheWayData} from '../GameData.js';
import {Parry4GuardFour} from './Parry4GuardFour.js';
import {Strike4GuardFour} from './Strike4GuardFour.js';
import {Grapple4GuardFour} from './Grapple4GuardFour.js';


//Grapple for the third round, neutral
export class Grapple3GuardFour {

	static createPage(that){
		
		that.preparePage("The guards catch up to you as you toss your sword into the air. You see their movement, it's predictable. This should only take a second. You use your free hands to grab each of them by the wrist as they come in, you pull them closer, and then duck beneath the both of them. The guards scramble to not crash and then scuttle backwards to not be skewered by the dropping sword. You reach a hand out and catch it by the hilt just in time as they clear the way, all according to plan. This flashy show only upsets them though. They don't intend to let God down by watching you escape. The guards let out a roar as they hop around you, clutching their weapons and eventually coming down with the force of reckoning thunder. Do you ");
		that.preparePage("grapple again?", Grapple4GuardFour);
		that.preparePage(" Or do you ");
		that.preparePage("parry", Parry4GuardFour);
		that.preparePage(" or ");
		that.preparePage("strike?", Strike4GuardFour);
		
	}
	

static getName(){ return "Grapple3GuardFour"; }
}