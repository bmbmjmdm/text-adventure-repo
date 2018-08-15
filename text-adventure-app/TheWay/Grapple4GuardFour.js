import {TheWayData} from '../GameData.js';
import {KillGuardFour} from './KillGuardFour.js'
import {DieGuardFour} from './DieGuardFour.js'


//Grapple for the fourth round, failure
export class Grapple4GuardFour {

	static createPage(that){
		TheWayData.Health -= 4;
		
		that.preparePage("As the guards get close, you prepare to grab their arms and pull them towards each other, maybe cause some friendly fire and avoid the hits yourself. Unfortunately their blows are too heavy and push past your attempt, slashing and goring you for 4 damage. You have " + TheWayData.Health+" health, but the blood's draining. ");
		
		if(TheWayData.Health <= 0){
			DieGuardFour.createPage(that);
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