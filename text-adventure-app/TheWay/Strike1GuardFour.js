import {TheWayData} from '../GameData.js';
import {DieGuardFour} from './DieGuardFour.js';
import {Parry2GuardFour} from './Parry2GuardFour.js';
import {Strike2GuardFour} from './Strike2GuardFour.js';
import {Grapple2GuardFour} from './Grapple2GuardFour.js';


//Strike for the first round, failure
export class Strike1GuardFour {

	static createPage(that){
		TheWayData.Health -= 2;
		
		that.preparePage("You bring up your dulled sword to clash with the guard's axe, then swing around to strike again at the guard behind you. Unfortunately he catches your sword with his own, twirls it to the side and chops into your side, dealing 2 damage. You have " + TheWayData.Health+" health. ");
		
		//player died
		if(TheWayData.Health <= 0){
			DieGuardFour.createPage(that);
		}
		
		//player lives
		else{
			that.preparePage("You watch the guard about to take another swing as you turn your head, seeing the axe behind you hover slowly in wait. Do you ");
			that.preparePage("strike again?", Strike2GuardFour);
			that.preparePage(" Or do you ");
			that.preparePage("parry", Parry2GuardFour);
			that.preparePage(" or ");
			that.preparePage("grapple?", Grapple2GuardFour);
		}
	}
	
}