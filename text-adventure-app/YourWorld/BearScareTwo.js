import {BearSwing} from './BearSwing.js';
import {BearBlock} from './BearBlock.js';
import {YourWorldData} from '../GameData.js';

//Scare the bear as it stands closer, starting the fight
export class BearScareTwo {

	static createPage(that){
		var weapon = "sword";
		if(YourWorldData.HasAxe){
			weapon = "axe";
		}
		
		that.preparePage("You swing your "+weapon+" around in the air and yell at the top of your lungs. ");
		
		//alies help player scream
		if(YourWorldData.Allies > 0){
			if(YourWorldData.Allies > 1){
				that.preparePage("Voices call out ");
			}
			else{
				that.preparePage("A voice calls out ");
			}
			
			that.preparePage("behind you, warding off the bear with feverous barks. ");
		}
		
		that.preparePage("The bear's posture shifts and its teeth sprawl out over its gaping maw. It growls and roars back, angry, not scared, and charges forward a few steps before rearing up and swiping at you with tooth and claw. With your "+weapon+" in hand, do you ");
		
		that.preparePage("block", BearBlock);
		that.preparePage(" its assault or ");
		that.preparePage("swipe back?", BearSwing);
		
		
		
	}
		
	
}