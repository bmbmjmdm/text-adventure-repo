import {TheWayData} from '../GameData.js';
import {KillGuardFour} from './KillGuardFour.js'
import {DieGuardFour} from './DieGuardFour.js'


//Strike for the fourth round, neutral
export class Strike4GuardFour {

	static createPage(that){
		
		that.preparePage("As the guards swing on either side of you, you let out a blood-thirsty cry that might be your last, swinging in every direction as fast as humanly possible. Your eyes are closed but you can feel the sword clash with metal and hear the dings and twangs of chaos around you. When your eyes open, the guards stand still on either side. ");
		
		//whoever has more health wins, tie going to player
			
		//player dies
		if(TheWayData.GuardFour.Health > TheWayData.Health){
			that.preparePage("You feel your lesions cringe from the stress and start hemorrhaging. ");
			DieGuardFour.createPage(that);
		}
		
		//guard dies
		else{
			that.preparePage("They begin coughing up blood and you can tell their bodies can't take the stress. ");
			KillGuardFour.createPage(that);
		}			
		
		
		
	}
	
}