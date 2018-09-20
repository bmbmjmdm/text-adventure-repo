import {TheWayData} from '../GameData.js';
import {Parry2GuardFour} from './Parry2GuardFour.js';
import {Strike2GuardFour} from './Strike2GuardFour.js';
import {Grapple2GuardFour} from './Grapple2GuardFour.js';


//Parry for the first round, success
export class Parry1GuardFour {

	static createPage(that){
		TheWayData.GuardFour.Health -= 2;
		
		that.preparePage("You take a breath in and duck a shoulder, bringing your blade between the axe and you. It catches beneath the head and you push it up into the air, throwing the guard off balance and his attack skyward. Coming down from the parry you slash across the guard's chest, dealing 2 damage. Just as his hand comes up to feel the wound and his axe steadies in front, preparing for a second assault, you turn around to see the other guard just now changing stance. With nothing to parry, he decides to lunge forward, hoping to catch you off guard you as you spin. Do you ");
		that.preparePage("parry again?", Parry2GuardFour);
		that.preparePage(" Or do you ");
		that.preparePage("strike", Strike2GuardFour);
		that.preparePage(" or ");
		that.preparePage("grapple?", Grapple2GuardFour);
	}
	

static getName(){ return "Parry1GuardFour"; }
}