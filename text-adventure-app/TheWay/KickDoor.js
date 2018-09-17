import {TheWayData} from '../GameData.js';
import {KeepSword} from './KeepSword.js';
import {DropSword} from './DropSword.js';

//Kicking the door alarms the guards, making them more hostile.
export class KickDoor {

	static createPage(that){
		TheWayData.GuardFour.Hostility ++;
		
		that.preparePage("You take another breath and lift your leg up, then smash it forward throwing open the door. You see a room occupied by two guards, a bundle of tied-up prisoners in the corner, and wooden furnishing filled with various equipment and wares. There're lanterns overhead and across the room a large, metal doorway sealed with a gate. The guards look to you immediately, \"'Ey! The fack? What're you doin 'ere!?\" \"Cretin! Drop that sword at once, ya 'ere?\" They begin walking towards you slowly, one with a sword in hand, the other an axe. Do you ");	
		
		that.preparePage("drop your sword", DropSword);
		that.preparePage(" or ");
		that.preparePage("not?", KeepSword);
		
		//the player killed a guard before, they're bloody
		if(TheWayData.GuardOne.Health <= 0 ||
			TheWayData.GuardTwo.Health <= 0 ||
			TheWayData.GuardThree.Health <= 0){
			
			that.preparePage(" You do look quite suspicious holding it, blood smeared on your clothing from your recent murder...");
		}
		
		//the player freed some prisoners, the guards here look scruffed up
		if(TheWayData.PrisonersFreed > 0){
			that.preparePage(" You look up and down the guards and the battle-scarred room thrown askew. It looks like some of those prisoners you helped free put up a fight before getting captured (again).");
		}
		
	}
	
}