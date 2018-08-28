import {BearRun} from './BearRun.js';
import {BearStand} from './BearStand.js';
import {YourWorldData} from '../GameData.js';

//yell at the bear, wont scare it and will miss out on a free hit 
export class BearScare {

	static createPage(that){
		var weapon = "sword";
		if(YourWorldData.HasAxe){
			weapon = "axe";
		}
		
		that.preparePage("You wave your " + weapon + " in the air and make yourself look big. "); 
		
		that(YourWorldData.FoulGuy){
			that.preparePage("You see the pudgy, foul man standing tall out of the corner of your eye. He... doesn't look very serious. That's wierd. ");
		}
		
		that.preparePage("You let out a bellowing scream that feels refreshingly primative and the bear's head targets you. Suddenly you're face to face with the thing and it stands up to match your size in kind. That's... that's big. That's a grizzly. They do not look happy to see you. They charge, shit, galloping on four meaty paws with knives for nails. Do you ");
		that.preparePage("run", BearRun);
		that.preparePage(" or ");
		that.preparePage("stand your ground?", BearStand);
		
	}
		
	
}