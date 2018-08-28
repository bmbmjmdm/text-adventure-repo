import {BearHead} from './BearHead.js';
import {BearLegs} from './BearLegs.js';
import {YourWorldData} from '../GameData.js';
import {Levels} from '../Levels.js';

//block most of attack from bear 
export class BearBlock {

	static createPage(that){
		var weapon = "sword";
		if(YourWorldData.HasAxe){
			weapon = "axe";
		}
		
		YourWorldData.Health -= 1;
		
		that.preparePage("You tilt your "+weapon+" sideways and try to catch the bear's paw. The claws are held back but the sheer force as it impacts sends you flying back onto the ground. You take 1 damage and have "+YourWorldData.Health+" health. ");
		
		
		//dead
		if(YourWorldData.Health <= 0){
			that.preparePage("Your eyes blink slowly, the mesh of leaves covering the sky now blur. The light and sounds and world fades slowly, slowly, ");
			that.preparePage("slowly.", Levels);
		}
		
		//alive
		else{
			
			that.preparePage("You take hold of the "+weapon+" and use it to try and stand up. The bear roars and lumbers towards you, a rage burning in its voice. ");
			
			if(YourWorldData.BadassGal && YourWorldData.SharpRocks > 0){
				that.preparePage("Just then a stone cuts across the bear's cheek, knocking its jaw sideways and a growl from its lips. It takes 2 damage and you can hear the older woman's voice behind you, \"You got this!\" ");
				YourWorldData.BearHealth -= 2;
				YourWorldData.SharpRocks --;
			}
		
			else if (YourWorldData.Mother && YourWorldData.SharpRocks > 0){
				that.preparePage("Just then a stone cuts across the bear's cheek, knocking its jaw sideways and a growl from its lips. It takes 1 damage and you can hear the older woman's voice behind you, \"You got this!\" ");
				YourWorldData.BearHealth -= 1;
				YourWorldData.SharpRocks --;
			}
			
			that.preparePage("You get to your feet just in time to confront the beast snarling mere inches away. It thrashes its head out in a bite, aiming to eat you here and now. Your " + weapon+" feels heavy but willing, do you aim for its ");
			
			that.preparePage("head", BearHead);
			that.preparePage(" or its ");
			that.preparePage("legs", BearLegs);
			that.preparePage(" to knock it off balance?");
		}
		
		
		
	}
		
	
}