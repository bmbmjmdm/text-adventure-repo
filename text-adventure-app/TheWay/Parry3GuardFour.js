import {TheWayData} from '../GameData.js';
import {DieGuardFour} from './DieGuardFour.js';
import {Parry4GuardFour} from './Parry4GuardFour.js';
import {Strike4GuardFour} from './Strike4GuardFour.js';
import {Grapple4GuardFour} from './Grapple4GuardFour.js';


//Parry for the third round, failure
export class Parry3GuardFour {

	static createPage(that){
		TheWayData.Health -= 2;
		
		that.preparePage("You raise your sword in anticipation, waiting to see what the two guards do with their weapons when- your sword is pulled aside, a fist makes mince of your face, and your off arm is bent at an agonizing angle. You take 2 damage and have " + TheWayData.Health + " health. ");
		
		//player died
		if(TheWayData.Health <= 0){
			DieGuardFour.createPage(that);
		}
		
		//player lives
		else{
			that.preparePage("They then release you and regrip their weapons, letting out a cry of battle as they bring them down on you to finish the job. Do you ");
			that.preparePage("parry again?", Parry4GuardFour);
			that.preparePage(" Or do you ");
			that.preparePage("strike", Strike4GuardFour);
			that.preparePage(" or ");
			that.preparePage("grapple?", Grapple4GuardFour);
		}
	}
	

static getName(){ return "Parry3GuardFour"; }
}