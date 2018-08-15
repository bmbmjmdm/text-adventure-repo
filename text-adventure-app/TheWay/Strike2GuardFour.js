import {TheWayData} from '../GameData.js';
import {DieGuardFour} from './DieGuardFour.js';
import {Parry3GuardFour} from './Parry3GuardFour.js';
import {Strike3GuardFour} from './Strike3GuardFour.js';
import {Grapple3GuardFour} from './Grapple3GuardFour.js';


//Strike for the second round, failure
export class Strike2GuardFour {

	static createPage(that){
		TheWayData.Health -= 2;
		
		that.preparePage("You clash swords with the guard and come close for a second before he pushes off. You use the momentum to swing around on the other guard but he blocks it with the handle of his axe and pushes your sword aside. He then chops across, cutting your gut for 2 damage. You have " + TheWayData.Health+" health as you see something protrude from your abdomen. That's not good. ");
		
		//player died
		if(TheWayData.Health <= 0){
			DieGuardFour.createPage(that);
		}
		
		//player lives
		else{
			that.preparePage("As blood funnels out of your belly you swivel your head in a panic. The guards are taking a hard stance and lowering themselves, preparing something, then suddenly lunge forward with arms stretched wide and eyes aglow. Do you ");
			that.preparePage("strike again?", Strike3GuardFour);
			that.preparePage(" Or do you ");
			that.preparePage("parry", Parry3GuardFour);
			that.preparePage(" or ");
			that.preparePage("grapple?", Grapple3GuardFour);
		}
	}
	
}