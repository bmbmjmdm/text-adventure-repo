import {TheWayData} from '../GameData.js';
import {DieGuardFour} from './DieGuardFour.js';
import {Parry3GuardFour} from './Parry3GuardFour.js';
import {Strike3GuardFour} from './Strike3GuardFour.js';
import {Grapple3GuardFour} from './Grapple3GuardFour.js';


//Grapple for the second round, failure
export class Grapple2GuardFour {

	static createPage(that){
		TheWayData.Health -= 2;
		TheWayData.GuardFour.Health -= 1;
		
		that.preparePage("As the guard charges forward and comes down with his sword, you try to catch him by the wrist. Unfortunately the blade pushes past and slides down, splitting the inside of your hand open for 2 damage. At "+ TheWayData.Health+ " health you look at your palm in shock. ");
				
		//player died
		if(TheWayData.Health <= 0){
			DieGuardFour.createPage(that);
		}
		
		//player lives
		else{
			that.preparePage("You then remember there's no time for that, and in a fit of rage kick your leg back and knock the other guard off balance. You twist around and, with your good hand, knock him across the jaw for 1 damage. As he stumbles back, he looks past you, then nods. You turn around to see the other guard lunging towards you with arms stretched wide, the recently-punched guard yelling in a similar fashion behind you. Do you ");
			that.preparePage("grapple again?", Grapple3GuardFour);
			that.preparePage(" Or do you ");
			that.preparePage("parry", Parry3GuardFour);
			that.preparePage(" or ");
			that.preparePage("strike?", Strike3GuardFour);
		}
	}
	
}