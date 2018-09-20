import {TheWayData} from '../GameData.js';
import {DieGuardFour} from './DieGuardFour.js';
import {Parry2GuardFour} from './Parry2GuardFour.js';
import {Strike2GuardFour} from './Strike2GuardFour.js';
import {Grapple2GuardFour} from './Grapple2GuardFour.js';


//Grapple for the first round, failure
export class Grapple1GuardFour {

	static createPage(that){
		TheWayData.Health -= 2;
		TheWayData.GuardFour.Health -= 1;
		
		that.preparePage("You grab the wrist of the guard holding his sword, a look of shock in his eyes. You pull him closer and head butt him, sending him staggering back for a moment and dealing 1 damage. As you do, an axe chops into your shoulder from behind and deals 2 damage, leaving you with " + TheWayData.Health + " health. ");

				
		//player died
		if(TheWayData.Health <= 0){
			DieGuardFour.createPage(that);
		}
		
		//player lives
		else{
			that.preparePage("As you gasp and try to remain focused, the guard you just hit looks to be charging up to you, sword in hand. You catch a glimpse of the other guard in the reflection of that sword, and see him holding his axe firmly, waiting to see what you do. Do you ");
			that.preparePage("grapple again?", Grapple2GuardFour);
			that.preparePage(" Or do you ");
			that.preparePage("parry", Parry2GuardFour);
			that.preparePage(" or ");
			that.preparePage("strike?", Strike2GuardFour);
		}
	}
	

static getName(){ return "Grapple1GuardFour"; }
}