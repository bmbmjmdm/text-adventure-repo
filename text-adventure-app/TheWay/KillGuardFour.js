import {TheWayData} from '../GameData.js';
import {Leave} from './Leave.js';
import {FreePrisonersEnd} from './FreePrisonersEnd.js';

//the guards are killed 
export class KillGuardFour {

	static createPage(that){
		TheWayData.HasWeapon.Axe = true; 
		TheWayData.GuardFour.Health = 0;
		
		that.preparePage("The guards clutch their wounds and say their final prayers, staggering around the room and trailing blood around the already filthy abode. The room grows silent after they collapse, and in this moment you wonder what judgement awaits you in the afterlife. The blood on your clothes, hands, sword and all is chilling. You see the prisoners bound in the corner still, at least you can now ");
		that.preparePage("release them", FreePrisonersEnd);
		that.preparePage(" and regain some morality. But there's no need, just the feint whines and shallow breaths that intice you to sleep better at night. As you ponder this, you pick up the axe from the slain guardsman. It's heavy, but looks useful. You gather a strap from the shelves and attach it to your back. You also find a small bag that'll be useful for storing things, should you find any. The metal gate at the end of this room is hooked up to a rotating pully system. It should be easy enough to use, if you want to ");
		that.preparePage("leave.", Leave);
	}
	
}