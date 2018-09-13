import {TheWayData} from '../GameData.js';
import {KillGuardFour} from './KillGuardFour.js'
import {DieGuardFour} from './DieGuardFour.js'


//Grapple for the fourth round, failure
export class Grapple4GuardFour {

	static createPage(that){
		TheWayData.Health -= 4;
		
		that.preparePage("As the guards get close, you prepare to grab their arms and pull them towards each other, maybe cause some friendly fire and avoid the hits yourself. Unfortunately their blows are too heavy and push past your attempt, slashing and goring you for 4 damage. You have " + TheWayData.Health+" health, but the blood's draining. ");
		
		//player dies
		if(TheWayData.Health <= 0){
			DieGuardFour.createPage(that);
		}
		
		//player lives
		else{
			//whoever has more health wins, tie going to player
			
			//player dies
			if(TheWayData.GuardFour.Health > TheWayData.Health){
				that.preparePage("You feel your wounds cringe from the stress and start hemorrhaging. ");
				DieGuardFour.createPage(that);
			}
			
			//guard dies
			else{
				that.preparePage("Just then the two guards begin coughing up blood and you can tell their bodies can't take the stress. ");
				KillGuardFour.createPage(that);
			}	
		}
	}
	
}