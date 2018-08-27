import {TheWayData} from '../GameData.js';
import {KillGuardFour} from './KillGuardFour.js'
import {DieGuardFour} from './DieGuardFour.js'


//Parry for the fourth round, success
export class Parry4GuardFour {

	static createPage(that){
		TheWayData.GuardFour.Health -= 4; 
		
		that.preparePage("You leap off a foot and catch the guard's sword with your own. You pivot around him and push your swords downward, then put a hand on his back and send him stumblind towards his friend. The other guard's axe catches him in the chest for 2 damage, then you swing back around and stab that guard on his side for 2 damage of his own. ");
		
		if(TheWayData.GuardFour.Health <= 0){
			KillGuardFour.createPage(that);
		}
		
		else{
			//randomly decide who lives. whoever has more health gets 10% better odds per point
			//lower is better for the player
			var modifier = TheWayData.GuardFour.Health - TheWayData.Health; 
			
			modifier = modifier/20;
			
			var random = Math.random();
			
			random = random + modifier;
			
			//player dies
			if(random >= 0.5){
				that.preparePage("You feel your wounds cringe from the stress and start hemorrhaging. ");
				DieGuardFour.createPage(that);
			}
			
			//guard dies
			else{
				that.preparePage("The guards caugh up blood and you can tell their bodies can't take the stress. ");
				DieGuardFour.createPage(that);
			}	
		}
	}
	
}