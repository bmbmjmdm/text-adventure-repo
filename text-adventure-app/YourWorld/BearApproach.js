import {BearSwipe} from './BearSwipe.js';
import {BearBlock} from './BearBlock.js';
import {YourWorldData} from '../GameData.js';

//walk up to bear, causing him to get defensive and attack
export class BearApproach {

	static createPage(that){
		var weapon = "sword";
		if(YourWorldData.HasAxe){
			weapon = "axe";
		}
		
		
		that.preparePage("You walk towards the bear slowly, "+weapon+" at the ready, holding your free hand out and hoping it finds that inviting. It eyes it, you, susipiciously and begins to back up. It looks around again and doesn't see any easy path around, gets scared, and rears up. The bear lets out a roar that sends birds into flight and the hairs on your neck raise. You watch it lunge forward and swipe out a claw, its teeth not far behind, and your hopes for a bear companion suddenly shatter. You still have your "+weapon+" at least. Do you use it to ");
		that.preparePage("block", BearBlock);
		that.preparePage(" or ");
		that.preparePage("attack?", BearSwipe);
		
		
	}
		
	
}